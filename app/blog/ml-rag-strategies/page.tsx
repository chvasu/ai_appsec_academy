import { ArrowLeft, Github, ExternalLink, Database, Search, Brain, Shield, Layers, GitBranch, Workflow, Zap } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "15 RAG Strategies Every AI Engineer Should Know | AI AppSec Consulting",
  description:
    "A comprehensive guide to 15 Retrieval-Augmented Generation strategies with Python implementations, architecture diagrams, and security considerations. From Re-Ranking to Adaptive RAG.",
  openGraph: {
    title: "15 RAG Strategies Every AI Engineer Should Know",
    description:
      "A hands-on collection of 15 RAG approaches with Python implementations covering Re-Ranking, Agentic RAG, Knowledge Graphs, Self-RAG, CRAG, and more.",
  },
};

const strategies = [
  {
    number: "01",
    name: "Re-Ranking",
    useCase: "Customer Support",
    description:
      "Combines fast vector search with a cross-encoder scoring pass to surface the most relevant results from an initial candidate set. The retriever casts a wide net, then the re-ranker applies fine-grained relevance scoring to reorder results before they reach the LLM.",
    srcPath: "src/reranking/reranking_rag.py",
    diagramPath: "architecture/01_reranking.svg",
    icon: Search,
  },
  {
    number: "02",
    name: "Agentic RAG",
    useCase: "Research Assistant",
    description:
      "An LLM agent autonomously decides when and what to retrieve. Rather than always retrieving on every query, the agent reasons about whether retrieval is needed, formulates targeted queries, and can perform multi-step lookups with adaptive planning.",
    srcPath: "src/agentic_rag/agentic_rag.py",
    diagramPath: "architecture/02_agentic_rag.svg",
    icon: Brain,
  },
  {
    number: "03",
    name: "Knowledge Graph RAG",
    useCase: "Medical Q&A",
    description:
      "Structures documents as entity-relationship graphs and retrieves via graph traversal rather than vector similarity alone. Entities and their relationships are extracted during indexing, enabling multi-hop reasoning across connected concepts.",
    srcPath: "src/knowledge_graph_rag/knowledge_graph_rag.py",
    diagramPath: "architecture/03_knowledge_graph_rag.svg",
    icon: GitBranch,
  },
  {
    number: "04",
    name: "Contextual Retrieval",
    useCase: "Legal Document Search",
    description:
      "Prepends LLM-generated context summaries to each chunk before embedding. This preserves document-level meaning that would otherwise be lost during chunking, dramatically improving retrieval accuracy for context-dependent content.",
    srcPath: "src/contextual_retrieval/contextual_retrieval.py",
    diagramPath: "architecture/04_contextual_retrieval.svg",
    icon: Database,
  },
  {
    number: "05",
    name: "Query Expansion",
    useCase: "E-Commerce Search",
    description:
      "Rewrites the user query into multiple phrasings and retrieves for each variant, then deduplicates results. This bridges the vocabulary gap between how users ask questions and how information is stored in the knowledge base.",
    srcPath: "src/query_expansion/query_expansion.py",
    diagramPath: "architecture/05_query_expansion.svg",
    icon: Search,
  },
  {
    number: "06",
    name: "Multi-Query RAG",
    useCase: "Comparative Analysis",
    description:
      "Decomposes complex questions into independent sub-questions, retrieves context for each sub-question separately, and synthesizes a unified answer. Ideal for questions that span multiple topics or require comparison.",
    srcPath: "src/multi_query_rag/multi_query_rag.py",
    diagramPath: "architecture/06_multi_query_rag.svg",
    icon: Layers,
  },
  {
    number: "07",
    name: "Context-Aware Chunking",
    useCase: "Technical Manuals",
    description:
      "Splits documents along semantic boundaries (headings, paragraphs, sections) rather than fixed token counts. Preserves the logical structure of documents, ensuring each chunk contains a complete, coherent unit of information.",
    srcPath: "src/context_aware_chunking/context_aware_chunking.py",
    diagramPath: "architecture/07_context_aware_chunking.svg",
    icon: Database,
  },
  {
    number: "08",
    name: "Late Chunking",
    useCase: "Academic Papers",
    description:
      "Processes full documents through the embedding model first, then splits the resulting token embeddings into chunks. Each chunk retains awareness of the full document context since embeddings were computed holistically before splitting.",
    srcPath: "src/late_chunking/late_chunking.py",
    diagramPath: "architecture/08_late_chunking.svg",
    icon: Database,
  },
  {
    number: "09",
    name: "Hierarchical RAG",
    useCase: "Large Codebase Navigation",
    description:
      "Uses two-level indexing: first retrieve high-level summaries to identify relevant documents, then drill into detailed chunks within those documents. Enables efficient coarse-to-fine retrieval over very large corpora.",
    srcPath: "src/hierarchical_rag/hierarchical_rag.py",
    diagramPath: "architecture/09_hierarchical_rag.svg",
    icon: Layers,
  },
  {
    number: "10",
    name: "Fine-Tuned RAG",
    useCase: "Biomedical Literature",
    description:
      "Fine-tunes the embedding model or the generation model on domain-specific question-answer pairs. Adapts the retrieval and generation components to the vocabulary, concepts, and reasoning patterns of a specific domain.",
    srcPath: "src/fine_tuned_rag/fine_tuned_rag.py",
    diagramPath: "architecture/10_fine_tuned_rag.svg",
    icon: Zap,
  },
  {
    number: "11",
    name: "HyDE (Hypothetical Document Embeddings)",
    useCase: "Vague Query Resolution",
    description:
      "Generates a hypothetical answer to the query, then uses that answer as the retrieval query instead of the original question. By embedding a plausible answer rather than a short question, retrieval quality improves significantly for underspecified queries.",
    srcPath: "src/hyde_rag/hyde_rag.py",
    diagramPath: "architecture/11_hyde_rag.svg",
    icon: Brain,
  },
  {
    number: "12",
    name: "RAG-Fusion",
    useCase: "Multi-Rephrase Combination",
    description:
      "Generates multiple query variants, retrieves independently for each, and combines results using Reciprocal Rank Fusion (RRF). This reduces the impact of any single query formulation and produces more robust retrieval results.",
    srcPath: "src/fusion_rag/fusion_rag.py",
    diagramPath: "architecture/12_fusion_rag.svg",
    icon: Workflow,
  },
  {
    number: "13",
    name: "Self-RAG",
    useCase: "Adaptive Chatbot",
    description:
      "The model self-reflects at each generation step, deciding whether retrieval is needed, evaluating the relevance of retrieved documents, and verifying that its response is properly grounded. Introduces learned reflection tokens for autonomous quality control.",
    srcPath: "src/self_rag/self_rag.py",
    diagramPath: "architecture/13_self_rag.svg",
    icon: Brain,
  },
  {
    number: "14",
    name: "Corrective RAG (CRAG)",
    useCase: "Internal Wiki with Web Fallback",
    description:
      "Grades retrieved documents for relevance and falls back to web search if the internal knowledge base returns insufficient results. Includes a knowledge refinement step that strips irrelevant content from retrieved passages before generation.",
    srcPath: "src/corrective_rag/corrective_rag.py",
    diagramPath: "architecture/14_corrective_rag.svg",
    icon: Shield,
  },
  {
    number: "15",
    name: "Adaptive RAG",
    useCase: "Help Desk Query Routing",
    description:
      "Classifies incoming query complexity and routes to the appropriate retrieval strategy: simple queries use direct retrieval, moderate queries use query expansion, and complex queries are decomposed into sub-questions. Optimizes cost and latency by matching strategy to need.",
    srcPath: "src/adaptive_rag/adaptive_rag.py",
    diagramPath: "architecture/15_adaptive_rag.svg",
    icon: Workflow,
  },
];

