/**
 * @component RolesIndexPage
 * @part-of Web3School — Public Role Exploration
 * @design Grid of all 8 Web3 roles with category filter and search
 * @seo Static page, high priority for organic traffic
 */
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowRight, TrendingUp, Users, Briefcase } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { INITIAL_ROLES, type RoleSeedData } from "@/data/roles";
import type { RoleCategory } from "@/lib/types";

const CATEGORIES: { label: string; value: RoleCategory | "all" }[] = [
  { label: "All Roles", value: "all" },
  { label: "Technical", value: "technical" },
  { label: "Semi-Technical", value: "semi-technical" },
  { label: "Non-Technical", value: "non-technical" },
  { label: "Creative", value: "creative" },
];

const CATEGORY_COLORS: Record<RoleCategory, string> = {
  technical: "bg-cyan-accent/10 text-cyan-accent",
  "semi-technical": "bg-purple-primary/10 text-purple-primary",
  "non-technical": "bg-green-success/10 text-green-success",
  creative: "bg-amber-warning/10 text-amber-warning",
};

const DEMAND_LABELS: Record<string, string> = {
  low: "Growing",
  medium: "Moderate",
  high: "High Demand",
  very_high: "Very High Demand",
};

function formatSalary(min: number, max: number): string {
  const fmtMin = min >= 1000 ? `$${Math.round(min / 1000)}k` : `$${min}`;
  const fmtMax = max >= 1000 ? `$${Math.round(max / 1000)}k` : `$${max}`;
  return `${fmtMin} – ${fmtMax}`;
}

function RoleCard({ role, index }: { role: RoleSeedData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        href={`/roles/${role.slug}`}
        className="group block h-full bg-navy-mid border border-border rounded-2xl p-6 hover:border-purple-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-primary/5"
      >
        {/* Category badge */}
        <span
          className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${CATEGORY_COLORS[role.category]}`}
        >
          {role.category.replace("-", " ")}
        </span>

        {/* Role name */}
        <h3 className="text-lg font-heading font-bold text-text-primary mt-4 group-hover:text-purple-primary transition-colors">
          {role.name}
        </h3>

        {/* Short description */}
        <p className="text-text-secondary text-sm mt-2 line-clamp-2">
          {role.short_description}
        </p>

        {/* Stats row */}
        <div className="flex items-center gap-4 mt-4 text-xs text-text-muted">
          <span className="flex items-center gap-1">
            <Briefcase className="w-3.5 h-3.5" />
            {formatSalary(role.salary_range_min, role.salary_range_max)}
          </span>
          <span className="flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            {DEMAND_LABELS[role.demand_level]}
          </span>
        </div>

        {/* Skills preview */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {role.key_skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="text-[11px] px-2 py-0.5 bg-navy-deep/50 text-text-muted rounded-md"
            >
              {skill}
            </span>
          ))}
          {role.key_skills.length > 3 && (
            <span className="text-[11px] px-2 py-0.5 text-text-muted">
              +{role.key_skills.length - 3} more
            </span>
          )}
        </div>

        {/* Arrow */}
        <div className="flex items-center gap-1 mt-4 text-sm text-purple-primary opacity-0 group-hover:opacity-100 transition-opacity">
          Learn more <ArrowRight className="w-4 h-4" />
        </div>
      </Link>
    </motion.div>
  );
}

export default function RolesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<RoleCategory | "all">("all");

  const filtered = useMemo(() => {
    return INITIAL_ROLES.filter((role) => {
      const matchesCategory =
        activeCategory === "all" || role.category === activeCategory;
      const matchesSearch =
        search.trim() === "" ||
        role.name.toLowerCase().includes(search.toLowerCase()) ||
        role.short_description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-navy-deep pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary"
          >
            Explore Web3 Career Paths
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary mt-4 text-lg"
          >
            Discover 20 in-demand Web3 roles — from community builders to
            smart contract auditors to game designers. Find the one that fits you.
          </motion.p>
        </div>

        {/* Search + Filters */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <Input
              placeholder="Search roles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-navy-mid border-border text-text-primary rounded-xl"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === cat.value
                    ? "bg-purple-primary text-white"
                    : "bg-navy-mid text-text-secondary hover:text-text-primary border border-border"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Role count */}
        <div className="mt-6 flex items-center gap-2 text-text-muted text-sm">
          <Users className="w-4 h-4" />
          <span>
            {filtered.length} role{filtered.length !== 1 ? "s" : ""} found
          </span>
        </div>

        {/* Role grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((role, i) => (
            <RoleCard key={role.slug} role={role} index={i} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-secondary text-lg">
              No roles match your search.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("all");
              }}
              className="text-purple-primary hover:underline mt-2 text-sm"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 p-8 bg-gradient-to-br from-purple-primary/10 to-cyan-accent/10 border border-border rounded-2xl"
        >
          <h2 className="text-xl font-heading font-bold text-text-primary">
            Not sure which role fits you?
          </h2>
          <p className="text-text-secondary mt-2 text-sm max-w-md mx-auto">
            Take our AI-powered career discovery quiz — answer a few questions
            and we&apos;ll match you with your ideal Web3 role.
          </p>
          <Button
            asChild
            className="mt-4 bg-purple-primary hover:bg-purple-light text-white rounded-xl px-8 py-3 font-semibold"
          >
            <Link href="/signup">Discover Your Path</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
