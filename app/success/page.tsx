import { CheckCircle, ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <CheckCircle className="w-12 h-12 text-emerald-400" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-cyber-text mb-3">
          Payment Successful
        </h1>

        <p className="text-cyber-muted mb-2">
          Your consulting session has been booked.
        </p>

        <div className="flex items-center justify-center gap-2 text-sm text-cyber-accent mb-8">
          <Mail className="w-4 h-4" />
          <span>A receipt has been sent to your email via Stripe.</span>
        </div>

        <div className="bg-cyber-surface border border-cyber-border rounded-lg p-6 mb-8 text-left">
          <p className="text-sm text-cyber-muted font-mono mb-2">
            &gt; next_steps.sh
          </p>
          <ul className="space-y-2 text-sm text-cyber-muted">
            <li className="flex items-start gap-2">
              <span className="text-cyber-accent">1.</span>
              Check your email for the Stripe receipt
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyber-accent">2.</span>
              You will be contacted within 24 hours to schedule your session
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyber-accent">3.</span>
              Connect on{" "}
              <a
                href="https://www.linkedin.com/in/vchirrav/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-accent hover:underline"
              >
                LinkedIn
              </a>{" "}
              for updates
            </li>
          </ul>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-cyber-muted hover:text-cyber-accent transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
