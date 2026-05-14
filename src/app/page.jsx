'use client';

import {
  ArrowRight, ArrowUpRight, ShieldCheck, Database,
  GraduationCap, Leaf, BrainCircuit, TrendingUp,
} from 'lucide-react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';

/* ══════════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════════ */

const referenceLogos = [
  { name: 'Gorenje',      logo: '/references/gorenje.png',      href: 'https://www.gorenje.com/' },
  { name: 'Odin',         logo: '/references/odin.png',         href: 'https://odine.com/tr/' },
  { name: 'JForce',       logo: '/references/jforce.png',       href: 'https://jforce.com.tr/' },
  { name: 'TÜV Austria',  logo: '/references/tuv-austria.png',  href: 'https://tr.tuvaustria.com/' },
  { name: 'LRQA',         logo: '/references/lrqa.png',         href: 'https://www.lrqa.com/tr-tr/' },
  { name: 'Vega',         logo: '/references/vega.png',         href: 'https://www.vegalojistik.com.tr/' },
  { name: 'CSI',          logo: '/references/csi.png',          href: 'https://www.csi-spa.com/en' },
  { name: 'Evolog',       logo: '/references/evolog.png',       href: 'https://www.evolog.com.tr/' },
  { name: 'TOBB',         logo: '/references/tobb.png',         href: 'https://www.tobb.org.tr/' },
  { name: 'TI Sparkle',   logo: '/references/ti-sparkle.png',   href: 'https://www.tisparkle.com/turkey' },
  { name: 'Bayegan',      logo: '/references/bayegan.png',      href: 'https://bayegan.net/' },
  { name: 'Vinteks',      logo: '/references/vinteks.png',      href: 'https://vinteks.com/' },
  { name: 'CFLEX Asaş',   logo: '/references/cflex.png',       href: 'https://www.cflex.com/' },
  { name: 'GTech',        logo: '/references/gtech.png',        href: 'https://www.gtech.com.tr/' },
  { name: 'Sicpa',        logo: '/references/sicpa.png',        href: 'https://www.sicpaturkey.com.tr/' },
  { name: 'Erciyas',      logo: '/references/erciyas.png',      href: 'https://erciyas.com/' },
  { name: 'TPAO',         logo: '/references/tpao.png',         href: 'https://www.tpao.gov.tr/' },
  { name: 'TED',          logo: '/references/ted.png',          href: 'https://ted.org.tr/' },
  { name: 'Dünya Varlık', logo: '/references/dunya-varlik.png', href: 'https://www.dunyavarlik.com/' },
  { name: 'İsttelkom',    logo: '/references/isttelkom.png',    href: 'https://isttelkom.istanbul/' },
  { name: 'PSA BDP',      logo: '/references/psa-bdp.png',      href: 'https://psabdp.com/' },
  { name: 'ISS',          logo: '/references/iss.png',          href: 'https://www.issworld.com/tr-tr' },
];

const expertise = {
  en: [
    { num: '01', title: 'System Certification',     desc: 'Preparing management systems aligned with national and international standards, providing necessary training, and serving as a full solution partner.',  icon: Database },
    { num: '02', title: 'Product Certification',    desc: 'Supporting product compliance, market regulations, and competitive positioning through technical documentation and certification processes.',              icon: ShieldCheck },
    { num: '03', title: 'Project Consulting',       desc: 'TÜBİTAK, Development Agencies, IPARD, TKDK, IPA and government-funded project preparation, application, and implementation management.',               icon: TrendingUp },
    { num: '04', title: 'Legal Compliance',         desc: 'Personal data protection (KVKK/GDPR), constitutional and international agreement compliance, and regulatory audit mechanisms.',                         icon: Database },
    { num: '05', title: 'Training',                 desc: 'System certification, product certification, training support, and IT systems training groups delivering comprehensive institutional learning.',         icon: GraduationCap },
    { num: '06', title: 'Sustainability',           desc: 'Climate change, natural resource management, and social equity consulting aligned with global sustainability frameworks.',                               icon: Leaf },
    { num: '07', title: 'AI Governance & Compliance', desc: 'ISO/IEC 42001 implementation, EU AI Act compliance, and AI risk framework development for responsible adoption.',                                    icon: BrainCircuit },
  ],
  tr: [
    { num: '01', title: 'Sistem Belgelendirme',     desc: 'Ulusal ve uluslararası standartlara uygun yönetim sistemlerinin hazırlanması, gerekli eğitimlerin verilmesi ve tam bir çözüm ortağı olarak hizmet.',    icon: Database },
    { num: '02', title: 'Ürün Belgelendirme',       desc: 'Ürün uyumu, piyasa düzenlemeleri ve rekabet konumlandırması için teknik dokümantasyon ve belgelendirme süreçlerinin desteklenmesi.',                     icon: ShieldCheck },
    { num: '03', title: 'Proje Danışmanlığı',       desc: 'TÜBİTAK, Kalkınma Ajansı, IPARD, TKDK, IPA vb. devlet destekli hibe projelerinin hazırlanması, başvurusu ve uygulama yönetimi.',                      icon: TrendingUp },
    { num: '04', title: 'Yasal Uyum',               desc: 'Kişisel verilerin korunması (KVKK/GDPR), anayasa ve uluslararası anlaşma uyumu ve düzenleyici denetim mekanizmaları.',                                 icon: Database },
    { num: '05', title: 'Eğitim',                   desc: 'Sistem belgelendirme, ürün belgelendirme, eğitim destek ve BT sistemleri gruplarıyla kapsamlı kurumsal öğrenme programları.',                           icon: GraduationCap },
    { num: '06', title: 'Sürdürülebilirlik',        desc: 'İklim değişikliği, doğal kaynak yönetimi ve sosyal eşitsizlik konularında küresel sürdürülebilirlik çerçevelerine uyumlu danışmanlık.',                 icon: Leaf },
    { num: '07', title: 'Yapay Zeka Yönetişimi',    desc: 'ISO/IEC 42001 uygulaması, AB AI Yasası uyumu ve sorumlu benimseme için yapay zeka risk çerçevelerinin geliştirilmesi.',                                icon: BrainCircuit },
  ],
};

