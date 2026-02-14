"use client";

import { useState } from "react";
import {
  Terminal,
  Code,
  ShieldCheck,
  Clock,
  Globe,
  Minus,
  Plus,
  ChevronDown,
  Check,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import type { Course } from "@/lib/db";
import { TermsCheckbox } from "./TermsCheckbox";

const iconMap: Record<string, React.ElementType> = {
  terminal: Terminal,
  code: Code,
  shield: ShieldCheck,
};

const tierAccents: Record<string, string> = {
  starter: "text-emerald-400",
  professional: "text-sky-400",
  enterprise: "text-amber-400",
};

const tierBorderAccent: Record<string, string> = {
  starter: "border-emerald-500/40",
  professional: "border-sky-500/40",
  enterprise: "border-amber-500/40",
};

const tierBgHover: Record<string, string> = {
  starter: "hover:bg-emerald-500/5",
  professional: "hover:bg-sky-500/5",
  enterprise: "hover:bg-amber-500/5",
};

const tierIndicator: Record<string, string> = {
  starter: "bg-emerald-500",
  professional: "bg-sky-500",
  enterprise: "bg-amber-500",
};

export function CourseCard({ course }: { course: Course }) {
  const Icon = iconMap[course.icon] || Terminal;
  const isBookable = course.hourlyRate > 0;
  const [expanded, setExpanded] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [hours, setHours] = useState(course.minHours || 1);

  const totalPrice = course.hourlyRate * hours;

  async function handleCheckout() {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ courseId: course.id, hours }),
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
      className={`group relative bg-cyber-surface rounded-xl border border-cyber-border transition-all duration-300 overflow-hidden ${
        expanded
          ? `${tierBorderAccent[course.tier]} shadow-lg`
          : "hover:border-cyber-border/80"
      }`}
    >
      {/* Left accent bar */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 ${tierIndicator[course.tier]} ${
          expanded ? "opacity-100" : "opacity-40 group-hover:opacity-70"
        } transition-opacity`}
      />

      {/* ── Collapsed Header (always visible) ── */}
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className={`w-full text-left px-6 py-5 pl-7 ${tierBgHover[course.tier]} transition-colors`}
      >
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div
            className={`p-2.5 rounded-lg bg-cyber-bg border border-cyber-border/60 ${tierAccents[course.tier]} shrink-0`}
          >
            <Icon className="w-5 h-5" />
          </div>

          {/* Title & subtitle */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-cyber-text leading-tight">
              {course.title}
            </h3>
            <p className="text-sm text-cyber-muted mt-0.5 truncate">
              {course.subtitle}
            </p>
          </div>

          {/* Rate & expand */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="text-right hidden sm:block">
              <span className={`text-lg font-bold ${tierAccents[course.tier]}`}>
                {course.hourlyRateDisplay}
              </span>
              {isBookable && (
                <span className="text-xs text-cyber-muted block">/hour</span>
              )}
            </div>
            <ChevronDown
              className={`w-5 h-5 text-cyber-muted transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </button>

      {/* ── Expanded Content ── */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          expanded
            ? "max-h-[1200px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-6 pl-7 pb-6">
          {/* Description */}
          <p className="text-sm text-cyber-muted leading-relaxed mb-5 max-w-3xl">
            {course.description}
          </p>

          {/* Two-column: highlights + booking */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Highlights */}
            <div className="flex-1">
              <h4 className="text-xs font-semibold text-cyber-text uppercase tracking-wider mb-3">
                Engagement Scope
              </h4>
              <ul className="space-y-2">
                {course.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${tierAccents[course.tier]}`}
                    />
                    <span className="text-cyber-muted">{h}</span>
                  </li>
                ))}
              </ul>

              {/* Availability */}
              <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-cyber-border/30">
                <div className="flex items-center gap-2 text-xs text-cyber-muted">
                  <Clock className="w-3.5 h-3.5 text-cyber-accent shrink-0" />
                  <span>Contacted within 24 hours of booking</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-cyber-muted">
                  <Globe className="w-3.5 h-3.5 text-cyber-accent shrink-0" />
                  <span>All time zones, including weekends</span>
                </div>
              </div>

              {/* Reference link */}
              {course.reference && (
                <div className="mt-4 pt-4 border-t border-cyber-border/30">
                  {course.reference.url.startsWith("/") ? (
                    <Link
                      href={course.reference.url}
                      className={`inline-flex items-center gap-1.5 text-sm font-medium ${tierAccents[course.tier]} hover:underline`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                      {course.reference.label}
                    </Link>
                  ) : (
                    <a
                      href={course.reference.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-sm font-medium ${tierAccents[course.tier]} hover:underline`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                      {course.reference.label}
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Booking panel */}
            <div className="lg:w-80 shrink-0">
              <div className="bg-cyber-bg rounded-lg border border-cyber-border/60 p-5">
                {isBookable ? (
                  <>
                    {/* Rate display (mobile) */}
                    <div className="sm:hidden flex justify-between text-sm mb-4">
                      <span className="text-cyber-muted">Rate</span>
                      <span className={`font-bold ${tierAccents[course.tier]}`}>
                        {course.hourlyRateDisplay}/hr
                      </span>
                    </div>

                    {/* Hour selector */}
                    <label className="block text-xs text-cyber-muted mb-2">
                      Select hours
                    </label>
                    <div className="flex items-center gap-3 mb-4">
                      <button
                        type="button"
                        onClick={() =>
                          setHours((h) => Math.max(course.minHours, h - 1))
                        }
                        disabled={hours <= course.minHours}
                        className="p-1.5 rounded-md bg-cyber-surface border border-cyber-border text-cyber-muted hover:text-cyber-accent hover:border-cyber-accent/50 disabled:opacity-30 disabled:cursor-not-allowed transition"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <div className="flex-1 text-center">
                        <span className="text-2xl font-bold text-cyber-text">
                          {hours}
                        </span>
                        <span className="text-sm text-cyber-muted ml-1">
                          {hours === 1 ? "hour" : "hours"}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setHours((h) => Math.min(course.maxHours, h + 1))
                        }
                        disabled={hours >= course.maxHours}
                        className="p-1.5 rounded-md bg-cyber-surface border border-cyber-border text-cyber-muted hover:text-cyber-accent hover:border-cyber-accent/50 disabled:opacity-30 disabled:cursor-not-allowed transition"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Total */}
                    <div className="flex items-end justify-between mb-4 pb-4 border-b border-cyber-border/30">
                      <div>
                        <span className="text-xs text-cyber-muted block">
                          Total
                        </span>
                        <span className="text-2xl font-bold text-cyber-text">
                          ${totalPrice.toLocaleString()}
                        </span>
                      </div>
                      <span className="text-xs text-cyber-muted">
                        {course.hourlyRateDisplay}/hr &times; {hours}
                      </span>
                    </div>

                    <p className="text-xs text-cyber-muted mb-3">
                      Need more than {course.maxHours} hours?{" "}
                      <a
                        href="https://www.linkedin.com/in/vchirrav/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyber-accent hover:underline"
                      >
                        Request a custom quote
                      </a>
                    </p>

                    <TermsCheckbox
                      onAcceptChange={setTermsAccepted}
                      className="mb-4"
                    />
                    <button
                      onClick={handleCheckout}
                      disabled={!termsAccepted}
                      className={`w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 ${
                        termsAccepted
                          ? `text-cyber-bg ${
                              course.tier === "professional"
                                ? "bg-sky-500 hover:bg-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                                : "bg-emerald-500 hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                            }`
                          : "bg-gray-600 opacity-50 cursor-not-allowed text-gray-400"
                      }`}
                    >
                      <span className="font-mono">$</span> Book {hours}{" "}
                      {hours === 1 ? "Hour" : "Hours"} Now
                    </button>
                  </>
                ) : (
                  <>
                    <div className="text-center mb-4">
                      <span className="text-2xl font-bold text-cyber-text">
                        {course.hourlyRateDisplay}
                      </span>
                      <p className="text-xs text-cyber-muted mt-1">
                        Multi-day engagement scoped to your needs
                      </p>
                    </div>
                    <TermsCheckbox
                      onAcceptChange={setTermsAccepted}
                      className="mb-4"
                    />
                    {termsAccepted ? (
                      <a
                        href="https://www.linkedin.com/in/vchirrav/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-3 px-4 rounded-lg font-semibold text-sm text-center border border-amber-500/50 text-amber-400 hover:bg-amber-500/10 transition-all duration-200"
                      >
                        <span className="font-mono">&gt;</span> Request Custom
                        Quote
                      </a>
                    ) : (
                      <span className="block w-full py-3 px-4 rounded-lg font-semibold text-sm text-center border border-gray-600/50 text-gray-500 opacity-50 cursor-not-allowed">
                        <span className="font-mono">&gt;</span> Request Custom
                        Quote
                      </span>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
