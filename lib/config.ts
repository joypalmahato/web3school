export const BACKEND = (process.env.NEXT_PUBLIC_BACKEND || "supabase") as
  | "supabase"
  | "insforge";
