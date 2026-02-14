import { ArrowLeft, ExternalLink, Shield, Terminal, Cpu, Package, Search, Lock, Container, Server, Globe, Smartphone, Wifi, FileCode, Bug, Link2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Introducing Product Security AI Skills: 36 Ready-to-Use Security Skills for AI Agents | AI AppSec Academy",
  description:
    "A comprehensive open-source catalog of 36 AI-powered security skills spanning SAST, SCA, DAST, container security, IaC scanning, secret detection, cloud security, and more — built for Claude Code, Cursor, and GitHub Copilot.",
};

const categories = [
  {
    icon: FileCode,
    name: "Secure Coding",
    skills: ["secure-coding-audit", "secure-coding-generate"],
    tools: "OWASP Rules",
    targets: "All (Rule-based & Gen)",
  },
  {
    icon: Search,
    name: "SAST",
    skills: [
      "sast-semgrep", "sast-bandit", "sast-eslint-security", "sast-spotbugs",
      "sast-gosec", "sast-flawfinder", "sast-brakeman", "sast-psalm",
      "sast-cargo-audit", "sast-detekt",
    ],
    tools: "Semgrep, Bandit, ESLint, SpotBugs, gosec, Flawfinder, Brakeman, Psalm, cargo-audit, detekt",
    targets: "30+ Languages: Python, JS/TS, Java, Go, C/C++, Ruby, PHP, Rust, Kotlin",
  },
  {
    icon: Package,
    name: "SCA",
    skills: ["sca-osv-scanner", "sca-grype", "sca-npm-audit", "sca-pip-audit"],
    tools: "OSV-Scanner, Grype, npm audit, pip-audit",
    targets: "All Ecosystems: Node.js, Python, npm, PyPI, Maven",
  },
  {
    icon: Lock,
    name: "Secret Scanning",
    skills: ["secret-scan-gitleaks", "secret-scan-trufflehog"],
    tools: "Gitleaks, TruffleHog",
    targets: "Git Repos, Files, S3",
  },
  {
    icon: Container,
    name: "Container Security",
    skills: ["container-scan-trivy", "container-scan-hadolint", "container-scan-dockle"],
    tools: "Trivy, Hadolint, Dockle",
    targets: "Docker/OCI Images, Dockerfiles, CIS Benchmarks",
  },
  {
    icon: Server,
    name: "Infrastructure as Code",
    skills: ["iac-scan-checkov", "iac-scan-tfsec", "iac-scan-kube-linter"],
    tools: "Checkov, tfsec, KubeLinter",
    targets: "Terraform, K8s, Helm, CloudFormation",
  },
  {
    icon: Globe,
    name: "DAST",
    skills: ["dast-zap", "dast-nuclei"],
    tools: "OWASP ZAP, Nuclei",
    targets: "Web Apps, APIs, Network",
  },
  {
    icon: Shield,
    name: "API Security",
    skills: ["api-security-schemathesis", "api-security-spectral"],
    tools: "Schemathesis, Spectral",
    targets: "OpenAPI, GraphQL, AsyncAPI",
  },
  {
    icon: Package,
    name: "SBOM",
    skills: ["sbom-syft"],
    tools: "Syft",
    targets: "Images, Filesystems",
  },
  {
    icon: FileCode,
    name: "License Compliance",
    skills: ["license-scan-scancode"],
    tools: "ScanCode Toolkit",
    targets: "Source Code",
  },
  {
    icon: Cpu,
    name: "Cloud Security",
    skills: ["cloud-security-prowler", "cloud-security-scoutsuite"],
    tools: "Prowler, ScoutSuite",
    targets: "AWS, Azure, GCP, Oracle",
  },
  {
    icon: Smartphone,
    name: "Mobile Security",
    skills: ["mobile-security-mobsf"],
    tools: "MobSF",
    targets: "Android, iOS",
  },
  {
    icon: Wifi,
    name: "Network Security",
    skills: ["network-scan-nmap"],
    tools: "Nmap",
    targets: "Hosts, Networks",
  },
  {
    icon: Lock,
    name: "TLS/SSL Security",
    skills: ["tls-scan-testssl"],
    tools: "testssl.sh",
    targets: "TLS Endpoints",
  },
  {
    icon: Bug,
    name: "Malware Analysis",
    skills: ["malware-scan-yara"],
    tools: "YARA",
    targets: "Files, Binaries",
  },
  {
    icon: Link2,
    name: "Supply Chain Security",
    skills: ["dependency-confusion-detect"],
    tools: "Confused + GuardDog",
    targets: "npm, PyPI, Maven",
  },
];

