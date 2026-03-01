/**
 * @component ResultsPage
 * @part-of Web3School — Discovery Results
 * @design Shows primary role match + 2 alternatives + trait breakdown + share
 * @flow User completes discovery → sees matched roles → picks path
 */
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RoleMatchCard } from "@/components/app/RoleMatchCard";
import { ShareableCard } from "@/components/app/ShareableCard";
import type { TraitScores, RoleMatch } from "@/lib/types";
import { INITIAL_ROLES } from "@/data/roles";

interface SessionData {
  id: string;
  traits: TraitScores;
  matched_roles: RoleMatch[];
  summary: string;
}

const TRAIT_LABELS: Record<keyof TraitScores, string> = {
  technical_aptitude: "Technical Aptitude",
  creative_drive: "Creative Drive",
  social_orientation: "Social Orientation",
  analytical_thinking: "Analytical Thinking",
  risk_tolerance: "Risk Tolerance",
  communication_strength: "Communication",
};

function TraitBar({
  label,
  value,
  delay,
}: {
  label: string;
  value: number;
  delay: number;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-text-secondary text-sm">{label}</span>
        <span className="text-text-muted text-xs font-mono">{value}/100</span>
      </div>
      <div className="h-2 bg-navy-deep rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#10B981] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8, delay }}
        />
      </div>
    </div>
  );
}

export default function ResultsPage() {
  const router = useRouter();
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isChoosing, setIsChoosing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch("/api/discovery/results");
        if (!res.ok) throw new Error("Failed to fetch results");
        const data = await res.json();
        setSessionData(data);
      } catch (err) {
        console.error("Results fetch error:", err);
        setError("Unable to load your results. Please try the discovery again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, []);

  const handleChoosePath = async (roleSlug: string) => {
    setIsChoosing(true);
    try {
      const res = await fetch("/api/discovery/choose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role_slug: roleSlug }),
      });

      if (!res.ok) throw new Error("Failed to choose path");
      router.push("/learn");
    } catch (err) {
      console.error("Choose path error:", err);
      setIsChoosing(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-navy-deep flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="w-8 h-8 text-text-muted animate-spin mx-auto" />
          <p className="text-text-secondary">Loading your results...</p>
        </div>
      </div>
    );
  }

  if (error || !sessionData) {
    return (
      <div className="min-h-screen bg-navy-deep flex items-center justify-center px-4">
        <div className="text-center space-y-4 max-w-md">
          <p className="text-text-secondary">{error || "No results found."}</p>
          <Button
            onClick={() => router.push("/discover")}
            className="bg-white text-black hover:opacity-85 rounded-md"
          >
            Start Discovery
          </Button>
        </div>
      </div>
    );
  }

  const { traits, matched_roles, summary } = sessionData;
  const primaryRole = matched_roles[0];
  const alternativeRoles = matched_roles.slice(1, 3);

  const getRoleName = (slug: string) => {
    const role = INITIAL_ROLES.find((r) => r.slug === slug);
    return role?.name || slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const getRoleCategory = (slug: string) => {
    const role = INITIAL_ROLES.find((r) => r.slug === slug);
    return role?.category || "technical";
  };

  return (
    <div className="min-h-screen bg-navy-deep">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-3"
        >
          <p className="text-text-secondary text-sm font-mono">
            DISCOVERY COMPLETE
          </p>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
            Your Career Match
          </h1>
          <p className="text-text-secondary max-w-lg mx-auto">{summary}</p>
        </motion.div>

        {/* Primary Role */}
        {primaryRole && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-text-muted text-xs font-mono mb-3">
              BEST MATCH
            </p>
            <RoleMatchCard
              roleName={getRoleName(primaryRole.role_slug)}
              roleSlug={primaryRole.role_slug}
              category={getRoleCategory(primaryRole.role_slug)}
              matchScore={primaryRole.match_score}
              reasoning={primaryRole.reasoning}
              isPrimary
              onSelect={() => handleChoosePath(primaryRole.role_slug)}
            />
            {isChoosing && (
              <p className="text-text-muted text-sm text-center mt-2">
                Setting up your learning path...
              </p>
            )}
          </motion.div>
        )}

        {/* Alternative Roles */}
        {alternativeRoles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-3"
          >
            <p className="text-text-muted text-xs font-mono">
              ALSO A GREAT FIT
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {alternativeRoles.map((role) => (
                <RoleMatchCard
                  key={role.role_slug}
                  roleName={getRoleName(role.role_slug)}
                  roleSlug={role.role_slug}
                  category={getRoleCategory(role.role_slug)}
                  matchScore={role.match_score}
                  reasoning={role.reasoning}
                  onSelect={() => handleChoosePath(role.role_slug)}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Trait Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-navy-mid border border-border rounded-xl p-6 space-y-4"
        >
          <h2 className="font-heading font-bold text-text-primary text-lg">
            Your Trait Profile
          </h2>
          <div className="space-y-3">
            {(Object.keys(TRAIT_LABELS) as (keyof TraitScores)[]).map(
              (key, i) => (
                <TraitBar
                  key={key}
                  label={TRAIT_LABELS[key]}
                  value={traits[key] || 50}
                  delay={0.4 + i * 0.1}
                />
              )
            )}
          </div>
        </motion.div>

        {/* Share Section */}
        {primaryRole && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-text-muted text-xs font-mono mb-3">
              SHARE YOUR RESULT
            </p>
            <ShareableCard
              roleName={getRoleName(primaryRole.role_slug)}
              category={getRoleCategory(primaryRole.role_slug)}
              matchScore={primaryRole.match_score}
              traits={traits}
              sessionId={sessionData.id}
            />
          </motion.div>
        )}

        {/* Explore All Roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center pb-8"
        >
          <Button
            variant="ghost"
            onClick={() => router.push("/roles")}
            className="text-text-muted hover:text-text-primary"
          >
            Explore All Roles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
