import { Cookie } from "lucide-react";

export const metadata = {
  title: "Cookie Policy | AI AppSec Consulting",
  description:
    "Cookie Policy for AI AppSec Consulting - How we use cookies and similar technologies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-surface border border-cyber-accent/30 text-cyber-accent mb-4">
          <Cookie className="w-4 h-4" />
          <span className="text-sm font-mono">Cookie Policy</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-cyber-text mb-4">
          Cookie Policy
        </h1>
        <p className="text-cyber-muted">
          Last Updated: February 15, 2026
        </p>
      </div>

      <div className="prose prose-invert prose-emerald max-w-none">
        <div className="bg-cyber-surface border border-cyber-border rounded-lg p-8 space-y-6 text-cyber-muted">
          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              This Cookie Policy explains how AI AppSec Consulting (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) uses
              cookies and similar technologies on{" "}
              <span className="text-cyber-accent">aiappsecacademy.com</span>. By using our website,
              you consent to the use of cookies as described in this policy. You can manage your
              cookie preferences at any time through the cookie consent banner provided by Cookiebot.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">2. What Are Cookies?</h2>
            <p className="leading-relaxed">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile)
              when you visit a website. They are widely used to make websites work more efficiently,
              provide a better user experience, and give website owners useful information about how
              their site is being used.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">3. Types of Cookies We Use</h2>

            <h3 className="text-xl font-semibold text-cyber-text mt-4 mb-2">3.1 Strictly Necessary Cookies</h3>
            <p className="leading-relaxed mb-3">
              These cookies are essential for the website to function properly. They enable core
              functionality such as security, network management, and accessibility. You cannot
              opt out of these cookies.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-cyber-text">Cookiebot (CookieConsent):</strong> Stores your cookie consent
                preferences so the banner is not shown repeatedly</li>
              <li><strong className="text-cyber-text">Session cookies:</strong> Maintain your session state during
                your visit</li>
            </ul>

            <h3 className="text-xl font-semibold text-cyber-text mt-4 mb-2">3.2 Analytics Cookies</h3>
            <p className="leading-relaxed mb-3">
              These cookies help us understand how visitors interact with our website by collecting
              and reporting information anonymously. This helps us improve our website and services.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-cyber-text">Google Analytics (_ga, _gid, _gat):</strong> Collects
                anonymized data about page views, session duration, traffic sources, and user behavior.
                Data is processed by Google in accordance with their{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
                  className="text-cyber-accent hover:underline">Privacy Policy</a></li>
              <li><strong className="text-cyber-text">Vercel Web Analytics:</strong> Privacy-friendly analytics
                that does not use cookies and does not collect personal information</li>
            </ul>

            <h3 className="text-xl font-semibold text-cyber-text mt-4 mb-2">3.3 Functional Cookies</h3>
            <p className="leading-relaxed">
              These cookies enable enhanced functionality and personalization, such as remembering
              your preferences. If you do not allow these cookies, some features may not function properly.
            </p>

            <h3 className="text-xl font-semibold text-cyber-text mt-4 mb-2">3.4 Marketing Cookies</h3>
            <p className="leading-relaxed">
              We do not currently use marketing or advertising cookies. If this changes in the future,
              this policy will be updated and your consent will be requested.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">4. Cookie Consent Management</h2>
            <p className="leading-relaxed mb-3">
              We use <strong className="text-cyber-text">Cookiebot by Usercentrics</strong> to manage cookie consent
              on our website. When you first visit our site, you will see a consent banner that allows
              you to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accept all cookies</li>
              <li>Deny non-essential cookies</li>
              <li>Customize your preferences by cookie category</li>
            </ul>
            <p className="leading-relaxed mt-3">
              You can change your cookie preferences at any time by clicking the cookie icon or
              privacy trigger on our website, which will re-open the consent banner.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">5. Third-Party Cookies</h2>
            <p className="leading-relaxed mb-3">
              Some cookies are placed by third-party services that appear on our pages. We do not
              control these cookies. The third-party services we use include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-cyber-text">Google Analytics:</strong> Website usage analytics —{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer"
                  className="text-cyber-accent hover:underline">Opt-out browser add-on</a></li>
              <li><strong className="text-cyber-text">Stripe:</strong> Payment processing — cookies are set only
                during checkout sessions</li>
              <li><strong className="text-cyber-text">Cookiebot:</strong> Cookie consent management —{" "}
                <a href="https://www.cookiebot.com/en/privacy-policy/" target="_blank" rel="noopener noreferrer"
                  className="text-cyber-accent hover:underline">Cookiebot Privacy Policy</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">6. How to Control Cookies</h2>
            <p className="leading-relaxed mb-3">
              In addition to the Cookiebot consent banner, you can control cookies through your
              browser settings. Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific sites</li>
              <li>Block all cookies</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Please note that blocking or deleting cookies may impact your experience on our website
              and limit certain functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">7. Data Retention</h2>
            <p className="leading-relaxed">
              Cookie retention periods vary by type. Strictly necessary cookies expire at the end
              of your session. Analytics cookies (such as Google Analytics) are retained for up to
              26 months. Your Cookiebot consent preferences are stored for 12 months before you are
              asked again.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">8. Updates to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in the cookies
              we use or for legal, regulatory, or operational reasons. Any changes will be posted on
              this page with an updated &quot;Last Updated&quot; date. We encourage you to review this policy
              periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyber-text mb-4">9. Contact Information</h2>
            <p className="leading-relaxed">
              If you have questions about our use of cookies or this Cookie Policy, please contact:
            </p>
            <div className="mt-4 p-4 bg-cyber-bg border border-cyber-border rounded-lg">
              <p className="text-cyber-text font-semibold">Viswanath Srinivasan Chirravuri</p>
              <p>AI AppSec Consulting™</p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/vchirrav/" target="_blank"
                rel="noopener noreferrer" className="text-cyber-accent hover:underline">
                linkedin.com/in/vchirrav
              </a></p>
              <p>Website: <span className="text-cyber-accent">aiappsecacademy.com</span></p>
            </div>
          </section>

          <section className="mt-8 p-6 bg-emerald-500/5 border border-emerald-500/30 rounded-lg">
            <h3 className="text-lg font-semibold text-emerald-400 mb-2">Your Consent Matters</h3>
            <p className="leading-relaxed text-sm">
              By using our website, you acknowledge that you have read and understood this Cookie Policy.
              You can withdraw or modify your consent at any time by using the cookie consent tool
              on our website. For more information about how we handle your personal data, please
              see our <a href="/privacy" className="text-cyber-accent hover:underline">Privacy Policy</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
