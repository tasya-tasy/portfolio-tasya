import { education } from "@/lib/data";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GraduationCap, BookOpen } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="section-beige py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <SectionTitle
            eyebrow="Education"
            title="Latar Belakang Pendidikan"
          />
        </FadeUp>

        <div className="max-w-3xl">
          {education.map((edu, i) => (
            <FadeUp key={i} delay={0.1}>
              <div className="rounded-2xl bg-white border border-border-gray p-6 sm:p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-beige flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-navy">
                      {edu.institution}
                    </h3>
                    <p className="text-sm text-gold font-semibold mt-1">
                      {edu.degree} — {edu.major}
                    </p>
                    <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full bg-beige text-xs font-semibold text-navy">
                      <BookOpen className="w-3.5 h-3.5" />
                      IPK: {edu.gpa}
                    </div>
                    <p className="mt-4 text-sm text-slate leading-relaxed">
                      {edu.description}
                    </p>
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

