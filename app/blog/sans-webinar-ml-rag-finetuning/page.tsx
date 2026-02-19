import { ArrowLeft, ExternalLink, Video, Download, Shield, Brain, Layers, CheckCircle, Calendar, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "ML RAG, Fine-tuning and Security — SANS Institute Webinar | AI AppSec Consulting",
  description:
    "Recording and slides from my SANS Institute webinar on the architectural evolution from prompting to RAG to fine-tuning — including security risks at each layer and practical guidance for implementing secure fine-tuning.",
  openGraph: {
    title: "ML RAG, Fine-tuning and Security — SANS Institute Webinar",
    description:
      "A 1-hour technical webinar covering ML context-based prompting, RAG architectures, Agentic AI, fine-tuning, and the security risks at each layer. Presented at SANS Institute on February 18, 2026.",
  },
};

const learningObjectives = [
  {
    icon: Layers,
    title: "Architectural Evolution",
    description:
      "Understand the progression from basic context-based prompting through Retrieval-Augmented Generation to full model fine-tuning — and why each step exists.",
  },
  {
    icon: Shield,
    title: "Security Risks at Each Layer",
    description:
      "Recognize the distinct technical and security risks introduced at the prompting, RAG, and fine-tuning layers — from prompt injection to training data poisoning.",
  },
  {
    icon: Brain,
    title: "Secure Fine-Tuning in Practice",
    description:
      "Gain practical insights into implementing secure fine-tuning pipelines, including data integrity controls, model supply chain considerations, and deployment hardening.",
  },
];

const topicsCovered = [
  "Context-based prompting fundamentals and limitations",
  "Retrieval-Augmented Generation (RAG) architectures and patterns",
  "Naive RAG vs. Advanced RAG vs. Modular RAG",
  "Agentic AI and autonomous retrieval decisions",
  "RAG security threats: document poisoning, indirect prompt injection, data leakage",
  "Vector database attack surfaces and hardening strategies",
  "Fine-tuning approaches: full fine-tuning, PEFT, LoRA, QLoRA",
  "Training data integrity and supply chain risks for fine-tuned models",
  "Security controls for MLOps pipelines and model artifact management",
  "Threat modeling across the ML context stack",
];

const WEBCAST_URL = "https://www.sans.org/webcasts/ml-rag-fine-tuning-security";
const SLIDES_URL = "https://drive.google.com/file/d/1jpTxXdTpNyqZjmwZBUr8VjtALWbW5ZnA/view?usp=sharing";

