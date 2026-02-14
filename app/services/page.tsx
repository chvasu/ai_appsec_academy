import { getCourses } from "@/lib/db";
import { CourseCard } from "@/components/CourseCard";
import { Brain, Shield, ShieldCheck, Crosshair, Settings } from "lucide-react";

const aiSubcategoryMeta: Record<
  string,
  { icon: React.ElementType; description: string; borderColor: string }
> = {
  "AI Application Security": {
    icon: ShieldCheck,
    description:
      "Secure LLM applications, RAG pipelines, and autonomous agent architectures against emerging threats",
    borderColor: "border-emerald-500/30",
  },
  "AI Testing & Assessment": {
    icon: Crosshair,
    description:
      "Adversarial testing, jailbreak assessment, and model robustness validation",
    borderColor: "border-violet-500/30",
  },
  "AI Operations & Development": {
    icon: Settings,
    description:
      "Secure ML pipelines, AI-assisted development workflows, and MLSecOps practices",
    borderColor: "border-cyan-500/30",
  },
  "Enterprise AI": {
    icon: Brain,
    description:
      "Comprehensive multi-day engagements for organizations building AI/ML systems at scale",
    borderColor: "border-amber-500/30",
  },
};

export default async function ServicesPage() {
  const services = await getCourses();

  const aiServices = services.filter((s) => s.category === "ai");
  const appSecServices = services.filter(
    (s) => s.category === "appsec" || s.category === "general"
  );

  // Group AI services by subcategory, preserving JSON order
  const aiSubcategories: { name: string; services: typeof aiServices }[] = [];
  const seenSubcats = new Set<string>();
  for (const svc of aiServices) {
    const sub = svc.subcategory || "Other";
    if (!seenSubcats.has(sub)) {
      seenSubcats.add(sub);
      aiSubcategories.push({
        name: sub,
        services: aiServices.filter((s) => (s.subcategory || "Other") === sub),
      });
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <p className="text-sm text-cyber-accent font-mono mb-2">
          &gt; ls ./consulting-services --detailed
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-cyber-text mb-4">
          Consulting Services
        </h1>
        <p className="text-cyber-muted max-w-2xl mx-auto">
          Professional consulting engagements tailored to your specific security
          challenges. Select a service area below to book expert advisory hours.
        </p>
      </div>

      {/* ──────────────── AI/ML SECURITY SERVICES ──────────────── */}
      <section id="ai-security" className="mb-24">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-lg bg-cyber-bg border border-emerald-500/30">
            <Brain className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-cyber-text">
              AI/ML Security Consulting
            </h2>
            <p className="text-sm text-cyber-muted">
              Specialized advisory across LLM security, agentic AI, RAG
              architectures, red teaming, and secure AI development
            </p>
          </div>
        </div>

        {/* Service count badge */}
        <div className="mb-10">
          <span className="text-xs font-mono text-cyber-muted bg-cyber-surface border border-cyber-border px-3 py-1 rounded-full">
            {aiServices.length} services available
          </span>
        </div>

        {/* Subcategory groups */}
        <div className="space-y-16">
          {aiSubcategories.map((group) => {
            const meta = aiSubcategoryMeta[group.name];
            const SubIcon = meta?.icon || Brain;
            return (
              <div key={group.name}>
                {/* Subcategory header */}
                <div className="flex items-center gap-3 mb-2">
                  <SubIcon className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-xl font-bold text-cyber-text">
                    {group.name}
                  </h3>
                </div>
                {meta?.description && (
                  <p className="text-sm text-cyber-muted mb-6 ml-8">
                    {meta.description}
                  </p>
                )}

                <div className="grid md:grid-cols-3 gap-6">
                  {group.services.map((service) => (
                    <CourseCard key={service.id} course={service} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ──────────────── APPLICATION SECURITY SERVICES ──────────────── */}
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
              DevSecOps, SAST/SCA/DAST Implementation, SBOM, Supply Chain, and
              Product Security
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
