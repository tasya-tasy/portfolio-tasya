import { experiences } from "@/lib/data";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Briefcase, Rocket, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="section-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <SectionTitle
            eyebrow="Experience"
            title="Pengalaman Profesional"
            subtitle="Rangkaian pengalaman yang membentuk keterampilan teknis dan manajerial."
          />
        </FadeUp>

        {/* Vertical Timeline */}
        <div className="relative max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border-gray" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <FadeUp key={exp.id} delay={i * 0.1}>
                <div className="relative pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-12 h-12 rounded-xl bg-beige border border-border-gray flex items-center justify-center z-10">
                    {exp.type === "Internship" ? (
                      <Briefcase className="w-5 h-5 text-navy" />
                    ) : (
                      <Rocket className="w-5 h-5 text-gold" />
                    )}
                  </div>

                  <div className="rounded-2xl bg-white border border-border-gray p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-beige text-navy border border-border-gray">
                        {exp.type}
                      </span>
                      <span className="text-xs text-slate-light">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-navy mb-0.5">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-semibold text-gold mb-3">
                      {exp.company}
                    </p>
                    <p className="text-sm text-slate leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.tasks.map((task, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-slate"
                        >
                          <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

