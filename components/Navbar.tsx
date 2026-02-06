"use client";

import Link from "next/link";
import { useState } from "react";
import { Shield, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#courses", label: "Training" },
  { href: "/open-source", label: "Open Source" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cyber-bg/80 backdrop-blur-md border-b border-cyber-border">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Shield className="w-6 h-6 text-cyber-accent group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.6)] transition" />
          <span className="text-lg font-bold tracking-tight">
            <span className="text-cyber-accent">AI</span>
            <span className="text-cyber-text">AppSec</span>
            <span className="text-cyber-muted">Academy</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-cyber-muted hover:text-cyber-accent transition"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#courses"
            className="text-sm px-4 py-2 bg-cyber-accent/10 border border-cyber-accent/30 text-cyber-accent rounded hover:bg-cyber-accent/20 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-cyber-muted"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-cyber-border bg-cyber-bg/95 backdrop-blur-md">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-cyber-muted hover:text-cyber-accent transition py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
