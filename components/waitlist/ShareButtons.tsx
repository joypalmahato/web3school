"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareButtonsProps {
  referralLink: string;
}

const SHARE_TEXT =
  "I just joined the Web3School waitlist — discover your Web3 career path! Join me:";

export function ShareButtons({ referralLink }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${SHARE_TEXT} ${referralLink}`
  )}`;

  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    referralLink
  )}`;

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button
        asChild
        className="flex-1 bg-[#1DA1F2]/10 text-[#1DA1F2] border border-[#1DA1F2]/20 hover:bg-[#1DA1F2]/20 rounded-lg"
      >
        <a href={tweetUrl} target="_blank" rel="noopener noreferrer">
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Share on X
        </a>
      </Button>

      <Button
        asChild
        className="flex-1 bg-[#0A66C2]/10 text-[#0A66C2] border border-[#0A66C2]/20 hover:bg-[#0A66C2]/20 rounded-lg"
      >
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          Share on LinkedIn
        </a>
      </Button>

      <Button
        onClick={handleCopy}
        variant="outline"
        className="flex-1 border-border text-text-primary hover:bg-navy-light rounded-lg"
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
