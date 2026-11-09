"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, Eye, X, ExternalLink, Calendar, ShieldCheck } from "lucide-react";
import { certificates } from "@/lib/data";
import { normalizeImagePath } from "@/lib/utils";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<(typeof certificates)[0] | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="certificates" className="section-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <SectionTitle
            eyebrow="Credentials & Certifications"
            title="Sertifikasi & Pelatihan"
            subtitle="Dokumentasi pencapaian, lisensi profesional, dan sertifikasi keahlian."
          />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => {
            const hasError = failedImages[cert.id];

            return (
              <FadeUp key={cert.id} delay={index * 0.08}>
                <div className="group rounded-2xl bg-white border border-border-gray shadow-sm hover:shadow-md hover:border-gold/50 transition-all duration-300 overflow-hidden flex flex-col justify-between">
                  {/* Thumbnail / Image Container */}
                  <div>
                    <div className="relative w-full aspect-[4/3] bg-beige border-b border-border-gray overflow-hidden">
                      {!hasError && normalizeImagePath(cert.imageUrl) ? (
                        <Image
                          src={normalizeImagePath(cert.imageUrl)}
                          alt={cert.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={() => handleImageError(cert.id)}
                        />
                      ) : null}

                      {/* Elegant Certificate Card graphic fallback */}
                      {hasError && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-beige to-white">
                          <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center mb-3">
                            <Award className="w-6 h-6 text-gold" />
                          </div>
                          <span className="text-xs font-semibold text-navy uppercase tracking-wider">
                            Sertifikat Resmi
                          </span>
                          <span className="text-[11px] text-slate mt-1 max-w-[200px] truncate">
                            {cert.title}
                          </span>
                        </div>
                      )}

                      {/* Quick view button overlay */}
                      <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button
                          type="button"
                          onClick={() => setSelectedCert(cert)}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-navy font-semibold text-xs shadow-md hover:bg-gold hover:text-white transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" /> Preview Sertifikat
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center justify-between text-[11px] text-slate mb-2">
                        <span className="font-semibold text-gold uppercase tracking-wider">
                          {cert.issuer}
                        </span>
                        {cert.year && (
                          <span className="inline-flex items-center gap-1 text-slate-light">
                            <Calendar className="w-3 h-3" /> {cert.year}
                          </span>
                        )}
                      </div>

                      <h3 className="font-heading text-base font-bold text-navy line-clamp-2 leading-snug">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  {/* Footer link */}
                  <div className="px-5 py-3 border-t border-border-gray bg-beige/40 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-slate font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-gold" /> Terakreditasi
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="text-xs font-semibold text-navy hover:text-gold transition-colors inline-flex items-center gap-1"
                    >
                      Detail
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Modal / Lightbox for Certificate Preview */}
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-xs"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-border-gray overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-border-gray mb-6">
                <div>
                  <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                    {selectedCert.issuer}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-navy mt-1">
                    {selectedCert.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-xl text-slate hover:text-navy hover:bg-beige transition-colors"
                  aria-label="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-beige border border-border-gray mb-6 flex items-center justify-center">
                {!failedImages[selectedCert.id] && normalizeImagePath(selectedCert.imageUrl) ? (
                  <Image
                    src={normalizeImagePath(selectedCert.imageUrl)}
                    alt={selectedCert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-contain"
                    onError={() => handleImageError(selectedCert.id)}
                  />
                ) : (
                  <div className="p-8 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center mb-4">
                      <Award className="w-8 h-8 text-gold" />
                    </div>
                    <p className="font-heading text-lg font-bold text-navy mb-1">
                      {selectedCert.title}
                    </p>
                    <p className="text-xs text-slate max-w-sm">
                      Diterbitkan oleh {selectedCert.issuer}. Dokumen fisik/digital terverifikasi.
                    </p>
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2.5 rounded-xl border border-border-gray text-xs font-semibold text-navy hover:bg-beige transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

