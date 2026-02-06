import {
  Shield,
  Award,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      {/* Header */}
      <div className="mb-12">
        <p className="text-sm text-cyber-accent font-mono mb-2">
          &gt; whoami
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-cyber-text mb-4">
          Viswanath Srinivasan Chirravuri
        </h1>
        <p className="text-lg text-cyber-muted leading-relaxed">
          SANS Instructor | AI/ML Security Specialist |
          RSA 2026 Speaker
        </p>
      </div>

      {/* Bio */}
      <div className="bg-cyber-surface border border-cyber-border rounded-lg p-8 mb-12">
        <p className="text-cyber-muted leading-relaxed mb-4">
          I specialize in the intersection of artificial intelligence and
          application security. With over 15 years in cybersecurity, I have
          built and secured systems across financial services, defense, and
          technology sectors.
        </p>
        <p className="text-cyber-muted leading-relaxed mb-4">
          As a SANS instructor, I train security professionals on cutting-edge
          topics including Agentic AI security, conversational SAST, LLM
          application security, and the Secure-ML framework. My work focuses on
          making AI systems safe and trustworthy at scale.
        </p>
        <p className="text-cyber-muted leading-relaxed">
          I am a featured speaker at RSA Conference 2026, where I present on
          defending autonomous AI agents against emerging attack vectors in
          enterprise environments.
        </p>
      </div>

      {/* Credentials */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-cyber-surface border border-cyber-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-cyber-accent" />
            <h3 className="text-lg font-bold text-cyber-text">
              Certifications
            </h3>
          </div>
          <ul className="space-y-2 text-sm text-cyber-muted">
            <li className="flex items-center gap-2">
              <span className="text-cyber-accent">&gt;</span> CISSP — Certified
              Information Systems Security Professional
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyber-accent">&gt;</span> CEH — Certified
              Ethical Hacker
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyber-accent">&gt;</span> GIAC — SANS
              Global Information Assurance Certification
            </li>
          </ul>
        </div>

        <div className="bg-cyber-surface border border-cyber-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-6 h-6 text-cyber-accent" />
            <h3 className="text-lg font-bold text-cyber-text">Roles</h3>
          </div>
          <ul className="space-y-2 text-sm text-cyber-muted">
            <li className="flex items-center gap-2">
              <span className="text-cyber-accent">&gt;</span> SANS Institute —
              Certified Instructor
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyber-accent">&gt;</span> RSA Conference
              2026 — Featured Speaker
            </li>
          </ul>
        </div>
      </div>

      {/* Focus Areas */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-cyber-text mb-6 flex items-center gap-3">
          <Shield className="w-6 h-6 text-cyber-accent" />
          Focus Areas
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Agentic AI Security & Defense",
            "LLM Application Security (OWASP Top 10)",
            "Conversational SAST & AI-Driven Code Review",
            "Secure-ML Framework & ML Pipeline Security",
            "AI Red-Teaming & Adversarial ML",
            "Enterprise AI Security Governance",
          ].map((area) => (
            <div
              key={area}
              className="flex items-center gap-3 p-3 rounded-lg bg-cyber-bg border border-cyber-border text-sm text-cyber-muted"
            >
              <Zap className="w-4 h-4 text-cyber-accent shrink-0" />
              {area}
            </div>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-4">
        <a
          href="https://www.linkedin.com/in/vchirrav/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-cyber-surface border border-cyber-border rounded-lg text-sm text-cyber-muted hover:text-cyber-accent hover:border-cyber-accent/30 transition"
        >
          LinkedIn
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
        <a
          href="https://github.com/vchirrav"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-cyber-surface border border-cyber-border rounded-lg text-sm text-cyber-muted hover:text-cyber-accent hover:border-cyber-accent/30 transition"
        >
          GitHub
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
        <Link
          href="/#courses"
          className="flex items-center gap-2 px-5 py-2.5 bg-cyber-accent/10 border border-cyber-accent/30 rounded-lg text-sm text-cyber-accent hover:bg-cyber-accent/20 transition"
        >
          <Award className="w-3.5 h-3.5" />
          View Training Programs
        </Link>
      </div>
    </div>
  );
}
