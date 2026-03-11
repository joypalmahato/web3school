/**
 * @component BlogIndexPage
 * @part-of Web3School -- Marketing / Blog
 * @design Grid of blog cards, Kled style
 */
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata = {
  title: "Blog | Web3School",
  description:
    "Insights, tips, and updates on Web3 careers, AI-powered learning, and the future of work.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
            Blog
          </h1>
          <p className="text-[#A0A0A0] mt-4 text-lg">
            Insights on Web3 careers, AI-powered learning, and building the
            future.
          </p>
        </AnimatedSection>

        {/* Post grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full bg-[#111111]/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
              >
                {/* Category tag */}
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-[#A0A0A0]">
                  {post.category}
                </span>

                {/* Title */}
                <h2 className="text-lg font-heading font-bold text-white mt-4 group-hover:text-white/80 transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-[#A0A0A0] text-sm mt-2 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Date + arrow */}
                <div className="flex items-center justify-between mt-4">
                  <time className="text-xs text-[#666666]">{post.date}</time>
                  <ArrowRight className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
