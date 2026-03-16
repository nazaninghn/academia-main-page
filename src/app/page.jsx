'use client';

import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';

const referenceLogos = [
  { name: 'Soteks', src: '/references/soteks.png' },
  { name: 'Varne', src: '/references/varne.png' },
  { name: 'Vintex', src: '/references/vintex.png' },
  { name: 'URSA', src: '/references/ursa.png' },
  { name: 'Sparkle', src: '/references/sparkle.png' },
  { name: 'Turkuaz', src: '/references/turkuaz.png' },
  { name: 'Teknomak', src: '/references/teknomak.png' },
  { name: 'Portland', src: '/references/portland.png' },
  { name: 'Planet', src: '/references/planet.png' },
  { name: 'Ondul', src: '/references/ondul.png' },
  { name: 'Natural', src: '/references/natural.png' },
  { name: 'Kota', src: '/references/kota.png' },
];

const expertiseItems = {
  en: [
    { number: '01', title: 'Management Systems', desc: 'Designing and improving management systems aligned with institutional quality, governance, and operational consistency.', icon: '⌘' },
    { number: '02', title: 'Product & Technical Compliance', desc: 'Supporting certification, technical documentation, and standards alignment for products entering regulated markets.', icon: '◌' },
    { number: '03', title: 'Strategic Projects', desc: 'Structuring projects, support applications, and implementation programs with long-term institutional relevance.', icon: '↗' },
    { number: '04', title: 'Regulatory Alignment', desc: 'Helping organizations interpret and implement legal and regulatory requirements through structured frameworks.', icon: '⊞' },
    { number: '05', title: 'Capability Development', desc: 'Building institutional learning systems, training structures, and internal competency development programs.', icon: '◫' },
    { number: '06', title: 'Sustainability & ESG', desc: 'Developing sustainability, governance, and ESG-oriented frameworks for long-term organizational adaptation.', icon: '↘' },
  ],
  tr: [
    { number: '01', title: 'Yönetim Sistemleri', desc: 'Kurumsal kalite, yönetişim ve operasyonel tutarlılık ile uyumlu yönetim sistemlerinin tasarlanması ve geliştirilmesi.', icon: '⌘' },
    { number: '02', title: 'Ürün ve Teknik Uyum', desc: 'Düzenlemeye tabi pazarlara giren ürünler için belgelendirme, teknik dokümantasyon ve standart uyumunun desteklenmesi.', icon: '◌' },
    { number: '03', title: 'Stratejik Projeler', desc: 'Uzun vadeli kurumsal değer üreten proje yapıları, destek başvuruları ve uygulama programlarının kurgulanması.', icon: '↗' },
    { number: '04', title: 'Düzenleyici Uyum', desc: 'Yasal ve düzenleyici gerekliliklerin yapılandırılmış çerçevelerle yorumlanması ve uygulanmasına destek verilmesi.', icon: '⊞' },
    { number: '05', title: 'Kapasite Geliştirme', desc: 'Kurumsal öğrenme sistemleri, eğitim yapıları ve iç yetkinlik geliştirme programlarının oluşturulması.', icon: '◫' },
    { number: '06', title: 'Sürdürülebilirlik ve ESG', desc: 'Uzun vadeli kurumsal adaptasyon için sürdürülebilirlik, yönetişim ve ESG odaklı yapıların geliştirilmesi.', icon: '↘' },
  ],
};

