import { createClient, type InsForgeClient } from "@insforge/sdk";

/**
 * Server-side InsForge client using the API key (bypasses RLS, like Supabase service role).
 * Use this in API routes and server components.
 */
export function getInsforgeServerClient(): InsForgeClient {
  return createClient({
    baseUrl: process.env.NEXT_PUBLIC_INSFORGE_BASE_URL!,
    anonKey: process.env.INSFORGE_API_KEY!,
  });
}
