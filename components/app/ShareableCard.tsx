/**
 * @component ShareableCard
 * @part-of Web3School — Discovery Results
 * @design Card designed for social sharing, 1200x628 ratio feel
 * @flow "Generate & Share" creates link and displays share options
 */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Share2, Copy, Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { TraitScores } from "@/lib/types";

interface ShareableCardProps {
  roleName: string;
  category: string;
  matchScore: number;
  traits: TraitScores;
  sessionId: string;
}

export function ShareableCard({
  roleName,
  category,
  matchScore,
  traits,
  sessionId,
}: ShareableCardProps) {
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const topTraits = Object.entries(traits)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([key]) =>
      key
        .replace(/_/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase())
    );

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const res = await fetch("/api/share/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: sessionId,
          role_name: roleName,
          role_category: category,
          top_traits: topTraits,
          match_percentage: matchScore,
        }),
      });

      if (!res.ok) throw new Error("Failed to generate share link");
      const data = await res.json();
      setShareUrl(data.share_url);
    } catch (err) {
      console.error("Share error:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = async () => {
    if (!shareUrl) return;
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const twitterUrl = shareUrl
    ? `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `I'm a ${matchScore}% match for ${roleName} in Web3! Discover your career path:`
      )}&url=${encodeURIComponent(shareUrl)}`
    : "";

  return (
    <div className="space-y-4">
      {/* Preview card */}
      <div className="bg-gradient-to-br from-navy-mid to-navy-deep border border-border rounded-2xl p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-primary/10 rounded-full blur-3xl" />
        <div className="relative z-10">
          <p className="text-text-muted text-xs font-mono mb-2">
            WEB3SCHOOL CAREER MATCH
          </p>
          <h3 className="text-2xl font-heading font-bold text-text-primary mb-1">
            {roleName}
          </h3>
          <p className="text-purple-primary font-bold text-lg mb-4">
            {matchScore}% Match
          </p>
          <div className="flex flex-wrap gap-2">
            {topTraits.map((trait) => (
              <span
                key={trait}
                className="text-xs bg-purple-primary/10 text-purple-light px-2.5 py-1 rounded-full"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Share actions */}
      {!shareUrl ? (
        <Button
          onClick={handleGenerate}
          disabled={isGenerating}
          variant="outline"
          className="w-full border-border text-text-primary hover:bg-purple-primary/10 rounded-xl py-4"
        >
          <Share2 className="w-4 h-4 mr-2" />
          {isGenerating ? "Generating..." : "Share Your Result"}
        </Button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <div className="flex gap-2">
            <Input
              readOnly
              value={shareUrl}
              className="bg-navy-deep border-border text-text-secondary text-sm rounded-xl"
            />
            <Button
              onClick={handleCopy}
              variant="outline"
              size="icon"
              className="border-border flex-shrink-0 rounded-xl"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-success" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
          </div>
          <Button
            asChild
            variant="outline"
            className="w-full border-border text-text-primary hover:bg-purple-primary/10 rounded-xl"
          >
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Share on Twitter / X
            </a>
          </Button>
        </motion.div>
      )}
    </div>
  );
}
