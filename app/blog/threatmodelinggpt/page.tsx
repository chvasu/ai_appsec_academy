import { ArrowLeft, ExternalLink, Shield, Target, Bot, Layers } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Introducing ThreatModelingGPT: AI-Powered Threat Intelligence for Modern Systems | AI AppSec Academy",
  description:
    "A free, public Custom GPT that helps security teams identify risks, analyze attack surfaces, and suggest mitigation strategies using STRIDE, PASTA, LINDDUN, MAESTRO, and more.",
};

const exampleQuestions = [
  "Threat model my REST API with OAuth2 authentication",
  "Analyze attack surface for a Kubernetes microservices deployment",
  "Apply STRIDE to an LLM application with RAG",
  "Identify data privacy risks in my customer analytics pipeline",
  "Threat model an enterprise SSO system using PASTA",
  "What are the supply chain risks in my CI/CD pipeline?",
  "Apply LINDDUN to my healthcare data platform",
  "Model threats for an ML inference service on AWS",
];

const methodologies = [
  {
    name: "STRIDE",
    description: "Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege",
  },
  {
    name: "PASTA",
    description: "Process for Attack Simulation and Threat Analysis — risk-centric methodology",
  },
  {
    name: "LINDDUN",
    description: "Privacy threat modeling framework for identifying data protection risks",
  },
  {
    name: "MAESTRO",
    description: "AI/ML-specific threat modeling for machine learning systems",
  },
];

const domains = [
  {
    icon: Target,
    title: "Software & Systems",
    examples: "Web apps, APIs, microservices, databases, authentication flows",
  },
  {
    icon: Layers,
    title: "Cloud Infrastructure",
    examples: "AWS, Azure, GCP deployments, Kubernetes, serverless architectures",
  },
  {
    icon: Bot,
    title: "AI/ML Models",
    examples: "LLM applications, RAG systems, ML pipelines, inference endpoints",
  },
  {
    icon: Shield,
    title: "Enterprise Architecture",
    examples: "SSO systems, identity providers, data platforms, CI/CD pipelines",
  },
];

