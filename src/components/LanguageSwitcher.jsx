'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-primary dark:text-accent" />
      <button
        onClick={() => changeLanguage(language === 'tr' ? 'en' : 'tr')}
        className="text-sm uppercase tracking-wider text-primary dark:text-accent hover:text-[#B8860B] dark:hover:text-[#B8860B] transition-colors font-medium"
      >
        {language === 'tr' ? 'EN' : 'TR'}
      </button>
    </div>
  );
}
