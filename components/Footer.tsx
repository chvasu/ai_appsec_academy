"use client";

import { useState } from "react";
import { Shield } from "lucide-react";
import Link from "next/link";
import { TermsCheckbox } from "./TermsCheckbox";

export function Footer() {
  const [contactTermsAccepted, setContactTermsAccepted] = useState(false);

  return (
    <footer className="border-t border-cyber-border bg-cyber-bg/50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-cyber-accent" />
              <span className="font-bold text-cyber-text">
                AI AppSec Consulting
              </span>
            </div>
            <p className="text-sm text-cyber-muted leading-relaxed">
              Expert cybersecurity consulting in AI/ML Security, Agentic AI,
              AppSec, and DevSecOps. Book hourly sessions with an industry expert.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-cyber-text mb-3 uppercase tracking-wider">
              Links
            </h4>
            <ul className="space-y-2 text-sm text-cyber-muted">
              <li>
                <Link href="/faq" className="hover:text-cyber-accent transition">
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/vchirrav/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyber-accent transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/vchirrav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyber-accent transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.sans.org/profiles/viswanath-chirravuri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyber-accent transition"
                >
                  SANS Institute
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-cyber-text mb-3 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-cyber-muted">
              <li>
                <Link
                  href="/terms"
                  className="hover:text-cyber-accent transition"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-cyber-accent transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="hover:text-cyber-accent transition"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="hover:text-cyber-accent transition"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="text-sm font-semibold text-cyber-text mb-3 uppercase tracking-wider">
              Contact
            </h4>
            <p className="text-sm text-cyber-muted leading-relaxed mb-3">
              For enterprise consulting inquiries, speaking engagements, or custom
              engagements, reach out via LinkedIn.
            </p>
            <TermsCheckbox
              onAcceptChange={setContactTermsAccepted}
              className="mb-3"
            />
            {contactTermsAccepted ? (
              <a
                href="https://www.linkedin.com/in/vchirrav/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-cyber-accent hover:underline"
              >
                Connect on LinkedIn
              </a>
            ) : (
              <span className="inline-block text-sm text-gray-500 opacity-50 cursor-not-allowed">
                Connect on LinkedIn
              </span>
            )}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cyber-border text-center text-xs text-cyber-muted">
          <span className="text-cyber-accent">&gt;</span> &copy;{" "}
          {new Date().getFullYear()} Viswanath Srinivasan Chirravuri. All rights
          reserved. AI AppSec Consulting is a service of Viswanath Srinivasan
          Chirravuri.
        </div>
      </div>
    </footer>
  );
}
