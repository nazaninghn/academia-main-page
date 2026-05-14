'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('tr');
  const [mounted, setMounted]   = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('academia_lang');
    if (saved === 'en' || saved === 'tr') setLanguage(saved);
    setMounted(true);
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('academia_lang', lang);
  };

  // Before client mount, always return 'tr' to match server render → no hydration mismatch
  return (
    <LanguageContext.Provider value={{ language: mounted ? language : 'tr', changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
