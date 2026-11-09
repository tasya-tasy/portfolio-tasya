"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink, Layers, Cpu, Database, Eye } from "lucide-react";
import { projects } from "@/lib/data";
import { normalizeImagePath } from "@/lib/utils";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionTitle } from "@/components/ui/SectionTitle";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Projects() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="projects" className="section-beige py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <SectionTitle
            eyebrow="Featured Projects"
            title="Proyek & Karya Teknologi"
            subtitle="Implementasi teknologi terkini dalam pemecahan masalah nyata industri dan analisis data citra."
          />
        </FadeUp>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <FadeUp key={project.id || idx} delay={0.1}>
              <div className="rounded-3xl bg-white border border-border-gray shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Visual Presentation / Screenshot Area */}
                  <div className="lg:col-span-5 bg-navy-mid/5 border-b lg:border-b-0 lg:border-r border-border-gray p-6 sm:p-8 flex flex-col justify-center">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-navy-mid border border-border-gray/50 shadow-inner flex items-center justify-center">
                      {!imageError && normalizeImagePath(project.images?.[0]) ? (
                        <Image
                          src={normalizeImagePath(project.images?.[0])}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 400px"
                          className="object-cover"
                          onError={() => setImageError(true)}
                        />
                      ) : null}

                      {/* Visual Graphic Representation if image is placeholder/missing */}
                      {imageError || !project.images?.[0] ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-navy to-navy-mid text-white">
                          <div className="w-14 h-14 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center mb-4 text-gold">
                            <Cpu className="w-7 h-7" />
                          </div>
                          <p className="font-heading text-lg font-bold text-white mb-1">
                            ResNet-50 CNN Architecture
                          </p>
                          <p className="text-xs text-white/60 max-w-xs">
                            Sistem Deteksi Citra Borescope Ruang Bakar Mesin Pembangkit Listrik
                          </p>
                          <div className="mt-4 flex items-center gap-2 text-[11px] text-gold font-mono tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10">
                            <Layers className="w-3.5 h-3.5" /> DEEP LEARNING MODEL
                          </div>
                        </div>
                      ) : null}
                    </div>

                    <div className="mt-4 flex items-center justify-between text-xs text-slate px-1">
                      <span className="inline-flex items-center gap-1.5 font-medium">
                        <Eye className="w-3.5 h-3.5 text-gold" /> Image Classification & Analysis
                      </span>
                      <span className="font-mono text-slate-light">v1.0</span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:col-span-7 p-6 sm:p-8 sm:py-10 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20">
                          {project.category || "Artificial Intelligence"}
                        </span>
                        <span className="text-xs text-slate">Tugas Akhir / Skripsi</span>
                      </div>

                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy leading-snug mb-3">
                        {project.title}
                      </h3>

                      <p className="text-slate text-sm sm:text-base leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Architecture Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-beige border border-border-gray/60">
                        <div className="flex items-start gap-2.5">
                          <Cpu className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <div>
                            <div className="text-xs font-semibold text-navy">Deep CNN (ResNet-50)</div>
                            <div className="text-[11px] text-slate">Ekstraksi fitur residual untuk klasifikasi akurat</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-2.5">
                          <Database className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <div>
                            <div className="text-xs font-semibold text-navy">Citra Borescope Mesin</div>
                            <div className="text-[11px] text-slate">Analisis inspeksi internal kondisi ruang bakar</div>
                          </div>
                        </div>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="mb-6">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate mb-2">
                          Teknologi & Tools
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-navy text-white"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 border-t border-border-gray flex flex-wrap items-center gap-3">
                      <a
                        href={project.demoUrl}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-navy text-white text-xs font-semibold hover:bg-navy-mid transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-gold" />
                        Preview Sistem
                      </a>
                      <a
                        href={project.repoUrl}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border-gray text-navy text-xs font-semibold hover:bg-beige transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        Source Code Repository
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
