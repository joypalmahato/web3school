export const GUEST_SESSION_COOKIE = "w3s_guest";
export const GUEST_SESSION_VALUE = "1";
export const GUEST_HOME_PATH = "/dashboard";

const GUEST_SUPPORTED_PREFIXES = [
  "/dashboard",
  "/roadmap",
  "/learn",
  "/progress",
  "/passport",
  "/settings",
  "/notifications",
];

export function isGuestSupportedPath(pathname?: string | null): boolean {
  if (!pathname) return false;

  return GUEST_SUPPORTED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );
}
