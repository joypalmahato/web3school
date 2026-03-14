export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  published: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-web3-careers-are-booming-in-2026",
    title: "Why Web3 Careers Are Booming in 2026",
    date: "2026-02-20",
    category: "Web3 Insight",
    excerpt:
      "The Web3 job market has exploded. From DeFi protocols to on-chain gaming studios, companies are hiring faster than talent can keep up. Here is what is driving the surge.",
    published: false,
    content: `
      <p>The Web3 industry has undergone a dramatic transformation over the past two years. What was once a niche corner of tech dominated by crypto traders and Solidity maximalists has evolved into a sprawling ecosystem of real companies solving real problems.</p>

      <h2>The Numbers Speak for Themselves</h2>
      <p>According to recent industry reports, Web3 job postings have grown 340% since 2024. Companies across DeFi, NFT infrastructure, on-chain gaming, and decentralized social are all competing for the same limited talent pool.</p>
      <p>But here is the interesting part: the majority of these roles are not engineering positions. Community managers, product designers, tokenomics analysts, and growth marketers are in equally high demand.</p>

      <h2>Why Now?</h2>
      <p>Several factors are converging to create this boom:</p>
      <ul>
        <li><strong>Regulatory clarity</strong> in major markets has given institutional investors the confidence to deploy capital into Web3 startups.</li>
        <li><strong>Layer 2 scaling solutions</strong> have made blockchain applications practical for everyday users, opening up massive new markets.</li>
        <li><strong>AI + blockchain convergence</strong> is creating entirely new job categories that did not exist 18 months ago.</li>
      </ul>

      <h2>What This Means for You</h2>
      <p>If you have been considering a career in Web3, the window of opportunity is wide open. The demand for skilled professionals far outstrips the supply, which means competitive salaries, remote-first positions, and the chance to work on genuinely novel technology.</p>
      <p>The key is to pick a specific role, build targeted skills, and demonstrate competence through real projects rather than certificates alone.</p>
    `,
  },
  {
    slug: "how-ai-is-changing-the-way-we-learn",
    title: "How AI Is Changing the Way We Learn",
    date: "2026-02-10",
    category: "Product Update",
    excerpt:
      "Traditional education follows a one-size-fits-all model. AI-powered learning adapts to you. Here is how Web3School uses AI to personalize every step of your journey.",
    published: false,
    content: `
      <p>For decades, education has operated on a broadcast model: one teacher, one curriculum, many students. The assumption is that everyone learns the same way, at the same pace. We know that is not true.</p>

      <h2>The Problem with Traditional Learning</h2>
      <p>Online courses improved access but kept the same fundamental flaw. Whether you are watching a video on Udemy or reading documentation, the content does not adapt to you. If you already understand a concept, you still sit through it. If you are struggling, there is no one to explain it differently.</p>

      <h2>How Web3School Uses AI</h2>
      <p>At Web3School, AI is not a feature we bolted on. It is the foundation of the entire learning experience:</p>
      <ul>
        <li><strong>Career Discovery:</strong> Our AI-powered conversation analyzes your background, interests, and goals to match you with the right Web3 career path.</li>
        <li><strong>Adaptive Roadmaps:</strong> Your 90-day learning plan adjusts based on your progress, spending more time on areas where you need it.</li>
        <li><strong>AI Tutor:</strong> Ask questions in natural language and get explanations tailored to your level of understanding.</li>
        <li><strong>Smart Assessments:</strong> Instead of generic quizzes, our AI generates challenges that test the specific skills employers actually look for.</li>
      </ul>

      <h2>The Result</h2>
      <p>Learners on Web3School complete their programs 3x faster than those using traditional online courses, with significantly higher skill retention. The future of education is not about more content. It is about smarter content delivery.</p>
    `,
  },
  {
    slug: "5-tips-for-your-first-week-learning-blockchain",
    title: "5 Tips for Your First Week Learning Blockchain",
    date: "2026-01-28",
    category: "Learning Tip",
    excerpt:
      "Starting your blockchain journey can feel overwhelming. These five practical tips will help you build a strong foundation without burning out.",
    published: false,
    content: `
      <p>You have decided to learn blockchain. Congratulations. Now comes the hard part: figuring out where to actually start. The space moves fast, the jargon is dense, and every resource assumes you already know something you do not.</p>

      <p>Here are five tips to make your first week productive instead of frustrating.</p>

      <h2>1. Understand the Why Before the How</h2>
      <p>Before diving into smart contracts or consensus mechanisms, spend time understanding why blockchains exist. What problems do they solve? Why is decentralization valuable? This context will make the technical concepts click much faster.</p>

      <h2>2. Pick One Chain, Stick With It</h2>
      <p>Ethereum, Solana, Bitcoin, Cosmos, Polkadot. Each has its own ecosystem, tools, and community. Trying to learn them all at once is a recipe for confusion. Pick one (Ethereum is a good default) and go deep before exploring others.</p>

      <h2>3. Use a Testnet Immediately</h2>
      <p>Theory without practice is forgettable. Set up a wallet, get some testnet tokens, and start interacting with real (test) contracts on day one. The hands-on experience will teach you more than any article.</p>

      <h2>4. Join One Community</h2>
      <p>Find a Discord server, Telegram group, or forum where beginners are welcome. Ask questions without shame. The blockchain community is generally welcoming to newcomers who show genuine curiosity.</p>

      <h2>5. Set a 30-Minute Daily Minimum</h2>
      <p>Consistency beats intensity. You will learn more from 30 focused minutes every day than from a 6-hour weekend marathon followed by a week of nothing. Build the habit first. The depth will follow.</p>
    `,
  },
];

export const PUBLISHED_BLOG_POSTS = BLOG_POSTS.filter((post) => post.published);

export function getPublishedBlogPost(slug: string): BlogPost | undefined {
  return PUBLISHED_BLOG_POSTS.find((post) => post.slug === slug);
}
