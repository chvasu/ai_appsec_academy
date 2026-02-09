import { HelpCircle, ChevronRight } from "lucide-react";

export const metadata = {
  title: "FAQ | AI AppSec Academy",
  description:
    "Frequently asked questions about AI AppSec Academy training courses, enrollment, scheduling, and more.",
};

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What makes AI AppSec Academy different from other training providers?",
        a: "We provide direct one-on-one training for Starter and Professional tiers, not group webinars. Your instructor sits with you for the entire course duration, ensuring every question is answered and concepts are adapted to your knowledge level. Topics are directly implementable in real-world projects.",
      },
      {
        q: "Who is the instructor?",
        a: "All training is led by Viswanath Srinivasan Chirravuri (GSE #335, CISSP, PMP), a CompTIA Subject Matter Expert, SANS Teaching Assistant, and RSA Conference speaker. He holds 35+ certifications and is currently pursuing a D.Eng. in Cybersecurity Analytics at George Washington University (expected August 2026).",
      },
      {
        q: "Are courses available internationally?",
        a: "Yes! All training sessions are conducted virtually and are available across all time zones, including weekends. We accommodate students worldwide.",
      },
    ],
  },
  {
    category: "Enrollment & Payment",
    questions: [
      {
        q: "How do I enroll in a course?",
        a: "Browse the course catalog, select your desired course, accept the Terms & Conditions, and click 'Enroll Now.' You'll be redirected to a secure Stripe checkout page to complete payment.",
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
        a: "Yes. Contact us via LinkedIn after enrollment with your company details, and we'll provide a formal invoice for reimbursement or procurement purposes.",
      },
    ],
  },
  {
    category: "Scheduling & Availability",
    questions: [
      {
        q: "How soon after enrollment can I start training?",
        a: "You will be contacted within 24 hours of payment to schedule your training session. We work with your availability to find a suitable time.",
      },
      {
        q: "What if I need to reschedule?",
        a: "You can reschedule for free if requested more than 24 hours before your session. Contact us via LinkedIn or the method agreed upon during enrollment. Late rescheduling (within 24 hours) may incur a 50% fee.",
      },
      {
        q: "What time zones are supported?",
        a: "All time zones are supported. Training sessions are available 7 days a week, including weekends, to accommodate global participants.",
      },
      {
        q: "How long do I have to complete the training?",
        a: "Training sessions are live and must be completed on the scheduled date. For multi-hour courses, we can split sessions into multiple days if needed (discuss during scheduling).",
      },
    ],
  },
  {
    category: "Course Content & Format",
    questions: [
      {
        q: "Are courses hands-on or lecture-based?",
        a: "All courses are highly hands-on with live labs, tool demonstrations, and real-world exercises. We walk through every concept together, debug errors as they happen, and ensure you can implement what you learn immediately.",
      },
      {
        q: "What technical prerequisites do I need?",
        a: "Prerequisites vary by course. Most technology-specific courses assume familiarity with command-line basics and the target technology (e.g., Python for Bandit, Docker for container security). Career consultation courses have no prerequisites.",
      },
      {
        q: "Will I receive course materials?",
        a: "Yes. You'll receive relevant documentation, configuration files, sample code, and resource links after the session. Some courses include access to lab environments for 30 days.",
      },
      {
        q: "Do I get a certificate of completion?",
        a: "Yes. All courses include a certificate of completion issued after the training session. Enterprise bootcamps include formal certificates suitable for professional development records.",
      },
      {
        q: "Can I record the training session?",
        a: "For one-on-one sessions, recording is generally permitted for personal reference. Please confirm during your session. Recordings may not be shared or distributed.",
      },
    ],
  },
  {
    category: "Technical Requirements",
    questions: [
      {
        q: "What equipment do I need?",
        a: "You'll need: (1) A computer with stable internet connection, (2) Video conferencing software (Zoom, Google Meet, or Teams), (3) A microphone and camera for interactive training, (4) Administrative access to install tools (for hands-on courses).",
      },
      {
        q: "What operating system is required?",
        a: "Most courses support Windows, macOS, and Linux. Specific requirements will be communicated during scheduling. Docker-based labs work on all platforms.",
      },
      {
        q: "Do I need to install tools in advance?",
        a: "We'll provide a setup guide after enrollment with a list of required tools. Installation is often part of the hands-on training, so pre-installation is optional but recommended to maximize training time.",
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
        q: "What happens if the instructor cancels?",
        a: "In the rare event of instructor-initiated cancellation (illness, emergency), you receive a full 100% refund or priority rescheduling at your convenience. We notify you as soon as possible, typically at least 24 hours in advance.",
      },
      {
        q: "What if I miss my scheduled session (no-show)?",
        a: "No-shows are not eligible for refunds or rescheduling. Please cancel in advance if you cannot attend.",
      },
    ],
  },
  {
    category: "Enterprise & Custom Training",
    questions: [
      {
        q: "Do you offer corporate/team training?",
        a: "Yes! Our Enterprise tier includes customized 2-5 day bootcamps for teams. These are tailored to your organization's tech stack, threat model, and maturity goals. Contact us via LinkedIn for a custom quote.",
      },
      {
        q: "Can you create a custom curriculum?",
        a: "Absolutely. Enterprise programs are fully customizable. We can combine topics from multiple courses, focus on specific tools, or design entirely new content based on your needs.",
      },
      {
        q: "Do you provide on-site training?",
        a: "Yes, on-site training is available for Enterprise programs. We can travel to your location for multi-day bootcamps. Virtual delivery is also available.",
      },
      {
        q: "How many team members can attend?",
        a: "Enterprise programs typically accommodate 10-30 participants. For larger groups, we can design a train-the-trainer model or run multiple cohorts.",
      },
    ],
  },
  {
    category: "Specific Courses",
    questions: [
      {
        q: "What's the difference between 2-hour and 4-hour courses?",
        a: "2-hour courses ($500) focus on tool setup, configuration, and basic integration. 4-hour courses ($1,000) provide deeper hands-on labs, advanced techniques, and more comprehensive coverage (e.g., Applied AI, Vibecoding).",
      },
      {
        q: "Are all tools covered open-source?",
        a: "Yes! All technology-specific courses focus exclusively on open-source tools that can be freely adopted without licensing barriers. We do not cover commercial-only tools like Checkmarx or Snyk.",
      },
      {
        q: "What is 'Vibecoding'?",
        a: "Vibecoding is AI-assisted development with security by default. Our Vibecoding course teaches you to use Claude Code, Cline, Cursor, and Gemini CLI to generate secure code, implement security rules, and run automated SAST/SCA scans on AI-generated code.",
      },
      {
        q: "Do courses cover Kubernetes security?",
        a: "No. Our DevSecOps course focuses on Docker container security and IaC scanning but does not cover Kubernetes orchestration security.",
      },
    ],
  },
  {
    category: "Support & Follow-Up",
    questions: [
      {
        q: "Can I ask questions after the training?",
        a: "Yes. You can reach out via LinkedIn for follow-up questions within 30 days of your training session. We're happy to clarify concepts or help troubleshoot specific issues.",
      },
      {
        q: "Do you offer ongoing mentorship?",
        a: "Our Power Hour ($300) is ideal for ongoing career coaching and technical mentorship. You can book multiple sessions as needed.",
      },
      {
        q: "Will you help with implementation in my environment?",
        a: "During training, we cover practical implementation. For custom deployment assistance in your specific environment, consider booking additional consulting hours or an Enterprise engagement.",
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
          Find answers to common questions about our training programs, enrollment,
          scheduling, and more. Can't find what you're looking for? Contact us via LinkedIn.
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
            Can't find the answer you're looking for? Reach out directly for personalized assistance.
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
