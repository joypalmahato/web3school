import { INITIAL_ROLES } from "@/data/roles";
import { INITIAL_SKILLS } from "@/data/skills";
import { getLevelFromXP, type Profile, type TraitScores } from "@/lib/types";

export const GUEST_PRIMARY_ROLE_SLUG = "fullstack-dapp-developer";

export const GUEST_TRAITS: TraitScores = {
  technical_aptitude: 84,
  creative_drive: 61,
  social_orientation: 58,
  analytical_thinking: 79,
  risk_tolerance: 52,
  communication_strength: 67,
};

export const GUEST_MATCHED_ROLES = [
  {
    role_slug: "fullstack-dapp-developer",
    match_score: 93,
    reasoning:
      "You enjoy building practical products, can reason through technical systems, and still care about user experience.",
  },
  {
    role_slug: "web3-ux-designer",
    match_score: 86,
    reasoning:
      "Your mix of product empathy and technical curiosity makes UX work in Web3 a strong secondary fit.",
  },
  {
    role_slug: "web3-data-analyst",
    match_score: 81,
    reasoning:
      "You seem comfortable spotting patterns and using evidence to guide decisions, which translates well to analytics work.",
  },
];

type GuestTaskBlueprint = {
  id: string;
  week_number: number;
  day_number: number;
  title: string;
  description: string;
  task_type: "lesson" | "exercise" | "project" | "quiz" | "reflection";
  estimated_minutes: number;
  difficulty: "beginner" | "intermediate" | "advanced";
  xp_reward: number;
  content: {
    lesson_text?: string;
    exercise_prompt?: string;
    quiz_questions?: {
      question: string;
      options: string[];
      correct_index: number;
      explanation: string;
    }[];
    project_brief?: string;
    resources?: {
      title: string;
      url: string;
      type: "article" | "video" | "tutorial" | "tool";
    }[];
  };
};

const GUEST_TASK_BLUEPRINTS: GuestTaskBlueprint[] = [
  {
    id: "guest-task-wallet-flow",
    week_number: 1,
    day_number: 1,
    title: "Map the wallet connection journey",
    description:
      "Break down the first-run experience for a user connecting a wallet to a dApp for the first time.",
    task_type: "lesson",
    estimated_minutes: 18,
    difficulty: "beginner",
    xp_reward: 10,
    content: {
      lesson_text: `
## Why this matters

Every Web3 product lives or dies on its first few user moments. If a newcomer cannot connect a wallet, understand why they are signing a message, or tell whether a transaction is safe, they churn before the product gets a chance.

## What strong wallet UX looks like

- Explain what the wallet is doing in plain language.
- Separate **read-only connection**, **signature**, and **transaction approval**.
- Give the user a safe escape hatch at each step.
- Warn about gas and chain switching before the wallet prompt appears.

## Demo lens

In Web3School, this lesson sits in Week 1 because product-minded developers need to think in flows, not just components. The best dApp engineers reduce fear and ambiguity at the same time.
      `.trim(),
      resources: [
        {
          title: "EIP-4361: Sign-In with Ethereum",
          url: "https://eips.ethereum.org/EIPS/eip-4361",
          type: "article",
        },
        {
          title: "Wallet UX Checklist",
          url: "https://web3ux.design",
          type: "tool",
        },
      ],
    },
  },
  {
    id: "guest-task-state-model",
    week_number: 1,
    day_number: 2,
    title: "Design the connection state model",
    description:
      "Define the UI states your app needs before, during, and after wallet connection.",
    task_type: "exercise",
    estimated_minutes: 22,
    difficulty: "beginner",
    xp_reward: 10,
    content: {
      exercise_prompt: `
Write down the UI contract for these states:

1. Wallet disconnected
2. Wallet modal open
3. Wrong network detected
4. Signature requested
5. Transaction pending
6. Transaction confirmed
7. Transaction failed

For each state, answer:

- What does the user see?
- What action can they take next?
- What do you log for debugging?
      `.trim(),
    },
  },
  {
    id: "guest-task-mini-project",
    week_number: 1,
    day_number: 3,
    title: "Build a trust-first connect screen",
    description:
      "Create a simple connect-wallet page that reduces confusion for first-time users.",
    task_type: "project",
    estimated_minutes: 35,
    difficulty: "beginner",
    xp_reward: 50,
    content: {
      project_brief: `
### Goal

Build a single-screen prototype with:

- A headline that explains the action
- A short trust note about why the wallet is needed
- A visible network requirement
- A primary "Connect wallet" CTA
- A fallback link for users who do not have a wallet yet

### Success criteria

- A non-crypto friend could explain what happens next
- The copy avoids jargon like "sign", "nonce", and "provider" unless explained
- Error states feel calm and recoverable
      `.trim(),
    },
  },
  {
    id: "guest-task-quiz",
    week_number: 1,
    day_number: 4,
    title: "Check your wallet UX instincts",
    description:
      "A quick concept check on safe and clear wallet interaction patterns.",
    task_type: "quiz",
    estimated_minutes: 10,
    difficulty: "beginner",
    xp_reward: 20,
    content: {
      quiz_questions: [
        {
          question:
            "Which prompt should come first when a user is new to your dApp?",
          options: [
            "A transaction approval",
            "A short explanation of why connection is needed",
            "A gas settings modal",
            "A signature request without context",
          ],
          correct_index: 1,
          explanation:
            "Context should come before any wallet action. Users need to understand why the app is asking.",
        },
        {
          question:
            "What is the safest way to handle a wrong-network state?",
          options: [
            "Silently fail and wait",
            "Automatically switch without telling the user",
            "Explain the mismatch and offer a clear switch-network action",
            "Hide the connect button",
          ],
          correct_index: 2,
          explanation:
            "Users should see what is wrong and how to fix it before another wallet prompt appears.",
        },
      ],
    },
  },
  {
    id: "guest-task-reflection",
    week_number: 1,
    day_number: 5,
    title: "Reflect on the product mindset",
    description:
      "Capture what changed in how you think about dApp onboarding after this week.",
    task_type: "reflection",
    estimated_minutes: 12,
    difficulty: "beginner",
    xp_reward: 10,
    content: {
      lesson_text: `
### Reflection prompt

What makes a wallet flow feel *trustworthy* instead of merely *functional*?

Use three short bullets:

- one thing you would simplify
- one thing you would explain earlier
- one thing you would measure in production
      `.trim(),
    },
  },
];

