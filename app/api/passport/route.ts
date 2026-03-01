import { NextResponse } from "next/server";
import { auth } from "@insforge/nextjs";
import { db } from "@/lib/db";
import { INITIAL_SKILLS } from "@/data/skills";

function generateSlug(): string {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let slug = "";
  for (let i = 0; i < 10; i++) {
    slug += chars[Math.floor(Math.random() * chars.length)];
  }
  return slug;
}

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parallel fetch: profile, passport, roadmap, discovery
    const [profileRes, passportRes, roadmapRes, discoveryRes] = await Promise.all([
      db("profiles").select("*").eq("user_id", userId).single(),
      db("skill_passports").select("*").eq("user_id", userId).single(),
      db("roadmaps").select("id, current_week, total_weeks").eq("user_id", userId).eq("status", "active").single(),
      db("discovery_sessions").select("extracted_traits").eq("user_id", userId).eq("status", "completed").order("completed_at", { ascending: false }).limit(1).single(),
    ]);

    const profile = profileRes.data;
    if (!profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    // Create passport if needed
    let passport = passportRes.data;
    if (!passport) {
      const { data: newPassport } = await db("skill_passports")
        .insert({
          user_id: userId,
          role_id: profile.current_role_id,
          skills_verified: [],
          projects_completed: [],
          total_score: 0,
          is_public: true,
          public_slug: generateSlug(),
        })
        .select("*")
        .single();
      passport = newPassport;
    }

    // Parallel fetch: tasks + role (depend on profile/roadmap)
    const roadmap = roadmapRes.data;
    const [tasksRes, roleRes] = await Promise.all([
      roadmap
        ? db("daily_tasks").select("title, task_type, status").eq("roadmap_id", roadmap.id)
        : Promise.resolve({ data: null }),
      profile.current_role_id
        ? db("roles").select("name, slug, key_skills").eq("id", profile.current_role_id).single()
        : Promise.resolve({ data: null }),
    ]);

    let completionPercent = 0;
    let completedProjects: string[] = [];
    const tasks = tasksRes.data;

    if (tasks) {
      const completed = tasks.filter((t: { status: string }) => t.status === "completed");
      completionPercent = Math.round(
        (completed.length / Math.max(tasks.length, 1)) * 100
      );
      completedProjects = completed
        .filter((t: { task_type: string }) => t.task_type === "project")
        .map((t: { title: string }) => t.title);
    }

    const roleName = roleRes.data?.name || "Web3 Professional";
    const roleSkills: string[] = roleRes.data?.key_skills || [];

    // Build skill nodes from role skills
    const skillNodes = roleSkills.map((skillName: string, i: number) => {
      const proficiency = Math.min(
        Math.round((completionPercent / 100) * (100 - i * 5)),
        100
      );
      return {
        id: `skill-${i}`,
        name: skillName,
        category: "domain",
        proficiency: Math.max(proficiency, 0),
        status:
          proficiency >= 80
            ? "completed"
            : proficiency > 0
              ? "in_progress"
              : "locked",
      };
    });

    // Add general skills only if role doesn't have enough
    const roleSkillNames = new Set(roleSkills.map((s: string) => s.toLowerCase()));
    const extraSkills = INITIAL_SKILLS
      .filter((s) => !roleSkillNames.has(s.name.toLowerCase()))
      .slice(0, Math.max(0, 8 - roleSkills.length));

    const generalSkills = extraSkills.map((s, i) => ({
      id: `general-${i}`,
      name: s.name,
      category: s.category,
      proficiency: Math.max(
        Math.round((completionPercent / 100) * (80 - i * 8)),
        0
      ),
      status:
        completionPercent > (i + 1) * 10
          ? i < 3
            ? "completed"
            : "in_progress"
          : "locked",
    }));

    const res = NextResponse.json({
      passport: {
        id: passport?.id,
        is_public: passport?.is_public ?? true,
        public_slug: passport?.public_slug,
        total_score: passport?.total_score || 0,
      },
      profile: {
        full_name: profile.full_name,
        avatar_url: profile.avatar_url,
        email: profile.email,
        xp_total: profile.xp_total,
        level: profile.level,
        streak_count: profile.streak_count,
        longest_streak: profile.longest_streak,
      },
      role_name: roleName,
      skills: [...skillNodes, ...generalSkills],
      projects: completedProjects,
      completion_percent: completionPercent,
      traits: discoveryRes.data?.extracted_traits || null,
    });

    res.headers.set("Cache-Control", "private, max-age=60");
    return res;
  } catch (err) {
    console.error("Passport fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch passport" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { is_public } = await request.json();

    await db("skill_passports")
      .update({ is_public })
      .eq("user_id", userId);

    return NextResponse.json({ success: true, is_public });
  } catch (err) {
    console.error("Passport update error:", err);
    return NextResponse.json(
      { error: "Failed to update passport" },
      { status: 500 }
    );
  }
}
