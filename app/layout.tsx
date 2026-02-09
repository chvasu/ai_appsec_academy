import type { Metadata } from "next";
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
    default: "AI AppSec Academy | Viswanath Chirravuri",
    template: "%s | AI AppSec Academy",
  },
  description:
    "Elite cybersecurity training in AppSec, DevSecOps, Product Security, Supply Chain Security, and AI/ML Defense. Led by GSE #335 & CompTIA SME Viswanath Chirravuri, D.Eng. Cybersecurity candidate.",
  keywords: [
    "AI Security Training",
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
    siteName: "AI AppSec Academy",
    title: "AI AppSec Academy | Elite Cybersecurity Training",
    description:
      "Elite one-on-one cybersecurity training in AppSec, DevSecOps, Product Security & AI/ML Defense. Led by GSE #335 Viswanath Chirravuri.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI AppSec Academy - Elite Cybersecurity Training",
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
      <body className="min-h-screen flex flex-col scan-line">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
