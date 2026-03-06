'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export function Logo({ className = '', showText = true, size = 'default' }) {
  const { language } = useLanguage();
  
  const sizes = {
    small: { width: 50, height: 50 },
    default: { width: 80, height: 80 },
    large: { width: 100, height: 100 }
  };

  const currentSize = sizes[size] || sizes.default;
  
  const subtitle = language === 'tr' ? 'Kurumsal Danışmanlık' : 'Corporate Consulting';

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      <Image 
        src="/logo.png" 
        alt="Academia Danışmanlık" 
        width={currentSize.width} 
        height={currentSize.height}
        className="object-contain flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20"
        priority
      />
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="text-sm sm:text-base lg:text-xl xl:text-2xl font-bold tracking-tight text-primary dark:text-accent whitespace-nowrap">
            ACADEMIA
          </span>
          <span className="text-[8px] sm:text-[9px] lg:text-[10px] xl:text-xs text-[#B8860B] uppercase tracking-wider font-medium whitespace-nowrap">
            {subtitle}
          </span>
        </div>
      )}
    </div>
  );
}
