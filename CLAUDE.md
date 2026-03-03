# CLAUDE.md — Project Rules for Web3School

## IDENTITY
This is Web3School: AI-powered Web3 career discovery platform.
One-liner: "Duolingo for Web3 careers."

## RULES
- TypeScript strict mode everywhere. No `any` types.
- All components must be React Server Components by default. Use 'use client' only when needed.
- All API routes validate input with Zod schemas.
- All database queries use the InsForge typed client (`db()` helper from `@/lib/db`).
- All pages must have loading.tsx and error.tsx siblings.
- All forms use React Hook Form + Zod.
- All animations use Framer Motion.
- Never use inline styles. Always Tailwind.
- Mobile-first: design for 375px, then md: and lg: breakpoints.
- Dark theme default. Light mode supported via next-themes toggle.
- Commit message format: "type: description" (e.g. fix: ..., feat: ...)

## DESIGN TOKENS
Primary: #10B981 (green) | BG: #0A0A0A | Card: #111111 | Text: #FFFFFF
Borders: rgba(255,255,255,0.10) | CTAs: bg-white text-black
Heading font: Plus Jakarta Sans | Body: Inter | Code: JetBrains Mono

## DATABASE
InsForge (Postgres). RLS on all user tables. Use `db()` from `@/lib/db` in API routes.
Auth via `@insforge/nextjs` — `auth()` server-side, `getInsforgeClient()` client-side.

## AI
Groq SDK. Model: llama-3.3-70b-versatile. Stream all responses via ReadableStream + SSE.
Client at `@/lib/ai/client.ts`. Prompts in `@/lib/ai/prompts/`.

## DEPENDENCIES (locked versions — do not upgrade without reason)
next@16 | react@19 | groq-sdk@0 | @insforge/nextjs@1 | @insforge/sdk@1 | zustand@5
framer-motion@12 | ai@6 | zod@4 | react-hook-form@7
recharts@3 | lucide-react@0 | resend@6 | posthog-js@1

## FILE NAMING
- Components: PascalCase (Hero.tsx, DiscoveryChat.tsx)
- Utilities: camelCase (formatDate.ts, cn.ts)
- API routes: route.ts inside folder structure
- Types: types.ts or in the same file if small
- Constants: SCREAMING_SNAKE_CASE for values

## TESTING
- Vitest for unit tests
- Playwright for E2E
- Test files co-located: Component.test.tsx next to Component.tsx
