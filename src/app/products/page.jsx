'use client';

import { FileText, FileCheck, Scale, Leaf, GraduationCap, FolderKanban, Award, Shield } from 'lucide-react';
import { Link } from '@/components/Link';
import { Text } from '@/components/Text';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation, serviceDetails } from '@/lib/translations';

export default function ServicesPage() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const services = serviceDetails[language];
  
  // آیکون‌ها، رنگ‌ها و عکس‌های مناسب برای هر سرویس
  const serviceIcons = [
    { 
      icon: FileText, 
      gradient: 'from-[#B8860B] to-[#9a7209]',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&q=80'
    }, // Product Certification - Documents
    { 
      icon: FileCheck, 
      gradient: 'from-blue-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80'
    }, // System Certification - Business
    { 
      icon: Scale, 
      gradient: 'from-purple-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&q=80'
    }, // Legal Compliance - Law
    { 
      icon: Leaf, 
      gradient: 'from-green-500 to-green-600',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop&q=80'
    }, // Sustainability - Nature
    { 
      icon: GraduationCap, 
      gradient: 'from-red-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&q=80'
    }, // Corporate Training - Education
    { 
      icon: FolderKanban, 
      gradient: 'from-orange-500 to-orange-600',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80'
    }, // Project Consulting - Projects
    { 
      icon: Award, 
      gradient: 'from-pink-500 to-pink-600',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&q=80'
    }, // Quality Management - Quality
    { 
      icon: Shield, 
      gradient: 'from-teal-500 to-teal-600',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop&q=80'
    } // OHS - Safety
  ];

  return (
    <div className="min-h-screen bg-accent dark:bg-primary pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <Text className="inline-block text-[#B8860B] text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2 sm:mb-3">{t.services.subtitle}</Text>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-medium text-primary dark:text-accent mb-3 sm:mb-4 px-4">
            {t.services.title}
          </h1>
          <p className="text-primary/70 dark:text-accent/70 text-xs sm:text-sm lg:text-base max-w-3xl mx-auto leading-relaxed px-4">
            {t.services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {services.map((service, index) => {
            const { icon: Icon, gradient, image } = serviceIcons[index];
            return (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Service Image */}
                <div className="relative h-36 sm:h-40 lg:h-48 overflow-hidden">
                  <img 
                    src={image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  <div className={`absolute top-3 right-3 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    <Icon className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#B8860B]`} strokeWidth={2} />
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-serif font-medium text-primary dark:text-accent mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-primary/70 dark:text-accent/70 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-primary/60 dark:text-accent/60 text-xs sm:text-sm">
                        <span className={`bg-gradient-to-br ${gradient} text-white rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center mr-2 flex-shrink-0 text-[10px] sm:text-xs font-bold mt-0.5`}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[#B8860B] to-[#9a7209] rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center text-white">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-serif font-medium mb-3 sm:mb-4">
            {t.services.ctaTitle}
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            {t.services.ctaDescription}
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#B8860B] text-sm uppercase tracking-widest hover:bg-gray-100 transition-all duration-300 rounded-lg font-medium"
          >
            {t.services.ctaButton}
          </Link>
        </div>

        {/* Process Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <Text className="inline-block text-[#B8860B] text-sm uppercase tracking-[0.2em] mb-4">{t.services.processTitle}</Text>
            <h2 className="text-4xl font-serif font-medium text-primary dark:text-accent mb-4">
              {t.services.processSubtitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#B8860B] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-serif font-medium text-primary dark:text-accent mb-2">
                {t.services.step1}
              </h3>
              <p className="text-primary/70 dark:text-accent/70 text-sm">
                {t.services.step1Desc}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#B8860B] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-serif font-medium text-primary dark:text-accent mb-2">
                {t.services.step2}
              </h3>
              <p className="text-primary/70 dark:text-accent/70 text-sm">
                {t.services.step2Desc}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#B8860B] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-serif font-medium text-primary dark:text-accent mb-2">
                {t.services.step3}
              </h3>
              <p className="text-primary/70 dark:text-accent/70 text-sm">
                {t.services.step3Desc}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#B8860B] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-serif font-medium text-primary dark:text-accent mb-2">
                {t.services.step4}
              </h3>
              <p className="text-primary/70 dark:text-accent/70 text-sm">
                {t.services.step4Desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
