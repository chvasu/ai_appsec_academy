import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-cyber-border bg-cyber-bg/50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-cyber-accent" />
              <span className="font-bold text-cyber-text">
                AI AppSec Academy
              </span>
            </div>
            <p className="text-sm text-cyber-muted leading-relaxed">
              Elite cybersecurity training in AI/ML Security, Agentic AI, and
              LLM Application Security.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-cyber-text mb-3 uppercase tracking-wider">
              Links
            </h4>
            <ul className="space-y-2 text-sm text-cyber-muted">
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

          {/* Contact */}
          <div id="contact">
            <h4 className="text-sm font-semibold text-cyber-text mb-3 uppercase tracking-wider">
              Contact
            </h4>
            <p className="text-sm text-cyber-muted leading-relaxed">
              For corporate training inquiries, speaking engagements, or custom
              workshops, reach out via{" "}
              <a
                href="https://www.linkedin.com/in/vchirrav/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-accent hover:underline"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cyber-border text-center text-xs text-cyber-muted">
          <span className="text-cyber-accent">&gt;</span>{" "}
          {new Date().getFullYear()} Viswanath Srinivasan Chirravuri. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
