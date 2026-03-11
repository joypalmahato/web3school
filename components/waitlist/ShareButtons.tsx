"use client";

import { useState } from "react";
import { Check, Copy, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MAX_X_POST_LENGTH,
  createWaitlistXTemplates,
  pickRandomWaitlistXTemplate,
  pickSeededWaitlistXTemplate,
} from "./xPostTemplates";

interface ShareButtonsProps {
  referralCode: string;
  referralLink: string;
}

type CopyTarget = "post" | "link" | null;

export function ShareButtons({
  referralCode,
  referralLink,
}: ShareButtonsProps) {
  const templates = createWaitlistXTemplates({ referralCode, referralLink });
  const [selectedTemplateId, setSelectedTemplateId] = useState(
    pickSeededWaitlistXTemplate(
      templates,
      `${referralCode}:${referralLink}`
    ).id
  );
  const [copiedTarget, setCopiedTarget] = useState<CopyTarget>(null);

  const selectedTemplate =
    templates.find((template) => template.id === selectedTemplateId) ?? templates[0];
  const usesBioLink = selectedTemplate.kind === "link-in-bio";

  const handleCopy = async (value: string, target: Exclude<CopyTarget, null>) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedTarget(target);
      setTimeout(() => {
        setCopiedTarget((currentValue) =>
          currentValue === target ? null : currentValue
        );
      }, 2000);
    } catch (error) {
      console.error("Failed to copy waitlist share content:", error);
    }
  };

  const handleShuffle = () => {
    const nextTemplate = pickRandomWaitlistXTemplate(
      templates,
      selectedTemplate.id
    );

    setSelectedTemplateId(nextTemplate.id);
    setCopiedTarget(null);
  };

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    selectedTemplate.text
  )}`;

  return (
    <div className="space-y-3">
      <div className="bg-black/30 border border-white/10 rounded-lg p-4 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="border border-white/10 bg-white/5 text-white">
              {usesBioLink ? "Link in bio" : "Direct link"}
            </Badge>
            <Badge
              variant="outline"
              className="border-white/10 bg-transparent text-white/60"
            >
              {selectedTemplate.characterCount}/{MAX_X_POST_LENGTH}
            </Badge>
          </div>

          <Button
            type="button"
            size="sm"
            variant="ghost"
            onClick={handleShuffle}
            className="h-8 rounded-lg border border-white/10 bg-white/[0.03] px-3 text-white/70 hover:bg-white/10 hover:text-white"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            New template
          </Button>
        </div>

        <p className="whitespace-pre-line break-words text-sm leading-relaxed text-white/75">
          {selectedTemplate.text}
        </p>

        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
          <p className="text-xs leading-relaxed text-white/40">
            {usesBioLink
              ? "Use this shorter version if you want the post to say link in bio. Copy your referral link below and place it in your X bio or profile website."
              : "This version already includes your referral link, so people can join from the post directly."}
          </p>

          {usesBioLink && referralCode ? (
            <p className="mt-2 text-xs font-medium text-green-400">
              Referral code in post: {referralCode}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button
          asChild
          className="bg-white text-black hover:bg-white/90 font-semibold rounded-lg sm:flex-1"
        >
          <a href={tweetUrl} target="_blank" rel="noopener noreferrer">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Post on X
          </a>
        </Button>

        <Button
          type="button"
          onClick={() => handleCopy(selectedTemplate.text, "post")}
          variant="outline"
          className="border-white/10 bg-transparent text-white hover:bg-white/5 rounded-lg sm:flex-1"
        >
          {copiedTarget === "post" ? (
            <>
              <Check className="w-4 h-4 mr-2 text-green-400" />
              Copied post
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              Copy post
            </>
          )}
        </Button>

        <Button
          type="button"
          onClick={() => handleCopy(referralLink, "link")}
          variant="outline"
          className="border-white/10 bg-transparent text-white hover:bg-white/5 rounded-lg sm:flex-1"
        >
          {copiedTarget === "link" ? (
            <>
              <Check className="w-4 h-4 mr-2 text-green-400" />
              Copied link
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              {usesBioLink ? "Copy bio link" : "Copy link"}
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
