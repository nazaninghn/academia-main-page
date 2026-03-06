'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Text } from '@/components/Text';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/translations';

export default function ContactPage() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(t.contact.successMessage);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-accent dark:bg-primary pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Background */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 relative">
          <div className="absolute inset-0 -z-10 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&h=400&fit=crop&q=80" 
              alt="Contact us"
              className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
            />
          </div>
          <Text className="inline-block text-[#B8860B] text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2 sm:mb-3">{t.contact.subtitle}</Text>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-medium text-primary dark:text-accent mb-3 sm:mb-4 px-4">
            {t.contact.title}
          </h1>
          <p className="text-primary/70 dark:text-accent/70 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto px-4">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-serif font-medium text-primary dark:text-accent mb-6">
              {t.contact.formTitle}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary dark:text-accent mb-2">
                  Adınız Soyadınız
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-transparent bg-white dark:bg-gray-700 text-primary dark:text-accent"
                  placeholder="Adınız Soyadınız"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary dark:text-accent mb-2">
                  E-posta
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-transparent bg-white dark:bg-gray-700 text-primary dark:text-accent"
                  placeholder="ornek@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-primary dark:text-accent mb-2">
                  Telefon
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-transparent bg-white dark:bg-gray-700 text-primary dark:text-accent"
                  placeholder="0555 555 55 55"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary dark:text-accent mb-2">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-transparent bg-white dark:bg-gray-700 text-primary dark:text-accent"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>
              <Button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#B8860B] text-white text-sm uppercase tracking-widest hover:bg-[#9a7209] transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Gönder
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#B8860B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#B8860B]" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-medium text-primary dark:text-accent mb-2">
                    Adresimiz
                  </h3>
                  <p className="text-primary/70 dark:text-accent/70">
                    Bilişim Vadisi - İstinye Üniversitesi<br />
                    Ayazağa Mah. Kemerburgaz Cad.<br />
                    Vadi İstanbul Park 7A Blok No:7 B<br />
                    İç Kapı No:4<br />
                    Sarıyer / İstanbul
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#B8860B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#B8860B]" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-medium text-primary dark:text-accent mb-2">
                    Telefon
                  </h3>
                  <p className="text-primary/70 dark:text-accent/70">
                    Tel: <a href="tel:+902126135880" className="hover:text-[#B8860B] transition-colors">212-613 58 80</a><br />
                    Fax: 212-322 04 11
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#B8860B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#B8860B]" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-medium text-primary dark:text-accent mb-2">
                    E-posta
                  </h3>
                  <p className="text-primary/70 dark:text-accent/70">
                    <a href="mailto:info@academiadanismanlik.com" className="hover:text-[#B8860B] transition-colors">
                      info@academiadanismanlik.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-serif font-medium text-primary dark:text-accent mb-4">
                Çalışma Saatleri
              </h3>
              <div className="space-y-2 text-primary/70 dark:text-accent/70">
                <div className="flex justify-between">
                  <span>Pazartesi - Cuma:</span>
                  <span className="font-medium">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Cumartesi:</span>
                  <span className="font-medium">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Pazar:</span>
                  <span className="font-medium">Kapalı</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
