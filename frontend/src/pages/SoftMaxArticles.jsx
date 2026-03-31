// SOFT MAXIMALISM — Articles Page
// Editorial magazine browse. Cream canvas. Playfair + Space Grotesk. Abstract art card backgrounds.
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { mockArticles, categories } from '../data/articles';
import { SoftMaxArtCard, ART_BACKGROUNDS } from '../components/ArtCard';

const PF = '"Playfair Display", serif';
const SG = '"Space Grotesk", sans-serif';

export default function SoftMaxArticles() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredArticles =
    activeCategory === 'ALL'
      ? mockArticles
      : mockArticles.filter(a => a.category === activeCategory);

  return (
    <div style={{ background: '#FDFCF5', minHeight: '100vh', paddingBottom: '52px' }}>

      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <nav style={{ borderBottom: '2px solid #000', background: '#FDFCF5', position: 'sticky', top: 0, zIndex: 50 }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/home/soft')}
            style={{ fontFamily: PF, fontSize: '1.5rem', fontStyle: 'italic', color: '#000', letterSpacing: '-0.5px', fontWeight: 900, background: 'none', border: 'none', cursor: 'pointer' }}>
            Teendom
          </button>
          <div className="hidden md:flex items-center gap-8">
            {[['HOME', '/home/soft'], ['ARTICLES', '/soft/articles'], ['YOUNG CITIZENS', '/soft/ycp'], ['AWARDS', '/soft/awards']].map(([label, path]) => (
              <button key={label} onClick={() => navigate(path)}
                style={{ fontFamily: SG, fontSize: '10px', fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#555', borderBottom: '2px solid transparent', background: 'none', border: 'none', borderBottom: '2px solid transparent', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.borderBottomColor = '#DC2626'}
                onMouseLeave={e => e.currentTarget.style.borderBottomColor = 'transparent'}>
                {label}
              </button>
            ))}
          </div>
          <button
            onClick={() => navigate('/soft/ycp')}
            style={{ fontFamily: SG, fontSize: '10px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '8px 18px', border: '2px solid #000', background: '#DC2626', color: '#fff', cursor: 'pointer' }}>
            JOIN YCP
          </button>
        </div>
      </nav>

      {/* ── HEADER ──────────────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ background: '#FDFCF5', padding: '72px 24px 56px', textAlign: 'center' }}>
        <div className="max-w-4xl mx-auto">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
            <span style={{ fontFamily: SG, fontSize: '10px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#DC2626', border: '2px solid #DC2626', padding: '4px 12px' }}>
              THE ARCHIVE
            </span>
          </div>
          <h1 style={{ fontFamily: PF, fontSize: 'clamp(3rem, 8vw, 6rem)', fontStyle: 'italic', fontWeight: 900, color: '#000', lineHeight: 1.05, letterSpacing: '-1px', marginBottom: '0' }}>
            Every Story
          </h1>
          <h1 style={{ fontFamily: PF, fontSize: 'clamp(3rem, 8vw, 6rem)', fontStyle: 'italic', fontWeight: 900, color: '#000', lineHeight: 1.05, letterSpacing: '-1px', marginBottom: '24px' }}>
            Matters.
          </h1>
          {/* Red underline bar */}
          <div style={{ width: '80px', height: '4px', background: '#DC2626', margin: '0 auto 28px' }} />
          <p style={{ fontFamily: SG, fontSize: '1rem', color: '#555', marginBottom: '32px', maxWidth: '480px', margin: '0 auto 32px' }}>
            Browse all stories from Kenyan teens — unfiltered, unapologetic, unforgettable.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontFamily: SG, fontSize: '10px', fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#aaa', border: '2px solid #ddd', padding: '4px 14px' }}>
              6 STORIES · 6 ISSUES
            </span>
          </div>
        </div>
      </motion.section>

      {/* ── CATEGORY FILTER ─────────────────────────────────────────────── */}
      <section style={{ padding: '0 24px 48px', background: '#FDFCF5' }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {categories.map(cat => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                style={{
                  fontFamily: SG,
                  fontSize: '10px',
                  fontWeight: 900,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  padding: '8px 20px',
                  border: '2px solid',
                  borderColor: activeCategory === cat.name ? '#DC2626' : '#ddd',
                  background: activeCategory === cat.name ? '#DC2626' : 'transparent',
                  color: activeCategory === cat.name ? '#fff' : '#555',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL ARTICLES GRID ───────────────────────────────────────────── */}
      <section style={{ padding: '0 24px 80px', background: '#FDFCF5' }}>
        <div className="max-w-6xl mx-auto">
          {filteredArticles.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <p style={{ fontFamily: PF, fontSize: '1.5rem', fontStyle: 'italic', color: '#aaa' }}>No stories in this category yet.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px' }}>
              {filteredArticles.map((article, i) => (
                <div
                  key={article.id}
                  style={{ width: '100%', maxWidth: '340px', flexShrink: 0 }}>
                  <SoftMaxArtCard article={article} index={i} onClick={() => navigate(`/soft/articles/${article.id}`)} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── EDITORIAL PICK ──────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ background: '#1C1C1C', padding: '0' }}>
        <div className="max-w-6xl mx-auto" style={{ display: 'flex', flexWrap: 'wrap', minHeight: '420px' }}>
          {/* Left: abstract art panel */}
          <div style={{ flex: '1 1 340px', minHeight: '380px', position: 'relative', overflow: 'hidden' }}>
            <img
              src="/images/a.1.abstract art background/Abstract Art.jpg"
              alt="Abstract Art"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transform: 'rotate(-1.5deg) scale(1.08)',
                transformOrigin: 'center center',
              }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.18)' }} />
          </div>

          {/* Right: editorial text box */}
          <div style={{
            flex: '1 1 340px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px 48px',
          }}>
            <div style={{
              background: '#FDFCF5',
              border: '2px solid #fff',
              padding: '40px 36px',
              maxWidth: '400px',
              width: '100%',
            }}>
              <div style={{ marginBottom: '16px' }}>
                <span style={{
                  fontFamily: SG,
                  fontSize: '9px',
                  fontWeight: 900,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#DC2626',
                  border: '2px solid #DC2626',
                  padding: '3px 10px',
                }}>
                  EDITOR'S PICK
                </span>
              </div>
              <h2 style={{
                fontFamily: PF,
                fontSize: '2rem',
                fontStyle: 'italic',
                fontWeight: 900,
                color: '#000',
                lineHeight: 1.15,
                marginBottom: '20px',
                letterSpacing: '-0.5px',
              }}>
                "The future of Kenya<br />is in these pages."
              </h2>
              <p style={{ fontFamily: SG, fontSize: '13px', color: '#555', marginBottom: '28px', lineHeight: 1.6 }}>
                Six stories. Six teens. Six perspectives on what it means to grow up Kenyan today. Issue 01 is our most powerful yet.
              </p>
              <button
                style={{
                  fontFamily: SG,
                  fontSize: '10px',
                  fontWeight: 900,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  padding: '12px 28px',
                  border: '2px solid #DC2626',
                  background: '#DC2626',
                  color: '#fff',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#DC2626'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#DC2626'; e.currentTarget.style.color = '#fff'; }}>
                READ ISSUE 01
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── NEWSLETTER ──────────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        style={{ background: '#FDFCF5', padding: '96px 24px' }}>
        <div className="max-w-xl mx-auto" style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '12px' }}>
            <span style={{ fontFamily: SG, fontSize: '9px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#aaa', border: '2px solid #ddd', padding: '3px 10px' }}>
              NEWSLETTER
            </span>
          </div>
          <h2 style={{ fontFamily: PF, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontStyle: 'italic', fontWeight: 900, color: '#000', lineHeight: 1.1, letterSpacing: '-0.5px', marginBottom: '16px' }}>
            Stay in the Loop.
          </h2>
          <div style={{ width: '48px', height: '3px', background: '#DC2626', margin: '0 auto 24px' }} />
          <p style={{ fontFamily: SG, fontSize: '14px', color: '#555', marginBottom: '36px', lineHeight: 1.7 }}>
            New stories every fortnight. Real voices, real Kenya. Drop your email and never miss an issue.
          </p>
          <div style={{ display: 'flex', border: '2px solid #000', overflow: 'hidden', maxWidth: '460px', margin: '0 auto' }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1,
                padding: '14px 18px',
                fontFamily: SG,
                fontSize: '13px',
                color: '#000',
                background: '#FDFCF5',
                border: 'none',
                outline: 'none',
              }}
            />
            <button
              style={{
                fontFamily: SG,
                fontSize: '10px',
                fontWeight: 900,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '14px 24px',
                background: '#DC2626',
                color: '#fff',
                border: 'none',
                borderLeft: '2px solid #000',
                cursor: 'pointer',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#b91c1c'}
              onMouseLeave={e => e.currentTarget.style.background = '#DC2626'}>
              SUBSCRIBE
            </button>
          </div>
          <p style={{ fontFamily: SG, fontSize: '10px', color: '#bbb', marginTop: '14px', letterSpacing: '0.05em' }}>
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </motion.section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: '2px solid #000', background: '#FDFCF5', padding: '3rem 1.5rem' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{ fontFamily: PF, fontSize: '1.2rem', fontStyle: 'italic', color: '#000' }}>Teendom Africa</p>
          <p style={{ fontFamily: SG, fontSize: '11px', color: '#aaa', letterSpacing: '0.1em' }}>© 2024 Teendom Africa · Empowering Young Kenyans</p>
          <div style={{ display: 'flex', gap: '16px' }}>
            {['Instagram', 'Twitter', 'YouTube'].map(s => (
              <button key={s}
                style={{ fontFamily: SG, fontSize: '10px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', background: 'none', border: 'none', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.color = '#DC2626'}
                onMouseLeave={e => e.currentTarget.style.color = '#aaa'}>
                {s}
              </button>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}