const processItems = {
  en: [
    { number: '01', title: 'Assessment', desc: 'Mapping the institutional, regulatory, technical, and operational context in order to understand structural needs and areas of misalignment.' },
    { number: '02', title: 'Framework Design', desc: 'Designing the appropriate institutional, governance, compliance, and sustainability framework based on organizational priorities.' },
    { number: '03', title: 'Integration', desc: 'Embedding systems, standards, responsibilities, and implementation logic into the organization with clarity and consistency.' },
    { number: '04', title: 'Capability & Continuity', desc: 'Supporting adoption, internal capability development, and long-term continuity so the designed structure can function sustainably.' },
  ],
  tr: [
    { number: '01', title: 'Değerlendirme', desc: 'Yapısal ihtiyaçları ve uyumsuzluk alanlarını anlamak için kurumsal, düzenleyici, teknik ve operasyonel bağlamın haritalanması.' },
    { number: '02', title: 'Çerçeve Tasarımı', desc: 'Kurumsal önceliklere göre uygun yönetişim, uyum, sürdürülebilirlik ve kurumsal yapı çerçevesinin tasarlanması.' },
    { number: '03', title: 'Entegrasyon', desc: 'Sistemlerin, standartların, sorumlulukların ve uygulama mantığının kuruma açıklık ve tutarlılıkla yerleştirilmesi.' },
    { number: '04', title: 'Kapasite ve Süreklilik', desc: 'Tasarlanan yapının sürdürülebilir şekilde işlemesi için benimseme, iç kapasite gelişimi ve uzun vadeli sürekliliğin desteklenmesi.' },
  ],
};

