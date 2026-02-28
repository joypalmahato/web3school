import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { INITIAL_ROLES } from "@/data/roles";
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
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get profile
    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (!profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    // Get or create passport
    let { data: passport } = await supabase
      .from("skill_passports")
      .select("*")
      .eq("user_id", user.id)
      .single();

    if (!passport) {
      // Create one
      const { data: newPassport } = await supabase
        .from("skill_passports")
        .insert({
          user_id: user.id,
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

    // Get roadmap progress
    const { data: roadmap } = await supabase
      .from("roadmaps")
      .select("id, current_week, total_weeks")
      .eq("user_id", user.id)
      .eq("status", "active")
      .single();

    let completionPercent = 0;
    let completedProjects: string[] = [];

    if (roadmap) {
      const { data: tasks } = await supabase
        .from("daily_tasks")
        .select("title, task_type, status")
        .eq("roadmap_id", roadmap.id);

      if (tasks) {
        const completed = tasks.filter((t) => t.status === "completed");
        completionPercent = Math.round(
          (completed.length / Math.max(tasks.length, 1)) * 100
        );
        completedProjects = completed
          .filter((t) => t.task_type === "project")
          .map((t) => t.title);
      }
    }

    // Get role info
    const roleData = profile.current_role_id
      ? INITIAL_ROLES.find((r) => {
          // Match by checking all roles — we don't have UUID here
          return true; // Will use DB lookup below
        })
      : null;

    let roleName = "Web3 Professional";
    let roleSkills: string[] = [];

    if (profile.current_role_id) {
      const { data: dbRole } = await supabase
        .from("roles")
        .select("name, slug, key_skills")
        .eq("id", profile.current_role_id)
        .single();

      if (dbRole) {
        roleName = dbRole.name;
        roleSkills = dbRole.key_skills || [];
      }
    }

    // Build skill nodes from role skills + general skills
    const skillNodes = roleSkills.map((skillName, i) => {
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

    // Add general skills from INITIAL_SKILLS
    const generalSkills = INITIAL_SKILLS.slice(0, 8).map((s, i) => ({
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

    // Get discovery traits
    const { data: discovery } = await supabase
      .from("discovery_sessions")
      .select("extracted_traits")
      .eq("user_id", user.id)
      .eq("status", "completed")
      .order("completed_at", { ascending: false })
      .limit(1)
      .single();

    return NextResponse.json({
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
      traits: discovery?.extracted_traits || null,
    });
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
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { is_public } = await request.json();

    await supabase
      .from("skill_passports")
      .update({ is_public })
      .eq("user_id", user.id);

    return NextResponse.json({ success: true, is_public });
  } catch (err) {
    console.error("Passport update error:", err);
    return NextResponse.json(
      { error: "Failed to update passport" },
      { status: 500 }
    );
  }
}
