/**
 * Unified database wrapper that routes to either Supabase or InsForge.
 *
 * Both backends use @supabase/postgrest-js under the hood, so the query
 * builder API (from, select, insert, update, delete, eq, in, order, etc.)
 * is identical. The only difference is how you access it:
 *   - Supabase:  client.from("table")
 *   - InsForge:  client.database.from("table")
 *
 * This wrapper normalizes that difference.
 *
 * IMPORTANT: Supabase is imported via dynamic require only when BACKEND=supabase
 * to prevent @supabase/supabase-js (which bundles auth-js with hardcoded
 * Supabase URLs) from being included in client-side JS when using InsForge.
 */
import { BACKEND } from "@/lib/config";
import { getInsforgeServerClient } from "@/lib/insforge/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _supabaseAdmin: any = null;

function getSupabaseAdmin() {
  if (_supabaseAdmin) return _supabaseAdmin;
  // Dynamic require prevents bundler from including @supabase/supabase-js
  // in the client bundle when BACKEND=insforge
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { createClient } = require("@supabase/supabase-js");
  _supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
  return _supabaseAdmin;
}

/**
 * Returns a query builder for the given table, routed to the active backend.
 *
 * Usage is identical to Supabase:
 *   const { data, error } = await db("profiles").select("*").eq("id", userId).single();
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function db(table: string): any {
  if (BACKEND === "insforge") {
    const client = getInsforgeServerClient();
    return client.database.from(table);
  }

  // Default: Supabase (service role — bypasses RLS, for API routes)
  const client = getSupabaseAdmin();
  return client.from(table);
}

/**
 * Returns the raw client for backend-specific operations (auth, storage, etc.).
 * Prefer `db()` for database queries.
 */
export function getRawClient() {
  if (BACKEND === "insforge") {
    return { type: "insforge" as const, client: getInsforgeServerClient() };
  }
  return { type: "supabase" as const, client: getSupabaseAdmin() };
}
