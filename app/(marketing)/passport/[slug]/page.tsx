/**
 * @component PublicPassportPage
 * @part-of Web3School — Skill Passport
 * @design Public view, no auth, OG meta tags, CTA to signup
 */
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { APP_NAME, APP_URL } from "@/lib/utils/constants";
import { PublicPassportClient } from "./PublicPassportClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: passport } = await supabase
    .from("skill_passports")
    .select("user_id, role_id, total_score")
    .eq("public_slug", slug)
    .eq("is_public", true)
    .single();

  if (!passport) {
    return { title: "Passport Not Found" };
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, level")
    .eq("id", passport.user_id)
    .single();

  const { data: role } = passport.role_id
    ? await supabase
        .from("roles")
        .select("name")
        .eq("id", passport.role_id)
        .single()
    : { data: null };

  const name = profile?.full_name || "Web3 Learner";
  const roleName = role?.name || "Web3 Professional";
  const title = `${name}'s Skill Passport — ${roleName}`;
  const description = `Level ${profile?.level || 1} ${roleName} on ${APP_NAME}. View verified skills and projects.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${APP_URL}/passport/${slug}`,
      siteName: APP_NAME,
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function PublicPassportPage({ params }: Props) {
  const { slug } = await params;
  const supabase = await createClient();

  // Get passport
  const { data: passport } = await supabase
    .from("skill_passports")
    .select("*")
    .eq("public_slug", slug)
    .eq("is_public", true)
    .single();

  if (!passport) {
    notFound();
  }

  // Get profile
  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, avatar_url, xp_total, level, streak_count, longest_streak")
    .eq("id", passport.user_id)
    .single();

  // Get role
  const { data: role } = passport.role_id
    ? await supabase
        .from("roles")
        .select("name, key_skills")
        .eq("id", passport.role_id)
        .single()
    : { data: null };

  // Get roadmap progress
  const { data: roadmap } = await supabase
    .from("roadmaps")
    .select("id")
    .eq("user_id", passport.user_id)
    .eq("status", "active")
    .single();

  let completionPercent = 0;
  let projectCount = 0;

  if (roadmap) {
    const { data: tasks } = await supabase
      .from("daily_tasks")
      .select("task_type, status")
      .eq("roadmap_id", roadmap.id);

    if (tasks) {
      const completed = tasks.filter((t) => t.status === "completed");
      completionPercent = Math.round(
        (completed.length / Math.max(tasks.length, 1)) * 100
      );
      projectCount = completed.filter((t) => t.task_type === "project").length;
    }
  }

  // Get traits
  const { data: discovery } = await supabase
    .from("discovery_sessions")
    .select("extracted_traits")
    .eq("user_id", passport.user_id)
    .eq("status", "completed")
    .order("completed_at", { ascending: false })
    .limit(1)
    .single();

  return (
    <PublicPassportClient
      fullName={profile?.full_name || "Web3 Learner"}
      avatarUrl={profile?.avatar_url || null}
      roleName={role?.name || "Web3 Professional"}
      level={profile?.level || 1}
      xpTotal={profile?.xp_total || 0}
      streakCount={profile?.streak_count || 0}
      completionPercent={completionPercent}
      projectCount={projectCount}
      skills={role?.key_skills || []}
      traits={discovery?.extracted_traits || null}
    />
  );
}
