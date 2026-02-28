/**
 * @component PublicSharePage
 * @part-of Web3School — Shareable Result Cards
 * @design Public page, no auth required, OG meta tags for social preview
 * @flow Viewer sees shared result → CTA to sign up and discover their own path
 */
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { APP_NAME, APP_URL } from "@/lib/utils/constants";
import { SharePageClient } from "./SharePageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const { data: card } = await db("result_cards")
    .select("role_name, match_percentage, role_category")
    .eq("share_slug", slug)
    .single();

  if (!card) {
    return { title: "Result Not Found" };
  }

  const title = `I'm a ${card.match_percentage}% match for ${card.role_name} in Web3!`;
  const description = `Discover your ideal Web3 career path with ${APP_NAME}'s AI-powered career discovery.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${APP_URL}/share/${slug}`,
      siteName: APP_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function PublicSharePage({ params }: Props) {
  const { slug } = await params;

  const { data: card } = await db("result_cards")
    .select("*")
    .eq("share_slug", slug)
    .single();

  if (!card) {
    notFound();
  }

  // Increment view count (fire and forget)
  db("result_cards")
    .update({ view_count: (card.view_count || 0) + 1 })
    .eq("id", card.id)
    .then();

  return (
    <SharePageClient
      roleName={card.role_name}
      roleCategory={card.role_category}
      matchPercentage={card.match_percentage}
      topTraits={card.top_traits || []}
      viewCount={(card.view_count || 0) + 1}
    />
  );
}
