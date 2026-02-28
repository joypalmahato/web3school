/**
 * @component RoleDetailClient
 * @part-of Web3School — Role Detail Page
 * @design Hero, day in life, skills, growth path, traits, related roles, CTA
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  TrendingUp,
  Users,
  Clock,
  Sparkles,
  ChevronRight,
  Star,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { RoleSeedData } from "@/data/roles";
import type { RoleCategory } from "@/lib/types";

const CATEGORY_COLORS: Record<RoleCategory, string> = {
  technical: "bg-cyan-accent/10 text-cyan-accent border-cyan-accent/20",
  "semi-technical":
    "bg-purple-primary/10 text-purple-primary border-purple-primary/20",
  "non-technical":
    "bg-green-success/10 text-green-success border-green-success/20",
  creative: "bg-amber-warning/10 text-amber-warning border-amber-warning/20",
};

const CATEGORY_GRADIENTS: Record<RoleCategory, string> = {
  technical: "from-cyan-accent/20 to-purple-primary/10",
  "semi-technical": "from-purple-primary/20 to-cyan-accent/10",
  "non-technical": "from-green-success/20 to-cyan-accent/10",
  creative: "from-amber-warning/20 to-purple-primary/10",
};

const DEMAND_LABELS: Record<string, { label: string; color: string }> = {
  low: { label: "Growing", color: "text-text-muted" },
  medium: { label: "Moderate Demand", color: "text-amber-warning" },
  high: { label: "High Demand", color: "text-green-success" },
  very_high: { label: "Very High Demand", color: "text-cyan-accent" },
};

const COMPETITION_LABELS: Record<string, { label: string; color: string }> = {
  low: { label: "Low Competition", color: "text-green-success" },
  medium: { label: "Moderate Competition", color: "text-amber-warning" },
  high: { label: "High Competition", color: "text-orange-400" },
  very_high: { label: "Very High Competition", color: "text-red-error" },
};

function formatSalary(min: number, max: number): string {
  const fmtMin = min >= 1000 ? `$${Math.round(min / 1000)}k` : `$${min}`;
  const fmtMax = max >= 1000 ? `$${Math.round(max / 1000)}k` : `$${max}`;
  return `${fmtMin} – ${fmtMax}`;
}

function Section({
  title,
  icon: Icon,
  children,
  delay = 0,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-navy-mid border border-border rounded-2xl p-6 sm:p-8"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-purple-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-purple-primary" />
        </div>
        <h2 className="text-xl font-heading font-bold text-text-primary">
          {title}
        </h2>
      </div>
      {children}
    </motion.section>
  );
}

export function RoleDetailClient({
  role,
  relatedRoles,
}: {
  role: RoleSeedData;
  relatedRoles: RoleSeedData[];
}) {
  const demand = DEMAND_LABELS[role.demand_level];
  const competition = COMPETITION_LABELS[role.competition_level];
  const growthSteps = role.growth_path.split("→").map((s) => s.trim());

  return (
    <div className="min-h-screen bg-navy-deep pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-sm text-text-muted mb-8"
        >
          <Link href="/roles" className="hover:text-text-primary transition-colors">
            Roles
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-text-secondary">{role.name}</span>
        </motion.nav>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`bg-gradient-to-br ${CATEGORY_GRADIENTS[role.category]} border border-border rounded-2xl p-6 sm:p-10`}
        >
          <span
            className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${CATEGORY_COLORS[role.category]}`}
          >
            {role.category.replace("-", " ")}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary mt-4">
            {role.name}
          </h1>

          <p className="text-text-secondary text-lg mt-4 max-w-2xl">
            {role.description}
          </p>

          {/* Stats pills */}
          <div className="flex flex-wrap gap-3 mt-6">
            <div className="flex items-center gap-2 bg-navy-deep/50 rounded-xl px-4 py-2 text-sm">
              <Briefcase className="w-4 h-4 text-text-muted" />
              <span className="text-text-primary font-medium">
                {formatSalary(role.salary_range_min, role.salary_range_max)}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-navy-deep/50 rounded-xl px-4 py-2 text-sm">
              <TrendingUp className="w-4 h-4 text-text-muted" />
              <span className={`font-medium ${demand.color}`}>
                {demand.label}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-navy-deep/50 rounded-xl px-4 py-2 text-sm">
              <Users className="w-4 h-4 text-text-muted" />
              <span className={`font-medium ${competition.color}`}>
                {competition.label}
              </span>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 space-y-6">
          {/* A Day in the Life */}
          <Section title="A Day in the Life" icon={Clock}>
            <div className="space-y-3">
              {role.day_in_life.split(/\.\s*/).filter(Boolean).map((segment, i) => {
                const parts = segment.match(/^(\w+):\s*(.*)/);
                if (parts) {
                  return (
                    <div key={i} className="flex gap-3">
                      <span className="text-purple-primary font-semibold text-sm min-w-[80px]">
                        {parts[1]}
                      </span>
                      <span className="text-text-secondary text-sm">
                        {parts[2]}
                      </span>
                    </div>
                  );
                }
                return (
                  <p key={i} className="text-text-secondary text-sm">
                    {segment}.
                  </p>
                );
              })}
            </div>
          </Section>

          {/* Key Skills */}
          <Section title="Key Skills" icon={Target} delay={0.1}>
            <div className="space-y-3">
              {role.key_skills.map((skill, i) => {
                const importance = Math.max(40, 100 - i * 10);
                return (
                  <div key={skill} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-primary font-medium">
                        {skill}
                      </span>
                      <span className="text-text-muted">
                        {importance >= 80
                          ? "Essential"
                          : importance >= 60
                            ? "Important"
                            : "Helpful"}
                      </span>
                    </div>
                    <div className="h-2 bg-navy-deep rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${importance}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-purple-primary to-cyan-accent"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Section>

          {/* Career Growth Path */}
          <Section title="Career Growth Path" icon={TrendingUp} delay={0.15}>
            <div className="flex flex-wrap items-center gap-2">
              {growthSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className={`px-4 py-2 rounded-xl text-sm font-medium border ${
                      i === 0
                        ? "bg-purple-primary/10 border-purple-primary/30 text-purple-primary"
                        : i === growthSteps.length - 1
                          ? "bg-cyan-accent/10 border-cyan-accent/30 text-cyan-accent"
                          : "bg-navy-deep border-border text-text-secondary"
                    }`}
                  >
                    {step}
                  </div>
                  {i < growthSteps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-text-muted flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </Section>

          {/* Ideal Personality Traits */}
          <Section title="Ideal Personality Traits" icon={Sparkles} delay={0.2}>
            <div className="flex flex-wrap gap-2">
              {role.personality_traits.map((trait) => (
                <span
                  key={trait}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-navy-deep border border-border rounded-xl text-sm text-text-primary"
                >
                  <Star className="w-3.5 h-3.5 text-amber-warning" />
                  {trait.charAt(0).toUpperCase() + trait.slice(1)}
                </span>
              ))}
            </div>
          </Section>

          {/* Related Roles */}
          {relatedRoles.length > 0 && (
            <Section title="Related Roles" icon={Users} delay={0.25}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedRoles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/roles/${related.slug}`}
                    className="group block bg-navy-deep border border-border rounded-xl p-4 hover:border-purple-primary/50 transition-all"
                  >
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${CATEGORY_COLORS[related.category]}`}
                    >
                      {related.category.replace("-", " ")}
                    </span>
                    <h3 className="text-sm font-heading font-bold text-text-primary mt-2 group-hover:text-purple-primary transition-colors">
                      {related.name}
                    </h3>
                    <p className="text-text-muted text-xs mt-1 line-clamp-2">
                      {related.short_description}
                    </p>
                  </Link>
                ))}
              </div>
            </Section>
          )}
        </div>

        <Separator className="my-10 bg-border" />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-8 sm:p-12 bg-gradient-to-br from-purple-primary/10 to-cyan-accent/10 border border-border rounded-2xl"
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary">
            Is {role.name} Your Path?
          </h2>
          <p className="text-text-secondary mt-3 text-sm max-w-md mx-auto">
            Take our AI-powered career discovery quiz to find out if{" "}
            {role.name} is the right fit for you — or discover an even better
            match.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
            <Button
              asChild
              className="bg-purple-primary hover:bg-purple-light text-white rounded-xl px-8 py-3 font-semibold"
            >
              <Link href="/signup">
                Discover Your Match <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-border text-text-primary rounded-xl px-8 py-3"
            >
              <Link href="/roles">View All Roles</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
