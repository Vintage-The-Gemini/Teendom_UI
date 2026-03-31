import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ANTON = 'Anton, sans-serif';
const MONO  = '"Space Mono", monospace';
const RED   = '#DC2626';

const TRACKS = [
  {
    num: '01',
    name: 'KNOW YOUR RIGHTS',
    desc: 'Deep-dive into the Kenyan constitution. Understand the rights guaranteed to every citizen — especially teens. Know what protects you, what empowers you, and how to use it.',
    art: '/images/a.1.abstract art background/download (18).jpg',
  },
  {
    num: '02',
    name: 'CIVIC ENGAGEMENT',
    desc: 'Governance is not a spectator sport. This track breaks down how county governments work, how to engage public participation processes, and how young people can influence local policy.',
    art: '/images/a.1.abstract art background/Abstract Art.jpg',
  },
  {
    num: '03',
    name: 'COMMUNITY LEADERSHIP',
    desc: 'Real leadership starts at the grassroots. Learn how to identify community needs, mobilise peers, run transparent projects, and leave a measurable impact in your county.',
    art: '/images/a.1.abstract art background/Blue Abstract pattern _ Graphic design pattern, Abstract pattern design, Pattern art.jpg',
  },
];

const TESTIMONIALS = [
  {
    quote: '"YCP gave me a language for what I already knew was wrong in my estate. Now I sit in ward meetings and they actually listen."',
    author: 'MERCY ACHIENG',
    county: 'KISUMU COUNTY',
  },
  {
    quote: '"I joined because of the certificate. I stayed because of the community. I lead now because YCP showed me I was already a leader."',
    author: 'BRIAN MUTUA',
    county: 'MACHAKOS COUNTY',
  },
  {
    quote: '"Constitutional education should be in every school. Until it is, YCP is filling the gap — and doing it better than most teachers."',
    author: 'DIANA WANJIKU',
    county: 'KIAMBU COUNTY',
  },
];

