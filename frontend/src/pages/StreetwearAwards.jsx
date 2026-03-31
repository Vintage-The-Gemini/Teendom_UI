import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ANTON = 'Anton, sans-serif';
const MONO  = '"Space Mono", monospace';
const RED   = '#DC2626';

const AWARD_CATEGORIES = [
  {
    tag: 'CHANGEMAKER',
    title: 'YOUNG CHANGEMAKER',
    desc: 'For teens driving visible, measurable change in their communities through action, advocacy, or innovation.',
    art: '/images/a.1.abstract art background/download (18).jpg',
  },
  {
    tag: 'ACADEMICS',
    title: 'ACADEMIC EXCELLENCE',
    desc: 'Recognising outstanding academic performance paired with leadership and community contribution.',
    art: '/images/a.1.abstract art background/download (19).jpg',
  },
  {
    tag: 'ARTS',
    title: 'ARTS & CULTURE',
    desc: 'Celebrating teen artists, musicians, writers, and creatives redefining African cultural expression.',
    art: '/images/a.1.abstract art background/download (21).jpg',
  },
  {
    tag: 'ENVIRONMENT',
    title: 'ENVIRONMENTAL CHAMPION',
    desc: 'Honouring teens leading climate action, conservation, and environmental justice across Kenya.',
    art: '/images/a.1.abstract art background/Abstract Art.jpg',
  },
  {
    tag: 'ENTREPRENEUR',
    title: 'ENTREPRENEURSHIP',
    desc: 'For teen founders and hustlers building real businesses that solve real problems in their counties.',
    art: '/images/a.1.abstract art background/How to Make Pop Art_ A Simple Guide for Beginners 2025.jpg',
  },
  {
    tag: 'COMMUNITY',
    title: 'COMMUNITY SERVICE',
    desc: 'Recognising sustained, impactful volunteerism and service that lifts entire communities.',
    art: '/images/a.1.abstract art background/Geometric Masterpiece_ Red, Cream, and Black Circles Abstract Art in the Style of Laszlo Moholy-nagy - Etsy.jpg',
  },
];

const NOMINEES = [
  {
    photo: '/images/a..2.creative images for sections/hero section teens.png',
    name: 'FAITH WAMBUI',
    county: 'NAIROBI COUNTY',
    category: 'YOUNG CHANGEMAKER',
    quote: '"I started with 12 students and a borrowed whiteboard. Today we have 400 kids in after-school coding clubs."',
  },
  {
    photo: '/images/a..2.creative images for sections/Minimalistic boy.png',
    name: 'DANIEL OMONDI',
    county: 'KISUMU COUNTY',
    category: 'ENTREPRENEURSHIP',
    quote: '"My business started as a school project nobody believed in. Revenue last quarter hit KES 240K."',
  },
  {
    photo: '/images/a..2.creative images for sections/dark fasion girl.png',
    name: 'AMINA HASSAN',
    county: 'MOMBASA COUNTY',
    category: 'ARTS & CULTURE',
    quote: '"Fashion is my protest language. Every piece I design says something the system does not want to hear."',
  },
];

const TICKER_ITEMS = [
  'FAITH W. · NAIROBI · 2025 WINNER',
  'BRIAN M. · MACHAKOS · 2025 WINNER',
  'AMINA H. · MOMBASA · 2024 WINNER',
  'DIANA W. · KIAMBU · 2024 WINNER',
  'KEVIN O. · KISUMU · 2023 WINNER',
  'GRACE A. · NAKURU · 2023 WINNER',
  'SAMUEL K. · ELDORET · 2022 WINNER',
  'MERCY C. · NYERI · 2022 WINNER',
];

