import Image from 'next/image';

export function Logo({ size = 'default' }) {
  const sizes = {
    small: { width: 84, height: 28, wrap: 'h-7' },
    default: { width: 180, height: 54, wrap: 'h-9 sm:h-10 lg:h-[48px]' },
    large: { width: 200, height: 60, wrap: 'h-14' },
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
