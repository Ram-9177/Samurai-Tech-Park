/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neon Cyberpunk Colors
        'electric-blue': '#00ffff',
        'neon-green': '#00ff00',
        'hot-pink': '#ff00ff',
        'neon-yellow': '#ffff00',
        'neon-purple': '#8000ff',
        'neon-orange': '#ff8000',
        
        // Dark Theme Colors
        'dark-bg': '#0a0a0a',
        'dark-card': '#111111',
        'dark-section': '#0f0f0f',
        'dark-border': '#1a1a1a',
        
        // Accent Colors
        'cyber-blue': '#00bfff',
        'cyber-green': '#00ff80',
        'cyber-pink': '#ff0080',
        'cyber-purple': '#8000ff',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-neon': 'pulse-neon 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-neon': {
          '0%, 100%': { 
            boxShadow: '0 0 5px currentColor',
            opacity: '1'
          },
          '50%': { 
            boxShadow: '0 0 20px currentColor, 0 0 30px currentColor',
            opacity: '0.8'
          },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 5px currentColor',
            textShadow: '0 0 5px currentColor'
          },
          '100%': { 
            boxShadow: '0 0 20px currentColor, 0 0 30px currentColor',
            textShadow: '0 0 10px currentColor, 0 0 20px currentColor'
          },
        },
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff',
        'neon-green': '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00',
        'neon-pink': '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 15px #ff00ff',
        'neon-purple': '0 0 5px #8000ff, 0 0 10px #8000ff, 0 0 15px #8000ff',
      },
      textShadow: {
        'neon-blue': '0 0 5px #00ffff, 0 0 10px #00ffff',
        'neon-green': '0 0 5px #00ff00, 0 0 10px #00ff00',
        'neon-pink': '0 0 5px #ff00ff, 0 0 10px #ff00ff',
        'neon-purple': '0 0 5px #8000ff, 0 0 10px #8000ff',
      },
    },
  },
  plugins: [],
}
