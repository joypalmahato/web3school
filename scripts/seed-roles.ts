/**
 * Seed all roles from data/roles.ts into the InsForge database.
 * Usage: npx tsx scripts/seed-roles.ts
 */
import { config } from "dotenv";
config({ path: ".env.local" });

import { createClient } from "@insforge/sdk";
import { INITIAL_ROLES } from "../data/roles";

const client = createClient({
  baseUrl: process.env.NEXT_PUBLIC_INSFORGE_BASE_URL!,
  anonKey: process.env.INSFORGE_API_KEY!,
});

async function seed() {
  // Check existing roles
  const { data: existing } = await client.database
    .from("roles")
    .select("slug");

  const existingSlugs = new Set(
    (existing || []).map((r: { slug: string }) => r.slug)
  );

  // Filter to only new roles
  const newRoles = INITIAL_ROLES.filter((r) => !existingSlugs.has(r.slug));

  if (newRoles.length === 0) {
    console.log("All", INITIAL_ROLES.length, "roles already exist. Nothing to seed.");
    return;
  }

  console.log(
    "Found",
    existingSlugs.size,
    "existing roles.",
    "Inserting",
    newRoles.length,
    "new roles..."
  );

  const rows = newRoles.map((role, i) => ({
    name: role.name,
    slug: role.slug,
    category: role.category,
    short_description: role.short_description,
    description: role.description,
    salary_range_min: role.salary_range_min,
    salary_range_max: role.salary_range_max,
    demand_level: role.demand_level,
    competition_level: role.competition_level,
    key_skills: role.key_skills,
    personality_traits: role.personality_traits,
    day_in_life: role.day_in_life,
    growth_path: role.growth_path,
    sort_order: existingSlugs.size + i + 1,
    is_active: true,
  }));

  const { data, error } = await client.database
    .from("roles")
    .insert(rows)
    .select("slug, name");

  if (error) {
    console.error("Insert error:", JSON.stringify(error, null, 2));
    process.exit(1);
  }

  console.log("Successfully inserted", data.length, "roles:");
  data.forEach((r: { slug: string; name: string }) =>
    console.log("  +", r.name, `(${r.slug})`)
  );

  // Verify total
  const { data: allRoles } = await client.database
    .from("roles")
    .select("slug");
  console.log("\nTotal roles in database:", allRoles?.length || 0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
