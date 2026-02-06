import { Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | AI AppSec Academy",
  description:
    "Terms and conditions, liability disclaimer, and training policies for AI AppSec Academy.",
};

const sections = [
  {
    title: "1. General Terms",
    content: [
      "Welcome to AI AppSec Academy™, operated by Viswanath Srinivasan Chirravuri. By accessing this website, enrolling in any training program, or using any services offered through this platform, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use this website or its services.",
      "AI AppSec Academy reserves the right to update these terms at any time. Continued use of the site after changes constitutes acceptance of the revised terms. It is your responsibility to review these terms periodically.",
    ],
  },
  {
    title: "2. Training Disclaimer",
    content: [
      "All training programs, courses, workshops, and educational materials provided by AI AppSec Academy are for informational and educational purposes only. They do not constitute professional security consulting, legal advice, or certification guarantees.",
      "While every effort is made to ensure accuracy and relevance, the cybersecurity landscape evolves rapidly. Course content may not reflect the most recent threats, vulnerabilities, or regulatory changes at the time of delivery.",
      "Completion of any AI AppSec Academy course does not guarantee employment, certification by third parties (such as GIAC, CompTIA, or ISC²), or specific career outcomes. Training is intended to supplement your professional development, not replace formal certification programs.",
    ],
  },
  {
    title: "3. Limitation of Liability",
    content: [
      "To the fullest extent permitted by law, AI AppSec Academy, its owner, instructors, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website, enrollment in courses, or application of knowledge gained through our training programs.",
      "This includes but is not limited to: damages resulting from errors or omissions in course materials, loss of data, unauthorized access to systems, or any actions taken based on course content. You acknowledge that cybersecurity training involves topics related to offensive and defensive techniques, and you agree to use all knowledge gained exclusively for lawful and authorized purposes.",
      "AI AppSec Academy is not responsible for any outcomes arising from the application of techniques, tools, or concepts taught in its programs. You assume full responsibility for your actions.",
    ],
  },
  {
    title: "4. Payments, Refunds & Cancellations",
    content: [
      "All payments are processed securely through Stripe. By completing a purchase, you agree to Stripe's terms of service in addition to these terms.",
      "Course fees are non-refundable once a session has been scheduled and confirmed. If you need to reschedule, please contact us at least 48 hours before the scheduled session. Failure to attend a scheduled session without prior notice will be considered a forfeiture of that session.",
      "AI AppSec Academy reserves the right to modify pricing at any time. Price changes will not affect previously completed purchases. Custom enterprise training quotes are valid for 30 days from the date of issuance unless otherwise stated.",
    ],
  },
  {
    title: "5. Intellectual Property & Trademarks",
    content: [
      "All content on this website — including but not limited to course materials, text, graphics, logos, code samples, lab exercises, and the overall design — is the intellectual property of Viswanath Srinivasan Chirravuri and is protected by applicable copyright and trademark laws.",
      "AI AppSec Academy™ is a trademark of Viswanath Srinivasan Chirravuri. Unauthorized use of this trademark, the site content, or any materials is strictly prohibited without prior written consent.",
      "You may not reproduce, distribute, modify, create derivative works from, publicly display, or commercially exploit any content from this website without express written permission.",
    ],
  },
  {
    title: "6. Third-Party Links & Services",
    content: [
      "This website may contain links to third-party websites and services, including but not limited to LinkedIn, GitHub, Stripe, SANS Institute, and RSA Conference. These links are provided for convenience and informational purposes only.",
      "AI AppSec Academy does not endorse, control, or assume responsibility for the content, privacy policies, or practices of any third-party sites. Accessing third-party links is at your own risk, and you should review their respective terms and privacy policies.",
    ],
  },
  {
    title: "7. Privacy & Data",
    content: [
      "AI AppSec Academy collects minimal personal data necessary to process enrollments and deliver training services. Payment information is handled entirely by Stripe and is never stored on our servers.",
      "We do not sell, rent, or share your personal information with third parties for marketing purposes. Any data collected (such as name and email for session coordination) is used solely for delivering the services you have requested.",
      "For questions about data handling, please reach out via the contact information provided below.",
    ],
  },
  {
    title: "8. Governing Law",
    content: [
      "These Terms & Conditions are governed by and construed in accordance with the laws of the United States. Any disputes arising from these terms or your use of AI AppSec Academy services shall be subject to the exclusive jurisdiction of the courts in the applicable state of residence of the site owner.",
      "If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.",
    ],
  },
  {
    title: "9. Contact",
    content: [
      "For questions about these terms, training programs, or any other inquiries, please reach out via LinkedIn:",
    ],
    link: {
      text: "linkedin.com/in/vchirrav",
      href: "https://www.linkedin.com/in/vchirrav/",
    },
  },
];

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      {/* Header */}
      <div className="mb-12">
        <p className="text-sm text-cyber-accent font-mono mb-2">
          &gt; cat terms_and_conditions.md
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-cyber-text mb-4">
          Terms &amp; Conditions
        </h1>
        <p className="text-lg text-cyber-muted leading-relaxed">
          Please read these terms carefully before using AI AppSec Academy™
          services or enrolling in any training program.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        {sections.map((section) => (
          <div
            key={section.title}
            className="bg-cyber-surface border border-cyber-border rounded-lg p-8"
          >
            <h2 className="text-xl font-bold text-cyber-text mb-4 flex items-center gap-3">
              <span className="text-emerald-400">&gt;</span>
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.content.map((paragraph, i) => (
                <p key={i} className="text-sm text-cyber-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {section.link && (
                <p className="text-sm">
                  <a
                    href={section.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyber-accent hover:underline"
                  >
                    {section.link.text}
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-12 text-center text-xs text-cyber-muted">
        <Shield className="w-4 h-4 text-cyber-accent inline-block mr-1" />
        Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
      </div>
    </div>
  );
}
