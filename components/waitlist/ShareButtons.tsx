"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareButtonsProps {
  referralLink: string;
}

const TWEET_TEXT = `Just signed up on @Web3School_ to find my Web3 career path 🚀

Using AI to discover which Web3 role actually fits me — then I get a personalized roadmap + skill passport to prove it.

If you're in crypto or trying to break into Web3, join early and build yours too 👇`;

export function ShareButtons({ referralLink }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${TWEET_TEXT}\n\n${referralLink}`
  )}`;

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button
        asChild
        className="flex-1 bg-white text-black hover:bg-white/90 font-semibold rounded-lg"
      >
        <a href={tweetUrl} target="_blank" rel="noopener noreferrer">
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Tweet to move up
        </a>
      </Button>

      <Button
        onClick={handleCopy}
        variant="outline"
        className="flex-1 border-white/10 text-white hover:bg-white/5 rounded-lg"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 mr-2 text-green-400" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="w-4 h-4 mr-2" />
            Copy link
          </>
        )}
      </Button>
    </div>
  );
}
