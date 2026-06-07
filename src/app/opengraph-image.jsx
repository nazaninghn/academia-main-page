import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Academia Danışmanlık';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 50%, #fff5f0 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Orange accent line */}
        <div style={{ width: 60, height: 4, background: '#F97342', borderRadius: 2, marginBottom: 32 }} />

        {/* Title */}
        <div style={{ fontSize: 56, fontWeight: 700, color: '#1E293B', lineHeight: 1.15, marginBottom: 20, maxWidth: 700 }}>
          Kurumsal Dönüşüm
          <span style={{ color: '#F97342', display: 'block' }}>Kalıcı Etki Yaratan Güç.</span>
        </div>

        {/* Subtitle */}
        <div style={{ fontSize: 22, color: '#64748B', maxWidth: 600, lineHeight: 1.5, marginBottom: 48 }}>
          Yönetişim, uyum ve sürdürülebilirlik danışmanlığında Türkiye'nin öncü firması.
        </div>

        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: '#1E293B', letterSpacing: '-0.01em' }}>
            ACADEMIA
          </div>
          <div style={{ fontSize: 16, color: '#94A3B8' }}>academia.net.tr</div>
        </div>

        {/* Decorative circle */}
        <div style={{
          position: 'absolute', right: 80, top: '50%',
          width: 400, height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,66,0.08) 0%, transparent 70%)',
          transform: 'translateY(-50%)',
        }} />
      </div>
    ),
    { ...size }
  );
}
