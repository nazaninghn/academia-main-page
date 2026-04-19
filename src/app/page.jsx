'use client';

import { ArrowRight, Server, Leaf, ShieldCheck, GraduationCap, BrainCircuit } from 'lucide-react';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';

const referenceLogos = [
  { name: 'Gorenje', href: 'https://www.gorenje.com/', logo: '/references/gorenje.png' },
  { name: 'Odin', href: 'https://odine.com/tr/', logo: '/references/odin.png' },
  { name: 'JForce', href: 'https://jforce.com.tr/tr/anasayfa/', logo: '/references/jforce.png' },
  { name: 'TÜV Austria', href: 'https://tr.tuvaustria.com/', logo: '/references/tuv-austria.png' },
  { name: 'LRQA', href: 'https://www.lrqa.com/tr-tr/', logo: '/references/lrqa.png' },
  { name: 'Vega', href: 'https://www.vegalojistik.com.tr/', logo: '/references/vega.png' },
  { name: 'CSI', href: 'https://www.csi-spa.com/en', logo: '/references/csi.png' },
  { name: 'Evolog', href: 'https://www.evolog.com.tr/', logo: '/references/evolog.png' },
  { name: 'TOBB', href: 'https://www.tobb.org.tr/', logo: '/references/tobb.png' },
  { name: 'TI Sparkle', href: 'https://www.tisparkle.com/turkey', logo: '/references/ti-sparkle.png' },
  { name: 'Bayegan', href: 'https://bayegan.net/', logo: '/references/bayegan.png' },
  { name: 'Vinteks', href: 'https://vinteks.com/', logo: '/references/vinteks.png' },
  { name: 'CFLEX Asaş', href: 'https://www.cflex.com/', logo: '/references/cflex.png' },
  { name: 'GTech', href: 'https://www.gtech.com.tr/en/home/', logo: '/references/gtech.png' },
  { name: 'Sicpa', href: 'https://www.sicpaturkey.com.tr/tr', logo: '/references/sicpa.png' },
  { name: 'Erciyas', href: 'https://erciyas.com/', logo: '/references/erciyas.png' },
  { name: 'TPAO', href: 'https://www.tpao.gov.tr/', logo: '/references/tpao.png' },
  { name: 'TED', href: 'https://ted.org.tr/', logo: '/references/ted.png' },
  { name: 'Dünya Varlık', href: 'https://www.dunyavarlik.com/', logo: '/references/dunya-varlik.png' },
  { name: 'İsttelkom', href: 'https://isttelkom.istanbul/', logo: '/references/isttelkom.png' },
  { name: 'PSA BDP', href: 'https://psabdp.com/', logo: '/references/psa-bdp.png' },
  { name: 'ISS', href: 'https://www.issworld.com/tr-tr', logo: '/references/iss.png' },
];

