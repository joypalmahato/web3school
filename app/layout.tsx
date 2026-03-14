import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { getAuthFromCookies } from "@insforge/nextjs";
import { Providers } from "./providers";
import "./globals.css";

const googleAnalyticsId = "G-KMJNGLHRSL";

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
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
        className={`${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased overflow-x-hidden`}
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
        {/* Global background — hero image blurred + dark overlay, fixed behind all pages */}
        <div
          className="fixed -z-20 bg-cover bg-bottom"
          style={{
            backgroundImage: "url('/hero-bg.png')",
            inset: "-12px",
            filter: "blur(6px)",
          }}
        />
        <div className="fixed inset-0 -z-10 bg-black/83" />
        <Providers initialState={initialState}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
