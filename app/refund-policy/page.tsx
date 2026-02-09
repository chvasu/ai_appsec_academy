import { DollarSign, Clock, CheckCircle2, XCircle } from "lucide-react";

export const metadata = {
  title: "Refund & Cancellation Policy | AI AppSec Academy",
  description:
    "Refund and cancellation policy for AI AppSec Academy training courses.",
};

export default function RefundPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-surface border border-cyber-accent/30 text-cyber-accent mb-4">
          <DollarSign className="w-4 h-4" />
          <span className="text-sm font-mono">Refund & Cancellation Policy</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-cyber-text mb-4">
          Refund & Cancellation Policy
        </h1>
        <p className="text-cyber-muted">
          Last Updated: February 9, 2026
        </p>
      </div>

      <div className="space-y-8">
        {/* Overview */}
        <div className="bg-cyber-surface border border-cyber-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-cyber-text mb-4">Overview</h2>
          <p className="text-cyber-muted leading-relaxed">
            At AI AppSec Academy, we strive to provide the highest quality training experience.
            We understand that circumstances may change, and we have established a fair and
            transparent refund and cancellation policy to accommodate our students while
            protecting our scheduling and planning commitments.
          </p>
        </div>

        {/* Refund Tiers */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Full Refund */}
          <div className="bg-emerald-500/5 border border-emerald-500/30 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl font-bold text-emerald-400">100% Refund</h3>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-cyber-muted">More than 24 hours before</span>
            </div>
            <p className="text-sm text-cyber-muted leading-relaxed">
              Cancel anytime up to 24 hours before your scheduled training session and
              receive a full refund. No questions asked.
            </p>
          </div>

          {/* 50% Refund */}
          <div className="bg-sky-500/5 border border-sky-500/30 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-6 h-6 text-sky-400" />
              <h3 className="text-xl font-bold text-sky-400">50% Refund</h3>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-sky-400" />
              <span className="text-sm text-cyber-muted">24 hours to 1 hour before</span>
            </div>
            <p className="text-sm text-cyber-muted leading-relaxed">
              Cancel within the last 24 hours but more than 1 hour before your session
              and receive a 50% refund.
            </p>
          </div>

          {/* No Refund */}
          <div className="bg-red-500/5 border border-red-500/30 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="w-6 h-6 text-red-400" />
              <h3 className="text-xl font-bold text-red-400">No Refund</h3>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-red-400" />
              <span className="text-sm text-cyber-muted">Within 1 hour before</span>
            </div>
            <p className="text-sm text-cyber-muted leading-relaxed">
              Cancellations within 1 hour of the scheduled start time are not eligible
              for refunds.
            </p>
          </div>
        </div>

        {/* Detailed Policy */}
        <div className="bg-cyber-surface border border-cyber-border rounded-lg p-8 space-y-6 text-cyber-muted">
          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">Detailed Refund Policy</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-cyber-text mb-2">
                  1. Full Refund (100%) - More than 24 Hours Before
                </h3>
                <p className="leading-relaxed mb-3">
                  If you cancel your training session more than 24 hours before the scheduled
                  start time, you are entitled to a full refund (100%) of the course fee.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Refund processed within 5-7 business days</li>
                  <li>Refunded to original payment method via Stripe</li>
                  <li>No cancellation fee applied</li>
                  <li>Can reschedule for free before this deadline</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-cyber-text mb-2">
                  2. Partial Refund (50%) - 24 Hours to 1 Hour Before
                </h3>
                <p className="leading-relaxed mb-3">
                  If you cancel between 24 hours and 1 hour before the scheduled start time,
                  you are entitled to a 50% refund of the course fee.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>50% of course fee refunded</li>
                  <li>50% retained as a late cancellation fee</li>
                  <li>Refund processed within 5-7 business days</li>
                  <li>Refunded to original payment method via Stripe</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-cyber-text mb-2">
                  3. No Refund - Within 1 Hour Before
                </h3>
                <p className="leading-relaxed mb-3">
                  Cancellations made within 1 hour of the scheduled start time are not eligible
                  for refunds.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>No refund issued</li>
                  <li>Full course fee retained</li>
                  <li>Instructor time has been committed and reserved</li>
                  <li>May reschedule for an additional fee (contact us)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">Rescheduling Policy</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-cyber-text mb-2">
                  Free Rescheduling
                </h3>
                <p className="leading-relaxed">
                  You may reschedule your training session at no additional cost if requested
                  more than 24 hours before the scheduled start time. Rescheduling requests
                  should be made via LinkedIn or the contact method agreed upon during enrollment.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyber-text mb-2">
                  Late Rescheduling
                </h3>
                <p className="leading-relaxed">
                  Rescheduling requests made within 24 hours of the scheduled start time may
                  incur a rescheduling fee equivalent to 50% of the course fee. Contact us to
                  discuss options.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">How to Cancel or Reschedule</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong className="text-cyber-text">Contact Us:</strong> Reach out via LinkedIn
                at <a href="https://www.linkedin.com/in/vchirrav/" target="_blank"
                rel="noopener noreferrer" className="text-cyber-accent hover:underline">
                  linkedin.com/in/vchirrav
                </a> or through the contact method agreed upon during enrollment.
              </li>
              <li>
                <strong className="text-cyber-text">Provide Details:</strong> Include your name,
                course name, scheduled date/time, and reason for cancellation/rescheduling.
              </li>
              <li>
                <strong className="text-cyber-text">Confirmation:</strong> You will receive
                confirmation of your cancellation or new schedule within 24 hours.
              </li>
              <li>
                <strong className="text-cyber-text">Refund Processing:</strong> If eligible for
                a refund, it will be processed within 5-7 business days to your original payment
                method.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">Instructor-Initiated Cancellations</h2>
            <p className="leading-relaxed mb-3">
              In the rare event that we must cancel or reschedule a session due to instructor
              illness, emergency, or other unforeseen circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-cyber-text">Full Refund:</strong> You will receive
              a full 100% refund, regardless of timing</li>
              <li><strong className="text-cyber-text">Priority Rescheduling:</strong> You will
              be offered priority rescheduling at your convenience</li>
              <li><strong className="text-cyber-text">Notification:</strong> We will notify you
              as soon as possible, typically at least 24 hours in advance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">No-Show Policy</h2>
            <p className="leading-relaxed">
              If you do not attend your scheduled training session without prior cancellation,
              it will be considered a no-show. No-shows are not eligible for refunds or
              rescheduling. We recommend canceling as early as possible if you cannot attend.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">Enterprise & Multi-Day Programs</h2>
            <p className="leading-relaxed">
              Enterprise programs (AI Security Bootcamp, Enterprise AppSec Bootcamp) and multi-day
              trainings have custom cancellation policies negotiated during the contract phase.
              Please refer to your signed agreement for specific terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">Questions & Exceptions</h2>
            <p className="leading-relaxed">
              We understand that exceptional circumstances may arise. If you have a unique
              situation or need to discuss your cancellation, please contact us directly via
              LinkedIn. We will do our best to accommodate genuine emergencies on a case-by-case
              basis.
            </p>
          </section>
        </div>

        {/* Summary Table */}
        <div className="bg-cyber-surface border border-cyber-border rounded-lg overflow-hidden">
          <div className="p-6 border-b border-cyber-border">
            <h2 className="text-2xl font-bold text-cyber-text">Quick Reference</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-cyber-bg/50">
                <tr className="border-b border-cyber-border">
                  <th className="text-left p-4 text-cyber-text font-semibold">Cancellation Timing</th>
                  <th className="text-left p-4 text-cyber-text font-semibold">Refund Amount</th>
                  <th className="text-left p-4 text-cyber-text font-semibold">Processing Time</th>
                </tr>
              </thead>
              <tbody className="text-cyber-muted">
                <tr className="border-b border-cyber-border/50">
                  <td className="p-4">&gt; 24 hours before</td>
                  <td className="p-4 text-emerald-400 font-semibold">100% Full Refund</td>
                  <td className="p-4">5-7 business days</td>
                </tr>
                <tr className="border-b border-cyber-border/50">
                  <td className="p-4">24 hours to 1 hour before</td>
                  <td className="p-4 text-sky-400 font-semibold">50% Partial Refund</td>
                  <td className="p-4">5-7 business days</td>
                </tr>
                <tr className="border-b border-cyber-border/50">
                  <td className="p-4">&lt; 1 hour before</td>
                  <td className="p-4 text-red-400 font-semibold">No Refund</td>
                  <td className="p-4">N/A</td>
                </tr>
                <tr>
                  <td className="p-4">Instructor cancellation</td>
                  <td className="p-4 text-emerald-400 font-semibold">100% Full Refund</td>
                  <td className="p-4">5-7 business days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
