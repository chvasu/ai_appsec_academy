import {
  Users,
  UserCheck,
  Clock,
  Target,
  MessageCircle,
  Zap,
  CheckCircle2,
  XCircle,
  DollarSign,
} from "lucide-react";

export const metadata = {
  title: "Why Us? | AI AppSec Consulting",
  description:
    "Discover the AI AppSec Consulting difference: direct one-on-one consulting with an industry expert that delivers actionable results, not generic recommendations.",
};

const advantages = [
  {
    icon: UserCheck,
    title: "Direct One-on-One Consulting",
    description:
      "You work directly with an industry expert — not a junior associate or automated tool. Every session is personalized to your specific environment and challenges.",
    highlight: "Your consultant, your challenges, your solutions",
  },
  {
    icon: Clock,
    title: "Dedicated Expert Presence",
    description:
      "Your consultant is fully engaged for the entire session duration. No context-switching, no divided attention — real-time guidance from start to finish.",
    highlight: "Full attention, not time-sliced support",
  },
  {
    icon: MessageCircle,
    title: "Every Question Gets Answered",
    description:
      "Unlike large consulting firms where your questions get lost in process, every technical question, architectural concern, or implementation blocker is addressed immediately.",
    highlight: "Zero unanswered questions",
  },
  {
    icon: Target,
    title: "Hands-On Implementation",
    description:
      "We don't just deliver a PDF of recommendations. We work through your specific environment, configure tools, review code, and implement solutions together.",
    highlight: "Implementation, not just recommendations",
  },
  {
    icon: Zap,
    title: "Immediately Actionable Results",
    description:
      "Every engagement is designed for immediate impact. You leave with working configurations, actionable roadmaps, and implemented solutions — not theoretical advice.",
    highlight: "Ready to deploy on day one",
  },
  {
    icon: CheckCircle2,
    title: "Adaptive to Your Context",
    description:
      "Consulting adapts to your tech stack, team maturity, and business context. Whether you're a startup or an enterprise, guidance is tailored to what works for you.",
    highlight: "Personalized to your environment",
  },
  {
    icon: DollarSign,
    title: "Expert Quality, Transparent Pricing",
    description:
      "Top-tier consulting from an industry expert (GSE #335, CompTIA SME, D.Eng. candidate) with straightforward hourly pricing. No hidden fees, no minimum retainers.",
    highlight: "Premium expertise, transparent costs",
  },
];

const comparison = [
  {
    aspect: "Engagement Model",
    industry: "Large teams, junior associates do the work",
    us: "Direct one-on-one sessions with the expert",
  },
  {
    aspect: "Deliverables",
    industry: "Generic PDF reports with boilerplate recommendations",
    us: "Hands-on implementation and actionable roadmaps",
  },
  {
    aspect: "Responsiveness",
    industry: "Slow turnaround, bureaucratic processes",
    us: "Real-time guidance, 24-hour scheduling after booking",
  },
  {
    aspect: "Technical Depth",
    industry: "High-level advice, limited hands-on support",
    us: "Deep technical consulting — tool setup, code review, pipeline design",
  },
  {
    aspect: "Flexibility",
    industry: "Fixed scope, long-term contracts required",
    us: "Hourly booking — scale up or down as needed",
  },
  {
    aspect: "Pricing",
    industry: "Opaque pricing, minimum retainers, change orders",
    us: "Transparent per-hour pricing, no hidden costs",
  },
];

export default function WhyUsPage() {
  return (
    <div className="min-h-screen">
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <p className="text-sm text-cyber-accent font-mono mb-2">
            &gt; cat ./why-us.md
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-cyber-text mb-4">
            Why Choose AI AppSec Consulting?
          </h1>
          <p className="text-lg text-cyber-muted max-w-3xl mx-auto leading-relaxed">
            Most consulting firms send junior associates and deliver generic reports.
            We provide direct access to an industry expert who works hands-on in your
            environment to solve your specific challenges.
          </p>
        </div>

        {/* Key Differentiator */}
        <div className="bg-cyber-surface border border-emerald-500/30 rounded-lg p-8 mb-16 cyber-glow">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-cyber-bg border border-emerald-500/30 text-emerald-400 shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-cyber-text mb-3">
                Direct Expert Consulting, Not Outsourced Work
              </h2>
              <p className="text-cyber-muted leading-relaxed mb-4">
                When you book a session, you work directly with{" "}
                <span className="text-emerald-400 font-semibold">Viswanath Chirravuri</span>{" "}
                — GSE #335, CompTIA SME, RSA Conference speaker, and D.Eng. candidate.
                No junior associates, no subcontractors, no bait-and-switch.
              </p>
              <p className="text-cyber-muted leading-relaxed">
                Every hour you book is spent on hands-on problem-solving tailored to
                your environment, tech stack, and business goals.
              </p>
            </div>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyber-text mb-8 text-center">
            The AI AppSec Consulting Difference
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage) => (
              <div
                key={advantage.title}
                className="bg-cyber-surface border border-cyber-border rounded-lg p-6 hover:border-emerald-500/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="p-2.5 rounded-lg bg-cyber-bg border border-cyber-border text-emerald-400 shrink-0">
                    <advantage.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-cyber-text mb-1">
                      {advantage.title}
                    </h3>
                    <p className="text-xs text-emerald-400 font-mono">
                      {advantage.highlight}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-cyber-muted leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyber-text mb-8 text-center">
            Traditional Consulting vs. AI AppSec Consulting
          </h2>
          <div className="bg-cyber-surface border border-cyber-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-cyber-border">
                    <th className="text-left p-4 text-cyber-text font-bold">
                      Aspect
                    </th>
                    <th className="text-left p-4 text-cyber-muted font-bold">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-400" />
                        Traditional Firms
                      </div>
                    </th>
                    <th className="text-left p-4 text-emerald-400 font-bold">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        AI AppSec Consulting
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, idx) => (
                    <tr
                      key={row.aspect}
                      className={`border-b border-cyber-border/50 ${
                        idx % 2 === 0 ? "bg-cyber-bg/30" : ""
                      }`}
                    >
                      <td className="p-4 text-cyber-text font-semibold">
                        {row.aspect}
                      </td>
                      <td className="p-4 text-cyber-muted text-sm">
                        {row.industry}
                      </td>
                      <td className="p-4 text-emerald-400 text-sm font-medium">
                        {row.us}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Enterprise Note */}
        <div className="bg-amber-500/5 border border-amber-500/30 rounded-lg p-6 mb-16">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-amber-400 mb-2">
                Enterprise Engagements: Custom Scope &amp; Pricing
              </h3>
              <p className="text-sm text-cyber-muted leading-relaxed">
                Enterprise engagements are tailored for organizations and include
                custom scope aligned to your tech stack, threat model, and maturity
                goals. Contact us for multi-day engagement options.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-cyber-text mb-4">
            Ready for Expert Consulting?
          </h2>
          <p className="text-cyber-muted mb-6">
            Browse our consulting services and book a session tailored to your needs.
          </p>
          <a
            href="/services"
            className="inline-block px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-cyber-bg font-semibold rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            <span className="font-mono">$</span> View Services
          </a>
        </div>
      </section>
    </div>
  );
}