export default function SANSWebinarMLRAGFinetuning() {
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
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-cyber-muted mb-4">
          <time dateTime="2026-02-18">February 18, 2026</time>
          <span>&bull;</span>
          <span>Viswanath Chirravuri</span>
          <span>&bull;</span>
          <span className="text-cyber-accent font-mono">SANS Institute Webinar</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-cyber-text mb-6 leading-tight">
          ML RAG, Fine-tuning and Security
        </h1>
        <p className="text-xl text-cyber-muted leading-relaxed">
          A 1-hour technical webinar exploring the evolution of machine learning
          context-based prompting, Retrieval-Augmented Generation (RAG), Agentic AI,
          and fine-tuning &mdash; along with the security risks at every layer.
          Presented live at SANS Institute on February 18, 2026.
        </p>
      </header>

      {/* Webinar Details Card */}
      <div className="bg-cyber-surface border border-cyber-accent/40 rounded-lg p-6 mb-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-cyber-accent flex-shrink-0" />
              <div>
                <p className="text-xs text-cyber-muted font-mono uppercase tracking-wider">Date</p>
                <p className="text-sm text-cyber-text font-semibold">February 18, 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-cyber-accent flex-shrink-0" />
              <div>
                <p className="text-xs text-cyber-muted font-mono uppercase tracking-wider">Time</p>
                <p className="text-sm text-cyber-text font-semibold">3:00 PM &ndash; 4:00 PM EST (1 hour)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Video className="w-5 h-5 text-cyber-accent flex-shrink-0" />
              <div>
                <p className="text-xs text-cyber-muted font-mono uppercase tracking-wider">Format</p>
                <p className="text-sm text-cyber-text font-semibold">Live Technical Presentation</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 justify-center">
            <a
              href={WEBCAST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-cyber-accent text-cyber-bg font-semibold rounded-lg hover:bg-cyber-accent-bright transition text-sm"
            >
              <Video className="w-4 h-4" />
              <span>Watch the Recording</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={SLIDES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-cyber-border text-cyber-text rounded-lg hover:border-cyber-accent/50 hover:text-cyber-accent transition text-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download Slides</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <p className="text-xs text-cyber-muted text-center">
              Free registration required via SANS portal
            </p>
          </div>
        </div>
      </div>

      <article className="prose prose-invert prose-emerald max-w-none">

        {/* Learning Objectives */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyber-text mb-6">
            Learning Objectives
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {learningObjectives.map((obj) => (
              <div
                key={obj.title}
                className="bg-cyber-surface border border-cyber-border rounded-lg p-5 hover:border-cyber-accent/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <obj.icon className="w-5 h-5 text-cyber-accent flex-shrink-0" />
                  <h3 className="text-base font-semibold text-cyber-text">
                    {obj.title}
                  </h3>
                </div>
                <p className="text-sm text-cyber-muted leading-relaxed">
                  {obj.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyber-text mb-4">
            Webinar Overview
          </h2>
          <p className="text-cyber-muted leading-relaxed mb-4">
            AI systems no longer rely on a single technique to answer questions or perform
            tasks. Modern production deployments chain together <strong className="text-cyber-text">context-based
            prompting</strong>, <strong className="text-cyber-text">Retrieval-Augmented Generation (RAG)</strong>,
            and <strong className="text-cyber-text">fine-tuning</strong> — each layer adding capability,
            and each layer introducing new attack surfaces.
          </p>
          <p className="text-cyber-muted leading-relaxed mb-4">
            This webinar takes a ground-up approach: starting with why naive prompting
            is insufficient, progressing through the RAG architectural spectrum (naive,
            advanced, modular, and agentic), and arriving at fine-tuning — where the model
            itself is modified. At each stage, we examine not just the technical mechanics
            but the <strong className="text-cyber-text">security threat model</strong> that
            security engineers and ML practitioners need to understand.
          </p>
          <p className="text-cyber-muted leading-relaxed">
            The session draws on real-world RAG architectures, threat modeling frameworks
            for ML systems, and practical hardening techniques applicable to enterprise
            deployments today.
          </p>
        </section>

        {/* Topics Covered */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyber-text mb-4">
            Topics Covered
          </h2>
          <div className="bg-cyber-surface border border-cyber-border rounded-lg p-6">
            <ul className="space-y-3">
              {topicsCovered.map((topic) => (
                <li key={topic} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-cyber-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-cyber-muted">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Architecture Evolution */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyber-text mb-4">
            The ML Context Stack
          </h2>
          <p className="text-cyber-muted leading-relaxed mb-6">
            The webinar frames the discussion around three architectural layers, each
            building on the previous:
          </p>
          <div className="space-y-4">
            <div className="bg-cyber-surface border border-cyber-border rounded-lg p-5">
              <div className="flex items-start gap-4">
                <div className="text-xl font-bold gradient-text shrink-0 w-8 mt-0.5">01</div>
                <div>
                  <h3 className="text-base font-semibold text-cyber-text mb-1">
                    Context-Based Prompting
                  </h3>
                  <p className="text-sm text-cyber-muted leading-relaxed">
                    The baseline: providing context directly in the prompt. Simple and
                    effective for contained scenarios, but constrained by context window
                    limits and vulnerable to direct prompt injection. No persistent
                    knowledge beyond what is manually included.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-cyber-surface border border-cyber-border rounded-lg p-5">
              <div className="flex items-start gap-4">
                <div className="text-xl font-bold gradient-text shrink-0 w-8 mt-0.5">02</div>
                <div>
                  <h3 className="text-base font-semibold text-cyber-text mb-1">
                    Retrieval-Augmented Generation (RAG)
                  </h3>
                  <p className="text-sm text-cyber-muted leading-relaxed">
                    Dynamic context injection at inference time via vector retrieval.
                    Scales to large corpora and keeps knowledge current without retraining.
                    Introduces new attack surfaces: document poisoning, indirect prompt
                    injection via retrieved content, vector database access control failures,
                    and data leakage across retrieval boundaries. Agentic RAG adds
                    autonomous retrieval decisions, amplifying both capability and risk.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-cyber-surface border border-cyber-border rounded-lg p-5">
              <div className="flex items-start gap-4">
                <div className="text-xl font-bold gradient-text shrink-0 w-8 mt-0.5">03</div>
                <div>
                  <h3 className="text-base font-semibold text-cyber-text mb-1">
                    Fine-Tuning
                  </h3>
                  <p className="text-sm text-cyber-muted leading-relaxed">
                    Adapting model weights on domain-specific data using techniques like
                    PEFT, LoRA, and QLoRA. Encodes knowledge directly into the model
                    rather than retrieving it at runtime. Security risks shift to the
                    training pipeline: data poisoning, model backdoors, supply chain
                    integrity of base models, and artifact provenance. Requires a
                    robust MLSecOps posture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RAG Security Focus */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyber-text mb-4">
            RAG Security: Key Threat Areas
          </h2>
          <p className="text-cyber-muted leading-relaxed mb-4">
            A significant portion of the webinar focuses on RAG security, examining
            threats across the full retrieval pipeline:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                threat: "Document Poisoning",
                description:
                  "Malicious content injected into the knowledge base to manipulate retrieved context and influence model outputs.",
              },
              {
                threat: "Indirect Prompt Injection",
                description:
                  "Attack instructions embedded in retrieved documents that hijack the model's behavior without direct user access.",
              },
              {
                threat: "Data Leakage Across Retrieval Boundaries",
                description:
                  "Unauthorized disclosure of sensitive documents when access controls are not enforced at the retrieval layer.",
              },
              {
                threat: "Vector Database Attacks",
                description:
                  "Exploiting embedding similarity thresholds, index poisoning, or misconfigured access policies in vector stores.",
              },
              {
                threat: "Training Data Poisoning",
                description:
                  "Corrupting fine-tuning datasets to embed backdoors or degrade model behavior on specific inputs.",
              },
              {
                threat: "Model Supply Chain Risks",
                description:
                  "Integrity failures in base model provenance, adapter weight tampering, and insecure model artifact registries.",
              },
            ].map((item) => (
              <div
                key={item.threat}
                className="bg-cyber-surface border border-cyber-border rounded-lg p-4 hover:border-cyber-accent/30 transition-colors"
              >
                <h4 className="text-sm font-semibold text-cyber-accent mb-2">
                  {item.threat}
                </h4>
                <p className="text-xs text-cyber-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Access the Webinar */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyber-text mb-4">
            Access the Recording &amp; Slides
          </h2>
          <p className="text-cyber-muted leading-relaxed mb-6">
            The full recording and slide deck are available on the SANS Institute
            webcasts portal. Free registration is required to access the content.
          </p>
          <div className="bg-cyber-surface border border-cyber-accent/30 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <Video className="w-6 h-6 text-cyber-accent flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-base font-semibold text-cyber-text mb-1">
                  SANS Institute Webcasts Portal
                </h3>
                <p className="text-sm text-cyber-muted mb-4">
                  The recording, slides (PDF download), and session transcript are
                  hosted on the SANS webcasts portal. Create a free SANS account
                  to access all webcast content.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WEBCAST_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-cyber-accent hover:text-cyber-accent-bright transition font-mono bg-cyber-bg border border-cyber-border rounded px-4 py-2"
                  >
                    <Video className="w-4 h-4" />
                    Watch Recording
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={SLIDES_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-cyber-accent hover:text-cyber-accent-bright transition font-mono bg-cyber-bg border border-cyber-border rounded px-4 py-2"
                  >
                    <Download className="w-4 h-4" />
                    Download Slides
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyber-text mb-4">
            Related Content
          </h2>
          <div className="space-y-3">
            <Link
              href="/blog/ml-rag-strategies"
              className="flex items-center gap-3 bg-cyber-surface border border-cyber-border rounded-lg p-4 hover:border-cyber-accent/30 transition-colors group"
            >
              <Brain className="w-5 h-5 text-cyber-accent flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-cyber-text group-hover:text-cyber-accent transition-colors">
                  15 RAG Strategies Every AI Engineer Should Know
                </p>
                <p className="text-xs text-cyber-muted mt-0.5">
                  Python implementations, architecture diagrams, and security considerations for all major RAG patterns
                </p>
              </div>
            </Link>
            <Link
              href="/blog/agentic-ai-evolution"
              className="flex items-center gap-3 bg-cyber-surface border border-cyber-border rounded-lg p-4 hover:border-cyber-accent/30 transition-colors group"
            >
              <Layers className="w-5 h-5 text-cyber-accent flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-cyber-text group-hover:text-cyber-accent transition-colors">
                  The Evolution of Agentic AI Development
                </p>
                <p className="text-xs text-cyber-muted mt-0.5">
                  From monolithic agents to distributed multi-agent systems with security safeguards
                </p>
              </div>
            </Link>
            <Link
              href="/services"
              className="flex items-center gap-3 bg-cyber-surface border border-cyber-border rounded-lg p-4 hover:border-cyber-accent/30 transition-colors group"
            >
              <Shield className="w-5 h-5 text-cyber-accent flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-cyber-text group-hover:text-cyber-accent transition-colors">
                  RAG Security &amp; Architecture Consulting
                </p>
                <p className="text-xs text-cyber-muted mt-0.5">
                  1-on-1 consulting on RAG pipeline hardening, vector database security, and secure fine-tuning
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cyber-surface border border-cyber-accent/30 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-bold text-cyber-text mb-3">
            Need Help Securing Your ML Pipeline?
          </h2>
          <p className="text-sm text-cyber-muted leading-relaxed mb-4">
            Whether you&apos;re hardening a RAG deployment, designing a secure fine-tuning
            pipeline, or building an ML threat model, I offer hands-on consulting
            sessions tailored to your architecture.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyber-accent text-cyber-bg font-semibold rounded-lg hover:bg-cyber-accent-bright transition text-sm"
            >
              Book a Consulting Session
            </Link>
            <a
              href={WEBCAST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-cyber-border text-cyber-text rounded-lg hover:border-cyber-accent/50 hover:text-cyber-accent transition text-sm"
            >
              Watch the Webinar
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>
      </article>

      {/* Author bio */}
      <div className="border-t border-cyber-border pt-8 mt-12">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-cyber-text mb-2">
            About Viswanath Chirravuri
          </h3>
          <p className="text-sm text-cyber-muted mb-4">
            GSE #335, CISSP, and CompTIA SME specializing in AI/ML Security, Application
            Security, and DevSecOps. SANS Associate Instructor (SEC545: GenAI and LLM
            Application Security) and Webinar Presenter. Currently pursuing D.Eng. in
            Cybersecurity Analytics at George Washington University (expected August 2026).
            RSA Conference 2024 &amp; 2026 Speaker.
          </p>
          <Link
            href="/about"
            className="text-sm text-cyber-accent hover:text-cyber-accent-bright transition"
          >
            Learn more &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
