"use client";

import { Terminal, Code, ShieldCheck } from "lucide-react";
import type { Course } from "@/lib/db";

const iconMap: Record<string, React.ElementType> = {
  terminal: Terminal,
  code: Code,
  shield: ShieldCheck,
};

const tierColors: Record<string, string> = {
  starter: "border-emerald-500/30 hover:border-emerald-500/60",
  professional: "border-sky-500/30 hover:border-sky-500/60",
  enterprise: "border-amber-500/30 hover:border-amber-500/60",
};

const tierAccents: Record<string, string> = {
  starter: "text-emerald-400",
  professional: "text-sky-400",
  enterprise: "text-amber-400",
};

const tierGlow: Record<string, string> = {
  starter: "shadow-emerald-500/10",
  professional: "shadow-sky-500/10",
  enterprise: "shadow-amber-500/10",
};

const tierBadge: Record<string, string> = {
  starter: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  professional: "bg-sky-500/10 text-sky-400 border-sky-500/30",
  enterprise: "bg-amber-500/10 text-amber-400 border-amber-500/30",
};

export function CourseCard({ course }: { course: Course }) {
  const Icon = iconMap[course.icon] || Terminal;
  const isPurchasable = course.price > 0;

  async function handleCheckout() {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ courseId: course.id }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert(data.error || "Unable to start checkout.");
    }
  }

  return (
    <div
      className={`group relative bg-cyber-surface rounded-lg border ${tierColors[course.tier]} transition-all duration-300 hover:shadow-lg ${tierGlow[course.tier]} flex flex-col`}
    >
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`p-3 rounded-lg bg-cyber-bg border border-cyber-border ${tierAccents[course.tier]}`}
          >
            <Icon className="w-6 h-6" />
          </div>
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full border ${tierBadge[course.tier]}`}
          >
            {course.tier}
          </span>
        </div>

        <h3 className="text-xl font-bold text-cyber-text mb-1">
          {course.title}
        </h3>
        <p className={`text-sm font-medium ${tierAccents[course.tier]} mb-3`}>
          {course.subtitle}
        </p>
        <p className="text-sm text-cyber-muted leading-relaxed">
          {course.description}
        </p>
      </div>

      {/* Details */}
      <div className="px-6 py-4 border-t border-cyber-border/50 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-cyber-muted">Duration</span>
          <span className="text-cyber-text">{course.duration}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-cyber-muted">Format</span>
          <span className="text-cyber-text">{course.format}</span>
        </div>
      </div>

      {/* Highlights */}
      <div className="px-6 py-4 border-t border-cyber-border/50 flex-1">
        <ul className="space-y-2">
          {course.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span className={`mt-0.5 ${tierAccents[course.tier]}`}>
                &gt;
              </span>
              <span className="text-cyber-muted">{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="p-6 pt-4 border-t border-cyber-border/50 mt-auto">
        <div className="flex items-end justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-cyber-text">
              {course.priceDisplay}
            </span>
            {course.price > 0 && (
              <span className="text-xs text-cyber-muted ml-1">/session</span>
            )}
          </div>
        </div>
        {isPurchasable ? (
          <button
            onClick={handleCheckout}
            className={`w-full py-3 px-4 rounded-lg font-semibold text-sm text-cyber-bg transition-all duration-200 ${
              course.tier === "professional"
                ? "bg-sky-500 hover:bg-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                : "bg-emerald-500 hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            }`}
          >
            <span className="font-mono">$</span> Enroll Now
          </button>
        ) : (
          <a
            href="https://www.linkedin.com/in/vchirrav/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 px-4 rounded-lg font-semibold text-sm text-center border border-amber-500/50 text-amber-400 hover:bg-amber-500/10 transition-all duration-200"
          >
            <span className="font-mono">&gt;</span> Request Custom Quote
          </a>
        )}
      </div>
    </div>
  );
}
