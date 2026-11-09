"use client";

import Image from "next/image";
import { ArrowDown, Download, Mail } from "lucide-react";
import { profile, contact } from "@/lib/data";
import { normalizeImagePath } from "@/lib/utils";
import { FadeUp } from "@/components/ui/FadeUp";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-navy overflow-hidden"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 text-white">
            <FadeUp>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">
                {profile.status} — {profile.major}
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
                {profile.name}
              </h1>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-lg sm:text-xl text-white/70 font-medium mb-4 leading-relaxed">
                {profile.headline}
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-base text-white/55 leading-relaxed max-w-xl mb-8">
                {profile.shortBio}
              </p>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold text-navy font-semibold text-sm hover:bg-gold-light transition-colors"
                >
                  View Portfolio
                  <ArrowDown className="w-4 h-4" />
                </a>
                <a
                  href={profile.cvUrl}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/25 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/25 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Contact Me
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <FadeUp delay={0.2}>
              <div className="relative">
                {/* Gold frame ring */}
                <div className="absolute -inset-1.5 rounded-full border-2 border-gold/30" />
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white/10 bg-navy-mid">
                  <Image
                    src={normalizeImagePath(profile.avatarUrl)}
                    alt={`Foto ${profile.name}`}
                    fill
                    priority
                    sizes="(max-width: 768px) 224px, 288px"
                    className="object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                    }}
                  />
                  {/* Fallback initials */}
                  <div className="absolute inset-0 flex items-center justify-center text-5xl font-heading font-bold text-gold/40">
                    TA
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* Bottom fade-to-white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

