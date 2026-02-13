import { ArrowLeft, ExternalLink, MessageSquare, Bot, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "ViswanathSChirravuri_GPT — The Next Phase of Resume Exchange | AI AppSec Academy",
  description:
    "Introducing ViswanathSChirravuri_GPT, a Custom GPT built on OpenAI that knows everything about my professional profile, certifications, career, and expertise.",
};

const exampleQuestions = [
  "What certifications does Viswanath hold?",
  "Tell me about his experience at J.P. Morgan.",
  "What is his educational background?",
  "What topics does he speak about at RSA Conference?",
  "What is his expertise in AI/ML security?",
  "How many GIAC certifications does he have?",
  "What is the Secure-ML project?",
  "What courses does he teach as a SANS Associate Instructor?",
];

export default function ViswanathSChirravuriGPTPost() {
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
          &gt; cat ./blog/viswanathschirravuri-gpt.md
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-cyber-text mb-3">
          Introducing ViswanathSChirravuri_GPT: The Next Phase of Resume Exchange
        </h1>
        <p className="text-sm text-cyber-muted">February 6, 2026</p>
      </div>

      {/* Article body */}
      <article className="space-y-8">
        {/* Intro */}
        <div className="bg-cyber-surface border border-cyber-border rounded-lg p-8">
          <p className="text-cyber-muted leading-relaxed mb-4">
            The way professionals share their background is evolving. Paper
            resumes gave way to LinkedIn profiles, and now we are entering a new
            era &mdash; one where your professional identity can be explored
            through a conversational AI agent. That is exactly what{" "}
            <strong className="text-cyber-text">ViswanathSChirravuri_GPT</strong>{" "}
            is: a dedicated Custom GPT, built on OpenAI, that knows my
            professional profile inside and out.
          </p>
          <p className="text-cyber-muted leading-relaxed">
            Instead of scrolling through a static document or a LinkedIn page, anyone
            can now have an interactive conversation to learn about my career
            history, certifications, areas of expertise, publications, speaking
            engagements, and more &mdash; all in natural language.
          </p>
        </div>

        {/* What it is */}
        <div>
          <h2 className="text-2xl font-bold text-cyber-text mb-4 flex items-center gap-3">
            <Bot className="w-6 h-6 text-cyber-accent" />
            What Is ViswanathSChirravuri_GPT?
          </h2>
          <div className="bg-cyber-surface border border-cyber-border rounded-lg p-8">
            <p className="text-cyber-muted leading-relaxed mb-4">
              <strong className="text-cyber-text">ViswanathSChirravuri_GPT</strong>{" "}
              is a Custom GPT created using the{" "}
              <a
                href="https://openai.com/index/introducing-gpts/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-accent hover:underline"
              >
                Custom GPTs feature on the OpenAI website
              </a>
              . It is purpose-built to answer questions exclusively about me &mdash;
              Viswanath Srinivasan Chirravuri &mdash; and my professional profile.
            </p>
            <p className="text-cyber-muted leading-relaxed mb-4">
              It will <strong className="text-cyber-text">only respond to queries
              about my background</strong>, including my career experience,
              certifications, education, research interests, speaking engagements,
              open-source contributions, and areas of expertise. It does not answer
              general-purpose questions outside the scope of my profile.
            </p>
            <p className="text-cyber-muted leading-relaxed">
              Think of it as a conversational business card &mdash; always available,
              always accurate, and far more interactive than a PDF resume.
            </p>
          </div>
        </div>

        {/* Why this matters */}
        <div>
          <h2 className="text-2xl font-bold text-cyber-text mb-4 flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-cyber-accent" />
            The Future of People: AI-Powered Resume Exchange
          </h2>
          <div className="bg-cyber-surface border border-cyber-border rounded-lg p-8">
            <p className="text-cyber-muted leading-relaxed mb-4">
              We are entering a future where professionals will share AI agents
              instead of documents. Imagine walking into a networking event and
              instead of handing out a card, you share a link to your personal GPT.
              Recruiters, collaborators, and conference organizers can ask it anything
              about you &mdash; instantly, in natural language, at any hour.
            </p>
            <p className="text-cyber-muted leading-relaxed">
              This is the next phase of professional identity. Your resume is no
              longer a static artifact &mdash; it is a living, conversational agent
              that represents you.
            </p>
          </div>
        </div>

        {/* How to use it */}
        <div>
          <h2 className="text-2xl font-bold text-cyber-text mb-4 flex items-center gap-3">
            <MessageSquare className="w-6 h-6 text-cyber-accent" />
            How to Use It
          </h2>
          <div className="bg-cyber-surface border border-cyber-border rounded-lg p-8 space-y-6">
            <p className="text-cyber-muted leading-relaxed">
              Simply visit the GPT and start asking questions about me. Here are some
              example prompts to get you started:
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
              The GPT is scoped to my professional profile only. If you ask it
              something unrelated to me, it will let you know that it can only
              answer questions about Viswanath Srinivasan Chirravuri.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-cyber-surface border border-cyber-accent/30 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-cyber-text mb-3">
            Try ViswanathSChirravuri_GPT
          </h3>
          <p className="text-cyber-muted mb-6 max-w-lg mx-auto">
            Have a conversation with my professional profile. Ask anything about
            my career, certifications, expertise, or speaking engagements.
          </p>
          <a
            href="https://chatgpt.com/g/g-696faf9860bc81919e34414ed24a9c8a-viswanathschirravuri-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-accent/10 border border-cyber-accent/30 rounded-lg text-cyber-accent hover:bg-cyber-accent/20 transition font-medium"
          >
            Open ViswanathSChirravuri_GPT
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
