import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { mockArticles, categories } from '../data/articles';
import { StreetwearArtCard } from '../components/ArtCard';

const ANTON = 'Anton, sans-serif';
const MONO  = '"Space Mono", monospace';
const RED   = '#DC2626';

export default function StreetwearArticles() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filtered = activeCategory === 'ALL'
    ? mockArticles
    : mockArticles.filter(a => a.category === activeCategory);

  const allCats = ['ALL', ...categories.filter(c => c.name !== 'ALL').map(c => c.name)];

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
          <button onClick={() => navigate('/street/ycp')}
            style={{ fontFamily: MONO, fontSize: '10px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '8px 16px', border: `3px solid #000`, background: RED, color: '#fff', cursor: 'pointer' }}>
            JOIN YCP
          </button>
        </div>
      </nav>

      {/* ── HEADER ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ background: '#000', padding: '48px 0' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
          <div>
            <h1 style={{ fontFamily: ANTON, fontSize: 'clamp(3.5rem,12vw,9rem)', color: '#fff', lineHeight: 0.9, letterSpacing: '-2px', margin: 0 }}>
              ALL<br />STORIES.
            </h1>
            <div style={{ width: '80px', height: '6px', background: RED, margin: '20px 0 16px' }} />
            <p style={{ fontFamily: MONO, fontSize: '12px', color: '#888', letterSpacing: '0.1em', maxWidth: '360px', lineHeight: 1.8 }}>
              EVERY VOICE. EVERY COUNTY.<br />EVERY STORY THAT MATTERS TO KENYAN TEENS.
            </p>
          </div>
          {/* Stats — horizontal scroll on mobile */}
          <div className="flex flex-row flex-shrink-0" style={{ gap: '0', overflowX: 'auto' }}>
            {[
              { num: mockArticles.length, label: 'TOTAL ARTICLES' },
              { num: mockArticles.filter(a => a.featured).length, label: 'FEATURED' },
              { num: categories.filter(c => c.name !== 'ALL').length, label: 'CATEGORIES' },
            ].map(({ num, label }, i) => (
              <div key={label} style={{ padding: '16px 24px', borderLeft: i > 0 ? `4px solid #333` : 'none', textAlign: 'center', flexShrink: 0 }}>
                <p style={{ fontFamily: ANTON, fontSize: 'clamp(2.5rem,6vw,4rem)', color: RED, lineHeight: 1, margin: 0 }}>{num}</p>
                <p style={{ fontFamily: MONO, fontSize: '9px', color: '#888', letterSpacing: '0.2em', marginTop: '6px' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── CATEGORY FILTER ── scrollable on mobile */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ background: '#F4F4F4', borderBottom: '4px solid #000', padding: '16px 0' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div style={{ display: 'flex', gap: '0', overflowX: 'auto', paddingBottom: '2px', WebkitOverflowScrolling: 'touch' }}
            className="hide-scrollbar">
            {allCats.map((cat, i) => {
              const active = activeCategory === cat;
              return (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  style={{
                    fontFamily: MONO, fontSize: '10px', fontWeight: 900, letterSpacing: '0.2em',
                    textTransform: 'uppercase', padding: '10px 16px', whiteSpace: 'nowrap', flexShrink: 0,
                    borderTop: '2px solid #000', borderBottom: '2px solid #000',
                    borderLeft: '2px solid #000',
                    borderRight: i === allCats.length - 1 ? '2px solid #000' : 'none',
                    background: active ? RED : 'transparent',
                    color: active ? '#fff' : '#555',
                    cursor: 'pointer', marginLeft: i > 0 ? '-2px' : 0,
                    transition: 'background 0.15s, color 0.15s',
                  }}>
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ── ARTICLES GRID ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 md:px-6" style={{ paddingTop: '32px' }}>
        <div className="flex flex-wrap justify-center">
          {filtered.map((article, i) => (
            <div key={article.id} className="w-full sm:w-1/2 lg:w-1/3" style={{ flexShrink: 0 }}>
              <StreetwearArtCard article={article} index={i} centered onClick={() => navigate(`/street/articles/${article.id}`)} />
            </div>
          ))}
        </div>
        <motion.button
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ width: '100%', padding: '18px', fontFamily: MONO, fontSize: '12px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', background: 'transparent', border: '4px solid #000', borderTop: 'none', color: '#000', cursor: 'pointer', transition: 'background 0.2s, color 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.background = RED; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#000'; }}>
          VIEW MORE
        </motion.button>
      </motion.section>

      {/* ── LATEST ISSUE ── mobile: stacked, desktop: 2-col */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 md:px-6" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ border: '4px solid #000' }}>
          {/* Left: black panel */}
          <div className="p-6 md:p-12 flex flex-col justify-center" style={{ background: '#000', borderBottom: '4px solid #000' }}>
            <p style={{ fontFamily: MONO, fontSize: '10px', color: RED, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '14px' }}>LATEST DROP</p>
            <h2 style={{ fontFamily: ANTON, fontSize: 'clamp(3rem,8vw,7rem)', color: '#fff', lineHeight: 0.85, letterSpacing: '-1px', margin: 0 }}>
              ISSUE<br />06<br />OUT NOW
            </h2>
            <div style={{ width: '60px', height: '5px', background: RED, margin: '24px 0 20px' }} />
            <p style={{ fontFamily: MONO, fontSize: '11px', color: '#888', letterSpacing: '0.1em', lineHeight: 1.8, maxWidth: '280px' }}>
              SIX STORIES. SIX TRUTHS. ONE MAGAZINE BUILT BY TEENS, FOR TEENS.
            </p>
            <button
              style={{ marginTop: '28px', alignSelf: 'flex-start', fontFamily: MONO, fontSize: '10px', fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase', padding: '12px 24px', border: `3px solid ${RED}`, background: RED, color: '#fff', cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = RED; }}
              onMouseLeave={e => { e.currentTarget.style.background = RED; e.currentTarget.style.color = '#fff'; }}>
              READ ISSUE 06
            </button>
          </div>
          {/* Right: 2x2 article teasers — grid on both mobile and desktop */}
          <div className="grid grid-cols-2">
            {mockArticles.slice(0, 4).map((article, i) => (
              <div key={article.id}
                onClick={() => navigate(`/street/articles/${article.id}`)}
                className="cursor-pointer"
                style={{
                  padding: '16px',
                  borderRight: i % 2 === 0 ? '4px solid #000' : 'none',
                  borderBottom: i < 2 ? '4px solid #000' : 'none',
                  background: '#F4F4F4',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  minHeight: '130px',
                }}>
                <div>
                  <span style={{ fontFamily: MONO, fontSize: '8px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', background: RED, color: '#fff', padding: '3px 6px', display: 'inline-block', marginBottom: '8px' }}>
                    {article.category}
                  </span>
                  <h3 style={{ fontFamily: ANTON, fontSize: '0.95rem', color: '#000', lineHeight: 1.1, margin: 0, letterSpacing: '-0.5px' }}>
                    {article.title}
                  </h3>
                </div>
                <p style={{ fontFamily: MONO, fontSize: '8px', color: '#777', letterSpacing: '0.1em', margin: 0, marginTop: '8px' }}>
                  BY {article.author.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── NEWSLETTER ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        style={{ background: '#000', borderTop: `4px solid ${RED}`, borderBottom: `4px solid ${RED}`, padding: '48px 0' }}>
        <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
          <h2 style={{ fontFamily: ANTON, fontSize: 'clamp(2rem,6vw,4.5rem)', color: '#fff', lineHeight: 0.9, letterSpacing: '-1px', margin: '0 0 16px' }}>
            STAY IN<br />THE LOOP.
          </h2>
          <p style={{ fontFamily: MONO, fontSize: '11px', color: '#888', letterSpacing: '0.15em', lineHeight: 1.8, marginBottom: '28px' }}>
            WEEKLY DROPS. NO SPAM. JUST THE STORIES THAT MATTER.
          </p>
          <div style={{ display: 'flex', border: '4px solid #fff', overflow: 'hidden' }}>
            <input type="email" placeholder="YOUR EMAIL ADDRESS"
              style={{ flex: 1, padding: '14px 16px', fontFamily: MONO, fontSize: '11px', letterSpacing: '0.1em', background: '#111', color: '#fff', border: 'none', outline: 'none', minWidth: 0 }} />
            <button
              style={{ padding: '14px 20px', fontFamily: MONO, fontSize: '11px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', background: RED, color: '#fff', border: 'none', cursor: 'pointer', flexShrink: 0 }}
              onMouseEnter={e => e.currentTarget.style.background = '#b91c1c'}
              onMouseLeave={e => e.currentTarget.style.background = RED}>
              JOIN
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
