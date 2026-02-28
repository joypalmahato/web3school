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
  // ─── NON-TECHNICAL ────────────────────────────────────────
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
    name: "Web3 Marketing Strategist",
    slug: "web3-marketing-strategist",
    category: "non-technical",
    short_description:
      "Drive growth and awareness for crypto projects",
    description:
      "Web3 Marketing Strategists plan and execute go-to-market strategies for crypto projects, DAOs, and protocols. You'll run campaigns across Twitter, Discord, and crypto-native channels, manage influencer partnerships, coordinate token launches, and track KPIs. Traditional marketing skills plus deep Web3 culture knowledge make this role unique.",
    salary_range_min: 60000,
    salary_range_max: 150000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "Growth Hacking",
      "Campaign Management",
      "Influencer Outreach",
      "Analytics & KPIs",
      "Brand Positioning",
      "Token Launch Strategy",
    ],
    personality_traits: [
      "strategic",
      "creative",
      "data-aware",
      "persuasive",
      "adaptable",
    ],
    day_in_life:
      "Morning: Review campaign metrics, check Twitter engagement. Midday: Coordinate with KOLs for upcoming launch. Afternoon: Write marketing brief, plan airdrop strategy. Evening: Monitor competitor campaigns, brainstorm growth experiments.",
    growth_path:
      "Marketing Associate → Marketing Manager → Head of Growth → CMO",
  },
  {
    name: "Web3 Project Manager",
    slug: "web3-project-manager",
    category: "non-technical",
    short_description:
      "Keep crypto teams on track and ship products on time",
    description:
      "Web3 Project Managers coordinate between developers, designers, and business stakeholders in crypto organizations. You'll manage roadmaps, run sprints, track milestones, and make sure products ship on time. Requires strong organization skills and enough technical understanding to communicate with dev teams — but no coding needed.",
    salary_range_min: 70000,
    salary_range_max: 150000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "Agile/Scrum",
      "Roadmap Planning",
      "Stakeholder Management",
      "Risk Management",
      "Documentation",
      "Cross-team Coordination",
    ],
    personality_traits: [
      "organized",
      "decisive",
      "communicative",
      "detail-oriented",
      "calm under pressure",
    ],
    day_in_life:
      "Morning: Stand-up meeting, review sprint progress. Midday: Update roadmap, sync with design team on UI specs. Afternoon: Write status report for stakeholders, triage new feature requests. Evening: Prep for tomorrow's demo, review upcoming deadlines.",
    growth_path:
      "Coordinator → Project Manager → Senior PM → Head of Product → VP of Operations",
  },

  // ─── TECHNICAL ────────────────────────────────────────────
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
    name: "Full-Stack dApp Developer",
    slug: "fullstack-dapp-developer",
    category: "technical",
    short_description:
      "Build complete decentralized apps from frontend to smart contracts",
    description:
      "Full-Stack dApp Developers build the entire user-facing application stack for Web3 products. You'll connect React/Next.js frontends to smart contracts using libraries like wagmi and ethers.js, handle wallet connections, display on-chain data, and create smooth UX for complex blockchain interactions. It's traditional web dev meets crypto.",
    salary_range_min: 90000,
    salary_range_max: 220000,
    demand_level: "very_high",
    competition_level: "high",
    key_skills: [
      "React / Next.js",
      "TypeScript",
      "ethers.js / wagmi",
      "Wallet Integration",
      "Subgraph / Indexing",
      "UI/UX for Web3",
    ],
    personality_traits: [
      "versatile",
      "user-focused",
      "pragmatic",
      "fast learner",
      "collaborative",
    ],
    day_in_life:
      "Morning: Fix frontend bugs, review PRs. Midday: Integrate new smart contract into the UI, handle edge cases. Afternoon: Optimize loading states for on-chain reads, pair with designer. Evening: Test wallet flows across different chains.",
    growth_path:
      "Junior Frontend Dev → dApp Developer → Senior Full-Stack → Tech Lead → CTO",
  },
  {
    name: "Smart Contract Auditor",
    slug: "smart-contract-auditor",
    category: "technical",
    short_description:
      "Find vulnerabilities in smart contracts before hackers do",
    description:
      "Smart Contract Auditors are the security experts of Web3. You'll review smart contract code line by line, run fuzzing tools, write exploit proofs-of-concept, and produce audit reports. Protocols trust you to find the bugs that could cost millions. This is one of the highest-paid and most respected roles in crypto.",
    salary_range_min: 120000,
    salary_range_max: 350000,
    demand_level: "very_high",
    competition_level: "high",
    key_skills: [
      "Solidity Security",
      "Fuzzing (Echidna/Medusa)",
      "Formal Verification",
      "Exploit Writing",
      "Audit Report Writing",
      "DeFi Protocol Knowledge",
    ],
    personality_traits: [
      "meticulous",
      "skeptical",
      "security-obsessed",
      "patient",
      "detail-oriented",
    ],
    day_in_life:
      "Morning: Review codebase of new audit engagement, map attack surfaces. Midday: Deep-dive into complex logic, write fuzzing tests. Afternoon: Document findings, draft audit report. Evening: Study recent hacks and new vulnerability patterns.",
    growth_path:
      "Junior Auditor → Auditor → Senior Auditor → Lead Auditor → Head of Security / Founder",
  },
  {
    name: "Blockchain Infrastructure Engineer",
    slug: "blockchain-infra-engineer",
    category: "technical",
    short_description:
      "Run nodes, build tooling, and keep the network running",
    description:
      "Blockchain Infrastructure Engineers keep the foundational layer of Web3 working. You'll run and maintain nodes, build RPC infrastructure, work on indexing solutions, and ensure high availability for blockchain services. If you like DevOps, system administration, and low-level networking — this is your Web3 entry point.",
    salary_range_min: 100000,
    salary_range_max: 230000,
    demand_level: "high",
    competition_level: "low",
    key_skills: [
      "Node Operations",
      "Docker / Kubernetes",
      "Linux Administration",
      "Monitoring & Alerting",
      "Networking / RPC",
      "Database Management",
    ],
    personality_traits: [
      "methodical",
      "reliable",
      "systems-thinker",
      "calm under pressure",
      "independent",
    ],
    day_in_life:
      "Morning: Check node health dashboards, verify sync status. Midday: Upgrade node software, run migration on indexer. Afternoon: Optimize RPC latency, investigate failed transactions. Evening: Monitor chain upgrades, set up alerting for new validators.",
    growth_path:
      "Junior DevOps → Infra Engineer → Senior Infra → Infrastructure Lead → VP of Engineering",
  },

  // ─── SEMI-TECHNICAL ───────────────────────────────────────
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
  {
    name: "Tokenomics Designer",
    slug: "tokenomics-designer",
    category: "semi-technical",
    short_description:
      "Design token economies that actually work long-term",
    description:
      "Tokenomics Designers create the economic models behind crypto tokens — supply schedules, incentive structures, staking mechanisms, and governance frameworks. You need to understand game theory, behavioral economics, and how people respond to incentives. It's part math, part psychology, part systems design.",
    salary_range_min: 90000,
    salary_range_max: 200000,
    demand_level: "high",
    competition_level: "low",
    key_skills: [
      "Economic Modeling",
      "Game Theory",
      "Spreadsheet Simulation",
      "Incentive Design",
      "Governance Frameworks",
      "Data Analysis",
    ],
    personality_traits: [
      "analytical",
      "systems-thinker",
      "creative",
      "rigorous",
      "strategic",
    ],
    day_in_life:
      "Morning: Run token supply simulations, tweak emission curves. Midday: Meeting with protocol team about staking incentives. Afternoon: Write tokenomics whitepaper section, model edge cases. Evening: Research competitor token models, read governance forum posts.",
    growth_path:
      "Analyst → Tokenomics Designer → Lead Economist → Head of Tokenomics → Chief Economist",
  },
  {
    name: "DAO Operations Lead",
    slug: "dao-operations-lead",
    category: "semi-technical",
    short_description:
      "Run the day-to-day operations of a decentralized organization",
    description:
      "DAO Operations Leads keep decentralized organizations running smoothly. You'll manage contributor payments, coordinate governance proposals, facilitate voting, handle treasury operations, and make sure the DAO's many moving pieces work together. It's like being a COO, but for an internet-native organization with no central office.",
    salary_range_min: 65000,
    salary_range_max: 150000,
    demand_level: "high",
    competition_level: "low",
    key_skills: [
      "Governance Tools (Snapshot, Tally)",
      "Treasury Management",
      "Contributor Coordination",
      "Process Design",
      "Documentation",
      "Multisig Operations",
    ],
    personality_traits: [
      "organized",
      "diplomatic",
      "self-directed",
      "transparent",
      "detail-oriented",
    ],
    day_in_life:
      "Morning: Review new governance proposals, check treasury balances. Midday: Coordinate contributor payments, update budget tracker. Afternoon: Facilitate governance call, document decisions. Evening: Draft proposal for new working group, respond to forum discussions.",
    growth_path:
      "DAO Contributor → Ops Coordinator → Operations Lead → Head of Operations → DAO Steward",
  },
  {
    name: "Web3 Data Analyst",
    slug: "web3-data-analyst",
    category: "semi-technical",
    short_description:
      "Turn blockchain data into dashboards and business insights",
    description:
      "Web3 Data Analysts build dashboards, track protocol metrics, and turn raw blockchain data into actionable business insights. You'll work with SQL, Python, and tools like Dune Analytics or Flipside to answer questions like 'how many users are we retaining?' and 'which pools are most profitable?' Great for people who love spreadsheets and charts.",
    salary_range_min: 70000,
    salary_range_max: 155000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "SQL",
      "Python / Pandas",
      "Dune / Flipside",
      "Dashboard Design",
      "Data Visualization",
      "Business Intelligence",
    ],
    personality_traits: [
      "analytical",
      "detail-oriented",
      "curious",
      "visual thinker",
      "methodical",
    ],
    day_in_life:
      "Morning: Check protocol dashboards, investigate anomalies. Midday: Write SQL queries for weekly KPI report. Afternoon: Build new dashboard for marketing team, present findings. Evening: Explore new data sources, prototype visualizations.",
    growth_path:
      "Junior Analyst → Data Analyst → Senior Analyst → Lead Analyst → Head of Data / Analytics",
  },
  {
    name: "Crypto Compliance Specialist",
    slug: "crypto-compliance-specialist",
    category: "semi-technical",
    short_description:
      "Navigate regulations and keep crypto companies legal",
    description:
      "Crypto Compliance Specialists help Web3 companies navigate the complex and evolving world of crypto regulation. You'll monitor regulatory changes, implement KYC/AML procedures, work with legal counsel, and ensure the company stays on the right side of the law. This field is growing fast as governments worldwide create new crypto rules.",
    salary_range_min: 75000,
    salary_range_max: 170000,
    demand_level: "very_high",
    competition_level: "low",
    key_skills: [
      "Regulatory Knowledge",
      "KYC/AML Procedures",
      "Risk Assessment",
      "Policy Writing",
      "Legal Research",
      "Audit Preparation",
    ],
    personality_traits: [
      "detail-oriented",
      "cautious",
      "thorough",
      "adaptable",
      "communicative",
    ],
    day_in_life:
      "Morning: Review overnight regulatory updates and news. Midday: Update internal compliance procedures, review new product for regulatory risks. Afternoon: Meeting with legal team, prepare documentation for regulator inquiry. Evening: Research upcoming legislation in target markets.",
    growth_path:
      "Compliance Associate → Specialist → Senior Compliance → Head of Compliance → Chief Compliance Officer",
  },

  // ─── CREATIVE ─────────────────────────────────────────────
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
    name: "Web3 UX Designer",
    slug: "web3-ux-designer",
    category: "creative",
    short_description:
      "Make complex crypto apps feel simple and intuitive",
    description:
      "Web3 UX Designers solve one of crypto's biggest problems: making decentralized apps actually usable. You'll design wallet connection flows, transaction confirmations, token swap interfaces, and dashboard layouts — making complex blockchain interactions feel as easy as using a normal app. Huge demand, not enough designers who understand crypto.",
    salary_range_min: 80000,
    salary_range_max: 180000,
    demand_level: "very_high",
    competition_level: "low",
    key_skills: [
      "Figma / Design Tools",
      "User Research",
      "Interaction Design",
      "Design Systems",
      "Prototyping",
      "Wallet UX Patterns",
    ],
    personality_traits: [
      "empathetic",
      "visual thinker",
      "detail-oriented",
      "user-focused",
      "collaborative",
    ],
    day_in_life:
      "Morning: User research calls, review analytics for drop-off points. Midday: Design new onboarding flow in Figma, iterate on wallet connect screen. Afternoon: Present designs to dev team, incorporate feedback. Evening: Study competitor UX, sketch ideas for next feature.",
    growth_path:
      "Junior Designer → UX Designer → Senior Designer → Design Lead → Head of Design",
  },
  {
    name: "Web3 Game Designer",
    slug: "web3-game-designer",
    category: "creative",
    short_description:
      "Design blockchain-powered games with real player economies",
    description:
      "Web3 Game Designers create gaming experiences that use blockchain for in-game assets, player-owned economies, and token rewards. You'll design game mechanics, balance in-game economies, create progression systems, and figure out how NFTs and tokens fit into gameplay without ruining the fun. The intersection of gaming and crypto.",
    salary_range_min: 70000,
    salary_range_max: 160000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "Game Design",
      "Economy Balancing",
      "Player Psychology",
      "NFT Integration",
      "Narrative Design",
      "Prototyping",
    ],
    personality_traits: [
      "creative",
      "analytical",
      "player-focused",
      "systems-thinker",
      "collaborative",
    ],
    day_in_life:
      "Morning: Playtest latest build, note balance issues. Midday: Design new quest system, map out reward structure with token team. Afternoon: Write game design document, review asset pipeline with artists. Evening: Research competitor games, brainstorm new mechanics.",
    growth_path:
      "Junior Game Designer → Game Designer → Lead Designer → Game Director → Creative Director",
  },
  {
    name: "Metaverse Architect",
    slug: "metaverse-architect",
    category: "creative",
    short_description:
      "Build virtual worlds and 3D experiences on the blockchain",
    description:
      "Metaverse Architects design and build 3D virtual spaces, experiences, and worlds that integrate with blockchain technology. You'll create environments in tools like Unreal Engine, Unity, or web-based 3D frameworks, design virtual land experiences, and think about how digital spaces connect to ownership and identity on-chain.",
    salary_range_min: 75000,
    salary_range_max: 175000,
    demand_level: "medium",
    competition_level: "low",
    key_skills: [
      "3D Modeling",
      "Unity / Unreal Engine",
      "Spatial Design",
      "WebGL / Three.js",
      "Virtual World Platforms",
      "Interactive Storytelling",
    ],
    personality_traits: [
      "visionary",
      "creative",
      "technical",
      "spatial thinker",
      "collaborative",
    ],
    day_in_life:
      "Morning: Work on 3D environment in Unity, texture and light a new scene. Midday: Meeting with brand partner about virtual event space. Afternoon: Prototype interactive elements, test with users. Evening: Explore new metaverse platforms, sketch concepts for upcoming build.",
    growth_path:
      "3D Artist → Metaverse Builder → Senior Architect → Lead Architect → Creative Director / Studio Founder",
  },
];
