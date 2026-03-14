import { APP_NAME, APP_URL, SOCIAL_LINKS } from "@/lib/utils/constants";

export const SITE_NAME = APP_NAME;
export const SITE_URL = APP_URL;

export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}

export function trimDescription(text: string, maxLength = 160): string {
  const normalized = text.replace(/\s+/g, " ").trim();

  if (normalized.length <= maxLength) {
    return normalized;
  }

  const truncated = normalized.slice(0, maxLength - 1);
  const boundary = truncated.lastIndexOf(" ");
  const safeBoundary =
    boundary > Math.floor(maxLength * 0.7) ? boundary : truncated.length;

  return `${truncated.slice(0, safeBoundary).trim()}...`;
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  sameAs: Object.values(SOCIAL_LINKS),
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};
