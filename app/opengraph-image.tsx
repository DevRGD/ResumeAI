import { ImageResponse } from 'next/og';

export const alt = 'ResumeAI Intelligence System';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#020617',
        backgroundImage:
          'radial-gradient(circle at 25px 25px, #1e293b 2%, transparent 0%), radial-gradient(circle at 75% 50%, rgba(245, 158, 11, 0.1), transparent 50%)',
        backgroundSize: '50px 50px, 100% 100%',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #fbbf24, #d97706)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#020617',
            boxShadow: '0 10px 30px -10px rgba(245, 158, 11, 0.5)',
          }}
        >
          R
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '64px',
              fontWeight: '900',
              color: 'white',
              lineHeight: '1',
            }}
          >
            Resume<span style={{ color: '#fbbf24' }}>AI</span>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '18px',
              color: '#64748b',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              marginTop: '10px',
            }}
          >
            Intelligence System
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          padding: '20px 40px',
          background: 'rgba(30, 41, 59, 0.5)',
          borderRadius: '12px',
          border: '1px solid rgba(255,255,255,0.1)',
          color: '#94a3b8',
          fontSize: '24px',
          marginTop: '40px',
        }}
      >
        Llama 3.3 Powered • ATS Optimization • 99.9% Match Accuracy
      </div>
    </div>,
    {
      ...size,
    },
  );
}
