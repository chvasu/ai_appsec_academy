import { getCourses } from "@/lib/db";
import { CourseCard } from "@/components/CourseCard";
import { Brain, Shield } from "lucide-react";

export default async function CoursesPage() {
  const courses = await getCourses();

  // Separate courses by category
  const aiCourses = courses.filter((course) => course.category === "ai");
  const appSecCourses = courses.filter(
    (course) => course.category === "appsec" || course.category === "general"
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <p className="text-sm text-cyber-accent font-mono mb-2">
          &gt; ls ./training-programs --detailed
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-cyber-text mb-4">
          Training Programs
        </h1>
        <p className="text-cyber-muted max-w-xl mx-auto">
          Choose the program that matches your threat model and skill level.
        </p>
      </div>

      {/* AI/ML Security Courses */}
      <section id="ai-security" className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-lg bg-cyber-bg border border-emerald-500/30">
            <Brain className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-cyber-text">
              AI/ML Security Training
            </h2>
            <p className="text-sm text-cyber-muted">
              Agentic AI, LLM Security, GenAI Tools, and AI-Assisted Development
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {aiCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Application Security Courses */}
      <section id="appsec" className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-lg bg-cyber-bg border border-sky-500/30">
            <Shield className="w-6 h-6 text-sky-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-cyber-text">
              Application Security Training
            </h2>
            <p className="text-sm text-cyber-muted">
              DevSecOps, SAST/SCA/DAST Tools, SBOM, Supply Chain, and Product Security
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {appSecCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}
