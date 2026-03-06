'use client';

import { Target, Users, Award, TrendingUp, GraduationCap, Globe, Shield, Heart } from 'lucide-react';
import { Text } from '@/components/Text';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/translations';

export default function AboutPage() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div className="min-h-screen bg-accent dark:bg-primary pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Background Image */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 relative">
          <div className="absolute inset-0 -z-10 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=400&fit=crop&q=80" 
              alt="Team collaboration"
              className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
            />
          </div>
          <Text className="inline-block text-[#B8860B] text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2 sm:mb-3">{t.about.subtitle}</Text>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-medium text-primary dark:text-accent mb-3 sm:mb-4 px-4">
            {t.about.title}
          </h1>
          <p className="text-primary/70 dark:text-accent/70 text-xs sm:text-sm lg:text-base max-w-3xl mx-auto leading-relaxed px-4">
            {t.about.description}
          </p>
        </div>

        {/* Mission & Vision with Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="relative h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop&q=80" 
                alt="Mission"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/60 to-blue-600/60"></div>
            </div>
            <div className="p-10">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 -mt-20 relative z-10 shadow-xl">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-serif font-medium text-primary dark:text-accent mb-4">
                {t.about.missionTitle}
              </h2>
              <p className="text-primary/70 dark:text-accent/70 leading-relaxed">
                {t.about.missionText}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="relative h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=400&fit=crop&q=80" 
                alt="Vision"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/60 to-purple-600/60"></div>
            </div>
            <div className="p-10">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 -mt-20 relative z-10 shadow-xl">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-serif font-medium text-primary dark:text-accent mb-4">
                {t.about.visionTitle}
              </h2>
              <p className="text-primary/70 dark:text-accent/70 leading-relaxed">
                {t.about.visionText}
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <Text className="inline-block text-[#B8860B] text-sm uppercase tracking-[0.2em] mb-4">{t.about.valuesTitle}</Text>
            <h2 className="text-4xl font-serif font-medium text-primary dark:text-accent">
              {t.about.valuesSubtitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-medium text-primary dark:text-accent mb-3">
                {t.about.value1}
              </h3>
              <p className="text-primary/70 dark:text-accent/70">
                {t.about.value1Desc}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#9a7209] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-medium text-primary dark:text-accent mb-3">
                {t.about.value2}
              </h3>
              <p className="text-primary/70 dark:text-accent/70">
                {t.about.value2Desc}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-medium text-primary dark:text-accent mb-3">
                {t.about.value3}
              </h3>
              <p className="text-primary/70 dark:text-accent/70">
                {t.about.value3Desc}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-medium text-primary dark:text-accent mb-3">
                {t.about.value4}
              </h3>
              <p className="text-primary/70 dark:text-accent/70">
                {t.about.value4Desc}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-medium text-primary dark:text-accent mb-3">
                {t.about.value5}
              </h3>
              <p className="text-primary/70 dark:text-accent/70">
                {t.about.value5Desc}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-medium text-primary dark:text-accent mb-3">
                {t.about.value6}
              </h3>
              <p className="text-primary/70 dark:text-accent/70">
                {t.about.value6Desc}
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-br from-[#B8860B] to-[#9a7209] rounded-2xl p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-serif font-bold mb-2">500+</div>
              <div className="text-white/80">{t.about.stat1}</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-serif font-bold mb-2">50+</div>
              <div className="text-white/80">{t.about.stat2}</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-serif font-bold mb-2">15+</div>
              <div className="text-white/80">{t.about.stat3}</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-serif font-bold mb-2">%95</div>
              <div className="text-white/80">{t.about.stat4}</div>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <Text className="inline-block text-[#B8860B] text-sm uppercase tracking-[0.2em] mb-4">{t.about.locationTitle}</Text>
            <h2 className="text-4xl font-serif font-medium text-primary dark:text-accent mb-4">
              {t.about.locationSubtitle}
            </h2>
            <p className="text-primary/70 dark:text-accent/70">
              {t.about.locationText}
            </p>
          </div>
          
          {/* Office Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop&q=80" 
              alt="Modern office building"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-serif font-medium mb-2">Bilişim Vadisi - İstinye Üniversitesi</h3>
                <p className="text-white/90">Sarıyer / İstanbul</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
