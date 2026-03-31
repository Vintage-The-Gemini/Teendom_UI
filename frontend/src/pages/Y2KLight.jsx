// HOME 1 — Y2K CHROME & GLASS — EDITORIAL REDESIGN
// Inspired by Dazed, i-D, Buzzy magazine. Chrome text. Cutout figures.
// Dot grid texture. Chrome border cards. Iridescent accents. Silver + red.
import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, ArrowUpRight } from 'lucide-react';
import { mockArticles, categories } from '../data/articles';
import { Y2KArtCard } from '../components/ArtCard';

const SG   = '"Space Grotesk", sans-serif';
const PF   = '"Playfair Display", serif';
const MONO = '"Space Mono", monospace';
const RED  = '#DC2626';
const SILVER = '#C0C0C0';

const ART_PSYCHEDELIC = "/images/a.1.abstract art background/download (21).jpg";
const ART_SPLASH      = "/images/a.1.abstract art background/download (18).jpg";

const TICKER_ITEMS = [
  "YOUNG CITIZENS PROGRAM NOW OPEN",
  "ISSUE 01 · NAIROBI · KENYA",
  "CONSTITUTIONAL EDUCATION FOR KENYAN TEENS",
  "2,500+ YOUNG CITIZENS EMPOWERED",
  "NAIROBI · MOMBASA · KISUMU · NAKURU",
  "THE FUTURE IS OURS",
];

// Chrome border using CSS gradient trick
const chromeBorder = {
  background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #aaa 5%, #fff 30%, #ccc 50%, #fff 70%, #aaa 95%) border-box',
  border: '1.5px solid transparent',
};

