"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  Check,
  Copy,
  Download,
} from "lucide-react";
import { contact, profile } from "@/lib/data";
import { formatWhatsAppUrl } from "@/lib/utils";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionTitle } from "@/components/ui/SectionTitle";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

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

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${contact.email}?subject=Inquiry from Portfolio - ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.email)}`;
    setFormSent(true);
  };

  return (
    <section id="contact" className="section-beige py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <SectionTitle
            eyebrow="Get In Touch"
            title="Mari Terhubung & Berkolaborasi"
            subtitle="Terbuka untuk peluang kerja, diskusi proyek teknologi, analisis sistem, atau kolaborasi bisnis."
          />
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            <FadeUp delay={0.1}>
              <div className="rounded-3xl bg-white border border-border-gray p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-2">
                    Informasi Kontak
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    Silakan hubungi saya melalui jalur komunikasi berikut untuk respon cepat.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-beige/60 border border-border-gray/70">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-border-gray flex items-center justify-center text-gold">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate">
                          Email
                        </div>
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-xs sm:text-sm font-semibold text-navy hover:text-gold transition-colors truncate max-w-[170px] sm:max-w-none block"
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="p-2 rounded-lg text-slate hover:text-navy hover:bg-white transition-colors"
                      title="Salin Email"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* WhatsApp */}
                  <a
                    href={formatWhatsAppUrl(contact.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-beige/60 border border-border-gray/70 hover:border-gold/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-border-gray flex items-center justify-center text-gold">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate">
                        WhatsApp
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-navy">
                        Kirim Pesan WhatsApp
                      </div>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-beige/60 border border-border-gray/70 hover:border-gold/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-border-gray flex items-center justify-center text-gold">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate">
                        LinkedIn
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-navy">
                        Profil LinkedIn
                      </div>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-beige/60 border border-border-gray/70 hover:border-gold/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-border-gray flex items-center justify-center text-gold">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate">
                        GitHub
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-navy">
                        Repositori GitHub
                      </div>
                    </div>
                  </a>
                </div>

                <div className="pt-4 border-t border-border-gray">
                  <a
                    href={profile.cvUrl}
                    download
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navy text-white font-semibold text-sm hover:bg-navy-mid transition-colors shadow-sm"
                  >
                    <Download className="w-4 h-4 text-gold" />
                    Download Curriculum Vitae (CV)
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.2}>
              <div className="rounded-3xl bg-white border border-border-gray p-8 sm:p-10 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-navy mb-2">
                  Kirim Pesan Langsung
                </h3>
                <p className="text-slate text-sm leading-relaxed mb-6">
                  Tinggalkan pesan Anda di bawah ini untuk memulai percakapan profesional.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate mb-1.5">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Masukkan nama Anda"
                      className="w-full px-4 py-3 rounded-xl border border-border-gray bg-beige/30 text-navy text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate mb-1.5">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@perusahaan.com"
                      className="w-full px-4 py-3 rounded-xl border border-border-gray bg-beige/30 text-navy text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate mb-1.5">
                      Pesan atau Penawaran
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tuliskan pesan, penawaran kerja sama, atau diskusi di sini..."
                      className="w-full px-4 py-3 rounded-xl border border-border-gray bg-beige/30 text-navy text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gold text-navy font-bold text-sm hover:bg-gold-light transition-colors shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    Kirim Pesan
                  </button>

                  {formSent && (
                    <div className="p-3 rounded-xl bg-green-50 border border-green-200 text-green-800 text-xs text-center font-medium">
                      Pesan Anda dialihkan ke aplikasi email klien untuk dikirimkan langsung.
                    </div>
                  )}
                </form>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
