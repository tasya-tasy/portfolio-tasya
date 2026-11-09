"use client";

import {
  Code2,
  BrainCircuit,
  Database,
  FileCheck,
  Binary,
  Layers,
  MessageSquare,
  Users2,
  Lightbulb,
  LineChart,
  Clock,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { skillCategories } from "@/lib/data";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionTitle } from "@/components/ui/SectionTitle";

// Icon mapping for skills
const skillIconMap: Record<string, React.ReactNode> = {
  "Website Development": <Code2 className="w-5 h-5 text-gold" />,
  "Data Management": <Database className="w-5 h-5 text-gold" />,
  "System Testing": <FileCheck className="w-5 h-5 text-gold" />,
  "System Analysis": <Binary className="w-5 h-5 text-gold" />,
  "Digital Image Processing": <Layers className="w-5 h-5 text-gold" />,
  "Deep Learning": <BrainCircuit className="w-5 h-5 text-gold" />,
  "Communication": <MessageSquare className="w-5 h-5 text-gold" />,
  "Teamwork": <Users2 className="w-5 h-5 text-gold" />,
  "Problem Solving": <Lightbulb className="w-5 h-5 text-gold" />,
  "Analytical Thinking": <LineChart className="w-5 h-5 text-gold" />,
  "Time Management": <Clock className="w-5 h-5 text-gold" />,
  "Entrepreneurship": <Briefcase className="w-5 h-5 text-gold" />,
};

export function Skills() {
  return (
    <section id="skills" className="section-beige py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <SectionTitle
            eyebrow="Competencies & Skills"
            title="Keahlian & Kompetensi"
            subtitle="Kombinasi kemampuan teknis informatika dan kompetensi profesional manajerial."
          />
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <FadeUp key={category.title} delay={catIndex * 0.1}>
              <div className="rounded-3xl bg-white border border-border-gray p-8 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border-gray">
                    <div className="w-10 h-10 rounded-xl bg-navy text-gold flex items-center justify-center font-bold text-sm">
                      0{catIndex + 1}
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-navy">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate">
                        {category.title === "Technical Skills"
                          ? "Keterampilan teknologi, sistem informasi & AI"
                          : "Kemampuan interpersonal & kepemimpinan"}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-3 p-3.5 rounded-xl bg-beige/60 border border-border-gray/70 hover:border-gold/50 hover:bg-beige transition-colors"
                      >
                        <div className="w-9 h-9 rounded-lg bg-white border border-border-gray flex items-center justify-center shrink-0 shadow-2xs">
                          {skillIconMap[skill] || (
                            <CheckCircle2 className="w-4 h-4 text-gold" />
                          )}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-navy">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-border-gray flex items-center justify-between text-xs text-slate">
                  <span>Total Kompetensi</span>
                  <span className="font-semibold text-navy">
                    {category.skills.length} Bidang
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

