'use client';

import { ArrowRight, Server, Leaf, ShieldCheck, GraduationCap } from 'lucide-react';
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

/* ─── Ecosystem Hero Panel ─── */
function EcosystemHeroPanel({ language }) {
  const items = language === 'tr'
    ? [
        { title: 'BT Standartları', eyebrow: 'INFORMATION', image: '/images/it-standards.jpg', icon: Server, accent: 'bg-[#58C3E8]', accentText: 'text-[#58C3E8]', number: '01' },
        { title: 'Sürdürülebilirlik & ESG', eyebrow: 'SUSTAINABILITY', image: '/images/sustainability.jpg', icon: Leaf, accent: 'bg-[#D89A4A]', accentText: 'text-[#D89A4A]', number: '02' },
        { title: 'Kalite & Yönetişim', eyebrow: 'QUALITY', image: '/images/quality.jpg', icon: ShieldCheck, accent: 'bg-[#142033]', accentText: 'text-[#142033]', number: '03' },
        { title: 'Eğitim & Gelişim', eyebrow: 'CAPABILITY', image: '/images/training.jpg', icon: GraduationCap, accent: 'bg-[#58C3E8]', accentText: 'text-[#58C3E8]', number: '04' },
      ]
    : [
        { title: 'IT Standards', eyebrow: 'INFORMATION', image: '/images/it-standards.jpg', icon: Server, accent: 'bg-[#58C3E8]', accentText: 'text-[#58C3E8]', number: '01' },
        { title: 'Sustainability & ESG', eyebrow: 'SUSTAINABILITY', image: '/images/sustainability.jpg', icon: Leaf, accent: 'bg-[#D89A4A]', accentText: 'text-[#D89A4A]', number: '02' },
        { title: 'Quality & Governance', eyebrow: 'QUALITY', image: '/images/quality.jpg', icon: ShieldCheck, accent: 'bg-[#142033]', accentText: 'text-[#142033]', number: '03' },
        { title: 'Training & Development', eyebrow: 'CAPABILITY', image: '/images/training.jpg', icon: GraduationCap, accent: 'bg-[#58C3E8]', accentText: 'text-[#58C3E8]', number: '04' },
      ];

  return (
    <div className="relative rounded-[28px] border border-[#D9D6CE] bg-[#FBF9F4] p-5 shadow-[0_12px_40px_rgba(20,32,51,0.035)] sm:p-6 lg:p-7">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute left-10 top-10 h-24 w-24 rounded-full bg-[#58C3E8]/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-12 h-24 w-24 rounded-full bg-[#D89A4A]/[0.05] blur-3xl" />

      {/* badge */}
      <div className="mb-6 flex justify-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-[#D9D6CE] bg-white px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#72819A] shadow-[0_8px_24px_rgba(20,32,51,0.05)]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#D89A4A]" />
          {language === 'tr' ? 'Ekosistem' : 'Ecosystem'}
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group relative h-[185px] overflow-hidden rounded-[24px] border border-[#E2DDD3] bg-white transition duration-500 hover:-translate-y-[2px] hover:border-[#CDBFA8] hover:shadow-[0_18px_36px_rgba(20,32,51,0.08)] sm:h-[200px]"
            >
              {/* image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.05] group-hover:grayscale-0"
              />

              {/* layered overlays */}
              <div className="absolute inset-0 bg-[#F8F6F1]/[0.72] backdrop-blur-[1.5px] transition duration-500 group-hover:bg-[#F8F6F1]/[0.58]" />
              <div className="absolute inset-0 bg-white/[0.22]" />

              {/* accent glow */}
              <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/20 blur-2xl" />

              {/* content */}
              <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
                {/* top row */}
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#8A97AB]">{item.eyebrow}</p>
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${item.accent}`} />
                    <span className="text-[11px] uppercase tracking-[0.18em] text-[#C18A4A]">{item.number}</span>
                  </div>
                </div>

                {/* center icon */}
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/50 bg-white/55 shadow-[0_6px_18px_rgba(20,32,51,0.05)] backdrop-blur-sm transition duration-500 group-hover:scale-[1.04]">
                    <Icon className={`h-5 w-5 ${item.accentText}`} strokeWidth={1.8} />
                  </div>
                </div>

                {/* title */}
                <h3 className="max-w-[260px] text-[22px] font-medium leading-[1.14] tracking-[-0.02em] text-[#142033] sm:text-[24px]">
                  {item.title}
                </h3>
              </div>

              {/* animated border shine */}
              <div className="card-shine pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" />
            </div>
          );
        })}
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
          backgroundSize: '72px 72px',
        }}
      />
      <div className="mx-auto max-w-[1380px] px-4 pb-10 pt-6 sm:px-6 lg:px-8 lg:pb-14 lg:pt-8">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-center xl:gap-10">
          <div className="pt-2">
            <h1 className="mt-4 max-w-[760px] text-[40px] font-light leading-[0.96] tracking-[-0.05em] text-[#142033] sm:text-[48px] md:text-[56px] xl:text-[72px]">
              {language === 'tr' ? (
                <>Kurumsal dönüşüm için<br /><span className="font-semibold">stratejik bir</span><br />ekosistem</>
              ) : (
                <>A strategic ecosystem<br />for <span className="font-semibold">institutional</span><br />transformation</>
              )}
            </h1>

            <p className="mt-6 max-w-[700px] text-[17px] leading-[1.75] text-[#60708A] sm:text-[18px] md:text-[19px] xl:text-[21px]">
              {language === 'tr'
                ? 'ACADEMIA, kurumların kurumsal, düzenleyici, kalite ve sürdürülebilirlik çerçevelerini uzun vadeli yapısal netlikle tasarlamasına ve uygulamasına yardımcı olur.'
                : 'ACADEMIA helps organizations design and implement institutional, regulatory, quality, and sustainability frameworks with long-term structural clarity.'}
            </p>

            <div className="mt-8 grid max-w-[460px] grid-cols-3 gap-3 sm:gap-4">
              {[
                { val: '150+', label: language === 'tr' ? 'Proje' : 'Projects' },
                { val: '80+', label: language === 'tr' ? 'Kurum' : 'Organizations' },
                { val: '6', label: language === 'tr' ? 'Uzmanlık Alanı' : 'Expertise Areas' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-[#D9D6CE] bg-[#FAF8F3] px-4 py-4">
                  <p className="text-[24px] font-semibold text-[#142033]">{s.val}</p>
                  <p className="mt-1 text-[12px] uppercase tracking-[0.14em] text-[#72819A]">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
              <a href="#expertise" className="inline-flex items-center gap-3 rounded-full bg-[#0F1A32] px-6 py-3.5 text-[15px] font-medium text-white transition hover:bg-[#D89A4A] sm:px-8 sm:py-4 sm:text-[16px]">
                {language === 'tr' ? 'Ekosistemi Keşfet' : 'Explore the Ecosystem'}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#how-it-works" className="inline-flex items-center gap-3 rounded-full border border-[#142033] px-6 py-3.5 text-[15px] font-medium text-[#142033] transition hover:bg-[#142033] hover:text-white sm:px-8 sm:py-4 sm:text-[16px]">
                {language === 'tr' ? 'Nasıl Çalışır' : 'How It Works'}
              </a>
            </div>
          </div>

          <div className="xl:pl-2">
            <EcosystemHeroPanel language={language} />
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
      <div className="mx-auto max-w-[1380px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-[180px_1fr_360px] xl:gap-14">
          <div>
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#72819A]">
              {language === 'tr' ? 'ACADEMIA Nedir' : 'What ACADEMIA Is'}
            </p>
          </div>
          <div className="max-w-[720px]">
            <h2 className="text-[30px] font-light leading-[1.1] tracking-[-0.03em] text-[#142033] sm:text-[36px] lg:text-[46px]">
              {language === 'tr' ? 'Geleneksel bir danışmanlık şirketi değil.' : 'Not a conventional consulting firm.'}
            </h2>
            <p className="mt-6 text-[17px] leading-[1.9] text-[#5E7088] sm:text-[18px]">
              {language === 'tr'
                ? 'ACADEMIA; kurumların kurumsal, düzenleyici, kalite ve sürdürülebilirlik zorluklarında yön bulmasına yardımcı olmak için tasarlanmış çok disiplinli bir danışmanlık ekosistemidir.'
                : 'ACADEMIA is a multi-disciplinary consulting ecosystem designed to help organizations navigate institutional, regulatory, quality, and sustainability challenges.'}
            </p>
            <p className="mt-5 text-[17px] leading-[1.9] text-[#5E7088] sm:text-[18px]">
              {language === 'tr'
                ? 'ACADEMIA izole danışmanlık hizmetleri sunmaz. Bunun yerine kurumların uzun vadeli kurumsal kapasite geliştirmesine yardımcı olan sistemler, yönetişim yapıları ve stratejik çerçeveler tasarlar.'
                : 'Rather than delivering isolated consulting services, ACADEMIA works as a system architect—designing integrated frameworks that help organizations build structure and strengthen long-term institutional capacity.'}
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[22px] border border-[#D9D6CE] xl:mt-0">
            <img src="/images/strategic-planning.jpg" alt="Strategic planning and systems" className="h-full w-full object-cover" />
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
      <div className="mx-auto max-w-[1380px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-[220px_1fr] xl:gap-16">
          <div>
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#72819A]">
              {language === 'tr' ? 'Uzmanlık Mimarisi' : 'Expertise Architecture'}
            </p>
          </div>
          <div>
            <div className="max-w-[860px]">
              <h2 className="text-[30px] font-light leading-[1.1] tracking-[-0.03em] text-[#142033] sm:text-[36px] lg:text-[46px]">
                {language === 'tr'
                  ? 'Bir hizmet listesi değil, yapılandırılmış bir uzmanlık sistemi.'
                  : 'Not a list of services, but a structured system of expertise.'}
              </h2>
              <p className="mt-6 max-w-[760px] text-[17px] leading-[1.9] text-[#5E7088] sm:text-[18px]">
                {language === 'tr'
                  ? "ACADEMIA'nın çalışma alanları; kurumların düzenleyici, teknik, yönetsel ve sürdürülebilirlik dönüşümünü destekleyen birbiriyle ilişkili uzmanlık alanları olarak yapılandırılmıştır."
                  : "ACADEMIA's work is organized as interconnected domains of expertise that support regulatory, technical, managerial, and sustainability transformation."}
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 2xl:grid-cols-3">
              {items.map((item) => (
                <div key={item.number} className="border-t border-[#D9D6CE] pt-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#D9D6CE] text-[16px] text-[#142033]">{item.icon}</div>
                    <span className="text-[12px] uppercase tracking-[0.24em] text-[#C18A4A]">{item.number}</span>
                  </div>
                  <h3 className="text-[22px] font-medium leading-[1.25] text-[#142033] sm:text-[24px]">{item.title}</h3>
                  <p className="mt-4 text-[15px] leading-[1.85] text-[#5E7088] sm:text-[16px]">{item.desc}</p>
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
      <div className="mx-auto max-w-[1380px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-[220px_1fr] xl:gap-16">
          <div>
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#72819A]">
              {language === 'tr' ? 'ACADEMIA Nasıl Çalışır' : 'How ACADEMIA Works'}
            </p>
          </div>
          <div>
            <div className="max-w-[880px]">
              <h2 className="text-[30px] font-light leading-[1.1] tracking-[-0.03em] text-[#142033] sm:text-[36px] lg:text-[46px]">
                {language === 'tr'
                  ? 'Danışmanlık değil, sistematik dönüşüm süreci.'
                  : 'Not consulting as a service, but transformation as a structured process.'}
              </h2>
              <p className="mt-6 max-w-[780px] text-[17px] leading-[1.9] text-[#5E7088] sm:text-[18px]">
                {language === 'tr'
                  ? 'ACADEMIA her çalışmayı bağımsız bir görev olarak değil, kurumsal yapıyı güçlendiren bütünsel bir süreç olarak ele alır.'
                  : 'ACADEMIA approaches each engagement not as an isolated task, but as a structured process that strengthens institutional clarity.'}
              </p>
            </div>

            {/* Desktop 4-col layout */}
            <div className="mt-12 hidden 2xl:block">
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

            {/* Tablet/mobile layout */}
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 2xl:hidden">
              {items.map((item) => (
                <div key={item.number} className="grid grid-cols-[64px_1fr] gap-4 border-t border-[#D9D6CE] pt-6">
                  <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full border border-[#142033]">
                    <span className="text-[14px] font-medium text-[#142033]">{item.number}</span>
                  </div>
                  <div>
                    <h3 className="text-[22px] font-medium leading-[1.25] text-[#142033] sm:text-[24px]">{item.title}</h3>
                    <p className="mt-3 text-[15px] leading-[1.85] text-[#5E7088] sm:text-[16px]">{item.desc}</p>
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
      <div className="mx-auto max-w-[1380px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-[220px_1fr] xl:gap-16">
          <div>
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#72819A]">
              {language === 'tr' ? 'ACADEMIA Grup' : 'ACADEMIA Group'}
            </p>
          </div>
          <div>
            <div className="max-w-[860px]">
              <h2 className="text-[30px] font-light leading-[1.1] tracking-[-0.03em] text-[#142033] sm:text-[36px] lg:text-[46px]">
                {language === 'tr' ? 'Bir şirketler grubu. Tek bir vizyon.' : 'A group of companies. One vision.'}
              </h2>
              <p className="mt-6 max-w-[760px] text-[17px] leading-[1.9] text-[#5E7088] sm:text-[18px]">
                {language === 'tr'
                  ? 'ACADEMIA, ana şirket olarak teknoloji ve sürdürülebilirlik alanlarında faaliyet gösteren uzmanlaşmış şirketleri bünyesinde barındırır.'
                  : 'As the parent company, ACADEMIA houses specialized subsidiaries operating across technology and sustainability.'}
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-8 md:grid-cols-3">
              {ventures.map((v) => (
                <a key={v.name} href={v.url} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-[#D9D6CE] bg-[#F8F6F1] p-5 transition hover:border-[#D89A4A] hover:shadow-md sm:p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <img src={v.logo} alt={v.name} className="h-10 w-auto object-contain sm:h-11" />
                  </div>
                  <p className="text-[14px] leading-[1.75] text-[#5E7088] sm:text-[15px] sm:leading-[1.8]">{v.desc[language] || v.desc.en}</p>
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
      { tag: 'Quality Systems', title: 'From certification to capability: rethinking ISO implementation', desc: 'Standards like ISO 9001 deliver the most value when integrated into institutional learning systems.' },
    ],
    tr: [
      { tag: 'Yönetişim', title: 'Kurumsal yönetişim neden uyumdan fazlasıdır', desc: 'Yönetişim çerçeveleri yalnızca düzenleyici yükümlülükleri değil, stratejik netliği destekleyecek şekilde tasarlanmalıdır.' },
      { tag: 'Sürdürülebilirlik', title: 'ESG: bir raporlama egzersizi değil, yapısal bir çerçeve', desc: "ESG'yi bir raporlama aracı değil, kurumsal mimari olarak ele alan organizasyonlar daha dayanıklı sistemler kurar." },
      { tag: 'Kalite Sistemleri', title: 'Belgelendirmeden kapasiteye: ISO uygulamasını yeniden düşünmek', desc: 'ISO 9001 gibi standartlar, kurumsal öğrenme sistemlerine entegre edildiğinde en yüksek değeri üretir.' },
    ],
  };
  const items = insights[language] || insights.en;
  const colors = ['border-[#D89A4A]', 'border-[#58C3E8]', 'border-[#142033]'];

  return (
    <section id="insights" className="border-t border-[#D9D6CE] bg-[#F8F6F1]">
      <div className="mx-auto max-w-[1380px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-[220px_1fr] xl:gap-16">
          <div>
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#72819A]">
              {language === 'tr' ? 'İçgörüler' : 'Insights'}
            </p>
          </div>
          <div>
            <div className="max-w-[860px]">
              <h2 className="text-[30px] font-light leading-[1.1] tracking-[-0.03em] text-[#142033] sm:text-[36px] lg:text-[46px]">
                {language === 'tr'
                  ? 'Kurumsal dönüşüme dair yapısal perspektifler.'
                  : 'Structural perspectives on institutional transformation.'}
              </h2>
              <p className="mt-6 max-w-[760px] text-[17px] leading-[1.9] text-[#5E7088] sm:text-[18px]">
                {language === 'tr'
                  ? 'ACADEMIA ekibinin yönetişim, sürdürülebilirlik ve kurumsal kapasite üzerine düşünceleri.'
                  : 'Reflections from the ACADEMIA team on governance, sustainability, and institutional capacity.'}
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-8 md:grid-cols-3">
              {items.map((item, i) => (
                <div key={i} className={`border-l-2 ${colors[i]} rounded-r-xl bg-[#F5F3EE] p-5 sm:p-6`}>
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

/* ─── Logo Marquee ─── */
function LogoMarquee({ items, reverse = false }) {
  const duplicated = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#F5F3EE] to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#F5F3EE] to-transparent sm:w-24" />
      <div className={`marquee-track flex min-w-max gap-4 py-3 sm:gap-6 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {duplicated.map((logo, index) => (
          <a key={`${logo.name}-${index}`} href={logo.href || '#'} className="group flex h-[86px] w-[150px] shrink-0 items-center justify-center rounded-2xl border border-[#DDD8CF] bg-[#FAF8F3] px-5 transition duration-300 hover:border-[#D89A4A] hover:bg-white sm:h-[96px] sm:w-[180px] sm:px-6">
            <img src={logo.src} alt={logo.name} className="max-h-[38px] max-w-[110px] object-contain opacity-60 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-[42px] sm:max-w-[130px]" />
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─── References ─── */
function ReferencesSection({ language }) {
  return (
    <section className="overflow-x-hidden border-t border-[#D9D6CE] bg-[#F5F3EE]">
      <div className="mx-auto max-w-[1380px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-[220px_1fr] xl:gap-16">
          <div>
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#72819A]">
              {language === 'tr' ? 'Referanslar' : 'Selected References'}
            </p>
          </div>
          <div>
            <div className="max-w-[920px]">
              <h2 className="text-[30px] font-light leading-[1.1] tracking-[-0.03em] text-[#142033] sm:text-[36px] lg:text-[46px]">
                {language === 'tr'
                  ? 'Kurumsal dönüşüm süreçlerinde güvenilen çözüm ortağı.'
                  : 'A trusted partner across institutional transformation initiatives.'}
              </h2>
              <p className="mt-6 max-w-[760px] text-[17px] leading-[1.9] text-[#5E7088] sm:text-[18px]">
                {language === 'tr'
                  ? 'ACADEMIA, farklı sektörlerde faaliyet gösteren kurumlarla yönetim sistemleri, teknik uyum, sürdürülebilirlik ve düzenleyici dönüşüm alanlarında çalışmıştır.'
                  : 'ACADEMIA has worked with organizations across multiple sectors in management systems, technical compliance, sustainability, and regulatory transformation.'}
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 27001'].map((item) => (
                <span key={item} className="rounded-full border border-[#D9D6CE] px-4 py-2 text-[12px] tracking-[0.08em] text-[#5E7088] sm:text-[13px]">{item}</span>
              ))}
            </div>
            <div className="mt-12 space-y-5 sm:mt-14 sm:space-y-6">
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

/* ─── Page ─── */
export default function Page() {
  const { language } = useLanguage();
  const currentLanguage = language === 'tr' ? 'tr' : 'en';

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F5F3EE] text-[#142033]">
      <Header />
      <main className="overflow-x-hidden pt-[72px] lg:pt-[82px]">
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
