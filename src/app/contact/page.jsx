'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Linkedin } from 'lucide-react';
import { Header } from '@/components/Header';
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
      <Header />

      {/* Main Content */}
      <main className="pt-[56px] sm:pt-[64px]">
        <section className="bg-[#F5F3EE] py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-[180px_1fr] lg:gap-16 xl:grid-cols-[220px_1fr]">
              {/* Left label */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#72819A] sm:text-[12px]">
                  {currentLanguage === 'tr' ? 'İletişim' : 'Contact'}
                </p>
              </div>

              {/* Content */}
              <div>
                <h1 className="text-[28px] font-light leading-[1.12] tracking-[-0.03em] text-[#142033] sm:text-[32px] md:text-[34px] lg:text-[46px]">
                  {currentLanguage === 'tr'
                    ? 'Kurumsal dönüşüm yolculuğunuza başlayalım.'
                    : 'Let\'s begin your institutional transformation journey.'}
                </h1>

                <p className="mt-4 max-w-[760px] text-[15px] leading-[1.8] text-[#5E7088] sm:mt-6 sm:text-[16px] md:text-[18px] md:leading-[1.9]">
                  {currentLanguage === 'tr'
                    ? 'ACADEMIA ekibi, kurumunuzun ihtiyaçlarını anlamak ve size en uygun çözümleri sunmak için hazır.'
                    : 'The ACADEMIA team is ready to understand your organization\'s needs and provide the most suitable solutions.'}
                </p>

                <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-12 lg:mt-16 lg:grid-cols-2 lg:gap-12">
                  {/* Contact Form */}
                  <div>
                    <h2 className="mb-6 text-[20px] font-medium text-[#142033] sm:mb-8 sm:text-[24px]">
                      {currentLanguage === 'tr' ? 'Mesaj Gönderin' : 'Send a Message'}
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block text-[13px] font-medium text-[#142033] sm:mb-2 sm:text-[14px]">
                          {currentLanguage === 'tr' ? 'Ad Soyad' : 'Full Name'}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-[#D9D6CE] bg-white px-3.5 py-2.5 text-[14px] text-[#142033] focus:border-transparent focus:ring-2 focus:ring-[#D89A4A] sm:px-4 sm:py-3 sm:text-[15px]"
                          placeholder={currentLanguage === 'tr' ? 'Adınız Soyadınız' : 'Your Name'}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium text-[#142033] sm:mb-2 sm:text-[14px]">
                          {currentLanguage === 'tr' ? 'E-posta' : 'Email'}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-[#D9D6CE] bg-white px-3.5 py-2.5 text-[14px] text-[#142033] focus:border-transparent focus:ring-2 focus:ring-[#D89A4A] sm:px-4 sm:py-3 sm:text-[15px]"
                          placeholder="email@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="mb-1.5 block text-[13px] font-medium text-[#142033] sm:mb-2 sm:text-[14px]">
                          {currentLanguage === 'tr' ? 'Kurum' : 'Organization'}
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-[#D9D6CE] bg-white px-3.5 py-2.5 text-[14px] text-[#142033] focus:border-transparent focus:ring-2 focus:ring-[#D89A4A] sm:px-4 sm:py-3 sm:text-[15px]"
                          placeholder={currentLanguage === 'tr' ? 'Kurum Adı' : 'Organization Name'}
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="mb-1.5 block text-[13px] font-medium text-[#142033] sm:mb-2 sm:text-[14px]">
                          {currentLanguage === 'tr' ? 'Mesaj' : 'Message'}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full rounded-lg border border-[#D9D6CE] bg-white px-3.5 py-2.5 text-[14px] text-[#142033] focus:border-transparent focus:ring-2 focus:ring-[#D89A4A] sm:px-4 sm:py-3 sm:text-[15px]"
                          placeholder={currentLanguage === 'tr' ? 'Mesajınızı buraya yazın...' : 'Write your message here...'}
                        />
                      </div>

                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-full bg-[#0F1A32] px-6 py-3 text-[14px] font-medium text-white transition hover:bg-[#D89A4A] sm:gap-3 sm:px-8 sm:py-4 sm:text-[16px]"
                      >
                        <Send className="h-4 w-4" />
                        {currentLanguage === 'tr' ? 'Gönder' : 'Send Message'}
                      </button>
                    </form>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-6 sm:space-y-8">
                    <div className="border-t border-[#D9D6CE] pt-5 sm:pt-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D9D6CE] bg-[#F8F6F1] sm:h-12 sm:w-12">
                          <MapPin className="h-4 w-4 text-[#D89A4A] sm:h-5 sm:w-5" />
                        </div>
                        <div>
                          <h3 className="mb-1.5 text-[16px] font-medium text-[#142033] sm:mb-2 sm:text-[18px]">
                            {currentLanguage === 'tr' ? 'Adres' : 'Address'}
                          </h3>
                          <p className="text-[14px] leading-[1.7] text-[#5E7088] sm:text-[15px]">
                            Bilişim Vadisi - İstinye Üniversitesi<br />
                            Ayazağa Mah. Kemerburgaz Cad.<br />
                            Vadi İstanbul Park 7A Blok No:7 B<br />
                            İç Kapı No:4<br />
                            Sarıyer / İstanbul
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-[#D9D6CE] pt-5 sm:pt-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D9D6CE] bg-[#F8F6F1] sm:h-12 sm:w-12">
                          <Phone className="h-4 w-4 text-[#D89A4A] sm:h-5 sm:w-5" />
                        </div>
                        <div>
                          <h3 className="mb-1.5 text-[16px] font-medium text-[#142033] sm:mb-2 sm:text-[18px]">
                            {currentLanguage === 'tr' ? 'Telefon' : 'Phone'}
                          </h3>
                          <p className="text-[14px] leading-[1.7] text-[#5E7088] sm:text-[15px]">
                            Tel: <a href="tel:+902126135880" className="transition-colors hover:text-[#D89A4A]">212-613 58 80</a><br />
                            Fax: 212-322 04 11
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-[#D9D6CE] pt-5 sm:pt-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D9D6CE] bg-[#F8F6F1] sm:h-12 sm:w-12">
                          <Mail className="h-4 w-4 text-[#D89A4A] sm:h-5 sm:w-5" />
                        </div>
                        <div>
                          <h3 className="mb-1.5 text-[16px] font-medium text-[#142033] sm:mb-2 sm:text-[18px]">
                            {currentLanguage === 'tr' ? 'E-posta' : 'Email'}
                          </h3>
                          <p className="text-[14px] leading-[1.7] text-[#5E7088] sm:text-[15px]">
                            <a href="mailto:info@academiadanismanlik.com" className="transition-colors hover:text-[#D89A4A]">
                              info@academiadanismanlik.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-[#D9D6CE] pt-5 sm:pt-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D9D6CE] bg-[#F8F6F1] sm:h-12 sm:w-12">
                          <Linkedin className="h-4 w-4 text-[#0A66C2] sm:h-5 sm:w-5" />
                        </div>
                        <div>
                          <h3 className="mb-1.5 text-[16px] font-medium text-[#142033] sm:mb-2 sm:text-[18px]">
                            LinkedIn
                          </h3>
                          <p className="text-[14px] leading-[1.7] text-[#5E7088] sm:text-[15px]">
                            <a href="https://www.linkedin.com/company/academia-kurumsal/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#0A66C2]">
                              academia-kurumsal
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
