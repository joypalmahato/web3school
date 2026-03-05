/**
 * @component LessonContent
 * @part-of Web3School — Daily Learning
 * @design Infographic-style markdown renderer: colorful headings, card lists, callout boxes
 */
"use client";

import React, { ComponentPropsWithoutRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";

export interface LessonContentProps {
  markdown: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function childrenToText(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(childrenToText).join("");
  if (React.isValidElement(children)) {
    const el = children as React.ReactElement<{ children?: React.ReactNode }>;
    return childrenToText(el.props.children);
  }
  return "";
}

const KEYWORD_PREFIXES = [
  "note:", "tip:", "key:", "important:", "remember:", "warning:",
  "definition:", "example:", "summary:", "goal:", "insight:",
];

function isKeyConceptParagraph(text: string): boolean {
  const trimmed = text.trim();
  if (trimmed.length === 0 || trimmed.length >= 80) return false;
  const firstChar = trimmed.codePointAt(0) ?? 0;
  if (firstChar > 0x1f000) return true;
  const lower = trimmed.toLowerCase();
  return KEYWORD_PREFIXES.some((kw) => lower.startsWith(kw));
}

const fadeUp = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.25, ease: "easeOut" as const },
};

// ---------------------------------------------------------------------------
// Custom renderer map
// ---------------------------------------------------------------------------

