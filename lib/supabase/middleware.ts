import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Protected routes that require authentication
  const protectedPaths = [
    "/discover",
    "/results",
    "/roadmap",
    "/learn",
    "/progress",
    "/passport",
    "/settings",
    "/notifications",
  ];

  const isProtectedRoute = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (isProtectedRoute && !user) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("redirect", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  // For authenticated users on protected routes (except /discover),
  // check if they've completed onboarding — if not, redirect to /discover
  const requiresOnboarding = [
    "/results",
    "/roadmap",
    "/learn",
    "/progress",
    "/passport",
    "/settings",
    "/notifications",
  ];

  const needsOnboardingCheck = requiresOnboarding.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (needsOnboardingCheck && user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("discovery_completed")
      .eq("id", user.id)
      .single();

    if (profile && !profile.discovery_completed) {
      const url = request.nextUrl.clone();
      url.pathname = "/discover";
      return NextResponse.redirect(url);
    }
  }

  // Redirect logged-in users away from auth pages and landing page
  const authOrLandingPaths = ["/login", "/signup"];
  const isAuthRoute = authOrLandingPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );
  const isLandingPage = request.nextUrl.pathname === "/";

  if ((isAuthRoute || isLandingPage) && user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("discovery_completed")
      .eq("id", user.id)
      .single();

    const url = request.nextUrl.clone();
    url.pathname = profile?.discovery_completed ? "/roadmap" : "/discover";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
