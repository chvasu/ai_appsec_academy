import { Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | AI AppSec Academy",
  description:
    "Privacy Policy for AI AppSec Academy - How we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-surface border border-cyber-accent/30 text-cyber-accent mb-4">
          <Shield className="w-4 h-4" />
          <span className="text-sm font-mono">Privacy Policy</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-cyber-text mb-4">
          Privacy Policy
        </h1>
        <p className="text-cyber-muted">
          Last Updated: February 9, 2026
        </p>
      </div>

      <div className="prose prose-invert prose-emerald max-w-none">
        <div className="bg-cyber-surface border border-cyber-border rounded-lg p-8 space-y-6 text-cyber-muted">
          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              AI AppSec Academy ("we", "our", or "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website <span className="text-cyber-accent">aiappsecacademy.com</span> and
              use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-cyber-text mt-4 mb-2">2.1 Personal Information</h3>
            <p className="leading-relaxed mb-3">
              We collect personal information that you voluntarily provide when:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Enrolling in training courses</li>
              <li>Making payments through Stripe</li>
              <li>Contacting us via LinkedIn or other communication channels</li>
              <li>Subscribing to newsletters or updates (if applicable)</li>
            </ul>
            <p className="leading-relaxed mt-3">
              This information may include: name, email address, payment information (processed by Stripe),
              company name, job title, and communication preferences.
            </p>

            <h3 className="text-xl font-semibold text-cyber-text mt-4 mb-2">2.2 Automatically Collected Information</h3>
            <p className="leading-relaxed mb-3">
              When you visit our website, we automatically collect:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address (anonymized)</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website</li>
              <li>Device information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">3. How We Use Your Information</h2>
            <p className="leading-relaxed mb-3">
              We use collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-cyber-text">Service Delivery:</strong> To provide training courses,
              process enrollments, and communicate course details</li>
              <li><strong className="text-cyber-text">Payment Processing:</strong> To process transactions
              through Stripe (we do not store credit card information)</li>
              <li><strong className="text-cyber-text">Communication:</strong> To send course confirmations,
              updates, and respond to inquiries</li>
              <li><strong className="text-cyber-text">Analytics:</strong> To understand website usage and
              improve our services (via Vercel Web Analytics)</li>
              <li><strong className="text-cyber-text">Legal Compliance:</strong> To comply with legal
              obligations and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">4. Third-Party Services</h2>
            <p className="leading-relaxed mb-3">
              We use the following third-party services that may collect information:
            </p>

            <h3 className="text-xl font-semibold text-cyber-text mt-4 mb-2">4.1 Stripe</h3>
            <p className="leading-relaxed">
              Payment processing is handled by Stripe. Stripe collects and processes payment information
              according to their <a href="https://stripe.com/privacy" target="_blank"
              rel="noopener noreferrer" className="text-cyber-accent hover:underline">Privacy Policy</a>.
              We do not store credit card information on our servers.
            </p>

            <h3 className="text-xl font-semibold text-cyber-text mt-4 mb-2">4.2 Vercel Web Analytics</h3>
            <p className="leading-relaxed">
              We use Vercel Web Analytics for privacy-friendly website analytics. Vercel does not use
              cookies and does not collect personal information. Data is aggregated and anonymized.
            </p>

            <h3 className="text-xl font-semibold text-cyber-text mt-4 mb-2">4.3 Vercel Hosting</h3>
            <p className="leading-relaxed">
              Our website is hosted on Vercel. Server logs may be collected for security and performance
              monitoring purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">5. Data Retention</h2>
            <p className="leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes
              outlined in this Privacy Policy, unless a longer retention period is required by law.
              Course enrollment records are retained for a minimum of 7 years for tax and legal compliance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">6. Data Security</h2>
            <p className="leading-relaxed">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>SSL/TLS encryption for all data transmission</li>
              <li>Secure hosting infrastructure (Vercel)</li>
              <li>PCI DSS compliant payment processing (Stripe)</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication for internal systems</li>
            </ul>
            <p className="leading-relaxed mt-3">
              However, no method of transmission over the internet is 100% secure. While we strive to
              protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">7. Your Rights</h2>
            <p className="leading-relaxed mb-3">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-cyber-text">Access:</strong> Request a copy of your personal data</li>
              <li><strong className="text-cyber-text">Correction:</strong> Request correction of inaccurate data</li>
              <li><strong className="text-cyber-text">Deletion:</strong> Request deletion of your personal data</li>
              <li><strong className="text-cyber-text">Objection:</strong> Object to processing of your data</li>
              <li><strong className="text-cyber-text">Portability:</strong> Request transfer of your data</li>
              <li><strong className="text-cyber-text">Withdraw Consent:</strong> Withdraw consent for data processing</li>
            </ul>
            <p className="leading-relaxed mt-3">
              To exercise these rights, contact us via LinkedIn at{" "}
              <a href="https://www.linkedin.com/in/vchirrav/" target="_blank"
              rel="noopener noreferrer" className="text-cyber-accent hover:underline">
                linkedin.com/in/vchirrav
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">8. Cookies</h2>
            <p className="leading-relaxed">
              Our website uses minimal cookies. Vercel Web Analytics does not use cookies. Any cookies
              used are strictly necessary for website functionality (e.g., session management). We do
              not use advertising or tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">9. International Data Transfers</h2>
            <p className="leading-relaxed">
              Your information may be transferred to and processed in the United States where our hosting
              provider (Vercel) and payment processor (Stripe) operate. We ensure appropriate safeguards
              are in place for international transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">10. Children's Privacy</h2>
            <p className="leading-relaxed">
              Our services are intended for professionals and are not directed to individuals under 18 years
              of age. We do not knowingly collect information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">11. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page
              with an updated "Last Updated" date. Continued use of our services after changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">12. Contact Information</h2>
            <p className="leading-relaxed">
              For questions about this Privacy Policy or to exercise your rights, contact:
            </p>
            <div className="mt-4 p-4 bg-cyber-bg border border-cyber-border rounded-lg">
              <p className="text-cyber-text font-semibold">Viswanath Srinivasan Chirravuri</p>
              <p>AI AppSec Academy™</p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/vchirrav/" target="_blank"
              rel="noopener noreferrer" className="text-cyber-accent hover:underline">
                linkedin.com/in/vchirrav
              </a></p>
              <p>Website: <span className="text-cyber-accent">aiappsecacademy.com</span></p>
            </div>
          </section>

          <section className="mt-8 p-6 bg-emerald-500/5 border border-emerald-500/30 rounded-lg">
            <h3 className="text-lg font-semibold text-emerald-400 mb-2">GDPR & CCPA Compliance</h3>
            <p className="leading-relaxed text-sm">
              We comply with the General Data Protection Regulation (GDPR) for EU residents and the
              California Consumer Privacy Act (CCPA) for California residents. You have the right to
              know what data we collect, request deletion, opt-out of data sales (we do not sell data),
              and not be discriminated against for exercising your rights.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