export default function ThreatModelingGPTPost() {
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
          &gt; cat ./blog/threatmodelinggpt.md
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-cyber-text mb-3">
          Introducing ThreatModelingGPT: Your AI-Powered Threat Intelligence Partner
        </h1>
        <p className="text-sm text-cyber-muted">February 7, 2026</p>
      </div>

      {/* Article body */}
      <article className="space-y-8">
        {/* Intro */}
        <div className="bg-cyber-surface border border-cyber-border rounded-lg p-8">
          <p className="text-cyber-muted leading-relaxed mb-4">
            Threat modeling is one of the most critical — and most time-consuming —
            activities in the security lifecycle. Identifying risks, mapping attack
            surfaces, and reasoning through potential exploits requires deep expertise,
            structured methodologies, and substantial mental effort. What if you could
            accelerate the initial modeling phase and catch blind spots you might have missed?
          </p>
          <p className="text-cyber-muted leading-relaxed">
            That&rsquo;s exactly what{" "}
            <strong className="text-cyber-text">ThreatModelingGPT</strong> is designed to do.
            It&rsquo;s a free, public Custom GPT built on OpenAI that applies industry-standard
            threat modeling frameworks to help you identify potential risks, analyze attack
            surfaces, and suggest mitigation strategies — all through a conversational interface.
          </p>
        </div>

        {/* What it does */}
        <div>
          <h2 className="text-2xl font-bold text-cyber-text mb-4 flex items-center gap-3">
            <Shield className="w-6 h-6 text-cyber-accent" />
            What ThreatModelingGPT Does
          </h2>
          <div className="bg-cyber-surface border border-cyber-border rounded-lg p-8">
            <p className="text-cyber-muted leading-relaxed mb-6">
              ThreatModelingGPT is built with multiple proven threat modeling methodologies,
              allowing you to analyze systems through different security lenses:
            </p>
            <div className="space-y-4">
              {methodologies.map((method) => (
                <div
                  key={method.name}
                  className="flex gap-4 p-4 rounded-lg bg-cyber-bg border border-cyber-border"
                >
                  <span className="text-cyber-accent font-bold shrink-0">
                    &gt;
                  </span>
                  <div>
                    <h3 className="text-cyber-text font-bold mb-1">
                      {method.name}
                    </h3>
                    <p className="text-sm text-cyber-muted">
                      {method.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-cyber-muted leading-relaxed mt-6">
              Whether you&rsquo;re analyzing a cloud microservice, a machine learning
              pipeline, or an enterprise authentication system, ThreatModelingGPT can
              apply the right framework to surface risks specific to your architecture.
            </p>
          </div>
        </div>

        {/* Domains covered */}
        <div>
          <h2 className="text-2xl font-bold text-cyber-text mb-4 flex items-center gap-3">
            <Target className="w-6 h-6 text-cyber-accent" />
            Domains Covered
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {domains.map((domain) => (
              <div
                key={domain.title}
                className="bg-cyber-surface border border-cyber-border rounded-lg p-6 hover:border-cyber-accent/30 transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <domain.icon className="w-5 h-5 text-cyber-accent" />
                  <h3 className="text-cyber-text font-bold">{domain.title}</h3>
                </div>
                <p className="text-sm text-cyber-muted">{domain.examples}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div>
          <h2 className="text-2xl font-bold text-cyber-text mb-4 flex items-center gap-3">
            <Bot className="w-6 h-6 text-cyber-accent" />
            Not a Replacement, But a Force Multiplier
          </h2>
          <div className="bg-cyber-surface border border-cyber-border rounded-lg p-8">
            <p className="text-cyber-muted leading-relaxed mb-4">
              ThreatModelingGPT is <strong className="text-cyber-text">not here to replace
              security engineers</strong>. Threat modeling requires deep context, business
              knowledge, and the intuition that comes from years of experience. What this
              tool does is:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex gap-3 text-cyber-muted">
                <span className="text-cyber-accent shrink-0">&gt;</span>
                <span><strong className="text-cyber-text">Speed up the initial phase</strong> —
                Get a structured starting point rather than staring at a blank page</span>
              </li>
              <li className="flex gap-3 text-cyber-muted">
                <span className="text-cyber-accent shrink-0">&gt;</span>
                <span><strong className="text-cyber-text">Catch blind spots</strong> —
                Surface attack vectors you may not have considered</span>
              </li>
              <li className="flex gap-3 text-cyber-muted">
                <span className="text-cyber-accent shrink-0">&gt;</span>
                <span><strong className="text-cyber-text">Apply multiple frameworks</strong> —
                Quickly compare STRIDE, PASTA, LINDDUN, or MAESTRO perspectives</span>
              </li>
              <li className="flex gap-3 text-cyber-muted">
                <span className="text-cyber-accent shrink-0">&gt;</span>
                <span><strong className="text-cyber-text">Educate and train</strong> —
                Help junior engineers learn threat modeling patterns</span>
              </li>
            </ul>
            <p className="text-cyber-muted leading-relaxed">
              Think of it as a smart assistant that helps you think through threat scenarios
              more systematically and efficiently.
            </p>
          </div>
        </div>

        {/* How to use it */}
        <div>
          <h2 className="text-2xl font-bold text-cyber-text mb-4 flex items-center gap-3">
            <Layers className="w-6 h-6 text-cyber-accent" />
            How to Use It
          </h2>
          <div className="bg-cyber-surface border border-cyber-border rounded-lg p-8 space-y-6">
            <p className="text-cyber-muted leading-relaxed">
              Simply describe your system or component, and ThreatModelingGPT will analyze
              it through the lens of established threat modeling frameworks. Here are some
              example prompts:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {exampleQuestions.map((q) => (
                <div
                  key={q}
                  className="flex items-start gap-3 p-3 rounded-lg bg-cyber-bg border border-cyber-border text-sm text-cyber-muted"
                >
                  <span className="text-cyber-accent shrink-0 mt-0.5">&gt;</span>
                  <span>&ldquo;{q}&rdquo;</span>
                </div>
              ))}
            </div>
            <p className="text-cyber-muted leading-relaxed">
              You can specify which methodology you want to use, or let ThreatModelingGPT
              recommend the most appropriate framework based on your system type.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-cyber-surface border border-cyber-accent/30 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-cyber-text mb-3">
            Try ThreatModelingGPT — Free & Public
          </h3>
          <p className="text-cyber-muted mb-6 max-w-lg mx-auto">
            Start identifying risks, analyzing attack surfaces, and building more secure
            systems with AI-powered threat intelligence. Available to everyone at no cost.
          </p>
          <a
            href="https://chatgpt.com/g/g-6943215f28dc8191a9097e570c462d45-threatmodelinggpt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-accent/10 border border-cyber-accent/30 rounded-lg text-cyber-accent hover:bg-cyber-accent/20 transition font-medium"
          >
            Open ThreatModelingGPT
            <ExternalLink className="w-4 h-4" />
          </a>
          <p className="text-xs text-cyber-muted mt-4">
            Built with Custom GPTs on the OpenAI website. Requires a ChatGPT account.
          </p>
        </div>
      </article>
    </div>
  );
}
