import Image from 'next/image';

export function Logo({ size = 'default' }) {
  const sizes = {
    small: { width: 68, height: 24, wrap: 'h-6' },
    default: { width: 120, height: 38, wrap: 'h-9' },
    large: { width: 160, height: 48, wrap: 'h-11' },
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
