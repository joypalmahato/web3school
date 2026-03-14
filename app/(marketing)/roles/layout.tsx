import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Digital Career Paths - Explore 89+ In-Demand Roles",
  description:
    "Discover 89+ in-demand digital career paths across Web3, AI, development, design, data, marketing, and more. Find salary ranges, required skills, and career growth paths for each role.",
  alternates: {
    canonical: absoluteUrl("/roles"),
  },
  openGraph: {
    title: "Digital Career Paths - Explore 89+ In-Demand Roles",
    description:
      "Discover 89+ in-demand digital career paths across Web3, AI, development, design, data, and more. Find your ideal role.",
    url: absoluteUrl("/roles"),
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RolesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