export default function StreetwearYCP() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', county: '' });

  return (
    <div style={{ background: '#F4F4F4', minHeight: '100vh', paddingBottom: '52px' }}>

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50" style={{ borderBottom: '4px solid #000', background: '#F4F4F4' }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
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
          <button onClick={() => navigate('/street/ycp')}
            style={{ fontFamily: MONO, fontSize: '10px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '8px 20px', border: `3px solid #000`, background: RED, color: '#fff', cursor: 'pointer' }}>
            JOIN YCP
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '100vh', background: '#F4F4F4', overflow: 'hidden', display: 'flex', alignItems: 'stretch' }}>
        {/* Watermark */}
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none', zIndex: 0, overflow: 'hidden',
        }}>
          <span style={{ fontFamily: ANTON, fontSize: '20rem', color: '#e8e8e8', letterSpacing: '-8px', lineHeight: 1, userSelect: 'none', whiteSpace: 'nowrap' }}>
            YCP
          </span>
        </div>

        <div style={{ position: 'relative', zIndex: 1, width: '100%', display: 'grid', gridTemplateColumns: '5fr 7fr' }}>
          {/* Left: hero image */}
          <div style={{ position: 'relative', borderRight: `4px solid ${RED}`, overflow: 'hidden', minHeight: '100vh' }}>
            <img
              src="/images/a..2.creative images for sections/hero section teens.png"
              alt="Young citizens"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
            {/* Stamp overlay */}
            <div style={{
              position: 'absolute', top: '24px', left: '24px',
              background: '#000', color: RED, fontFamily: MONO, fontSize: '10px', fontWeight: 900,
              letterSpacing: '0.25em', padding: '8px 14px', border: `2px solid ${RED}`,
              textTransform: 'uppercase',
            }}>
              YCP · 2026
            </div>
          </div>

          {/* Right: text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ padding: '80px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ fontFamily: MONO, fontSize: '10px', color: RED, letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '24px', fontWeight: 900 }}>
              TEENDOM · YOUNG CITIZENS PROGRAM
            </p>
            <h1 style={{ fontFamily: ANTON, fontSize: 'clamp(3.5rem, 8vw, 8rem)', color: '#000', lineHeight: 0.85, letterSpacing: '-2px', margin: 0 }}>
              YOUNG<br />CITIZENS<br />PROGRAM.
            </h1>
            <div style={{ width: '80px', height: '6px', background: RED, margin: '32px 0 28px' }} />
            <p style={{ fontFamily: MONO, fontSize: '13px', color: '#444', letterSpacing: '0.05em', lineHeight: 1.9, maxWidth: '440px', marginBottom: '40px' }}>
              Constitutional education for Kenyan teens.<br />Three tracks. Real knowledge. Real power.
            </p>
            <div style={{ display: 'flex', gap: '0' }}>
              <button
                style={{ fontFamily: MONO, fontSize: '11px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '16px 32px', border: `4px solid #000`, background: RED, color: '#fff', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#b91c1c'}
                onMouseLeave={e => e.currentTarget.style.background = RED}>
                JOIN NOW
              </button>
              <button
                style={{ fontFamily: MONO, fontSize: '11px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '16px 32px', border: '4px solid #000', borderLeft: 'none', background: 'transparent', color: '#000', cursor: 'pointer', transition: 'background 0.2s, color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#000'; }}>
                READ MORE
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IS YCP ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ background: '#F4F4F4', borderTop: '4px solid #000', borderBottom: '4px solid #000', padding: '60px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p style={{ fontFamily: MONO, fontSize: '10px', color: RED, letterSpacing: '0.35em', textTransform: 'uppercase', fontWeight: 900, marginBottom: '40px' }}>
            PROGRAM OVERVIEW
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }}>
            {TRACKS.map(({ num, name, desc }, i) => (
              <div key={num}
                style={{
                  border: '4px solid #000',
                  marginLeft: i > 0 ? '-4px' : 0,
                  position: 'relative',
                  background: '#F4F4F4',
                }}>
                {/* Red number bar */}
                <div style={{ background: RED, padding: '12px 20px', borderBottom: '4px solid #000' }}>
                  <span style={{ fontFamily: ANTON, fontSize: '2rem', color: '#fff', letterSpacing: '-1px' }}>{num}</span>
                </div>
                <div style={{ padding: '28px 24px' }}>
                  <h3 style={{ fontFamily: ANTON, fontSize: '1.6rem', color: '#000', lineHeight: 1.05, letterSpacing: '-0.5px', margin: '0 0 16px' }}>
                    {name}
                  </h3>
                  <p style={{ fontFamily: MONO, fontSize: '11px', color: '#555', lineHeight: 1.85, letterSpacing: '0.04em', margin: 0 }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── THREE TRACKS (cards with art) ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ background: '#000', padding: '60px 0', borderBottom: '4px solid #000' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 style={{ fontFamily: ANTON, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', letterSpacing: '-1px', lineHeight: 0.9, margin: '0 0 40px' }}>
            THE THREE<br />TRACKS.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }}>
            {TRACKS.map(({ num, name, desc, art }, i) => (
              <div key={num}
                style={{
                  border: '4px solid #fff',
                  marginLeft: i > 0 ? '-4px' : 0,
                  background: '#111',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                {/* Art panel */}
                <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                  <img src={art} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  {/* Track number stamp */}
                  <div style={{
                    position: 'absolute', top: '12px', left: '12px',
                    background: RED, color: '#fff', fontFamily: MONO, fontSize: '10px', fontWeight: 900,
                    letterSpacing: '0.2em', padding: '5px 10px', border: '2px solid #fff',
                  }}>
                    TRACK {num}
                  </div>
                  <div style={{ position: 'absolute', inset: 0, borderBottom: '4px solid #fff' }} />
                </div>
                {/* Content */}
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontFamily: ANTON, fontSize: '1.5rem', color: '#fff', lineHeight: 1.05, letterSpacing: '-0.5px', margin: '0 0 12px' }}>
                    {name}
                  </h3>
                  <p style={{ fontFamily: MONO, fontSize: '10px', color: '#888', lineHeight: 1.8, letterSpacing: '0.04em', margin: '0 0 20px' }}>
                    {desc.slice(0, 120)}...
                  </p>
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

      {/* ── TESTIMONIALS ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ background: '#000', borderTop: '4px solid #000', borderBottom: `4px solid ${RED}`, padding: '60px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p style={{ fontFamily: MONO, fontSize: '10px', color: RED, letterSpacing: '0.35em', textTransform: 'uppercase', fontWeight: 900, marginBottom: '40px' }}>
            FROM THE COMMUNITY
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }}>
            {TESTIMONIALS.map(({ quote, author, county }, i) => (
              <div key={author}
                style={{
                  borderLeft: `4px solid ${RED}`,
                  borderTop: '4px solid #333',
                  borderRight: '4px solid #333',
                  borderBottom: '4px solid #333',
                  marginLeft: i > 0 ? '-4px' : 0,
                  padding: '32px 28px',
                  background: '#0a0a0a',
                }}>
                <p style={{ fontFamily: MONO, fontSize: '11px', color: '#ccc', lineHeight: 2, letterSpacing: '0.04em', fontStyle: 'italic', margin: '0 0 24px' }}>
                  {quote}
                </p>
                <div>
                  <p style={{ fontFamily: ANTON, fontSize: '1.2rem', color: '#fff', margin: '0 0 6px', letterSpacing: '-0.5px' }}>
                    {author}
                  </p>
                  <span style={{ fontFamily: MONO, fontSize: '9px', fontWeight: 900, letterSpacing: '0.2em', background: RED, color: '#fff', padding: '3px 8px', display: 'inline-block' }}>
                    {county}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── APPLY ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ background: '#F4F4F4', borderBottom: '4px solid #000', padding: '80px 0' }}>
        <div className="max-w-xl mx-auto px-6 text-center">
          <p style={{ fontFamily: MONO, fontSize: '10px', color: RED, letterSpacing: '0.35em', textTransform: 'uppercase', fontWeight: 900, marginBottom: '20px' }}>
            APPLICATIONS OPEN
          </p>
          <h2 style={{ fontFamily: ANTON, fontSize: 'clamp(3rem, 7vw, 5.5rem)', color: '#000', lineHeight: 0.85, letterSpacing: '-2px', margin: '0 0 24px' }}>
            JOIN THE<br />MOVEMENT.
          </h2>
          <div style={{ width: '60px', height: '5px', background: RED, margin: '0 auto 24px' }} />
          <p style={{ fontFamily: MONO, fontSize: '11px', color: '#555', letterSpacing: '0.1em', lineHeight: 1.9, marginBottom: '40px' }}>
            APPLICATIONS ARE FREE. OPEN TO ALL KENYAN TEENS<br />AGED 13–19. COUNTY-BASED COHORTS.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { placeholder: 'YOUR FULL NAME', key: 'name' },
              { placeholder: 'EMAIL ADDRESS', key: 'email' },
              { placeholder: 'YOUR COUNTY', key: 'county' },
            ].map(({ placeholder, key }, i) => (
              <input
                key={key}
                type="text"
                placeholder={placeholder}
                value={formData[key]}
                onChange={e => setFormData(prev => ({ ...prev, [key]: e.target.value }))}
                style={{
                  padding: '16px 20px',
                  fontFamily: MONO,
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  background: '#fff',
                  border: '4px solid #000',
                  borderBottom: i < 2 ? 'none' : '4px solid #000',
                  outline: 'none',
                  color: '#000',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              />
            ))}
            <button
              style={{
                width: '100%',
                padding: '18px',
                fontFamily: MONO,
                fontSize: '12px',
                fontWeight: 900,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                background: RED,
                color: '#fff',
                border: '4px solid #000',
                borderTop: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
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
          <p style={{ fontFamily: MONO, fontSize: '10px', color: '#555', letterSpacing: '0.15em' }}>© 2024 TEENDOM AFRICA</p>
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
