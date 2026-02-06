import {
  Shield,
  Award,
  Zap,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  Lock,
  Brain,
} from "lucide-react";
import { getCourses } from "@/lib/db";
import { CourseCard } from "@/components/CourseCard";

export default async function Home() {
  const courses = await getCourses();

  return (
    <>
      {/* ──────────────── HERO ──────────────── */}
      <section className="relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 pt-24 pb-20">
          {/* RSA Badge */}
          <div className="flex justify-center mb-8">
            <a
              href="https://path.rsaconference.com/flow/rsac/us26/FullAgenda/page/catalog/session/1753456619857001mrPA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-surface border border-cyber-accent/30 text-sm text-cyber-accent hover:bg-cyber-accent/10 transition group"
            >
              <Zap className="w-4 h-4" />
              <span>Speaking at RSA Conference 2026</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
            <span className="block text-cyber-text">Secure the Future of</span>
            <span className="block gradient-text">Agentic AI</span>
          </h1>

          <p className="text-center text-lg md:text-xl text-cyber-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Elite training in AI/ML Security, LLM AppSec, and Agentic AI
            defense. Led by{" "}
            <span className="text-cyber-text font-medium">
              Viswanath Chirravuri
            </span>
            , SANS instructor, GSE&nbsp;#335 &amp; Doctor of Engineering
            in Cybersecurity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#courses"
              className="px-8 py-3.5 bg-cyber-accent text-cyber-bg font-semibold rounded-lg hover:bg-cyber-accent-bright hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all text-sm"
            >
              <span className="font-mono">$</span> View Training Programs
            </a>
            <a
              href="https://www.linkedin.com/in/vchirrav/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-cyber-border text-cyber-text rounded-lg hover:border-cyber-accent/50 hover:text-cyber-accent transition-all text-sm flex items-center gap-2"
            >
              Connect on LinkedIn
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Credentials bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-cyber-muted">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-cyber-accent" />
              <span>SANS Instructor</span>
            </div>
            <span className="hidden sm:inline text-cyber-border">|</span>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyber-accent" />
              <span>GSE #335</span>
            </div>
            <span className="hidden sm:inline text-cyber-border">|</span>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyber-accent" />
              <span>D.Eng. Cybersecurity</span>
            </div>
            <span className="hidden sm:inline text-cyber-border">|</span>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyber-accent" />
              <span>RSA 2026 Speaker</span>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── EXPERTISE ──────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <p className="text-sm text-cyber-accent font-mono mb-2">
            &gt; cat expertise.md
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-cyber-text">
            Domains of Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Brain,
              title: "Agentic AI Security",
              desc: "Securing autonomous AI agents against prompt injection, tool-use exploitation, and adversarial manipulation in production pipelines.",
            },
            {
              icon: Lock,
              title: "LLM Application Security",
              desc: "OWASP Top 10 for LLMs, secure RAG architectures, model red-teaming, and governance frameworks for enterprise AI deployments.",
            },
            {
              icon: Shield,
              title: "ML Pipeline Defense",
              desc: "End-to-end Secure-ML framework covering data poisoning, model supply chain attacks, and inference-time defenses.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-lg bg-cyber-surface border border-cyber-border hover:border-cyber-accent/30 transition-colors group"
            >
              <item.icon className="w-8 h-8 text-cyber-accent mb-4 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.4)] transition" />
              <h3 className="text-lg font-bold text-cyber-text mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-cyber-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ──────────────── COURSES ──────────────── */}
      <section id="courses" className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <p className="text-sm text-cyber-accent font-mono mb-2">
            &gt; ls ./training-programs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-cyber-text mb-4">
            Training Programs
          </h2>
          <p className="text-cyber-muted max-w-xl mx-auto">
            From executive coaching to hands-on technical workshops and
            enterprise bootcamps. Choose the format that fits your mission.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* ──────────────── SOCIAL PROOF ──────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="bg-cyber-surface rounded-lg border border-cyber-border p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "20+", label: "Years in Cybersecurity" },
              { value: "35+", label: "Industry Certifications" },
              { value: "RSA", label: "2026 Speaker" },
              { value: "SANS", label: "Instructor & GSE" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-cyber-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── CTA ──────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="relative rounded-lg border border-cyber-accent/30 bg-gradient-to-br from-cyber-surface to-emerald-500/5 p-8 md:p-14 text-center overflow-hidden">
          <div className="absolute inset-0 bg-emerald-500/5 rounded-lg blur-2xl" />
          <div className="relative">
            <p className="text-sm text-cyber-accent font-mono mb-4">
              &gt; ./start_training --mode=elite
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-cyber-text mb-4">
              Ready to Level Up?
            </h2>
            <p className="text-cyber-muted max-w-lg mx-auto mb-8">
              Whether you&apos;re an individual contributor, a security leader,
              or an enterprise team — there&apos;s a program designed for your
              threat model.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#courses"
                className="px-8 py-3.5 bg-cyber-accent text-cyber-bg font-semibold rounded-lg hover:bg-cyber-accent-bright transition text-sm"
              >
                Browse Programs
              </a>
              <a
                href="https://www.linkedin.com/in/vchirrav/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 border border-cyber-border text-cyber-text rounded-lg hover:border-cyber-accent/50 transition text-sm"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