const process = {
  en: [
    { num: '01', title: 'Assessment',       desc: 'We map institutional, regulatory, technical, and operational context.' },
    { num: '02', title: 'Framework Design', desc: 'We design governance, compliance, and sustainability frameworks.' },
    { num: '03', title: 'Integration',      desc: 'We embed systems into the organization with precision.' },
    { num: '04', title: 'Continuity',       desc: 'We support long-term capability and structural sustainability.' },
  ],
  tr: [
    { num: '01', title: 'Değerlendirme',    desc: 'Kurumsal, düzenleyici, teknik ve operasyonel bağlamı haritalandırıyoruz.' },
    { num: '02', title: 'Çerçeve Tasarımı', desc: 'Yönetişim, uyum ve sürdürülebilirlik çerçevelerini tasarlıyoruz.' },
    { num: '03', title: 'Entegrasyon',      desc: 'Sistemleri kurumunuza hassasiyetle yerleştiriyoruz.' },
    { num: '04', title: 'Süreklilik',       desc: 'Uzun vadeli kapasite ve yapısal sürekliliği destekliyoruz.' },
  ],
};

const ecosystem = [
  {
    logo: '/logos/carbonless.png', name: 'Carbonless', accent: '#22C55E', href: 'https://www.carbonless.network/',
    en: { title: 'Carbon Management',       desc: 'Carbon footprint measurement, GHG reduction planning, and offset programs.' },
    tr: { title: 'Karbon Yönetimi',         desc: 'Karbon ayak izi ölçümü, sera gazı azaltım planlaması ve ofset programları.' },
  },
  {
    logo: '/logos/klexai.png',    name: 'KlexAI',     accent: '#8B5CF6', href: 'https://www.klexai.com/',
    en: { title: 'AI Governance Consulting', desc: 'AI risk frameworks, ISO/IEC 42001, and EU AI Act compliance.' },
    tr: { title: 'Yapay Zeka Yönetişimi',   desc: 'AI risk çerçeveleri, ISO/IEC 42001 ve AB AI Yasası uyum danışmanlığı.' },
  },
  {
    logo: '/logos/sustindex.png', name: 'Sustindex',  accent: '#3B82F6', href: 'https://www.sustindex.com/',
    en: { title: 'ESG Index & Reporting',    desc: 'ESG scoring models and sustainability reporting aligned with GRI, ESRS, TCFD.' },
    tr: { title: 'ESG Endeksi ve Raporlama', desc: 'GRI, ESRS, TCFD uyumlu ESG puanlama ve sürdürülebilirlik raporlama.' },
  },
];

