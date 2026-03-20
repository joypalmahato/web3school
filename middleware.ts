import { InsforgeMiddleware } from "@insforge/nextjs/middleware";
import { NextRequest, NextResponse } from "next/server";
import {
  GUEST_HOME_PATH,
  GUEST_SESSION_COOKIE,
  GUEST_SESSION_VALUE,
  isGuestSupportedPath,
} from "@/lib/guest/constants";

const insforgeHandler = InsforgeMiddleware({
  baseUrl: process.env.NEXT_PUBLIC_INSFORGE_BASE_URL!,
  publicRoutes: [
    "/",
    "/login",
    "/signup",
    "/verify-email",
    "/callback",
    "/waitlist",
    "/share",
    "/passport",
    "/blog",
    "/roles",
    "/how-it-works",
    "/product-roadmap",
    "/privacy",
    "/terms",
    "/robots.txt",
    "/sitemap.xml",
  ],
  signInUrl: "/login",
  signUpUrl: "/signup",
  useBuiltInAuth: false,
});

function finalizeResponse(request: NextRequest, response: NextResponse) {
  response.headers.set("x-pathname", request.nextUrl.pathname);

  if (
    request.nextUrl.pathname === "/" &&
    !request.cookies.get("hero_variant")?.value
  ) {
    const variant = Math.random() < 0.5 ? "a" : "b";
    response.cookies.set("hero_variant", variant, {
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
      sameSite: "lax",
      httpOnly: false,
    });
  }

  return response;
}

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isGuestSession =
    request.cookies.get(GUEST_SESSION_COOKIE)?.value === GUEST_SESSION_VALUE;

  if (isGuestSession) {
    if (
      pathname === "/discover" ||
      pathname.startsWith("/discover/") ||
      pathname === "/results" ||
      pathname.startsWith("/results/") ||
      pathname === "/onboarding" ||
      pathname.startsWith("/onboarding/")
    ) {
      return finalizeResponse(
        request,
        NextResponse.redirect(new URL(GUEST_HOME_PATH, request.url))
      );
    }

    if (isGuestSupportedPath(pathname)) {
      return finalizeResponse(request, NextResponse.next());
    }
  }

  return finalizeResponse(request, insforgeHandler(request) as NextResponse);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|eot|mp4|webm|ogg)$).*)",
  ],
};
