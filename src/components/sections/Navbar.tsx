"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border-gray"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="#home"
            className={cn(
              "font-heading text-lg font-bold tracking-tight transition-colors",
              scrolled ? "text-navy" : "text-white"
            )}
          >
            {profile.name}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                  scrolled
                    ? "text-slate hover:text-navy hover:bg-beige"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={profile.cvUrl}
              download
              className={cn(
                "ml-2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md text-sm font-semibold transition-colors border",
                scrolled
                  ? "border-navy text-navy hover:bg-navy hover:text-white"
                  : "border-white/40 text-white hover:bg-white hover:text-navy"
              )}
            >
              <Download className="w-3.5 h-3.5" />
              CV
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-md transition-colors",
              scrolled ? "text-navy" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-border-gray shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-navy hover:bg-beige transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={profile.cvUrl}
              download
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-gold hover:bg-beige transition-colors"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

