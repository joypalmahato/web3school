import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Career Paths — Explore 89+ In-Demand Roles",
  description:
    "Discover 89+ in-demand digital career paths across Web3, AI, development, design, data, marketing, and more. Find salary ranges, required skills, and career growth paths for each role.",
  openGraph: {
    title: "Digital Career Paths — Explore 89+ In-Demand Roles | Web3School",
    description:
      "Discover 89+ in-demand digital career paths across Web3, AI, development, design, data, and more. Find your ideal role.",
  },
};

export default function RolesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
