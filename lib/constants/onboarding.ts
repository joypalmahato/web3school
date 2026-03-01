export const EMPLOYMENT_OPTIONS = [
  { value: "employed_fulltime", emoji: "💼", label: "Employed Full-time", description: "Working 40+ hours/week" },
  { value: "employed_parttime", emoji: "🕐", label: "Employed Part-time", description: "Working less than 40 hours/week" },
  { value: "freelancer", emoji: "🎯", label: "Freelancer / Contractor", description: "Working independently for clients" },
  { value: "student", emoji: "📚", label: "Student", description: "Currently studying" },
  { value: "career_changer", emoji: "🔄", label: "Career Changer", description: "Transitioning from another field" },
  { value: "unemployed", emoji: "🔍", label: "Looking for Work", description: "Actively job searching" },
  { value: "entrepreneur", emoji: "🚀", label: "Entrepreneur / Founder", description: "Building my own thing" },
] as const;

export const EDUCATION_OPTIONS = [
  { value: "high_school", label: "High School" },
  { value: "some_college", label: "Some College" },
  { value: "bachelors", label: "Bachelor's Degree" },
  { value: "masters", label: "Master's Degree" },
  { value: "phd", label: "PhD / Doctorate" },
  { value: "bootcamp", label: "Bootcamp / Certificate" },
  { value: "self_taught", label: "Self-taught" },
] as const;

export const TECH_COMFORT_OPTIONS = [
  { value: "beginner", emoji: "🌱", label: "Beginner", description: "I'm new to tech — just getting started" },
  { value: "familiar", emoji: "🧩", label: "Familiar", description: "I know the basics — can use tools and apps" },
  { value: "comfortable", emoji: "⚡", label: "Comfortable", description: "I can code or build things on my own" },
  { value: "advanced", emoji: "🔥", label: "Advanced", description: "I've shipped products or have deep expertise" },
] as const;

export const SKILL_OPTIONS = [
  // Programming
  { value: "javascript", label: "JavaScript", category: "Programming" },
  { value: "typescript", label: "TypeScript", category: "Programming" },
  { value: "python", label: "Python", category: "Programming" },
  { value: "solidity", label: "Solidity", category: "Programming" },
  { value: "rust", label: "Rust", category: "Programming" },
  { value: "go", label: "Go", category: "Programming" },
  { value: "java", label: "Java", category: "Programming" },
  { value: "cpp", label: "C/C++", category: "Programming" },
  { value: "swift", label: "Swift", category: "Programming" },
  { value: "sql", label: "SQL", category: "Programming" },
  // Web & Frontend
  { value: "react", label: "React", category: "Web & Frontend" },
  { value: "nextjs", label: "Next.js", category: "Web & Frontend" },
  { value: "html_css", label: "HTML/CSS", category: "Web & Frontend" },
  { value: "tailwind", label: "Tailwind CSS", category: "Web & Frontend" },
  { value: "vue", label: "Vue.js", category: "Web & Frontend" },
  // Web3
  { value: "smart_contracts", label: "Smart Contracts", category: "Web3" },
  { value: "defi", label: "DeFi Protocols", category: "Web3" },
  { value: "nft", label: "NFTs / Digital Assets", category: "Web3" },
  { value: "dao", label: "DAOs & Governance", category: "Web3" },
  { value: "tokenomics", label: "Tokenomics", category: "Web3" },
  { value: "zk_proofs", label: "ZK Proofs", category: "Web3" },
  // Data & AI
  { value: "data_analysis", label: "Data Analysis", category: "Data & AI" },
  { value: "machine_learning", label: "Machine Learning", category: "Data & AI" },
  { value: "prompt_engineering", label: "Prompt Engineering", category: "Data & AI" },
  { value: "data_visualization", label: "Data Visualization", category: "Data & AI" },
  // Design
  { value: "ui_design", label: "UI Design", category: "Design" },
  { value: "ux_research", label: "UX Research", category: "Design" },
  { value: "graphic_design", label: "Graphic Design", category: "Design" },
  { value: "motion_design", label: "Motion Design", category: "Design" },
  { value: "3d_modeling", label: "3D Modeling", category: "Design" },
  // Marketing & Content
  { value: "content_writing", label: "Content Writing", category: "Marketing" },
  { value: "seo", label: "SEO", category: "Marketing" },
  { value: "social_media", label: "Social Media", category: "Marketing" },
  { value: "community_management", label: "Community Management", category: "Marketing" },
  { value: "email_marketing", label: "Email Marketing", category: "Marketing" },
  { value: "paid_ads", label: "Paid Advertising", category: "Marketing" },
  // Product & Business
  { value: "product_management", label: "Product Management", category: "Business" },
  { value: "project_management", label: "Project Management", category: "Business" },
  { value: "business_strategy", label: "Business Strategy", category: "Business" },
  { value: "technical_writing", label: "Technical Writing", category: "Business" },
] as const;