export default function Y2KLight() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const featured = mockArticles.filter(a => a.featured);
  const grid     = mockArticles.filter(a => !a.featured);

  return (
    <div style={{ background: '#fff', fontFamily: SG, minHeight: '100vh', overflowX: 'hidden', paddingBottom: '52px' }}>

      {/* ── IRIDESCENT ANNOUNCEMENT STRIPE ── */}
      <div style={{
        height: '3px',
        background: 'linear-gradient(90deg, #e8e8e8 0%, #b2dfdb 20%, #e1bee7 40%, #f8bbd0 60%, #b2dfdb 80%, #e8e8e8 100%)',
        backgroundSize: '300% 100%',
        animation: 'holo-shift 5s ease-in-out infinite',
      }} />

      {/* ── ANNOUNCEMENT BAR ── */}
      <div style={{ background: RED, overflow: 'hidden', padding: '5px 0' }}>
        <div className="flex animate-ticker whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} style={{ fontFamily: MONO, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', color: '#fff', textTransform: 'uppercase', margin: '0 32px' }}>
              * {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── NAVBAR ── glassmorphism with chrome inner highlight */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40,
        background: 'rgba(255,255,255,0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${SILVER}`,
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 12px rgba(0,0,0,0.06)',
      }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* Chrome animated logo */}
          <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <motion.span
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                fontFamily: PF,
                fontSize: '1.65rem',
                fontWeight: 900,
                letterSpacing: '-1.5px',
                background: 'linear-gradient(90deg, #666 0%, #fff 22%, #bbb 45%, #fff 68%, #666 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'block',
              }}>
              TEENDOM
            </motion.span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {['HOME', 'ARTICLES', 'YOUNG CITIZENS', 'ABOUT'].map(link => (
              <button key={link} style={{ fontFamily: SG, fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#777', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#000'}
                onMouseLeave={e => e.currentTarget.style.color = '#777'}>
                {link}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/')}
              className="hidden md:flex items-center gap-2"
              style={{ fontFamily: SG, fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '7px 18px', border: `1px solid ${SILVER}`, background: 'transparent', cursor: 'pointer', transition: 'all 0.2s', color: '#000' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#000'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#000'; e.currentTarget.style.borderColor = SILVER; }}>
              JOIN YCP <ArrowUpRight size={11} />
            </button>
            <span style={{ fontFamily: MONO, fontSize: '10px', color: SILVER, letterSpacing: '0.1em' }}>ISSUE 01</span>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div style={{ background: 'rgba(255,255,255,0.96)', borderTop: `1px solid ${SILVER}`, padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {['HOME', 'ARTICLES', 'YOUNG CITIZENS', 'ABOUT'].map(link => (
              <button key={link} style={{ textAlign: 'left', fontFamily: SG, fontWeight: 700, fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#555', borderBottom: `1px solid #f0f0f0`, paddingBottom: '12px', background: 'none', border: 'none', borderBottom: `1px solid #f0f0f0`, cursor: 'pointer' }}>
                {link}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO — Magazine cover. Dot grid. Cutout figure. ── */}
      <section style={{ paddingTop: '80px', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>

        {/* Dot grid texture behind everything */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, #C0C0C0 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          opacity: 0.14,
        }} />

        {/* Psychedelic art — very faint wash, top-right corner */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: '45%', height: '100%', pointerEvents: 'none' }}>
          <img src={ART_PSYCHEDELIC} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.05, mixBlendMode: 'multiply' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-12 gap-0 items-center" style={{ minHeight: 'calc(100vh - 80px)' }}>

          {/* Left — editorial text */}
          <motion.div initial="hidden" animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="md:col-span-5 flex flex-col gap-6 relative z-10">

            <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
              <span style={{ fontFamily: MONO, fontSize: '10px', letterSpacing: '0.35em', color: SILVER, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '28px', height: '1px', background: SILVER, display: 'inline-block' }} />
                NAIROBI, KENYA · EST. 2024
              </span>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}>
              <h1 style={{ fontFamily: PF, fontWeight: 900, lineHeight: 0.88, letterSpacing: '-3px', fontSize: 'clamp(3.8rem,8vw,7rem)', color: '#0a0a0a', margin: 0 }}>
                EMPOWER<br />
                <em style={{ fontStyle: 'italic', color: RED }}>ING</em><br />
                TEEN<br />
                VOICES.
              </h1>
            </motion.div>

            <motion.p variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5 } } }}
              style={{ fontFamily: SG, fontSize: '14px', color: '#666', lineHeight: 1.7, maxWidth: '320px', margin: 0 }}>
              Constitutional education. Youth advocacy. Stories that matter. Built for Kenyan teens ready to lead.
            </motion.p>

            <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5 } } }}
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button onClick={() => navigate('/')}
                style={{ fontFamily: SG, fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '12px 28px', background: '#0a0a0a', color: '#fff', border: '1px solid #0a0a0a', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = RED}
                onMouseLeave={e => e.currentTarget.style.background = '#0a0a0a'}>
                Join Young Citizens
              </button>
              <button onClick={() => navigate('/')}
                style={{ fontFamily: SG, fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '12px 28px', background: 'transparent', color: '#0a0a0a', border: `1px solid ${SILVER}`, cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '8px' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#000'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = SILVER; }}>
                Read Stories <ArrowRight size={11} />
              </button>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5 } } }}
              style={{ display: 'flex', gap: '32px', paddingTop: '24px', borderTop: `1px solid #f0f0f0` }}>
              {[['2,500+', 'Young Citizens'], ['10+', 'Schools'], ['100+', 'Changemakers']].map(([num, label]) => (
                <div key={label}>
                  <p style={{ fontFamily: PF, fontWeight: 900, fontSize: '1.4rem', color: '#0a0a0a', margin: 0 }}>{num}</p>
                  <p style={{ fontFamily: SG, fontSize: '10px', color: SILVER, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '2px' }}>{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Center — Y2K girl cutout (no box, just drop-shadow) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="md:col-span-4 relative flex justify-center items-end"
            style={{ minHeight: '520px' }}>

            {/* Iridescent halo behind figure */}
            <div style={{
              position: 'absolute', inset: 0, borderRadius: '50%',
              background: 'radial-gradient(ellipse at 50% 60%, rgba(178,223,219,0.25) 0%, rgba(241,187,228,0.15) 45%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* Y2K girl — cutout treatment, no container box */}
            <img src="/images/a..2.creative images for sections/y2k girl.png"
              alt="Teendom"
              style={{
                width: '100%',
                maxWidth: '380px',
                objectFit: 'contain',
                objectPosition: 'bottom',
                filter: 'drop-shadow(0 12px 40px rgba(0,0,0,0.15))',
                position: 'relative', zIndex: 2,
              }} />

            {/* Floating issue badge */}
            <motion.div
              initial={{ opacity: 0, rotate: -6, y: 10 }}
              animate={{ opacity: 1, rotate: -6, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{
                position: 'absolute', bottom: '60px', right: '5%', zIndex: 3,
                background: '#fff', border: `1px solid ${SILVER}`,
                padding: '8px 14px',
                boxShadow: '4px 4px 0 rgba(192,192,192,0.3)',
              }}>
              <p style={{ fontFamily: MONO, fontSize: '9px', letterSpacing: '0.25em', color: SILVER, textTransform: 'uppercase', margin: 0 }}>TEEN EDITORIAL</p>
              <p style={{ fontFamily: PF, fontWeight: 900, fontSize: '1rem', color: '#0a0a0a', margin: 0, letterSpacing: '-0.5px' }}>ISSUE 01 · 2024</p>
            </motion.div>

            {/* Small overlapping portrait */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              style={{
                position: 'absolute', bottom: '30px', left: '0', zIndex: 3,
                width: '100px', height: '130px',
                overflow: 'hidden',
                ...chromeBorder,
                boxShadow: '6px 6px 0 rgba(192,192,192,0.25)',
              }}>
              <img src="/images/a..2.creative images for sections/y2k girl main.png"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </motion.div>
          </motion.div>

          {/* Right — abstract art panel + issue info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-3 hidden md:flex flex-col justify-between"
            style={{ height: '520px', borderLeft: `1px solid ${SILVER}`, paddingLeft: '28px' }}>

            <div>
              <p style={{ fontFamily: MONO, fontSize: '9px', letterSpacing: '0.3em', color: SILVER, textTransform: 'uppercase', marginBottom: '8px' }}>CURRENT ISSUE</p>
              <p style={{ fontFamily: PF, fontWeight: 900, fontSize: '3rem', lineHeight: 0.9, color: '#0a0a0a', letterSpacing: '-2px' }}>ISSUE<br />NO.<br />01</p>
            </div>

            {/* Abstract art thumbnail */}
            <div style={{ position: 'relative', height: '220px', overflow: 'hidden', ...chromeBorder }}>
              <img src={ART_PSYCHEDELIC} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px', background: 'rgba(255,255,255,0.92)', borderTop: `1px solid ${SILVER}` }}>
                <p style={{ fontFamily: MONO, fontSize: '9px', letterSpacing: '0.2em', color: SILVER, textTransform: 'uppercase', margin: 0 }}>ART · CULTURE · EXPRESSION</p>
              </div>
            </div>

            <div style={{ borderTop: `1px solid #f0f0f0`, paddingTop: '16px' }}>
              <p style={{ fontFamily: MONO, fontSize: '9px', letterSpacing: '0.2em', color: '#ccc', textTransform: 'uppercase', margin: 0 }}>NAIROBI · KENYA · 2024</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HORIZONTAL RULE with iridescent line ── */}
      <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent 0%, #B2DFDB 20%, #E1BEE7 40%, #F8BBD0 60%, #B2DFDB 80%, transparent 100%)' }} />

      {/* ── CATEGORY STRIP ── */}
      <section style={{ borderBottom: `1px solid #f0f0f0`, padding: '14px 24px' }}>
        <div className="max-w-7xl mx-auto flex gap-1.5 flex-wrap justify-center">
          {categories.map(cat => (
            <button key={cat.name} onClick={() => setActiveCategory(cat.name)}
              style={{
                fontFamily: SG, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
                padding: '6px 14px',
                border: '1px solid',
                borderColor: activeCategory === cat.name ? '#0a0a0a' : '#e8e8e8',
                background: activeCategory === cat.name ? '#0a0a0a' : '#fff',
                color: activeCategory === cat.name ? '#fff' : '#888',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { if (activeCategory !== cat.name) { e.currentTarget.style.borderColor = '#aaa'; e.currentTarget.style.color = '#000'; }}}
              onMouseLeave={e => { if (activeCategory !== cat.name) { e.currentTarget.style.borderColor = '#e8e8e8'; e.currentTarget.style.color = '#888'; }}}>
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* ── FEATURED — editorial spread ── */}
      <section style={{ padding: '64px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
          <span style={{ fontFamily: MONO, fontSize: '10px', fontWeight: 700, letterSpacing: '0.3em', color: SILVER, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Featured Stories</span>
          <div style={{ flex: 1, height: '1px', background: '#f0f0f0' }} />
          <span style={{ fontFamily: MONO, fontSize: '10px', color: '#ddd', letterSpacing: '0.1em' }}>VOL.01</span>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Large featured card */}
          {featured[0] && (
            <motion.article
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }} viewport={{ once: true }}
              className="md:col-span-2 relative overflow-hidden cursor-pointer group"
              style={{ minHeight: '460px', ...chromeBorder }}>
              <img src={featured[0].image} alt={featured[0].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)' }} />

              {/* Shine sweep on hover */}
              <motion.div
                initial={{ x: '120%', skewX: -15 }}
                whileHover={{ x: '-150%' }}
                transition={{ duration: 0.55 }}
                style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%)', pointerEvents: 'none', zIndex: 5 }}
              />

              <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontFamily: SG, fontSize: '9px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', background: '#fff', color: '#000', padding: '4px 10px' }}>{featured[0].category}</span>
                <span style={{ fontFamily: MONO, fontSize: '9px', color: 'rgba(255,255,255,0.4)' }}>#{featured[0].issue}</span>
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px' }}>
                <h2 style={{ fontFamily: PF, fontWeight: 900, fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', color: '#fff', lineHeight: 1.05, margin: '0 0 12px 0' }}>{featured[0].title}</h2>
                <p style={{ fontFamily: SG, fontSize: '13px', color: 'rgba(255,255,255,0.65)', margin: '0 0 16px 0', lineHeight: 1.6 }}>{featured[0].excerpt}</p>
                <div style={{ fontFamily: MONO, fontSize: '10px', color: 'rgba(255,255,255,0.4)', display: 'flex', gap: '20px' }}>
                  <span>{featured[0].author}</span>
                  <span>{featured[0].readTime} min read</span>
                </div>
              </div>
            </motion.article>
          )}

          {/* Side cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {featured.slice(0, 2).map((article, i) => (
              <motion.article key={`side-${article.id}`}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }} viewport={{ once: true }}
                className="relative overflow-hidden cursor-pointer group flex flex-col"
                style={{ flex: 1, minHeight: '200px', ...chromeBorder }}>
                <div style={{ height: '130px', overflow: 'hidden', flexShrink: 0 }}>
                  <img src={article.image} alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div style={{ flex: 1, padding: '16px', borderLeft: `2px solid ${SILVER}`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontFamily: SG, fontSize: '9px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: SILVER }}>{article.category}</span>
                    <h3 style={{ fontFamily: PF, fontWeight: 900, fontSize: '14px', color: '#0a0a0a', lineHeight: 1.25, margin: '6px 0 6px 0' }}>{article.title}</h3>
                    <p style={{ fontFamily: SG, fontSize: '11px', color: '#888', lineHeight: 1.5, margin: 0, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{article.excerpt}</p>
                  </div>
                  <div style={{ fontFamily: MONO, fontSize: '9px', color: '#ccc', marginTop: '8px' }}>{article.author} · {article.readTime} min</div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ART CARD GRID ── */}
      <section style={{ padding: '8px 24px 64px', maxWidth: '1280px', margin: '0 auto', borderTop: `1px solid #f5f5f5` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px', paddingTop: '40px' }}>
          <span style={{ fontFamily: MONO, fontSize: '10px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: SILVER, whiteSpace: 'nowrap' }}>Latest Stories</span>
          <div style={{ flex: 1, height: '1px', background: '#f0f0f0' }} />
          <button onClick={() => navigate('/')}
            style={{ fontFamily: SG, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: SILVER, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#000'}
            onMouseLeave={e => e.currentTarget.style.color = SILVER}>
            View All <ArrowRight size={10} />
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {grid.map((article, i) => (
            <div key={article.id} className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]">
              <Y2KArtCard article={article} index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* ── PROGRAMS ── off-white bg, chrome card borders */}
      <section style={{ background: '#F8F8F6', borderTop: `1px solid #ebebeb`, borderBottom: `1px solid #ebebeb`, padding: '64px 24px', position: 'relative', overflow: 'hidden' }}>
        {/* Paint splash at 4% */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <img src={ART_SPLASH} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.04, mixBlendMode: 'multiply' }} />
        </div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          <p style={{ fontFamily: MONO, fontSize: '10px', fontWeight: 700, letterSpacing: '0.4em', textTransform: 'uppercase', color: SILVER, textAlign: 'center', marginBottom: '16px' }}>Our Programs</p>
          <h2 style={{ fontFamily: PF, fontWeight: 900, fontSize: 'clamp(2.4rem,5vw,4rem)', color: '#0a0a0a', textAlign: 'center', letterSpacing: '-2px', lineHeight: 1.05, marginBottom: '48px' }}>
            Built for Bold<br /><em style={{ fontStyle: 'italic', color: RED }}>Young Kenyans.</em>
          </h2>
          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {[
              { title: 'Young Citizens Program', sub: 'Constitutional education in 3 tracks — self-paced, online, and in-person.', cta: 'Join YCP', accent: RED },
              { title: 'Teendom Awards', sub: 'Recognising outstanding teen changemakers across all 47 Kenyan counties.', cta: 'View Awards', accent: SILVER },
            ].map(prog => (
              <div key={prog.title} style={{ padding: '32px', background: '#fff', borderLeft: `3px solid ${prog.accent}`, ...chromeBorder, transition: 'box-shadow 0.3s' }}>
                <h3 style={{ fontFamily: PF, fontWeight: 900, fontSize: '1.25rem', color: '#0a0a0a', marginBottom: '8px' }}>{prog.title}</h3>
                <p style={{ fontFamily: SG, fontSize: '13px', color: '#777', lineHeight: 1.6, marginBottom: '20px' }}>{prog.sub}</p>
                <button onClick={() => navigate('/')}
                  style={{ fontFamily: SG, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: prog.accent, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: 'gap 0.2s' }}>
                  {prog.cta} <ArrowRight size={11} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section style={{ borderBottom: `1px solid #f0f0f0`, padding: '64px 24px' }}>
        <div style={{ maxWidth: '440px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontFamily: MONO, fontSize: '10px', fontWeight: 700, letterSpacing: '0.35em', textTransform: 'uppercase', color: SILVER, display: 'block', marginBottom: '16px' }}>Stay in the Loop</span>
          <h2 style={{ fontFamily: PF, fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)', color: '#0a0a0a', letterSpacing: '-1.5px', marginBottom: '24px' }}>Never Miss a Story.</h2>
          <div style={{ display: 'flex', border: `1px solid ${SILVER}` }}>
            <input type="email" placeholder="your@email.com"
              style={{ flex: 1, padding: '12px 16px', fontSize: '13px', outline: 'none', background: '#fff', fontFamily: SG, color: '#333' }} />
            <button style={{ padding: '12px 20px', background: '#0a0a0a', color: '#fff', fontFamily: SG, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = RED}
              onMouseLeave={e => e.currentTarget.style.background = '#0a0a0a'}>
              JOIN
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: `1px solid #f0f0f0`, padding: '32px 24px' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.span
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              fontFamily: PF, fontSize: '1.4rem', fontWeight: 900,
              background: 'linear-gradient(90deg, #666 0%, #fff 22%, #bbb 45%, #fff 68%, #666 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            TEENDOM
          </motion.span>
          <p style={{ fontFamily: MONO, fontSize: '10px', color: '#ccc' }}>© 2024 Teendom Africa</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Instagram', 'Twitter', 'YouTube'].map(s => (
              <button key={s} style={{ fontFamily: SG, fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#bbb', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#000'}
                onMouseLeave={e => e.currentTarget.style.color = '#bbb'}>
                {s}
              </button>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}
