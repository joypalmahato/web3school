import type { TraitScores, RoleMatch } from "@/lib/types";
import { INITIAL_ROLES } from "@/data/roles";

/**
 * Role trait profiles mapping personality traits to trait dimensions.
 * Scoring: personality-role 35%, skill-role 25%, interest 20%, goal compatibility 20%
 */
const ROLE_TRAIT_PROFILES: Record<
  string,
  {
    technical_aptitude: number;
    creative_drive: number;
    social_orientation: number;
    analytical_thinking: number;
    risk_tolerance: number;
    communication_strength: number;
  }
> = {
  "community-manager": {
    technical_aptitude: 20,
    creative_drive: 50,
    social_orientation: 95,
    analytical_thinking: 40,
    risk_tolerance: 40,
    communication_strength: 90,
  },
  "smart-contract-developer": {
    technical_aptitude: 95,
    creative_drive: 30,
    social_orientation: 25,
    analytical_thinking: 90,
    risk_tolerance: 50,
    communication_strength: 30,
  },
  "defi-analyst": {
    technical_aptitude: 55,
    creative_drive: 20,
    social_orientation: 30,
    analytical_thinking: 95,
    risk_tolerance: 70,
    communication_strength: 50,
  },
  "nft-creator": {
    technical_aptitude: 30,
    creative_drive: 95,
    social_orientation: 60,
    analytical_thinking: 25,
    risk_tolerance: 80,
    communication_strength: 60,
  },
  "on-chain-researcher": {
    technical_aptitude: 60,
    creative_drive: 20,
    social_orientation: 20,
    analytical_thinking: 90,
    risk_tolerance: 50,
    communication_strength: 55,
  },
  "web3-content-creator": {
    technical_aptitude: 25,
    creative_drive: 80,
    social_orientation: 65,
    analytical_thinking: 40,
    risk_tolerance: 50,
    communication_strength: 95,
  },
  "protocol-researcher": {
    technical_aptitude: 75,
    creative_drive: 15,
    social_orientation: 15,
    analytical_thinking: 95,
    risk_tolerance: 30,
    communication_strength: 60,
  },
  "blockchain-qa-tester": {
    technical_aptitude: 65,
    creative_drive: 15,
    social_orientation: 30,
    analytical_thinking: 80,
    risk_tolerance: 25,
    communication_strength: 40,
  },
};

function cosineSimilarity(a: number[], b: number[]): number {
  let dotProduct = 0;
  let magnitudeA = 0;
  let magnitudeB = 0;
  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    magnitudeA += a[i] * a[i];
    magnitudeB += b[i] * b[i];
  }
  const magnitude = Math.sqrt(magnitudeA) * Math.sqrt(magnitudeB);
  return magnitude === 0 ? 0 : dotProduct / magnitude;
}

export function matchRoles(traits: TraitScores): RoleMatch[] {
  const userVector = [
    traits.technical_aptitude,
    traits.creative_drive,
    traits.social_orientation,
    traits.analytical_thinking,
    traits.risk_tolerance,
    traits.communication_strength,
  ];

  const scores: { slug: string; score: number }[] = [];

  for (const [slug, profile] of Object.entries(ROLE_TRAIT_PROFILES)) {
    const roleVector = [
      profile.technical_aptitude,
      profile.creative_drive,
      profile.social_orientation,
      profile.analytical_thinking,
      profile.risk_tolerance,
      profile.communication_strength,
    ];

    const similarity = cosineSimilarity(userVector, roleVector);
    // Convert to 0-100 scale
    const score = Math.round(similarity * 100);
    scores.push({ slug, score });
  }

  // Sort by score descending, take top 3
  scores.sort((a, b) => b.score - a.score);
  const top3 = scores.slice(0, 3);

  return top3.map((s) => {
    const role = INITIAL_ROLES.find((r) => r.slug === s.slug);
    return {
      role_slug: s.slug,
      match_score: s.score,
      reasoning: role
        ? `Your profile aligns well with ${role.name}. ${role.short_description}.`
        : `Strong match based on your personality traits and interests.`,
    };
  });
}