export const TOOL_OPTIONS = [
  { value: "figma", label: "Figma" },
  { value: "vscode", label: "VS Code" },
  { value: "github", label: "GitHub" },
  { value: "notion", label: "Notion" },
  { value: "slack", label: "Slack" },
  { value: "discord", label: "Discord" },
  { value: "chatgpt", label: "ChatGPT" },
  { value: "claude", label: "Claude" },
  { value: "photoshop", label: "Photoshop" },
  { value: "illustrator", label: "Illustrator" },
  { value: "canva", label: "Canva" },
  { value: "google_analytics", label: "Google Analytics" },
  { value: "tableau", label: "Tableau" },
  { value: "jupyter", label: "Jupyter Notebooks" },
  { value: "terminal", label: "Terminal/CLI" },
  { value: "docker", label: "Docker" },
  { value: "aws", label: "AWS" },
  { value: "metamask", label: "MetaMask" },
  { value: "hardhat", label: "Hardhat" },
  { value: "etherscan", label: "Etherscan" },
  { value: "jira", label: "Jira" },
  { value: "linear", label: "Linear" },
  { value: "vercel", label: "Vercel" },
  { value: "wordpress", label: "WordPress" },
  { value: "webflow", label: "Webflow" },
] as const;

export const INTEREST_OPTIONS = [
  { value: "web3_blockchain", emoji: "⛓️", label: "Web3 & Blockchain" },
  { value: "ai_ml", emoji: "🤖", label: "AI & Machine Learning" },
  { value: "software_dev", emoji: "💻", label: "Software Development" },
  { value: "design_creative", emoji: "🎨", label: "Design & Creative" },
  { value: "data_analytics", emoji: "📊", label: "Data & Analytics" },
  { value: "marketing_growth", emoji: "📈", label: "Marketing & Growth" },
  { value: "product_strategy", emoji: "🎯", label: "Product & Strategy" },
  { value: "content_creation", emoji: "✍️", label: "Content Creation" },
  { value: "community_building", emoji: "🤝", label: "Community Building" },
  { value: "gaming_metaverse", emoji: "🎮", label: "Gaming & Metaverse" },
  { value: "defi_trading", emoji: "💰", label: "DeFi & Trading" },
  { value: "freelance_creator", emoji: "🦋", label: "Freelance & Creator Economy" },
] as const;

export const CAREER_GOAL_OPTIONS = [
  { value: "land_first_job", emoji: "🎯", label: "Land my first tech job" },
  { value: "switch_careers", emoji: "🔄", label: "Switch to a new career" },
  { value: "level_up", emoji: "📈", label: "Level up in my current role" },
  { value: "go_freelance", emoji: "🦋", label: "Go freelance / independent" },
  { value: "build_startup", emoji: "🚀", label: "Build a startup or product" },
  { value: "earn_side_income", emoji: "💰", label: "Earn side income" },
  { value: "learn_for_fun", emoji: "🧠", label: "Learn for personal growth" },
  { value: "build_community", emoji: "🤝", label: "Build & lead a community" },
] as const;

export const TIME_COMMITMENT_OPTIONS = [
  { value: "casual", label: "Casual", description: "A few hours per week" },
  { value: "part_time", label: "Part-time", description: "5-10 hours per week" },
  { value: "half_time", label: "Half-time", description: "15-20 hours per week" },
  { value: "full_time", label: "Full-time", description: "30+ hours per week" },
] as const;

export const TIMELINE_OPTIONS = [
  { value: "1_month", label: "1 month", description: "Sprint mode" },
  { value: "3_months", label: "3 months", description: "Focused push" },
  { value: "6_months", label: "6 months", description: "Steady pace" },
  { value: "12_months", label: "12 months", description: "Long game" },
  { value: "no_rush", label: "No rush", description: "Going at my own pace" },
] as const;

export const BUDGET_OPTIONS = [
  { value: "free_only", label: "Free only", description: "I'm sticking to free resources" },
  { value: "low", label: "Under $50/mo", description: "A small monthly investment" },
  { value: "medium", label: "$50-200/mo", description: "Ready to invest in my growth" },
  { value: "high", label: "$200+/mo", description: "Serious about accelerating" },
  { value: "no_limit", label: "Whatever it takes", description: "Budget isn't a concern" },
] as const;

export const ONBOARDING_STEPS = [
  { step: 1, title: "About You", description: "The basics" },
  { step: 2, title: "Current Status", description: "Where you are now" },
  { step: 3, title: "Skills & Tools", description: "What you know" },
  { step: 4, title: "Interests & Goals", description: "Where you're headed" },
  { step: 5, title: "Boost Your Profile", description: "Stand out" },
] as const;
