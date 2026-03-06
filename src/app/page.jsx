'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Link } from '@/components/Link';
import { Text } from '@/components/Text';
import { Logo } from '@/components/Logo';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/translations';

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();
  const t = useTranslation(language);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-body bg-accent dark:bg-primary text-primary dark:text-accent font-sans antialiased overflow-x-hidden selection:bg-[#B8860B] selection:text-white">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-accent dark:bg-primary shadow-sm ${scrolled ? 'shadow-md' : ''}`}>
        <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full flex items-center h-16 sm:h-20 lg:h-24">
            {/* Mobile Menu Button */}
            <button 
              aria-expanded={mobileMenuOpen} 
              onClick={() => setMobileMenuOpen(true)} 
              type="button" 
              className="lg:hidden p-3 text-primary dark:text-accent hover:text-[#B8860B] transition-colors -ml-2"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            {/* Logo - Left Side */}
            <div className="flex items-center lg:w-64">
              <Link className="inline-flex items-center" href="/">
                <Logo />
              </Link>
            </div>
            
            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8 flex-1">
              <Link className="inline-block text-sm font-medium uppercase tracking-wider text-primary dark:text-accent hover:text-[#B8860B] transition-colors whitespace-nowrap" href="/">{t.nav.home}</Link>
              <Link className="inline-block text-sm font-medium uppercase tracking-wider text-primary dark:text-accent hover:text-[#B8860B] transition-colors whitespace-nowrap" href="/about">{t.nav.about}</Link>
              <Link className="inline-block text-sm font-medium uppercase tracking-wider text-primary dark:text-accent hover:text-[#B8860B] transition-colors whitespace-nowrap" href="/products">{t.nav.services}</Link>
              <Link className="inline-block text-sm font-medium uppercase tracking-wider text-primary dark:text-accent hover:text-[#B8860B] transition-colors whitespace-nowrap" href="/contact">{t.nav.contact}</Link>
            </div>
            
            {/* Language Switcher - Right Side */}
            <div className="flex items-center justify-end lg:w-64 -mr-2 lg:mr-0">
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 lg:hidden ${mobileMenuOpen ? '' : 'pointer-events-none'}`}>
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className={`absolute top-0 right-0 bottom-0 w-full max-w-[280px] sm:max-w-sm bg-white dark:bg-gray-900 shadow-2xl transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-800">
            <Logo size="small" />
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 text-primary dark:text-accent hover:text-[#B8860B] transition-colors -mr-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="p-4 sm:p-6 space-y-1">
            <Link 
              href="/" 
              className="block text-base sm:text-lg font-medium text-primary dark:text-accent hover:text-[#B8860B] transition-colors py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link 
              href="/about" 
              className="block text-base sm:text-lg font-medium text-primary dark:text-accent hover:text-[#B8860B] transition-colors py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.about}
            </Link>
            <Link 
              href="/products" 
              className="block text-base sm:text-lg font-medium text-primary dark:text-accent hover:text-[#B8860B] transition-colors py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.services}
            </Link>
            <Link 
              href="/contact" 
              className="block text-base sm:text-lg font-medium text-primary dark:text-accent hover:text-[#B8860B] transition-colors py-3 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </Link>
          </nav>
        </div>
      </div>

      <main className="pt-16 sm:pt-20 lg:pt-24">
        <section className="relative flex items-center justify-center overflow-hidden py-6 sm:py-8 lg:py-12 min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)]">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="absolute top-20 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#B8860B]/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#F5E6D3]/20 blur-[150px] rounded-full"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-center">
              <div className="text-center lg:text-left space-y-3 sm:space-y-4 lg:space-y-6">
                <div>
                  <span className="inline-block text-[#B8860B] text-xs sm:text-sm uppercase tracking-[0.3em] mb-2 font-semibold">
                    {t.home.subtitle}
                  </span>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold leading-tight text-primary dark:text-accent">
                    {t.home.title1}
                    <br />
                    <span className="text-[#B8860B] italic">{t.home.title2}</span>
                    <br />
                    {t.home.title3}
                  </h1>
                </div>
                <p className="text-primary/70 dark:text-accent/70 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  {t.home.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-3">
                  <Link 
                    className="inline-flex items-center justify-center px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 bg-[#B8860B] text-white text-sm sm:text-base uppercase tracking-wider font-medium hover:bg-[#9a7209] transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl" 
                    href="/products"
                  >
                    {t.home.contactBtn}
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                  <Link 
                    className="inline-flex items-center justify-center px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 border-2 border-[#B8860B] text-[#B8860B] text-sm sm:text-base uppercase tracking-wider font-medium hover:bg-[#B8860B] hover:text-white transition-all duration-300 rounded-lg" 
                    href="/contact"
                  >
                    {t.home.aboutBtn}
                  </Link>
                </div>
              </div>
              <div className="relative lg:pl-8 mt-4 sm:mt-6 lg:mt-0">
                <div className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=800&fit=crop&q=80" 
                    alt="Business consulting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-12 lg:py-16 bg-accent dark:bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <Text className="inline-block text-[#B8860B] text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2 sm:mb-3">{t.home.servicesTitle}</Text>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-medium text-primary dark:text-accent mb-3 sm:mb-4 px-4">
                {t.home.servicesSubtitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <Link href="/products" className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-36 sm:h-40 lg:h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&q=80" 
                    alt="Product Certification"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B]/60 to-[#9a7209]/60"></div>
                </div>
                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-serif font-medium text-primary dark:text-accent mb-2">{t.home.service1Title}</h3>
                  <p className="text-primary/70 dark:text-accent/70 text-xs sm:text-sm">{t.home.service1Desc}</p>
                </div>
              </Link>

              <Link href="/products" className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-36 sm:h-40 lg:h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80" 
                    alt="System Certification"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/60 to-blue-600/60"></div>
                </div>
                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-serif font-medium text-primary dark:text-accent mb-2">{t.home.service2Title}</h3>
                  <p className="text-primary/70 dark:text-accent/70 text-xs sm:text-sm">{t.home.service2Desc}</p>
                </div>
              </Link>

              <Link href="/products" className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-36 sm:h-40 lg:h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&q=80" 
                    alt="Legal Compliance"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/60 to-purple-600/60"></div>
                </div>
                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-serif font-medium text-primary dark:text-accent mb-2">{t.home.service3Title}</h3>
                  <p className="text-primary/70 dark:text-accent/70 text-xs sm:text-sm">{t.home.service3Desc}</p>
                </div>
              </Link>

              <Link href="/products" className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-36 sm:h-40 lg:h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop&q=80" 
                    alt="Sustainability"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/60 to-green-600/60"></div>
                </div>
                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-serif font-medium text-primary dark:text-accent mb-2">{t.home.service4Title}</h3>
                  <p className="text-primary/70 dark:text-accent/70 text-xs sm:text-sm">{t.home.service4Desc}</p>
                </div>
              </Link>
            </div>
            <div className="text-center mt-8 sm:mt-10">
              <Link 
                href="/products"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#B8860B] to-[#9a7209] text-white text-xs sm:text-sm uppercase tracking-widest hover:shadow-xl transition-all duration-300 rounded-lg font-medium"
              >
                {language === 'tr' ? 'Tüm Hizmetleri Görüntüle' : 'View All Services'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary dark:bg-accent text-accent dark:text-primary py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
            <div>
              <h3 className="text-base sm:text-lg font-serif font-medium mb-3 sm:mb-4">Academia Danışmanlık</h3>
              <p className="text-accent/70 dark:text-primary/70 text-sm sm:text-base">{t.footer.description}</p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-serif font-medium mb-3 sm:mb-4">{t.footer.quickLinks}</h3>
              <ul className="space-y-2">
                <li><Link className="text-accent/70 dark:text-primary/70 hover:text-[#B8860B] transition-colors text-sm sm:text-base" href="/">{t.nav.home}</Link></li>
                <li><Link className="text-accent/70 dark:text-primary/70 hover:text-[#B8860B] transition-colors text-sm sm:text-base" href="/about">{t.nav.about}</Link></li>
                <li><Link className="text-accent/70 dark:text-primary/70 hover:text-[#B8860B] transition-colors text-sm sm:text-base" href="/products">{t.nav.services}</Link></li>
                <li><Link className="text-accent/70 dark:text-primary/70 hover:text-[#B8860B] transition-colors text-sm sm:text-base" href="/contact">{t.nav.contact}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-serif font-medium mb-3 sm:mb-4">{t.footer.contactInfo}</h3>
              <ul className="space-y-2 text-accent/70 dark:text-primary/70 text-sm sm:text-base">
                <li>Tel: 212-613 58 80</li>
                <li>Fax: 212-322 04 11</li>
                <li>Sarıyer / İstanbul</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-accent/20 dark:border-primary/20 pt-6 sm:pt-8 text-center">
            <p className="text-accent/70 dark:text-primary/70 text-xs sm:text-sm">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