function buildComponents(): React.ComponentProps<typeof ReactMarkdown>["components"] {
  return {
    // H1: large gradient heading (green → emerald)
    h1({ children, ...props }: ComponentPropsWithoutRef<"h1">) {
      return (
        <h1
          {...props}
          className="font-heading font-extrabold text-2xl md:text-3xl mb-5 mt-8 first:mt-0
                     bg-gradient-to-r from-[#10B981] to-emerald-400
                     bg-clip-text text-transparent tracking-tight leading-tight"
        >
          {children}
        </h1>
      );
    },

    // H2: left border in green with white text
    h2({ children, ...props }: ComponentPropsWithoutRef<"h2">) {
      return (
        <h2
          {...props}
          className="font-heading font-bold text-xl md:text-2xl mb-4 mt-7
                     pl-4 border-l-4 border-[#10B981] text-white tracking-tight"
        >
          {children}
        </h2>
      );
    },

    // H3: violet accent
    h3({ children, ...props }: ComponentPropsWithoutRef<"h3">) {
      return (
        <h3
          {...props}
          className="font-heading font-semibold text-lg mb-3 mt-6 text-violet-400 tracking-tight"
        >
          {children}
        </h3>
      );
    },

    // H4: amber accent
    h4({ children, ...props }: ComponentPropsWithoutRef<"h4">) {
      return (
        <h4
          {...props}
          className="font-heading font-semibold text-base mb-2 mt-5 text-amber-400"
        >
          {children}
        </h4>
      );
    },

    // Paragraph: key-concept card OR regular body text
    p({ children, ...props }: ComponentPropsWithoutRef<"p">) {
      const text = childrenToText(children);

      if (isKeyConceptParagraph(text)) {
        return (
          <motion.div
            {...fadeUp}
            className="my-4 px-4 py-3 rounded-xl border border-[#10B981]/30
                       bg-[#10B981]/5 flex items-center gap-2"
          >
            <span className="text-[#10B981] shrink-0 text-sm">▸</span>
            <p {...props} className="m-0 text-white font-medium text-sm leading-relaxed">
              {children}
            </p>
          </motion.div>
        );
      }

      return (
        <p {...props} className="text-[#D0D0D0] leading-[1.75] mb-4 text-[0.9375rem]">
          {children}
        </p>
      );
    },

    // Strong: green highlighted badge inline
    strong({ children, ...props }: ComponentPropsWithoutRef<"strong">) {
      return (
        <strong
          {...props}
          className="not-italic font-semibold text-[0.8125rem] px-1.5 py-0.5 rounded-md
                     bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/25 mx-0.5 align-middle"
        >
          {children}
        </strong>
      );
    },

    // Em: amber tinted italic
    em({ children, ...props }: ComponentPropsWithoutRef<"em">) {
      return (
        <em {...props} className="italic text-amber-300/90 not-underline">
          {children}
        </em>
      );
    },

    // Blockquote: callout card with left border and 💡 icon
    blockquote({ children, ...props }: ComponentPropsWithoutRef<"blockquote">) {
      return (
        <motion.blockquote
          {...fadeUp}
          {...(props as object)}
          className="my-5 border-l-4 border-[#10B981] rounded-r-xl
                     bg-[#10B981]/8 px-5 py-4 not-italic text-[#D0D0D0] text-sm leading-relaxed"
        >
          <span className="text-base mr-2 select-none">💡</span>
          {children}
        </motion.blockquote>
      );
    },

    // Inline code: cyan pill
    code({ children, className, ...props }: ComponentPropsWithoutRef<"code">) {
      const isBlock = Boolean(className);
      if (isBlock) {
        return (
          <code {...props} className={`${className ?? ""} font-mono text-[0.8125rem] text-cyan-400`}>
            {children}
          </code>
        );
      }
      return (
        <code
          {...props}
          className="font-mono text-[0.8125rem] px-1.5 py-0.5 rounded-md
                     bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 mx-0.5"
        >
          {children}
        </code>
      );
    },

    // Code block
    pre({ children, ...props }: ComponentPropsWithoutRef<"pre">) {
      return (
        <pre
          {...props}
          className="my-5 p-4 rounded-xl bg-[#0A0A0A] border border-white/[0.08]
                     font-mono text-[0.8125rem] text-[#D0D0D0] overflow-x-auto leading-relaxed"
        >
          {children}
        </pre>
      );
    },

    // UL: card list with colored bullet dots
    ul({ children, ...props }: ComponentPropsWithoutRef<"ul">) {
      return (
        <ul {...props} className="my-4 space-y-2 list-none pl-0">
          {children}
        </ul>
      );
    },

    // OL: step cards with numbered badges
    ol({ children, ...props }: ComponentPropsWithoutRef<"ol">) {
      return (
        <ol {...props} className="my-4 space-y-2 list-none pl-0">
          {React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) return child;
            return React.cloneElement(child as React.ReactElement<{ "data-index"?: number }>, {
              "data-index": index + 1,
            });
          })}
        </ol>
      );
    },

    // LI: card with colored bullet OR step number
    li({ children, ...props }: ComponentPropsWithoutRef<"li">) {
      const asProps = props as ComponentPropsWithoutRef<"li"> & {
        ordered?: boolean;
        "data-index"?: number;
      };
      const ordered = asProps.ordered ?? false;
      const index = asProps["data-index"];

      // Bullet color cycles: green → violet → amber
      const bulletColors = ["bg-[#10B981]", "bg-violet-500", "bg-amber-400"];
      const bulletColor = typeof index === "number"
        ? bulletColors[(index - 1) % 3]
        : bulletColors[0];

      if (ordered) {
        return (
          <motion.li
            {...fadeUp}
            className="flex items-start gap-3 px-4 py-3 rounded-xl
                       bg-[#111111] border border-white/[0.08]
                       text-[#D0D0D0] text-sm leading-relaxed"
          >
            <span
              className={`shrink-0 w-6 h-6 rounded-full ${bulletColor}
                          text-white text-xs font-bold font-mono
                          flex items-center justify-center mt-0.5 select-none`}
            >
              {index ?? "#"}
            </span>
            <span className="flex-1">{children}</span>
          </motion.li>
        );
      }

      return (
        <motion.li
          {...fadeUp}
          className="flex items-start gap-3 px-4 py-3 rounded-xl
                     bg-[#111111] border border-white/[0.08]
                     text-[#D0D0D0] text-sm leading-relaxed"
        >
          <span
            className={`shrink-0 w-2.5 h-2.5 rounded-full ${bulletColor} mt-1.5 select-none`}
            aria-hidden
          />
          <span className="flex-1">{children}</span>
        </motion.li>
      );
    },

    // HR: visual divider with center dot
    hr(_props: ComponentPropsWithoutRef<"hr">) {
      return (
        <div className="my-8 relative flex items-center justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px bg-white/[0.08]" />
          <span
            className="relative z-10 w-2.5 h-2.5 rounded-full bg-[#10B981] border-2 border-[#111111]"
            aria-hidden
          />
        </div>
      );
    },

    // Link
    a({ children, href, ...props }: ComponentPropsWithoutRef<"a">) {
      return (
        <a
          {...props}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#10B981] underline underline-offset-2
                     decoration-[#10B981]/40 hover:decoration-[#10B981]
                     transition-colors duration-150"
        >
          {children}
        </a>
      );
    },

    // Table
    table({ children, ...props }: ComponentPropsWithoutRef<"table">) {
      return (
        <div className="my-5 overflow-x-auto rounded-xl border border-white/[0.08]">
          <table {...props} className="w-full text-sm text-[#D0D0D0]">
            {children}
          </table>
        </div>
      );
    },
    thead({ children, ...props }: ComponentPropsWithoutRef<"thead">) {
      return (
        <thead {...props} className="bg-[#111111] text-white text-xs uppercase tracking-wide">
          {children}
        </thead>
      );
    },
    th({ children, ...props }: ComponentPropsWithoutRef<"th">) {
      return (
        <th {...props} className="px-4 py-3 text-left font-semibold text-[#10B981]">
          {children}
        </th>
      );
    },
    td({ children, ...props }: ComponentPropsWithoutRef<"td">) {
      return (
        <td {...props} className="px-4 py-3 border-t border-white/[0.06]">
          {children}
        </td>
      );
    },
  };
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function LessonContent({ markdown }: LessonContentProps) {
  const components = buildComponents();

  return (
    <div className="w-full">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
