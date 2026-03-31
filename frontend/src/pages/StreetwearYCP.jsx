import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const ANTON = 'Anton, sans-serif';
const MONO  = '"Space Mono", monospace';
const RED   = '#DC2626';

const TRACKS = [
  { num: '01', name: 'KNOW YOUR RIGHTS', desc: 'Deep-dive into the Kenyan constitution. Understand the rights guaranteed to every citizen — especially teens. Know what protects you, what empowers you, and how to use it.', art: '/images/a.1.abstract art background/download (18).jpg' },
  { num: '02', name: 'CIVIC ENGAGEMENT', desc: 'Governance is not a spectator sport. This track breaks down how county governments work, how to engage public participation processes, and how young people can influence local policy.', art: '/images/a.1.abstract art background/Abstract Art.jpg' },
  { num: '03', name: 'COMMUNITY LEADERSHIP', desc: 'Real leadership starts at the grassroots. Learn how to identify community needs, mobilise peers, run transparent projects, and leave a measurable impact in your county.', art: '/images/a.1.abstract art background/Blue Abstract pattern _ Graphic design pattern, Abstract pattern design, Pattern art.jpg' },
];

const TESTIMONIALS = [
  { quote: '"YCP gave me a language for what I already knew was wrong in my estate. Now I sit in ward meetings and they actually listen."', author: 'MERCY ACHIENG', county: 'KISUMU COUNTY' },
  { quote: '"I joined because of the certificate. I stayed because of the community. I lead now because YCP showed me I was already a leader."', author: 'BRIAN MUTUA', county: 'MACHAKOS COUNTY' },
  { quote: '"Constitutional education should be in every school. Until it is, YCP is filling the gap — and doing it better than most teachers."', author: 'DIANA WANJIKU', county: 'KIAMBU COUNTY' },
];

