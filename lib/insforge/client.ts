import { createClient, type InsForgeClient } from "@insforge/sdk";

let browserClient: InsForgeClient | null = null;

export function getInsforgeClient(): InsForgeClient {
  if (browserClient) return browserClient;

  browserClient = createClient({
    baseUrl: process.env.NEXT_PUBLIC_INSFORGE_BASE_URL!,
    anonKey: process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY!,
  });

  return browserClient;
}
