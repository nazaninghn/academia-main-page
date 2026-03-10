'use client';

import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Link } from '@/components/Link';
import { Logo } from '@/components/Logo';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const referenceLogos = [
  { name: 'Microsoft', src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'IBM', src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'SAP', src: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
  { name: 'Oracle', src: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
  { name: 'Siemens', src: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg' },
  { name: 'Bosch', src: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Bosch-logotype.svg' },
  { name: 'Schneider', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Schneider_Electric_2007.svg' },
  { name: 'ABB', src: 'https://upload.wikimedia.org/wikipedia/commons/0/00/ABB_logo.svg' },
  { name: 'Honeywell', src: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Honeywell_logo.svg' },
  { name: 'GE', src: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/General_Electric_logo.svg' },
  { name: 'Philips', src: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Philips_logo_new.svg' },
  { name: 'Shell', src: 'https://upload.wikimedia.org/wikipedia/en/e/e8/Shell_logo.svg' },
];

const platformsData = {
  en: [
    {
      title: 'Regulatory Intelligence Platform',
      desc: 'Tracking and interpreting regulatory changes across multiple jurisdictions and sectors.',
      icon: '⊡',
    },
    {
      title: 'ESG Framework Builder',
      desc: 'Structured tools for designing and implementing sustainability and governance frameworks.',
      icon: '◈',
    },
    {
      title: 'Compliance Architecture',
      desc: 'Integrated systems for managing product compliance, certifications, and technical documentation.',
      icon: '⬡',
    },
    {
      title: 'Institutional Learning Hub',
      desc: 'Knowledge management and capability development programs for organizational transformation.',
      icon: '◐',
    },
  ],
  tr: [
    {
      title: 'Düzenleyici İstihbarat Platformu',
      desc: 'Çoklu yetki alanları ve sektörlerdeki düzenleyici değişikliklerin takibi ve yorumlanması.',
      icon: '⊡',
    },
    {
      title: 'ESG Çerçeve Oluşturucu',
      desc: 'Sürdürülebilirlik ve yönetişim çerçevelerinin tasarlanması ve uygulanması için yapılandırılmış araçlar.',
      icon: '◈',
    },
    {
      title: 'Uyum Mimarisi',
      desc: 'Ürün uyumu, sertifikasyonlar ve teknik dokümantasyonun yönetimi için entegre sistemler.',
      icon: '⬡',
    },
    {
      title: 'Kurumsal Öğrenme Merkezi',
      desc: 'Kurumsal dönüşüm için bilgi yönetimi ve kapasite geliştirme programları.',
      icon: '◐',
    },
  ],
};

const insightsData = {
  en: [
    {
      title: 'The Future of Regulatory Compliance',
      category: 'Regulatory',
      date: 'March 2026',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&q=80',
    },
    {
      title: 'Building Sustainable Organizations',
      category: 'Sustainability',
      date: 'February 2026',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop&q=80',
    },
    {
      title: 'Digital Transformation in Quality Management',
      category: 'Quality',
      date: 'January 2026',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80',
    },
  ],
  tr: [
    {
      title: 'Düzenleyici Uyumun Geleceği',
      category: 'Düzenleyici',
      date: 'Mart 2026',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&q=80',
    },
    {
      title: 'Sürdürülebilir Kurumlar İnşa Etmek',
      category: 'Sürdürülebilirlik',
      date: 'Şubat 2026',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop&q=80',
    },
    {
      title: 'Kalite Yönetiminde Dijital Dönüşüm',
      category: 'Kalite',
      date: 'Ocak 2026',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80',
    },
  ],
};

const expertiseItems = {
  en: [
    {
      number: '01',
      title: 'Management Systems',
      desc: 'Designing and improving management systems aligned with institutional quality, governance, and operational consistency.',
      icon: '⌘',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80',
    },
    {
      number: '02',
      title: 'Product & Technical Compliance',
      desc: 'Supporting certification, technical documentation, and standards alignment for products entering regulated markets.',
      icon: '◌',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&q=80',
    },
    {
      number: '03',
      title: 'Strategic Projects',
      desc: 'Structuring projects, support applications, and implementation programs with long-term institutional relevance.',
      icon: '↗',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80',
    },
    {
      number: '04',
      title: 'Regulatory Alignment',
      desc: 'Helping organizations interpret and implement legal and regulatory requirements through structured frameworks.',
      icon: '⊞',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&q=80',
    },
    {
      number: '05',
      title: 'Capability Development',
      desc: 'Building institutional learning systems, training structures, and internal competency development programs.',
      icon: '◫',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&q=80',
    },
    {
      number: '06',
      title: 'Sustainability & ESG',
      desc: 'Developing sustainability, governance, and ESG-oriented frameworks for long-term organizational adaptation.',
      icon: '↘',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop&q=80',
    },
  ],
  tr: [
    {
      number: '01',
      title: 'Yönetim Sistemleri',
      desc: 'Kurumsal kalite, yönetişim ve operasyonel tutarlılık ile uyumlu yönetim sistemlerinin tasarlanması ve geliştirilmesi.',
      icon: '⌘',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80',
    },
    {
      number: '02',
      title: 'Ürün ve Teknik Uyum',
      desc: 'Düzenlemeye tabi pazarlara giren ürünler için belgelendirme, teknik dokümantasyon ve standart uyumunun desteklenmesi.',
      icon: '◌',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&q=80',
    },
    {
      number: '03',
      title: 'Stratejik Projeler',
      desc: 'Uzun vadeli kurumsal değer üreten proje yapıları, destek başvuruları ve uygulama programlarının kurgulanması.',
      icon: '↗',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80',
    },
    {
      number: '04',
      title: 'Düzenleyici Uyum',
      desc: 'Yasal ve düzenleyici gerekliliklerin yapılandırılmış çerçevelerle yorumlanması ve uygulanmasına destek verilmesi.',
      icon: '⊞',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&q=80',
    },
    {
      number: '05',
      title: 'Kapasite Geliştirme',
      desc: 'Kurumsal öğrenme sistemleri, eğitim yapıları ve iç yetkinlik geliştirme programlarının oluşturulması.',
      icon: '◫',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&q=80',
    },
    {
      number: '06',
      title: 'Sürdürülebilirlik ve ESG',
      desc: 'Uzun vadeli kurumsal adaptasyon için sürdürülebilirlik, yönetişim ve ESG odaklı yapıların geliştirilmesi.',
      icon: '↘',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop&q=80',
    },
  ],
};

const processItems = {
  en: [
    {
      number: '01',
      title: 'Assessment',
      desc: 'Mapping the institutional, regulatory, technical, and operational context in order to understand structural needs and areas of misalignment.',
    },
    {
      number: '02',
      title: 'Framework Design',
      desc: 'Designing the appropriate institutional, governance, compliance, and sustainability framework based on organizational priorities.',
    },
    {
      number: '03',
      title: 'Integration',
      desc: 'Embedding systems, standards, responsibilities, and implementation logic into the organization with clarity and consistency.',
    },
    {
      number: '04',
      title: 'Capability & Continuity',
      desc: 'Supporting adoption, internal capability development, and long-term continuity so the designed structure can function sustainably.',
    },
  ],
  tr: [
    {
      number: '01',
      title: 'Değerlendirme',
      desc: 'Yapısal ihtiyaçları ve uyumsuzluk alanlarını anlamak için kurumsal, düzenleyici, teknik ve operasyonel bağlamın haritalanması.',
    },
    {
      number: '02',
      title: 'Çerçeve Tasarımı',
      desc: 'Kurumsal önceliklere göre uygun yönetişim, uyum, sürdürülebilirlik ve kurumsal yapı çerçevesinin tasarlanması.',
    },
    {
      number: '03',
      title: 'Entegrasyon',
      desc: 'Sistemlerin, standartların, sorumlulukların ve uygulama mantığının kuruma açıklık ve tutarlılıkla yerleştirilmesi.',
    },
    {
      number: '04',
      title: 'Kapasite ve Süreklilik',
      desc: 'Tasarlanan yapının sürdürülebilir şekilde işlemesi için benimseme, iç kapasite gelişimi ve uzun vadeli sürekliliğin desteklenmesi.',
    },
  ],
};

function FrameworkDiagram() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-[26px] border border-[#D9D6CE] bg-[#F8F6F1]">
      {/* Main container with cards layout */}
      <div className="absolute inset-0 p-8">
        <div className="grid h-full grid-cols-2 grid-rows-2 gap-4">
          {/* Top Left - Information */}
          <div className="group relative overflow-hidden rounded-xl border border-[#E8E6E0] bg-gradient-to-br from-[#F5F3EE] to-[#F8F6F1] p-6 transition-all hover:border-[#58C3E8] hover:shadow-md">
            <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[#58C3E8]/5" />
            <div className="relative">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#58C3E8]/10 text-[#58C3E8]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#58C3E8]">Information</p>
              <h3 className="mt-1.5 text-[15px] font-semibold text-[#142033]">IT Standards</h3>
            </div>
          </div>

          {/* Top Right - Sustainability */}
          <div className="group relative overflow-hidden rounded-xl border border-[#E8E6E0] bg-gradient-to-br from-[#F5F3EE] to-[#F8F6F1] p-6 transition-all hover:border-[#D89A4A] hover:shadow-md">
            <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[#D89A4A]/5" />
            <div className="relative">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#D89A4A]/10 text-[#D89A4A]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#D89A4A]">Sustainability</p>
              <h3 className="mt-1.5 text-[15px] font-semibold text-[#142033]">& ESG</h3>
            </div>
          </div>

          {/* Bottom Left - Quality */}
          <div className="group relative overflow-hidden rounded-xl border border-[#E8E6E0] bg-gradient-to-br from-[#F5F3EE] to-[#F8F6F1] p-6 transition-all hover:border-[#142033] hover:shadow-md">
            <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[#142033]/5" />
            <div className="relative">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#142033]/10 text-[#142033]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#142033]/70">Quality</p>
              <h3 className="mt-1.5 text-[15px] font-semibold text-[#142033]">Governance</h3>
            </div>
          </div>

          {/* Bottom Right - Capability */}
          <div className="group relative overflow-hidden rounded-xl border border-[#E8E6E0] bg-gradient-to-br from-[#F5F3EE] to-[#F8F6F1] p-6 transition-all hover:border-[#58C3E8] hover:shadow-md">
            <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-[#58C3E8]/5" />
            <div className="relative">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#58C3E8]/10 text-[#58C3E8]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#58C3E8]">Capability</p>
              <h3 className="mt-1.5 text-[15px] font-semibold text-[#142033]">Training & Development</h3>
            </div>
          </div>
        </div>

        {/* Center logo overlay */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-[95px] w-[95px] items-center justify-center rounded-full border-[3px] border-[#E8E6E0] bg-[#F5F3EE] shadow-lg">
            <img
              src="/logo.png"
              alt="ACADEMIA"
              className="h-auto w-[65px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSection({ language }) {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #142033 1px, transparent 1px), linear-gradient(to bottom, #142033 1px, transparent 1px)',
          backgroundSize: '84px 84px',
        }}
      />

      <div className="mx-auto max-w-[1380px] px-6 py-16 lg:px-8 lg:py-20 w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-4 rounded-full border border-[#D9D6CE] bg-[#F7F5F0] px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-[#58C3E8]" />
              <span className="text-[12px] uppercase tracking-[0.34em] text-[#6C7A92]">
                20+ years of consulting experience
              </span>
            </div>

            <h1 className="mt-10 max-w-[760px] text-[56px] font-light leading-[0.96] tracking-[-0.05em] text-[#142033] xl:text-[68px]">
              {language === 'tr' ? (
                <>
                  Kurumsal dönüşüm için
                  <br />
                  <span className="font-semibold">stratejik bir</span>
                  <br />
                  ekosistem
                </>
              ) : (
                <>
                  A strategic ecosystem
                  <br />
                  for <span className="font-semibold">institutional</span>
                  <br />
                  transformation
                </>
              )}
            </h1>

            <p className="mt-8 max-w-[680px] text-[19px] leading-[1.75] text-[#60708A] xl:text-[20px]">
              {language === 'tr'
                ? 'ACADEMIA, kurumların kurumsal, düzenleyici, kalite ve sürdürülebilirlik çerçevelerini uzun vadeli yapısal netlikle tasarlamasına ve uygulamasına yardımcı olur.'
                : 'ACADEMIA helps organizations design and implement institutional, regulatory, quality, and sustainability frameworks with long-term structural clarity.'}
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-8 max-w-[600px]">
              <div className="border-l-2 border-[#D89A4A] pl-4">
                <div className="text-[32px] font-semibold text-[#142033]">150+</div>
                <div className="text-[13px] text-[#72819A] mt-1">
                  {language === 'tr' ? 'Proje' : 'Projects'}
                </div>
              </div>
              <div className="border-l-2 border-[#58C3E8] pl-4">
                <div className="text-[32px] font-semibold text-[#142033]">80+</div>
                <div className="text-[13px] text-[#72819A] mt-1">
                  {language === 'tr' ? 'Kurum' : 'Organizations'}
                </div>
              </div>
              <div className="border-l-2 border-[#D89A4A] pl-4">
                <div className="text-[32px] font-semibold text-[#142033]">6</div>
                <div className="text-[13px] text-[#72819A] mt-1">
                  {language === 'tr' ? 'Uzmanlık Alanı' : 'Expertise Areas'}
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#expertise"
                className="inline-flex items-center gap-3 rounded-full bg-[#0F1A32] px-8 py-4 text-[16px] font-medium text-white transition hover:bg-[#D89A4A]"
              >
                {language === 'tr' ? 'Ekosistemi Keşfet' : 'Explore the Ecosystem'}
                <ArrowRight className="h-4 w-4" />
              </Link>
              
              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-3 rounded-full border border-[#142033] px-8 py-4 text-[16px] font-medium text-[#142033] transition hover:bg-[#142033] hover:text-white"
              >
                {language === 'tr' ? 'Nasıl Çalışır' : 'How It Works'}
              </Link>
            </div>
          </div>

          <div className="lg:pl-2">
            <FrameworkDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatAcademiaIsSection({ language }) {
  return (
    <section id="what-academia-is" className="border-t border-[#D9D6CE] bg-[#F8F6F1]">
      <div className="mx-auto max-w-[1380px] px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[220px_1fr_420px]">
          <div>
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#72819A]">
              {language === 'tr' ? 'ACADEMIA Nedir' : 'What ACADEMIA Is'}
            </p>
          </div>

          <div className="max-w-[720px]">
            <h2 className="text-[36px] font-light leading-[1.1] tracking-[-0.03em] text-[#142033] lg:text-[46px]">
              {language === 'tr'
                ? 'Geleneksel bir danışmanlık şirketi değil.'
                : 'Not a conventional consulting firm.'}
            </h2>

            <p className="mt-8 text-[18px] leading-[1.9] text-[#5E7088]">
              {language === 'tr'
                ? 'ACADEMIA; kurumların kurumsal, düzenleyici, kalite ve sürdürülebilirlik zorluklarında yön bulmasına yardımcı olmak için tasarlanmış çok disiplinli bir danışmanlık ekosistemidir.'
                : 'ACADEMIA is a multi-disciplinary consulting ecosystem designed to help organizations navigate institutional, regulatory, quality, and sustainability challenges.'}
            </p>

            <p className="mt-6 text-[18px] leading-[1.9] text-[#5E7088]">
              {language === 'tr'
                ? 'ACADEMIA izole danışmanlık hizmetleri sunmaz. Bunun yerine kurumların uzun vadeli kurumsal kapasite geliştirmesine yardımcı olan sistemler, yönetişim yapıları ve stratejik çerçeveler tasarlar.'
                : 'Rather than delivering isolated consulting services, ACADEMIA works as a system architect—designing integrated frameworks that help organizations build structure and strengthen long-term institutional capacity.'}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[22px] border border-[#D9D6CE]">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80"
              alt="Strategic planning and systems"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpertiseArchitectureSection({ language }) {
  const items = expertiseItems[language];

  return (
    <section id="expertise" className="border-t border-[#D9D6CE] bg-[#F8F6F1]">
      <div className="mx-auto max-w-[1380px] px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
          <div>
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#72819A]">
              {language === 'tr' ? 'Uzmanlık Mimarisi' : 'Expertise Architecture'}
            </p>
          </div>

          <div>
            <div className="max-w-[860px]">
              <h2 className="text-[34px] font-light leading-[1.1] tracking-[-0.03em] text-[#142033] lg:text-[46px]">
                {language === 'tr'
                  ? 'Bir hizmet listesi değil, yapılandırılmış bir uzmanlık sistemi.'
                  : 'Not a list of services, but a structured system of expertise.'}
              </h2>

              <p className="mt-6 max-w-[760px] text-[18px] leading-[1.9] text-[#5E7088]">
                {language === 'tr'
                  ? 'ACADEMIA\'nın çalışma alanları; kurumların düzenleyici, teknik, yönetsel ve sürdürülebilirlik dönüşümünü destekleyen birbiriyle ilişkili uzmanlık alanları olarak yapılandırılmıştır.'
                  : 'ACADEMIA\'s work is organized as interconnected domains of expertise that support regulatory, technical, managerial, and sustainability transformation.'}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
              {items.map((item) => (
                <div key={item.number} className="group">
                  {/* Image */}
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#142033]/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-white bg-white/90 text-[16px] text-[#142033]">
                        {item.icon}
                      </div>
                      <span className="text-[12px] uppercase tracking-[0.24em] text-white">
                        {item.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="border-t border-[#D9D6CE] pt-6">
                    <h3 className="text-[24px] font-medium leading-[1.25] text-[#142033]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[16px] leading-[1.85] text-[#5E7088]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowAcademiaWorksSection({ language }) {
  const items = processItems[language];

  return (
    <section id="how-it-works" className="border-t border-[#D9D6CE] bg-[#F5F3EE]">
      <div className="mx-auto max-w-[1380px] px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
          <div>
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#72819A]">
              {language === 'tr' ? 'ACADEMIA Nasıl Çalışır' : 'How ACADEMIA Works'}
            </p>
          </div>

          <div>
            <div className="max-w-[880px]">
              <h2 className="text-[34px] font-light leading-[1.1] tracking-[-0.03em] text-[#142033] lg:text-[46px]">
                {language === 'tr'
                  ? 'Danışmanlık değil, sistematik dönüşüm süreci.'
                  : 'Not consulting as a service, but transformation as a structured process.'}
              </h2>

              <p className="mt-6 max-w-[780px] text-[18px] leading-[1.9] text-[#5E7088]">
                {language === 'tr'
                  ? 'ACADEMIA her çalışmayı bağımsız bir görev olarak değil, kurumsal yapıyı güçlendiren bütünsel bir süreç olarak ele alır. Amaç yalnızca anlık ihtiyaçları karşılamak değil, uzun vadeli kurumsal netlik ve dayanıklılık oluşturmaktır.'
                  : 'ACADEMIA approaches each engagement not as an isolated task, but as a structured process that strengthens institutional clarity. The objective is not only to respond to immediate needs, but to build long-term organizational resilience.'}
              </p>
            </div>

            <div className="mt-14 hidden xl:block">
              <div className="relative">
                <div className="absolute left-0 right-0 top-[34px] h-px bg-[#D9D6CE]" />
                <div className="grid grid-cols-4 gap-8">
                  {items.map((item) => (
                    <div key={item.number} className="relative">
                      <div className="mb-8 flex items-center gap-4">
                        <div className="relative z-10 flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#142033] bg-[#F5F3EE]">
                          <span className="text-[15px] font-medium text-[#142033]">
                            {item.number}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-[24px] font-medium leading-[1.25] text-[#142033]">
                        {item.title}
                      </h3>

                      <p className="mt-4 max-w-[280px] text-[16px] leading-[1.85] text-[#5E7088]">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 xl:hidden">
              {items.map((item) => (
                <div
                  key={item.number}
                  className="grid grid-cols-[72px_1fr] gap-5 border-t border-[#D9D6CE] pt-6"
                >
                  <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#142033]">
                    <span className="text-[14px] font-medium text-[#142033]">
                      {item.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-[24px] font-medium leading-[1.25] text-[#142033]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[720px] text-[16px] leading-[1.85] text-[#5E7088]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoMarquee({ items, reverse = false }) {
  const duplicated = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#F5F3EE] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#F5F3EE] to-transparent" />

      <div
        className={`marquee-track flex min-w-max gap-6 py-3 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {duplicated.map((logo, index) => (
          <a
            key={`${logo.name}-${index}`}
            href={logo.href || '#'}
            className="group flex h-[96px] w-[180px] shrink-0 items-center justify-center rounded-2xl border border-[#DDD8CF] bg-[#FAF8F3] px-6 transition duration-300 hover:border-[#D89A4A] hover:bg-white"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="max-h-[42px] max-w-[130px] object-contain opacity-60 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

function PlatformsSection({ language }) {
  const items = platformsData[language];

  return (
    <section id="platforms" className="border-t border-[#D9D6CE] bg-[#F8F6F1]">
      <div className="mx-auto max-w-[1380px] px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
          <div>
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#72819A]">
              {language === 'tr' ? 'Platformlar' : 'Platforms'}
            </p>
          </div>

          <div>
            <div className="max-w-[880px]">
              <h2 className="text-[34px] font-light leading-[1.1] tracking-[-0.03em] text-[#142033] lg:text-[46px]">
                {language === 'tr'
                  ? 'Kurumsal dönüşümü destekleyen yapılandırılmış platformlar.'
                  : 'Structured platforms supporting institutional transformation.'}
              </h2>

              <p className="mt-6 max-w-[780px] text-[18px] leading-[1.9] text-[#5E7088]">
                {language === 'tr'
                  ? 'ACADEMIA, kurumların karmaşık düzenleyici ve kurumsal zorluklarla başa çıkmasına yardımcı olmak için özel olarak tasarlanmış entegre platformlar ve araçlar geliştirir.'
                  : 'ACADEMIA develops integrated platforms and tools specifically designed to help organizations navigate complex regulatory and institutional challenges.'}
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-[#D9D6CE] bg-white p-8 transition-all hover:border-[#D89A4A] hover:shadow-lg"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F7F5F0] text-[24px] text-[#142033] transition-colors group-hover:bg-[#D89A4A] group-hover:text-white">
                    {item.icon}
                  </div>

                  <h3 className="text-[22px] font-medium leading-[1.25] text-[#142033]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[16px] leading-[1.85] text-[#5E7088]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InsightsSection({ language }) {
  const items = insightsData[language];

  return (
    <section id="insights" className="border-t border-[#D9D6CE] bg-[#F5F3EE]">
      <div className="mx-auto max-w-[1380px] px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
          <div>
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#72819A]">
              {language === 'tr' ? 'İçgörüler' : 'Insights'}
            </p>
          </div>

          <div>
            <div className="max-w-[880px]">
              <h2 className="text-[34px] font-light leading-[1.1] tracking-[-0.03em] text-[#142033] lg:text-[46px]">
                {language === 'tr'
                  ? 'Düşünce liderliği ve stratejik perspektifler.'
                  : 'Thought leadership and strategic perspectives.'}
              </h2>

              <p className="mt-6 max-w-[780px] text-[18px] leading-[1.9] text-[#5E7088]">
                {language === 'tr'
                  ? 'Düzenleyici değişiklikler, kurumsal dönüşüm ve sürdürülebilirlik konularında derinlemesine analizler ve öngörüler.'
                  : 'In-depth analysis and insights on regulatory changes, institutional transformation, and sustainability.'}
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
              {items.map((item, index) => (
                <article
                  key={index}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[220px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#142033]/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-[#142033]">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-[13px] text-[#72819A]">{item.date}</p>
                    <h3 className="mt-2 text-[20px] font-medium leading-[1.3] text-[#142033] transition-colors group-hover:text-[#D89A4A]">
                      {item.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReferencesSection({ language }) {
  return (
    <section id="references" className="border-t border-[#D9D6CE] bg-[#F5F3EE]">
      <div className="mx-auto max-w-[1380px] px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
          <div>
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#72819A]">
              {language === 'tr' ? 'Referanslar' : 'Selected References'}
            </p>
          </div>

          <div>
            <div className="max-w-[920px]">
              <h2 className="text-[34px] font-light leading-[1.1] tracking-[-0.03em] text-[#142033] lg:text-[46px]">
                {language === 'tr'
                  ? 'Kurumsal dönüşüm süreçlerinde güvenilen çözüm ortağı.'
                  : 'A trusted partner across institutional transformation initiatives.'}
              </h2>

              <p className="mt-6 max-w-[760px] text-[18px] leading-[1.9] text-[#5E7088]">
                {language === 'tr'
                  ? 'ACADEMIA, farklı sektörlerde faaliyet gösteren kurumlarla yönetim sistemleri, teknik uyum, sürdürülebilirlik ve düzenleyici dönüşüm alanlarında çalışmıştır.'
                  : 'ACADEMIA has worked with organizations across multiple sectors in management systems, technical compliance, sustainability, and regulatory transformation.'}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 27001'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#D9D6CE] px-4 py-2 text-[13px] tracking-[0.08em] text-[#5E7088]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-14 space-y-6">
              <LogoMarquee items={referenceLogos.slice(0, 8)} />
              <LogoMarquee items={referenceLogos.slice(4, 12)} reverse />
            </div>

            <div className="mt-8">
              <p className="text-[14px] leading-[1.8] text-[#72819A]">
                {language === 'tr'
                  ? 'Seçili kurumlar gösterilmektedir. Tam referans listesi talep üzerine paylaşılabilir.'
                  : 'Selected organizations shown. Full reference lists can be shared upon request.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  
  const currentLanguage = language === 'tr' ? 'tr' : 'en';

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#142033]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#D9D6CE] bg-[#F5F3EE]/92 backdrop-blur-md">
        <nav className="mx-auto flex h-[78px] max-w-[1380px] items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex p-2 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            <Link href="/" className="shrink-0">
              <Logo size="small" />
            </Link>
          </div>

          <div className="hidden items-center gap-12 lg:flex">
            <a href="#what-academia-is" className="text-[16px] text-[#142033] transition hover:text-[#D89A4A] cursor-pointer">
              {currentLanguage === 'tr' ? 'ACADEMIA Nedir' : 'What ACADEMIA Is'}
            </a>
            <a href="#expertise" className="text-[16px] text-[#142033] transition hover:text-[#D89A4A] cursor-pointer">
              {currentLanguage === 'tr' ? 'Uzmanlık' : 'Expertise'}
            </a>
            <a href="#platforms" className="text-[16px] text-[#142033] transition hover:text-[#D89A4A] cursor-pointer">
              {currentLanguage === 'tr' ? 'Platformlar' : 'Platforms'}
            </a>
            <a href="#insights" className="text-[16px] text-[#142033] transition hover:text-[#D89A4A] cursor-pointer">
              {currentLanguage === 'tr' ? 'İçgörüler' : 'Insights'}
            </a>
            <Link href="/contact" className="text-[16px] text-[#142033] transition hover:text-[#D89A4A]">
              {currentLanguage === 'tr' ? 'İletişim' : 'Contact'}
            </Link>
          </div>

          <div className="hidden lg:flex">
            <LanguageSwitcher />
          </div>
        </nav>
      </header>

      <div className={`fixed inset-0 z-[60] lg:hidden ${mobileMenuOpen ? '' : 'pointer-events-none'}`}>
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 h-full w-[300px] bg-[#FCFBF8] shadow-2xl transition-transform ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-[#D9D6CE] p-5">
            <Logo size="small" />
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="space-y-5 p-6">
            <a href="#what-academia-is" className="block text-base" onClick={() => setMobileMenuOpen(false)}>
              {currentLanguage === 'tr' ? 'ACADEMIA Nedir' : 'What ACADEMIA Is'}
            </a>
            <a href="#expertise" className="block text-base" onClick={() => setMobileMenuOpen(false)}>
              {currentLanguage === 'tr' ? 'Uzmanlık' : 'Expertise'}
            </a>
            <a href="#platforms" className="block text-base" onClick={() => setMobileMenuOpen(false)}>
              {currentLanguage === 'tr' ? 'Platformlar' : 'Platforms'}
            </a>
            <a href="#insights" className="block text-base" onClick={() => setMobileMenuOpen(false)}>
              {currentLanguage === 'tr' ? 'İçgörüler' : 'Insights'}
            </a>
            <Link href="/contact" className="block text-base" onClick={() => setMobileMenuOpen(false)}>
              {currentLanguage === 'tr' ? 'İletişim' : 'Contact'}
            </Link>
          </nav>
        </div>
      </div>

      <main className="pt-[78px]">
        <HeroSection language={currentLanguage} />
        <WhatAcademiaIsSection language={currentLanguage} />
        <ExpertiseArchitectureSection language={currentLanguage} />
        <HowAcademiaWorksSection language={currentLanguage} />
        <PlatformsSection language={currentLanguage} />
        <InsightsSection language={currentLanguage} />
        <ReferencesSection language={currentLanguage} />
      </main>
    </div>
  );
}
