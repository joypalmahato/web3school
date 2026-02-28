-- ============================================================
-- WEB3SCHOOL — Seed Data
-- Run after 001_initial_schema.sql
-- ============================================================

-- ============================================================
-- ROLES (8 initial Web3 career paths)
-- ============================================================
INSERT INTO public.roles (name, slug, category, short_description, description, salary_range_min, salary_range_max, demand_level, competition_level, key_skills, personality_traits, day_in_life, growth_path, sort_order)
VALUES
  (
    'Community Manager',
    'community-manager',
    'non-technical',
    'Be the bridge between Web3 projects and their communities',
    'Community Managers are the heartbeat of Web3 projects. You''ll build and nurture Discord/Telegram communities, organize events, create engagement strategies, and be the voice of the project to its users. This role requires strong communication skills, empathy, and the ability to handle conflict. No coding required — just people skills and Web3 knowledge.',
    50000, 120000, 'high', 'medium',
    '["Discord Management", "Content Writing", "Community Strategy", "Event Planning", "Conflict Resolution", "Analytics"]',
    '["empathetic", "communicative", "organized", "patient", "creative"]',
    'Morning: Check community channels, respond to questions. Midday: Plan weekly AMA, create announcement for new feature. Afternoon: Analyze engagement metrics, coordinate with marketing team. Evening: Host community call.',
    'Community Mod → Community Manager → Head of Community → VP of Community/Growth',
    1
  ),
  (
    'Smart Contract Developer',
    'smart-contract-developer',
    'technical',
    'Build the code that powers decentralized applications',
    'Smart Contract Developers write the self-executing code that runs on blockchains like Ethereum and Solana. You''ll build DeFi protocols, NFT contracts, DAOs, and more. This role requires strong programming skills (Solidity, Rust), security awareness, and deep understanding of blockchain architecture. High demand, high salary, but very competitive.',
    100000, 270000, 'very_high', 'very_high',
    '["Solidity", "Rust", "Security Auditing", "DeFi Protocols", "Testing (Foundry)", "Gas Optimization"]',
    '["analytical", "detail-oriented", "security-minded", "patient", "logical"]',
    'Morning: Review PRs, check contract security. Midday: Write new smart contract functions, run tests. Afternoon: Gas optimization, peer review. Evening: Study new EIPs and protocol designs.',
    'Junior Dev → Mid Dev → Senior Dev → Lead Engineer → Protocol Architect',
    2
  ),
  (
    'DeFi Analyst',
    'defi-analyst',
    'semi-technical',
    'Analyze protocols, assess risks, find opportunities',
    'DeFi Analysts evaluate decentralized finance protocols for risk, returns, and sustainability. You''ll analyze tokenomics, liquidity dynamics, smart contract risks, and market trends. Requires strong analytical skills, spreadsheet mastery, and understanding of traditional and decentralized finance.',
    80000, 175000, 'high', 'medium',
    '["Financial Analysis", "Tokenomics", "Risk Assessment", "Data Analysis", "DeFi Protocols", "Spreadsheet Modeling"]',
    '["analytical", "curious", "risk-aware", "detail-oriented", "quantitative"]',
    'Morning: Review overnight DeFi metrics, check protocol TVL changes. Midday: Deep-dive analysis of a new lending protocol. Afternoon: Write risk report, present findings to team. Evening: Monitor governance proposals.',
    'Junior Analyst → DeFi Analyst → Senior Analyst → Head of Research → Chief Risk Officer',
    3
  ),
  (
    'NFT Artist / Creator',
    'nft-creator',
    'creative',
    'Create, launch, and market digital art and collectibles',
    'NFT Creators combine artistic talent with Web3 knowledge to create and sell digital art, collectibles, and generative art. You''ll learn about blockchain minting, marketplace dynamics, community building for artists, and the intersection of art and technology.',
    30000, 150000, 'medium', 'high',
    '["Digital Art", "NFT Minting", "Marketplace Strategy", "Community Building", "Brand Building", "Smart Contract Basics"]',
    '["creative", "entrepreneurial", "visual", "persistent", "community-oriented"]',
    'Morning: Create new artwork, experiment with styles. Midday: Engage with collector community on Twitter/Discord. Afternoon: Set up mint, coordinate with marketplace. Evening: Network with other artists, plan next drop.',
    'Solo Creator → Established Artist → Collection Lead → Creative Director → Brand Founder',
    4
  ),
  (
    'On-Chain Researcher',
    'on-chain-researcher',
    'semi-technical',
    'Track wallets, analyze data, uncover alpha',
    'On-Chain Researchers analyze blockchain data to uncover trends, track whale wallets, identify emerging protocols, and provide actionable insights. Requires comfort with data tools (Dune Analytics, Nansen), SQL knowledge, and deep understanding of blockchain transactions.',
    70000, 160000, 'high', 'low',
    '["Dune Analytics", "SQL", "Blockchain Data", "Research Writing", "Data Visualization", "Critical Thinking"]',
    '["investigative", "data-driven", "curious", "thorough", "independent"]',
    'Morning: Run Dune queries, check unusual on-chain activity. Midday: Deep research into wallet clusters and fund flows. Afternoon: Write analysis thread or report. Evening: Monitor new contract deployments.',
    'Junior Researcher → On-Chain Analyst → Lead Researcher → Head of Research → Chief Intelligence Officer',
    5
  ),
  (
    'Web3 Content Creator',
    'web3-content-creator',
    'non-technical',
    'Write threads, newsletters, and content that educates',
    'Web3 Content Creators produce educational and engaging content about blockchain, crypto, and decentralized technology. You''ll write Twitter threads, newsletters, blog posts, video scripts, and documentation. Strong writing skills and ability to simplify complex topics are essential.',
    50000, 130000, 'high', 'medium',
    '["Copywriting", "Technical Writing", "Social Media Strategy", "SEO", "Newsletter Management", "Storytelling"]',
    '["communicative", "curious", "creative", "consistent", "empathetic"]',
    'Morning: Research trending topics, draft Twitter thread. Midday: Write newsletter issue, create blog post outline. Afternoon: Edit and publish, engage with comments. Evening: Plan content calendar for next week.',
    'Writer → Content Creator → Content Lead → Head of Content → VP of Marketing',
    6
  ),
  (
    'Protocol Researcher',
    'protocol-researcher',
    'technical',
    'Deep-dive into whitepapers, governance, and mechanism design',
    'Protocol Researchers study the theoretical and practical foundations of blockchain protocols. You''ll analyze whitepapers, evaluate governance mechanisms, study consensus algorithms, and contribute to protocol design. Requires strong technical foundation and academic rigor.',
    90000, 200000, 'medium', 'low',
    '["Whitepaper Analysis", "Game Theory", "Mechanism Design", "Cryptography Basics", "Technical Writing", "Governance Systems"]',
    '["intellectual", "rigorous", "patient", "detail-oriented", "theoretical"]',
    'Morning: Read new whitepapers and research papers. Midday: Analyze governance proposal, model incentive structures. Afternoon: Write research report, peer review. Evening: Attend protocol research calls.',
    'Junior Researcher → Protocol Researcher → Senior Researcher → Research Lead → Chief Scientist',
    7
  ),
  (
    'Blockchain QA Tester',
    'blockchain-qa-tester',
    'semi-technical',
    'Test smart contracts, find bugs, ensure security',
    'Blockchain QA Testers ensure smart contracts and dApps work correctly and securely. You''ll write test cases, perform manual and automated testing, identify vulnerabilities, and work closely with developers to fix issues. A great entry point into Web3 for people with attention to detail.',
    60000, 140000, 'high', 'low',
    '["Test Writing", "Bug Reporting", "Security Basics", "Foundry/Hardhat", "Edge Case Thinking", "Documentation"]',
    '["meticulous", "skeptical", "systematic", "persistent", "observant"]',
    'Morning: Review new code changes, plan test cases. Midday: Run test suites, document edge cases. Afternoon: File bug reports, verify fixes. Evening: Learn about new vulnerability patterns.',
    'Junior QA → QA Tester → Senior QA → QA Lead → Security Engineer',
    8
  )
