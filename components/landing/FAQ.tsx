/**
 * @component FAQ
 * @part-of Web3School — Landing Page
 * @design Accordion-style FAQ to handle objections before the final CTA.
 */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const FAQS = [
  {
    q: "Is it really free?",
    a: "Yes — completely free. You get full access to the discovery chat, your personalized roadmap, daily lessons, and your Skill Passport.",
  },
  {
    q: "I'm completely new to Web3. Is this for me?",
    a: "Especially yes. The discovery chat is designed for people who don't know where they fit yet. It maps your existing skills and background, then finds the Web3 role that actually makes sense for you — even if you've never touched crypto before.",
  },
  {
    q: "What exactly is a Skill Passport?",
    a: "A verified record of what you've actually demonstrated — projects completed, concepts mastered, role-specific skills proven. Something you can show a hiring manager or a DAO that actually means something, unlike a certificate that just says you watched a course.",
  },
  {
    q: "How is this different from YouTube or a Udemy course?",
    a: "Those platforms give everyone the same content in the same order. Web3School builds your specific path based on your role, your pace, and how your brain learns. If you get stuck, the platform restructures the lesson — it doesn't just move on. You also finish with a Skill Passport, not just a completion badge.",
  },
  {
    q: "How long does it take?",
    a: "The discovery chat takes about 10 minutes. Your roadmap? However long you need. Some fast learners push through in 6–8 weeks. Others take 4–5 months because life happens. The platform doesn't care about a timeline — it adapts to your pace, not the other way around.",
  },
  {
    q: "I already have some Web3 experience. Can I skip ahead?",
    a: "Yes. The discovery chat maps your current skill level. If you already know the basics, your roadmap will reflect that — you'll start at the right point, not at zero.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="border border-white/[0.08] rounded-xl overflow-hidden bg-[#111111]/40"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-white group-hover:text-white/90 transition-colors">
          {q}
        </span>
        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/[0.06] flex items-center justify-center text-text-muted group-hover:bg-white/[0.10] transition-colors">
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-[#888888] text-sm leading-relaxed border-t border-white/[0.06] pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <AnimatedSection className="py-16 md:py-24 lg:py-28">
      <div className="max-w-[760px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#666666] mb-4">
            FAQ
          </p>
          <h2 className="text-[28px] md:text-[38px] font-bold text-white leading-[1.1] tracking-[-0.02em] font-heading">
            Questions You&apos;re Probably Thinking
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((item, i) => (
            <FAQItem key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
