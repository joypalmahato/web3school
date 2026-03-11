/**
 * @component BlogPostPage
 * @part-of Web3School -- Marketing / Blog
 * @design Clean reading layout, max-width 720px
 */
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post Not Found | Web3School" };
  return {
    title: `${post.title} | Web3School Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6">
        {/* Back link */}
        <AnimatedSection>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#A0A0A0] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </AnimatedSection>

        {/* Header */}
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

        {/* Content */}
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

        {/* Divider + CTA */}
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
