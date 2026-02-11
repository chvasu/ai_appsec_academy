import { HelpCircle, ChevronRight } from "lucide-react";

export const metadata = {
  title: "FAQ | AI AppSec Consulting",
  description:
    "Frequently asked questions about AI AppSec Consulting services, booking, scheduling, and more.",
};

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What makes AI AppSec Consulting different from other consulting firms?",
        a: "You work directly with an industry expert (GSE #335, CompTIA SME, D.Eng. candidate) — not junior associates or subcontractors. Every session is hands-on, tailored to your environment, and focused on delivering actionable results you can implement immediately.",
      },
      {
        q: "Who is the consultant?",
        a: "All consulting is led by Viswanath Srinivasan Chirravuri (GSE #335, CISSP, PMP), a CompTIA Subject Matter Expert, SANS Teaching Assistant, and RSA Conference speaker. He holds 35+ certifications and is currently pursuing a D.Eng. in Cybersecurity Analytics at George Washington University (expected August 2026).",
      },
      {
        q: "Are consulting sessions available internationally?",
        a: "Yes. All sessions are conducted virtually and are available across all time zones, including weekends. We accommodate clients worldwide.",
      },
      {
        q: "What topics do you consult on?",
        a: "We specialize in Application Security (SAST, DAST, SCA, DevSecOps), Product Security, Software Supply Chain Security, AI/ML Security (LLM security, Agentic AI, RAG architectures), and Secure AI-Assisted Development (Vibecoding).",
      },
    ],
  },
  {
    category: "Booking & Payment",
    questions: [
      {
        q: "How do I book a consulting session?",
        a: "Browse the services catalog, select the service that matches your needs, accept the Terms & Conditions, and click 'Book Now.' You'll be redirected to a secure Stripe checkout page to complete payment.",
      },
      {
        q: "What payment methods are accepted?",
        a: "We accept all major credit and debit cards (Visa, Mastercard, American Express, Discover) through Stripe. Payment is processed securely, and we do not store your card information.",
      },
      {
        q: "Will I receive a receipt?",
        a: "Yes. Stripe automatically sends a receipt to your email immediately after payment. You can also access receipts from your Stripe payment confirmation page.",
      },
      {
        q: "Can I get an invoice for my company?",
        a: "Yes. Contact us via LinkedIn after booking with your company details, and we'll provide a formal invoice for reimbursement or procurement purposes.",
      },
      {
        q: "Can I book multiple hours?",
        a: "Yes. You can book multiple sessions across different topics, or book the same service multiple times for extended engagements. For large engagements, consider our Enterprise tier for custom scoping and pricing.",
      },
    ],
  },
  {
    category: "Scheduling & Availability",
    questions: [
      {
        q: "How soon after booking can I start?",
        a: "You will be contacted within 24 hours of booking to schedule your consulting session. We work with your availability to find a suitable time.",
      },
      {
        q: "What if I need to reschedule?",
        a: "You can reschedule for free if requested more than 24 hours before your session. Contact us via LinkedIn or the method agreed upon during booking. Late rescheduling (within 24 hours) may incur a 50% fee.",
      },
      {
        q: "What time zones are supported?",
        a: "All time zones are supported. Sessions are available 7 days a week, including weekends, to accommodate global clients.",
      },
      {
        q: "Can I split a session across multiple days?",
        a: "Yes. For multi-hour sessions, we can split across multiple days if needed. Discuss scheduling preferences when we reach out to coordinate.",
      },
    ],
  },
  {
    category: "Consulting Format & Deliverables",
    questions: [
      {
        q: "Are sessions hands-on or advisory only?",
        a: "All sessions are highly hands-on. We work in your environment, configure tools, review code, design architectures, and implement solutions together. You receive working configurations, not just slide decks.",
      },
      {
        q: "What do I need to prepare?",
        a: "Depending on the service, you may need access to your development environment, CI/CD pipelines, or specific tools. We'll provide a preparation checklist after scheduling.",
      },
      {
        q: "Will I receive deliverables after the session?",
        a: "Yes. All sessions include relevant documentation, configuration files, implementation guides, and an actionable roadmap delivered within 24 hours of the session.",
      },
      {
        q: "Can I record the consulting session?",
        a: "Recording is generally permitted for your internal reference. Please confirm during your session. Recordings may not be shared externally or distributed.",
      },
    ],
  },
  {
    category: "Technical Requirements",
    questions: [
      {
        q: "What equipment do I need?",
        a: "You'll need: (1) A computer with stable internet connection, (2) Video conferencing software (Zoom, Google Meet, or Teams), (3) A microphone and camera for interactive consulting, (4) Access to relevant tools and environments for hands-on sessions.",
      },
      {
        q: "What operating system is required?",
        a: "Most sessions support Windows, macOS, and Linux. Specific requirements will be communicated during scheduling.",
      },
      {
        q: "Do I need to install tools in advance?",
        a: "We'll provide a setup guide after booking with any required tools. Installation can also be part of the hands-on session.",
      },
    ],
  },
  {
    category: "Refunds & Cancellations",
    questions: [
      {
        q: "What is your refund policy?",
        a: "100% refund if canceled more than 24 hours before the session, 50% refund if canceled between 24 hours and 1 hour before, and no refund if canceled within 1 hour of start time. See our Refund Policy page for full details.",
      },
      {
        q: "What happens if the consultant cancels?",
        a: "In the rare event of consultant-initiated cancellation, you receive a full 100% refund or priority rescheduling at your convenience. We notify you as soon as possible, typically at least 24 hours in advance.",
      },
      {
        q: "What if I miss my scheduled session (no-show)?",
        a: "No-shows are not eligible for refunds or rescheduling. Please cancel in advance if you cannot attend.",
      },
    ],
  },
  {
    category: "Enterprise Engagements",
    questions: [
      {
        q: "Do you offer enterprise/team consulting?",
        a: "Yes. Our Enterprise tier includes customized multi-day engagements for teams. These are tailored to your organization's tech stack, threat model, and maturity goals. Contact us via LinkedIn for a custom quote.",
      },
      {
        q: "Can you create a custom engagement scope?",
        a: "Absolutely. Enterprise engagements are fully customizable. We can combine topics from multiple services, focus on specific tools, or design entirely new scope based on your needs.",
      },
      {
        q: "Do you provide on-site consulting?",
        a: "Yes, on-site consulting is available for Enterprise engagements. Virtual delivery is also available for all tiers.",
      },
      {
        q: "How many team members can participate?",
        a: "Enterprise sessions typically accommodate teams of any size. For larger groups, we can design multi-session engagements or workshop formats.",
      },
    ],
  },
  {
    category: "Follow-Up Support",
    questions: [
      {
        q: "Can I ask questions after the session?",
        a: "Yes. You can reach out via LinkedIn for follow-up questions within 30 days of your session. We're happy to clarify concepts or help troubleshoot specific issues.",
      },
      {
        q: "Do you offer ongoing consulting retainers?",
        a: "Our Strategy Session ($300/hour) is ideal for ongoing advisory. You can book multiple sessions as needed. For longer-term engagements, contact us about Enterprise options.",
      },
      {
        q: "Will you help with implementation in my environment?",
        a: "That's exactly what our sessions are designed for. Unlike traditional consulting that delivers reports, we work hands-on in your environment to implement solutions during the session.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-surface border border-cyber-accent/30 text-cyber-accent mb-4">
          <HelpCircle className="w-4 h-4" />
          <span className="text-sm font-mono">Frequently Asked Questions</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-cyber-text mb-4">
          FAQ
        </h1>
        <p className="text-cyber-muted max-w-2xl mx-auto">
          Find answers to common questions about our consulting services, booking,
          scheduling, and more. Can&apos;t find what you&apos;re looking for? Contact us via LinkedIn.
        </p>
      </div>

      <div className="space-y-12">
        {faqs.map((section, idx) => (
          <div key={idx}>
            <div className="flex items-center gap-3 mb-6">
              <ChevronRight className="w-5 h-5 text-cyber-accent" />
              <h2 className="text-2xl font-bold text-cyber-text">{section.category}</h2>
            </div>
            <div className="space-y-6">
              {section.questions.map((faq, qIdx) => (
                <div
                  key={qIdx}
                  className="bg-cyber-surface border border-cyber-border rounded-lg p-6 hover:border-cyber-accent/40 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-cyber-text mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-cyber-muted leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Still have questions CTA */}
      <div className="mt-16 text-center">
        <div className="bg-cyber-surface border border-cyber-accent/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-cyber-text mb-3">
            Still Have Questions?
          </h2>
          <p className="text-cyber-muted mb-6">
            Can&apos;t find the answer you&apos;re looking for? Reach out directly for personalized assistance.
          </p>
          <a
            href="https://www.linkedin.com/in/vchirrav/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-cyber-bg font-semibold rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            <span className="font-mono">&gt;</span> Contact on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
