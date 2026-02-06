import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://aiappsecacademy.com"),
  title: "AI AppSec Academy | Viswanath Chirravuri",
  description:
    "Elite cybersecurity training in AI/ML Security, Agentic AI AppSec, and LLM Security. Led by SANS instructor & GSE #335 Viswanath Chirravuri, D.Eng. Cybersecurity.",
  keywords: [
    "AI Security Training",
    "LLM Security",
    "Agentic AI",
    "AppSec",
    "SANS",
    "Cybersecurity",
    "ML Security",
  ],
  openGraph: {
    title: "AI AppSec Academy | Viswanath Chirravuri",
    description:
      "Elite cybersecurity training in AI/ML Security & Agentic AI.",
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
