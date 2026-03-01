import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";
import { getInsforgeServerClient } from "@/lib/insforge/server";

const ALLOWED_AVATAR_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const ALLOWED_RESUME_TYPES = ["application/pdf"];
const MAX_AVATAR_SIZE = 5 * 1024 * 1024; // 5MB
const MAX_RESUME_SIZE = 10 * 1024 * 1024; // 10MB

export async function POST(request: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const type = formData.get("type") as string | null;

    if (!file || !type) {
      return Response.json({ error: "File and type are required" }, { status: 400 });
    }

    if (type !== "avatar" && type !== "resume") {
      return Response.json({ error: "Type must be 'avatar' or 'resume'" }, { status: 400 });
    }

    // Validate file type and size
    if (type === "avatar") {
      if (!ALLOWED_AVATAR_TYPES.includes(file.type)) {
        return Response.json({ error: "Invalid image format. Use JPEG, PNG, WebP, or GIF." }, { status: 400 });
      }
      if (file.size > MAX_AVATAR_SIZE) {
        return Response.json({ error: "Image must be under 5MB" }, { status: 400 });
      }
    } else {
      if (!ALLOWED_RESUME_TYPES.includes(file.type)) {
        return Response.json({ error: "Only PDF files are accepted" }, { status: 400 });
      }
      if (file.size > MAX_RESUME_SIZE) {
        return Response.json({ error: "Resume must be under 10MB" }, { status: 400 });
      }
    }

    const client = getInsforgeServerClient();
    const bucketName = type === "avatar" ? "avatars" : "resumes";
    const ext = file.name.split(".").pop() || (type === "avatar" ? "jpg" : "pdf");
    const path = `${userId}/${Date.now()}.${ext}`;

    const { data, error } = await client.storage
      .from(bucketName)
      .upload(path, file);

    if (error || !data) {
      console.error("Upload error:", error);
      return Response.json({ error: "Upload failed" }, { status: 500 });
    }

    const url = data.url;

    // Update profile with the URL
    const updateField = type === "avatar" ? "avatar_url" : "resume_url";
    await db("profiles")
      .update({ [updateField]: url })
      .eq("user_id", userId);

    return Response.json({ url });
  } catch (err) {
    console.error("Upload error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
