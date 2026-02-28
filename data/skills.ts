export interface SkillSeedData {
  name: string;
  slug: string;
  category: "technical" | "soft" | "domain" | "tool";
  description: string;
  icon?: string;
}

export const INITIAL_SKILLS: SkillSeedData[] = [
  // Technical skills
  {
    name: "Solidity",
    slug: "solidity",
    category: "technical",
    description: "Smart contract programming language for Ethereum",
  },
  {
    name: "Rust",
    slug: "rust",
    category: "technical",
    description: "Systems programming language used in Solana and Polkadot",
  },
  {
    name: "SQL",
    slug: "sql",
    category: "technical",
    description: "Structured Query Language for data analysis",
  },
  {
    name: "JavaScript/TypeScript",
    slug: "javascript-typescript",
    category: "technical",
    description: "Web development and dApp frontend programming",
  },
  {
    name: "Security Auditing",
    slug: "security-auditing",
    category: "technical",
    description: "Identifying vulnerabilities in smart contracts",
  },
  {
    name: "Gas Optimization",
    slug: "gas-optimization",
    category: "technical",
    description: "Reducing transaction costs in smart contracts",
  },
  {
    name: "Test Writing",
    slug: "test-writing",
    category: "technical",
    description: "Writing comprehensive test suites for blockchain applications",
  },

  // Domain skills
  {
    name: "DeFi Protocols",
    slug: "defi-protocols",
    category: "domain",
    description: "Understanding decentralized finance mechanics",
  },
  {
    name: "Tokenomics",
    slug: "tokenomics",
    category: "domain",
    description: "Token economics and incentive design",
  },
  {
    name: "NFT Minting",
    slug: "nft-minting",
    category: "domain",
    description: "Creating and deploying NFT collections",
  },
  {
    name: "Blockchain Data",
    slug: "blockchain-data",
    category: "domain",
    description: "Analyzing on-chain data and transactions",
  },
  {
    name: "Whitepaper Analysis",
    slug: "whitepaper-analysis",
    category: "domain",
    description: "Evaluating blockchain protocol whitepapers",
  },
  {
    name: "Game Theory",
    slug: "game-theory",
    category: "domain",
    description: "Understanding strategic interactions in protocol design",
  },
  {
    name: "Governance Systems",
    slug: "governance-systems",
    category: "domain",
    description: "DAO governance and voting mechanisms",
  },
  {
    name: "Risk Assessment",
    slug: "risk-assessment",
    category: "domain",
    description: "Evaluating protocol and market risks",
  },

  // Soft skills
  {
    name: "Community Strategy",
    slug: "community-strategy",
    category: "soft",
    description: "Building and growing online communities",
  },
  {
    name: "Content Writing",
    slug: "content-writing",
    category: "soft",
    description: "Creating educational and engaging written content",
  },
  {
    name: "Copywriting",
    slug: "copywriting",
    category: "soft",
    description: "Persuasive writing for marketing and communications",
  },
  {
    name: "Event Planning",
    slug: "event-planning",
    category: "soft",
    description: "Organizing community events, AMAs, and workshops",
  },
  {
    name: "Conflict Resolution",
    slug: "conflict-resolution",
    category: "soft",
    description: "Managing disputes and maintaining community health",
  },
  {
    name: "Research Writing",
    slug: "research-writing",
    category: "soft",
    description: "Academic-style research reports and analysis",
  },
  {
    name: "Storytelling",
    slug: "storytelling",
    category: "soft",
    description: "Crafting compelling narratives around Web3 topics",
  },

  // Tool skills
  {
    name: "Discord Management",
    slug: "discord-management",
    category: "tool",
    description: "Managing Discord servers, bots, and roles",
  },
  {
    name: "Dune Analytics",
    slug: "dune-analytics",
    category: "tool",
    description: "On-chain data visualization and analysis platform",
  },
  {
    name: "Foundry/Hardhat",
    slug: "foundry-hardhat",
    category: "tool",
    description: "Smart contract development and testing frameworks",
  },
  {
    name: "Data Visualization",
    slug: "data-visualization",
    category: "tool",
    description: "Creating visual representations of data and metrics",
  },
  {
    name: "Spreadsheet Modeling",
    slug: "spreadsheet-modeling",
    category: "tool",
    description: "Financial modeling and analysis with spreadsheets",
  },
];
