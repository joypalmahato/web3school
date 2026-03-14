const REDIRECT_PARAM = "redirect";
const POST_AUTH_PATH = "/beta-access";
const REDIRECT_URL_BASE = "http://web3school.local";
const DISALLOWED_REDIRECT_PATHS = new Set([
  "/login",
  "/signup",
  "/verify-email",
  "/forgot-password",
  "/beta-access",
  "/waitlist",
  "/callback",
]);

export const POST_AUTH_REDIRECT_COOKIE = "insforge_post_auth_redirect";

export function sanitizeAuthRedirectPath(
  value: string | null | undefined
): string | null {
  if (!value) {
    return null;
  }

  const trimmedValue = value.trim();
  if (!trimmedValue.startsWith("/") || trimmedValue.startsWith("//")) {
    return null;
  }

  try {
    const url = new URL(trimmedValue, REDIRECT_URL_BASE);
    const normalizedPath = `${url.pathname}${url.search}${url.hash}`;

    if (url.origin !== REDIRECT_URL_BASE) {
      return null;
    }

    if (
      url.pathname.startsWith("/api/") ||
      DISALLOWED_REDIRECT_PATHS.has(url.pathname)
    ) {
      return null;
    }

    return normalizedPath;
  } catch {
    return null;
  }
}

export function withAuthRedirect(
  path: string,
  redirectPath: string | null | undefined
): string {
  const safeRedirect = sanitizeAuthRedirectPath(redirectPath);

  if (!safeRedirect) {
    return path;
  }

  const url = new URL(path, REDIRECT_URL_BASE);
  url.searchParams.set(REDIRECT_PARAM, safeRedirect);

  return `${url.pathname}${url.search}${url.hash}`;
}

export function buildPostAuthRedirectPath(
  redirectPath: string | null | undefined
): string {
  return withAuthRedirect(POST_AUTH_PATH, redirectPath);
}

export function setPostAuthRedirectCookie(
  redirectPath: string | null | undefined
): void {
  if (typeof document === "undefined") {
    return;
  }

  const safeRedirect = sanitizeAuthRedirectPath(redirectPath);
  const secure = window.location.protocol === "https:" ? "; Secure" : "";

  if (!safeRedirect) {
    document.cookie = `${POST_AUTH_REDIRECT_COOKIE}=; path=/; max-age=0; SameSite=Lax${secure}`;
    return;
  }

  document.cookie = `${POST_AUTH_REDIRECT_COOKIE}=${encodeURIComponent(
    safeRedirect
  )}; path=/; max-age=600; SameSite=Lax${secure}`;
}

export function setClientCookie(
  name: string,
  value: string,
  maxAgeSeconds = 600
): void {
  if (typeof document === "undefined") {
    return;
  }

  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; path=/; max-age=${maxAgeSeconds}; SameSite=Lax${secure}`;
}

export function clearClientCookie(name: string): void {
  if (typeof document === "undefined") {
    return;
  }

  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=; path=/; max-age=0; SameSite=Lax${secure}`;
}

export function navigateInBrowser(url: string): void {
  if (typeof window === "undefined") {
    return;
  }

  window.location.assign(url);
}