ON CONFLICT (slug) DO NOTHING;

-- ============================================================
-- SKILLS (26 initial skills)
-- ============================================================
INSERT INTO public.skills (name, slug, category, description)
VALUES
  -- Technical
  ('Solidity', 'solidity', 'technical', 'Smart contract programming language for Ethereum'),
  ('Rust', 'rust', 'technical', 'Systems programming language used in Solana and Polkadot'),
  ('SQL', 'sql', 'technical', 'Structured Query Language for data analysis'),
  ('JavaScript/TypeScript', 'javascript-typescript', 'technical', 'Web development and dApp frontend programming'),
  ('Security Auditing', 'security-auditing', 'technical', 'Identifying vulnerabilities in smart contracts'),
  ('Gas Optimization', 'gas-optimization', 'technical', 'Reducing transaction costs in smart contracts'),
  ('Test Writing', 'test-writing', 'technical', 'Writing comprehensive test suites for blockchain applications'),
  -- Domain
  ('DeFi Protocols', 'defi-protocols', 'domain', 'Understanding decentralized finance mechanics'),
  ('Tokenomics', 'tokenomics', 'domain', 'Token economics and incentive design'),
  ('NFT Minting', 'nft-minting', 'domain', 'Creating and deploying NFT collections'),
  ('Blockchain Data', 'blockchain-data', 'domain', 'Analyzing on-chain data and transactions'),
  ('Whitepaper Analysis', 'whitepaper-analysis', 'domain', 'Evaluating blockchain protocol whitepapers'),
  ('Game Theory', 'game-theory', 'domain', 'Understanding strategic interactions in protocol design'),
  ('Governance Systems', 'governance-systems', 'domain', 'DAO governance and voting mechanisms'),
  ('Risk Assessment', 'risk-assessment', 'domain', 'Evaluating protocol and market risks'),
  -- Soft
  ('Community Strategy', 'community-strategy', 'soft', 'Building and growing online communities'),
  ('Content Writing', 'content-writing', 'soft', 'Creating educational and engaging written content'),
  ('Copywriting', 'copywriting', 'soft', 'Persuasive writing for marketing and communications'),
  ('Event Planning', 'event-planning', 'soft', 'Organizing community events, AMAs, and workshops'),
  ('Conflict Resolution', 'conflict-resolution', 'soft', 'Managing disputes and maintaining community health'),
  ('Research Writing', 'research-writing', 'soft', 'Academic-style research reports and analysis'),
  ('Storytelling', 'storytelling', 'soft', 'Crafting compelling narratives around Web3 topics'),
  -- Tool
  ('Discord Management', 'discord-management', 'tool', 'Managing Discord servers, bots, and roles'),
  ('Dune Analytics', 'dune-analytics', 'tool', 'On-chain data visualization and analysis platform'),
  ('Foundry/Hardhat', 'foundry-hardhat', 'tool', 'Smart contract development and testing frameworks'),
  ('Data Visualization', 'data-visualization', 'tool', 'Creating visual representations of data and metrics'),
  ('Spreadsheet Modeling', 'spreadsheet-modeling', 'tool', 'Financial modeling and analysis with spreadsheets')
ON CONFLICT (slug) DO NOTHING;
