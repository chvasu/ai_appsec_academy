"use client";

import Link from "next/link";
import { useState } from "react";
import { Shield, Menu, X, ChevronDown, Brain, ShieldCheck } from "lucide-react";

const navLinks = [
  {
    href: "/services",
    label: "Services",
    hasDropdown: true,
    submenu: [
      { href: "/services#ai-security", label: "AI/ML Security", icon: Brain },
      { href: "/services#appsec", label: "Application Security", icon: ShieldCheck },
      { href: "/services", label: "All Services" },
    ]
  },
  { href: "/why-us", label: "Why Us?" },
  { href: "/open-source", label: "Open Source" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
    setTimeoutId(id);
  };

  return (
    <header className="sticky top-0 z-50 bg-cyber-bg/80 backdrop-blur-md border-b border-cyber-border">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Shield className="w-6 h-6 text-cyber-accent group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.6)] transition" />
          <span className="text-lg font-bold tracking-tight">
            <span className="text-cyber-accent">AI</span>
            <span className="text-cyber-text">AppSec</span>
            <span className="text-cyber-muted">Consulting</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.hasDropdown ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-1 text-sm text-cyber-muted hover:text-cyber-accent transition py-2"
                >
                  {link.label}
                  <ChevronDown className="w-3 h-3" />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 pt-1 w-56">
                    <div className="bg-cyber-surface border border-cyber-border rounded-lg shadow-lg overflow-hidden">
                      {link.submenu?.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-3 text-sm text-cyber-muted hover:bg-cyber-bg hover:text-cyber-accent transition"
                        >
                          {item.icon && <item.icon className="w-4 h-4" />}
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-cyber-muted hover:text-cyber-accent transition"
              >
                {link.label}
              </Link>
            )
          ))}
          <Link
            href="/services"
            className="text-sm px-4 py-2 bg-cyber-accent/10 border border-cyber-accent/30 text-cyber-accent rounded hover:bg-cyber-accent/20 transition"
          >
            Book a Session
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
              link.hasDropdown ? (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm text-cyber-muted hover:text-cyber-accent transition py-2 block"
                  >
                    {link.label}
                  </Link>
                  <div className="ml-4 mt-2 space-y-2">
                    {link.submenu?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2 text-xs text-cyber-muted hover:text-cyber-accent transition py-2"
                      >
                        {item.icon && <item.icon className="w-3 h-3" />}
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-cyber-muted hover:text-cyber-accent transition py-2"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
