import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PostHogProvider } from "@/components/shared/PostHogProvider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Web3School — AI-Powered Web3 Career Discovery",
    template: "%s | Web3School",
  },
  description:
    "Go from 'I don't know what to learn' to 'I have a marketable skill and I can prove it' — guided by AI every step of the way.",
  keywords: [
    "Web3",
    "career",
    "AI tutor",
    "blockchain",
    "learning platform",
    "skill passport",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <PostHogProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