export default function StreetwearYCP() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', county: '' });
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ background: '#F4F4F4', minHeight: '100vh', paddingBottom: '52px' }}>

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50" style={{ borderBottom: '4px solid #000', background: '#F4F4F4' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
          <button onClick={() => navigate('/home/street')}
            style={{ fontFamily: ANTON, fontSize: '1.75rem', letterSpacing: '-1px', color: '#000', lineHeight: 1, background: 'none', border: 'none', cursor: 'pointer' }}>
            TEENDOM
          </button>
          <div className="hidden md:flex items-center">
            {[['HOME', '/home/street'], ['ARTICLES', '/street/articles'], ['YOUNG CITIZENS', '/street/ycp']].map(([label, path], i, arr) => (
              <button key={label} onClick={() => navigate(path)}
                style={{ fontFamily: MONO, fontSize: '11px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '8px 18px', borderLeft: '2px solid #000', borderRight: i === arr.length - 1 ? '2px solid #000' : 'none', borderTop: '2px solid #000', borderBottom: '2px solid #000', background: 'transparent', color: '#555', cursor: 'pointer', marginLeft: i > 0 ? '-2px' : 0 }}
                onMouseEnter={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = RED; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#555'; }}>
                {label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => navigate('/street/ycp')}
              className="hidden md:block"
              style={{ fontFamily: MONO, fontSize: '10px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '8px 16px', border: `3px solid #000`, background: RED, color: '#fff', cursor: 'pointer' }}>
              JOIN YCP
            </button>
            <button className="md:hidden p-1" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 py-4 flex flex-col" style={{ borderTop: '4px solid #000', background: '#F4F4F4' }}>
            {[['HOME', '/home/street'], ['ARTICLES', '/street/articles'], ['YOUNG CITIZENS', '/street/ycp']].map(([label, path]) => (
              <button key={label} onClick={() => { navigate(path); setMenuOpen(false); }}
                className="text-left py-3 px-2 font-black tracking-widest uppercase hover:bg-black hover:text-white transition-all"
                style={{ fontFamily: MONO, fontSize: '13px', borderBottom: '2px solid #000' }}>{label}</button>
            ))}
            <button onClick={() => { navigate('/street/ycp'); setMenuOpen(false); }}
              className="mt-3 py-3 px-4 font-black tracking-widest uppercase text-white text-center"
              style={{ fontFamily: MONO, fontSize: '13px', background: RED, border: '3px solid #000' }}>
              JOIN YCP
            </button>
          </div>
        )}
      </nav>

      {/* ── HERO ── mobile: stacked, desktop: 5/7 grid */}
      <section style={{ position: 'relative', background: '#F4F4F4', overflow: 'hidden' }}>
        {/* Watermark — desktop only */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          <span style={{ fontFamily: ANTON, fontSize: 'clamp(8rem,20vw,20rem)', color: '#e8e8e8', letterSpacing: '-8px', lineHeight: 1, userSelect: 'none', whiteSpace: 'nowrap' }}>YCP</span>
        </div>

        <div className="relative z-10 grid grid-cols-12" style={{ minHeight: '60vh' }}>
          {/* Image */}
          <div className="col-span-5 relative overflow-hidden" style={{ minHeight: '260px', borderRight: '4px solid #000' }}>
            <img src="/images/a..2.creative images for sections/hero section teens.png" alt="Young citizens"
              className="w-full h-full object-cover object-top" style={{ display: 'block', minHeight: '300px' }} />
            <div style={{ position: 'absolute', top: '16px', left: '16px', background: '#000', color: RED, fontFamily: MONO, fontSize: '10px', fontWeight: 900, letterSpacing: '0.25em', padding: '6px 12px', border: `2px solid ${RED}`, textTransform: 'uppercase' }}>
              YCP · 2026
            </div>
          </div>

          {/* Text */}
          <motion.div className="col-span-7 flex flex-col justify-center p-4 md:p-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p style={{ fontFamily: MONO, fontSize: '10px', color: RED, letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 900 }}>
              TEENDOM · YOUNG CITIZENS PROGRAM
            </p>
            <h1 style={{ fontFamily: ANTON, fontSize: 'clamp(2.8rem,8vw,8rem)', color: '#000', lineHeight: 0.85, letterSpacing: '-2px', margin: 0 }}>
              YOUNG<br />CITIZENS<br />PROGRAM.
            </h1>
            <div style={{ width: '80px', height: '6px', background: RED, margin: '24px 0 20px' }} />
            <p style={{ fontFamily: MONO, fontSize: '13px', color: '#444', letterSpacing: '0.05em', lineHeight: 1.9, maxWidth: '440px', marginBottom: '32px' }}>
              Constitutional education for Kenyan teens.<br />Three tracks. Real knowledge. Real power.
            </p>
            <div className="flex flex-row gap-0">
              <button
                style={{ fontFamily: MONO, fontSize: '11px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '14px 28px', border: `4px solid #000`, background: RED, color: '#fff', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#b91c1c'}
                onMouseLeave={e => e.currentTarget.style.background = RED}>
                JOIN NOW
              </button>
              <button
                className="sm:border-l-0"
                style={{ fontFamily: MONO, fontSize: '11px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '14px 28px', border: '4px solid #000', borderTop: '0', background: 'transparent', color: '#000', cursor: 'pointer', transition: 'background 0.2s, color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#000'; }}>
                READ MORE
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROGRAM OVERVIEW ── mobile: 1-col, tablet: 2-col, desktop: 3-col */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ background: '#F4F4F4', borderTop: '4px solid #000', borderBottom: '4px solid #000', padding: '48px 0' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p style={{ fontFamily: MONO, fontSize: '10px', color: RED, letterSpacing: '0.35em', textTransform: 'uppercase', fontWeight: 900, marginBottom: '32px' }}>PROGRAM OVERVIEW</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {TRACKS.map(({ num, name, desc }, i) => (
              <div key={num} className="border-4 border-black" style={{ marginLeft: 0, marginTop: i > 0 ? '-4px' : 0, background: '#F4F4F4', position: 'relative' }}>
                <div style={{ background: RED, padding: '10px 20px', borderBottom: '4px solid #000' }}>
                  <span style={{ fontFamily: ANTON, fontSize: '2rem', color: '#fff', letterSpacing: '-1px' }}>{num}</span>
                </div>
                <div style={{ padding: '24px 20px' }}>
                  <h3 style={{ fontFamily: ANTON, fontSize: '1.5rem', color: '#000', lineHeight: 1.05, letterSpacing: '-0.5px', margin: '0 0 12px' }}>{name}</h3>
                  <p style={{ fontFamily: MONO, fontSize: '11px', color: '#555', lineHeight: 1.85, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── THREE TRACKS ── mobile: 1-col, tablet: 2-col, desktop: 3-col */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ background: '#000', padding: '48px 0', borderBottom: '4px solid #000' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 style={{ fontFamily: ANTON, fontSize: 'clamp(2rem,5vw,4rem)', color: '#fff', letterSpacing: '-1px', lineHeight: 0.9, margin: '0 0 32px' }}>
            THE THREE<br />TRACKS.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {TRACKS.map(({ num, name, desc, art }, i) => (
              <div key={num} className="border-4 border-white" style={{ marginLeft: 0, marginTop: i > 0 ? '-4px' : 0, background: '#111', position: 'relative', overflow: 'hidden' }}>
                <div style={{ height: '180px', position: 'relative', overflow: 'hidden' }}>
                  <img src={art} alt={name} className="w-full h-full object-cover" />
                  <div style={{ position: 'absolute', top: '12px', left: '12px', background: RED, color: '#fff', fontFamily: MONO, fontSize: '10px', fontWeight: 900, letterSpacing: '0.2em', padding: '5px 10px', border: '2px solid #fff' }}>
                    TRACK {num}
                  </div>
                  <div style={{ position: 'absolute', inset: 0, borderBottom: '4px solid #fff' }} />
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontFamily: ANTON, fontSize: '1.4rem', color: '#fff', lineHeight: 1.05, letterSpacing: '-0.5px', margin: '0 0 10px' }}>{name}</h3>
                  <p style={{ fontFamily: MONO, fontSize: '10px', color: '#888', lineHeight: 1.8, margin: '0 0 16px' }}>{desc.slice(0, 120)}...</p>
                  <button
                    style={{ fontFamily: MONO, fontSize: '9px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '10px 20px', border: `3px solid ${RED}`, background: RED, color: '#fff', cursor: 'pointer', transition: 'background 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = RED; }}
                    onMouseLeave={e => { e.currentTarget.style.background = RED; e.currentTarget.style.color = '#fff'; }}>
                    EXPLORE TRACK
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── TESTIMONIALS ── mobile: 1-col, tablet: 2-col, desktop: 3-col */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ background: '#000', borderBottom: `4px solid ${RED}`, padding: '48px 0' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p style={{ fontFamily: MONO, fontSize: '10px', color: RED, letterSpacing: '0.35em', textTransform: 'uppercase', fontWeight: 900, marginBottom: '32px' }}>FROM THE COMMUNITY</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {TESTIMONIALS.map(({ quote, author, county }, i) => (
              <div key={author}
                style={{ borderLeft: `4px solid ${RED}`, borderTop: '4px solid #333', borderRight: '4px solid #333', borderBottom: '4px solid #333', marginLeft: 0, marginTop: i > 0 ? '-4px' : 0, padding: '28px 24px', background: '#0a0a0a' }}>
                <p style={{ fontFamily: MONO, fontSize: '11px', color: '#ccc', lineHeight: 2, fontStyle: 'italic', margin: '0 0 20px' }}>{quote}</p>
                <p style={{ fontFamily: ANTON, fontSize: '1.2rem', color: '#fff', margin: '0 0 6px', letterSpacing: '-0.5px' }}>{author}</p>
                <span style={{ fontFamily: MONO, fontSize: '9px', fontWeight: 900, letterSpacing: '0.2em', background: RED, color: '#fff', padding: '3px 8px', display: 'inline-block' }}>{county}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── APPLY ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ background: '#F4F4F4', borderBottom: '4px solid #000', padding: '64px 0' }}>
        <div className="max-w-lg mx-auto px-4 md:px-6 text-center">
          <p style={{ fontFamily: MONO, fontSize: '10px', color: RED, letterSpacing: '0.35em', textTransform: 'uppercase', fontWeight: 900, marginBottom: '16px' }}>APPLICATIONS OPEN</p>
          <h2 style={{ fontFamily: ANTON, fontSize: 'clamp(2.5rem,7vw,5.5rem)', color: '#000', lineHeight: 0.85, letterSpacing: '-2px', margin: '0 0 20px' }}>
            JOIN THE<br />MOVEMENT.
          </h2>
          <div style={{ width: '60px', height: '5px', background: RED, margin: '0 auto 20px' }} />
          <p style={{ fontFamily: MONO, fontSize: '11px', color: '#555', letterSpacing: '0.1em', lineHeight: 1.9, marginBottom: '32px' }}>
            APPLICATIONS ARE FREE. OPEN TO ALL KENYAN TEENS AGED 13–19. COUNTY-BASED COHORTS.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[{ placeholder: 'YOUR FULL NAME', key: 'name' }, { placeholder: 'EMAIL ADDRESS', key: 'email' }, { placeholder: 'YOUR COUNTY', key: 'county' }].map(({ placeholder, key }, i) => (
              <input key={key} type="text" placeholder={placeholder}
                value={formData[key]}
                onChange={e => setFormData(prev => ({ ...prev, [key]: e.target.value }))}
                style={{ padding: '14px 18px', fontFamily: MONO, fontSize: '11px', letterSpacing: '0.1em', background: '#fff', border: '4px solid #000', borderBottom: i < 2 ? 'none' : '4px solid #000', outline: 'none', color: '#000', width: '100%', boxSizing: 'border-box' }} />
            ))}
            <button
              style={{ width: '100%', padding: '16px', fontFamily: MONO, fontSize: '12px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', background: RED, color: '#fff', border: '4px solid #000', borderTop: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#b91c1c'}
              onMouseLeave={e => e.currentTarget.style.background = RED}>
              JOIN YCP NOW
            </button>
          </div>
        </div>
      </motion.section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#000', borderTop: `4px solid ${RED}`, padding: '1.5rem' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{ fontFamily: ANTON, fontSize: '1.5rem', color: '#fff' }}>TEENDOM</p>
          <p style={{ fontFamily: MONO, fontSize: '10px', color: '#555', letterSpacing: '0.15em' }}>© 2026 TEENDOM AFRICA</p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {['IG', 'TW', 'YT'].map(s => (
              <button key={s} style={{ fontFamily: MONO, fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', color: '#555', padding: '4px 8px', border: '2px solid #333', background: 'none', cursor: 'pointer' }}
                onMouseEnter={e => { e.currentTarget.style.color = RED; e.currentTarget.style.borderColor = RED; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#555'; e.currentTarget.style.borderColor = '#333'; }}>{s}</button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
