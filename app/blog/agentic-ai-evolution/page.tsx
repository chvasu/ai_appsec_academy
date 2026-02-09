import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "The Evolution of Agentic AI Development: From Monolithic to Distributed Systems | AI AppSec Academy",
  description:
    "A practical journey through 4 architectural stages of agentic AI systems—from single-agent monoliths to distributed A2A networks. Includes hands-on implementation with LangGraph, MCP, and open-source LLMs.",
  openGraph: {
    title: "The Evolution of Agentic AI Development",
    description:
      "Building secure, local-first multi-agent AI systems: A 4-stage architectural evolution",
  },
};

export default function AgenticAIEvolutionPost() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      {/* Back button */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-cyber-accent hover:text-cyber-accent-bright transition mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Blog</span>
      </Link>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-2 text-sm text-cyber-muted mb-4">
          <time dateTime="2026-02-09">February 9, 2026</time>
          <span>•</span>
          <span>Viswanath Chirravuri</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-cyber-text mb-6 leading-tight">
          The Evolution of Agentic AI Development: From Monolithic to Distributed Systems
        </h1>
        <p className="text-xl text-cyber-muted leading-relaxed">
          A practical journey through 4 architectural stages of building secure, local-first multi-agent AI systems—from single-agent monoliths to distributed A2A networks.
        </p>
      </header>

      {/* GitHub CTA */}
      <div className="bg-cyber-surface border border-cyber-accent/30 rounded-lg p-6 mb-12">
        <div className="flex items-start gap-4">
          <Github className="w-6 h-6 text-cyber-accent flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-cyber-text mb-2">
              Full Implementation Available
            </h3>
            <p className="text-sm text-cyber-muted mb-4">
              The complete source code, including all 4 architectural stages, automated security scanning, and deployment configurations, is open-source on GitHub.
            </p>
            <a
              href="https://github.com/vchirrav/my-first-agent"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-cyber-accent hover:text-cyber-accent-bright transition"
            >
              <span>View Repository</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="prose prose-invert prose-emerald max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyber-text mb-4">
            Why This Matters
          </h2>
          <p className="text-cyber-muted leading-relaxed mb-4">
            As AI systems evolve from simple chatbots to autonomous agents capable of executing complex workflows, understanding their architectural evolution becomes critical—especially for security practitioners. This project documents my hands-on exploration of agentic AI development, progressing through four distinct architectural patterns, each with unique security, scalability, and operational trade-offs.
          </p>
          <p className="text-cyber-muted leading-relaxed">
            Built entirely with <strong>open-source tools</strong> and <strong>local-first LLMs</strong> (no API keys, no cloud dependencies), this work demonstrates production-ready patterns for enterprises concerned about data sovereignty, model security, and supply chain risks.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyber-text mb-4">
            The Four Stages of Evolution
          </h2>
          <p className="text-cyber-muted leading-relaxed mb-6">
            The diagram below illustrates the architectural progression from a monolithic single agent to a fully distributed Agent-to-Agent (A2A) network:
          </p>

          <div className="bg-cyber-surface border border-cyber-border rounded-lg p-6 mb-8">
            <Image
              src="https://github.com/vchirrav/my-first-agent/raw/main/vis_architecture_evolution.png"
              alt="Project Evolution: From Single Agent to A2A Network"
              width={1200}
              height={400}
              className="w-full h-auto rounded"
            />
            <p className="text-xs text-cyber-muted text-center mt-4">
              Figure: Architectural evolution across 4 stages—Monolithic → MCP Separation → Supervisor-Worker → Distributed A2A Network
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-bold text-cyber-text mb-4">
            Stage 1: Single Agent (Monolithic)
          </h3>
          <p className="text-cyber-muted leading-relaxed mb-4">
            <strong>Architecture:</strong> A single agent process containing Memory (SQLite), Tools (Math and File Functions), and LLM (Ollama with llama3.1).
          </p>
          <p className="text-cyber-muted leading-relaxed mb-4">
            <strong>Use Case:</strong> Ideal for learning and prototyping. The agent handles all tasks—from natural language understanding to tool execution—within one unified process.
          </p>
          <div className="bg-cyber-bg border border-cyber-border rounded p-4 mb-4">
            <p className="text-sm text-cyber-muted mb-2">
              <strong className="text-cyber-accent">✓ Pros:</strong>
            </p>
            <ul className="text-sm text-cyber-muted space-y-1 list-disc list-inside">
              <li>Simple to develop and debug</li>
              <li>No network overhead or inter-process communication</li>
              <li>Direct access to all tools and memory</li>
            </ul>
          </div>
          <div className="bg-cyber-bg border border-cyber-border rounded p-4">
            <p className="text-sm text-cyber-muted mb-2">
              <strong className="text-red-400">✗ Cons:</strong>
            </p>
            <ul className="text-sm text-cyber-muted space-y-1 list-disc list-inside">
              <li>No separation of concerns—tools run with full agent privileges</li>
              <li>Difficult to scale horizontally</li>
              <li>Single point of failure</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-bold text-cyber-text mb-4">
            Stage 2: Single Agent + MCP Server
          </h3>
          <p className="text-cyber-muted leading-relaxed mb-4">
            <strong>Architecture:</strong> The agent now communicates with an external <strong>Model Context Protocol (MCP)</strong> server. Tools (Math and File) run in a separate process, isolated from the main agent.
          </p>
          <p className="text-cyber-muted leading-relaxed mb-4">
            <strong>Use Case:</strong> Introduces <em>process isolation</em> for security. The agent sends structured tool calls to the MCP server over a local protocol, preventing direct file system or math operation access.
          </p>
          <div className="bg-cyber-bg border border-cyber-border rounded p-4 mb-4">
            <p className="text-sm text-cyber-muted mb-2">
              <strong className="text-cyber-accent">✓ Pros:</strong>
            </p>
            <ul className="text-sm text-cyber-muted space-y-1 list-disc list-inside">
              <li>Security boundary: agent cannot directly execute tools</li>
              <li>Tools can be restarted independently of the agent</li>
              <li>Foundation for multi-agent architectures</li>
            </ul>
          </div>
          <div className="bg-cyber-bg border border-cyber-border rounded p-4">
            <p className="text-sm text-cyber-muted mb-2">
              <strong className="text-red-400">✗ Cons:</strong>
            </p>
            <ul className="text-sm text-cyber-muted space-y-1 list-disc list-inside">
              <li>Increased complexity with inter-process communication</li>
              <li>Still a single agent—no task specialization</li>
              <li>MCP server is a single point of failure for all tools</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-bold text-cyber-text mb-4">
            Stage 3: Supervisor-Worker (with MCP)
          </h3>
          <p className="text-cyber-muted leading-relaxed mb-4">
            <strong>Architecture:</strong> A <strong>Supervisor Agent</strong> orchestrates task routing to specialized <strong>Worker Agents</strong> (Worker 1, Worker 2). Each worker has its own Memory and LLM instance. A shared MCP server provides centralized tool access (File Tool, Math Tool).
          </p>
          <p className="text-cyber-muted leading-relaxed mb-4">
            <strong>Use Case:</strong> Classic <em>hub-and-spoke</em> pattern. The supervisor translates user intent into subtasks, delegates to workers, and aggregates results. Workers are role-restricted—only accessing tools they need.
          </p>
          <div className="bg-cyber-bg border border-cyber-border rounded p-4 mb-4">
            <p className="text-sm text-cyber-muted mb-2">
              <strong className="text-cyber-accent">✓ Pros:</strong>
            </p>
            <ul className="text-sm text-cyber-muted space-y-1 list-disc list-inside">
              <li>Task specialization: workers can be fine-tuned for specific domains</li>
              <li>Role-based access control: workers only access permitted tools</li>
              <li>Supervisor validation gates reject unsafe operations</li>
              <li>LangGraph manages complex state transitions across agents</li>
            </ul>
          </div>
          <div className="bg-cyber-bg border border-cyber-border rounded p-4">
            <p className="text-sm text-cyber-muted mb-2">
              <strong className="text-red-400">✗ Cons:</strong>
            </p>
            <ul className="text-sm text-cyber-muted space-y-1 list-disc list-inside">
              <li>Supervisor becomes a bottleneck for all requests</li>
              <li>Shared MCP server limits tool concurrency</li>
              <li>Supervisor prompt engineering is critical—poor routing degrades performance</li>
            </ul>
          </div>
          <p className="text-cyber-muted leading-relaxed mt-4">
            <strong>Implementation Detail:</strong> I used <strong>LangGraph</strong> for state machine management and <strong>SQLite</strong> for agent memory persistence, ensuring session continuity across restarts.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-bold text-cyber-text mb-4">
            Stage 4: A2A Network (Distributed)
          </h3>
          <p className="text-cyber-muted leading-relaxed mb-4">
            <strong>Architecture:</strong> Fully <strong>distributed microservices</strong> model. The <strong>Main Agent Service</strong> (Supervisor Client) communicates with independent agent servers over <strong>HTTP/A2A Protocol</strong>:
          </p>
          <ul className="text-sm text-cyber-muted space-y-2 list-disc list-inside mb-4 ml-4">
            <li><strong>File Agent Service (Port 8001)</strong>: Runs its own LLM, Memory, and File Tools</li>
            <li><strong>Math Agent (integrated in Main Service)</strong>: Handles calculations locally</li>
          </ul>
          <p className="text-cyber-muted leading-relaxed mb-4">
            <strong>Use Case:</strong> Production-scale agentic systems where agents are deployed as independent services, potentially across different machines or cloud environments.
          </p>
          <div className="bg-cyber-bg border border-cyber-border rounded p-4 mb-4">
            <p className="text-sm text-cyber-muted mb-2">
              <strong className="text-cyber-accent">✓ Pros:</strong>
            </p>
            <ul className="text-sm text-cyber-muted space-y-1 list-disc list-inside">
              <li>True horizontal scalability—deploy agents on separate machines</li>
              <li>No shared dependencies (no centralized MCP server)</li>
              <li>Agent-level fault isolation: one agent crash doesn't affect others</li>
              <li>Language-agnostic: agents can be written in Python, Go, Rust, etc.</li>
              <li>Smart request translation prevents LLM hallucination in agent commands</li>
            </ul>
          </div>
          <div className="bg-cyber-bg border border-cyber-border rounded p-4">
            <p className="text-sm text-cyber-muted mb-2">
              <strong className="text-red-400">✗ Cons:</strong>
            </p>
            <ul className="text-sm text-cyber-muted space-y-1 list-disc list-inside">
              <li>Network latency and reliability concerns</li>
              <li>Requires service discovery and load balancing in production</li>
              <li>More complex debugging (distributed tracing needed)</li>
              <li>Anti-loop logic required to prevent infinite command cycles</li>
            </ul>
          </div>
          <p className="text-cyber-muted leading-relaxed mt-4">
            <strong>Implementation Detail:</strong> I implemented <strong>loop-breaking logic</strong> to detect and prevent repeated commands, and strict <strong>JSON-RPC validation</strong> to ensure commands conform to agent API schemas.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyber-text mb-4">
            Security by Design: Automated SAST Integration
          </h2>
          <p className="text-cyber-muted leading-relaxed mb-4">
            A critical component of this project is the integration of <strong>automated security scanning</strong> directly into the development workflow. I built a <strong>Claude Code skill</strong> that runs <strong>900+ Semgrep SAST rules</strong> against the entire codebase, triages findings against actual source code, and generates HTML vulnerability reports with remediation guidance.
          </p>
          <div className="bg-cyber-surface border border-cyber-accent/30 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-cyber-text mb-3">
              Key Security Features
            </h4>
            <ul className="text-sm text-cyber-muted space-y-2 list-disc list-inside">
              <li><strong>Role-based separation:</strong> Workers cannot access tools outside their permissions</li>
              <li><strong>Supervisor validation gates:</strong> Reject unsafe operations before execution</li>
              <li><strong>Process isolation:</strong> MCP runs separately from main application (Stage 2+)</li>
              <li><strong>Smart request translation:</strong> Prevent LLM hallucination in agent commands (Stage 4)</li>
              <li><strong>Anti-loop mechanisms:</strong> Detect and block repeated commands (Stage 4)</li>
              <li><strong>Local-first LLMs:</strong> No data leaves your machine—zero external API calls</li>
              <li><strong>Automated SAST:</strong> Semgrep scans on every code change, triaged by AI</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyber-text mb-4">
            Technology Stack
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-cyber-surface border border-cyber-border rounded-lg p-4">
              <h4 className="text-sm font-semibold text-cyber-accent mb-2">
                Core Frameworks
              </h4>
              <ul className="text-sm text-cyber-muted space-y-1 list-disc list-inside">
                <li>LangGraph (state management)</li>
                <li>Ollama (local LLM inference)</li>
                <li>FastMCP (Model Context Protocol)</li>
                <li>A2A SDK (agent-to-agent protocol)</li>
              </ul>
            </div>
            <div className="bg-cyber-surface border border-cyber-border rounded-lg p-4">
              <h4 className="text-sm font-semibold text-cyber-accent mb-2">
                Infrastructure
              </h4>
              <ul className="text-sm text-cyber-muted space-y-1 list-disc list-inside">
                <li>Python 3.11+</li>
                <li>SQLite (agent memory)</li>
                <li>Streamlit (web UI)</li>
                <li>Uvicorn (ASGI server)</li>
              </ul>
            </div>
            <div className="bg-cyber-surface border border-cyber-border rounded-lg p-4">
              <h4 className="text-sm font-semibold text-cyber-accent mb-2">
                Security Tooling
              </h4>
              <ul className="text-sm text-cyber-muted space-y-1 list-disc list-inside">
                <li>Semgrep SAST (900+ rules)</li>
                <li>Claude Code integration</li>
                <li>HTML vulnerability reports</li>
              </ul>
            </div>
            <div className="bg-cyber-surface border border-cyber-border rounded-lg p-4">
              <h4 className="text-sm font-semibold text-cyber-accent mb-2">
                Model
              </h4>
              <ul className="text-sm text-cyber-muted space-y-1 list-disc list-inside">
                <li>llama3.1 (via Ollama)</li>
                <li>100% local inference</li>
                <li>No external API dependencies</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyber-text mb-4">
            When to Use Each Architecture
          </h2>
          <div className="space-y-4">
            <div className="bg-cyber-surface border border-cyber-border rounded-lg p-4">
              <h4 className="text-base font-semibold text-cyber-text mb-2">
                Stage 1 (Monolithic): Prototyping & Learning
              </h4>
              <p className="text-sm text-cyber-muted">
                Use for MVP development, proof-of-concepts, or educational projects where simplicity is paramount.
              </p>
            </div>
            <div className="bg-cyber-surface border border-cyber-border rounded-lg p-4">
              <h4 className="text-base font-semibold text-cyber-text mb-2">
                Stage 2 (MCP Separation): Security-First Development
              </h4>
              <p className="text-sm text-cyber-muted">
                Use when process isolation is required but you don't need multiple agents yet. Good for single-user tools with elevated security requirements.
              </p>
            </div>
            <div className="bg-cyber-surface border border-cyber-border rounded-lg p-4">
              <h4 className="text-base font-semibold text-cyber-text mb-2">
                Stage 3 (Supervisor-Worker): Enterprise Orchestration
              </h4>
              <p className="text-sm text-cyber-muted">
                Use when you need task specialization and role-based access control within a single deployment. Ideal for orchestrating complex workflows with centralized governance.
              </p>
            </div>
            <div className="bg-cyber-surface border border-cyber-border rounded-lg p-4">
              <h4 className="text-base font-semibold text-cyber-text mb-2">
                Stage 4 (A2A Network): Production-Scale Distributed Systems
              </h4>
              <p className="text-sm text-cyber-muted">
                Use when you need true horizontal scalability, fault isolation, and the ability to deploy agents as independent microservices. Best for multi-tenant SaaS platforms or large-scale automation systems.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyber-text mb-4">
            Key Learnings
          </h2>
          <ol className="space-y-4 text-cyber-muted">
            <li className="pl-6 relative">
              <span className="absolute left-0 top-0 text-cyber-accent font-bold">1.</span>
              <strong className="text-cyber-text">Security must be architectural, not additive.</strong> Process isolation (Stage 2) and role-based permissions (Stage 3) prevent entire classes of vulnerabilities that cannot be patched after deployment.
            </li>
            <li className="pl-6 relative">
              <span className="absolute left-0 top-0 text-cyber-accent font-bold">2.</span>
              <strong className="text-cyber-text">Supervisor prompt engineering is critical.</strong> In Stage 3, poor routing logic can cause task failures, infinite loops, or privilege escalation. Explicit schemas and validation are non-negotiable.
            </li>
            <li className="pl-6 relative">
              <span className="absolute left-0 top-0 text-cyber-accent font-bold">3.</span>
              <strong className="text-cyber-text">Local-first LLMs reduce risk.</strong> By using Ollama (llama3.1) instead of cloud APIs, I eliminated data exfiltration risks, API key management, and dependency on third-party uptime.
            </li>
            <li className="pl-6 relative">
              <span className="absolute left-0 top-0 text-cyber-accent font-bold">4.</span>
              <strong className="text-cyber-text">Distributed agents need anti-loop logic.</strong> Without cycle detection (Stage 4), agents can repeatedly call each other, burning tokens and degrading performance.
            </li>
            <li className="pl-6 relative">
              <span className="absolute left-0 top-0 text-cyber-accent font-bold">5.</span>
              <strong className="text-cyber-text">Automated security scanning is essential.</strong> Integrating Semgrep into the development loop (via Claude Code) caught vulnerabilities before they reached production.
            </li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyber-text mb-4">
            What's Next?
          </h2>
          <p className="text-cyber-muted leading-relaxed mb-4">
            This project lays the foundation for exploring:
          </p>
          <ul className="text-cyber-muted space-y-2 list-disc list-inside ml-4">
            <li><strong>Multi-modal agents:</strong> Incorporating vision (image analysis) and audio (transcription) tools</li>
            <li><strong>Distributed tracing:</strong> Implementing OpenTelemetry for observability across A2A networks</li>
            <li><strong>Agent authentication:</strong> Adding mutual TLS and JWT-based auth between agents</li>
            <li><strong>Dynamic agent discovery:</strong> Service mesh patterns for auto-scaling agent fleets</li>
            <li><strong>Red-teaming agentic systems:</strong> Prompt injection, tool-use exploits, and adversarial testing</li>
          </ul>
        </section>

        <section className="bg-cyber-surface border border-cyber-accent/30 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-cyber-text mb-4">
            Try It Yourself
          </h2>
          <p className="text-cyber-muted leading-relaxed mb-4">
            The full implementation is available on GitHub with detailed setup instructions, architectural documentation, and runnable examples for all 4 stages.
          </p>
          <a
            href="https://github.com/vchirrav/my-first-agent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-accent text-cyber-bg font-semibold rounded-lg hover:bg-cyber-accent-bright transition"
          >
            <Github className="w-5 h-5" />
            <span>View on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </section>
      </article>

      {/* Author bio */}
      <div className="border-t border-cyber-border pt-8 mt-12">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-cyber-text mb-2">
              About Viswanath Chirravuri
            </h3>
            <p className="text-sm text-cyber-muted mb-4">
              GSE #335, CISSP, and CompTIA SME specializing in AI/ML Security, Application Security, and DevSecOps. Currently pursuing D.Eng. in Cybersecurity Analytics at George Washington University (expected August 2026). RSA Conference 2024 & 2026 Speaker.
            </p>
            <Link
              href="/about"
              className="text-sm text-cyber-accent hover:text-cyber-accent-bright transition"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