const ROADMAP_WEEK_THEMES = [
  "Wallets, onboarding, and trust",
  "Transaction states and optimistic UX",
  "Reading on-chain data in the UI",
  "Design systems for dApps",
  "Forms, validation, and token actions",
  "Cross-chain mental models",
  "Dashboard architecture for power users",
  "Analytics for product signals",
  "Shipping safer transaction copy",
  "Growth loops in Web3 apps",
  "Performance and reliability",
  "Portfolio polish and public proof",
];

function isoDaysAgo(daysAgo: number): string {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString();
}

export function getDefaultGuestProfile(): Profile {
  const now = new Date().toISOString();
  const xpTotal = 340;

  return {
    id: "guest-profile",
    user_id: "guest-user",
    full_name: "Guest Explorer",
    email: "guest@demo.web3school.study",
    avatar_url: null,
    user_type: "seeker",
    onboarding_completed: true,
    discovery_completed: true,
    current_role_id: "guest-role",
    current_phase: 1,
    streak_count: 4,
    longest_streak: 9,
    last_active_at: now,
    xp_total: xpTotal,
    level: getLevelFromXP(xpTotal),
    timezone: "Asia/Kolkata",
    preferred_language: "en",
    created_at: now,
    updated_at: now,
    display_name: "Guest Explorer",
    headline: "Testing the Web3School product experience",
    location: "Remote",
    current_role_title: "Demo learner",
    employment_status: "student",
    years_experience: 1,
    education_level: "self_taught",
    education_field: "Computer Science",
    tech_comfort: "comfortable",
    existing_skills: ["React", "TypeScript", "Product Thinking"],
    tools_used: ["VS Code", "Figma", "MetaMask"],
    interest_areas: ["Infrastructure", "DeFi", "AI + Web3"],
    career_goals: ["Get a Web3 job", "Build a project"],
    time_commitment: "part_time",
    target_timeline: "6_months",
    budget: "low",
    social_links: {
      github: "https://github.com/web3school-demo",
      portfolio: "https://web3school.study",
    },
    resume_url: null,
    resume_text: null,
    ai_profile_summary:
      "A product-minded learner exploring frontend-heavy Web3 roles with strong technical curiosity.",
    onboarding_step: 5,
    onboarding_completed_at: now,
    profile_completeness: 94,
    is_approved: true,
    approved_at: now,
    beta_access_emailed_at: now,
    waitlist_id: null,
    referral_code: "guestdemo",
  };
}

