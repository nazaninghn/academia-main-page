'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export function Logo({ className = '', showText = true, size = 'default' }) {
  const { language } = useLanguage();
  
  const sizes = {
    small: { width: 60, height: 60 },
    default: { width: 100, height: 100 },
    large: { width: 120, height: 120 }
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
        className="object-contain flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
        priority
        loading="eager"
        quality={100}
      />
    </div>
  );
}
