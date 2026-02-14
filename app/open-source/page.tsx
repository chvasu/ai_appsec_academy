import {
  ExternalLink,
  GitFork,
  Star,
  Shield,
  Brain,
  BookOpen,
} from "lucide-react";

const projects = [
  {
    icon: Shield,
    name: "Secure-ML Framework",
    repo: "thalesgroup/secure-ml",
    url: "https://github.com/thalesgroup/secure-ml",
    stars: 20,
    forks: 6,
    role: "Project Leader & Key Contributor",
    accent: "emerald",
    summary:
      "A comprehensive framework for securing machine learning systems across the entire ML lifecycle. Developed as an industry-leading resource, it provides security policies, threat models, privacy-preserving techniques, and a curated collection of 40+ open-source security tools for ML.",
    image: "/images/ml-secplan.png",
    imageAlt: "Secure ML Cheatsheet: Pillars, Goals, Techniques, and Activities across Data Security, Model Security, Platform Security, Security Compliance, and Human Security",
    highlights: [
      "ML Security Policy framework covering datasets, models, platforms, and compliance",
      "Privacy-preserving techniques: Differential Privacy, Federated Learning, Homomorphic Encryption, SMPC",
      "40+ curated open-source tools for adversarial security, LLM security, bias/fairness, and monitoring",
      "ML threat taxonomy covering training data, model, and inference attack surfaces",
      "Agentic AI threat comparison (CSA vs OWASP frameworks)",
      "Presented at OWASP LASCON 2024 conference",
    ],
  },
  {
    icon: BookOpen,
    name: "Secure Coding Practices (Markdown)",
    repo: "vchirrav/owasp-secure-coding-md",
    url: "https://github.com/vchirrav/owasp-secure-coding-md",
    stars: 1,
    forks: 2,
    role: "Creator & Maintainer",
    accent: "sky",
    summary:
      "A machine-readable, Markdown-optimized implementation of the OWASP Secure Coding Practices Quick Reference Guide (v2.1), extended with modern security domains including API Security, Cloud/Kubernetes, CI/CD, Supply Chain, IaC, and Secrets Management. Designed specifically for AI agents (Claude Code, GitHub Copilot) and LLMs to enable token-efficient, context-aware security audits and code generation.",
    image: "/images/secure-coding-rules.png",
    imageAlt: "Secure-Coding Rules for AI-Generated Code cheatsheet covering 22 security domains including Access Control, API Security, Authentication, CI/CD, Docker, Cloud & Kubernetes, and more",
    highlights: [
      "22 modular rule files covering Access Control, API Security, Authentication, CI/CD, Cloud/K8s, Docker, IaC, Secrets Management, Supply Chain, and more",
      "3 integration options: CLAUDE.md persona reference, Claude Code Skills (audit & generate), or MCP server (Docker & Docker Compose ready)",
      "Two dedicated Claude Code skills: /secure-coding-audit for code review with findings tables, and /secure-coding-generate for producing secure code with inline Rule ID citations",
      "MCP server exposing 22 resources and 3 tools (list_rules, get_rule, audit_checklist) with Docker, Docker Compose, and native Node.js deployment",
      "Each rule follows a consistent 6-field pattern: Identity, Rule, Rationale, Implementation, Verification, Examples",
      "Automatic domain detection in Skills mode — identifies relevant security domains from the code being audited or generated",
      "Optimized for Just-In-Time context injection into LLM workflows without exhausting token budgets",
    ],
  },
  {
    icon: Brain,
    name: "ML Research: Local LLM Fine-Tuning",
    repo: "vchirrav/ml_research",
    url: "https://github.com/vchirrav/ml_research",
    stars: 0,
    forks: 0,
    role: "Creator & Researcher",
    accent: "amber",
    summary:
      "Hands-on research into local LLM fine-tuning using HuggingFace Transformers, PEFT/LoRA adapters, and Unsloth for efficient training. Demonstrates the full pipeline from fine-tuning to GGUF conversion and local deployment via Ollama, optimized for NVIDIA Blackwell GPUs.",
    highlights: [
      "Fine-tuning TinyLlama-1.1B with 4-bit QLoRA on cybersecurity domain data",
      "LoRA adapter training with rank-16, targeting all attention and MLP projection layers",
      "Full pipeline: fine-tune → merge adapters → convert to GGUF (Q8_0) → deploy with Ollama",
      "Optimized for NVIDIA RTX 5060 (Blackwell sm_120) with bfloat16 precision",
      "Training completed in ~24 seconds with 64.57% mean token accuracy",
      "Reproducible setup using uv package manager on Windows",
    ],
  },
];

const accentColors: Record<string, { border: string; text: string; bg: string; glow: string }> = {
  emerald: {
    border: "border-emerald-500/30 hover:border-emerald-500/60",
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    glow: "group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]",
  },
  sky: {
    border: "border-sky-500/30 hover:border-sky-500/60",
    text: "text-sky-400",
    bg: "bg-sky-500/10",
    glow: "group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]",
  },
  amber: {
    border: "border-amber-500/30 hover:border-amber-500/60",
    text: "text-amber-400",
    bg: "bg-amber-500/10",
    glow: "group-hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]",
  },
};

export default function OpenSourcePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <p className="text-sm text-cyber-accent font-mono mb-2">
          &gt; ls ~/open-source --contributions
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-cyber-text mb-4">
          Open-Source Contributions
        </h1>
        <p className="text-cyber-muted max-w-2xl mx-auto">
          Building security frameworks, tools, and research in the open.
          Contributing to the community that defends AI/ML systems and
          application security at scale.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project) => {
          const colors = accentColors[project.accent];
          return (
            <div
              key={project.repo}
              className={`group bg-cyber-surface rounded-lg border ${colors.border} transition-all duration-300 overflow-hidden`}
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-lg bg-cyber-bg border border-cyber-border ${colors.text}`}
                    >
                      <project.icon
                        className={`w-6 h-6 ${colors.glow} transition`}
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-cyber-text">
                        {project.name}
                      </h2>
                      <p className={`text-xs font-mono ${colors.text}`}>
                        {project.repo}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full border ${colors.bg} ${colors.text} border-current/30 shrink-0`}
                  >
                    {project.role}
                  </span>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-sm text-cyber-muted">
                    <Star className="w-4 h-4" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-cyber-muted">
                    <GitFork className="w-4 h-4" />
                    <span>{project.forks}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-cyber-muted leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Image (if any) */}
              {project.image && (
                <div className="px-6 py-4 border-t border-cyber-border/50">
                  <img
                    src={project.image}
                    alt={project.imageAlt || project.name}
                    className="w-full rounded-lg border border-cyber-border/50"
                  />
                </div>
              )}

              {/* Highlights */}
              <div className="px-6 py-4 border-t border-cyber-border/50">
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className={`mt-0.5 ${colors.text}`}>&gt;</span>
                      <span className="text-cyber-muted">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-6 py-4 border-t border-cyber-border/50">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm ${colors.text} hover:underline`}
                >
                  View on GitHub
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