export function getGuestRole(slug = GUEST_PRIMARY_ROLE_SLUG) {
  return (
    INITIAL_ROLES.find((role) => role.slug === slug) ??
    INITIAL_ROLES.find((role) => role.slug === GUEST_PRIMARY_ROLE_SLUG) ??
    INITIAL_ROLES[0]
  );
}

export function getGuestTasks(completedTaskIds: string[]) {
  return GUEST_TASK_BLUEPRINTS.map((task) => ({
    ...task,
    roadmap_id: "guest-roadmap",
    user_id: "guest-user",
    content: task.content,
    status: completedTaskIds.includes(task.id) ? "completed" : "pending",
    completed_at: completedTaskIds.includes(task.id) ? new Date().toISOString() : null,
    created_at: isoDaysAgo(7 - task.day_number),
  }));
}

export function getGuestTodayData(completedTaskIds: string[]) {
  const tasks = getGuestTasks(completedTaskIds);
  const currentTask = tasks.find((task) => task.status !== "completed") ?? null;
  const completedToday = tasks.filter((task) => task.status === "completed").length;

  return {
    roadmap_id: "guest-roadmap",
    current_week: 1,
    tasks,
    current_task: currentTask,
    completed_today: completedToday,
    total_today: tasks.length,
  };
}

export function getGuestRoadmap(completedTaskIds: string[], roleSlug = GUEST_PRIMARY_ROLE_SLUG) {
  const role = getGuestRole(roleSlug);
  const tasks = getGuestTasks(completedTaskIds);

  const milestones = ROADMAP_WEEK_THEMES.map((theme, index) => ({
    week: index + 1,
    theme,
    objectives: [
      `Understand the core user journey for ${role.name}.`,
      "Build confidence with a focused daily practice loop.",
    ],
    tasks:
      index === 0
        ? GUEST_TASK_BLUEPRINTS.map((task) => ({
            day: task.day_number,
            title: task.title,
            type: task.task_type,
            estimated_minutes: task.estimated_minutes,
          }))
        : [
            {
              day: 1,
              title: `${role.name}: weekly kickoff`,
              type: "lesson",
              estimated_minutes: 15,
            },
            {
              day: 2,
              title: `Hands-on ${theme.toLowerCase()}`,
              type: "exercise",
              estimated_minutes: 25,
            },
            {
              day: 3,
              title: `Mini build for ${theme.toLowerCase()}`,
              type: "project",
              estimated_minutes: 35,
            },
          ],
  }));

  return {
    roadmap: {
      id: "guest-roadmap",
      title: `${role.name} Demo Roadmap`,
      description:
        "A preview of how Web3School turns one role choice into a structured, week-by-week learning path.",
      total_weeks: 12,
      current_week: 1,
      status: "active",
      milestones,
    },
    tasks,
  };
}

export function getGuestTask(taskId: string, completedTaskIds: string[]) {
  return getGuestTasks(completedTaskIds).find((task) => task.id === taskId) ?? null;
}

export function getGuestProgressData(profile: Profile, completedTaskIds: string[]) {
  const tasks = getGuestTasks(completedTaskIds);
  const tasksCompleted = tasks.filter((task) => task.status === "completed");
  const totalMinutes = tasksCompleted.reduce(
    (sum, task) => sum + task.estimated_minutes,
    0
  );

  const heatmap = Array.from({ length: 90 }, (_, index) => {
    const daysAgo = 89 - index;
    const baseCount = daysAgo < 5 ? 1 : daysAgo % 7 === 0 ? 2 : 0;
    return {
      date: isoDaysAgo(daysAgo).split("T")[0],
      count: baseCount,
    };
  });

  return {
    profile: {
      xp_total: profile.xp_total,
      level: profile.level,
      streak_count: profile.streak_count,
      longest_streak: profile.longest_streak,
    },
    roadmap: {
      current_week: 1,
      total_weeks: 12,
      title: `${getGuestRole().name} Demo Roadmap`,
    },
    stats: {
      tasks_completed: tasksCompleted.length,
      total_tasks: tasks.length,
      hours_learned: Math.round((totalMinutes / 60) * 10) / 10,
      overall_progress: Math.round((tasksCompleted.length / tasks.length) * 100),
    },
    heatmap,
    recent_xp: tasksCompleted
      .slice(0, 3)
      .reverse()
      .map((task) => ({
        xp_amount: task.xp_reward,
        action: `task_${task.task_type}`,
        created_at: isoDaysAgo(task.day_number),
      })),
    traits: GUEST_TRAITS,
    milestones: [
      { id: "guest_first_task", label: "Finished the first lesson", icon: "star" },
      { id: "guest_streak", label: "Maintaining a 4-day streak", icon: "flame" },
      { id: "guest_project", label: "Shipped a mini project", icon: "trophy" },
    ],
  };
}