const expertiseItems = {
  en: [
    { number: '01', title: 'Management Systems', desc: 'Designing and improving management systems aligned with institutional quality, governance, and operational consistency.', icon: '⌘' },
    { number: '02', title: 'Product & Technical Compliance', desc: 'Supporting certification, technical documentation, and standards alignment for products entering regulated markets.', icon: '◌' },
    { number: '03', title: 'Strategic Projects', desc: 'Structuring projects, support applications, and implementation programs with long-term institutional relevance.', icon: '↗' },
    { number: '04', title: 'Regulatory Alignment', desc: 'Helping organizations interpret and implement legal and regulatory requirements through structured frameworks.', icon: '⊞' },
    { number: '05', title: 'Capability Development', desc: 'Building institutional learning systems, training structures, and internal competency development programs.', icon: '◫' },
    { number: '06', title: 'Sustainability & ESG', desc: 'Developing sustainability, governance, and ESG-oriented frameworks for long-term organizational adaptation.', icon: '↘' },
    { number: '07', title: 'AI Governance & Compliance', desc: 'Helping organizations build AI risk management frameworks, implement ISO/IEC 42001, and align with emerging AI regulations including the EU AI Act.', icon: '◎' },
  ],
  tr: [
    { number: '01', title: 'Yönetim Sistemleri', desc: 'Kurumsal kalite, yönetişim ve operasyonel tutarlılık ile uyumlu yönetim sistemlerinin tasarlanması ve geliştirilmesi.', icon: '⌘' },
    { number: '02', title: 'Ürün ve Teknik Uyum', desc: 'Düzenlemeye tabi pazarlara giren ürünler için belgelendirme, teknik dokümantasyon ve standart uyumunun desteklenmesi.', icon: '◌' },
    { number: '03', title: 'Stratejik Projeler', desc: 'Uzun vadeli kurumsal değer üreten proje yapıları, destek başvuruları ve uygulama programlarının kurgulanması.', icon: '↗' },
    { number: '04', title: 'Düzenleyici Uyum', desc: 'Yasal ve düzenleyici gerekliliklerin yapılandırılmış çerçevelerle yorumlanması ve uygulanmasına destek verilmesi.', icon: '⊞' },
    { number: '05', title: 'Kapasite Geliştirme', desc: 'Kurumsal öğrenme sistemleri, eğitim yapıları ve iç yetkinlik geliştirme programlarının oluşturulması.', icon: '◫' },
    { number: '06', title: 'Sürdürülebilirlik ve ESG', desc: 'Uzun vadeli kurumsal adaptasyon için sürdürülebilirlik, yönetişim ve ESG odaklı yapıların geliştirilmesi.', icon: '↘' },
    { number: '07', title: 'Yapay Zeka Yönetişimi ve Uyum', desc: 'Kurumlara yapay zeka risk yönetimi çerçeveleri oluşturma, ISO/IEC 42001 uygulama ve AB AI Yasası dahil yeni düzenlemelere uyum konusunda destek verilmesi.', icon: '◎' },
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

/* ─── Abstract Patterns ─── */
function AbstractPattern({ variant }) {
  if (variant === 'it') {
    return (
      <svg viewBox="0 0 400 240" className="absolute inset-0 h-full w-full" fill="none">
        <defs>
          <linearGradient id="itGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#58C3E8" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#58C3E8" stopOpacity="0.03" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="400" height="240" fill="url(#itGlow)" />
        <path d="M30 180 H180 V90 H330" stroke="#58C3E8" strokeOpacity="0.18" strokeWidth="1.5" />
        <path d="M30 150 H130 V60 H260 V110 H360" stroke="#58C3E8" strokeOpacity="0.12" strokeWidth="1.5" />
        <circle cx="180" cy="180" r="4" fill="#58C3E8" fillOpacity="0.35" />
        <circle cx="180" cy="90" r="4" fill="#58C3E8" fillOpacity="0.35" />
        <circle cx="260" cy="60" r="4" fill="#58C3E8" fillOpacity="0.22" />
        <circle cx="260" cy="110" r="4" fill="#58C3E8" fillOpacity="0.22" />
      </svg>
    );
  }
  if (variant === 'esg') {
    return (
      <svg viewBox="0 0 400 240" className="absolute inset-0 h-full w-full" fill="none">
        <defs>
          <linearGradient id="esgGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#D89A4A" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#D89A4A" stopOpacity="0.03" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="400" height="240" fill="url(#esgGlow)" />
        <path d="M40 170 C90 120, 150 120, 190 170 C235 220, 305 220, 360 160" stroke="#D89A4A" strokeOpacity="0.18" strokeWidth="2" strokeLinecap="round" />
        <path d="M60 90 C120 50, 180 55, 225 100 C270 145, 320 145, 360 120" stroke="#D89A4A" strokeOpacity="0.12" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (variant === 'governance') {
    return (
      <svg viewBox="0 0 400 240" className="absolute inset-0 h-full w-full" fill="none">
        <defs>
          <linearGradient id="govGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#142033" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#142033" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="400" height="240" fill="url(#govGlow)" />
        <rect x="55" y="70" width="42" height="120" stroke="#142033" strokeOpacity="0.14" />
        <rect x="125" y="40" width="54" height="150" stroke="#142033" strokeOpacity="0.16" />
        <rect x="210" y="85" width="34" height="105" stroke="#142033" strokeOpacity="0.12" />
        <rect x="270" y="55" width="62" height="135" stroke="#142033" strokeOpacity="0.14" />
      </svg>
    );
  }
  if (variant === 'ai') {
    return (
      <svg viewBox="0 0 400 240" className="absolute inset-0 h-full w-full" fill="none">
        <defs>
          <linearGradient id="aiGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="400" height="240" fill="url(#aiGlow)" />
        <circle cx="200" cy="120" r="40" stroke="#8B5CF6" strokeOpacity="0.16" strokeWidth="1.5" />
        <circle cx="200" cy="120" r="18" stroke="#8B5CF6" strokeOpacity="0.22" strokeWidth="1.5" />
        <circle cx="200" cy="120" r="4" fill="#8B5CF6" fillOpacity="0.3" />
        <path d="M200 80 V50" stroke="#8B5CF6" strokeOpacity="0.14" strokeWidth="1.5" />
        <path d="M200 160 V190" stroke="#8B5CF6" strokeOpacity="0.14" strokeWidth="1.5" />
        <path d="M160 120 H130" stroke="#8B5CF6" strokeOpacity="0.14" strokeWidth="1.5" />
        <path d="M240 120 H270" stroke="#8B5CF6" strokeOpacity="0.14" strokeWidth="1.5" />
        <path d="M172 92 L152 72" stroke="#8B5CF6" strokeOpacity="0.10" strokeWidth="1.5" />
        <path d="M228 148 L248 168" stroke="#8B5CF6" strokeOpacity="0.10" strokeWidth="1.5" />
        <circle cx="200" cy="50" r="4" fill="#8B5CF6" fillOpacity="0.2" />
        <circle cx="200" cy="190" r="4" fill="#8B5CF6" fillOpacity="0.2" />
        <circle cx="130" cy="120" r="4" fill="#8B5CF6" fillOpacity="0.2" />
        <circle cx="270" cy="120" r="4" fill="#8B5CF6" fillOpacity="0.2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 240" className="absolute inset-0 h-full w-full" fill="none">
      <defs>
        <linearGradient id="capGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#58C3E8" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#58C3E8" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="400" height="240" fill="url(#capGlow)" />
      <circle cx="90" cy="100" r="6" fill="#58C3E8" fillOpacity="0.24" />
      <circle cx="165" cy="140" r="6" fill="#58C3E8" fillOpacity="0.18" />
      <circle cx="245" cy="90" r="6" fill="#58C3E8" fillOpacity="0.24" />
      <circle cx="315" cy="140" r="6" fill="#58C3E8" fillOpacity="0.18" />
      <path d="M96 100 L159 140 L239 90 L309 140" stroke="#58C3E8" strokeOpacity="0.18" strokeWidth="1.5" />
    </svg>
  );
}

/* ─── Ecosystem Hero Panel ─── */
function EcosystemHeroPanel({ language }) {
  const items = language === 'tr'
    ? [
        { title: 'BT Standartları', eyebrow: 'INFORMATION', icon: Server, accent: 'bg-[#58C3E8]', accentText: 'text-[#58C3E8]', number: '01', variant: 'it', anchor: 'expertise-01' },
        { title: 'Sürdürülebilirlik & ESG', eyebrow: 'SUSTAINABILITY', icon: Leaf, accent: 'bg-[#D89A4A]', accentText: 'text-[#D89A4A]', number: '02', variant: 'esg', anchor: 'expertise-02' },
        { title: 'Kalite & Yönetişim', eyebrow: 'QUALITY', icon: ShieldCheck, accent: 'bg-[#142033]', accentText: 'text-[#142033]', number: '03', variant: 'governance', anchor: 'expertise-03' },
        { title: 'Eğitim & Gelişim', eyebrow: 'CAPABILITY', icon: GraduationCap, accent: 'bg-[#58C3E8]', accentText: 'text-[#58C3E8]', number: '04', variant: 'capability', anchor: 'expertise-04' },
        { title: 'Yapay Zeka Yönetişimi', eyebrow: 'AI GOVERNANCE', icon: BrainCircuit, accent: 'bg-[#8B5CF6]', accentText: 'text-[#8B5CF6]', number: '05', variant: 'ai', anchor: 'expertise-05' },
      ]
    : [
        { title: 'IT Standards', eyebrow: 'INFORMATION', icon: Server, accent: 'bg-[#58C3E8]', accentText: 'text-[#58C3E8]', number: '01', variant: 'it', anchor: 'expertise-01' },
        { title: 'Sustainability & ESG', eyebrow: 'SUSTAINABILITY', icon: Leaf, accent: 'bg-[#D89A4A]', accentText: 'text-[#D89A4A]', number: '02', variant: 'esg', anchor: 'expertise-02' },
        { title: 'Quality & Governance', eyebrow: 'QUALITY', icon: ShieldCheck, accent: 'bg-[#142033]', accentText: 'text-[#142033]', number: '03', variant: 'governance', anchor: 'expertise-03' },
        { title: 'Training & Development', eyebrow: 'CAPABILITY', icon: GraduationCap, accent: 'bg-[#58C3E8]', accentText: 'text-[#58C3E8]', number: '04', variant: 'capability', anchor: 'expertise-04' },
        { title: 'AI Governance', eyebrow: 'AI GOVERNANCE', icon: BrainCircuit, accent: 'bg-[#8B5CF6]', accentText: 'text-[#8B5CF6]', number: '05', variant: 'ai', anchor: 'expertise-05' },
      ];

  /* Pentagon positions: top-center, upper-right, lower-right, lower-left, upper-left */
  const pentagonPositions = [
    { top: '0%',  left: '50%', translate: '-translate-x-1/2' },
    { top: '22%', left: '80%', translate: '-translate-x-1/2' },
    { top: '62%', left: '70%', translate: '-translate-x-1/2' },
    { top: '62%', left: '30%', translate: '-translate-x-1/2' },
    { top: '22%', left: '20%', translate: '-translate-x-1/2' },
  ];

  return (
    <div className="relative rounded-[14px] border border-[#D9D6CE] bg-[#FBF9F4] p-2 shadow-[0_12px_40px_rgba(20,32,51,0.035)] sm:rounded-[18px] sm:p-3 lg:p-4">
      <div className="pointer-events-none absolute left-10 top-10 h-24 w-24 rounded-full bg-[#58C3E8]/[0.035] blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-12 h-24 w-24 rounded-full bg-[#D89A4A]/[0.035] blur-3xl" />

      <div className="mb-6 flex justify-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-[#D9D6CE] bg-white px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#72819A] shadow-[0_8px_24px_rgba(20,32,51,0.05)]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#D89A4A]" />
          {language === 'tr' ? 'Ekosistem' : 'Ecosystem'}
        </div>
      </div>

      {/* ── Mobile / Tablet / Small Desktop: simple grid ── */}
      <div className="block xl:hidden">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === items.length - 1 && items.length % 2 !== 0;
            return (
              <a
                href={`#${item.anchor}`}
                key={item.title}
                className={`group relative block h-[160px] overflow-hidden rounded-[20px] border border-[#E2DDD3] bg-white transition duration-500 hover:-translate-y-[2px] hover:border-[#CDBFA8] hover:shadow-[0_18px_36px_rgba(20,32,51,0.08)] sm:h-[190px] ${isLast ? 'sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-span-1 lg:w-full' : ''}`}
              >
                <AbstractPattern variant={item.variant} />
                <div className="absolute inset-0 bg-[#F8F6F1]/[0.78] backdrop-blur-[0.5px] transition duration-500 group-hover:bg-[#F8F6F1]/[0.62]" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.18] via-transparent to-white/[0.12]" />
                <div className="absolute right-5 top-5 z-10 flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${item.accent}`} />
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#C18A4A]">{item.number}</span>
                </div>
                <div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-5">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#8A97AB]">{item.eyebrow}</p>
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/60 bg-white/60 shadow-[0_6px_18px_rgba(20,32,51,0.05)] backdrop-blur-sm sm:h-12 sm:w-12 sm:rounded-2xl">
                      <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${item.accentText}`} strokeWidth={1.8} />
                    </div>
                  </div>
                  <h3 className="max-w-[260px] text-[18px] font-medium leading-[1.15] tracking-[-0.02em] text-[#142033] sm:text-[22px]">
                    {item.title}
                  </h3>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* ── Large Desktop: Pentagon layout ── */}
      <div className="relative hidden overflow-hidden xl:block" style={{ height: '420px' }}>
        {/* Pentagon SVG background */}
        <svg
          viewBox="0 0 500 420"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full"
          fill="none"
        >
          <polygon
            points="250,30 440,175 365,370 135,370 60,175"
            stroke="#D9D6CE"
            strokeWidth="1"
            strokeDasharray="6 4"
            fill="none"
            opacity="0.6"
          />
          <polygon
            points="250,80 390,195 340,340 160,340 110,195"
            stroke="#D89A4A"
            strokeWidth="0.8"
            strokeDasharray="4 6"
            fill="url(#pentaGlow)"
            opacity="0.5"
          />
          <line x1="250" y1="210" x2="250" y2="30" stroke="#D9D6CE" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.4" />
          <line x1="250" y1="210" x2="440" y2="175" stroke="#D9D6CE" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.4" />
          <line x1="250" y1="210" x2="365" y2="370" stroke="#D9D6CE" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.4" />
          <line x1="250" y1="210" x2="135" y2="370" stroke="#D9D6CE" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.4" />
          <line x1="250" y1="210" x2="60" y2="175" stroke="#D9D6CE" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.4" />
          <circle cx="250" cy="30" r="4" fill="#58C3E8" opacity="0.4" />
          <circle cx="440" cy="175" r="4" fill="#D89A4A" opacity="0.4" />
          <circle cx="365" cy="370" r="4" fill="#142033" opacity="0.3" />
          <circle cx="135" cy="370" r="4" fill="#58C3E8" opacity="0.4" />
          <circle cx="60" cy="175" r="4" fill="#8B5CF6" opacity="0.4" />
          <defs>
            <radialGradient id="pentaGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D89A4A" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#D89A4A" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>

        {/* Cards positioned at pentagon vertices */}
        {items.map((item, index) => {
          const Icon = item.icon;
          const pos = pentagonPositions[index];
          return (
            <a
              href={`#${item.anchor}`}
              key={item.title}
              className={`group absolute z-10 ${pos.translate}`}
              style={{ top: pos.top, left: pos.left, width: 'clamp(120px, 28%, 150px)' }}
            >
              <div className="relative h-[120px] overflow-hidden rounded-[14px] border border-[#E2DDD3] bg-white/95 shadow-[0_8px_24px_rgba(20,32,51,0.06)] backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-[#CDBFA8] hover:shadow-[0_18px_36px_rgba(20,32,51,0.12)]">
                <AbstractPattern variant={item.variant} />
                <div className="absolute inset-0 bg-[#F8F6F1]/[0.75] backdrop-blur-[0.5px] transition duration-500 group-hover:bg-[#F8F6F1]/[0.55]" />

                <div className="absolute right-2.5 top-2.5 z-10 flex items-center gap-1">
                  <span className={`h-1.5 w-1.5 rounded-full ${item.accent}`} />
                  <span className="text-[9px] uppercase tracking-[0.12em] text-[#C18A4A]">{item.number}</span>
                </div>

                <div className="relative z-10 flex h-full flex-col justify-between p-2.5">
                  <p className="text-[8px] uppercase tracking-[0.2em] text-[#8A97AB]">{item.eyebrow}</p>
                  <div className="flex items-center">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md border border-white/60 bg-white/70 shadow-[0_4px_12px_rgba(20,32,51,0.05)] backdrop-blur-sm transition duration-500 group-hover:scale-105">
                      <Icon className={`h-3.5 w-3.5 ${item.accentText}`} strokeWidth={1.8} />
                    </div>
                  </div>
                  <h3 className="text-[11px] font-medium leading-[1.2] tracking-[-0.01em] text-[#142033]">
                    {item.title}
                  </h3>
                </div>

                <div className="card-shine pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>
            </a>
          );
        })}

        {/* Center logo */}
        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <img src="/logo.png" alt="ACADEMIA" className="h-12 w-auto object-contain drop-shadow-sm" />
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
          backgroundSize: '72px 72px',
        }}
      />
      <div className="mx-auto max-w-[1380px] px-4 pb-10 pt-6 sm:px-6 lg:px-8 lg:pb-14 lg:pt-8">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-center xl:gap-8 2xl:gap-10">
          <div className="pt-2">
            <h1 className="mt-4 max-w-[760px] text-[32px] font-light leading-[0.96] tracking-[-0.05em] text-[#142033] sm:text-[40px] md:text-[56px] xl:text-[52px] 2xl:text-[72px]">
              {language === 'tr' ? (
                <>Kurumsal dönüşüm için<br /><span className="font-semibold">stratejik bir</span><br />ekosistem</>
              ) : (
                <>A strategic ecosystem<br />for <span className="font-semibold">institutional</span><br />transformation</>
              )}
            </h1>

            <p className="mt-4 max-w-[700px] text-[17px] leading-[1.75] text-[#60708A] sm:text-[18px] md:text-[19px] xl:text-[17px] 2xl:text-[21px]">
              {language === 'tr'
                ? 'ACADEMIA, kurumların kurumsal, düzenleyici, kalite ve sürdürülebilirlik çerçevelerini uzun vadeli yapısal netlikle tasarlamasına ve uygulamasına yardımcı olur.'
                : 'ACADEMIA helps organizations design and implement institutional, regulatory, quality, and sustainability frameworks with long-term structural clarity.'}
            </p>

            <div className="mt-6 grid max-w-[460px] grid-cols-3 gap-2 sm:gap-4 xl:mt-5">
              {[
                { val: '150+', label: language === 'tr' ? 'Proje' : 'Projects' },
                { val: '80+', label: language === 'tr' ? 'Kurum' : 'Clients' },
                { val: '5', label: language === 'tr' ? 'Uzmanlık Alanı' : 'Expertise Areas' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-[#D9D6CE] bg-[#FAF8F3] px-2 py-3 sm:px-4 sm:py-4">
                  <p className="text-[20px] font-semibold text-[#142033] sm:text-[24px]">{s.val}</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.1em] text-[#72819A] sm:text-[12px] sm:tracking-[0.14em]">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:gap-4 xl:mt-5">
              <a href="#expertise" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0F1A32] px-6 py-3.5 text-[14px] font-medium text-white transition hover:bg-[#D89A4A] sm:px-8 sm:py-4 sm:text-[16px]">
                {language === 'tr' ? 'Ekosistemi Keşfet' : 'Explore the Ecosystem'}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#how-it-works" className="inline-flex items-center justify-center gap-3 rounded-full border border-[#142033] px-6 py-3.5 text-[14px] font-medium text-[#142033] transition hover:bg-[#142033] hover:text-white sm:px-8 sm:py-4 sm:text-[16px]">
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
          <div className="relative h-[240px] overflow-hidden rounded-[22px] border border-[#D9D6CE] sm:h-[300px] xl:mt-0 xl:h-auto">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop" alt="Team consulting meeting" className="h-full w-full object-cover" />
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
          <div className="relative">
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#72819A]">
              {language === 'tr' ? 'Uzmanlık Mimarisi' : 'Expertise Architecture'}
            </p>
            {/* Decorative SVG */}
            <svg viewBox="0 0 200 520" className="mt-8 hidden w-full xl:block" fill="none">
              {/* Main hub */}
              <circle cx="100" cy="70" r="36" stroke="#D89A4A" strokeOpacity="0.4" strokeWidth="2" />
              <circle cx="100" cy="70" r="10" fill="#D89A4A" fillOpacity="0.35" />
              <text x="100" y="75" textAnchor="middle" fill="#D89A4A" fillOpacity="0.7" fontSize="9" fontWeight="600">CORE</text>

              <path d="M100 106 V155" stroke="#D89A4A" strokeOpacity="0.3" strokeWidth="1.5" />

              {/* Left node - Standards */}
              <circle cx="50" cy="195" r="30" stroke="#58C3E8" strokeOpacity="0.35" strokeWidth="2" />
              <circle cx="50" cy="195" r="8" fill="#58C3E8" fillOpacity="0.3" />
              <text x="50" y="245" textAnchor="middle" fill="#58C3E8" fillOpacity="0.7" fontSize="9" fontWeight="500">Standards</text>

              {/* Right node - Governance */}
              <circle cx="150" cy="195" r="30" stroke="#142033" strokeOpacity="0.25" strokeWidth="2" />
              <circle cx="150" cy="195" r="8" fill="#142033" fillOpacity="0.2" />
              <text x="150" y="245" textAnchor="middle" fill="#142033" fillOpacity="0.5" fontSize="9" fontWeight="500">Governance</text>

              <path d="M100 155 L50 165" stroke="#D9D6CE" strokeOpacity="0.5" strokeWidth="1.5" />
              <path d="M100 155 L150 165" stroke="#D9D6CE" strokeOpacity="0.5" strokeWidth="1.5" />

              <path d="M50 225 V280" stroke="#D9D6CE" strokeOpacity="0.4" strokeWidth="1.5" />
              <path d="M150 225 V280" stroke="#D9D6CE" strokeOpacity="0.4" strokeWidth="1.5" />

              {/* Bottom left - ESG */}
              <circle cx="50" cy="310" r="24" stroke="#8B5CF6" strokeOpacity="0.3" strokeWidth="2" />
              <circle cx="50" cy="310" r="7" fill="#8B5CF6" fillOpacity="0.25" />
              <text x="50" y="352" textAnchor="middle" fill="#8B5CF6" fillOpacity="0.6" fontSize="9" fontWeight="500">ESG</text>

              {/* Bottom right - Capacity */}
              <circle cx="150" cy="310" r="24" stroke="#D89A4A" strokeOpacity="0.3" strokeWidth="2" />
              <circle cx="150" cy="310" r="7" fill="#D89A4A" fillOpacity="0.25" />
              <text x="150" y="352" textAnchor="middle" fill="#D89A4A" fillOpacity="0.6" fontSize="9" fontWeight="500">Capacity</text>

              <path d="M50 334 L100 380" stroke="#D9D6CE" strokeOpacity="0.4" strokeWidth="1.5" />
              <path d="M150 334 L100 380" stroke="#D9D6CE" strokeOpacity="0.4" strokeWidth="1.5" />

              {/* Final node - AI */}
              <circle cx="100" cy="405" r="32" stroke="#58C3E8" strokeOpacity="0.3" strokeWidth="2" />
              <circle cx="100" cy="405" r="9" fill="#58C3E8" fillOpacity="0.3" />
              <text x="100" y="410" textAnchor="middle" fill="#58C3E8" fillOpacity="0.7" fontSize="9" fontWeight="600">AI</text>
              <circle cx="100" cy="405" r="46" stroke="#58C3E8" strokeOpacity="0.1" strokeWidth="1" />

              {/* Side label */}
              <text x="100" y="475" textAnchor="middle" fill="#72819A" fillOpacity="0.5" fontSize="8" fontWeight="500" letterSpacing="0.12em">INTERCONNECTED</text>
              <text x="100" y="490" textAnchor="middle" fill="#72819A" fillOpacity="0.5" fontSize="8" fontWeight="500" letterSpacing="0.12em">EXPERTISE</text>
            </svg>
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
                <div key={item.number} id={`expertise-${item.number}`} className="border-t border-[#D9D6CE] pt-6 scroll-mt-24">
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
          <div className="relative">
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#72819A]">
              {language === 'tr' ? 'ACADEMIA Nasıl Çalışır' : 'How ACADEMIA Works'}
            </p>
            {/* Decorative SVG - process flow */}
            <svg viewBox="0 0 200 480" className="mt-8 hidden w-full xl:block" fill="none">
              <rect x="55" y="20" width="90" height="55" rx="12" stroke="#D89A4A" strokeOpacity="0.4" strokeWidth="2" />
              <text x="100" y="45" textAnchor="middle" fill="#D89A4A" fillOpacity="0.7" fontSize="11" fontWeight="600">Assess</text>
              <text x="100" y="60" textAnchor="middle" fill="#D89A4A" fillOpacity="0.45" fontSize="8">01</text>
              <path d="M100 75 V110" stroke="#D89A4A" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="5 4" />

              <rect x="55" y="120" width="90" height="55" rx="12" stroke="#58C3E8" strokeOpacity="0.4" strokeWidth="2" />
              <text x="100" y="145" textAnchor="middle" fill="#58C3E8" fillOpacity="0.7" fontSize="11" fontWeight="600">Design</text>
              <text x="100" y="160" textAnchor="middle" fill="#58C3E8" fillOpacity="0.45" fontSize="8">02</text>
              <path d="M100 175 V210" stroke="#58C3E8" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="5 4" />

              <rect x="55" y="220" width="90" height="55" rx="12" stroke="#142033" strokeOpacity="0.3" strokeWidth="2" />
              <text x="100" y="245" textAnchor="middle" fill="#142033" fillOpacity="0.55" fontSize="11" fontWeight="600">Integrate</text>
              <text x="100" y="260" textAnchor="middle" fill="#142033" fillOpacity="0.35" fontSize="8">03</text>
              <path d="M100 275 V310" stroke="#142033" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="5 4" />

              <rect x="55" y="320" width="90" height="55" rx="12" stroke="#8B5CF6" strokeOpacity="0.35" strokeWidth="2" />
              <text x="100" y="345" textAnchor="middle" fill="#8B5CF6" fillOpacity="0.65" fontSize="11" fontWeight="600">Sustain</text>
              <text x="100" y="360" textAnchor="middle" fill="#8B5CF6" fillOpacity="0.4" fontSize="8">04</text>

              {/* Completion */}
              <path d="M100 375 V405" stroke="#D9D6CE" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="5 4" />
              <circle cx="100" cy="420" r="14" stroke="#D89A4A" strokeOpacity="0.35" strokeWidth="2" />
              <text x="100" y="424" textAnchor="middle" fill="#D89A4A" fillOpacity="0.6" fontSize="9" fontWeight="600">✓</text>

              <text x="100" y="460" textAnchor="middle" fill="#72819A" fillOpacity="0.5" fontSize="8" fontWeight="500" letterSpacing="0.12em">STRUCTURED</text>
              <text x="100" y="475" textAnchor="middle" fill="#72819A" fillOpacity="0.5" fontSize="8" fontWeight="500" letterSpacing="0.12em">PROCESS</text>
            </svg>
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
  const articles = [
    {
      tag: 'AI Governance',
      color: 'border-[#8B5CF6]',
      title: {
        en: 'ISO/IEC 42001: The First Global Standard for AI Management Systems',
        tr: 'ISO/IEC 42001: Yapay Zeka Yönetim Sistemleri İçin İlk Küresel Standart',
      },
      desc: {
        en: 'ISO/IEC 42001 establishes a structured governance framework for how AI systems are designed, deployed, monitored, and maintained across organizations.',
        tr: 'ISO/IEC 42001, yapay zeka sistemlerinin kurumlarda nasıl tasarlanacağı, dağıtılacağı, izleneceği ve sürdürüleceğine dair yapısal bir yönetişim çerçevesi oluşturur.',
      },
      source: 'ANSI Blog',
      href: 'https://blog.ansi.org/anab/iso-iec-42001-ai-management-systems',
    },
    {
      tag: 'EU AI Act',
      color: 'border-[#D89A4A]',
      title: {
        en: 'EU AI Act: What Changes in 2025 and How to Prepare',
        tr: 'AB AI Yasası: 2025\'te Neler Değişiyor ve Nasıl Hazırlanmalı',
      },
      desc: {
        en: 'With penalties reaching up to €35 million, organizations operating in the EU market can no longer treat AI governance as a secondary concern.',
        tr: '35 milyon Euro\'ya varan cezalarla, AB pazarında faaliyet gösteren kuruluşlar artık yapay zeka yönetişimini ikincil bir konu olarak ele alamaz.',
      },
      source: 'Projective Group',
      href: 'https://www.projectivegroup.com/ainsight-into-the-ai-light-what-changes-on-2-august-2025/',
    },
    {
      tag: 'ESG & Sustainability',
      color: 'border-[#58C3E8]',
      title: {
        en: 'ESG Reporting in 2025: Meeting the New Global Standards',
        tr: 'ESG Raporlaması 2025: Yeni Küresel Standartları Karşılamak',
      },
      desc: {
        en: '2025 marks a major shift in the ESG landscape with the adoption of ISSB Standards, focusing on climate-related and sustainability disclosures.',
        tr: '2025, ISSB Standartlarının benimsenmesiyle ESG alanında büyük bir dönüm noktası oldu; iklim ve sürdürülebilirlik açıklamalarına odaklanılıyor.',
      },
      source: 'Governancepedia',
      href: 'https://governancepedia.com/2025/05/20/esg-reporting-meeting-the-2025-standards/',
    },
  ];

  return (
    <section id="insights" className="border-t border-[#D9D6CE] bg-[#F8F6F1]">
      <div className="mx-auto max-w-[1380px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-[220px_1fr] xl:gap-16">
          <div>
            <p className="text-[12px] uppercase tracking-[0.28em] text-[#72819A]">
              {language === 'tr' ? 'Sektörel Gündem' : 'Industry Insights'}
            </p>
          </div>
          <div>
            <div className="max-w-[860px]">
              <h2 className="text-[30px] font-light leading-[1.1] tracking-[-0.03em] text-[#142033] sm:text-[36px] lg:text-[46px]">
                {language === 'tr'
                  ? 'Sektörden öne çıkan gelişmeler.'
                  : 'Key developments shaping the industry.'}
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 md:grid-cols-3">
              {articles.map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className={`group block border-l-2 ${item.color} rounded-r-xl bg-[#F5F3EE] p-5 transition hover:shadow-md sm:p-6`}>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#72819A]">{item.tag}</span>
                  <h3 className="mt-3 text-[17px] font-medium leading-[1.35] text-[#142033] transition group-hover:text-[#D89A4A] sm:text-[19px]">
                    {item.title[language] || item.title.en}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.75] text-[#5E7088] sm:text-[15px]">
                    {item.desc[language] || item.desc.en}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[12px] text-[#A09888]">
                    <span>{item.source}</span>
                    <span>→</span>
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

/* ─── Logo Marquee ─── */
function LogoMarquee({ items, reverse = false }) {
  const duplicated = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#F5F3EE] to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#F5F3EE] to-transparent sm:w-24" />
      <div className={`marquee-track flex min-w-max gap-4 py-3 sm:gap-6 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {duplicated.map((logo, index) => (
          <a key={`${logo.name}-${index}`} href={logo.href || '#'} target="_blank" rel="noopener noreferrer" className="group flex h-[72px] shrink-0 items-center gap-3 rounded-2xl border border-[#DDD8CF] bg-[#FAF8F3] px-5 transition duration-300 hover:border-[#D89A4A] hover:bg-white sm:h-[82px] sm:px-7">
            {logo.logo && (
              <img src={logo.logo} alt={logo.name} className="h-7 w-7 object-contain sm:h-8 sm:w-8" />
            )}
            <span className="whitespace-nowrap text-[14px] font-medium text-[#5E7088] transition duration-300 group-hover:text-[#142033] sm:text-[15px]">
              {logo.name}
            </span>
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
              <LogoMarquee items={referenceLogos.slice(0, 11)} />
              <LogoMarquee items={referenceLogos.slice(11, 22)} reverse />
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