export default function StreetwearAwards() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', county: '', category: '', reason: '' });

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
            {[['HOME', '/home/street'], ['ARTICLES', '/street/articles'], ['YOUNG CITIZENS', '/street/ycp'], ['AWARDS', '/street/awards']].map(([label, path], i, arr) => (
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
      <section style={{ background: '#000', minHeight: '90vh', position: 'relative', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch' }}>
        {/* Red top stripe */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '8px', background: RED, zIndex: 10 }} />

        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ padding: '80px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '96px' }}>
          <p style={{ fontFamily: MONO, fontSize: '10px', color: RED, letterSpacing: '0.35em', textTransform: 'uppercase', fontWeight: 900, marginBottom: '28px' }}>
            TEENDOM · ANNUAL RECOGNITION
          </p>
          <h1 style={{ fontFamily: ANTON, fontSize: 'clamp(4rem, 9vw, 10rem)', color: '#fff', lineHeight: 0.82, letterSpacing: '-3px', margin: 0 }}>
            TEENDOM<br />AWARDS<br />2026
          </h1>
          <div style={{ width: '80px', height: '6px', background: RED, margin: '36px 0 28px' }} />
          <p style={{ fontFamily: MONO, fontSize: '12px', color: '#888', letterSpacing: '0.1em', lineHeight: 1.9, maxWidth: '420px', marginBottom: '44px' }}>
            CELEBRATING EXCEPTIONAL TEEN CHANGEMAKERS<br />ACROSS ALL 47 COUNTIES.
          </p>
          <div style={{ display: 'flex', gap: '0' }}>
            <button
              style={{ fontFamily: MONO, fontSize: '11px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '16px 32px', border: `4px solid ${RED}`, background: RED, color: '#fff', cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#b91c1c'}
              onMouseLeave={e => e.currentTarget.style.background = RED}>
              NOMINATE NOW
            </button>
            <button
              style={{ fontFamily: MONO, fontSize: '11px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '16px 32px', border: '4px solid #fff', borderLeft: 'none', background: 'transparent', color: '#fff', cursor: 'pointer', transition: 'background 0.2s, color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#000'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff'; }}>
              PAST WINNERS
            </button>
          </div>
        </motion.div>

        {/* Right: hero image */}
        <div style={{ position: 'relative', borderLeft: `4px solid ${RED}`, overflow: 'hidden', minHeight: '90vh' }}>
          <img
            src="/images/a..2.creative images for sections/dark fasion girl.png"
            alt="Awards 2026"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 60%)' }} />
        </div>
      </section>

      {/* ── AWARD CATEGORIES ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ background: '#F4F4F4', borderTop: '4px solid #000', borderBottom: '4px solid #000', padding: '60px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
            <h2 style={{ fontFamily: ANTON, fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#000', letterSpacing: '-1px', lineHeight: 0.9, margin: 0 }}>
              AWARD<br />CATEGORIES.
            </h2>
            <p style={{ fontFamily: MONO, fontSize: '10px', color: '#888', letterSpacing: '0.2em', textAlign: 'right', lineHeight: 1.8, maxWidth: '220px' }}>
              SIX CATEGORIES.<br />47 COUNTIES.<br />ONE NIGHT.
            </p>
          </div>
          <div className="grid md:grid-cols-3" style={{ gap: '0', border: '4px solid #000' }}>
            {AWARD_CATEGORIES.map(({ tag, title, desc, art }, i) => (
              <div key={tag}
                style={{
                  borderRight: (i + 1) % 3 !== 0 ? '4px solid #000' : 'none',
                  borderBottom: i < 3 ? '4px solid #000' : 'none',
                  background: '#F4F4F4',
                  overflow: 'hidden',
                }}>
                {/* Art top half — full bleed, no dimming */}
                <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                  <img src={art} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                {/* Black bottom half */}
                <div style={{ background: '#000', padding: '20px 22px', borderTop: '4px solid #000' }}>
                  <span style={{ fontFamily: MONO, fontSize: '9px', fontWeight: 900, letterSpacing: '0.25em', background: RED, color: '#fff', padding: '3px 8px', display: 'inline-block', marginBottom: '10px' }}>
                    {tag}
                  </span>
                  <h3 style={{ fontFamily: ANTON, fontSize: '1.25rem', color: '#fff', lineHeight: 1.05, letterSpacing: '-0.5px', margin: '0 0 10px' }}>
                    {title}
                  </h3>
                  <p style={{ fontFamily: MONO, fontSize: '10px', color: '#777', lineHeight: 1.8, letterSpacing: '0.03em', margin: 0 }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── NOMINEES ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ background: RED, borderBottom: '4px solid #000', padding: '60px 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: ANTON, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#fff', lineHeight: 0.9, letterSpacing: '-1px', margin: 0 }}>
              CLASS OF 2026.
            </h2>
            <p style={{ fontFamily: MONO, fontSize: '10px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.25em', textTransform: 'uppercase', marginTop: '12px' }}>
              SHORTLISTED NOMINEES
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }}>
            {NOMINEES.map(({ photo, name, county, category, quote }, i) => (
              <div key={name}
                style={{
                  background: '#fff',
                  border: '4px solid #000',
                  marginLeft: i > 0 ? '-4px' : 0,
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                {/* Red sidebar accent */}
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '6px', background: RED, zIndex: 1 }} />
                {/* Photo */}
                <div style={{ height: '240px', overflow: 'hidden', borderBottom: '4px solid #000' }}>
                  <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
                </div>
                {/* Content */}
                <div style={{ padding: '20px 20px 20px 26px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontFamily: ANTON, fontSize: '1.5rem', color: '#000', letterSpacing: '-0.5px', lineHeight: 1.05, margin: '0 0 6px' }}>
                      {name}
                    </h3>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
                      <span style={{ fontFamily: MONO, fontSize: '9px', fontWeight: 900, color: RED, letterSpacing: '0.15em' }}>
                        {county}
                      </span>
                      <span style={{ fontFamily: MONO, fontSize: '9px', color: '#999' }}>·</span>
                      <span style={{ fontFamily: MONO, fontSize: '9px', fontWeight: 900, color: RED, letterSpacing: '0.15em' }}>
                        {category}
                      </span>
                    </div>
                    <p style={{ fontFamily: MONO, fontSize: '10px', color: '#444', lineHeight: 1.85, letterSpacing: '0.04em', fontStyle: 'italic', margin: 0 }}>
                      {quote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── NOMINATE ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ background: '#000', borderBottom: '4px solid #000', padding: '80px 0' }}>
        <div className="max-w-xl mx-auto px-6 text-center">
          <p style={{ fontFamily: MONO, fontSize: '10px', color: RED, letterSpacing: '0.35em', textTransform: 'uppercase', fontWeight: 900, marginBottom: '20px' }}>
            NOMINATIONS OPEN
          </p>
          <h2 style={{ fontFamily: ANTON, fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', color: '#fff', lineHeight: 0.85, letterSpacing: '-2px', margin: '0 0 24px' }}>
            KNOW A<br />CHANGEMAKER?
          </h2>
          <div style={{ width: '60px', height: '5px', background: RED, margin: '0 auto 24px' }} />
          <p style={{ fontFamily: MONO, fontSize: '11px', color: '#888', letterSpacing: '0.1em', lineHeight: 1.9, marginBottom: '40px' }}>
            NOMINATE A TEEN MAKING A REAL DIFFERENCE.<br />ALL 47 COUNTIES. ALL CATEGORIES.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { placeholder: 'NOMINEE FULL NAME', key: 'name', type: 'text' },
              { placeholder: 'THEIR COUNTY', key: 'county', type: 'text' },
              { placeholder: 'AWARD CATEGORY', key: 'category', type: 'text' },
              { placeholder: 'WHY DO THEY DESERVE THIS AWARD?', key: 'reason', type: 'text' },
            ].map(({ placeholder, key, type }, i) => (
              <input
                key={key}
                type={type}
                placeholder={placeholder}
                value={formData[key]}
                onChange={e => setFormData(prev => ({ ...prev, [key]: e.target.value }))}
                style={{
                  padding: '16px 20px',
                  fontFamily: MONO,
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  background: '#111',
                  border: '4px solid #333',
                  borderBottom: i < 3 ? 'none' : '4px solid #333',
                  outline: 'none',
                  color: '#fff',
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
                border: '4px solid #333',
                borderTop: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#b91c1c'}
              onMouseLeave={e => e.currentTarget.style.background = RED}>
              SUBMIT NOMINATION
            </button>
          </div>
        </div>
      </motion.section>

      {/* ── PAST WINNERS TICKER ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ background: RED, borderTop: '4px solid #000', borderBottom: '4px solid #000', padding: '0', overflow: 'hidden' }}>
        <div style={{ padding: '20px 0', whiteSpace: 'nowrap', overflowX: 'auto', scrollbarWidth: 'none' }}>
          <div style={{ display: 'inline-flex', gap: '0', alignItems: 'center' }}>
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <React.Fragment key={i}>
                <span style={{ fontFamily: MONO, fontSize: '11px', fontWeight: 900, letterSpacing: '0.2em', color: '#fff', textTransform: 'uppercase', padding: '0 20px', flexShrink: 0 }}>
                  {item}
                </span>
                <span style={{ fontFamily: MONO, fontSize: '14px', color: 'rgba(255,255,255,0.5)', flexShrink: 0 }}>◆</span>
              </React.Fragment>
            ))}
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
