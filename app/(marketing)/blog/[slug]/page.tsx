/**
 * @component BlogPostPage
 * @part-of Web3School -- Marketing / Blog
 * @design Clean reading layout, max-width 720px
 */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  PUBLISHED_BLOG_POSTS,
  getPublishedBlogPost,
} from "@/data/blog";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { absoluteUrl, trimDescription } from "@/lib/seo";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PUBLISHED_BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonical = absoluteUrl(`/blog/${post.slug}`);
  const description = trimDescription(post.excerpt);

  return {
    title: post.title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: post.title,
      description,
      url: canonical,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: post.title,
      description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPublishedBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: trimDescription(post.excerpt),
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };

  return (
    <div className="min-h-screen pt-32 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="max-w-[720px] mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#A0A0A0] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-[#A0A0A0]">
                {post.category}
              </span>
              <time className="text-xs text-[#666666]">{post.date}</time>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              {post.title}
            </h1>
            <p className="text-[#A0A0A0] text-lg mt-4">{post.excerpt}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div
            className="prose prose-invert prose-sm max-w-none
              prose-headings:font-heading prose-headings:text-white prose-headings:font-bold
              prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4
              prose-p:text-[#A0A0A0] prose-p:leading-relaxed prose-p:mb-4
              prose-li:text-[#A0A0A0]
              prose-strong:text-white
              prose-ul:my-4 prose-ul:pl-4
              prose-a:text-white prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-[#A0A0A0] text-sm">
              Ready to start your Web3 career journey?
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 mt-3 px-6 py-3 bg-white text-black rounded-xl font-semibold text-sm hover:bg-white/90 transition-colors"
            >
              Get Started Free
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
