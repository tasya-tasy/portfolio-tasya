import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { profile, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-navy text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="#home"
              className="font-heading text-2xl font-bold tracking-tight text-white hover:text-gold transition-colors inline-block"
            >
              {profile.name}
            </Link>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-sm">
              {profile.status} {profile.major}, {profile.university}.
              Fokus pada pengembangan sistem, pengolahan data, analisis, dan inovasi kewirausahaan.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gold text-xs font-mono">
                IPK: {profile.gpa} / 4.00
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              Navigasi Halaman
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-white hover:translate-x-0.5 transition-all py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Back to top */}
          <div className="md:col-span-2 flex md:justify-end">
            <a
              href="#home"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-gold hover:text-navy border border-white/10 text-white/80 text-xs font-semibold transition-all group"
            >
              <span>Ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            &copy; 2026 {profile.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Dirancang & dibangun secara profesional untuk personal branding & karir.
          </p>
        </div>
      </div>
    </footer>
  );
}