export default function ProductSecurityAISkillsPost() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-cyber-muted hover:text-cyber-accent transition mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Articles
      </Link>

      {/* Header */}
      <div className="mb-10">
        <p className="text-sm text-cyber-accent font-mono mb-2">
          &gt; cat ./blog/product-security-ai-skills.md
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-cyber-text mb-3">
          Introducing Product Security AI Skills: The Toolkit for Modern AppSec
        </h1>
        <p className="text-sm text-cyber-muted">February 14, 2026</p>
      </div>

      {/* Hero Image */}
      <div className="mb-10 rounded-lg overflow-hidden border border-cyber-border">
        <Image
          src="/images/product-security-ai-skills.png"
          alt="Product Security AI Skills — comprehensive catalog of 36 AI-powered security skills, tools, and targets"
          width={1600}
          height={900}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Article body */}
      <article className="space-y-8">
        {/* Intro */}
        <div className="bg-cyber-surface border border-cyber-border rounded-lg p-8">
          <p className="text-cyber-muted leading-relaxed mb-4">
            Security tooling has always been fragmented. SAST scanners, SCA analyzers, container
            auditors, secret detectors, IaC linters, DAST engines, cloud posture assessments &mdash;
            each one lives in its own silo with its own CLI, configuration format, and output schema.
            What if your AI coding assistant could run <em>all of them</em> on demand, interpret the
            results, and deliver actionable remediation guidance?
          </p>
          <p className="text-cyber-muted leading-relaxed">
            That&rsquo;s exactly what{" "}
            <strong className="text-cyber-text">Product Security AI Skills</strong> delivers. It&rsquo;s
            an open-source repository of{" "}
            <strong className="text-cyber-text">36 ready-to-use AI agent skills</strong> spanning the
            complete application security toolchain &mdash; built for Claude Code, Cursor, GitHub
            Copilot, and any AI coding assistant that supports the skills format.
          </p>
        </div>

        {/* Installation */}
        <div>
          <h2 className="text-2xl font-bold text-cyber-text mb-4 flex items-center gap-3">
            <Terminal className="w-6 h-6 text-cyber-accent" />
            Quick Start
          </h2>
          <div className="bg-cyber-surface border border-cyber-border rounded-lg p-8 space-y-4">
            <p className="text-cyber-muted leading-relaxed">
              Install all 36 skills in one command:
            </p>
            <div className="bg-cyber-bg border border-cyber-border rounded-lg p-4 font-mono text-sm text-cyber-accent">
              <span className="text-cyber-muted">$</span> npx skills add vchirrav/product-security-ai-skills
            </div>
            <p className="text-cyber-muted leading-relaxed">
              Or install individual skills as needed:
            </p>
            <div className="bg-cyber-bg border border-cyber-border rounded-lg p-4 font-mono text-sm text-cyber-accent">
              <span className="text-cyber-muted">$</span> npx skills add vchirrav/product-security-ai-skills@sast-semgrep
            </div>
            <p className="text-cyber-muted leading-relaxed">
              All skills are also available on the{" "}
              <a
                href="https://skills.sh/?q=vchirrav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-accent hover:text-cyber-accent-bright transition underline"
              >
                Vercel Skills Store
              </a>{" "}
              &mdash; browse, search, and install directly from the web.
            </p>
          </div>
        </div>

        {/* What's Included */}
        <div>
          <h2 className="text-2xl font-bold text-cyber-text mb-4 flex items-center gap-3">
            <Shield className="w-6 h-6 text-cyber-accent" />
            16 Security Categories, 36 Skills
          </h2>
          <div className="bg-cyber-surface border border-cyber-border rounded-lg p-8">
            <p className="text-cyber-muted leading-relaxed mb-6">
              Every major security domain is covered &mdash; from code-level analysis to cloud
              infrastructure posture. Each skill wraps a best-in-class open-source tool, handles
              execution, parses output, and delivers findings with remediation guidance.
            </p>
            <div className="space-y-3">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  className="p-4 rounded-lg bg-cyber-bg border border-cyber-border"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <cat.icon className="w-5 h-5 text-cyber-accent shrink-0" />
                    <h3 className="text-cyber-text font-bold">{cat.name}</h3>
                    <span className="text-xs text-cyber-muted ml-auto">
                      {cat.skills.length} skill{cat.skills.length > 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-2 py-1 rounded bg-cyber-surface border border-cyber-border text-cyber-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-cyber-muted">
                    <strong className="text-cyber-text">Tools:</strong> {cat.tools} &nbsp;|&nbsp;{" "}
                    <strong className="text-cyber-text">Targets:</strong> {cat.targets}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div>
          <h2 className="text-2xl font-bold text-cyber-text mb-4 flex items-center gap-3">
            <Cpu className="w-6 h-6 text-cyber-accent" />
            How It Works
          </h2>
          <div className="bg-cyber-surface border border-cyber-border rounded-lg p-8">
            <p className="text-cyber-muted leading-relaxed mb-6">
              Each skill is a self-contained <code className="text-cyber-accent">SKILL.md</code> file
              that teaches your AI agent how to:
            </p>
            <ul className="space-y-3">
              {[
                "Execute the underlying security tool with the right flags and configuration",
                "Parse and interpret tool output (JSON, SARIF, or custom formats)",
                "Classify findings by severity and provide contextual remediation guidance",
                "Handle edge cases — missing dependencies, unsupported file types, empty results",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-cyber-muted">
                  <span className="text-cyber-accent shrink-0">&gt;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-cyber-muted leading-relaxed mt-6">
              Skills are available in the{" "}
              <strong className="text-cyber-text">skills.sh format</strong> (top-level directories with
              SKILL.md files) and as native{" "}
              <strong className="text-cyber-text">Claude Code skills</strong> in the{" "}
              <code className="text-cyber-accent">.claude/skills/</code> directory.
            </p>
          </div>
        </div>

        {/* OWASP Secure Coding Dependency */}
        <div>
          <h2 className="text-2xl font-bold text-cyber-text mb-4 flex items-center gap-3">
            <FileCode className="w-6 h-6 text-cyber-accent" />
            OWASP Secure Coding Integration
          </h2>
          <div className="bg-cyber-surface border border-cyber-border rounded-lg p-8">
            <p className="text-cyber-muted leading-relaxed mb-4">
              The <code className="text-cyber-accent">secure-coding-audit</code> and{" "}
              <code className="text-cyber-accent">secure-coding-generate</code> skills are powered by
              the companion{" "}
              <a
                href="https://github.com/vchirrav/owasp-secure-coding-md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-accent hover:text-cyber-accent-bright transition underline"
              >
                OWASP Secure Coding Practices (Markdown)
              </a>{" "}
              repository &mdash; 22 modular rule files covering authentication, input validation, API security,
              cryptography, Docker, Kubernetes, CI/CD, and more.
            </p>
            <div className="bg-cyber-bg border border-cyber-border rounded-lg p-4 font-mono text-sm text-cyber-accent">
              <span className="text-cyber-muted">$</span> git clone https://github.com/vchirrav/owasp-secure-coding-md.git<br />
              <span className="text-cyber-muted">$</span> cp -r owasp-secure-coding-md/rules ./rules
            </div>
            <p className="text-cyber-muted leading-relaxed mt-4">
              All other skills function independently without external dependencies.
            </p>
          </div>
        </div>

        {/* Why This Matters */}
        <div>
          <h2 className="text-2xl font-bold text-cyber-text mb-4 flex items-center gap-3">
            <Shield className="w-6 h-6 text-cyber-accent" />
            Why This Matters
          </h2>
          <div className="bg-cyber-surface border border-cyber-border rounded-lg p-8">
            <p className="text-cyber-muted leading-relaxed mb-4">
              The shift to AI-assisted development is accelerating. Developers are using Claude Code,
              Cursor, and Copilot to write code faster than ever &mdash; but security tooling hasn&rsquo;t
              kept pace. Most security scanning still happens in CI/CD pipelines, <em>after</em> code
              is committed.
            </p>
            <p className="text-cyber-muted leading-relaxed mb-4">
              Product Security AI Skills brings security scanning{" "}
              <strong className="text-cyber-text">into the development loop</strong>. Instead of waiting
              for pipeline results, developers can run SAST, SCA, secret scanning, and container audits
              directly from their AI assistant &mdash; catching vulnerabilities at the moment of creation.
            </p>
            <ul className="space-y-3">
              {[
                "Shift-left security without changing developer workflows",
                "Consistent security coverage across 30+ programming languages",
                "AI-interpreted results with actionable remediation, not raw tool dumps",
                "Open-source tools only — no vendor lock-in, no license fees",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-cyber-muted">
                  <span className="text-cyber-accent shrink-0">&gt;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-cyber-surface border border-cyber-accent/30 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-cyber-text mb-3">
            Get Product Security AI Skills
          </h3>
          <p className="text-cyber-muted mb-6 max-w-lg mx-auto">
            36 security skills. 16 categories. One install command. Secure your software supply
            chain with AI-powered precision.
          </p>
          <a
            href="https://github.com/vchirrav/product-security-ai-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-accent/10 border border-cyber-accent/30 rounded-lg text-cyber-accent hover:bg-cyber-accent/20 transition font-medium"
          >
            View on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
          <p className="text-xs text-cyber-muted mt-4">
            Open-source and free to use. Stars and contributions welcome.
          </p>
        </div>
      </article>
    </div>
  );
}
