import { getCourses } from "@/lib/db";
import { CourseCard } from "@/components/CourseCard";
import { Brain, Shield } from "lucide-react";

export default async function ServicesPage() {
  const services = await getCourses();

  const aiServices = services.filter((s) => s.category === "ai");
  const appSecServices = services.filter(
    (s) => s.category === "appsec" || s.category === "general"
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <p className="text-sm text-cyber-accent font-mono mb-2">
          &gt; ls ./consulting-services --detailed
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-cyber-text mb-4">
          Consulting Services
        </h1>
        <p className="text-cyber-muted max-w-xl mx-auto">
          Book hourly consulting sessions tailored to your specific security challenges. Choose the service that matches your needs.
        </p>
      </div>

      {/* AI/ML Security Services */}
      <section id="ai-security" className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-lg bg-cyber-bg border border-emerald-500/30">
            <Brain className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-cyber-text">
              AI/ML Security Consulting
            </h2>
            <p className="text-sm text-cyber-muted">
              Agentic AI, LLM Security, GenAI Tools, and Secure AI-Assisted Development
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {aiServices.map((service) => (
            <CourseCard key={service.id} course={service} />
          ))}
        </div>
      </section>

      {/* Application Security Services */}
      <section id="appsec" className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-lg bg-cyber-bg border border-sky-500/30">
            <Shield className="w-6 h-6 text-sky-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-cyber-text">
              Application Security Consulting
            </h2>
            <p className="text-sm text-cyber-muted">
              DevSecOps, SAST/SCA/DAST Implementation, SBOM, Supply Chain, and Product Security
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {appSecServices.map((service) => (
            <CourseCard key={service.id} course={service} />
          ))}
        </div>
      </section>
    </div>
  );
}