/* ══════════════════════════════════════════════════════════════
   EYEBROW — orange dot + label (matches hero)
══════════════════════════════════════════════════════════════ */
function Eyebrow({ children, center = false }) {
  return (
    <div className={`flex items-center gap-2.5 ${center ? 'justify-center' : ''}`}>
      <div className="h-2 w-2 shrink-0 rounded-full bg-[#F97342]" />
      <span className="text-[11.5px] font-bold uppercase tracking-[0.24em] text-[#F97342]">
        {children}
      </span>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   HERO
══════════════════════════════════════════════════════════════ */
function HeroSection({ language }) {
  const tr = language === 'tr';

  const eyebrow = tr ? 'Stratejik Kurumsal Ortak' : 'Strategic Institutional Partner';
  const cta1    = tr ? 'Uzmanlığı Keşfet' : 'Explore Our Expertise';
  const cta2    = tr ? 'Nasıl Çalışıyoruz' : 'How It Works';
  const trusted = tr ? 'Öne Çıkan Kurumların Güveni' : 'Trusted By Forward-Thinking Institutions';

  const cards = tr ? [
    { icon: Database,      label: 'Sistem Belgelendirme',           desc: 'Ulusal ve uluslararası standartlara uygun yönetim sistemleri.',       featured: false, link: '#expertise-1' },
    { icon: ShieldCheck,   label: 'Ürün Belgelendirme',             desc: 'Teknik dokümantasyon ve belgelendirme süreçleri.',                    featured: true,  link: '#expertise-2' },
    { icon: TrendingUp,    label: 'Proje Danışmanlığı',             desc: 'Devlet destekli hibe projelerinin hazırlanması ve yönetimi.',         featured: false, link: '#expertise-3' },
    { icon: Database,      label: 'Yasal Uyum',                     desc: 'KVKK/GDPR ve düzenleyici uyum mekanizmaları.',                       featured: false, link: '#expertise-4' },
    { icon: GraduationCap, label: 'Eğitim',                         desc: 'Kapsamlı kurumsal öğrenme programları.',                             featured: false, link: '#expertise-5' },
    { icon: Leaf,          label: 'Sürdürülebilirlik',              desc: 'Küresel sürdürülebilirlik çerçevelerine uyumlu danışmanlık.',         featured: false, link: '#expertise-6' },
    { icon: BrainCircuit,  label: 'Yapay Zeka Yönetişimi',          desc: 'ISO/IEC 42001 ve AB AI Yasası uyumu.',                               featured: true,  link: '#expertise-7' },
  ] : [
    { icon: Database,      label: 'System Certification',           desc: 'Management systems aligned with international standards.',            featured: false, link: '#expertise-1' },
    { icon: ShieldCheck,   label: 'Product Certification',          desc: 'Technical documentation and certification processes.',                featured: true,  link: '#expertise-2' },
    { icon: TrendingUp,    label: 'Project Consulting',             desc: 'Government-funded project preparation and management.',               featured: false, link: '#expertise-3' },
    { icon: Database,      label: 'Legal Compliance',               desc: 'KVKK/GDPR and regulatory compliance mechanisms.',                    featured: false, link: '#expertise-4' },
    { icon: GraduationCap, label: 'Training',                       desc: 'Comprehensive institutional learning programs.',                     featured: false, link: '#expertise-5' },
    { icon: Leaf,          label: 'Sustainability',                 desc: 'Global sustainability framework consulting.',                        featured: false, link: '#expertise-6' },
    { icon: BrainCircuit,  label: 'AI Governance & Compliance',     desc: 'ISO/IEC 42001 and EU AI Act compliance.',                            featured: true,  link: '#expertise-7' },
  ];

  // Higher + taller rectangular cards — w=142px half=71 → center cards left=179
  const cardPositions = [
    { top: '10px',  left: '210px' }, // top-center      (System Certification)
    { top: '80px',  left: '380px' }, // upper-right     (Product Certification)
    { top: '200px', left: '400px' }, // right           (Project Consulting)
    { top: '330px', left: '340px' }, // lower-right     (Legal Compliance)
    { top: '330px', left: '100px' }, // lower-left      (Training)
    { top: '200px', left: '30px'  }, // left            (Sustainability)
    { top: '80px',  left: '60px'  }, // upper-left      (AI Governance)
  ];

  return (
    <section className="min-h-[100svh] bg-white pt-[68px]">
      <div className="mx-auto w-full max-w-[1280px] px-5 pt-0 sm:px-8 lg:px-10">
        <div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-6 xl:gap-10">

          {/* ── LEFT: text ── */}
          <div className="w-full shrink-0 lg:w-[48%] xl:w-[52%]">

            {/* Heading */}
            <h1 className="text-[36px] font-black leading-[0.95] tracking-[-0.03em] text-[#1E293B] sm:text-[46px] lg:text-[50px] xl:text-[60px] 2xl:text-[68px]">
              {tr ? 'Kurumsal' : 'Institutional'}
              <br />
              {tr ? 'Dönüşüm' : 'Transformation'}
              <br />
              <span className="text-[#F97342]">{tr ? 'Kalıcı Etki' : 'That Creates'}</span>
              <br />
              <span className="text-[#F97342]">{tr ? 'Yaratan Güç.' : 'Lasting Impact.'}</span>
            </h1>

            {/* Orange rule */}
            <div className="mt-5 h-[3px] w-14 rounded-full bg-[#F97342]" />

            {/* Subtitle */}
            <p className="mt-5 max-w-[490px] text-[15px] leading-[1.9] text-[#475569]">
              <strong className="font-bold text-[#1E293B]">ACADEMIA</strong>{' '}
              {tr
                ? 'kurumların yönetişim, düzenleyici uyum, kalite ve sürdürülebilirlik çerçevelerini tasarlayarak kurumsal güç ve ölçülebilir uzun vadeli etki yaratmalarına ortak olur.'
                : 'partners with organizations to design and implement governance, regulatory, quality, and sustainability frameworks that strengthen institutions and deliver measurable, long-term impact.'}
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="#expertise"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#F97342] px-7 py-3.5 text-[14px] font-bold text-white shadow-[0_4px_20px_rgba(255,107,53,0.38)] transition hover:bg-[#E55A25] active:scale-[0.98]"
              >
                {cta1} <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-3 rounded-full border border-[#1E293B]/15 bg-white py-3 pl-5 pr-3 text-[14px] font-semibold text-[#1E293B] shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition hover:border-[#1E293B]/30 active:scale-[0.98]"
              >
                {cta2}
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1E293B]">
                  <ArrowRight className="h-3.5 w-3.5 text-white" />
                </span>
              </a>
            </div>

            {/* Trusted by */}
            <div className="mt-7">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#94A3B8]">{trusted}</p>
              <div className="overflow-hidden [mask-image:linear-gradient(to_right,black_80%,transparent)]">
                <div className="marquee-track flex w-max animate-marquee gap-7">
                  {[...referenceLogos, ...referenceLogos].map((r, i) => (
                    <a key={i} href={r.href} target="_blank" rel="noopener noreferrer" className="flex h-7 shrink-0 items-center transition-opacity hover:opacity-70">
                      <Image src={r.logo} alt={r.name} width={80} height={28} className="h-7 w-auto object-contain" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: hand + cards ── */}
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center">

            {/* SVG filter: removes black bg from hand.jpg  (alpha = 3R+3G+3B-0.8) */}
            <svg className="pointer-events-none absolute h-0 w-0 overflow-hidden" aria-hidden="true">
              <defs>
                <filter id="hand-bg-remove" colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
                  <feColorMatrix type="matrix"
                    values="1 0 0 0 0
                            0 1 0 0 0
                            0 0 1 0 0
                            3 3 3 0 -0.8" />
                </filter>
              </defs>
            </svg>

            {/* Fixed 500×540 orbital panel — predictable geometry */}
            <div className="relative overflow-hidden rounded-3xl bg-white" style={{ width: '560px', height: '600px' }}>

              {/* ② Top fade */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[9%] bg-gradient-to-b from-white to-transparent z-[2]" />

              {/* ③ Glows */}
              <div
                className="pointer-events-none absolute z-[2] h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97342] opacity-[0.07] blur-[60px]"
                style={{ left: '250px', top: '203px' }}
              />
              <div
                className="pointer-events-none absolute z-[2] h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF8C5A] opacity-[0.11] blur-[50px]"
                style={{ left: '250px', top: '390px' }}
              />

              {/* ④ Concentric circles — animated */}
              <div className="pointer-events-none absolute inset-0 z-[4]">
                {/* Outer ring - slow rotate, dashed */}
                <div className="absolute left-1/2 top-[260px] h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 animate-[spin_80s_linear_infinite] rounded-full border border-dashed border-[#F97342]/20" />
                {/* Middle ring - counter rotate, thicker */}
                <div className="absolute left-1/2 top-[260px] h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 animate-[spin_55s_linear_infinite_reverse] rounded-full border-[1.5px] border-dashed border-[#F97342]/25" />
                {/* Inner ring - breathing pulse */}
                <div className="absolute left-1/2 top-[260px] h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 animate-[pulse_5s_ease-in-out_infinite] rounded-full border border-[#F97342]/12" />
              </div>

              {/* ⑤ Decorative plus accents */}
              {[
                { top: '5%',  right: '13%' },
                { top: '7%',  left: '17%'  },
                { top: '44%', right: '1%'  },
                { top: '63%', left: '3%'   },
              ].map((s, i) => (
                <div key={i} className="pointer-events-none absolute z-[4] select-none text-[18px] font-thin leading-none text-[#F97342]/35" style={s}>+</div>
              ))}

              {/* ⑥ ACADEMIA center logo — with glow */}
              <div
                className="absolute z-[5] h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{ left: '280px', top: '260px', background: 'radial-gradient(circle, rgba(249,115,66,0.10) 0%, rgba(249,115,66,0.03) 40%, transparent 70%)' }}
              />
              <div
                className="absolute z-[6] flex h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 animate-[handFloat_5s_ease-in-out_infinite] items-center justify-center rounded-full bg-white shadow-[0_14px_50px_rgba(15,23,42,0.08),0_0_0_1px_rgba(249,115,66,0.06)]"
                style={{ left: '280px', top: '260px' }}
              >
                <Image src="/logo.png" alt="ACADEMIA" width={100} height={62} className="h-auto w-[88px] object-contain" />
              </div>

              {/* ⑦ Connector lines from cards to center */}
              <svg className="pointer-events-none absolute inset-0 z-[5]" width="560" height="600" viewBox="0 0 560 600">
                {[
                  [275, 80],
                  [445, 170],
                  [445, 350],
                  [275, 460],
                  [105, 350],
                  [105, 170],
                ].map(([x, y], i) => (
                  <line key={i} x1="280" y1="260" x2={x} y2={y} stroke="#F97342" strokeWidth="0.7" strokeDasharray="3 4" opacity="0.15" />
                ))}
              </svg>

              {/* ⑧ Six service cards — glass + float + asymmetry */}
              {cards.map((card, i) => {
                const Icon = card.icon;
                const asymmetry = [
                  { transform: 'rotate(-0.5deg)' },
                  { transform: 'rotate(0.8deg) translateY(-2px)' },
                  { transform: 'rotate(-0.3deg) scale(1.02)' },
                  { transform: 'rotate(0.5deg)' },
                  { transform: 'rotate(0.4deg) translateY(-3px)' },
                  { transform: 'rotate(-0.6deg) scale(1.01)' },
                  { transform: 'rotate(0.3deg) translateY(-1px)' },
                ];
                return (
                  <div
                    key={i}
                    className="hero-card group/card absolute z-[7] flex w-[140px] cursor-pointer flex-col rounded-xl border border-white/70 px-3 py-3 backdrop-blur-[8px] transition-all duration-500 bg-white/75 shadow-[0_10px_30px_rgba(15,23,42,0.04),0_2px_8px_rgba(15,23,42,0.03)] hover:w-[190px] hover:scale-105 hover:bg-white/95 hover:shadow-[0_14px_50px_rgba(15,23,42,0.1)]"
                    style={{ ...cardPositions[i], ...asymmetry[i] }}
                  >
                    <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg border border-[#F97342]/25 bg-[#F97342]/5">
                      <Icon className="h-[12px] w-[12px] text-[#F97342]" strokeWidth={1.5} />
                    </div>
                    <h4 className="text-[10px] font-bold leading-snug text-[#1E293B]">
                      {card.label}
                    </h4>
                    <div className="mt-2 hidden animate-[fadeIn_0.3s_ease] group-hover/card:block">
                      <p className="text-[9px] leading-[1.55] text-[#475569]">{card.desc}</p>
                      <a href={card.link} className="mt-2 inline-flex items-center gap-1 text-[9px] font-bold text-[#F97342] hover:underline">
                        {tr ? 'بیشتر بخوانید' : 'Learn more'} <ArrowRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   EXPERTISE — 5-card grid
══════════════════════════════════════════════════════════════ */
function ExpertiseSection({ language }) {
  const tr    = language === 'tr';
  const items = expertise[language] ?? expertise.en;

  const nodes = [
    { label: tr ? 'Yapay Zeka' : 'AI', color: '#58C3E8', size: 'lg' },
    { label: tr ? 'Standartlar' : 'Standards', color: '#58C3E8', size: 'md' },
    { label: tr ? 'Yönetişim' : 'Governance', color: '#64748B', size: 'md' },
    { label: 'ESG', color: '#8B5CF6', size: 'sm' },
    { label: tr ? 'Kapasite' : 'Capacity', color: '#F97342', size: 'sm' },
  ];

  return (
    <section id="expertise" className="scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">

        {/* Title — above cards */}
        <h2 className="mb-12 text-center text-[26px] font-light uppercase tracking-[0.14em] text-[#1E293B] sm:text-[30px] lg:mb-14 lg:text-left lg:text-[36px]">
          {tr ? 'Birbirine Bağlı Uzmanlık Alanlarımız' : 'Our Interconnected Expertise'}
        </h2>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-10">

          {/* ── LEFT: Node diagram ── */}
          <div className="hidden w-[200px] shrink-0 lg:block">
            <div className="relative h-[480px]">
              {/* Vertical line */}
              <div className="absolute left-[50%] top-[50px] h-[350px] w-px -translate-x-1/2 bg-gradient-to-b from-[#58C3E8]/30 via-[#64748B]/20 to-[#F97342]/30" />

              {/* Horizontal connector lines to cards */}
              {['90px', '170px', '250px', '320px', '390px'].map((top, i) => (
                <div key={i} className="absolute right-0 h-px w-[40px] bg-[#E8E5DF]" style={{ top }} />
              ))}

              {/* Top label */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 text-center">
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#1E293B]/50">
                  {tr ? 'Entegre AI' : 'Integrated AI'}
                </p>
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#1E293B]/50">
                  {tr ? 'Uzmanlığı' : 'Expertise'}
                </p>
              </div>

              {/* Nodes */}
              {nodes.map((node, i) => {
                const tops = ['60px', '145px', '230px', '310px', '380px'];
                const sizes = { lg: 'h-12 w-12', md: 'h-10 w-10', sm: 'h-9 w-9' };
                return (
                  <div key={i} className="absolute left-1/2 -translate-x-1/2" style={{ top: tops[i] }}>
                    <div className={`flex ${sizes[node.size]} items-center justify-center rounded-full border-2`} style={{ borderColor: `${node.color}40`, background: `${node.color}08` }}>
                      <div className="h-2.5 w-2.5 rounded-full" style={{ background: node.color, opacity: 0.5 }} />
                    </div>
                    <p className="mt-1 text-center text-[8px] font-medium text-[#64748B]">{node.label}</p>
                  </div>
                );
              })}

              {/* Bottom label */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#1E293B]/50">ACADEMIA</p>
                <p className="text-[8px] font-medium uppercase tracking-[0.12em] text-[#64748B]">CORE</p>
              </div>

              {/* Decorative + signs */}
              {[{ top: '20%', left: '5%' }, { top: '55%', left: '90%' }, { top: '75%', left: '8%' }].map((s, i) => (
                <div key={i} className="absolute text-[13px] font-light text-[#F97342]/25" style={s}>+</div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: 6 cards grid ── */}
          <div className="flex-1">
            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.num}
                    id={`expertise-${index + 1}`}
                    className="group relative scroll-mt-24 rounded-2xl border border-[#E8E5DF] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#F97342]/20 hover:shadow-[0_12px_40px_rgba(249,115,66,0.08)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-[16px] font-bold leading-snug text-[#1E293B]">{item.title}</h3>
                        <p className="mt-2.5 text-[13px] leading-[1.75] text-[#64748B]">{item.desc}</p>
                      </div>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#F97342]/20 bg-[#F97342]/5">
                        <Icon className="h-[18px] w-[18px] text-[#F97342]" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   WHAT WE DO — image cards + split layout
══════════════════════════════════════════════════════════════ */
function WhatSection({ language }) {
  const tr = language === 'tr';

  return (
    <section id="what-academia-is" className="scroll-mt-24 border-t border-[#F0EDE8] bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-14">

          {/* ── LEFT: label ── */}
          <div className="hidden w-[160px] shrink-0 lg:block">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#64748B]">
              {tr ? 'ACADEMIA Nedir' : 'What ACADEMIA Is'}
            </p>
          </div>

          {/* ── CENTER: text ── */}
          <div className="max-w-[580px] flex-1">
            <h2 className="text-[30px] font-light leading-[1.1] tracking-[-0.03em] text-[#1E293B] sm:text-[36px] lg:text-[42px]">
              {tr ? 'Geleneksel bir danışmanlık şirketi değil.' : 'Not a conventional consulting firm.'}
            </h2>
            <p className="mt-6 text-[15px] leading-[1.9] text-[#475569]">
              {tr
                ? 'ACADEMIA; kurumların kurumsal, düzenleyici, kalite ve sürdürülebilirlik zorluklarında yön bulmasına yardımcı olmak için tasarlanmış çok disiplinli bir danışmanlık ekosistemidir.'
                : 'ACADEMIA is a multi-disciplinary consulting ecosystem designed to help organizations navigate institutional, regulatory, quality, and sustainability challenges.'}
            </p>
            <p className="mt-5 text-[15px] leading-[1.9] text-[#475569]">
              {tr
                ? 'ACADEMIA izole danışmanlık hizmetleri sunmaz. Bunun yerine kurumların uzun vadeli kurumsal kapasite geliştirmesine yardımcı olan sistemler, yönetişim yapıları ve stratejik çerçeveler tasarlar.'
                : 'Rather than delivering isolated consulting services, ACADEMIA works as a system architect—designing integrated frameworks that help organizations build structure and strengthen long-term institutional capacity.'}
            </p>
          </div>

          {/* ── RIGHT: image ── */}
          <div className="relative h-[280px] w-full overflow-hidden rounded-[18px] sm:h-[320px] lg:w-[300px] lg:shrink-0 xl:h-auto xl:min-h-[300px]">
            <Image
              src="/images/strategic-planning.png"
              alt="Strategic consulting"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   PROCESS — four steps (like reference design)
══════════════════════════════════════════════════════════════ */
function ProcessSection({ language }) {
  const tr    = language === 'tr';
  const steps = process[language] ?? process.en;

  return (
    <section id="process" className="scroll-mt-24 border-t border-[#F0EDE8] bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-14">

          {/* ── LEFT: label ── */}
          <div className="hidden w-[160px] shrink-0 lg:block">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#64748B]">
              {tr ? 'ACADEMIA Nasıl Çalışır' : 'How ACADEMIA Works'}
            </p>
          </div>

          {/* ── CENTER: content ── */}
          <div className="flex-1">
            <h2 className="max-w-[700px] text-[30px] font-light leading-[1.1] tracking-[-0.03em] text-[#1E293B] sm:text-[36px] lg:text-[42px]">
              {tr
                ? 'Danışmanlık değil, sistematik dönüşüm süreci.'
                : 'Not consulting as a service, but transformation as a structured process.'}
            </h2>
            <p className="mt-5 max-w-[680px] text-[15px] leading-[1.9] text-[#475569]">
              {tr
                ? 'ACADEMIA her çalışmayı bağımsız bir görev olarak değil, kurumsal yapıyı güçlendiren bütünsel bir süreç olarak ele alır.'
                : 'ACADEMIA approaches each engagement not as an isolated task, but as a structured process that strengthens institutional clarity.'}
            </p>

            {/* 4 columns with arrows */}
            <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {/* Connector arrows between circles (desktop only) */}
              <div className="pointer-events-none absolute left-[56px] right-[calc(25%+12px)] top-[24px] hidden lg:block">
                <div className="flex items-center justify-between">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="flex items-center" style={{ width: '33%' }}>
                      <div className="h-px flex-1 bg-[#1E293B]/15" />
                      <div className="ml-[-1px] h-0 w-0 border-l-[5px] border-y-[2.5px] border-l-[#1E293B]/25 border-y-transparent" />
                    </div>
                  ))}
                </div>
              </div>

              {steps.map((s) => (
                <div key={s.num}>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1E293B]">
                    <span className="text-[15px] font-bold text-[#1E293B]">{s.num}</span>
                  </div>
                  <h3 className="text-[17px] font-bold text-[#1E293B]">{s.title}</h3>
                  <p className="mt-3 text-[13px] leading-[1.8] text-[#64748B]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   ECOSYSTEM — three product cards
══════════════════════════════════════════════════════════════ */
function EcosystemSection({ language }) {
  const tr = language === 'tr';

  return (
    <section id="ecosystem" className="scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">

        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[480px]">
            <Eyebrow>{tr ? 'ACADEMIA Grubu' : 'ACADEMIA Group'}</Eyebrow>
            <h2 className="mt-4 text-[30px] font-light leading-[1.1] tracking-[-0.03em] text-[#1E293B] sm:text-[36px] lg:text-[42px]">
              {tr ? 'Birbirine Bağlı Bir Ekosistem' : 'An Interconnected Ecosystem'}
            </h2>
          </div>
          <p className="max-w-[340px] text-[14px] leading-[1.85] text-[#475569]">
            {tr
              ? 'Her biri belirli bir kurumsal ihtiyaca odaklanan uzman platformlardan oluşan bir ekosistem.'
              : 'An ecosystem of specialized platforms, each focused on a specific institutional need.'}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {ecosystem.map((item) => {
            const c = tr ? item.tr : item.en;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.10)]"
              >
                <div className="absolute -right-8 -top-8 h-[140px] w-[140px] rounded-full opacity-[0.06]" style={{ backgroundColor: item.accent }} />
                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: `${item.accent}18` }}>
                    <Image src={item.logo} alt={item.name} width={28} height={28} className="h-7 w-7 object-contain" />
                  </div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: item.accent }}>{item.name}</p>
                  <h3 className="text-[18px] font-bold leading-snug text-[#1E293B]">{c.title}</h3>
                  <p className="mt-3 text-[13.5px] leading-[1.8] text-[#475569]">{c.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] opacity-0 transition-all duration-300 group-hover:opacity-100" style={{ color: item.accent }}>
                    {tr ? 'Siteyi Ziyaret Et' : 'Visit Website'}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   INSIGHTS — industry articles
══════════════════════════════════════════════════════════════ */
function InsightsSection({ language }) {
  const tr = language === 'tr';

  const articles = [
    {
      tag: 'AI Governance',
      color: '#58C3E8',
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
      color: '#F97342',
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
      color: '#1E293B',
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
    <section id="insights" className="scroll-mt-24 border-t border-[#F0EDE8] bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-14">

          {/* ── LEFT: label ── */}
          <div className="hidden w-[160px] shrink-0 lg:block">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#64748B]">
              {tr ? 'Sektörel Gündem' : 'Industry Insights'}
            </p>
          </div>

          {/* ── RIGHT: content ── */}
          <div className="flex-1">
            <h2 className="mb-12 max-w-[600px] text-[30px] font-light leading-[1.1] tracking-[-0.03em] text-[#1E293B] sm:text-[36px] lg:text-[42px]">
              {tr ? 'Sektörden öne çıkan gelişmeler.' : 'Key developments shaping the industry.'}
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {articles.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-l-2 rounded-r-xl bg-[#FAFAF8] p-6 transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
                  style={{ borderLeftColor: item.color }}
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#64748B]">{item.tag}</span>
                  <h3 className="mt-3 text-[15px] font-bold leading-[1.35] text-[#1E293B] transition group-hover:text-[#F97342]">
                    {item.title[language] || item.title.en}
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.75] text-[#64748B]">
                    {item.desc[language] || item.desc.en}
                  </p>
                  <div className="mt-4 text-[12px] font-medium text-[#94A3B8] transition group-hover:text-[#F97342]">
                    {item.source} →
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

/* ══════════════════════════════════════════════════════════════
   CTA — premium institutional style
══════════════════════════════════════════════════════════════ */
function CTASection({ language }) {
  const tr = language === 'tr';

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-[#F0EDE8] bg-white px-8 py-16 sm:px-14 lg:px-20 lg:py-20">
          {/* Subtle orange glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2" style={{ background: 'radial-gradient(circle at 80% 50%, rgba(249,115,66,0.08), transparent 60%)' }} />
          {/* Decorative orbit lines */}
          <div className="pointer-events-none absolute right-[15%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full border border-dashed border-[#F97342]/10" />
          <div className="pointer-events-none absolute right-[18%] top-1/2 h-[200px] w-[200px] -translate-y-1/2 rounded-full border border-[#F97342]/8" />

          <div className="relative flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[520px]">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[#64748B]">
                {tr ? 'Kurumsal Dönüşüm' : 'Institutional Transformation'}
              </p>
              <h2 className="text-[30px] font-light leading-[1.1] tracking-[-0.03em] text-[#1E293B] sm:text-[36px] lg:text-[42px]">
                {tr
                  ? 'Dönüşüm yolculuğunuza bugün başlayın.'
                  : 'Start your transformation journey today.'}
              </h2>
              <p className="mt-5 max-w-[440px] text-[15px] leading-[1.85] text-[#475569]">
                {tr
                  ? 'ACADEMIA ekibi, kurumunuzun ihtiyaçlarını anlayıp en uygun çözümü birlikte tasarlamak için hazır.'
                  : 'The ACADEMIA team is ready to understand your needs and co-design the right solution for your institution.'}
              </p>
            </div>

            <div className="flex shrink-0">
              <a
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#1E293B] px-7 py-3.5 text-[13px] font-bold text-white shadow-[0_4px_16px_rgba(30,41,59,0.2)] transition hover:bg-[#334155] active:scale-[0.98]"
              >
                {tr ? 'İletişime Geçin' : 'Contact Us'} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   FOOTER — dark, structured
══════════════════════════════════════════════════════════════ */
function Footer({ language }) {
  const tr = language === 'tr';

  const navLinks = tr
    ? [
        { label: 'ACADEMIA Nedir', href: '/#what-academia-is' },
        { label: 'Hizmet Alanları', href: '/#expertise' },
        { label: 'Nasıl Çalışıyoruz', href: '/#process' },
        { label: 'ACADEMIA Grubu', href: '/#ecosystem' },
        { label: 'İletişim', href: '/contact' },
      ]
    : [
        { label: 'What ACADEMIA Is', href: '/#what-academia-is' },
        { label: 'Service Areas', href: '/#expertise' },
        { label: 'How We Work', href: '/#process' },
        { label: 'ACADEMIA Group', href: '/#ecosystem' },
        { label: 'Contact', href: '/contact' },
      ];

  return (
    <footer className="relative border-t border-[#F0EDE8] bg-white/70 pt-16 pb-8 backdrop-blur-md">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1/3" style={{ background: 'radial-gradient(circle at 10% 30%, rgba(249,115,66,0.05), transparent 50%)' }} />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">

        {/* Top row */}
        <div className="mb-12 flex flex-col gap-10 lg:flex-row lg:justify-between">
          {/* Brand */}
          <div className="max-w-[320px]">
            <Image src="/logo.png" alt="ACADEMIA" width={160} height={48} className="mb-5 h-12 w-auto object-contain" />
            <p className="text-[13px] font-medium leading-[1.85] text-[#64748B]">
              {tr
                ? 'Kurumsal dönüşüm için yapısal çözümler sunan Türkiye\'nin önde gelen danışmanlık firması.'
                : 'Turkey\'s leading consulting firm providing structural solutions for institutional transformation.'}
            </p>
            <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.16em] text-[#94A3B8]">
              Governance · Sustainability · Institutional Intelligence
            </p>
            <a href="mailto:info@academiadanismanlik.com" className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-[#F97342] transition hover:text-[#E55A25]">
              info@academiadanismanlik.com
            </a>
          </div>

          {/* Nav */}
          <div>
            <p className="mb-5 text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#475569]">
              {tr ? 'Sayfalar' : 'Pages'}
            </p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[13px] font-medium text-[#64748B] transition hover:text-[#1E293B]">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Group */}
          <div>
            <p className="mb-5 text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#475569]">
              {tr ? 'ACADEMIA Grubu' : 'ACADEMIA Group'}
            </p>
            <ul className="space-y-3">
              {ecosystem.map((e) => (
                <li key={e.name}>
                  <a href={e.href} target="_blank" rel="noopener noreferrer" className="text-[13px] font-medium text-[#64748B] transition hover:text-[#F97342]">{e.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#F0EDE8] pt-6 sm:flex-row">
          <p className="text-[12px] text-[#94A3B8]">
            © {new Date().getFullYear()} ACADEMIA Danışmanlık.{' '}
            {tr ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}
          </p>
          <div className="flex gap-2">
            <a href="/terms" className="text-[12px] text-[#94A3B8] transition hover:text-[#1E293B]">{tr ? 'Kullanım Koşulları' : 'Terms of Use'}</a>
            <span className="text-[12px] text-[#94A3B8]">·</span>
            <a href="/privacy" className="text-[12px] text-[#94A3B8] transition hover:text-[#1E293B]">{tr ? 'Gizlilik Politikası' : 'Privacy Policy'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════════ */
export default function HomePage() {
  const { language } = useLanguage();
  const lang = language === 'tr' ? 'tr' : 'en';

  return (
    <div className="min-h-screen bg-white text-[#1E293B]">
      <Header />
      <main>
        <HeroSection       language={lang} />
        <WhatSection       language={lang} />
        <ExpertiseSection  language={lang} />
        <ProcessSection    language={lang} />
        <EcosystemSection  language={lang} />
        <InsightsSection   language={lang} />
        <CTASection        language={lang} />
      </main>
      <Footer language={lang} />
    </div>
  );
}