/* ─── Framework Diagram (card-based) ─── */
function FrameworkDiagram({ language }) {
  const labels = {
    en: {
      info: 'Information', itStandards: 'IT Standards',
      sustainability: 'Sustainability', esg: '& ESG',
      quality: 'Quality', governance: 'Governance',
      capability: 'Capability', training: 'Training & Dev',
    },
    tr: {
      info: 'Bilgi Teknolojileri', itStandards: 'BT Standartları',
      sustainability: 'Sürdürülebilirlik', esg: '& ESG',
      quality: 'Kalite', governance: 'Yönetişim',
      capability: 'Kapasite', training: 'Eğitim & Gelişim',
    },
  };
  const t = labels[language] || labels.en;
  return (
    <div className="relative w-full rounded-[18px] border border-[#E0DDD6] bg-[#F0EDE6] p-3 sm:rounded-[22px] sm:p-3.5 md:p-4 lg:rounded-[26px] lg:p-6">
      <div className="relative grid grid-cols-2 gap-3 sm:gap-3.5 md:gap-4 lg:gap-5">
        {/* Top-left: IT Standards */}
        <div className="rounded-xl bg-[#F7F5F0] p-3 shadow-sm sm:rounded-2xl sm:p-4 lg:p-7">
          <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#58C3E8]/15 sm:mb-3 sm:h-10 sm:w-10 lg:mb-4 lg:h-12 lg:w-12 lg:rounded-xl">
            <svg className="h-3.5 w-3.5 text-[#58C3E8] sm:h-4 sm:w-4 lg:h-5 lg:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M9 3v18M3 9h18" /></svg>
          </div>
          <p className="text-[8px] uppercase tracking-[0.2em] text-[#58C3E8] sm:text-[9px] lg:text-[11px] lg:tracking-[0.24em]">{t.info}</p>
          <p className="mt-0.5 text-[12px] font-medium text-[#142033] sm:mt-1 sm:text-[13px] lg:mt-1.5 lg:text-[17px]">{t.itStandards}</p>
        </div>

        {/* Top-right: Sustainability & ESG */}
        <div className="rounded-xl bg-[#F7F5F0] p-3 shadow-sm sm:rounded-2xl sm:p-4 lg:p-7">
          <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#D89A4A]/15 sm:mb-3 sm:h-10 sm:w-10 lg:mb-4 lg:h-12 lg:w-12 lg:rounded-xl">
            <svg className="h-3.5 w-3.5 text-[#D89A4A] sm:h-4 sm:w-4 lg:h-5 lg:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 010 18" /></svg>
          </div>
          <p className="text-[8px] uppercase tracking-[0.2em] text-[#D89A4A] sm:text-[9px] lg:text-[11px] lg:tracking-[0.24em]">{t.sustainability}</p>
          <p className="mt-0.5 text-[12px] font-medium text-[#142033] sm:mt-1 sm:text-[13px] lg:mt-1.5 lg:text-[17px]">{t.esg}</p>
        </div>

        {/* Center ACADEMIA circle */}
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full border border-[#142033]/20 bg-[#F0EDE6] shadow-md sm:h-[72px] sm:w-[72px] md:h-[76px] md:w-[76px] lg:h-[110px] lg:w-[110px]">
            <img src="/logo.png" alt="ACADEMIA" className="h-[32px] w-auto object-contain sm:h-[36px] md:h-[38px] lg:h-[56px]" />
          </div>
        </div>

        {/* Bottom-left: Governance */}
        <div className="rounded-xl bg-[#F7F5F0] p-3 shadow-sm sm:rounded-2xl sm:p-4 lg:p-7">
          <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#142033]/10 sm:mb-3 sm:h-10 sm:w-10 lg:mb-4 lg:h-12 lg:w-12 lg:rounded-xl">
            <svg className="h-3.5 w-3.5 text-[#142033] sm:h-4 sm:w-4 lg:h-5 lg:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" /></svg>
          </div>
          <p className="text-[8px] uppercase tracking-[0.2em] text-[#72819A] sm:text-[9px] lg:text-[11px] lg:tracking-[0.24em]">{t.quality}</p>
          <p className="mt-0.5 text-[12px] font-medium text-[#142033] sm:mt-1 sm:text-[13px] lg:mt-1.5 lg:text-[17px]">{t.governance}</p>
        </div>

        {/* Bottom-right: Training & Development */}
        <div className="rounded-xl bg-[#F7F5F0] p-3 shadow-sm sm:rounded-2xl sm:p-4 lg:p-7">
          <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#58C3E8]/15 sm:mb-3 sm:h-10 sm:w-10 lg:mb-4 lg:h-12 lg:w-12 lg:rounded-xl">
            <svg className="h-3.5 w-3.5 text-[#58C3E8] sm:h-4 sm:w-4 lg:h-5 lg:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
          </div>
          <p className="text-[8px] uppercase tracking-[0.2em] text-[#D89A4A] sm:text-[9px] lg:text-[11px] lg:tracking-[0.24em]">{t.capability}</p>
          <p className="mt-0.5 text-[12px] font-medium text-[#142033] sm:mt-1 sm:text-[13px] lg:mt-1.5 lg:text-[17px]">{t.training}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Hero ─── */
function HeroSection({ language }) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(to right, #142033 1px, transparent 1px), linear-gradient(to bottom, #142033 1px, transparent 1px)',
          backgroundSize: '84px 84px',
        }}
      />

      <div className="mx-auto max-w-[1380px] px-5 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="grid grid-cols-1 items-center gap-8 xl:grid-cols-[1.1fr_0.9fr] xl:gap-12">
          <div className="flex flex-col justify-center">
            <h1 className="max-w-[620px] text-[36px] font-light leading-[1.08] tracking-[-0.03em] text-[#142033] sm:text-[46px] md:text-[52px] lg:text-[64px]">
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

            <p className="mt-6 max-w-[520px] text-[15px] leading-[1.75] text-[#667085] sm:mt-8 sm:text-[17px] md:text-[18px] lg:text-[19px] lg:leading-[1.8]">
              {language === 'tr'
                ? 'ACADEMIA, kurumların kurumsal, düzenleyici, kalite ve sürdürülebilirlik çerçevelerini uzun vadeli yapısal netlikle tasarlamasına ve uygulamasına yardımcı olur.'
                : 'ACADEMIA helps organizations design and implement institutional, regulatory, quality, and sustainability frameworks with long-term structural clarity.'}
            </p>

            {/* Stats row */}
            <div className="mt-8 flex gap-6 sm:mt-10 sm:gap-8 lg:gap-10">
              {[
                { val: '150+', label: language === 'tr' ? 'Proje' : 'Projects', border: 'border-[#D89A4A]' },
                { val: '80+', label: language === 'tr' ? 'Kurum' : 'Organizations', border: 'border-[#58C3E8]' },
                { val: '6', label: language === 'tr' ? 'Uzmanlık Alanı' : 'Expertise Areas', border: 'border-[#D9D6CE]' },
              ].map((s) => (
                <div key={s.val} className={`border-l-2 ${s.border} pl-3 sm:pl-4 lg:pl-5`}>
                  <div className="text-[26px] font-semibold leading-none text-[#142033] sm:text-[32px] lg:text-[36px]">{s.val}</div>
                  <div className="mt-1 text-[11px] text-[#667085] sm:text-[13px] lg:text-[14px]">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
              <a
                href="#expertise"
                className="inline-flex items-center gap-2 rounded-full bg-[#0F1A32] px-6 py-3 text-[14px] font-medium text-white transition hover:bg-[#D89A4A] sm:px-8 sm:py-4 sm:text-[16px]"
              >
                {language === 'tr' ? 'Ekosistemi Keşfet' : 'Explore the Ecosystem'}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-[#142033] px-6 py-3 text-[14px] font-medium text-[#142033] transition hover:bg-[#142033] hover:text-white sm:px-8 sm:py-4 sm:text-[16px]"
              >
                {language === 'tr' ? 'Nasıl Çalışır' : 'How It Works'}
              </a>
            </div>
          </div>

          {/* Diagram — visible on all sizes, smaller on mobile */}
          <div className="mt-2 xl:mt-0 xl:pl-4">
            <FrameworkDiagram language={language} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── What ACADEMIA Is ─── */
function WhatAcademiaIsSection({ language }) {
  return (
    <section id="what-academia-is" className="border-t border-[#D9D6CE] bg-[#F8F6F1]">
      <div className="mx-auto max-w-[1380px] px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 xl:grid-cols-[220px_1fr_420px] xl:gap-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#72819A] sm:text-[12px]">
              {language === 'tr' ? 'ACADEMIA Nedir' : 'What ACADEMIA Is'}
            </p>
          </div>

          <div className="max-w-[720px]">
            <h2 className="text-[28px] font-light leading-[1.12] tracking-[-0.03em] text-[#142033] sm:text-[32px] md:text-[36px] lg:text-[46px]">
              {language === 'tr'
                ? 'Geleneksel bir danışmanlık şirketi değil.'
                : 'Not a conventional consulting firm.'}
            </h2>

            <p className="mt-5 text-[15px] leading-[1.8] text-[#5E7088] sm:mt-8 sm:text-[16px] md:text-[18px] md:leading-[1.9]">
              {language === 'tr'
                ? 'ACADEMIA; kurumların kurumsal, düzenleyici, kalite ve sürdürülebilirlik zorluklarında yön bulmasına yardımcı olmak için tasarlanmış çok disiplinli bir danışmanlık ekosistemidir.'
                : 'ACADEMIA is a multi-disciplinary consulting ecosystem designed to help organizations navigate institutional, regulatory, quality, and sustainability challenges.'}
            </p>

            <p className="mt-4 text-[15px] leading-[1.8] text-[#5E7088] sm:mt-6 sm:text-[16px] md:text-[18px] md:leading-[1.9]">
              {language === 'tr'
                ? 'ACADEMIA izole danışmanlık hizmetleri sunmaz. Bunun yerine kurumların uzun vadeli kurumsal kapasite geliştirmesine yardımcı olan sistemler, yönetişim yapıları ve stratejik çerçeveler tasarlar.'
                : 'Rather than delivering isolated consulting services, ACADEMIA works as a system architect—designing integrated frameworks that help organizations build structure and strengthen long-term institutional capacity.'}
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] border border-[#D9D6CE] sm:rounded-[22px] lg:aspect-auto">
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

/* ─── Expertise Architecture ─── */
function ExpertiseArchitectureSection({ language }) {
  const items = expertiseItems[language];

  return (
    <section id="expertise" className="border-t border-[#D9D6CE] bg-[#F8F6F1]">
      <div className="mx-auto max-w-[1380px] px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 xl:grid-cols-[220px_1fr] xl:gap-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#72819A] sm:text-[12px]">
              {language === 'tr' ? 'Uzmanlık Mimarisi' : 'Expertise Architecture'}
            </p>
          </div>

          <div>
            <div className="max-w-[860px]">
              <h2 className="text-[26px] font-light leading-[1.12] tracking-[-0.03em] text-[#142033] sm:text-[30px] md:text-[34px] lg:text-[46px]">
                {language === 'tr'
                  ? 'Bir hizmet listesi değil, yapılandırılmış bir uzmanlık sistemi.'
                  : 'Not a list of services, but a structured system of expertise.'}
              </h2>

              <p className="mt-4 max-w-[760px] text-[15px] leading-[1.8] text-[#5E7088] sm:mt-6 sm:text-[16px] md:text-[18px] md:leading-[1.9]">
                {language === 'tr'
                  ? 'ACADEMIA\'nın çalışma alanları; kurumların düzenleyici, teknik, yönetsel ve sürdürülebilirlik dönüşümünü destekleyen birbiriyle ilişkili uzmanlık alanları olarak yapılandırılmıştır.'
                  : 'ACADEMIA\'s work is organized as interconnected domains of expertise that support regulatory, technical, managerial, and sustainability transformation.'}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:mt-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 xl:grid-cols-3">
              {items.map((item) => (
                <div key={item.number} className="border-t border-[#D9D6CE] pt-5 sm:pt-6">
                  <div className="mb-3 flex items-center gap-3 sm:mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md border border-[#D9D6CE] text-[15px] text-[#142033] sm:h-10 sm:w-10 sm:text-[16px]">
                      {item.icon}
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.24em] text-[#C18A4A] sm:text-[12px]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-[20px] font-medium leading-[1.25] text-[#142033] sm:text-[24px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.75] text-[#5E7088] sm:mt-4 sm:text-[16px] sm:leading-[1.85]">
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

/* ─── How ACADEMIA Works ─── */
function HowAcademiaWorksSection({ language }) {
  const items = processItems[language];

  return (
    <section id="how-it-works" className="border-t border-[#D9D6CE] bg-[#F5F3EE]">
      <div className="mx-auto max-w-[1380px] px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 xl:grid-cols-[220px_1fr] xl:gap-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#72819A] sm:text-[12px]">
              {language === 'tr' ? 'ACADEMIA Nasıl Çalışır' : 'How ACADEMIA Works'}
            </p>
          </div>

          <div>
            <div className="max-w-[880px]">
              <h2 className="text-[26px] font-light leading-[1.12] tracking-[-0.03em] text-[#142033] sm:text-[30px] md:text-[34px] lg:text-[46px]">
                {language === 'tr'
                  ? 'Danışmanlık değil, sistematik dönüşüm süreci.'
                  : 'Not consulting as a service, but transformation as a structured process.'}
              </h2>

              <p className="mt-4 max-w-[780px] text-[15px] leading-[1.8] text-[#5E7088] sm:mt-6 sm:text-[16px] md:text-[18px] md:leading-[1.9]">
                {language === 'tr'
                  ? 'ACADEMIA her çalışmayı bağımsız bir görev olarak değil, kurumsal yapıyı güçlendiren bütünsel bir süreç olarak ele alır.'
                  : 'ACADEMIA approaches each engagement not as an isolated task, but as a structured process that strengthens institutional clarity.'}
              </p>
            </div>

            {/* Desktop layout */}
            <div className="mt-14 hidden xl:block">
              <div className="relative">
                <div className="absolute left-0 right-0 top-[34px] h-px bg-[#D9D6CE]" />
                <div className="grid grid-cols-4 gap-8">
                  {items.map((item) => (
                    <div key={item.number} className="relative">
                      <div className="mb-8 flex items-center gap-4">
                        <div className="relative z-10 flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#142033] bg-[#F5F3EE]">
                          <span className="text-[15px] font-medium text-[#142033]">{item.number}</span>
                        </div>
                      </div>
                      <h3 className="text-[24px] font-medium leading-[1.25] text-[#142033]">{item.title}</h3>
                      <p className="mt-4 max-w-[280px] text-[16px] leading-[1.85] text-[#5E7088]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tablet layout — 2 columns */}
            <div className="mt-10 hidden sm:grid sm:grid-cols-2 sm:gap-6 xl:hidden">
              {items.map((item) => (
                <div key={item.number} className="border-t border-[#D9D6CE] pt-5">
                  <div className="mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#142033]">
                    <span className="text-[14px] font-medium text-[#142033]">{item.number}</span>
                  </div>
                  <h3 className="text-[20px] font-medium leading-[1.25] text-[#142033]">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.8] text-[#5E7088]">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Mobile layout — single column */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:hidden">
              {items.map((item) => (
                <div key={item.number} className="grid grid-cols-[56px_1fr] gap-4 border-t border-[#D9D6CE] pt-5">
                  <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#142033]">
                    <span className="text-[13px] font-medium text-[#142033]">{item.number}</span>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-medium leading-[1.25] text-[#142033]">{item.title}</h3>
                    <p className="mt-2 text-[14px] leading-[1.75] text-[#5E7088]">{item.desc}</p>
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

/* ─── Logo Marquee ─── */
function LogoMarquee({ items, reverse = false }) {
  const duplicated = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#F5F3EE] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#F5F3EE] to-transparent" />

      <div className={`marquee-track flex min-w-max gap-4 py-2 sm:gap-6 sm:py-3 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {duplicated.map((logo, index) => (
          <a
            key={`${logo.name}-${index}`}
            href={logo.href || '#'}
            className="group flex h-[72px] w-[140px] shrink-0 items-center justify-center rounded-xl border border-[#DDD8CF] bg-[#FAF8F3] px-4 transition duration-300 hover:border-[#D89A4A] hover:bg-white sm:h-[96px] sm:w-[180px] sm:rounded-2xl sm:px-6"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="max-h-[32px] max-w-[100px] object-contain opacity-60 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-[42px] sm:max-w-[130px]"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─── Ecosystem ─── */
function EcosystemSection({ language }) {
  const ventures = [
    {
      name: 'KLEXAI',
      url: 'https://www.klexai.com/',
      logo: '/logos/klexai.png',
      desc: {
        en: 'AI-powered customer support assistant platform. Builds brand-safe, multilingual conversational AI systems that scale enterprise communication.',
        tr: 'Yapay zeka destekli müşteri destek asistanı platformu. Kurumsal iletişimi ölçeklendiren, marka güvenli ve çok dilli konuşma AI sistemleri geliştirir.',
      },
    },
    {
      name: 'Carbonless Network',
      url: 'https://www.carbonless.network/',
      logo: '/logos/carbonless.png',
      desc: {
        en: 'Carbon and sustainability intelligence platform. Enables organizations to measure, track, and reduce emissions with standards-aligned digital infrastructure.',
        tr: 'Karbon ve sürdürülebilirlik istihbarat platformu. Kurumlara standartlara uyumlu dijital altyapıyla emisyonlarını ölçme, izleme ve azaltma imkanı sunar.',
      },
    },
    {
      name: 'Sustindex',
      url: 'https://www.sustindex.com/',
      logo: '/logos/sustindex.png',
      desc: {
        en: 'Sustainability measurement and evaluation platform. Helps organizations assess performance, align with international standards, and drive data-driven decisions.',
        tr: 'Sürdürülebilirlik ölçüm ve değerlendirme platformu. Kurumların performansını değerlendirmesine, uluslararası standartlara uyum sağlamasına ve veriye dayalı kararlar almasına yardımcı olur.',
      },
    },
  ];

  return (
    <section id="ecosystem" className="border-t border-[#D9D6CE] bg-[#F5F3EE]">
      <div className="mx-auto max-w-[1380px] px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 xl:grid-cols-[220px_1fr] xl:gap-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#72819A] sm:text-[12px]">
              {language === 'tr' ? 'ACADEMIA Grup' : 'ACADEMIA Group'}
            </p>
          </div>

          <div>
            <div className="max-w-[860px]">
              <h2 className="text-[26px] font-light leading-[1.12] tracking-[-0.03em] text-[#142033] sm:text-[30px] md:text-[34px] lg:text-[46px]">
                {language === 'tr'
                  ? 'Bir şirketler grubu. Tek bir vizyon.'
                  : 'A group of companies. One vision.'}
              </h2>
              <p className="mt-4 max-w-[760px] text-[15px] leading-[1.8] text-[#5E7088] sm:mt-6 sm:text-[16px] md:text-[18px] md:leading-[1.9]">
                {language === 'tr'
                  ? 'ACADEMIA, ana şirket olarak teknoloji ve sürdürülebilirlik alanlarında faaliyet gösteren uzmanlaşmış şirketleri bünyesinde barındırır.'
                  : 'As the parent company, ACADEMIA houses specialized subsidiaries operating across technology and sustainability.'}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-8 md:grid-cols-3">
              {ventures.map((v) => (
                <a
                  key={v.name}
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-[#D9D6CE] bg-[#F8F6F1] p-5 transition hover:border-[#D89A4A] hover:shadow-md sm:p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <img src={v.logo} alt={v.name} className="h-10 w-auto object-contain sm:h-11" />
                  </div>
                  <p className="text-[14px] leading-[1.75] text-[#5E7088] sm:text-[15px] sm:leading-[1.8]">
                    {v.desc[language] || v.desc.en}
                  </p>
                  <div className="mt-4 text-[13px] font-medium text-[#D89A4A] transition group-hover:underline sm:text-[14px]">
                    {language === 'tr' ? 'Siteyi Ziyaret Et →' : 'Visit Website →'}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Insights ─── */
function InsightsSection({ language }) {
  const insights = {
    en: [
      { tag: 'Governance', title: 'Why institutional governance is more than compliance', desc: 'Governance frameworks should be designed to support strategic clarity, not just regulatory obligation.' },
      { tag: 'Sustainability', title: 'ESG as a structural framework, not a reporting exercise', desc: 'Organizations that treat ESG as architecture rather than disclosure build more resilient systems.' },
      { tag: 'Quality Systems', title: 'From certification to capability: rethinking ISO implementation', desc: 'Standards like ISO 9001 deliver the most value when embedded into institutional learning systems.' },
    ],
    tr: [
      { tag: 'Yönetişim', title: 'Kurumsal yönetişim neden uyumdan fazlasıdır', desc: 'Yönetişim çerçeveleri yalnızca düzenleyici yükümlülükleri değil, stratejik netliği destekleyecek şekilde tasarlanmalıdır.' },
      { tag: 'Sürdürülebilirlik', title: 'ESG: bir raporlama egzersizi değil, yapısal bir çerçeve', desc: 'ESG\'yi bir raporlama aracı değil, kurumsal mimari olarak ele alan organizasyonlar daha dayanıklı sistemler kurar.' },
      { tag: 'Kalite Sistemleri', title: 'Belgelendirmeden kapasiteye: ISO uygulamasını yeniden düşünmek', desc: 'ISO 9001 gibi standartlar, kurumsal öğrenme sistemlerine entegre edildiğinde en yüksek değeri üretir.' },
    ],
  };

  const items = insights[language] || insights.en;
  const colors = ['border-[#D89A4A]', 'border-[#58C3E8]', 'border-[#142033]'];

  return (
    <section id="insights" className="border-t border-[#D9D6CE] bg-[#F8F6F1]">
      <div className="mx-auto max-w-[1380px] px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 xl:grid-cols-[220px_1fr] xl:gap-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#72819A] sm:text-[12px]">
              {language === 'tr' ? 'İçgörüler' : 'Insights'}
            </p>
          </div>

          <div>
            <div className="max-w-[860px]">
              <h2 className="text-[26px] font-light leading-[1.12] tracking-[-0.03em] text-[#142033] sm:text-[30px] md:text-[34px] lg:text-[46px]">
                {language === 'tr'
                  ? 'Kurumsal dönüşüme dair yapısal perspektifler.'
                  : 'Structural perspectives on institutional transformation.'}
              </h2>
              <p className="mt-4 max-w-[760px] text-[15px] leading-[1.8] text-[#5E7088] sm:mt-6 sm:text-[16px] md:text-[18px] md:leading-[1.9]">
                {language === 'tr'
                  ? 'ACADEMIA ekibinin yönetişim, sürdürülebilirlik ve kurumsal kapasite üzerine düşünceleri.'
                  : 'Reflections from the ACADEMIA team on governance, sustainability, and institutional capacity.'}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-8 md:grid-cols-3">
              {items.map((item, i) => (
                <div key={i} className={`border-l-2 ${colors[i]} bg-[#F5F3EE] rounded-r-xl p-5 sm:p-6`}>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#72819A] sm:text-[12px]">{item.tag}</span>
                  <h3 className="mt-3 text-[18px] font-medium leading-[1.3] text-[#142033] sm:text-[20px]">{item.title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.75] text-[#5E7088] sm:text-[15px] sm:leading-[1.8]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── References ─── */
function ReferencesSection({ language }) {
  return (
    <section className="border-t border-[#D9D6CE] bg-[#F5F3EE]">
      <div className="mx-auto max-w-[1380px] px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 xl:grid-cols-[220px_1fr] xl:gap-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#72819A] sm:text-[12px]">
              {language === 'tr' ? 'Referanslar' : 'Selected References'}
            </p>
          </div>

          <div>
            <div className="max-w-[920px]">
              <h2 className="text-[26px] font-light leading-[1.12] tracking-[-0.03em] text-[#142033] sm:text-[30px] md:text-[34px] lg:text-[46px]">
                {language === 'tr'
                  ? 'Kurumsal dönüşüm süreçlerinde güvenilen çözüm ortağı.'
                  : 'A trusted partner across institutional transformation initiatives.'}
              </h2>

              <p className="mt-4 max-w-[760px] text-[15px] leading-[1.8] text-[#5E7088] sm:mt-6 sm:text-[16px] md:text-[18px] md:leading-[1.9]">
                {language === 'tr'
                  ? 'ACADEMIA, farklı sektörlerde faaliyet gösteren kurumlarla yönetim sistemleri, teknik uyum, sürdürülebilirlik ve düzenleyici dönüşüm alanlarında çalışmıştır.'
                  : 'ACADEMIA has worked with organizations across multiple sectors in management systems, technical compliance, sustainability, and regulatory transformation.'}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
              {['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 27001'].map((item) => (
                <span key={item} className="rounded-full border border-[#D9D6CE] px-3 py-1.5 text-[12px] tracking-[0.08em] text-[#5E7088] sm:px-4 sm:py-2 sm:text-[13px]">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-4 sm:mt-14 sm:space-y-6">
              <LogoMarquee items={referenceLogos.slice(0, 8)} />
              <LogoMarquee items={referenceLogos.slice(4, 12)} reverse />
            </div>

            <div className="mt-6 sm:mt-8">
              <p className="text-[13px] leading-[1.7] text-[#72819A] sm:text-[14px] sm:leading-[1.8]">
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

/* ─── Page ─── */
export default function Page() {
  const { language } = useLanguage();
  const currentLanguage = language === 'tr' ? 'tr' : 'en';

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#142033]">
      <Header />

      <main className="pt-[56px] sm:pt-[64px]">
        <HeroSection language={currentLanguage} />
        <WhatAcademiaIsSection language={currentLanguage} />
        <ExpertiseArchitectureSection language={currentLanguage} />
        <HowAcademiaWorksSection language={currentLanguage} />
        <EcosystemSection language={currentLanguage} />
        <InsightsSection language={currentLanguage} />
        <ReferencesSection language={currentLanguage} />
      </main>
    </div>
  );
}
