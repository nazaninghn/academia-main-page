import Image from 'next/image';

export function Logo({ size = 'default' }) {
  const sizes = {
    small: { width: 68, height: 24, wrap: 'h-6' },
    default: { width: 82, height: 28, wrap: 'h-7' },
    large: { width: 110, height: 36, wrap: 'h-9' },
  };

  const s = sizes[size] || sizes.default;

  return (
    <div className={`flex items-center overflow-hidden ${s.wrap}`}>
      <Image
        src="/logo.png"
        alt="ACADEMIA"
        width={s.width}
        height={s.height}
        className="h-full w-auto origin-left scale-[0.9] object-contain"
        priority
      />
    </div>
  );
}