const REPO_BASE = "https://github.com/vchirrav/ml-rag-strategies";

export default function MLRAGStrategiesPost() {
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
          <time dateTime="2026-02-12">February 12, 2026</time>
          <span>&bull;</span>
          <span>Viswanath Chirravuri</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-cyber-text mb-6 leading-tight">
          15 RAG Strategies Every AI Engineer Should Know
        </h1>
        <p className="text-xl text-cyber-muted leading-relaxed">
          A hands-on collection of 15 Retrieval-Augmented Generation approaches
          with Python implementations, architecture diagrams, and security
          considerations &mdash; from basic Re-Ranking to Adaptive RAG.
        </p>
      </header>

      {/* RAG Strategies Cheatsheet */}
      <div className="mb-12">
        <img
          src="/images/rag-strategies.png"
          alt="15 RAG Strategies cheatsheet: Re-Ranking, Agentic RAG, Knowledge Graph RAG, Contextual Retrieval, Query Expansion, Multi-Query RAG, Context-Aware Chunking, Late Chunking, Hierarchical RAG, Fine-Tuned RAG, HyDE, RAG-Fusion, Self-RAG, Corrective RAG (CRAG), and Adaptive RAG"
          className="w-full rounded-lg border border-cyber-border/50"
        />
      </div>

      {/* GitHub CTA */}
      <div className="bg-cyber-surface border border-cyber-accent/30 rounded-lg p-6 mb-12">
        <div className="flex items-start gap-4">
          <Github className="w-6 h-6 text-cyber-accent flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-cyber-text mb-2">
              Full Source Code Available
            </h3>
            <p className="text-sm text-cyber-muted mb-4">
              All 15 strategies include runnable Python implementations,
              architecture diagrams (SVG), and a shared requirements file.
              Clone the repo and start experimenting.
            </p>
            <a
              href={REPO_BASE}
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
        {/* Why RAG */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyber-text mb-4">
            Why RAG Matters
          </h2>
          <p className="text-cyber-muted leading-relaxed mb-4">
            Large Language Models are powerful, but they hallucinate, go stale, and
            lack access to private data. <strong>Retrieval-Augmented Generation
            (RAG)</strong> solves this by grounding LLM responses in retrieved
            evidence &mdash; pulling relevant documents from a knowledge base before
            generating an answer.
          </p>
          <p className="text-cyber-muted leading-relaxed mb-4">
            But not all RAG is created equal. Naive &ldquo;retrieve-and-generate&rdquo;
            pipelines break down when queries are ambiguous, documents are long,
            or the knowledge base is noisy. This repository explores{" "}
            <strong>15 distinct RAG strategies</strong>, each addressing a specific
            weakness in the basic pattern.
          </p>
          <p className="text-cyber-muted leading-relaxed">
            Every strategy includes a <strong>Python implementation</strong> under{" "}
            <a
              href={`${REPO_BASE}/tree/main/src`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-accent hover:underline"
            >
              src/
            </a>{" "}
            and an <strong>architecture diagram</strong> under{" "}
            <a
              href={`${REPO_BASE}/tree/main/architecture`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-accent hover:underline"
            >
              architecture/
            </a>
            .
          </p>
        </section>

        {/* Quick Setup */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyber-text mb-4">
            Quick Start
          </h2>
          <div className="bg-cyber-bg border border-cyber-border rounded-lg p-6">
            <pre className="text-sm text-cyber-muted font-mono whitespace-pre-wrap">
{`git clone ${REPO_BASE}.git
cd ml-rag-strategies
pip install -r requirements.txt
export OPENAI_API_KEY="your-api-key-here"   # Never hardcode API keys`}
            </pre>
          </div>
          <p className="text-sm text-cyber-muted mt-3">
            See{" "}
            <a
              href={`${REPO_BASE}/blob/main/requirements.txt`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-accent hover:underline"
            >
              requirements.txt
            </a>{" "}
            for the full dependency list. All samples read credentials from
            environment variables &mdash; never hardcode secrets.
          </p>
        </section>

        {/* Strategy Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyber-text mb-6">
            The 15 Strategies
          </h2>

          <div className="space-y-8">
            {strategies.map((s) => (
              <div
                key={s.number}
                id={s.name.toLowerCase().replace(/[\s()]/g, "-")}
                className="bg-cyber-surface border border-cyber-border rounded-lg p-6 hover:border-cyber-accent/30 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-2xl font-bold gradient-text shrink-0 w-10">
                    {s.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <s.icon className="w-5 h-5 text-cyber-accent" />
                      <h3 className="text-xl font-bold text-cyber-text">
                        {s.name}
                      </h3>
                    </div>
                    <p className="text-xs text-cyber-accent font-mono">
                      Use case: {s.useCase}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-cyber-muted leading-relaxed mb-4">
                  {s.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={`${REPO_BASE}/blob/main/${s.srcPath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-cyber-accent hover:text-cyber-accent-bright transition font-mono bg-cyber-bg border border-cyber-border rounded px-3 py-1.5"
                  >
                    <Github className="w-3.5 h-3.5" />
                    {s.srcPath}
                  </a>
                  <a
                    href={`${REPO_BASE}/blob/main/${s.diagramPath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-cyber-accent hover:text-cyber-accent-bright transition font-mono bg-cyber-bg border border-cyber-border rounded px-3 py-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {s.diagramPath}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Strategy Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyber-text mb-4">
            When to Use Which Strategy
          </h2>
          <div className="space-y-4">
            <div className="bg-cyber-surface border border-cyber-border rounded-lg p-5">
              <h4 className="text-base font-semibold text-cyber-text mb-2">
                Improving Retrieval Quality
              </h4>
              <p className="text-sm text-cyber-muted">
                <strong className="text-cyber-accent">Re-Ranking</strong> (post-retrieval scoring),{" "}
                <strong className="text-cyber-accent">Contextual Retrieval</strong> (chunk-level context),{" "}
                <strong className="text-cyber-accent">Late Chunking</strong> (holistic embeddings),{" "}
                <strong className="text-cyber-accent">Fine-Tuned RAG</strong> (domain adaptation)
              </p>
            </div>
            <div className="bg-cyber-surface border border-cyber-border rounded-lg p-5">
              <h4 className="text-base font-semibold text-cyber-text mb-2">
                Handling Complex Queries
              </h4>
              <p className="text-sm text-cyber-muted">
                <strong className="text-cyber-accent">Query Expansion</strong> (vocabulary gap),{" "}
                <strong className="text-cyber-accent">Multi-Query RAG</strong> (decomposition),{" "}
                <strong className="text-cyber-accent">HyDE</strong> (vague queries),{" "}
                <strong className="text-cyber-accent">RAG-Fusion</strong> (multi-rephrase RRF)
              </p>
            </div>
            <div className="bg-cyber-surface border border-cyber-border rounded-lg p-5">
              <h4 className="text-base font-semibold text-cyber-text mb-2">
                Scaling to Large Corpora
              </h4>
              <p className="text-sm text-cyber-muted">
                <strong className="text-cyber-accent">Hierarchical RAG</strong> (two-level indexing),{" "}
                <strong className="text-cyber-accent">Context-Aware Chunking</strong> (semantic splitting),{" "}
                <strong className="text-cyber-accent">Knowledge Graph RAG</strong> (entity-relationship traversal)
              </p>
            </div>
            <div className="bg-cyber-surface border border-cyber-border rounded-lg p-5">
              <h4 className="text-base font-semibold text-cyber-text mb-2">
                Self-Correcting &amp; Adaptive Systems
              </h4>
              <p className="text-sm text-cyber-muted">
                <strong className="text-cyber-accent">Self-RAG</strong> (reflection tokens),{" "}
                <strong className="text-cyber-accent">Corrective RAG</strong> (web fallback),{" "}
                <strong className="text-cyber-accent">Adaptive RAG</strong> (complexity-based routing),{" "}
                <strong className="text-cyber-accent">Agentic RAG</strong> (autonomous retrieval decisions)
              </p>
            </div>
          </div>
        </section>

        {/* Security Considerations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyber-text mb-4">
            Security Considerations for RAG Systems
          </h2>
          <p className="text-cyber-muted leading-relaxed mb-4">
            RAG pipelines introduce unique attack surfaces that traditional applications
            don&apos;t have. Every strategy in this repository follows defensive practices:
          </p>
          <div className="bg-cyber-surface border border-cyber-accent/30 rounded-lg p-6">
            <ul className="text-sm text-cyber-muted space-y-3 list-disc list-inside">
              <li>
                <strong className="text-cyber-text">No hardcoded secrets</strong> &mdash;
                All API keys are read from environment variables, never committed to source control
              </li>
              <li>
                <strong className="text-cyber-text">Context grounding</strong> &mdash;
                Responses are grounded in retrieved content to prevent hallucination and reduce prompt injection risk
              </li>
              <li>
                <strong className="text-cyber-text">No arbitrary code execution</strong> &mdash;
                None of the strategies execute dynamically generated code, eliminating code injection vectors
              </li>
              <li>
                <strong className="text-cyber-text">Minimal dependencies</strong> &mdash;
                Only well-maintained, widely-used libraries are included to reduce supply chain risk
              </li>
              <li>
                <strong className="text-cyber-text">Input validation</strong> &mdash;
                Review retrieved content before passing to the LLM to prevent indirect prompt injection attacks
              </li>
            </ul>
          </div>
        </section>

        {/* Repository Structure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyber-text mb-4">
            Repository Structure
          </h2>
          <div className="bg-cyber-bg border border-cyber-border rounded-lg p-6">
            <pre className="text-sm text-cyber-muted font-mono whitespace-pre-wrap leading-relaxed">
{`ml-rag-strategies/
├── README.md
├── RAG_LIBRARIES.md           # Companion guide to RAG libraries
├── requirements.txt           # Shared Python dependencies
├── architecture/              # SVG architecture diagrams
│   ├── 01_reranking.svg
│   ├── 02_agentic_rag.svg
│   ├── ...
│   └── 15_adaptive_rag.svg
└── src/                       # Python implementations
    ├── reranking/             # Strategy 01
    ├── agentic_rag/           # Strategy 02
    ├── knowledge_graph_rag/   # Strategy 03
    ├── contextual_retrieval/  # Strategy 04
    ├── query_expansion/       # Strategy 05
    ├── multi_query_rag/       # Strategy 06
    ├── context_aware_chunking/# Strategy 07
    ├── late_chunking/         # Strategy 08
    ├── hierarchical_rag/      # Strategy 09
    ├── fine_tuned_rag/        # Strategy 10
    ├── hyde_rag/              # Strategy 11
    ├── fusion_rag/            # Strategy 12
    ├── self_rag/              # Strategy 13
    ├── corrective_rag/        # Strategy 14
    └── adaptive_rag/          # Strategy 15`}
            </pre>
          </div>
          <p className="text-sm text-cyber-muted mt-3">
            Also see{" "}
            <a
              href={`${REPO_BASE}/blob/main/RAG_LIBRARIES.md`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-accent hover:underline"
            >
              RAG_LIBRARIES.md
            </a>{" "}
            for a companion guide to the libraries and frameworks used across strategies.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-cyber-surface border border-cyber-accent/30 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-cyber-text mb-4">
            Explore the Code
          </h2>
          <p className="text-cyber-muted leading-relaxed mb-4">
            All 15 strategies are open-source with runnable implementations and
            architecture diagrams. Clone the repository, install dependencies,
            and start experimenting with RAG patterns.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={REPO_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-accent text-cyber-bg font-semibold rounded-lg hover:bg-cyber-accent-bright transition"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="/services#ai-security"
              className="inline-flex items-center gap-2 px-6 py-3 border border-cyber-border text-cyber-text rounded-lg hover:border-cyber-accent/50 hover:text-cyber-accent transition"
            >
              Need help implementing RAG securely? Book a session
            </a>
          </div>
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
              GSE #335, CISSP, and CompTIA SME specializing in AI/ML Security,
              Application Security, and DevSecOps. Currently pursuing D.Eng. in
              Cybersecurity Analytics at George Washington University (expected
              August 2026). RSA Conference 2024 &amp; 2026 Speaker.
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
    </div>
  );
}
