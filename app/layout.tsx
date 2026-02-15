import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://aiappsecacademy.com"),
  icons: {
    icon: "/favicon.svg",
  },
  title: {
    default: "AI AppSec Consulting | Viswanath Chirravuri",
    template: "%s | AI AppSec Consulting",
  },
  description:
    "Expert cybersecurity consulting in AppSec, DevSecOps, Product Security, Supply Chain Security, and AI/ML Defense. Book hourly sessions with GSE #335 & CompTIA SME Viswanath Chirravuri.",
  keywords: [
    "AI Security Consulting",
    "LLM Security",
    "Agentic AI",
    "AppSec",
    "DevSecOps",
    "Product Security",
    "Supply Chain Security",
    "SANS",
    "Cybersecurity",
    "ML Security",
    "Vibecoding",
    "Secure Coding",
  ],
  authors: [{ name: "Viswanath Srinivasan Chirravuri" }],
  creator: "Viswanath Srinivasan Chirravuri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aiappsecacademy.com",
    siteName: "AI AppSec Consulting",
    title: "AI AppSec Consulting | Expert Cybersecurity Advisory",
    description:
      "Expert cybersecurity consulting in AppSec, DevSecOps, Product Security & AI/ML Defense. Book hourly sessions with GSE #335 Viswanath Chirravuri.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI AppSec Consulting - Expert Cybersecurity Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI AppSec Academy | Elite Cybersecurity Training",
    description:
      "Elite one-on-one cybersecurity training in AppSec, DevSecOps, Product Security & AI/ML Defense.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="02599071-89f7-45f9-9043-72c1f058f412"
          strategy="beforeInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QS9GY50V6P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QS9GY50V6P');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col scan-line">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
