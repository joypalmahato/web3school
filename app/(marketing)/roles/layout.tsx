import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web3 Career Paths — Explore 8 In-Demand Roles",
  description:
    "Discover 8 in-demand Web3 career paths — from Community Manager to Smart Contract Developer. Find salary ranges, required skills, and career growth paths for each role.",
  openGraph: {
    title: "Web3 Career Paths — Explore 8 In-Demand Roles | Web3School",
    description:
      "Discover 8 in-demand Web3 career paths — from Community Manager to Smart Contract Developer. Find your ideal role.",
  },
};

export default function RolesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
