/**
 * @component BlogIndexPage
 * @part-of Web3School -- Marketing / Blog
 * @design Coming-soon hub until posts are published
 */
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, PenTool, Rss } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { PUBLISHED_BLOG_POSTS } from "@/data/blog";
import { absoluteUrl } from "@/lib/seo";

export function generateMetadata(): Metadata {
  const hasPublishedPosts = PUBLISHED_BLOG_POSTS.length > 0;

  return {
    title: "Blog",
    description:
      "Web3School's blog will publish practical career guides, learning breakdowns, and product updates for the next wave of Web3 talent.",
    alternates: {
      canonical: absoluteUrl("/blog"),
    },
    openGraph: {
      title: "Blog",
      description:
        "Web3School's blog will publish practical career guides, learning breakdowns, and product updates for the next wave of Web3 talent.",
      url: absoluteUrl("/blog"),
      type: "website",
    },
    robots: hasPublishedPosts
      ? undefined
      : {
          index: false,
          follow: true,
        },
  };
}

const UPCOMING_TOPICS = [
  "How to break into Web3 roles without a computer science degree",
  "What a strong Skill Passport should prove to hiring teams",
  "Role-by-role learning plans for analysts, marketers, builders, and creators",
];

export default function BlogPage() {
  const hasPublishedPosts = PUBLISHED_BLOG_POSTS.length > 0;
  const blogJsonLd = hasPublishedPosts
    ? {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Web3School Blog",
        url: absoluteUrl("/blog"),
        mainEntity: {
          "@type": "ItemList",
          itemListElement: PUBLISHED_BLOG_POSTS.map((post, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: absoluteUrl(`/blog/${post.slug}`),
            name: post.title,
          })),
        },
      }
    : null;

  return (
    <div className="min-h-screen pt-32 pb-16">
      {blogJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
        />
      ) : null}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
            Blog
          </h1>
          <p className="text-[#A0A0A0] mt-4 text-lg">
            Practical guides, role breakdowns, and Web3School product notes are
            on the way.
          </p>
        </AnimatedSection>

        {hasPublishedPosts ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PUBLISHED_BLOG_POSTS.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.08}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full bg-[#111111]/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
                >
                  <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-[#A0A0A0]">
                    {post.category}
                  </span>
                  <h2 className="text-lg font-heading font-bold text-white mt-4 group-hover:text-white/80 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#A0A0A0] text-sm mt-2 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <time className="text-xs text-[#666666]">{post.date}</time>
                    <ArrowRight className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-6 items-stretch">
            <AnimatedSection className="bg-[#111111]/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-10">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#A0A0A0]">
                <PenTool className="w-4 h-4" />
                Coming Soon
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-4">
                We&apos;re building a blog worth bookmarking.
              </h2>
              <p className="text-[#A0A0A0] mt-4 leading-relaxed">
                Instead of publishing filler, we&apos;re lining up role guides,
                learning strategy posts, and launch notes that actually help
                people break into Web3 work.
              </p>

              <div className="mt-8 space-y-4">
                {UPCOMING_TOPICS.map((topic) => (
                  <div
                    key={topic}
                    className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-4"
                  >
                    <CalendarDays className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                    <p className="text-sm text-white/85">{topic}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08} className="bg-[#111111]/50 backdrop-blur-md border border-white/10 rounded-3xl p-8">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#A0A0A0]">
                <Rss className="w-4 h-4" />
                Stay Close
              </div>
              <h2 className="text-xl font-heading font-bold text-white mt-4">
                Follow the rollout
              </h2>
              <p className="text-[#A0A0A0] mt-3 text-sm leading-relaxed">
                New posts will go live here as soon as they&apos;re ready. Until
                then, the best place to track updates is the product itself.
              </p>
              <div className="mt-8 space-y-3">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center w-full rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90 transition-colors"
                >
                  Start Your Discovery
                </Link>
                <a
                  href="https://x.com/Web3School_X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
                >
                  Follow on X
                </a>
              </div>
            </AnimatedSection>
          </div>
        )}
      </div>
    </div>
  );
}