export function getGuestNotifications(readNotificationIds: string[]) {
  const notifications = [
    {
      id: "guest-notification-1",
      type: "tip",
      title: "Strong product instinct",
      message:
        "You spent most of your demo time on lessons that reduce user confusion. That is a good signal for frontend-facing Web3 roles.",
      created_at: isoDaysAgo(0),
    },
    {
      id: "guest-notification-2",
      type: "milestone",
      title: "Demo milestone unlocked",
      message:
        "You have previewed enough of the roadmap to see how the weekly structure works end to end.",
      created_at: isoDaysAgo(1),
    },
    {
      id: "guest-notification-3",
      type: "streak_reminder",
      title: "Keep the streak alive",
      message:
        "Complete one more lesson in the demo workspace to maintain momentum.",
      created_at: isoDaysAgo(2),
    },
  ];

  return notifications.map((notification) => ({
    ...notification,
    is_read: readNotificationIds.includes(notification.id),
  }));
}

export function getGuestUnreadNotificationCount(readNotificationIds: string[]) {
  return getGuestNotifications(readNotificationIds).filter(
    (notification) => !notification.is_read
  ).length;
}

export function getGuestPassportData(
  profile: Profile,
  completedTaskIds: string[],
  isPublic: boolean,
  roleSlug = GUEST_PRIMARY_ROLE_SLUG
) {
  const role = getGuestRole(roleSlug);
  const tasks = getGuestTasks(completedTaskIds);
  const completed = tasks.filter((task) => task.status === "completed");
  const completionPercent = Math.round((completed.length / tasks.length) * 100);
  const roleSkillNames = new Set(role.key_skills.map((skill) => skill.toLowerCase()));
  const extraSkills = INITIAL_SKILLS.filter(
    (skill) => !roleSkillNames.has(skill.name.toLowerCase())
  ).slice(0, Math.max(0, 8 - role.key_skills.length));

  return {
    passport: {
      id: "guest-passport",
      is_public: isPublic,
      public_slug: "",
      total_score: profile.xp_total,
    },
    profile: {
      full_name: profile.full_name,
      avatar_url: profile.avatar_url,
      email: profile.email,
      xp_total: profile.xp_total,
      level: profile.level,
      streak_count: profile.streak_count,
      longest_streak: profile.longest_streak,
    },
    role_name: role.name,
    skills: [
      ...role.key_skills.map((skillName, index) => ({
        id: `guest-role-skill-${index}`,
        name: skillName,
        category: "domain",
        proficiency: Math.max(30, completionPercent - index * 4),
        status:
          completionPercent >= 75
            ? "completed"
            : completionPercent >= 35
              ? "in_progress"
              : "locked",
      })),
      ...extraSkills.map((skill, index) => ({
        id: `guest-general-skill-${index}`,
        name: skill.name,
        category: skill.category,
        proficiency: Math.max(0, completionPercent - index * 8),
        status:
          completionPercent > (index + 1) * 10
            ? index < 2
              ? "completed"
              : "in_progress"
            : "locked",
      })),
    ],
    projects: completed
      .filter((task) => task.task_type === "project")
      .map((task) => task.title),
    completion_percent: completionPercent,
    traits: GUEST_TRAITS,
  };
}

export function getGuestNudges() {
  return [
    {
      id: "guest-nudge-1",
      type: "tip" as const,
      title: "Guest demo tip",
      message:
        "Open the roadmap after this page to see how the same role expands into a 12-week structure.",
    },
  ];
}
