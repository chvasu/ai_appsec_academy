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
    name: "OWASP Secure Coding Practices (Markdown)",
    repo: "vchirrav/owasp-secure-coding-md",
    url: "https://github.com/vchirrav/owasp-secure-coding-md",
    stars: 1,
    forks: 2,
    role: "Creator & Maintainer",
    accent: "sky",
    summary:
      "A machine-readable, Markdown-optimized implementation of the OWASP Secure Coding Practices Quick Reference Guide (v2.1), extended with modern security domains. Includes an MCP server and Claude Code skill for AI-driven security audits. Designed specifically for AI agents (Claude Code, GitHub Copilot) and LLMs to enable token-efficient, context-aware security audits and code generation.",
    highlights: [
      "22 modular rule files covering OWASP, API Security, Cloud/K8s, CI/CD, Supply Chain, IaC, and Secrets Management",
      "MCP server exposing 22 resources and 3 tools (list_rules, get_rule, audit_checklist) via Model Context Protocol",
      "Claude Code SKILL.md for automated security audits and secure code generation with Rule ID citations",
      "Each rule follows a consistent 6-field pattern: Identity, Rule, Rationale, Implementation, Verification, Examples",
      "4 integration options: Git submodule, skill copy, CLAUDE.md reference, or MCP server (Docker-ready)",
      "Optimized for Just-In-Time context injection into LLM workflows without exhausting token budgets",
      "Covers Dockerfile security, software supply chain (SBOM, signing, provenance), and memory management",
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
