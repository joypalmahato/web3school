import { redirect } from "next/navigation";
import {
  sanitizeAuthRedirectPath,
  withAuthRedirect,
} from "@/lib/insforge/redirect";

export const metadata = {
  title: "Beta Access - Web3School",
};

type WaitlistPageProps = {
  searchParams?: Promise<{ redirect?: string | string[] }>;
};

export default async function WaitlistPage({
  searchParams,
}: WaitlistPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const redirectParam = Array.isArray(resolvedSearchParams?.redirect)
    ? resolvedSearchParams.redirect[0]
    : resolvedSearchParams?.redirect;
  const safeRedirect = sanitizeAuthRedirectPath(redirectParam);

  redirect(withAuthRedirect("/beta-access", safeRedirect));
}
