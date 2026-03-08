import { InsforgeMiddleware } from "@insforge/nextjs/middleware";
import { NextRequest, NextResponse } from "next/server";

const insforgeHandler = InsforgeMiddleware({
  baseUrl: process.env.NEXT_PUBLIC_INSFORGE_BASE_URL!,
  publicRoutes: ["/", "/login", "/signup", "/verify-email", "/callback", "/waitlist", "/share", "/passport", "/blog", "/roles", "/how-it-works", "/product-roadmap"],
  signInUrl: "/login",
  signUpUrl: "/signup",
  useBuiltInAuth: false,
});

export default function middleware(request: NextRequest) {
  const response = insforgeHandler(request) as NextResponse;

  // Forward pathname to server components so layouts can avoid redirect loops
  response.headers.set("x-pathname", request.nextUrl.pathname);

  // A/B test: assign hero variant cookie on homepage first visit (30-day window)
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

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|eot|mp4|webm|ogg)$).*)",
  ],
};
