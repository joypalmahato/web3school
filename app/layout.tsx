import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import { getAuthFromCookies } from "@insforge/nextjs";
import { Providers } from "./providers";
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
  metadataBase: new URL("https://web3school.study"),
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
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
  openGraph: {
    siteName: "Web3School",
    url: "https://web3school.study",
  },
  alternates: {
    canonical: "https://web3school.study",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = await getAuthFromCookies();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Providers initialState={initialState}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
