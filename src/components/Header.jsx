'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from '@/components/Link';
import { Logo } from '@/components/Logo';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

export function Header() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language }            = useLanguage();
  const lang                    = language === 'tr' ? 'tr' : 'en';

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = lang === 'tr'
    ? [
        { label: 'ACADEMIA Nedir',  href: '/#what-academia-is' },
        { label: 'Hizmetler',       href: '/#expertise' },
        { label: 'ACADEMIA Grubu',  href: '/#ecosystem' },
        { label: 'Gündem',          href: '/#insights' },
        { label: 'İletişim',        href: '/contact' },
      ]
    : [
        { label: 'What ACADEMIA Is', href: '/#what-academia-is' },
        { label: 'Services',         href: '/#expertise' },
        { label: 'ACADEMIA Group',   href: '/#ecosystem' },
        { label: 'Insights',         href: '/#insights' },
        { label: 'Contact',          href: '/contact' },
      ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-[#E5E5E5] bg-white/96 shadow-[0_1px_12px_rgba(0,0,0,0.06)] backdrop-blur-md'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <nav className="mx-auto flex h-[60px] max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:h-[68px] lg:px-10">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpen(true)}
              className="rounded-lg p-2 text-[#666] transition hover:bg-[#F5F5F5] hover:text-black lg:hidden"
              aria-label="Menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <Link href="/" className="shrink-0"><Logo /></Link>
          </div>

          {/* Center nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {links.map((l) => {
              const hash = l.href.startsWith('/#') ? l.href.slice(2) : null;
              return hash ? (
                <button
                  key={l.href}
                  onClick={() => {
                    const el = document.getElementById(hash);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = l.href;
                    }
                  }}
                  className="nav-link-lux text-[13.5px] font-medium text-[#666] transition-colors hover:text-black"
                >
                  {l.label}
                </button>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  className="nav-link-lux text-[13.5px] font-medium text-[#666] transition-colors hover:text-black"
                >
                  {l.label}
                </a>
              );
            })}
          </div>

          {/* Right */}
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#F97342] px-4 py-2 text-[12px] font-semibold text-white shadow-[0_4px_14px_rgba(249,115,66,0.3)] transition hover:bg-[#E55A25]"
            >
              {lang === 'tr' ? 'İletişim' : 'Contact'}
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-[60] lg:hidden ${open ? '' : 'pointer-events-none'}`}>
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 h-full w-[280px] max-w-[88vw] bg-white shadow-[4px_0_32px_rgba(0,0,0,0.10)] transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex items-center justify-between border-b border-[#E5E5E5] px-5 py-4">
            <Logo size="small" />
            <button onClick={() => setOpen(false)} className="rounded-lg p-1.5 text-[#666] hover:bg-[#F5F5F5]">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="px-5 pt-7">
            <div className="space-y-0.5">
              {links.map((l) => {
                const hash = l.href.startsWith('/#') ? l.href.slice(2) : null;
                return hash ? (
                  <button key={l.href}
                    onClick={() => {
                      setOpen(false);
                      setTimeout(() => {
                        const el = document.getElementById(hash);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          window.location.href = l.href;
                        }
                      }, 300);
                    }}
                    className="block w-full rounded-xl px-4 py-3.5 text-left text-[14px] font-medium text-[#555] transition hover:bg-[#F5F5F5] hover:text-black">
                    {l.label}
                  </button>
                ) : (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3.5 text-[14px] font-medium text-[#555] transition hover:bg-[#F5F5F5] hover:text-black">
                    {l.label}
                  </a>
                );
              })}
            </div>
            <div className="mt-6 space-y-3 border-t border-[#E5E5E5] pt-5">
              <LanguageSwitcher />
              <Link href="/contact" onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-[#F97342] py-3 text-[13px] font-semibold text-white">
                {lang === 'tr' ? 'İletişim' : 'Contact'} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
