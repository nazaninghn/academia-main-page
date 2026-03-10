'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Link } from '@/components/Link';
import { Logo } from '@/components/Logo';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { language } = useLanguage();
  const currentLanguage = language === 'tr' ? 'tr' : 'en';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(currentLanguage === 'tr' ? 'Mesajınız gönderildi!' : 'Your message has been sent!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#142033]">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#D9D6CE] bg-[#F5F3EE]/92 backdrop-blur-md">
        <nav className="mx-auto flex h-[78px] max-w-[1380px] items-center justify-between px-6 lg:px-8">
          <Link href="/" className="shrink-0">
            <Logo size="small" />
          </Link>

          <div className="hidden items-center gap-12 lg:flex">
            <Link href="/#what-academia-is" className="text-[16px] text-[#142033] transition hover:text-[#D89A4A]">
              {currentLanguage === 'tr' ? 'ACADEMIA Nedir' : 'What ACADEMIA Is'}
            </Link>
            <Link href="/#expertise" className="text-[16px] text-[#142033] transition hover:text-[#D89A4A]">
              {currentLanguage === 'tr' ? 'Uzmanlık' : 'Expertise'}
            </Link>
            <Link href="/#how-it-works" className="text-[16px] text-[#142033] transition hover:text-[#D89A4A]">
              {currentLanguage === 'tr' ? 'Nasıl Çalışır' : 'How It Works'}
            </Link>
            <Link href="/#references" className="text-[16px] text-[#142033] transition hover:text-[#D89A4A]">
              {currentLanguage === 'tr' ? 'Referanslar' : 'References'}
            </Link>
            <Link href="/contact" className="text-[16px] text-[#D89A4A] font-medium">
              {currentLanguage === 'tr' ? 'İletişim' : 'Contact'}
            </Link>
          </div>

          <div className="hidden lg:flex">
            <LanguageSwitcher />
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-[78px]">
        <section className="bg-[#F5F3EE] py-20 lg:py-24">
          <div className="mx-auto max-w-[1380px] px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-[220px_1fr]">
              {/* Left label */}
              <div>
                <p className="text-[12px] uppercase tracking-[0.28em] text-[#72819A]">
                  {currentLanguage === 'tr' ? 'İletişim' : 'Contact'}
                </p>
              </div>

              {/* Content */}
              <div>
                <h1 className="text-[34px] font-light leading-[1.1] tracking-[-0.03em] text-[#142033] lg:text-[46px]">
                  {currentLanguage === 'tr'
                    ? 'Kurumsal dönüşüm yolculuğunuza başlayalım.'
                    : 'Let\'s begin your institutional transformation journey.'}
                </h1>

                <p className="mt-6 max-w-[760px] text-[18px] leading-[1.9] text-[#5E7088]">
                  {currentLanguage === 'tr'
                    ? 'ACADEMIA ekibi, kurumunuzun ihtiyaçlarını anlamak ve size en uygun çözümleri sunmak için hazır.'
                    : 'The ACADEMIA team is ready to understand your organization\'s needs and provide the most suitable solutions.'}
                </p>

                <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
                  {/* Contact Form */}
                  <div>
                    <h2 className="text-[24px] font-medium text-[#142033] mb-8">
                      {currentLanguage === 'tr' ? 'Mesaj Gönderin' : 'Send a Message'}
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-[14px] font-medium text-[#142033] mb-2">
                          {currentLanguage === 'tr' ? 'Ad Soyad' : 'Full Name'}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-[#D9D6CE] rounded-lg focus:ring-2 focus:ring-[#D89A4A] focus:border-transparent bg-white text-[#142033]"
                          placeholder={currentLanguage === 'tr' ? 'Adınız Soyadınız' : 'Your Name'}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-[14px] font-medium text-[#142033] mb-2">
                          {currentLanguage === 'tr' ? 'E-posta' : 'Email'}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-[#D9D6CE] rounded-lg focus:ring-2 focus:ring-[#D89A4A] focus:border-transparent bg-white text-[#142033]"
                          placeholder="email@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-[14px] font-medium text-[#142033] mb-2">
                          {currentLanguage === 'tr' ? 'Kurum' : 'Organization'}
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-[#D9D6CE] rounded-lg focus:ring-2 focus:ring-[#D89A4A] focus:border-transparent bg-white text-[#142033]"
                          placeholder={currentLanguage === 'tr' ? 'Kurum Adı' : 'Organization Name'}
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-[14px] font-medium text-[#142033] mb-2">
                          {currentLanguage === 'tr' ? 'Mesaj' : 'Message'}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 border border-[#D9D6CE] rounded-lg focus:ring-2 focus:ring-[#D89A4A] focus:border-transparent bg-white text-[#142033]"
                          placeholder={currentLanguage === 'tr' ? 'Mesajınızı buraya yazın...' : 'Write your message here...'}
                        />
                      </div>

                      <button
                        type="submit"
                        className="inline-flex items-center gap-3 rounded-full bg-[#0F1A32] px-8 py-4 text-[16px] font-medium text-white transition hover:bg-[#D89A4A]"
                      >
                        <Send className="h-4 w-4" />
                        {currentLanguage === 'tr' ? 'Gönder' : 'Send Message'}
                      </button>
                    </form>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-8">
                    <div className="border-t border-[#D9D6CE] pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D9D6CE] bg-[#F8F6F1]">
                          <MapPin className="h-5 w-5 text-[#D89A4A]" />
                        </div>
                        <div>
                          <h3 className="text-[18px] font-medium text-[#142033] mb-2">
                            {currentLanguage === 'tr' ? 'Adres' : 'Address'}
                          </h3>
                          <p className="text-[15px] leading-[1.7] text-[#5E7088]">
                            Bilişim Vadisi - İstinye Üniversitesi<br />
                            Ayazağa Mah. Kemerburgaz Cad.<br />
                            Vadi İstanbul Park 7A Blok No:7 B<br />
                            İç Kapı No:4<br />
                            Sarıyer / İstanbul
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-[#D9D6CE] pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D9D6CE] bg-[#F8F6F1]">
                          <Phone className="h-5 w-5 text-[#D89A4A]" />
                        </div>
                        <div>
                          <h3 className="text-[18px] font-medium text-[#142033] mb-2">
                            {currentLanguage === 'tr' ? 'Telefon' : 'Phone'}
                          </h3>
                          <p className="text-[15px] leading-[1.7] text-[#5E7088]">
                            Tel: <a href="tel:+902126135880" className="hover:text-[#D89A4A] transition-colors">212-613 58 80</a><br />
                            Fax: 212-322 04 11
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-[#D9D6CE] pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D9D6CE] bg-[#F8F6F1]">
                          <Mail className="h-5 w-5 text-[#D89A4A]" />
                        </div>
                        <div>
                          <h3 className="text-[18px] font-medium text-[#142033] mb-2">
                            {currentLanguage === 'tr' ? 'E-posta' : 'Email'}
                          </h3>
                          <p className="text-[15px] leading-[1.7] text-[#5E7088]">
                            <a href="mailto:info@academiadanismanlik.com" className="hover:text-[#D89A4A] transition-colors">
                              info@academiadanismanlik.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
