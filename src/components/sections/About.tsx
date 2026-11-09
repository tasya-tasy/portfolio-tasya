import { about, profile } from "@/lib/data";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { User, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <SectionTitle
            eyebrow="About Me"
            title="Mengenal Tasya Anisa"
            subtitle={`${profile.status} ${profile.major}, ${profile.university}`}
          />
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Bio */}
          <div className="lg:col-span-7 space-y-5">
            {about.paragraphs.map((p, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <p className="text-base text-slate leading-relaxed">{p}</p>
              </FadeUp>
            ))}
          </div>

          {/* Quick Facts */}
          <div className="lg:col-span-5">
            <FadeUp delay={0.15}>
              <div className="rounded-2xl border border-border-gray bg-beige p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-navy">
                  <User className="w-4 h-4 text-gold" />
                  Profil Singkat
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-border-gray">
                    <span className="text-slate">Nama</span>
                    <span className="font-semibold text-navy">{profile.name}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border-gray">
                    <span className="text-slate">Pendidikan</span>
                    <span className="font-semibold text-navy text-right">{profile.major}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border-gray">
                    <span className="text-slate">IPK</span>
                    <span className="font-semibold text-navy">{profile.gpa}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate">Status</span>
                    <span className="font-semibold text-navy">{profile.status}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border-gray">
                  <div className="flex items-center gap-2 text-sm font-semibold text-navy mb-3">
                    <Sparkles className="w-4 h-4 text-gold" />
                    Area of Interest
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {about.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white text-navy border border-border-gray"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

