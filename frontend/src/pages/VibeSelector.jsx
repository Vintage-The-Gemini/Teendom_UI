// VIBE SELECTOR — Pick a homepage to preview. 2 designs.
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const VIBES = [
  {
    id: 1, route: '/home/street', label: 'HOME 1', name: 'GRITTY STREETWEAR',
    desc: 'Light gray. Anton font. 4px solid black borders. Red accent. Space Mono body text. Editorial brutalism.',
    preview: '/images/a..2.creative images for sections/dark fasion girl.png',
    accent: '#DC2626', bg: '#F4F4F4',
  },
];

export default function VibeSelector() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: '#F4F4F4' }}>

      {/* ── NAV ── */}
      <nav style={{ borderBottom: '4px solid #000', background: '#fff', position: 'sticky', top: 0, zIndex: 50 }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span style={{ fontFamily: 'Anton, sans-serif', fontSize: '1.75rem', letterSpacing: '-0.5px', color: '#000' }}>TEENDOM</span>
            <div className="hidden md:block" style={{ width: '1px', height: '20px', background: '#ddd' }} />
            <span className="hidden md:block" style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '10px', fontWeight: 900, letterSpacing: '0.25em', color: '#aaa', textTransform: 'uppercase' }}>UI Design Preview</span>
          </div>
          <div className="hidden md:flex items-center gap-0">
            {VIBES.map((v, i) => (
              <button key={v.id} onClick={() => navigate(v.route)}
                style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '11px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '8px 18px', borderLeft: i === 0 ? '2px solid #000' : 'none', borderRight: '2px solid #000', borderTop: '2px solid #000', borderBottom: '2px solid #000', background: 'transparent', color: '#555', cursor: 'pointer', marginLeft: i > 0 ? '-2px' : 0, transition: 'background 0.15s, color 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#DC2626'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#555'; }}>
                {v.label}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', border: '2px solid #000', background: '#DC2626' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff' }} />
            <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '10px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff' }}>2 Designs Ready</span>
          </div>
        </div>
      </nav>

      {/* ── HEADER ── */}
      <div className="px-6 py-14 max-w-6xl mx-auto" style={{ borderBottom: '4px solid #000' }}>
        <p style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '10px', fontWeight: 900, letterSpacing: '0.35em', color: '#aaa', textTransform: 'uppercase', marginBottom: '16px' }}>Teendom Africa · Homepage UI Concepts</p>
        <h1 style={{ fontFamily: 'Anton, sans-serif', fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-2px', color: '#000', lineHeight: 0.95, marginBottom: '16px' }}>PICK YOUR<br />HOMEPAGE VIBE</h1>
        <p style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '14px', color: '#888', maxWidth: '420px', lineHeight: 1.6 }}>Three distinct design directions — same Teendom content, different visual energy. Click any card to open the full homepage.</p>
      </div>

      {/* ── VIBE CARDS ── */}
      <div className="px-6 py-12 max-w-6xl mx-auto grid sm:grid-cols-3 gap-4">
        {VIBES.map((vibe, i) => (
          <motion.button key={vibe.id}
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.09 }}
            onClick={() => navigate(vibe.route)}
            className="text-left group"
            style={{ border: '4px solid #000', overflow: 'hidden', background: '#fff', cursor: 'pointer', display: 'block' }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}>

            <div style={{ position: 'relative', height: '320px', background: vibe.bg, overflow: 'hidden', borderBottom: '4px solid #000' }}>
              <img src={vibe.preview} alt={vibe.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '6px', background: vibe.accent }} />
            </div>

            <div style={{ padding: '24px', background: vibe.bg }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '10px', fontWeight: 900, letterSpacing: '0.3em', color: '#aaa', textTransform: 'uppercase' }}>{vibe.label}</span>
                <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '10px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '3px 8px', border: `2px solid ${vibe.accent}`, color: vibe.accent }}>PREVIEW</span>
              </div>
              <h2 style={{ fontFamily: 'Anton, sans-serif', fontSize: '1.5rem', letterSpacing: '-0.5px', color: '#000', lineHeight: 1.05, marginBottom: '10px' }}>{vibe.name}</h2>
              <p style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '12px', color: '#777', lineHeight: 1.6, marginBottom: '20px' }}>{vibe.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: '"Space Grotesk", sans-serif', fontSize: '11px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: vibe.accent }}>
                Open Homepage <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <footer style={{ borderTop: '4px solid #000', padding: '24px' }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <p style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '12px', color: '#aaa' }}>© 2024 Teendom Africa · UI Design System</p>
          <p style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '12px', fontWeight: 900, color: '#aaa', letterSpacing: '0.2em', textTransform: 'uppercase' }}>2 Variations · Light Mode Only</p>
        </div>
      </footer>
    </div>
  );
}
