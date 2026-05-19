import Image from 'next/image';

export function Logo({ size = 'default' }) {
  const sizes = {
    small: { width: 84, height: 28, wrap: 'h-7' },
    default: { width: 160, height: 48, wrap: 'h-9 sm:h-10 lg:h-[42px]' },
    large: { width: 260, height: 78, wrap: 'h-18' },
  };

  const s = sizes[size] || sizes.default;

  return (
    <div className={`flex items-center overflow-hidden ${s.wrap}`}>
      <Image
        src="/logo.png"
        alt="ACADEMIA"
        width={s.width}
        height={s.height}
        className="h-full w-auto object-contain"
        priority
      />
    </div>
  );
}
