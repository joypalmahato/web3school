import { readFileSync, writeFileSync } from "fs";

const rolesContent = readFileSync("data/roles.ts", "utf8");
const skillsContent = readFileSync("data/skills.ts", "utf8");

// Parse roles
function parseRoles(content) {
  const roles = [];
  const roleRegex = /\{\s*name:\s*"([^"]+)",\s*slug:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*short_description:\s*(?:"([^"]*(?:\\.[^"]*)*)"|[\s\S]*?"([^"]*(?:\\.[^"]*)*)"),\s*description:\s*(?:"([^"]*(?:\\.[^"]*)*)"|[\s\S]*?"([^"]*(?:\\.[^"]*)*)"),\s*salary_range_min:\s*(\d+),\s*salary_range_max:\s*(\d+),\s*demand_level:\s*"([^"]+)",\s*competition_level:\s*"([^"]+)",\s*key_skills:\s*\[([\s\S]*?)\],\s*personality_traits:\s*\[([\s\S]*?)\],\s*day_in_life:\s*"([^"]*(?:\\.[^"]*)*)",\s*growth_path:\s*"([^"]*(?:\\.[^"]*)*)"/g;
  let m;
  while ((m = roleRegex.exec(content)) !== null) {
    const keySkillsRaw = m[12];
    const keySkills = [...keySkillsRaw.matchAll(/"([^"]+)"/g)].map(x => x[1]);
    const traitsRaw = m[13];
    const traits = [...traitsRaw.matchAll(/"([^"]+)"/g)].map(x => x[1]);
    roles.push({
      name: m[1], slug: m[2], category: m[3],
      short_description: m[4] || m[5],
      description: m[6] || m[7],
      salary_range_min: parseInt(m[8]),
      salary_range_max: parseInt(m[9]),
      demand_level: m[10], competition_level: m[11],
      key_skills: keySkills, personality_traits: traits,
      day_in_life: m[14], growth_path: m[15]
    });
  }
  return roles;
}

// Parse skills
function parseSkills(content) {
  const skills = [];
  const mapStart = content.indexOf("SKILL_SLUG_MAP");
  const skillSection = content.substring(0, mapStart);
  const skillRegex = /\{\s*name:\s*"([^"]+)",\s*slug:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*description:\s*"([^"]*(?:\\.[^"]*)*)"/g;
  let m;
  while ((m = skillRegex.exec(skillSection)) !== null) {
    skills.push({ name: m[1], slug: m[2], category: m[3], description: m[4] });
  }
  return skills;
}

