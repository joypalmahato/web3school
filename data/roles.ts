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

  // ─── WEB3 & BLOCKCHAIN (NEW) ─────────────────────────────
  {
    name: "MEV Researcher",
    slug: "mev-researcher",
    category: "technical",
    short_description:
      "Study and optimize maximal extractable value strategies",
    description:
      "MEV Researchers analyze transaction ordering, arbitrage opportunities, and value extraction on blockchains. You'll study mempool dynamics, build simulation frameworks, design MEV-resistant protocols, and publish research on fair ordering. Requires deep knowledge of DeFi, cryptography, and distributed systems.",
    salary_range_min: 150000,
    salary_range_max: 400000,
    demand_level: "high",
    competition_level: "very_high",
    key_skills: [
      "Mempool Analysis",
      "DeFi Protocol Internals",
      "Python / Rust",
      "Transaction Simulation",
      "Game Theory",
      "Flashbots / MEV-Boost",
    ],
    personality_traits: [
      "analytical",
      "competitive",
      "quantitative",
      "persistent",
      "intellectually curious",
    ],
    day_in_life:
      "Morning: Analyze overnight MEV activity, review searcher competition. Midday: Build simulation models for new arbitrage paths. Afternoon: Write research on fair ordering mechanisms, peer review. Evening: Monitor protocol upgrades that affect MEV landscape.",
    growth_path:
      "Junior Researcher → MEV Researcher → Senior Researcher → Research Lead → Chief Scientist / Protocol Founder",
  },
  {
    name: "Web3 Product Manager",
    slug: "web3-product-manager",
    category: "semi-technical",
    short_description:
      "Define product vision and roadmaps for crypto products",
    description:
      "Web3 Product Managers bridge the gap between technical blockchain teams and user needs. You'll define product requirements, prioritize features, manage roadmaps, and ensure that DeFi, NFT, or infrastructure products deliver real value. Requires understanding of both traditional product management and on-chain mechanics.",
    salary_range_min: 100000,
    salary_range_max: 200000,
    demand_level: "very_high",
    competition_level: "high",
    key_skills: [
      "Product Strategy",
      "User Research",
      "Roadmap Management",
      "On-Chain Analytics",
      "A/B Testing",
      "Stakeholder Communication",
      "Agile Methodology",
    ],
    personality_traits: [
      "strategic",
      "empathetic",
      "decisive",
      "communicative",
      "data-driven",
    ],
    day_in_life:
      "Morning: Review product metrics and user feedback. Midday: Sprint planning with engineering, prioritize backlog items. Afternoon: User interviews, draft PRD for next feature. Evening: Analyze competitor launches, prepare roadmap update for stakeholders.",
    growth_path:
      "Associate PM → Product Manager → Senior PM → Director of Product → VP of Product / CPO",
  },
  {
    name: "Blockchain Developer Relations",
    slug: "blockchain-devrel",
    category: "semi-technical",
    short_description:
      "Help developers build on your protocol through docs and tools",
    description:
      "Blockchain DevRel professionals are the bridge between protocols and the developer community. You'll write documentation, create tutorials, build sample apps, speak at conferences, and gather developer feedback. Requires coding ability plus strong communication skills and genuine passion for teaching.",
    salary_range_min: 90000,
    salary_range_max: 190000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "Technical Writing",
      "Public Speaking",
      "SDK Development",
      "Tutorial Creation",
      "Community Building",
      "JavaScript / Solidity",
      "Developer Experience",
    ],
    personality_traits: [
      "communicative",
      "patient",
      "technical",
      "community-oriented",
      "creative",
    ],
    day_in_life:
      "Morning: Respond to developer questions on Discord, review new SDK issues. Midday: Write integration tutorial, record demo video. Afternoon: Host developer workshop, gather feedback on API changes. Evening: Prepare conference talk, update documentation.",
    growth_path:
      "DevRel Engineer → Senior DevRel → DevRel Lead → Head of Developer Relations → VP of Ecosystem",
  },
  {
    name: "ZK Engineer",
    slug: "zk-engineer",
    category: "technical",
    short_description:
      "Build privacy-preserving systems with zero-knowledge proofs",
    description:
      "ZK Engineers design and implement zero-knowledge proof systems for blockchain scalability and privacy. You'll work with ZK-SNARKs, STARKs, and circuit design to build rollups, private transactions, and verifiable computation. One of the most mathematically demanding and highest-paying roles in crypto.",
    salary_range_min: 150000,
    salary_range_max: 350000,
    demand_level: "very_high",
    competition_level: "very_high",
    key_skills: [
      "ZK-SNARKs / STARKs",
      "Circuit Design (Circom / Halo2)",
      "Rust / C++",
      "Cryptography",
      "Mathematical Proofs",
      "Protocol Design",
    ],
    personality_traits: [
      "mathematical",
      "rigorous",
      "patient",
      "abstract thinker",
      "detail-oriented",
    ],
    day_in_life:
      "Morning: Review circuit optimizations, benchmark proof generation times. Midday: Implement new ZK circuit for rollup state transition. Afternoon: Collaborate with cryptography team on proof system upgrades. Evening: Read latest ZK research papers, experiment with new proving systems.",
    growth_path:
      "Junior ZK Dev → ZK Engineer → Senior ZK Engineer → ZK Research Lead → Chief Cryptographer",
  },
  {
    name: "Cross-Chain Developer",
    slug: "cross-chain-developer",
    category: "technical",
    short_description:
      "Build bridges and protocols that connect different blockchains",
    description:
      "Cross-Chain Developers build the infrastructure that allows assets and data to move between different blockchains. You'll work on bridge protocols, cross-chain messaging systems, and interoperability standards. Requires deep understanding of multiple blockchain architectures and strong security awareness.",
    salary_range_min: 120000,
    salary_range_max: 280000,
    demand_level: "high",
    competition_level: "high",
    key_skills: [
      "Multi-Chain Architecture",
      "Bridge Protocol Design",
      "Solidity / Rust / Move",
      "Cross-Chain Messaging (LayerZero, Wormhole)",
      "Security Engineering",
      "Consensus Mechanisms",
    ],
    personality_traits: [
      "systems-thinker",
      "security-minded",
      "adaptable",
      "methodical",
      "collaborative",
    ],
    day_in_life:
      "Morning: Monitor bridge health metrics, review cross-chain transactions. Midday: Implement new chain integration, write relay logic. Afternoon: Security review of message passing code, fuzz testing. Evening: Research new chain launches, evaluate integration feasibility.",
    growth_path:
      "Junior Dev → Cross-Chain Dev → Senior Engineer → Interoperability Architect → Protocol Lead",
  },

  // ─── AI & MACHINE LEARNING ──────────────────────────────
  {
    name: "Prompt Engineer",
    slug: "prompt-engineer",
    category: "semi-technical",
    short_description:
      "Design and optimize prompts that make AI systems perform",
    description:
      "Prompt Engineers craft, test, and optimize the instructions given to large language models. You'll design prompt templates, build evaluation frameworks, fine-tune system messages, and ensure AI outputs are accurate, consistent, and safe. A fast-growing role as companies integrate LLMs into products.",
    salary_range_min: 80000,
    salary_range_max: 180000,
    demand_level: "very_high",
    competition_level: "high",
    key_skills: [
      "Prompt Design & Testing",
      "LLM APIs (OpenAI, Anthropic)",
      "Evaluation Frameworks",
      "Python",
      "Few-Shot / Chain-of-Thought",
      "RAG Architecture",
    ],
    personality_traits: [
      "creative",
      "analytical",
      "iterative",
      "detail-oriented",
      "curious",
    ],
    day_in_life:
      "Morning: Review prompt performance metrics, identify failure cases. Midday: Design new prompt templates for product feature, A/B test variants. Afternoon: Build evaluation dataset, benchmark against baseline. Evening: Research new prompting techniques, experiment with model updates.",
    growth_path:
      "Junior Prompt Engineer → Prompt Engineer → Senior Prompt Engineer → AI Product Lead → Head of AI",
  },
  {
    name: "AI Product Manager",
    slug: "ai-product-manager",
    category: "semi-technical",
    short_description:
      "Shape products that use AI to solve real user problems",
    description:
      "AI Product Managers define the strategy and roadmap for AI-powered products. You'll work with ML engineers, designers, and data scientists to translate AI capabilities into user-facing features. Requires understanding of model capabilities, data pipelines, and the unique challenges of shipping AI products like hallucination and latency.",
    salary_range_min: 120000,
    salary_range_max: 220000,
    demand_level: "very_high",
    competition_level: "high",
    key_skills: [
      "Product Strategy",
      "ML Model Evaluation",
      "User Research",
      "Data-Driven Decision Making",
      "Roadmap Planning",
      "Stakeholder Management",
      "AI Ethics Awareness",
    ],
    personality_traits: [
      "strategic",
      "curious",
      "communicative",
      "data-driven",
      "user-focused",
    ],
    day_in_life:
      "Morning: Review AI feature metrics, check model accuracy dashboards. Midday: Sprint planning with ML team, prioritize model improvements. Afternoon: User interviews to test AI feature concepts, write product spec. Evening: Analyze competitor AI products, plan next quarter's AI roadmap.",
    growth_path:
      "Associate PM → AI Product Manager → Senior AI PM → Director of AI Product → VP of Product",
  },
  {
    name: "ML Engineer",
    slug: "ml-engineer",
    category: "technical",
    short_description:
      "Build, train, and deploy machine learning models at scale",
    description:
      "ML Engineers bridge the gap between data science research and production systems. You'll design model architectures, build training pipelines, optimize inference performance, and deploy models that serve millions of users. Requires strong software engineering skills plus deep understanding of machine learning algorithms.",
    salary_range_min: 130000,
    salary_range_max: 280000,
    demand_level: "very_high",
    competition_level: "very_high",
    key_skills: [
      "Python / PyTorch / TensorFlow",
      "Model Training & Fine-Tuning",
      "MLOps (MLflow, Weights & Biases)",
      "Distributed Computing",
      "Data Pipeline Engineering",
      "GPU Optimization",
    ],
    personality_traits: [
      "analytical",
      "methodical",
      "persistent",
      "detail-oriented",
      "systems-thinker",
    ],
    day_in_life:
      "Morning: Check overnight training runs, review model metrics. Midday: Optimize training pipeline, debug data preprocessing issue. Afternoon: Deploy updated model to staging, run A/B test. Evening: Read latest ML papers, prototype new architecture ideas.",
    growth_path:
      "Junior ML Engineer → ML Engineer → Senior ML Engineer → Staff ML Engineer → ML Architect / Director of ML",
  },
  {
    name: "AI Safety Researcher",
    slug: "ai-safety-researcher",
    category: "technical",
    short_description:
      "Ensure AI systems are aligned, safe, and beneficial",
    description:
      "AI Safety Researchers work on making AI systems reliable, interpretable, and aligned with human values. You'll study failure modes, develop safety benchmarks, research alignment techniques, and publish findings. Increasingly critical as AI capabilities advance rapidly. Combines deep technical ML knowledge with philosophical rigor.",
    salary_range_min: 120000,
    salary_range_max: 300000,
    demand_level: "high",
    competition_level: "high",
    key_skills: [
      "ML Research",
      "Alignment Theory",
      "Red Teaming / Adversarial Testing",
      "Interpretability Methods",
      "Python / PyTorch",
      "Technical Writing",
      "Evaluation Design",
    ],
    personality_traits: [
      "rigorous",
      "ethical",
      "intellectual",
      "persistent",
      "collaborative",
    ],
    day_in_life:
      "Morning: Read latest safety research papers, review team experiments. Midday: Design adversarial evaluation suite, run red-team tests on new model. Afternoon: Write research report on alignment findings, discuss with policy team. Evening: Attend safety research seminar, brainstorm new research directions.",
    growth_path:
      "Research Intern → AI Safety Researcher → Senior Researcher → Research Lead → Director of AI Safety",
  },
  {
    name: "AI Content Strategist",
    slug: "ai-content-strategist",
    category: "non-technical",
    short_description:
      "Use AI tools to create and scale content strategies",
    description:
      "AI Content Strategists leverage AI tools to plan, create, and optimize content at scale. You'll build AI-augmented content workflows, manage AI writing tools, ensure brand voice consistency, and measure content performance. The intersection of traditional content marketing and AI productivity.",
    salary_range_min: 65000,
    salary_range_max: 140000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "Content Strategy",
      "AI Writing Tools (ChatGPT, Claude)",
      "SEO Optimization",
      "Brand Voice Guidelines",
      "Content Analytics",
      "Workflow Automation",
    ],
    personality_traits: [
      "creative",
      "strategic",
      "organized",
      "adaptable",
      "quality-focused",
    ],
    day_in_life:
      "Morning: Review content performance dashboards, plan weekly editorial calendar. Midday: Use AI tools to draft content briefs, edit AI-generated articles. Afternoon: Optimize existing content for SEO, coordinate with design team. Evening: Research new AI content tools, plan A/B tests for headlines.",
    growth_path:
      "Content Writer → AI Content Strategist → Senior Strategist → Head of Content → VP of Marketing",
  },
  {
    name: "Computer Vision Engineer",
    slug: "computer-vision-engineer",
    category: "technical",
    short_description:
      "Build systems that understand and process visual data",
    description:
      "Computer Vision Engineers develop AI systems that interpret images and video. You'll build object detection, image classification, segmentation, and video analysis pipelines. Applications range from autonomous vehicles to medical imaging to AR/VR. Requires strong ML foundations plus specialized knowledge of visual processing.",
    salary_range_min: 130000,
    salary_range_max: 270000,
    demand_level: "high",
    competition_level: "high",
    key_skills: [
      "Python / PyTorch",
      "CNN / Vision Transformer Architectures",
      "Image Processing (OpenCV)",
      "Object Detection (YOLO, DETR)",
      "Data Augmentation",
      "Model Optimization / ONNX",
    ],
    personality_traits: [
      "analytical",
      "visual thinker",
      "patient",
      "detail-oriented",
      "experimental",
    ],
    day_in_life:
      "Morning: Review model training results, analyze failure cases on edge images. Midday: Annotate training data, tune hyperparameters for detection model. Afternoon: Deploy updated model to edge devices, benchmark inference speed. Evening: Read latest computer vision papers, prototype new augmentation pipeline.",
    growth_path:
      "Junior CV Engineer → Computer Vision Engineer → Senior CV Engineer → CV Research Lead → Director of AI / CTO",
  },
  {
    name: "NLP Engineer",
    slug: "nlp-engineer",
    category: "technical",
    short_description:
      "Build systems that understand and generate human language",
    description:
      "NLP Engineers develop systems for text understanding, generation, translation, and analysis. You'll work with transformer models, build text classification pipelines, implement search and retrieval systems, and fine-tune language models for specific domains. Critical role as LLMs reshape every industry.",
    salary_range_min: 130000,
    salary_range_max: 270000,
    demand_level: "very_high",
    competition_level: "high",
    key_skills: [
      "Transformer Architectures",
      "Python / Hugging Face",
      "Fine-Tuning / RLHF",
      "Text Classification & NER",
      "Vector Databases",
      "RAG Systems",
      "Evaluation Metrics (BLEU, ROUGE)",
    ],
    personality_traits: [
      "analytical",
      "language-oriented",
      "methodical",
      "curious",
      "detail-oriented",
    ],
    day_in_life:
      "Morning: Evaluate model outputs, review annotation quality. Midday: Fine-tune language model on domain-specific data. Afternoon: Build retrieval pipeline for RAG system, run benchmarks. Evening: Experiment with new model architectures, read NLP research.",
    growth_path:
      "Junior NLP Engineer → NLP Engineer → Senior NLP Engineer → NLP Research Lead → Director of AI",
  },
  {
    name: "AI Ethics Consultant",
    slug: "ai-ethics-consultant",
    category: "semi-technical",
    short_description:
      "Guide organizations in responsible and fair AI deployment",
    description:
      "AI Ethics Consultants help organizations deploy AI responsibly. You'll audit AI systems for bias, develop ethical guidelines, conduct impact assessments, and advise on regulatory compliance. Requires understanding of both technical ML concepts and social/legal implications of AI systems.",
    salary_range_min: 90000,
    salary_range_max: 190000,
    demand_level: "high",
    competition_level: "low",
    key_skills: [
      "Bias Auditing",
      "Fairness Metrics",
      "AI Governance Frameworks",
      "Regulatory Compliance (EU AI Act)",
      "Impact Assessment",
      "Stakeholder Communication",
    ],
    personality_traits: [
      "ethical",
      "analytical",
      "communicative",
      "empathetic",
      "principled",
    ],
    day_in_life:
      "Morning: Review AI audit findings, prepare client presentation. Midday: Conduct bias testing on client's ML model, document results. Afternoon: Draft ethical AI policy for organization, meet with legal team. Evening: Research new AI regulations, attend ethics roundtable.",
    growth_path:
      "Ethics Analyst → AI Ethics Consultant → Senior Consultant → Head of AI Ethics → Chief Ethics Officer",
  },
  {
    name: "AI Automation Specialist",
    slug: "ai-automation-specialist",
    category: "semi-technical",
    short_description:
      "Automate business workflows using AI and no-code tools",
    description:
      "AI Automation Specialists design and implement automated workflows using AI tools. You'll connect APIs, build AI-powered automations, optimize business processes, and train teams on new tools. Perfect for people who love efficiency and see opportunities to eliminate repetitive work everywhere.",
    salary_range_min: 70000,
    salary_range_max: 150000,
    demand_level: "very_high",
    competition_level: "medium",
    key_skills: [
      "Workflow Automation (Zapier, Make, n8n)",
      "AI API Integration",
      "Process Mapping",
      "Python Scripting",
      "No-Code/Low-Code Platforms",
      "Business Process Analysis",
    ],
    personality_traits: [
      "efficiency-driven",
      "creative",
      "systematic",
      "curious",
      "pragmatic",
    ],
    day_in_life:
      "Morning: Monitor automated workflows, fix any failed runs. Midday: Map out new automation opportunity with operations team. Afternoon: Build and test new AI-powered workflow, document process. Evening: Explore new AI tools and integrations, plan optimization sprints.",
    growth_path:
      "Automation Analyst → AI Automation Specialist → Senior Specialist → Head of Automation → Director of Operations",
  },
  {
    name: "Fine-Tuning Specialist",
    slug: "fine-tuning-specialist",
    category: "technical",
    short_description:
      "Customize AI models for specific domains and use cases",
    description:
      "Fine-Tuning Specialists adapt pre-trained AI models for specific business needs. You'll curate training datasets, run fine-tuning experiments, evaluate model performance, and deploy customized models. Requires understanding of transfer learning, data quality, and model evaluation techniques.",
    salary_range_min: 110000,
    salary_range_max: 220000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "Model Fine-Tuning (LoRA, QLoRA)",
      "Dataset Curation",
      "Python / Hugging Face",
      "Evaluation & Benchmarking",
      "GPU Infrastructure",
      "Prompt Engineering",
      "RLHF / DPO",
    ],
    personality_traits: [
      "methodical",
      "experimental",
      "patient",
      "data-driven",
      "detail-oriented",
    ],
    day_in_life:
      "Morning: Review fine-tuning run results, compare against baseline. Midday: Curate and clean training dataset, fix labeling issues. Afternoon: Launch new fine-tuning experiment, optimize hyperparameters. Evening: Benchmark model on evaluation suite, document findings.",
    growth_path:
      "ML Engineer → Fine-Tuning Specialist → Senior ML Engineer → ML Research Lead → Head of AI",
  },
  {
    name: "AI Agent Developer",
    slug: "ai-agent-developer",
    category: "technical",
    short_description:
      "Build autonomous AI agents that reason and take actions",
    description:
      "AI Agent Developers build autonomous systems that can reason, plan, and take actions using LLMs. You'll design agent architectures, implement tool-use frameworks, build memory systems, and create multi-agent workflows. One of the fastest-growing specializations as AI moves from chatbots to autonomous agents.",
    salary_range_min: 120000,
    salary_range_max: 250000,
    demand_level: "very_high",
    competition_level: "high",
    key_skills: [
      "LLM APIs (OpenAI, Anthropic)",
      "Agent Frameworks (LangChain, CrewAI)",
      "Tool Integration & Function Calling",
      "Python / TypeScript",
      "Vector Databases",
      "Workflow Orchestration",
    ],
    personality_traits: [
      "systems-thinker",
      "creative",
      "experimental",
      "persistent",
      "pragmatic",
    ],
    day_in_life:
      "Morning: Debug agent behavior, review failure logs from overnight runs. Midday: Implement new tool integration, test agent reasoning chains. Afternoon: Design multi-agent collaboration workflow, benchmark reliability. Evening: Experiment with new agent architectures, read latest research on planning.",
    growth_path:
      "Junior Developer → AI Agent Developer → Senior Agent Engineer → AI Architect → Head of AI Engineering",
  },
  {
    name: "MLOps Engineer",
    slug: "mlops-engineer",
    category: "technical",
    short_description:
      "Build infrastructure that deploys and monitors ML models",
    description:
      "MLOps Engineers build the infrastructure and pipelines that take ML models from research to production. You'll manage model versioning, build CI/CD pipelines for ML, monitor model performance in production, and ensure reliable scaling. The DevOps equivalent for machine learning teams.",
    salary_range_min: 120000,
    salary_range_max: 240000,
    demand_level: "very_high",
    competition_level: "medium",
    key_skills: [
      "Docker / Kubernetes",
      "ML Pipeline Tools (Kubeflow, Airflow)",
      "Model Serving (TensorRT, Triton)",
      "Monitoring & Observability",
      "Python / Bash",
      "Cloud Platforms (AWS, GCP)",
      "CI/CD for ML",
    ],
    personality_traits: [
      "systematic",
      "reliable",
      "detail-oriented",
      "pragmatic",
      "collaborative",
    ],
    day_in_life:
      "Morning: Check model serving dashboards, investigate latency spikes. Midday: Build automated retraining pipeline, update model registry. Afternoon: Optimize GPU utilization, review infrastructure costs. Evening: Set up A/B testing framework for new model version, write runbooks.",
    growth_path:
      "Junior MLOps → MLOps Engineer → Senior MLOps → ML Platform Lead → Director of ML Infrastructure",
  },

  // ─── SOFTWARE DEVELOPMENT ───────────────────────────────
  {
    name: "Frontend Developer",
    slug: "frontend-developer",
    category: "technical",
    short_description:
      "Build beautiful, fast user interfaces for web applications",
    description:
      "Frontend Developers create the visual and interactive layer of web applications. You'll work with React, TypeScript, and CSS to build responsive UIs, implement design systems, optimize performance, and ensure accessibility. The most in-demand web development specialization with clear paths into any industry.",
    salary_range_min: 70000,
    salary_range_max: 180000,
    demand_level: "very_high",
    competition_level: "very_high",
    key_skills: [
      "React / Next.js",
      "TypeScript",
      "CSS / Tailwind",
      "State Management",
      "Performance Optimization",
      "Accessibility (a11y)",
      "Testing (Jest, Playwright)",
    ],
    personality_traits: [
      "visual",
      "detail-oriented",
      "user-focused",
      "creative",
      "collaborative",
    ],
    day_in_life:
      "Morning: Fix UI bugs, review pull requests from teammates. Midday: Implement new feature component, write unit tests. Afternoon: Pair with designer on responsive layout, optimize bundle size. Evening: Refactor shared component, update Storybook documentation.",
    growth_path:
      "Junior Frontend → Frontend Developer → Senior Frontend → Staff Engineer → Frontend Architect",
  },
  {
    name: "Backend Developer",
    slug: "backend-developer",
    category: "technical",
    short_description:
      "Build APIs, databases, and server-side logic that power apps",
    description:
      "Backend Developers build the server-side logic, APIs, and data layers that power applications. You'll design database schemas, build REST and GraphQL APIs, handle authentication, and ensure systems scale. Requires strong problem-solving skills and understanding of distributed systems.",
    salary_range_min: 80000,
    salary_range_max: 200000,
    demand_level: "very_high",
    competition_level: "high",
    key_skills: [
      "Node.js / Python / Go",
      "REST & GraphQL APIs",
      "PostgreSQL / MongoDB",
      "Authentication & Authorization",
      "Docker / Cloud Deployment",
      "Caching (Redis)",
      "Message Queues",
    ],
    personality_traits: [
      "logical",
      "systematic",
      "detail-oriented",
      "reliable",
      "analytical",
    ],
    day_in_life:
      "Morning: Review overnight error logs, fix critical API bug. Midday: Design database schema for new feature, write migration. Afternoon: Build new API endpoint, write integration tests. Evening: Optimize slow database query, review security practices.",
    growth_path:
      "Junior Backend → Backend Developer → Senior Backend → Staff Engineer → Backend Architect / CTO",
  },
  {
    name: "Full-Stack Developer",
    slug: "full-stack-developer",
    category: "technical",
    short_description:
      "Build complete web applications from database to UI",
    description:
      "Full-Stack Developers work across the entire application stack, from database and API to frontend UI. You'll build features end-to-end, deploy applications, and make architectural decisions. The most versatile developer role, ideal for startups and small teams where you need to do everything.",
    salary_range_min: 80000,
    salary_range_max: 200000,
    demand_level: "very_high",
    competition_level: "very_high",
    key_skills: [
      "React / Next.js",
      "Node.js / Python",
      "TypeScript",
      "PostgreSQL",
      "REST APIs",
      "Git / CI/CD",
      "Cloud Platforms (AWS/Vercel)",
    ],
    personality_traits: [
      "versatile",
      "pragmatic",
      "fast learner",
      "independent",
      "resourceful",
    ],
    day_in_life:
      "Morning: Deploy hotfix, review PRs across frontend and backend. Midday: Build new feature end-to-end including API and UI. Afternoon: Set up database migration, write E2E tests. Evening: Research new framework features, plan next sprint's architecture.",
    growth_path:
      "Junior Dev → Full-Stack Developer → Senior Full-Stack → Tech Lead → CTO / Engineering Manager",
  },
  {
    name: "Mobile Developer",
    slug: "mobile-developer",
    category: "technical",
    short_description:
      "Build native and cross-platform mobile applications",
    description:
      "Mobile Developers build applications for iOS and Android platforms. You'll work with React Native, Swift, or Kotlin to create smooth mobile experiences, handle offline storage, push notifications, and platform-specific features. Mobile usage dominates internet traffic, making this a consistently high-demand role.",
    salary_range_min: 85000,
    salary_range_max: 200000,
    demand_level: "high",
    competition_level: "high",
    key_skills: [
      "React Native / Flutter",
      "Swift / Kotlin",
      "Mobile UI Patterns",
      "App Store Deployment",
      "Push Notifications",
      "Offline Storage",
      "Mobile Performance",
    ],
    personality_traits: [
      "detail-oriented",
      "user-focused",
      "patient",
      "platform-aware",
      "quality-driven",
    ],
    day_in_life:
      "Morning: Fix crash reported in production, review app store reviews. Midday: Implement new screen with animations, handle edge cases. Afternoon: Test across device sizes, optimize app startup time. Evening: Prepare beta release, update platform SDK versions.",
    growth_path:
      "Junior Mobile Dev → Mobile Developer → Senior Mobile → Mobile Lead → Mobile Architect / Engineering Manager",
  },
  {
    name: "DevOps / Cloud Engineer",
    slug: "devops-cloud-engineer",
    category: "technical",
    short_description:
      "Build and manage cloud infrastructure and CI/CD pipelines",
    description:
      "DevOps and Cloud Engineers build the infrastructure that keeps applications running. You'll manage cloud resources, create CI/CD pipelines, implement monitoring, handle security, and ensure high availability. As companies move to the cloud, this role is critical for every engineering team.",
    salary_range_min: 100000,
    salary_range_max: 220000,
    demand_level: "very_high",
    competition_level: "medium",
    key_skills: [
      "AWS / GCP / Azure",
      "Docker / Kubernetes",
      "Terraform / Infrastructure as Code",
      "CI/CD (GitHub Actions, Jenkins)",
      "Monitoring (Datadog, Grafana)",
      "Linux Administration",
      "Security Best Practices",
    ],
    personality_traits: [
      "systematic",
      "reliable",
      "security-minded",
      "calm under pressure",
      "methodical",
    ],
    day_in_life:
      "Morning: Check infrastructure dashboards, review overnight alerts. Midday: Update Terraform configs, deploy new service. Afternoon: Optimize CI/CD pipeline, reduce build times. Evening: Set up monitoring for new microservice, review security patches.",
    growth_path:
      "Junior DevOps → DevOps Engineer → Senior DevOps → Platform Lead → Director of Infrastructure / SRE",
  },
  {
    name: "API Developer",
    slug: "api-developer",
    category: "technical",
    short_description:
      "Design and build APIs that connect systems and services",
    description:
      "API Developers design, build, and maintain the interfaces that allow different software systems to communicate. You'll create RESTful and GraphQL APIs, write comprehensive documentation, handle versioning, and ensure reliability. APIs are the backbone of modern software, making this a foundational role.",
    salary_range_min: 85000,
    salary_range_max: 190000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "REST API Design",
      "GraphQL",
      "OpenAPI / Swagger",
      "Authentication (OAuth, JWT)",
      "Rate Limiting & Caching",
      "API Documentation",
      "Node.js / Python",
    ],
    personality_traits: [
      "systematic",
      "detail-oriented",
      "standards-driven",
      "collaborative",
      "pragmatic",
    ],
    day_in_life:
      "Morning: Review API error logs, fix broken endpoint. Midday: Design new API endpoints for product feature, write OpenAPI spec. Afternoon: Implement endpoints, write integration tests. Evening: Update API documentation, review partner integration requests.",
    growth_path:
      "Junior API Dev → API Developer → Senior API Engineer → API Architect → Director of Platform Engineering",
  },
  {
    name: "Systems Architect",
    slug: "systems-architect",
    category: "technical",
    short_description:
      "Design scalable, reliable software systems and architectures",
    description:
      "Systems Architects design the high-level structure of complex software systems. You'll make technology choices, define service boundaries, plan for scalability, and guide engineering teams on best practices. A senior role that requires broad experience across frontend, backend, infrastructure, and data systems.",
    salary_range_min: 150000,
    salary_range_max: 300000,
    demand_level: "high",
    competition_level: "high",
    key_skills: [
      "System Design",
      "Microservices Architecture",
      "Database Design",
      "Cloud Architecture",
      "Performance Engineering",
      "Technical Documentation",
      "Mentoring",
    ],
    personality_traits: [
      "strategic",
      "systems-thinker",
      "communicative",
      "experienced",
      "principled",
    ],
    day_in_life:
      "Morning: Review architecture proposals from teams, provide feedback. Midday: Design system architecture for new product initiative. Afternoon: Lead architecture review meeting, mentor senior engineers. Evening: Evaluate new technologies, update architecture decision records.",
    growth_path:
      "Senior Engineer → Staff Engineer → Systems Architect → Principal Architect → VP of Engineering / CTO",
  },
  {
    name: "QA / Test Automation Engineer",
    slug: "qa-test-automation",
    category: "technical",
    short_description:
      "Ensure software quality through automated testing strategies",
    description:
      "QA and Test Automation Engineers ensure software works correctly through comprehensive testing. You'll design test strategies, write automated test suites, build CI/CD test pipelines, and catch bugs before users do. Essential for any team shipping quality software at speed.",
    salary_range_min: 70000,
    salary_range_max: 160000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "Test Automation (Playwright, Cypress)",
      "Unit Testing (Jest, Vitest)",
      "CI/CD Integration",
      "API Testing (Postman)",
      "Performance Testing",
      "Test Strategy Design",
      "Python / TypeScript",
    ],
    personality_traits: [
      "meticulous",
      "systematic",
      "skeptical",
      "patient",
      "quality-focused",
    ],
    day_in_life:
      "Morning: Review test results from nightly runs, investigate failures. Midday: Write new E2E test suite for feature release. Afternoon: Fix flaky tests, optimize test pipeline speed. Evening: Review QA process, update test coverage reports.",
    growth_path:
      "Junior QA → QA Engineer → Senior QA → QA Lead → Director of Quality Engineering",
  },
  {
    name: "Developer Relations Engineer",
    slug: "developer-relations",
    category: "semi-technical",
    short_description:
      "Grow developer communities and improve developer experience",
    description:
      "Developer Relations Engineers are the bridge between a platform and its developer community. You'll create tutorials, build sample apps, speak at conferences, gather feedback, and advocate for developer needs internally. Requires genuine coding skills plus strong communication and community-building abilities.",
    salary_range_min: 90000,
    salary_range_max: 190000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "Technical Writing",
      "Public Speaking",
      "Content Creation",
      "Community Building",
      "SDK Usage & Feedback",
      "JavaScript / Python",
      "Developer Experience",
    ],
    personality_traits: [
      "communicative",
      "empathetic",
      "technical",
      "community-oriented",
      "energetic",
    ],
    day_in_life:
      "Morning: Respond to developer questions on forums, review SDK issues. Midday: Write tutorial blog post, record demo video. Afternoon: Give conference talk, gather feedback from developers. Evening: Build sample application, plan developer meetup.",
    growth_path:
      "DevRel Engineer → Senior DevRel → DevRel Lead → Head of Developer Relations → VP of Developer Experience",
  },
  {
    name: "Open Source Maintainer",
    slug: "open-source-maintainer",
    category: "technical",
    short_description:
      "Lead open source projects and build contributor communities",
    description:
      "Open Source Maintainers lead public software projects used by developers worldwide. You'll review contributions, triage issues, write documentation, manage releases, and grow contributor communities. Can be a full-time role at companies that fund open source or a path to consulting and sponsorship income.",
    salary_range_min: 70000,
    salary_range_max: 180000,
    demand_level: "medium",
    competition_level: "low",
    key_skills: [
      "Git / GitHub Advanced",
      "Code Review",
      "Release Management",
      "Technical Writing",
      "Community Management",
      "CI/CD Pipelines",
      "Software Architecture",
    ],
    personality_traits: [
      "collaborative",
      "patient",
      "principled",
      "communicative",
      "quality-focused",
    ],
    day_in_life:
      "Morning: Triage new issues, review community pull requests. Midday: Fix critical bug, write regression test. Afternoon: Update documentation, prepare release notes. Evening: Engage with community on Discord, mentor new contributors.",
    growth_path:
      "Contributor → Core Maintainer → Project Lead → Foundation Member → Open Source Director / CTO",
  },

  // ─── DESIGN & CREATIVE ──────────────────────────────────
  {
    name: "UI/UX Designer",
    slug: "ui-ux-designer",
    category: "creative",
    short_description:
      "Design intuitive interfaces that users love to interact with",
    description:
      "UI/UX Designers create the visual design and user experience for digital products. You'll conduct user research, build wireframes, design pixel-perfect interfaces in Figma, and collaborate with developers to ship polished products. One of the most versatile creative roles in tech.",
    salary_range_min: 70000,
    salary_range_max: 170000,
    demand_level: "very_high",
    competition_level: "high",
    key_skills: [
      "Figma / Sketch",
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Design Systems",
      "Responsive Design",
      "Usability Testing",
    ],
    personality_traits: [
      "empathetic",
      "visual",
      "detail-oriented",
      "user-focused",
      "collaborative",
    ],
    day_in_life:
      "Morning: Review user feedback and analytics, sketch solutions for pain points. Midday: Design new feature screens in Figma, iterate on interaction patterns. Afternoon: Usability test with real users, present designs to engineering. Evening: Update design system components, study design trends.",
    growth_path:
      "Junior Designer → UI/UX Designer → Senior Designer → Lead Designer → Head of Design / Design Director",
  },
  {
    name: "Product Designer",
    slug: "product-designer",
    category: "creative",
    short_description:
      "Own the end-to-end design of digital products and features",
    description:
      "Product Designers own the complete design process from user research to shipped product. You'll define user flows, create prototypes, run experiments, and collaborate closely with product managers and engineers. More strategic than UI/UX, focused on solving business problems through design.",
    salary_range_min: 90000,
    salary_range_max: 200000,
    demand_level: "very_high",
    competition_level: "high",
    key_skills: [
      "Figma / Design Tools",
      "User Research & Interviews",
      "Interaction Design",
      "Product Thinking",
      "A/B Testing",
      "Cross-Functional Collaboration",
      "Design Strategy",
    ],
    personality_traits: [
      "strategic",
      "empathetic",
      "data-driven",
      "creative",
      "communicative",
    ],
    day_in_life:
      "Morning: Analyze experiment results, review user session recordings. Midday: Lead design sprint for new feature, create user flows. Afternoon: Build interactive prototype, get stakeholder feedback. Evening: Write design brief for next project, sync with PM on priorities.",
    growth_path:
      "Junior Designer → Product Designer → Senior Product Designer → Staff Designer → VP of Design",
  },
  {
    name: "Motion Designer",
    slug: "motion-designer",
    category: "creative",
    short_description:
      "Create animations and micro-interactions that delight users",
    description:
      "Motion Designers bring interfaces to life through animation, transitions, and micro-interactions. You'll create loading animations, page transitions, onboarding sequences, and brand animations. Combines artistic sensibility with technical understanding of animation performance and implementation.",
    salary_range_min: 65000,
    salary_range_max: 150000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "After Effects / Lottie",
      "Figma Motion / Protopie",
      "CSS Animations",
      "Framer Motion / GSAP",
      "Storyboarding",
      "Animation Principles",
    ],
    personality_traits: [
      "creative",
      "detail-oriented",
      "timing-sensitive",
      "collaborative",
      "visual",
    ],
    day_in_life:
      "Morning: Review animation specs with developer, refine easing curves. Midday: Create loading animation sequence, export Lottie files. Afternoon: Prototype page transitions, test across devices. Evening: Study motion design trends, create animation library documentation.",
    growth_path:
      "Junior Motion Designer → Motion Designer → Senior Motion → Motion Lead → Creative Director",
  },
  {
    name: "3D Artist",
    slug: "3d-artist",
    category: "creative",
    short_description:
      "Create 3D models, environments, and visual experiences",
    description:
      "3D Artists create three-dimensional models, environments, textures, and animations for games, web experiences, and marketing. You'll work with tools like Blender, Cinema 4D, and Three.js to build immersive visual content. Growing demand as 3D becomes standard in web design and product visualization.",
    salary_range_min: 55000,
    salary_range_max: 140000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "Blender / Cinema 4D",
      "3D Modeling & Sculpting",
      "Texturing & Materials",
      "Lighting & Rendering",
      "Three.js / WebGL",
      "Animation",
    ],
    personality_traits: [
      "creative",
      "patient",
      "visual",
      "technical",
      "detail-oriented",
    ],
    day_in_life:
      "Morning: Work on 3D model, refine geometry and topology. Midday: Apply textures and materials, set up lighting. Afternoon: Render final output, optimize for web delivery. Evening: Learn new 3D techniques, build personal portfolio pieces.",
    growth_path:
      "Junior 3D Artist → 3D Artist → Senior 3D Artist → Lead 3D → Art Director / Studio Lead",
  },
  {
    name: "Brand Designer",
    slug: "brand-designer",
    category: "creative",
    short_description:
      "Create visual identities that define how companies are perceived",
    description:
      "Brand Designers create the complete visual identity for companies and products. You'll design logos, color systems, typography, brand guidelines, and marketing assets. Requires strong graphic design skills plus strategic thinking about how visual identity communicates values and differentiates in the market.",
    salary_range_min: 60000,
    salary_range_max: 150000,
    demand_level: "high",
    competition_level: "high",
    key_skills: [
      "Logo Design",
      "Visual Identity Systems",
      "Typography",
      "Color Theory",
      "Brand Strategy",
      "Adobe Creative Suite",
      "Presentation Design",
    ],
    personality_traits: [
      "creative",
      "strategic",
      "detail-oriented",
      "communicative",
      "trend-aware",
    ],
    day_in_life:
      "Morning: Research brand positioning, create mood boards for client. Midday: Design logo concepts, iterate on color palette. Afternoon: Build brand guidelines document, present to stakeholders. Evening: Create social media templates, review marketing materials for brand consistency.",
    growth_path:
      "Junior Designer → Brand Designer → Senior Brand Designer → Brand Lead → Creative Director / Brand Director",
  },
  {
    name: "Design Systems Engineer",
    slug: "design-systems-engineer",
    category: "creative",
    short_description:
      "Build and maintain reusable component libraries for products",
    description:
      "Design Systems Engineers bridge design and engineering by building reusable component libraries. You'll code design tokens, create accessible components, write documentation, and ensure consistency across products. A hybrid role requiring both strong design sensibility and frontend coding skills.",
    salary_range_min: 100000,
    salary_range_max: 200000,
    demand_level: "high",
    competition_level: "low",
    key_skills: [
      "React Component Development",
      "Design Tokens",
      "Storybook",
      "Accessibility (WCAG)",
      "CSS / Tailwind",
      "Figma API",
      "Documentation Writing",
    ],
    personality_traits: [
      "systematic",
      "detail-oriented",
      "collaborative",
      "quality-focused",
      "organized",
    ],
    day_in_life:
      "Morning: Review component requests from product teams, triage bugs. Midday: Build new accessible component, write unit tests. Afternoon: Update Storybook documentation, sync design tokens with Figma. Evening: Audit component usage across products, plan deprecation of legacy components.",
    growth_path:
      "Frontend Dev → Design Systems Engineer → Senior DS Engineer → DS Lead → Head of Design Systems",
  },
  {
    name: "UX Researcher",
    slug: "ux-researcher",
    category: "creative",
    short_description:
      "Uncover user needs through research and usability testing",
    description:
      "UX Researchers discover what users need, want, and struggle with through systematic research. You'll conduct interviews, run usability tests, analyze survey data, and present insights that drive product decisions. Critical for building products people actually use and love.",
    salary_range_min: 75000,
    salary_range_max: 170000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "User Interviews",
      "Usability Testing",
      "Survey Design",
      "Data Analysis",
      "Research Synthesis",
      "Presentation Skills",
      "A/B Test Analysis",
    ],
    personality_traits: [
      "empathetic",
      "curious",
      "analytical",
      "patient",
      "observant",
    ],
    day_in_life:
      "Morning: Prepare interview guide, recruit participants. Midday: Conduct moderated usability tests with real users. Afternoon: Synthesize research findings, create affinity maps. Evening: Write research report, present key insights to product team.",
    growth_path:
      "Junior Researcher → UX Researcher → Senior Researcher → Research Lead → Head of UX Research",
  },
  {
    name: "Creative Director",
    slug: "creative-director",
    category: "creative",
    short_description:
      "Lead creative vision and strategy for brands and products",
    description:
      "Creative Directors set the artistic vision and lead creative teams across design, content, and marketing. You'll define brand aesthetics, review all creative output, mentor designers, and ensure consistent quality. A senior leadership role requiring years of design experience plus strong management skills.",
    salary_range_min: 120000,
    salary_range_max: 250000,
    demand_level: "medium",
    competition_level: "high",
    key_skills: [
      "Creative Strategy",
      "Team Leadership",
      "Brand Direction",
      "Design Review",
      "Client Presentation",
      "Cross-Functional Management",
      "Trend Forecasting",
    ],
    personality_traits: [
      "visionary",
      "decisive",
      "inspiring",
      "communicative",
      "quality-obsessed",
    ],
    day_in_life:
      "Morning: Review creative briefs, provide direction to design team. Midday: Lead brand review meeting, approve campaign assets. Afternoon: Present creative strategy to leadership, mentor junior designer. Evening: Research industry trends, plan creative direction for next quarter.",
    growth_path:
      "Senior Designer → Art Director → Creative Director → VP of Creative → Chief Creative Officer",
  },
  {
    name: "Video Editor",
    slug: "video-editor",
    category: "creative",
    short_description:
      "Edit and produce video content for digital platforms",
    description:
      "Video Editors craft compelling video content for YouTube, social media, ads, and product demos. You'll edit raw footage, add effects and sound design, create thumbnails, and optimize content for different platforms. Video dominates online engagement, making this a high-demand creative skill.",
    salary_range_min: 45000,
    salary_range_max: 120000,
    demand_level: "very_high",
    competition_level: "high",
    key_skills: [
      "Premiere Pro / DaVinci Resolve",
      "Color Grading",
      "Sound Design",
      "Motion Graphics (After Effects)",
      "Thumbnail Design",
      "Platform Optimization (YouTube, TikTok)",
    ],
    personality_traits: [
      "creative",
      "detail-oriented",
      "patient",
      "storyteller",
      "deadline-driven",
    ],
    day_in_life:
      "Morning: Review raw footage, plan edit structure and narrative. Midday: Edit main video sequence, sync audio and music. Afternoon: Add motion graphics and color grade, create thumbnail. Evening: Export for multiple platforms, review analytics on published content.",
    growth_path:
      "Junior Editor → Video Editor → Senior Editor → Lead Editor → Head of Video / Creative Director",
  },

  // ─── DATA & ANALYTICS ───────────────────────────────────
  {
    name: "Data Analyst",
    slug: "data-analyst",
    category: "semi-technical",
    short_description:
      "Turn raw data into actionable insights for business decisions",
    description:
      "Data Analysts extract insights from data to drive business decisions. You'll write SQL queries, build dashboards, analyze trends, and present findings to stakeholders. One of the most accessible data roles, perfect for people who love finding patterns and telling stories with numbers.",
    salary_range_min: 60000,
    salary_range_max: 130000,
    demand_level: "very_high",
    competition_level: "high",
    key_skills: [
      "SQL",
      "Excel / Google Sheets",
      "Data Visualization (Tableau, Looker)",
      "Python / Pandas",
      "Statistical Analysis",
      "Business Communication",
    ],
    personality_traits: [
      "analytical",
      "curious",
      "detail-oriented",
      "communicative",
      "methodical",
    ],
    day_in_life:
      "Morning: Check dashboards, investigate data anomalies. Midday: Write SQL queries for weekly metrics report. Afternoon: Build new dashboard for marketing team, present findings. Evening: Explore new data patterns, prepare analysis for stakeholder meeting.",
    growth_path:
      "Junior Analyst → Data Analyst → Senior Analyst → Lead Analyst → Head of Analytics / Director of Data",
  },
  {
    name: "Data Engineer",
    slug: "data-engineer",
    category: "technical",
    short_description:
      "Build pipelines that move and transform data at scale",
    description:
      "Data Engineers build and maintain the infrastructure that moves, transforms, and stores data. You'll design ETL/ELT pipelines, manage data warehouses, ensure data quality, and make data accessible to analysts and scientists. The backbone of every data-driven organization.",
    salary_range_min: 100000,
    salary_range_max: 220000,
    demand_level: "very_high",
    competition_level: "medium",
    key_skills: [
      "SQL & Python",
      "ETL/ELT Pipelines (dbt, Airflow)",
      "Data Warehousing (Snowflake, BigQuery)",
      "Spark / Distributed Computing",
      "Data Modeling",
      "Cloud Platforms",
      "Data Quality Frameworks",
    ],
    personality_traits: [
      "systematic",
      "reliable",
      "detail-oriented",
      "patient",
      "logical",
    ],
    day_in_life:
      "Morning: Monitor pipeline health, investigate failed jobs. Midday: Build new data pipeline for product analytics. Afternoon: Optimize slow transformations, update data models. Evening: Implement data quality checks, review infrastructure costs.",
    growth_path:
      "Junior Data Engineer → Data Engineer → Senior Data Engineer → Staff Engineer → Head of Data Engineering",
  },
  {
    name: "Data Scientist",
    slug: "data-scientist",
    category: "technical",
    short_description:
      "Apply statistics and ML to extract insights and build models",
    description:
      "Data Scientists combine statistics, programming, and domain expertise to solve complex problems. You'll build predictive models, run experiments, conduct statistical analyses, and communicate findings to drive business strategy. Requires strong math foundation plus practical coding skills.",
    salary_range_min: 100000,
    salary_range_max: 220000,
    demand_level: "high",
    competition_level: "very_high",
    key_skills: [
      "Python / R",
      "Statistical Modeling",
      "Machine Learning (scikit-learn)",
      "SQL",
      "Experiment Design (A/B Testing)",
      "Data Visualization",
      "Jupyter Notebooks",
    ],
    personality_traits: [
      "analytical",
      "curious",
      "rigorous",
      "communicative",
      "experimental",
    ],
    day_in_life:
      "Morning: Review experiment results, check model performance metrics. Midday: Build feature engineering pipeline, train classification model. Afternoon: Present analysis to product team, recommend next experiments. Evening: Read research papers, explore new modeling techniques.",
    growth_path:
      "Junior Data Scientist → Data Scientist → Senior Data Scientist → Staff Scientist → Director of Data Science",
  },
  {
    name: "BI Analyst",
    slug: "bi-analyst",
    category: "semi-technical",
    short_description:
      "Build dashboards and reports that drive business strategy",
    description:
      "Business Intelligence Analysts create the reporting infrastructure that helps companies make data-driven decisions. You'll build executive dashboards, design KPI frameworks, automate reports, and translate business questions into data queries. More business-focused than data analysts, with emphasis on strategic reporting.",
    salary_range_min: 65000,
    salary_range_max: 140000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "BI Tools (Tableau, Power BI, Looker)",
      "SQL",
      "KPI Framework Design",
      "Data Modeling",
      "Stakeholder Management",
      "Report Automation",
    ],
    personality_traits: [
      "analytical",
      "organized",
      "communicative",
      "business-minded",
      "detail-oriented",
    ],
    day_in_life:
      "Morning: Update executive dashboard, check data freshness. Midday: Meet with department heads to understand reporting needs. Afternoon: Build new Looker dashboard, write documentation. Evening: Automate recurring report, optimize query performance.",
    growth_path:
      "Junior BI Analyst → BI Analyst → Senior BI Analyst → BI Lead → Director of Business Intelligence",
  },
  {
    name: "Analytics Engineer",
    slug: "analytics-engineer",
    category: "technical",
    short_description:
      "Build the data models that power analytics and reporting",
    description:
      "Analytics Engineers sit between data engineering and data analysis. You'll build data models using dbt, define metrics layers, ensure data quality, and make data self-serve for business users. A relatively new role that has become essential for scaling analytics in modern data teams.",
    salary_range_min: 100000,
    salary_range_max: 200000,
    demand_level: "very_high",
    competition_level: "medium",
    key_skills: [
      "dbt (data build tool)",
      "SQL (advanced)",
      "Data Modeling",
      "Data Quality Testing",
      "Git Version Control",
      "Metrics Layers",
      "Documentation",
    ],
    personality_traits: [
      "systematic",
      "quality-focused",
      "collaborative",
      "detail-oriented",
      "pragmatic",
    ],
    day_in_life:
      "Morning: Review data model pull requests, check test results. Midday: Build new dbt models for product analytics. Afternoon: Write data documentation, train analysts on new metrics. Evening: Optimize model performance, implement data quality tests.",
    growth_path:
      "Data Analyst → Analytics Engineer → Senior Analytics Engineer → Lead Analytics Engineer → Head of Analytics Engineering",
  },
  {
    name: "Growth Analyst",
    slug: "growth-analyst",
    category: "semi-technical",
    short_description:
      "Use data to find and optimize user growth opportunities",
    description:
      "Growth Analysts use data to find, test, and optimize growth opportunities. You'll analyze user funnels, run A/B tests, build growth models, and identify the levers that drive user acquisition and retention. Combines analytical skills with marketing intuition and product thinking.",
    salary_range_min: 70000,
    salary_range_max: 150000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "Funnel Analysis",
      "A/B Testing & Experimentation",
      "SQL / Python",
      "Cohort Analysis",
      "Marketing Analytics",
      "Product Analytics (Amplitude, Mixpanel)",
    ],
    personality_traits: [
      "analytical",
      "creative",
      "growth-minded",
      "data-driven",
      "experimental",
    ],
    day_in_life:
      "Morning: Review experiment results, analyze conversion funnel changes. Midday: Build cohort retention analysis, identify drop-off points. Afternoon: Present growth findings to team, propose new experiments. Evening: Research growth strategies, model impact of proposed changes.",
    growth_path:
      "Junior Analyst → Growth Analyst → Senior Growth Analyst → Head of Growth Analytics → VP of Growth",
  },
  {
    name: "Quantitative Researcher",
    slug: "quantitative-researcher",
    category: "technical",
    short_description:
      "Build mathematical models for trading and financial analysis",
    description:
      "Quantitative Researchers build mathematical and statistical models for trading strategies, risk management, and financial analysis. You'll work with large datasets, develop pricing models, backtest strategies, and optimize portfolio allocation. Highly mathematical and one of the highest-paying analytical roles.",
    salary_range_min: 150000,
    salary_range_max: 400000,
    demand_level: "high",
    competition_level: "very_high",
    key_skills: [
      "Python / R / C++",
      "Statistical Modeling",
      "Time Series Analysis",
      "Stochastic Calculus",
      "Backtesting Frameworks",
      "Risk Modeling",
      "Machine Learning",
    ],
    personality_traits: [
      "mathematical",
      "rigorous",
      "competitive",
      "analytical",
      "detail-oriented",
    ],
    day_in_life:
      "Morning: Review overnight strategy performance, check risk metrics. Midday: Develop new alpha signal, run backtests. Afternoon: Optimize execution algorithm, present research to portfolio manager. Evening: Read academic papers, prototype new modeling approaches.",
    growth_path:
      "Junior Quant → Quantitative Researcher → Senior Quant → Lead Researcher → Head of Quantitative Research / Partner",
  },

  // ─── MARKETING & GROWTH ─────────────────────────────────
  {
    name: "Growth Marketer",
    slug: "growth-marketer",
    category: "non-technical",
    short_description:
      "Drive user acquisition and retention through experiments",
    description:
      "Growth Marketers combine marketing creativity with data-driven experimentation to drive user acquisition and retention. You'll run growth experiments, optimize funnels, manage paid and organic channels, and find scalable growth levers. The most data-driven marketing role, focused on measurable results.",
    salary_range_min: 65000,
    salary_range_max: 150000,
    demand_level: "very_high",
    competition_level: "high",
    key_skills: [
      "Growth Experimentation",
      "Funnel Optimization",
      "Paid Acquisition (Google, Meta)",
      "Analytics (GA4, Mixpanel)",
      "Email Marketing",
      "Landing Page Optimization",
    ],
    personality_traits: [
      "data-driven",
      "creative",
      "experimental",
      "resourceful",
      "persistent",
    ],
    day_in_life:
      "Morning: Review experiment results, check acquisition metrics. Midday: Launch new landing page variant, set up A/B test. Afternoon: Analyze paid ad performance, optimize campaigns. Evening: Brainstorm growth experiment ideas, plan next sprint.",
    growth_path:
      "Marketing Associate → Growth Marketer → Senior Growth → Head of Growth → VP of Growth / CMO",
  },
  {
    name: "SEO Specialist",
    slug: "seo-specialist",
    category: "non-technical",
    short_description:
      "Drive organic traffic through search engine optimization",
    description:
      "SEO Specialists optimize websites and content to rank higher in search engines. You'll conduct keyword research, optimize on-page content, build link strategies, manage technical SEO, and track ranking performance. As organic search remains a top traffic source, skilled SEOs are consistently in demand.",
    salary_range_min: 50000,
    salary_range_max: 120000,
    demand_level: "high",
    competition_level: "high",
    key_skills: [
      "Keyword Research (Ahrefs, SEMrush)",
      "On-Page SEO",
      "Technical SEO",
      "Link Building",
      "Content Strategy",
      "Google Search Console",
      "Analytics",
    ],
    personality_traits: [
      "analytical",
      "patient",
      "detail-oriented",
      "strategic",
      "persistent",
    ],
    day_in_life:
      "Morning: Check ranking changes, review Search Console data. Midday: Conduct keyword research for new content, optimize existing pages. Afternoon: Audit technical SEO issues, fix crawl errors. Evening: Analyze competitor rankings, plan link-building outreach.",
    growth_path:
      "Junior SEO → SEO Specialist → Senior SEO → SEO Lead → Head of SEO / Director of Organic Growth",
  },
  {
    name: "Content Marketing Manager",
    slug: "content-marketing-manager",
    category: "non-technical",
    short_description:
      "Plan and execute content strategies that drive business growth",
    description:
      "Content Marketing Managers plan and execute content strategies that attract, educate, and convert audiences. You'll manage editorial calendars, coordinate writers, measure content performance, and align content with business goals. Combines creative storytelling with strategic marketing thinking.",
    salary_range_min: 70000,
    salary_range_max: 150000,
    demand_level: "high",
    competition_level: "high",
    key_skills: [
      "Content Strategy",
      "Editorial Planning",
      "SEO Content Writing",
      "Analytics & ROI Tracking",
      "Team Management",
      "Distribution Strategy",
    ],
    personality_traits: [
      "strategic",
      "creative",
      "organized",
      "communicative",
      "quality-focused",
    ],
    day_in_life:
      "Morning: Review content performance metrics, plan editorial calendar. Midday: Brief writers on upcoming pieces, edit draft articles. Afternoon: Coordinate content distribution, analyze top-performing posts. Evening: Research industry trends, plan next month's content themes.",
    growth_path:
      "Content Writer → Content Marketing Manager → Senior Manager → Director of Content → VP of Marketing",
  },
  {
    name: "Social Media Manager",
    slug: "social-media-manager",
    category: "non-technical",
    short_description:
      "Build brand presence and engagement across social platforms",
    description:
      "Social Media Managers build and maintain brand presence across platforms like Twitter/X, LinkedIn, Instagram, and TikTok. You'll create content, engage with audiences, manage brand voice, run paid social campaigns, and track engagement metrics. Requires creativity, cultural awareness, and strong writing skills.",
    salary_range_min: 45000,
    salary_range_max: 110000,
    demand_level: "high",
    competition_level: "very_high",
    key_skills: [
      "Content Creation",
      "Platform Strategy (Twitter, LinkedIn, TikTok)",
      "Community Engagement",
      "Social Analytics",
      "Copywriting",
      "Paid Social Advertising",
    ],
    personality_traits: [
      "creative",
      "responsive",
      "trend-aware",
      "communicative",
      "adaptable",
    ],
    day_in_life:
      "Morning: Check notifications, respond to comments and DMs. Midday: Create and schedule posts for the week, design visual assets. Afternoon: Monitor trending topics, engage in relevant conversations. Evening: Analyze engagement metrics, plan content for emerging trends.",
    growth_path:
      "Social Media Coordinator → Social Media Manager → Senior SMM → Head of Social → Director of Brand / VP of Marketing",
  },
  {
    name: "Email Marketing Specialist",
    slug: "email-marketing-specialist",
    category: "non-technical",
    short_description:
      "Design email campaigns that nurture leads and drive revenue",
    description:
      "Email Marketing Specialists design and optimize email campaigns that nurture leads, retain customers, and drive revenue. You'll build automated sequences, write compelling copy, segment audiences, A/B test subject lines, and analyze campaign performance. Email remains one of the highest-ROI marketing channels.",
    salary_range_min: 50000,
    salary_range_max: 110000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "Email Platforms (Mailchimp, Klaviyo, Resend)",
      "Copywriting",
      "Automation Sequences",
      "Segmentation & Personalization",
      "A/B Testing",
      "Deliverability Optimization",
    ],
    personality_traits: [
      "detail-oriented",
      "analytical",
      "creative",
      "data-driven",
      "organized",
    ],
    day_in_life:
      "Morning: Check campaign metrics, review open and click rates. Midday: Write email copy for new nurture sequence, design template. Afternoon: Set up A/B test for subject lines, segment audience list. Evening: Analyze campaign results, optimize underperforming sequences.",
    growth_path:
      "Email Coordinator → Email Marketing Specialist → Senior Specialist → Email Marketing Lead → Head of Lifecycle Marketing",
  },
  {
    name: "Paid Ads Specialist",
    slug: "paid-ads-specialist",
    category: "non-technical",
    short_description:
      "Manage paid advertising campaigns across digital platforms",
    description:
      "Paid Ads Specialists manage advertising campaigns across Google, Meta, LinkedIn, and other platforms. You'll set up campaigns, write ad copy, manage budgets, optimize targeting, and maximize return on ad spend. Requires analytical thinking and creative testing to find winning ad combinations.",
    salary_range_min: 50000,
    salary_range_max: 120000,
    demand_level: "high",
    competition_level: "high",
    key_skills: [
      "Google Ads",
      "Meta Ads Manager",
      "Campaign Optimization",
      "Ad Copywriting",
      "Audience Targeting",
      "ROAS / CPA Optimization",
      "Landing Page Optimization",
    ],
    personality_traits: [
      "analytical",
      "detail-oriented",
      "creative",
      "data-driven",
      "budget-conscious",
    ],
    day_in_life:
      "Morning: Check campaign performance, pause underperforming ads. Midday: Launch new ad creatives, set up audience targeting. Afternoon: Analyze conversion data, optimize bidding strategy. Evening: Research competitor ads, plan next week's creative tests.",
    growth_path:
      "Ads Coordinator → Paid Ads Specialist → Senior Ads Specialist → Paid Media Lead → Director of Performance Marketing",
  },
  {
    name: "Performance Marketer",
    slug: "performance-marketer",
    category: "non-technical",
    short_description:
      "Optimize marketing spend for maximum measurable ROI",
    description:
      "Performance Marketers focus on driving measurable business outcomes from marketing spend. You'll manage multi-channel campaigns, build attribution models, optimize conversion funnels, and allocate budgets based on data. More senior and strategic than paid ads specialists, with ownership of the full acquisition funnel.",
    salary_range_min: 75000,
    salary_range_max: 160000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "Multi-Channel Campaign Management",
      "Attribution Modeling",
      "Budget Allocation",
      "Conversion Rate Optimization",
      "Analytics (GA4, Segment)",
      "Marketing Automation",
    ],
    personality_traits: [
      "data-driven",
      "strategic",
      "analytical",
      "results-oriented",
      "adaptable",
    ],
    day_in_life:
      "Morning: Review cross-channel performance dashboard, adjust budgets. Midday: Analyze attribution data, reallocate spend to top channels. Afternoon: Plan new campaign strategy with creative team. Evening: Build performance forecast, prepare monthly report for leadership.",
    growth_path:
      "Marketing Analyst → Performance Marketer → Senior Performance → Head of Performance → VP of Marketing / CMO",
  },
  {
    name: "Community Builder",
    slug: "community-builder",
    category: "non-technical",
    short_description:
      "Create and grow engaged communities around products and brands",
    description:
      "Community Builders create thriving online and offline communities around products, brands, and causes. You'll design community strategies, host events, create engagement programs, onboard new members, and measure community health. Different from community management in its focus on strategic community growth.",
    salary_range_min: 55000,
    salary_range_max: 130000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "Community Strategy",
      "Event Planning & Hosting",
      "Member Onboarding",
      "Engagement Programs",
      "Platform Management (Discord, Slack)",
      "Community Analytics",
    ],
    personality_traits: [
      "empathetic",
      "energetic",
      "organized",
      "creative",
      "community-oriented",
    ],
    day_in_life:
      "Morning: Welcome new members, check community health metrics. Midday: Plan and promote upcoming community event. Afternoon: Host workshop or office hours, facilitate member introductions. Evening: Analyze engagement data, design new member retention program.",
    growth_path:
      "Community Associate → Community Builder → Senior Community → Head of Community → VP of Community / Growth",
  },
  {
    name: "CRO Specialist",
    slug: "cro-specialist",
    category: "non-technical",
    short_description:
      "Optimize websites and funnels to maximize conversion rates",
    description:
      "Conversion Rate Optimization Specialists improve the percentage of website visitors who take desired actions. You'll run A/B tests, analyze user behavior, optimize landing pages, and find friction points in conversion funnels. Highly data-driven role that directly impacts revenue.",
    salary_range_min: 65000,
    salary_range_max: 140000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "A/B Testing (Optimizely, VWO)",
      "User Behavior Analysis (Hotjar)",
      "Landing Page Optimization",
      "Funnel Analysis",
      "Copywriting for Conversion",
      "Statistical Significance",
    ],
    personality_traits: [
      "analytical",
      "detail-oriented",
      "experimental",
      "data-driven",
      "persistent",
    ],
    day_in_life:
      "Morning: Review A/B test results, document winning variants. Midday: Analyze heatmaps and user recordings, identify friction points. Afternoon: Design new test hypothesis, create landing page variant. Evening: Build conversion report for stakeholders, plan next experiments.",
    growth_path:
      "Marketing Analyst → CRO Specialist → Senior CRO → CRO Lead → Head of Growth / Director of CRO",
  },

  // ─── PRODUCT & STRATEGY ─────────────────────────────────
  {
    name: "Product Manager",
    slug: "product-manager",
    category: "non-technical",
    short_description:
      "Define what to build and why to maximize user and business value",
    description:
      "Product Managers define product strategy, prioritize features, and coordinate cross-functional teams to ship products users love. You'll conduct user research, write requirements, manage backlogs, and make tough tradeoff decisions. Often called the 'CEO of the product,' this role sits at the intersection of business, technology, and design.",
    salary_range_min: 90000,
    salary_range_max: 200000,
    demand_level: "very_high",
    competition_level: "very_high",
    key_skills: [
      "Product Strategy",
      "User Research",
      "Roadmap Management",
      "Stakeholder Communication",
      "Data Analysis",
      "Agile Methodology",
      "PRD Writing",
    ],
    personality_traits: [
      "strategic",
      "empathetic",
      "decisive",
      "communicative",
      "data-driven",
    ],
    day_in_life:
      "Morning: Review product metrics, triage new feature requests. Midday: Lead sprint planning, prioritize backlog items. Afternoon: Conduct user interviews, write product requirements. Evening: Analyze competitor products, prepare quarterly roadmap update.",
    growth_path:
      "Associate PM → Product Manager → Senior PM → Director of Product → VP of Product / CPO",
  },
  {
    name: "Technical Product Manager",
    slug: "technical-product-manager",
    category: "semi-technical",
    short_description:
      "Manage technical products with deep engineering understanding",
    description:
      "Technical Product Managers specialize in products that require deep technical understanding — APIs, developer tools, infrastructure, and platforms. You'll write technical specifications, work directly with engineers on architecture decisions, and translate complex technical capabilities into user value. Requires coding background or strong technical literacy.",
    salary_range_min: 110000,
    salary_range_max: 220000,
    demand_level: "high",
    competition_level: "high",
    key_skills: [
      "Technical Specifications",
      "API Design Understanding",
      "System Architecture",
      "Data Analysis",
      "Agile / Sprint Management",
      "Developer Empathy",
      "SQL / Basic Coding",
    ],
    personality_traits: [
      "technical",
      "strategic",
      "communicative",
      "analytical",
      "collaborative",
    ],
    day_in_life:
      "Morning: Review engineering metrics, check API usage dashboards. Midday: Write technical spec for new platform feature. Afternoon: Architecture review with engineering, prioritize tech debt. Evening: Analyze developer feedback, plan API versioning strategy.",
    growth_path:
      "Engineer / PM → Technical PM → Senior TPM → Director of Product (Platform) → VP of Product",
  },
  {
    name: "Product Analyst",
    slug: "product-analyst",
    category: "semi-technical",
    short_description:
      "Use data to measure and improve product performance",
    description:
      "Product Analysts provide the data foundation for product decisions. You'll define product metrics, build dashboards, analyze feature adoption, run A/B tests, and surface insights that guide the product roadmap. Sits between data analysis and product management, focused specifically on product performance.",
    salary_range_min: 75000,
    salary_range_max: 150000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "Product Analytics (Amplitude, Mixpanel)",
      "SQL",
      "A/B Test Analysis",
      "Funnel & Cohort Analysis",
      "Data Visualization",
      "Product Metrics (DAU, Retention)",
    ],
    personality_traits: [
      "analytical",
      "curious",
      "communicative",
      "detail-oriented",
      "product-minded",
    ],
    day_in_life:
      "Morning: Check product health metrics, investigate unusual patterns. Midday: Analyze new feature adoption, build retention cohorts. Afternoon: Present experiment results to product team, recommend next steps. Evening: Build self-serve dashboard, document metric definitions.",
    growth_path:
      "Junior Analyst → Product Analyst → Senior Product Analyst → Lead Analyst → Head of Product Analytics",
  },
  {
    name: "Scrum Master",
    slug: "scrum-master",
    category: "non-technical",
    short_description:
      "Facilitate agile processes and remove team blockers",
    description:
      "Scrum Masters facilitate agile processes that help development teams deliver software effectively. You'll run sprint ceremonies, remove blockers, coach teams on agile practices, and continuously improve team workflows. Requires strong facilitation skills and deep understanding of agile methodologies.",
    salary_range_min: 80000,
    salary_range_max: 150000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "Scrum Framework",
      "Sprint Facilitation",
      "Blocker Resolution",
      "Agile Coaching",
      "Jira / Linear",
      "Retrospective Facilitation",
      "Team Metrics",
    ],
    personality_traits: [
      "facilitative",
      "patient",
      "organized",
      "empathetic",
      "diplomatic",
    ],
    day_in_life:
      "Morning: Lead daily standup, update sprint board. Midday: One-on-one with developer to resolve blocker, update stakeholders. Afternoon: Facilitate sprint review, demo completed work. Evening: Prepare retrospective, analyze team velocity trends.",
    growth_path:
      "Scrum Master → Senior Scrum Master → Agile Coach → Director of Agile → VP of Engineering Operations",
  },
  {
    name: "Technical Writer",
    slug: "technical-writer",
    category: "semi-technical",
    short_description:
      "Create clear documentation that helps users and developers",
    description:
      "Technical Writers create documentation that helps users and developers understand and use products effectively. You'll write API docs, user guides, tutorials, release notes, and internal knowledge bases. Requires ability to understand technical concepts and explain them clearly to different audiences.",
    salary_range_min: 65000,
    salary_range_max: 140000,
    demand_level: "high",
    competition_level: "low",
    key_skills: [
      "Technical Writing",
      "API Documentation",
      "Markdown / docs-as-code",
      "Information Architecture",
      "User Guides & Tutorials",
      "Code Reading Ability",
      "Version Control (Git)",
    ],
    personality_traits: [
      "clear communicator",
      "detail-oriented",
      "empathetic",
      "organized",
      "patient",
    ],
    day_in_life:
      "Morning: Review documentation tickets, update API reference for new release. Midday: Interview engineer about new feature, draft user guide. Afternoon: Edit and review docs PR, test code samples. Evening: Audit documentation for outdated content, improve information architecture.",
    growth_path:
      "Junior Technical Writer → Technical Writer → Senior Writer → Lead Writer → Head of Documentation / Director of Developer Education",
  },
  {
    name: "Program Manager",
    slug: "program-manager",
    category: "non-technical",
    short_description:
      "Coordinate complex cross-team initiatives and programs",
    description:
      "Program Managers coordinate complex initiatives that span multiple teams, timelines, and dependencies. You'll manage cross-team roadmaps, track milestones, mitigate risks, and ensure large-scale projects deliver on time. More strategic and broader in scope than project management.",
    salary_range_min: 100000,
    salary_range_max: 200000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "Cross-Team Coordination",
      "Risk Management",
      "Milestone Tracking",
      "Stakeholder Communication",
      "Process Design",
      "Program Reporting",
      "Dependency Management",
    ],
    personality_traits: [
      "organized",
      "strategic",
      "communicative",
      "calm under pressure",
      "detail-oriented",
    ],
    day_in_life:
      "Morning: Review program status across teams, update risk register. Midday: Lead cross-team sync meeting, resolve dependency conflicts. Afternoon: Prepare executive status report, meet with stakeholders. Evening: Update program timeline, plan mitigation for at-risk deliverables.",
    growth_path:
      "Project Manager → Program Manager → Senior Program Manager → Director of Program Management → VP of Operations",
  },
  {
    name: "Business Analyst",
    slug: "business-analyst",
    category: "non-technical",
    short_description:
      "Translate business needs into technical requirements",
    description:
      "Business Analysts bridge the gap between business stakeholders and technical teams. You'll gather requirements, document workflows, analyze processes, and ensure that what gets built actually solves the business problem. Requires strong communication skills and ability to think both strategically and tactically.",
    salary_range_min: 65000,
    salary_range_max: 130000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "Requirements Gathering",
      "Process Mapping",
      "Stakeholder Interviews",
      "User Stories / Acceptance Criteria",
      "Data Analysis (SQL, Excel)",
      "Documentation",
    ],
    personality_traits: [
      "analytical",
      "communicative",
      "organized",
      "detail-oriented",
      "diplomatic",
    ],
    day_in_life:
      "Morning: Review requirements from stakeholder meeting, draft user stories. Midday: Map current business process, identify improvement opportunities. Afternoon: Present requirements to engineering team, clarify acceptance criteria. Evening: Update requirements document, prepare for next stakeholder session.",
    growth_path:
      "Junior BA → Business Analyst → Senior BA → Lead BA → Director of Business Analysis / Product Manager",
  },

  // ─── FREELANCE & CREATOR ECONOMY ────────────────────────
  {
    name: "No-Code Developer",
    slug: "no-code-developer",
    category: "semi-technical",
    short_description:
      "Build applications and automations without writing code",
    description:
      "No-Code Developers build functional web applications, internal tools, and automations using visual development platforms. You'll work with Bubble, Webflow, Retool, and Airtable to create solutions that would traditionally require full development teams. Fast-growing field as no-code tools become increasingly powerful.",
    salary_range_min: 50000,
    salary_range_max: 120000,
    demand_level: "very_high",
    competition_level: "medium",
    key_skills: [
      "Bubble / Webflow",
      "Airtable / Retool",
      "Zapier / Make Automations",
      "Database Design",
      "UI/UX Fundamentals",
      "API Integration",
    ],
    personality_traits: [
      "resourceful",
      "creative",
      "pragmatic",
      "fast learner",
      "entrepreneurial",
    ],
    day_in_life:
      "Morning: Review client feedback, fix bugs in Bubble app. Midday: Build new feature using visual components, connect API. Afternoon: Set up automation workflow in Zapier, test edge cases. Evening: Learn new no-code tool features, plan next client project.",
    growth_path:
      "No-Code Builder → No-Code Developer → Senior No-Code Dev → No-Code Agency Owner → Technical Founder",
  },
  {
    name: "Automation Consultant",
    slug: "automation-consultant",
    category: "semi-technical",
    short_description:
      "Help businesses automate repetitive processes and workflows",
    description:
      "Automation Consultants help businesses identify and automate repetitive processes. You'll map workflows, design automation solutions using tools like Zapier, Make, and n8n, implement integrations, and measure time and cost savings. High-value freelance niche with recurring revenue potential.",
    salary_range_min: 60000,
    salary_range_max: 150000,
    demand_level: "very_high",
    competition_level: "low",
    key_skills: [
      "Zapier / Make / n8n",
      "Process Mapping",
      "API Integration",
      "Python Scripting",
      "CRM Systems (HubSpot, Salesforce)",
      "ROI Analysis",
    ],
    personality_traits: [
      "systematic",
      "efficiency-driven",
      "consultative",
      "curious",
      "client-focused",
    ],
    day_in_life:
      "Morning: Audit client workflows, identify automation opportunities. Midday: Build automation in Make, connect CRM to email platform. Afternoon: Test and document new automation, train client team. Evening: Prepare ROI report for client, scope next automation project.",
    growth_path:
      "Automation Builder → Automation Consultant → Senior Consultant → Automation Agency Owner → Ops Tech Advisor",
  },
  {
    name: "Newsletter Creator",
    slug: "newsletter-creator",
    category: "creative",
    short_description:
      "Build and monetize email newsletters in your niche",
    description:
      "Newsletter Creators build audience-driven businesses through email content. You'll choose a niche, write compelling content, grow subscriber lists, monetize through sponsorships and paid subscriptions, and build a media brand. One of the most accessible creator economy paths with proven monetization models.",
    salary_range_min: 20000,
    salary_range_max: 200000,
    demand_level: "medium",
    competition_level: "high",
    key_skills: [
      "Newsletter Platforms (Substack, Beehiiv)",
      "Copywriting",
      "Audience Growth",
      "Sponsorship Sales",
      "Email Deliverability",
      "Content Curation",
    ],
    personality_traits: [
      "consistent",
      "entrepreneurial",
      "creative",
      "communicative",
      "persistent",
    ],
    day_in_life:
      "Morning: Research and curate content for next issue. Midday: Write newsletter draft, edit for clarity and engagement. Afternoon: Negotiate with sponsors, manage subscriber growth campaigns. Evening: Analyze open rates and click data, plan content calendar.",
    growth_path:
      "Solo Newsletter → Established Creator → Media Brand → Newsletter Network Owner → Media Company Founder",
  },
  {
    name: "YouTube Creator",
    slug: "youtube-creator",
    category: "creative",
    short_description:
      "Create and grow a YouTube channel in tech or education",
    description:
      "YouTube Creators build audiences through video content on topics like tech, education, tutorials, and reviews. You'll script, film, edit, optimize for search, build community, and monetize through ads, sponsors, and products. High ceiling for both income and impact in the creator economy.",
    salary_range_min: 15000,
    salary_range_max: 300000,
    demand_level: "medium",
    competition_level: "very_high",
    key_skills: [
      "Video Production",
      "Scripting & Storytelling",
      "Video Editing (Premiere, DaVinci)",
      "YouTube SEO & Algorithm",
      "Thumbnail Design",
      "Audience Building",
      "Monetization Strategy",
    ],
    personality_traits: [
      "creative",
      "persistent",
      "charismatic",
      "entrepreneurial",
      "adaptable",
    ],
    day_in_life:
      "Morning: Research video topic, write script outline. Midday: Film video, record voiceover and B-roll. Afternoon: Edit video, create thumbnail and write title/description. Evening: Engage with comments, analyze analytics, plan next video.",
    growth_path:
      "Solo Creator → Established YouTuber → Multi-Platform Creator → Media Brand → Education Company Founder",
  },
  {
    name: "Course Creator",
    slug: "course-creator",
    category: "creative",
    short_description:
      "Build and sell online courses that teach valuable skills",
    description:
      "Course Creators design, produce, and sell educational content online. You'll identify in-demand topics, design curriculum, record video lessons, build learning experiences, and market courses to your audience. Combines teaching ability with entrepreneurial skills for a scalable education business.",
    salary_range_min: 20000,
    salary_range_max: 250000,
    demand_level: "high",
    competition_level: "high",
    key_skills: [
      "Curriculum Design",
      "Video Production",
      "Course Platforms (Teachable, Udemy)",
      "Marketing & Sales Funnels",
      "Community Building",
      "Learning Experience Design",
    ],
    personality_traits: [
      "educational",
      "structured",
      "entrepreneurial",
      "patient",
      "communicative",
    ],
    day_in_life:
      "Morning: Review student feedback, answer course questions. Midday: Record new module lessons, create practice exercises. Afternoon: Optimize sales page, manage launch campaign. Evening: Engage with student community, plan next course topic.",
    growth_path:
      "Solo Course Creator → Established Educator → Course Platform → Education Brand → Online School Founder",
  },
  {
    name: "Podcast Producer",
    slug: "podcast-producer",
    category: "creative",
    short_description:
      "Produce and grow podcasts that build audiences and brands",
    description:
      "Podcast Producers manage the end-to-end production of podcasts. You'll book guests, plan episodes, record and edit audio, write show notes, manage distribution, and grow listenership. Can work as a freelancer for multiple shows or build your own podcast brand.",
    salary_range_min: 40000,
    salary_range_max: 120000,
    demand_level: "medium",
    competition_level: "medium",
    key_skills: [
      "Audio Editing (Descript, Audition)",
      "Guest Booking & Research",
      "Show Notes & SEO",
      "Podcast Distribution",
      "Audience Growth",
      "Sponsorship Management",
    ],
    personality_traits: [
      "organized",
      "creative",
      "detail-oriented",
      "communicative",
      "consistent",
    ],
    day_in_life:
      "Morning: Edit last week's episode, add intro and outro. Midday: Research and reach out to potential guests. Afternoon: Record episode, write show notes and timestamps. Evening: Schedule distribution, plan social media clips for promotion.",
    growth_path:
      "Audio Editor → Podcast Producer → Senior Producer → Executive Producer → Podcast Network Founder",
  },
  {
    name: "Technical Blogger",
    slug: "technical-blogger",
    category: "creative",
    short_description:
      "Write in-depth technical content that educates developers",
    description:
      "Technical Bloggers write in-depth articles about programming, tools, and technology. You'll create tutorials, explain complex concepts, review tools, and build an audience of developers. Can monetize through sponsorships, affiliate income, paid content, or use it as a springboard to DevRel and consulting.",
    salary_range_min: 30000,
    salary_range_max: 150000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "Technical Writing",
      "SEO for Developers",
      "Code Examples & Tutorials",
      "Blog Platforms (Hashnode, Dev.to)",
      "Content Marketing",
      "Audience Building",
    ],
    personality_traits: [
      "curious",
      "clear communicator",
      "persistent",
      "educational",
      "detail-oriented",
    ],
    day_in_life:
      "Morning: Research trending technical topics, outline new post. Midday: Write tutorial with code examples, test all snippets. Afternoon: Edit and publish, share on social media. Evening: Respond to reader comments, plan next week's content.",
    growth_path:
      "Blogger → Established Technical Writer → Thought Leader → DevRel / Consultant → Author / Course Creator",
  },
  {
    name: "Indie Hacker",
    slug: "indie-hacker",
    category: "semi-technical",
    short_description:
      "Build and launch profitable software products independently",
    description:
      "Indie Hackers build small, profitable software products independently or with tiny teams. You'll identify problems, build MVPs, launch products, acquire customers, and grow revenue — all without venture capital. Requires a mix of technical skills, marketing savvy, and entrepreneurial grit.",
    salary_range_min: 10000,
    salary_range_max: 300000,
    demand_level: "medium",
    competition_level: "high",
    key_skills: [
      "Full-Stack Development",
      "Product Validation",
      "Landing Page Design",
      "Growth Marketing",
      "Stripe / Payment Integration",
      "Customer Support",
      "Ship Fast Mentality",
    ],
    personality_traits: [
      "entrepreneurial",
      "resourceful",
      "persistent",
      "independent",
      "pragmatic",
    ],
    day_in_life:
      "Morning: Check MRR dashboard, respond to customer support tickets. Midday: Build new feature based on user feedback. Afternoon: Write marketing content, optimize landing page. Evening: Research new product ideas, engage with indie hacker community.",
    growth_path:
      "Side Project Builder → Indie Hacker → Serial Indie Hacker → Micro-SaaS Portfolio Owner → Startup Founder / Advisor",
  },
  {
    name: "Notion Consultant",
    slug: "notion-consultant",
    category: "non-technical",
    short_description:
      "Design custom Notion workspaces and systems for teams",
    description:
      "Notion Consultants design custom workspaces, templates, and systems for individuals and teams using Notion. You'll build project management systems, knowledge bases, CRMs, and operational dashboards. A niche freelance role with growing demand as Notion becomes a standard business tool.",
    salary_range_min: 40000,
    salary_range_max: 120000,
    demand_level: "medium",
    competition_level: "low",
    key_skills: [
      "Notion Advanced Features",
      "Database Design",
      "Template Building",
      "Process Design",
      "Client Consulting",
      "Workflow Optimization",
    ],
    personality_traits: [
      "organized",
      "systematic",
      "client-focused",
      "creative",
      "detail-oriented",
    ],
    day_in_life:
      "Morning: Client discovery call, understand their workflow needs. Midday: Design Notion workspace structure, build database relations. Afternoon: Build and test custom templates, record walkthrough video. Evening: Create template for marketplace, write setup documentation.",
    growth_path:
      "Notion Power User → Notion Consultant → Senior Consultant → Notion Agency Owner → Productivity SaaS Founder",
  },
  {
    name: "AI Tool Reviewer",
    slug: "ai-tool-reviewer",
    category: "creative",
    short_description:
      "Review and compare AI tools to help people choose wisely",
    description:
      "AI Tool Reviewers test, compare, and review AI products for audiences looking to adopt new tools. You'll evaluate AI tools across categories, create comparison content, write detailed reviews, and build an audience that trusts your recommendations. Monetize through affiliates, sponsorships, and your own AI-focused media brand.",
    salary_range_min: 25000,
    salary_range_max: 150000,
    demand_level: "high",
    competition_level: "medium",
    key_skills: [
      "AI Tool Evaluation",
      "Content Creation (Video/Written)",
      "Comparative Analysis",
      "SEO & Audience Growth",
      "Affiliate Marketing",
      "Product Testing Methodology",
    ],
    personality_traits: [
      "curious",
      "thorough",
      "communicative",
      "objective",
      "early adopter",
    ],
    day_in_life:
      "Morning: Test new AI tool, document features and limitations. Midday: Write or film comparison review, create screenshots. Afternoon: Publish review, optimize for search. Evening: Engage with audience, track affiliate performance, scout upcoming AI launches.",
    growth_path:
      "Solo Reviewer → Established AI Reviewer → AI Media Brand → AI Newsletter / Community → AI Consultancy Founder",
  },
];
