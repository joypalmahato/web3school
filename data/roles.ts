import type { RoleCategory, DemandLevel } from "@/lib/types";

export interface RoleSeedData {
  name: string;
  slug: string;
  category: RoleCategory;
  short_description: string;
  description: string;
  salary_range_min: number;
  salary_range_max: number;
  demand_level: DemandLevel;
  competition_level: DemandLevel;
  key_skills: string[];
  personality_traits: string[];
  day_in_life: string;
  growth_path: string;
}

export const INITIAL_ROLES: RoleSeedData[] = [
  {
    name: "Community Manager",
    slug: "community-manager",
    category: "non-technical",
    short_description:
      "Be the bridge between Web3 projects and their communities",
    description:
      "Community Managers are the heartbeat of Web3 projects. You'll build and nurture Discord/Telegram communities, organize events, create engagement strategies, and be the voice of the project to its users. This role requires strong communication skills, empathy, and the ability to handle conflict. No coding required — just people skills and Web3 knowledge.",
    salary_range_min: 50000,
    salary_range_max: 120000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "Discord Management",
      "Content Writing",
      "Community Strategy",
      "Event Planning",
      "Conflict Resolution",
      "Analytics",
    ],
    personality_traits: [
      "empathetic",
      "communicative",
      "organized",
      "patient",
      "creative",
    ],
    day_in_life:
      "Morning: Check community channels, respond to questions. Midday: Plan weekly AMA, create announcement for new feature. Afternoon: Analyze engagement metrics, coordinate with marketing team. Evening: Host community call.",
    growth_path:
      "Community Mod → Community Manager → Head of Community → VP of Community/Growth",
  },
  {
    name: "Smart Contract Developer",
    slug: "smart-contract-developer",
    category: "technical",
    short_description:
      "Build the code that powers decentralized applications",
    description:
      "Smart Contract Developers write the self-executing code that runs on blockchains like Ethereum and Solana. You'll build DeFi protocols, NFT contracts, DAOs, and more. This role requires strong programming skills (Solidity, Rust), security awareness, and deep understanding of blockchain architecture. High demand, high salary, but very competitive.",
    salary_range_min: 100000,
    salary_range_max: 270000,
    demand_level: "very_high",
    competition_level: "very_high",
    key_skills: [
      "Solidity",
      "Rust",
      "Security Auditing",
      "DeFi Protocols",
      "Testing (Foundry)",
      "Gas Optimization",
    ],
    personality_traits: [
      "analytical",
      "detail-oriented",
      "security-minded",
      "patient",
      "logical",
    ],
    day_in_life:
      "Morning: Review PRs, check contract security. Midday: Write new smart contract functions, run tests. Afternoon: Gas optimization, peer review. Evening: Study new EIPs and protocol designs.",
    growth_path:
      "Junior Dev → Mid Dev → Senior Dev → Lead Engineer → Protocol Architect",
  },
  {
    name: "DeFi Analyst",
    slug: "defi-analyst",
    category: "semi-technical",
    short_description: "Analyze protocols, assess risks, find opportunities",
    description:
      "DeFi Analysts evaluate decentralized finance protocols for risk, returns, and sustainability. You'll analyze tokenomics, liquidity dynamics, smart contract risks, and market trends. Requires strong analytical skills, spreadsheet mastery, and understanding of traditional and decentralized finance.",
    salary_range_min: 80000,
    salary_range_max: 175000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "Financial Analysis",
      "Tokenomics",
      "Risk Assessment",
      "Data Analysis",
      "DeFi Protocols",
      "Spreadsheet Modeling",
    ],
    personality_traits: [
      "analytical",
      "curious",
      "risk-aware",
      "detail-oriented",
      "quantitative",
    ],
    day_in_life:
      "Morning: Review overnight DeFi metrics, check protocol TVL changes. Midday: Deep-dive analysis of a new lending protocol. Afternoon: Write risk report, present findings to team. Evening: Monitor governance proposals.",
    growth_path:
      "Junior Analyst → DeFi Analyst → Senior Analyst → Head of Research → Chief Risk Officer",
  },
  {
    name: "NFT Artist / Creator",
    slug: "nft-creator",
    category: "creative",
    short_description:
      "Create, launch, and market digital art and collectibles",
    description:
      "NFT Creators combine artistic talent with Web3 knowledge to create and sell digital art, collectibles, and generative art. You'll learn about blockchain minting, marketplace dynamics, community building for artists, and the intersection of art and technology.",
    salary_range_min: 30000,
    salary_range_max: 150000,
    demand_level: "medium",
    competition_level: "high",
    key_skills: [
      "Digital Art",
      "NFT Minting",
      "Marketplace Strategy",
      "Community Building",
      "Brand Building",
      "Smart Contract Basics",
    ],
    personality_traits: [
      "creative",
      "entrepreneurial",
      "visual",
      "persistent",
      "community-oriented",
    ],
    day_in_life:
      "Morning: Create new artwork, experiment with styles. Midday: Engage with collector community on Twitter/Discord. Afternoon: Set up mint, coordinate with marketplace. Evening: Network with other artists, plan next drop.",
    growth_path:
      "Solo Creator → Established Artist → Collection Lead → Creative Director → Brand Founder",
  },
  {
    name: "On-Chain Researcher",
    slug: "on-chain-researcher",
    category: "semi-technical",
    short_description: "Track wallets, analyze data, uncover alpha",
    description:
      "On-Chain Researchers analyze blockchain data to uncover trends, track whale wallets, identify emerging protocols, and provide actionable insights. Requires comfort with data tools (Dune Analytics, Nansen), SQL knowledge, and deep understanding of blockchain transactions.",
    salary_range_min: 70000,
    salary_range_max: 160000,
    demand_level: "high",
    competition_level: "low",
    key_skills: [
      "Dune Analytics",
      "SQL",
      "Blockchain Data",
      "Research Writing",
      "Data Visualization",
      "Critical Thinking",
    ],
    personality_traits: [
      "investigative",
      "data-driven",
      "curious",
      "thorough",
      "independent",
    ],
    day_in_life:
      "Morning: Run Dune queries, check unusual on-chain activity. Midday: Deep research into wallet clusters and fund flows. Afternoon: Write analysis thread or report. Evening: Monitor new contract deployments.",
    growth_path:
      "Junior Researcher → On-Chain Analyst → Lead Researcher → Head of Research → Chief Intelligence Officer",
  },
  {
    name: "Web3 Content Creator",
    slug: "web3-content-creator",
    category: "non-technical",
    short_description:
      "Write threads, newsletters, and content that educates",
    description:
      "Web3 Content Creators produce educational and engaging content about blockchain, crypto, and decentralized technology. You'll write Twitter threads, newsletters, blog posts, video scripts, and documentation. Strong writing skills and ability to simplify complex topics are essential.",
    salary_range_min: 50000,
    salary_range_max: 130000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "Copywriting",
      "Technical Writing",
      "Social Media Strategy",
      "SEO",
      "Newsletter Management",
      "Storytelling",
    ],
    personality_traits: [
      "communicative",
      "curious",
      "creative",
      "consistent",
      "empathetic",
    ],
    day_in_life:
      "Morning: Research trending topics, draft Twitter thread. Midday: Write newsletter issue, create blog post outline. Afternoon: Edit and publish, engage with comments. Evening: Plan content calendar for next week.",
    growth_path:
      "Writer → Content Creator → Content Lead → Head of Content → VP of Marketing",
  },
  {
    name: "Protocol Researcher",
    slug: "protocol-researcher",
    category: "technical",
    short_description:
      "Deep-dive into whitepapers, governance, and mechanism design",
    description:
      "Protocol Researchers study the theoretical and practical foundations of blockchain protocols. You'll analyze whitepapers, evaluate governance mechanisms, study consensus algorithms, and contribute to protocol design. Requires strong technical foundation and academic rigor.",
    salary_range_min: 90000,
    salary_range_max: 200000,
    demand_level: "medium",
    competition_level: "low",
    key_skills: [
      "Whitepaper Analysis",
      "Game Theory",
      "Mechanism Design",
      "Cryptography Basics",
      "Technical Writing",
      "Governance Systems",
    ],
    personality_traits: [
      "intellectual",
      "rigorous",
      "patient",
      "detail-oriented",
      "theoretical",
    ],
    day_in_life:
      "Morning: Read new whitepapers and research papers. Midday: Analyze governance proposal, model incentive structures. Afternoon: Write research report, peer review. Evening: Attend protocol research calls.",
    growth_path:
      "Junior Researcher → Protocol Researcher → Senior Researcher → Research Lead → Chief Scientist",
  },
  {
    name: "Blockchain QA Tester",
    slug: "blockchain-qa-tester",
    category: "semi-technical",
    short_description: "Test smart contracts, find bugs, ensure security",
    description:
      "Blockchain QA Testers ensure smart contracts and dApps work correctly and securely. You'll write test cases, perform manual and automated testing, identify vulnerabilities, and work closely with developers to fix issues. A great entry point into Web3 for people with attention to detail.",
    salary_range_min: 60000,
    salary_range_max: 140000,
    demand_level: "high",
    competition_level: "low",
    key_skills: [
      "Test Writing",
      "Bug Reporting",
      "Security Basics",
      "Foundry/Hardhat",
      "Edge Case Thinking",
      "Documentation",
    ],
    personality_traits: [
      "meticulous",
      "skeptical",
      "systematic",
      "persistent",
      "observant",
    ],
    day_in_life:
      "Morning: Review new code changes, plan test cases. Midday: Run test suites, document edge cases. Afternoon: File bug reports, verify fixes. Evening: Learn about new vulnerability patterns.",
    growth_path:
      "Junior QA → QA Tester → Senior QA → QA Lead → Security Engineer",
  },
];
