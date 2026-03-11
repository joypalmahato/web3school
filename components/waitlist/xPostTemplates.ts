const X_URL_LENGTH = 23;

export const MAX_X_POST_LENGTH = 280;

type TemplateKind = "direct-link" | "link-in-bio";

type TemplateContext = {
  referralCode: string;
  referralLink: string;
};

type TemplateDefinition = {
  id: string;
  kind: TemplateKind;
  build: (context: TemplateContext) => string;
};

export type WaitlistXTemplate = {
  id: string;
  kind: TemplateKind;
  text: string;
  characterCount: number;
};

const templateDefinitions: TemplateDefinition[] = [
  {
    id: "career-path-link",
    kind: "direct-link",
    build: ({ referralLink }) =>
      `Just joined the Web3School waitlist.\n\nIt helps you find the right Web3 career, learn the skills step by step, and prove them with real projects.\n\nIf you're trying to break into Web3, check it out:\n${referralLink}`,
  },
  {
    id: "plan-link",
    kind: "direct-link",
    build: ({ referralLink }) =>
      `I joined Web3School because it turns "how do I get into Web3?" into a real plan: pick the right path, learn what matters, and build proof with projects.\n\nJoin me here:\n${referralLink}`,
  },
  {
    id: "signal-link",
    kind: "direct-link",
    build: ({ referralLink }) =>
      `Most Web3 advice is just noise. Web3School helps you choose a role, learn step by step, and ship projects that prove your skills.\n\nJoin the waitlist:\n${referralLink}`,
  },
  {
    id: "lane-bio",
    kind: "link-in-bio",
    build: ({ referralCode }) =>
      `Just joined the Web3School waitlist to find my Web3 lane, learn step by step, and build proof with real projects.\n\nIf you want in too, link in bio. Use my code: ${referralCode}`,
  },
  {
    id: "clarity-bio",
    kind: "link-in-bio",
    build: ({ referralCode }) =>
      `Trying to break into Web3 without guessing. Web3School helps with role clarity, skill-building, and project proof.\n\nInvite link is in my bio. Referral code: ${referralCode}`,
  },
  {
    id: "fit-bio",
    kind: "link-in-bio",
    build: ({ referralCode }) =>
      `I'm using Web3School to figure out which Web3 role fits me and what to build next.\n\nWant the invite? Link in bio. Use code ${referralCode}`,
  },
];

function getXPostLength(text: string) {
  return text.replace(/https?:\/\/\S+/g, "x".repeat(X_URL_LENGTH)).length;
}

export function createWaitlistXTemplates({
  referralCode,
  referralLink,
}: TemplateContext): WaitlistXTemplate[] {
  const templates = templateDefinitions
    .filter((definition) => definition.kind === "direct-link" || referralCode)
    .map((definition) => {
      const text = definition.build({ referralCode, referralLink });

      return {
        id: definition.id,
        kind: definition.kind,
        text,
        characterCount: getXPostLength(text),
      };
    })
    .filter((template) => template.characterCount <= MAX_X_POST_LENGTH);

  if (templates.length > 0) {
    return templates;
  }

  const fallbackText = `Join me on the Web3School waitlist:\n${referralLink}`;

  return [
    {
      id: "fallback-link",
      kind: "direct-link",
      text: fallbackText,
      characterCount: getXPostLength(fallbackText),
    },
  ];
}

export function pickRandomWaitlistXTemplate(
  templates: WaitlistXTemplate[],
  currentTemplateId?: string
) {
  if (templates.length <= 1) {
    return templates[0];
  }

  const candidates = currentTemplateId
    ? templates.filter((template) => template.id !== currentTemplateId)
    : templates;

  if (candidates.length === 0) {
    return templates[0];
  }

  return candidates[Math.floor(Math.random() * candidates.length)];
}

export function pickSeededWaitlistXTemplate(
  templates: WaitlistXTemplate[],
  seedSource: string
) {
  if (templates.length <= 1) {
    return templates[0];
  }

  let hash = 0;

  for (const character of seedSource) {
    hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
  }

  return templates[hash % templates.length];
}
