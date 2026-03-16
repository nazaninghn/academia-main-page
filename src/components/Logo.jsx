import Image from 'next/image';

export function Logo({ size = 'default' }) {
  const sizes = {
    small: { width: 65, height: 22, maxH: 'max-h-[22px]' },
    default: { width: 200, height: 54, maxH: 'max-h-[48px]' },
    large: { width: 240, height: 64, maxH: 'max-h-[56px]' },
  };

  const s = sizes[size] || sizes.default;

  return (
    <Image
      src="/logo.png"
      alt="ACADEMIA"
      width={s.width}
      height={s.height}
      className={`h-auto w-auto object-contain ${s.maxH}`}
      priority
    />
  );
}
