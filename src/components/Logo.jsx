import Image from 'next/image';

export function Logo({ size = 'default' }) {
  const width = size === 'small' ? 220 : 260;
  const height = size === 'small' ? 60 : 72;

  return (
    <Image
      src="/logo.png"
      alt="ACADEMIA"
      width={width}
      height={height}
      className="h-auto w-auto object-contain max-h-[56px]"
      priority
    />
  );
}
