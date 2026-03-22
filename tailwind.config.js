/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        night: '#070B16',
        panel: '#10182B',
        panelSoft: '#131D34',
        electric: '#7C3AED',
        neon: '#38BDF8',
        mint: '#2DD4BF'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.04), 0 24px 60px rgba(12, 16, 32, 0.45)'
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top left, rgba(124,58,237,0.32), transparent 35%), radial-gradient(circle at top right, rgba(56,189,248,0.24), transparent 30%), linear-gradient(135deg, #070B16 0%, #0D1325 50%, #111B36 100%)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.65', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' }
        },
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' }
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        pulseSoft: 'pulseSoft 2.2s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
