import { auth } from "@insforge/nextjs";
import { getInsforgeServerClient } from "./server";

/**
 * Get the authenticated user from InsForge cookies (server-side).
 * Use in API routes and server components.
 */
export async function getAuthenticatedUser() {
  const { userId, user } = await auth();
  return { userId, user };
}

/**
 * Get the admin (API key) client for bypassing RLS.
 */
export function getAdminClient() {
  return getInsforgeServerClient();
}