// Parse SKILL_SLUG_MAP
function parseMap(content) {
  const mapStart = content.indexOf("SKILL_SLUG_MAP");
  const mapContent = content.substring(mapStart);
  const map = {};
  const mapRegex = /^\s*"([^"]+)":\s*"([^"]+)"/gm;
  let m;
  while ((m = mapRegex.exec(mapContent)) !== null) {
    map[m[1]] = m[2];
  }
  return map;
}

const roles = parseRoles(rolesContent);
const skills = parseSkills(skillsContent);
const skillMap = parseMap(skillsContent);

console.log("Parsed roles:", roles.length);
console.log("Parsed skills:", skills.length);
console.log("Map entries:", Object.keys(skillMap).length);

const existingRoleSlugs = new Set([
  "community-manager","web3-content-creator","web3-marketing-strategist","web3-project-manager",
  "smart-contract-developer","protocol-researcher","fullstack-dapp-developer","smart-contract-auditor",
  "blockchain-infra-engineer","defi-analyst","on-chain-researcher","blockchain-qa-tester",
  "tokenomics-designer","dao-operations-lead","web3-data-analyst","crypto-compliance-specialist",
  "nft-creator","web3-ux-designer","web3-game-designer","metaverse-architect"
]);
const existingSkillSlugs = new Set([
  "solidity","rust","sql","javascript-typescript","security-auditing","gas-optimization","test-writing",
  "defi-protocols","tokenomics","nft-minting","blockchain-data","whitepaper-analysis","game-theory",
  "governance-systems","risk-assessment","community-strategy","content-writing","copywriting",
  "event-planning","conflict-resolution","research-writing","storytelling","discord-management",
  "dune-analytics","foundry-hardhat","data-visualization","spreadsheet-modeling"
]);

const newRoles = roles.filter(r => !existingRoleSlugs.has(r.slug));
const newSkills = skills.filter(s => !existingSkillSlugs.has(s.slug));

console.log("New roles:", newRoles.length);
console.log("New skills:", newSkills.length);

function q(str) {
  // SQL escape: double up single quotes
  return "'" + str.replace(/'/g, "''") + "'";
}

const lines = [];
lines.push("-- ============================================================");
lines.push("-- 003: Expand roles and skills (75+ roles, 400+ skills)");
lines.push("-- ============================================================");
lines.push("");
lines.push("-- ============================================================");
lines.push("-- INSERT NEW ROLES");
lines.push("-- ============================================================");
lines.push("");

for (const r of newRoles) {
  const keySkillsJson = JSON.stringify(r.key_skills);
  const traitsJson = JSON.stringify(r.personality_traits);
  lines.push(`INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path)`);
  lines.push(`VALUES (`);
  lines.push(`  ${q(r.name)},`);
  lines.push(`  ${q(r.slug)},`);
  lines.push(`  ${q(r.category)},`);
  lines.push(`  ${q(r.short_description)},`);
  lines.push(`  ${q(r.description)},`);
  lines.push(`  ${r.salary_range_min},`);
  lines.push(`  ${r.salary_range_max},`);
  lines.push(`  ${q(r.demand_level)},`);
  lines.push(`  ${q(r.competition_level)},`);
  lines.push(`  ${q(keySkillsJson)}::jsonb,`);
  lines.push(`  ${q(traitsJson)}::jsonb,`);
  lines.push(`  ${q(r.day_in_life)},`);
  lines.push(`  ${q(r.growth_path)}`);
  lines.push(`) ON CONFLICT (slug) DO NOTHING;`);
  lines.push("");
}

lines.push("-- ============================================================");
lines.push("-- INSERT NEW SKILLS");
lines.push("-- ============================================================");
lines.push("");

for (const s of newSkills) {
  lines.push(`INSERT INTO public.skills (name, slug, category, description)`);
  lines.push(`VALUES (${q(s.name)}, ${q(s.slug)}, ${q(s.category)}, ${q(s.description)})`);
  lines.push(`ON CONFLICT (slug) DO NOTHING;`);
  lines.push("");
}

lines.push("-- ============================================================");
lines.push("-- INSERT ROLE-SKILL MAPPINGS");
lines.push("-- ============================================================");
lines.push("");

for (const r of roles) {
  for (let i = 0; i < r.key_skills.length; i++) {
    const skillName = r.key_skills[i];
    const skillSlug = skillMap[skillName];
    if (!skillSlug) {
      console.error("MISSING MAP:", skillName, "for role", r.slug);
      continue;
    }
    let importance;
    if (i < 2) importance = "essential";
    else if (i < 4) importance = "important";
    else importance = "nice_to_have";

    lines.push(`INSERT INTO public.role_skills (role_id, skill_id, importance)`);
    lines.push(`SELECT r.id, s.id, ${q(importance)}`);
    lines.push(`FROM public.roles r, public.skills s`);
    lines.push(`WHERE r.slug = ${q(r.slug)} AND s.slug = ${q(skillSlug)}`);
    lines.push(`ON CONFLICT (role_id, skill_id) DO NOTHING;`);
    lines.push("");
  }
}

const output = lines.join("\n");
writeFileSync("supabase/migrations/003_expand_roles_and_skills.sql", output);
console.log("Migration written! Lines:", lines.length);
