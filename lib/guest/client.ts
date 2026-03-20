"use client";

import {
  GUEST_HOME_PATH,
  GUEST_SESSION_COOKIE,
  GUEST_SESSION_VALUE,
  isGuestSupportedPath,
} from "@/lib/guest/constants";
import { useGuestStore } from "@/lib/guest/store";

export function hasGuestSessionCookie(): boolean {
  if (typeof document === "undefined") return false;

  return document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .some((cookie) => cookie === `${GUEST_SESSION_COOKIE}=${GUEST_SESSION_VALUE}`);
}

export function resolveGuestEntryPath(redirectTarget?: string | null) {
  if (!redirectTarget) return GUEST_HOME_PATH;
  return isGuestSupportedPath(redirectTarget) ? redirectTarget : GUEST_HOME_PATH;
}

export function enterGuestMode(redirectTarget?: string | null) {
  if (typeof document !== "undefined") {
    document.cookie = `${GUEST_SESSION_COOKIE}=${GUEST_SESSION_VALUE}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax`;
  }

  useGuestStore.getState().activate();
  return resolveGuestEntryPath(redirectTarget);
}

export function exitGuestMode() {
  if (typeof document !== "undefined") {
    document.cookie = `${GUEST_SESSION_COOKIE}=; path=/; max-age=0; SameSite=Lax`;
  }

  useGuestStore.getState().deactivate();
}
