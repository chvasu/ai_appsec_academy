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
          Product Security &amp; Gen AI Expert | GSE #335 | CompTIA SME |
          D.Eng. Cybersecurity Analytics (expected Aug 2026) | RSA 2024 &amp; 2026 Speaker
        </p>
      </div>

      {/* Bio */}
      <div className="bg-cyber-surface border border-cyber-border rounded-lg p-8 mb-12">
        <p className="text-cyber-muted leading-relaxed mb-4">
          Cybersecurity and product security leader with 20+ years driving
          enterprise security strategy, global program leadership, and
          innovation in secure software development and operations. Proven
          expertise in building and managing high-performing teams, developing
          security governance frameworks, and aligning cybersecurity initiatives
          with business goals.
        </p>
        <p className="text-cyber-muted leading-relaxed mb-4">
          I am a{" "}
          <a
            href="https://www.sans.org/profiles/viswanath-chirravuri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyber-accent hover:underline"
          >
            Teaching Assistant for multiple SANS Institute courses
          </a>
          {" "}and a regular webinar presenter on AI/ML security topics. I am
          also a{" "}
          <a
            href="https://production-comptiawebsite.azurewebsites.net/certifications/become-a-subject-matter-expert/current-smes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyber-accent hover:underline"
          >
            CompTIA Subject Matter Expert (SME)
          </a>
          {" "}for Security+ and Cloud+. I am pursuing a Doctor of Engineering in
          Cybersecurity Analytics at The George Washington University (expected August 2026) and am a
          GIAC Security Expert (GSE #335) with 35+ industry certifications.
        </p>
        <p className="text-cyber-muted leading-relaxed">
          I am a featured speaker at RSA Conference (2024 &amp; 2026) and a key contributor
          to the open-source Secure Machine Learning project. My career spans
          leadership roles across financial services, banking, and technology
          sectors including Credit Agricole CIB, J.P. Morgan, and CA
          Technologies.
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
              <span className="text-cyber-accent">&gt;</span> GSE #335 — GIAC
              Security Expert
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyber-accent">&gt;</span> CISSP — Certified
              Information Systems Security Professional
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyber-accent">&gt;</span> PMP — Project
              Management Professional
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyber-accent">&gt;</span> 35+ certifications
              including 23 GIAC, CompTIA, AWS &amp; Azure
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
              Teaching Assistant &amp; Webinar Presenter
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyber-accent">&gt;</span> CompTIA —
              Subject Matter Expert (Security+, Cloud+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyber-accent">&gt;</span> RSA Conference
              2024 &amp; 2026 — Featured Speaker
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyber-accent">&gt;</span> D.Eng.
              Cybersecurity Analytics — George Washington University (expected Aug 2026)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyber-accent">&gt;</span> M.S. Information
              Security Engineering — SANS Technology Institute
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
            "Product Security & DevSecOps",
            "Securing AI/ML (Adversarial AI)",
            "Applied AI: RAG, Fine-tuning, MLSecOps, Agentic AI",
            "LLM Application Security (OWASP Top 10)",
            "Cyber Red & Blue Team Management (Offensive AI)",
            "Software Supply Chain Security",
            "Secure-ML Framework & ML Pipeline Security",
            "Data Security Governance, Risk & Compliance",
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
        <a
          href="https://www.sans.org/profiles/viswanath-chirravuri"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-cyber-surface border border-cyber-border rounded-lg text-sm text-cyber-muted hover:text-cyber-accent hover:border-cyber-accent/30 transition"
        >
          SANS Profile
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
        <a
          href="https://www.credly.com/users/vchirrav"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-cyber-surface border border-cyber-border rounded-lg text-sm text-cyber-muted hover:text-cyber-accent hover:border-cyber-accent/30 transition"
        >
          Credly
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
        <a
          href="https://www.rsaconference.com/experts/viswanath-chirravuri"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-cyber-surface border border-cyber-border rounded-lg text-sm text-cyber-muted hover:text-cyber-accent hover:border-cyber-accent/30 transition"
        >
          RSA Profile
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
