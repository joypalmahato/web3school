import { cookies } from "next/headers";
import { GUEST_SESSION_COOKIE, GUEST_SESSION_VALUE } from "@/lib/guest/constants";

export async function isGuestSession() {
  const cookieStore = await cookies();
  return cookieStore.get(GUEST_SESSION_COOKIE)?.value === GUEST_SESSION_VALUE;
}
