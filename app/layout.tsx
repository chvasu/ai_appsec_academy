import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://aiappsecacademy.com"),
  icons: {
    icon: "/favicon.svg",
  },
  title: "AI AppSec Academy | Viswanath Chirravuri",
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
  ],
  openGraph: {
    title: "AI AppSec Academy | Viswanath Chirravuri",
    description:
      "Elite cybersecurity training in AppSec, DevSecOps, Product Security & AI/ML Defense.",
    type: "website",
    url: "https://aiappsecacademy.com",
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
      </body>
    </html>
  );
}
