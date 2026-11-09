"use client";

import { Award, Mic, TrendingUp, FileText, CheckCircle2 } from "lucide-react";
import { achievements } from "@/lib/data";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Achievements() {
  return (
    <section id="achievements" className="section-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <SectionTitle
            eyebrow="Achievements & Recognition"
            title="Prestasi & Kontribusi"
            subtitle="Pencapaian dalam program kompetisi kewirausahaan dan kontribusi berbagi wawasan."
          />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => {
            const isSpeaker = item.id.includes("pemateri");
            return (
              <FadeUp key={item.id} delay={index * 0.1}>
                <div className="h-full flex flex-col justify-between rounded-2xl bg-white border border-border-gray p-8 shadow-sm hover:shadow-md hover:border-gold/40 transition-all duration-300">
                  <div>
                    {/* Header icon + badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-beige border border-border-gray flex items-center justify-center">
                        {isSpeaker ? (
                          <Mic className="w-7 h-7 text-gold" />
                        ) : (
                          <Award className="w-7 h-7 text-gold" />
                        )}
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gold/10 text-gold border border-gold/20">
                        {isSpeaker ? (
                          <>
                            <Mic className="w-3.5 h-3.5" /> Pembicara / Speaker
                          </>
                        ) : (
                          <>
                            <TrendingUp className="w-3.5 h-3.5" /> Program Pendanaan
                          </>
                        )}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-navy mb-3 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-slate text-sm sm:text-base leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border-gray flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate font-medium">
                      <CheckCircle2 className="w-4 h-4 text-gold" /> Terverifikasi
                    </span>

                    {item.certificateUrl && (
                      <a
                        href={item.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy hover:text-gold transition-colors"
                      >
                        <FileText className="w-4 h-4 text-gold" />
                        Lihat Dokumen
                      </a>
                    )}
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

