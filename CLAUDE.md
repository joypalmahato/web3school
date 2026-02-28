# CLAUDE.md — Project Rules for Web3School

## IDENTITY
This is Web3School: AI-powered Web3 career discovery platform.
One-liner: "Duolingo for Web3 careers."

## RULES
- TypeScript strict mode everywhere. No `any` types.
- All components must be React Server Components by default. Use 'use client' only when needed.
- All API routes validate input with Zod schemas.
- All database queries use the Supabase typed client.
- All pages must have loading.tsx and error.tsx siblings.
- All forms use React Hook Form + Zod.
- All animations use Framer Motion.
- Never use inline styles. Always Tailwind.
- Mobile-first: design for 375px, then md: and lg: breakpoints.
- Dark theme ONLY. No light mode toggle.
- Commit after every chunk with message format: "chunk-N: description"

## DESIGN TOKENS
Primary: #6C63FF | Cyan: #00D4FF | BG: #0A0A1A | Card: #0F0F23
Heading font: Plus Jakarta Sans | Body: Inter | Code: JetBrains Mono

## DATABASE
Supabase PostgreSQL. RLS on all user tables. Service role key for API routes only.

## AI
Claude API via Vercel AI SDK. Model: claude-sonnet-4-5-20250929. Stream all responses.

## DEPENDENCIES (locked versions — do not upgrade without reason)
next@14 | react@18 | @supabase/supabase-js@2 | @supabase/ssr@0 | zustand@4
framer-motion@11 | ai@3 | @anthropic-ai/sdk@0 | zod@3 | react-hook-form@7
recharts@2 | lucide-react@0 | resend@3 | posthog-js@1

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
