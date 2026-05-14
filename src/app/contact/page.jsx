'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Linkedin, ArrowRight, Clock } from 'lucide-react';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { language } = useLanguage();
  const tr = language === 'tr';

  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white text-[#1E293B]">
      <Header />

      <main className="pt-[68px]">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-[#F0EDE8] bg-white py-16 lg:py-20">
          {/* Subtle glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2" style={{ background: 'radial-gradient(circle at 70% 40%, rgba(249,115,66,0.05), transparent 50%)' }} />

          <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
              <div className="hidden w-[160px] shrink-0 lg:block">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#64748B]">
                  {tr ? 'İletişim' : 'Contact'}
                </p>
              </div>
              <div className="max-w-[640px]">
                <h1 className="text-[32px] font-light leading-[1.08] tracking-[-0.03em] text-[#1E293B] sm:text-[40px] lg:text-[48px]">
                  {tr ? 'Kurumsal dönüşüm yolculuğunuza başlayalım.' : "Let's begin your institutional transformation journey."}
                </h1>
                <p className="mt-5 max-w-[520px] text-[15px] leading-[1.9] text-[#475569]">
                  {tr
                    ? 'ACADEMIA ekibi, kurumunuzun ihtiyaçlarını anlamak ve size en uygun çözümleri sunmak için hazır.'
                    : "The ACADEMIA team is ready to understand your organization's needs and provide the most suitable solutions."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Form + Info */}
        <section className="relative bg-white py-16 lg:py-24">
          {/* Background atmosphere */}
          <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(249,115,66,0.03), transparent 40%), radial-gradient(circle at 80% 30%, rgba(30,41,59,0.02), transparent 40%)' }} />

          <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">

              {/* Form */}
              <div className="rounded-2xl border border-[rgba(15,23,42,0.06)] bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.03)] sm:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center gap-4 py-16 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F97342]/10">
                      <Send className="h-7 w-7 text-[#F97342]" />
                    </div>
                    <p className="text-[20px] font-bold text-[#1E293B]">
                      {tr ? 'Mesajınız gönderildi!' : 'Message sent!'}
                    </p>
                    <p className="text-[15px] text-[#475569]">
                      {tr ? 'En kısa sürede sizinle iletişime geçeceğiz.' : "We'll get back to you within 24 hours."}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label className="mb-2.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#64748B]">
                          {tr ? 'Ad Soyad' : 'Full Name'} *
                        </label>
                        <input
                          type="text" name="name" value={formData.name} onChange={handleChange} required
                          className="w-full rounded-xl border border-[rgba(15,23,42,0.08)] bg-white px-5 py-3.5 text-[14px] text-[#1E293B] outline-none transition focus:border-[#F97342] focus:shadow-[0_0_0_4px_rgba(249,115,66,0.08)]"
                          placeholder={tr ? 'Adınız Soyadınız' : 'Your full name'}
                        />
                      </div>
                      <div>
                        <label className="mb-2.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#64748B]">
                          {tr ? 'E-posta' : 'Email'} *
                        </label>
                        <input
                          type="email" name="email" value={formData.email} onChange={handleChange} required
                          className="w-full rounded-xl border border-[rgba(15,23,42,0.08)] bg-white px-5 py-3.5 text-[14px] text-[#1E293B] outline-none transition focus:border-[#F97342] focus:shadow-[0_0_0_4px_rgba(249,115,66,0.08)]"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#64748B]">
                        {tr ? 'Kurum' : 'Organization'}
                      </label>
                      <input
                        type="text" name="company" value={formData.company} onChange={handleChange}
                        className="w-full rounded-xl border border-[rgba(15,23,42,0.08)] bg-white px-5 py-3.5 text-[14px] text-[#1E293B] outline-none transition focus:border-[#F97342] focus:shadow-[0_0_0_4px_rgba(249,115,66,0.08)]"
                        placeholder={tr ? 'Kurum adı' : 'Organization name'}
                      />
                    </div>
                    <div>
                      <label className="mb-2.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#64748B]">
                        {tr ? 'Mesaj' : 'Message'} *
                      </label>
                      <textarea
                        name="message" value={formData.message} onChange={handleChange} required rows={5}
                        className="w-full resize-none rounded-xl border border-[rgba(15,23,42,0.08)] bg-white px-5 py-3.5 text-[14px] text-[#1E293B] outline-none transition focus:border-[#F97342] focus:shadow-[0_0_0_4px_rgba(249,115,66,0.08)]"
                        placeholder={tr ? 'Nasıl yardımcı olabiliriz?' : 'How can we help?'}
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#1E293B] px-8 py-4 text-[14px] font-bold text-white shadow-[0_4px_16px_rgba(30,41,59,0.2)] transition hover:bg-[#334155] active:scale-[0.98] sm:w-auto"
                    >
                      <Send className="h-4 w-4" />
                      {tr ? 'Mesajı Gönder' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>

              {/* Right: Info */}
              <div className="space-y-5">
                {/* Response time */}
                <div className="flex items-center gap-3 rounded-xl border border-[#F97342]/15 bg-[#F97342]/[0.03] p-4">
                  <Clock className="h-4 w-4 text-[#F97342]" strokeWidth={1.5} />
                  <p className="text-[12px] font-medium text-[#475569]">
                    {tr ? 'Tipik yanıt süresi: 24 saat içinde' : 'Typical response time: within 24 hours'}
                  </p>
                </div>

                {/* Contact cards */}
                <div className="rounded-xl border border-[rgba(15,23,42,0.06)] bg-white p-5 shadow-[0_4px_16px_rgba(15,23,42,0.02)]">
                  <div className="space-y-5">
                    <div>
                      <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#94A3B8]">{tr ? 'Ofis' : 'Office'}</p>
                      <p className="text-[13px] font-medium leading-[1.7] text-[#475569]">
                        Bilişim Vadisi – İstinye Üniversitesi<br />
                        Vadi İstanbul Park 7A Blok No:7 B<br />
                        Sarıyer / İstanbul
                      </p>
                    </div>
                    <div className="h-px bg-[#F0EDE8]" />
                    <div>
                      <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#94A3B8]">{tr ? 'Telefon' : 'Phone'}</p>
                      <a href="tel:+902126135880" className="text-[13px] font-medium text-[#475569] transition hover:text-[#F97342]">
                        +90 212 613 58 80
                      </a>
                    </div>
                    <div className="h-px bg-[#F0EDE8]" />
                    <div>
                      <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#94A3B8]">{tr ? 'E-posta' : 'Email'}</p>
                      <a href="mailto:info@academiadanismanlik.com" className="text-[13px] font-medium text-[#475569] transition hover:text-[#F97342]">
                        info@academiadanismanlik.com
                      </a>
                    </div>
                    <div className="h-px bg-[#F0EDE8]" />
                    <div>
                      <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#94A3B8]">LinkedIn</p>
                      <a href="https://www.linkedin.com/company/academia-kurumsal/" target="_blank" rel="noopener noreferrer" className="text-[13px] font-medium text-[#475569] transition hover:text-[#F97342]">
                        academia-kurumsal
                      </a>
                    </div>
                  </div>
                </div>

                {/* Consultation note */}
                <div className="rounded-xl border border-[rgba(15,23,42,0.06)] bg-white p-5 shadow-[0_4px_16px_rgba(15,23,42,0.02)]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#94A3B8]">
                    {tr ? 'Danışmanlık' : 'Consultation'}
                  </p>
                  <p className="mt-2 text-[13px] font-medium leading-[1.8] text-[#475569]">
                    {tr
                      ? 'İlk görüşme ücretsizdir. Kurumunuzun ihtiyaçlarını birlikte değerlendirelim.'
                      : 'Initial consultation is complimentary. Let us assess your institutional needs together.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
