'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from '@/components/Link';
import { Logo } from '@/components/Logo';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const currentLanguage = language === 'tr' ? 'tr' : 'en';

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#D9D6CE] bg-[#F5F3EE]/92 backdrop-blur-md">
        <nav className="mx-auto flex h-[72px] max-w-[1380px] items-center justify-between px-4 sm:px-6 lg:h-[82px] lg:px-8">
          <div className="flex items-center gap-3">
            <button onClick={() => setMobileMenuOpen(true)} className="inline-flex p-2 lg:hidden" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </button>
            <Link href="/" className="shrink-0">
              <Logo />
            </Link>
          </div>

          <div className="hidden items-center gap-8 lg:flex xl:gap-12">
            <a href="/#what-academia-is" className="whitespace-nowrap text-[13px] font-medium text-[#142033] transition hover:text-[#D89A4A] lg:text-[15px]">
              {currentLanguage === 'tr' ? 'ACADEMIA Nedir' : 'What ACADEMIA Is'}
            </a>
            <a href="/#expertise" className="whitespace-nowrap text-[13px] font-medium text-[#142033] transition hover:text-[#D89A4A] lg:text-[15px]">
              {currentLanguage === 'tr' ? 'Uzmanlık' : 'Expertise'}
            </a>
            <a href="/#ecosystem" className="whitespace-nowrap text-[13px] font-medium text-[#142033] transition hover:text-[#D89A4A] lg:text-[15px]">
              {currentLanguage === 'tr' ? 'ACADEMIA Grup' : 'ACADEMIA Group'}
            </a>
            <a href="/#insights" className="whitespace-nowrap text-[13px] font-medium text-[#142033] transition hover:text-[#D89A4A] lg:text-[15px]">
              {currentLanguage === 'tr' ? 'Gündem' : 'Insights'}
            </a>
            <Link href="/contact" className="whitespace-nowrap text-[13px] font-medium text-[#142033] transition hover:text-[#D89A4A] lg:text-[15px]">
              {currentLanguage === 'tr' ? 'İletişim' : 'Contact'}
            </Link>
          </div>

          <div className="hidden lg:flex">
            <LanguageSwitcher />
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-[60] lg:hidden ${mobileMenuOpen ? '' : 'pointer-events-none'}`}>
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className={`absolute left-0 top-0 h-full w-[280px] max-w-[85vw] bg-[#FCFBF8] shadow-2xl transition-transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between border-b border-[#D9D6CE] p-4 sm:p-5">
            <Logo size="small" />
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="space-y-5 p-5 sm:p-6">
            <a href="/#what-academia-is" className="block text-[15px]" onClick={() => setMobileMenuOpen(false)}>
              {currentLanguage === 'tr' ? 'ACADEMIA Nedir' : 'What ACADEMIA Is'}
            </a>
            <a href="/#expertise" className="block text-[15px]" onClick={() => setMobileMenuOpen(false)}>
              {currentLanguage === 'tr' ? 'Uzmanlık' : 'Expertise'}
            </a>
            <a href="/#ecosystem" className="block text-[15px]" onClick={() => setMobileMenuOpen(false)}>
              {currentLanguage === 'tr' ? 'ACADEMIA Grup' : 'ACADEMIA Group'}
            </a>
            <a href="/#insights" className="block text-[15px]" onClick={() => setMobileMenuOpen(false)}>
              {currentLanguage === 'tr' ? 'Gündem' : 'Insights'}
            </a>
            <Link href="/contact" className="block text-[15px]" onClick={() => setMobileMenuOpen(false)}>
              {currentLanguage === 'tr' ? 'İletişim' : 'Contact'}
            </Link>
            <div className="border-t border-[#D9D6CE] pt-4">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
