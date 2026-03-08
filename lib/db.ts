/**
 * Unified database wrapper using InsForge.
 *
 * InsForge uses @supabase/postgrest-js under the hood, so the query
 * builder API (from, select, insert, update, delete, eq, in, order, etc.)
 * is identical to Supabase.
 */
import { getInsforgeServerClient } from "@/lib/insforge/server";

/**
 * Returns a query builder for the given table via InsForge.
 *
 * Usage:
 *   const { data, error } = await db("profiles").select("*").eq("id", userId).single();
 *
 * Note: properly typed return requires generated schema types (à la `supabase gen types`).
 * Until InsForge provides a type-gen CLI, `any` is intentional here.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function db(table: string): any {
  const client = getInsforgeServerClient();
  return client.database.from(table);
}

/**
 * Returns the raw InsForge client for backend-specific operations (auth, storage, etc.).
 * Prefer `db()` for database queries.
 */
export function getRawClient() {
  return { type: "insforge" as const, client: getInsforgeServerClient() };
}
