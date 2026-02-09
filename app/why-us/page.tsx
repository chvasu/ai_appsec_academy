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
  title: "Why Us? | AI AppSec Academy",
  description:
    "Discover the AI AppSec Academy difference: personalized one-on-one training that ensures successful knowledge transfer, unlike traditional group-based programs.",
};

const advantages = [
  {
    icon: UserCheck,
    title: "Direct One-on-One Training",
    description:
      "For Starter and Professional tiers, you get dedicated, personalized instruction — not a group webinar where your questions get lost in the chat.",
    highlight: "Individual focus, not crowd management",
  },
  {
    icon: Clock,
    title: "Full-Time Instructor Presence",
    description:
      "Your instructor sits with you for the entire course duration. No pre-recorded videos, no asynchronous forums — real-time guidance from start to finish.",
    highlight: "Live, hands-on support throughout",
  },
  {
    icon: MessageCircle,
    title: "Every Question Gets Answered",
    description:
      "In group trainings, your questions compete for attention and often go unanswered. Here, every concept, lab error, or technical roadblock is addressed immediately.",
    highlight: "Zero unanswered questions",
  },
  {
    icon: Target,
    title: "Walk-Through of Contents & Labs",
    description:
      "We don't just present slides. We walk through every concept, work through labs together, debug errors as they happen, and ensure you understand the 'why' behind the 'what.'",
    highlight: "Deep understanding, not surface learning",
  },
  {
    icon: Zap,
    title: "Directly Implementable Skills",
    description:
      "Every topic is designed for immediate application in real-world projects. You leave with actionable skills, not theoretical knowledge that sits unused.",
    highlight: "Ready to deploy on day one",
  },
  {
    icon: CheckCircle2,
    title: "Adaptive to Your Knowledge Gaps",
    description:
      "If you're unfamiliar with a foundational concept, we explain it on the spot. Training adapts to your background, not the other way around.",
    highlight: "Personalized to your skill level",
  },
  {
    icon: DollarSign,
    title: "Elite Quality at Affordable Pricing",
    description:
      "Top-tier education from an industry expert (GSE #335, CompTIA SME, D.Eng. candidate) at a fraction of traditional consulting rates. A rare combination of expertise, personalization, and accessibility.",
    highlight: "Premium instruction, accessible pricing",
  },
];

const comparison = [
  {
    aspect: "Training Format",
    industry: "Group webinars or on-demand videos",
    us: "One-on-one live sessions (Starter & Professional)",
  },
  {
    aspect: "Question Handling",
    industry: "Questions compete for attention, many go unanswered",
    us: "Every question answered in real-time",
  },
  {
    aspect: "Instructor Availability",
    industry: "Limited office hours or async forums",
    us: "Full-time presence during entire course duration",
  },
  {
    aspect: "Lab Support",
    industry: "Self-service troubleshooting, limited assistance",
    us: "Walk-through every lab, debug errors together",
  },
  {
    aspect: "Pace of Learning",
    industry: "Fixed schedule regardless of comprehension",
    us: "Adaptive — we slow down or accelerate based on your understanding",
  },
  {
    aspect: "Knowledge Transfer",
    industry: "One-size-fits-all curriculum",
    us: "Tailored to your role, tech stack, and knowledge gaps",
  },
];

export default function WhyUsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <p className="text-sm text-cyber-accent font-mono mb-2">
            &gt; cat ./why-us.md
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-cyber-text mb-4">
            Why Choose AI AppSec Academy?
          </h1>
          <p className="text-lg text-cyber-muted max-w-3xl mx-auto leading-relaxed">
            Most industry trainings are group-based — your questions compete for
            attention, and successful knowledge transfer is left to chance. We do
            it differently.
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
                Individual Training, Not Group Sessions
              </h2>
              <p className="text-cyber-muted leading-relaxed mb-4">
                For <span className="text-emerald-400 font-semibold">Starter</span> and{" "}
                <span className="text-sky-400 font-semibold">Professional</span>{" "}
                tiers, you receive direct one-on-one training. Your instructor sits
                with you for the full course duration — walking through contents,
                labs, technical errors, and explaining concepts tailored to your
                background.
              </p>
              <p className="text-cyber-muted leading-relaxed">
                This isn't a webinar with 50 participants fighting for airtime.
                It's personalized instruction designed to ensure successful knowledge
                transfer on every topic.
              </p>
            </div>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-cyber-text mb-8 text-center">
            The AI AppSec Academy Difference
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
            Industry Standard vs. AI AppSec Academy
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
                        Industry Standard
                      </div>
                    </th>
                    <th className="text-left p-4 text-emerald-400 font-bold">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        AI AppSec Academy
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
                Enterprise Tier: Customized Team Training
              </h3>
              <p className="text-sm text-cyber-muted leading-relaxed">
                Enterprise programs are tailored for corporate teams and include
                customized curriculum aligned to your organization's tech stack,
                threat model, and maturity goals. Contact us for multi-day bootcamp
                options.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-cyber-text mb-4">
            Ready for Personalized Training?
          </h2>
          <p className="text-cyber-muted mb-6">
            Explore our Starter and Professional courses designed for one-on-one
            knowledge transfer.
          </p>
          <a
            href="/courses"
            className="inline-block px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-cyber-bg font-semibold rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            <span className="font-mono">$</span> View Courses
          </a>
        </div>
      </section>
    </div>
  );
}
