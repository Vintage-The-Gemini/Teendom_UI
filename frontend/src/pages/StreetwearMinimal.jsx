// HOME — GRITTY MINIMALIST STREETWEAR — MOBILE FIRST
// Anton font. Space Mono body. 4px black borders. Brand red (#DC2626) as accent.
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { mockArticles, categories } from '../data/articles';
import { StreetwearArtCard } from '../components/ArtCard';

const ANTON = 'Anton, sans-serif';
const MONO  = '"Space Mono", monospace';
const RED   = '#DC2626';
const ART_GEO = "/images/a.1.abstract art background/download (19).jpg";

const VOICES = [
  { name: 'AMARA K.', county: 'NAIROBI', role: 'CLIMATE ACTIVIST', img: '/images/a..2.creative images for sections/hero section teens.png', quote: 'I used constitutional rights to shut down illegal dumping in my estate. The law is our tool.' },
  { name: 'JABARI M.', county: 'MOMBASA', role: 'STUDENT LEADER', img: '/images/a..2.creative images for sections/minimalistic boy.png', quote: 'YCP gave me the language. Now I speak at county assemblies. No one talks over me anymore.' },
  { name: 'ZURI N.', county: 'KISUMU', role: 'JOURNALIST', img: '/images/a..2.creative images for sections/dark fasion girl.png', quote: 'My school paper became a platform. 200 readers became 2,000. Real stories travel far.' },
];

export default function StreetwearMinimal() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const featured = mockArticles.filter(a => a.featured);
  const grid     = mockArticles.filter(a => !a.featured);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#F4F4F4', paddingBottom: '52px' }}>

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ borderBottom: '4px solid #000', background: '#F4F4F4' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
          <button onClick={() => navigate('/')}
            style={{ fontFamily: ANTON, fontSize: '1.75rem', letterSpacing: '-1px', color: '#000', lineHeight: 1, background: 'none', border: 'none', cursor: 'pointer' }}>
            TEENDOM
          </button>
          <div className="hidden md:flex items-center">
            {[['HOME', '/home/street'], ['ARTICLES', '/street/articles'], ['YOUNG CITIZENS', '/street/ycp']].map(([link, path], i, arr) => (
              <button key={link} onClick={() => navigate(path)}
                className="px-5 py-2.5 text-[11px] font-black tracking-widest uppercase text-black hover:bg-black hover:text-white transition-all"
                style={{ fontFamily: MONO, borderLeft: '2px solid #000', borderRight: i === arr.length - 1 ? '2px solid #000' : undefined }}>
                {link}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => navigate('/street/ycp')}
              className="hidden md:block px-5 py-2.5 text-[11px] font-black tracking-widest uppercase text-white hover:bg-black transition-all"
              style={{ fontFamily: MONO, border: '3px solid #000', background: RED }}>
              JOIN YCP
            </button>
            <button className="md:hidden p-1" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 py-4 flex flex-col" style={{ borderTop: '4px solid #000', background: '#F4F4F4' }}>
            {[['HOME', '/home/street'], ['ARTICLES', '/street/articles'], ['YOUNG CITIZENS', '/street/ycp']].map(([link, path]) => (
              <button key={link} onClick={() => { navigate(path); setMenuOpen(false); }}
                className="text-left py-3 px-2 text-base font-black tracking-widest uppercase text-black hover:bg-black hover:text-white transition-all"
                style={{ fontFamily: MONO, borderBottom: '2px solid #000' }}>{link}</button>
            ))}
            <button onClick={() => { navigate('/street/ycp'); setMenuOpen(false); }}
              className="mt-3 py-3 px-4 text-sm font-black tracking-widest uppercase text-white text-center"
              style={{ fontFamily: MONO, background: RED, border: '3px solid #000' }}>
              JOIN YCP
            </button>
          </div>
        )}
      </nav>

      {/* ── HERO ── mobile: stacked, desktop: asymmetric 5/7 grid */}
      <section className="pt-16 relative overflow-hidden" style={{ minHeight: '95vh' }}>
        {/* Watermark — hidden on mobile to avoid overflow */}
        <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span style={{ fontFamily: ANTON, fontSize: 'clamp(6rem,22vw,22rem)', color: '#E8E8E8', letterSpacing: '-4px', lineHeight: 1, userSelect: 'none', whiteSpace: 'nowrap' }}>
            TEENDOM
          </span>
        </div>

        <div className="relative z-10 grid grid-cols-12" style={{ minHeight: 'calc(85vh - 4rem)' }}>
          {/* Image panel */}
          <div className="col-span-5 relative overflow-hidden" style={{ borderRight: '4px solid #000' }}>
            <div className="absolute inset-2 overflow-hidden" style={{ border: '4px solid #000' }}>
              <img src="/images/a..2.creative images for sections/dark fasion girl.png"
                alt="Streetwear" className="w-full h-full object-cover object-top" style={{ display: 'block', filter: 'contrast(1.08)' }} />
            </div>
          </div>

          {/* Text panel */}
          <div className="col-span-7 flex flex-col justify-center px-3 sm:px-6 md:px-12 py-6 md:py-12 relative">
            <div className="hidden md:block absolute top-6 right-6">
              <span className="text-[10px] font-mono text-gray-400" style={{ fontFamily: MONO }}>VOL.01 · 2026</span>
            </div>
            <p className="text-[10px] font-black tracking-[0.35em] uppercase text-gray-400 mb-6" style={{ fontFamily: MONO }}>
              STYLE DEPT. · NAIROBI · KENYA
            </p>
            <motion.h1 initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              style={{ fontFamily: ANTON, fontSize: 'clamp(3.5rem,10vw,10rem)', lineHeight: 0.87, letterSpacing: '-1px', color: '#000' }}>
              YOUR<br />VOICE.<br />YOUR<br />COUNTRY.
            </motion.h1>
            <div className="mt-6 mb-6 flex items-center gap-4">
              <div style={{ width: '72px', height: '5px', background: RED, border: '2px solid #000' }} />
              <span className="text-[10px] font-mono text-gray-400 hidden sm:block" style={{ fontFamily: MONO }}>CONSTITUTIONAL · EDUCATION · ADVOCACY</span>
            </div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}
              className="text-sm text-gray-600 max-w-sm leading-relaxed mb-8" style={{ fontFamily: MONO }}>
              Constitutional education and youth advocacy for Kenyan teens ready to take up space and lead.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3">
              <button onClick={() => navigate('/street/ycp')}
                className="px-6 py-3 font-black text-sm tracking-widest uppercase text-white transition-all"
                style={{ fontFamily: MONO, border: '4px solid #000', background: RED }}
                onMouseEnter={e => { e.currentTarget.style.background = '#000'; }}
                onMouseLeave={e => { e.currentTarget.style.background = RED; }}>
                JOIN YOUNG CITIZENS
              </button>
              <button onClick={() => navigate('/street/articles')}
                className="px-6 py-3 font-black text-sm tracking-widest uppercase text-black hover:bg-black hover:text-white transition-all"
                style={{ fontFamily: MONO, border: '4px solid #000' }}>
                READ STORIES
              </button>
            </motion.div>
            <div className="mt-10 grid grid-cols-3 gap-0" style={{ borderTop: '4px solid #000' }}>
              {[['2,500+', 'YOUNG CITIZENS'], ['10+', 'SCHOOLS'], ['100+', 'CHANGEMAKERS']].map(([num, label], i) => (
                <div key={label} className="py-4"
                  style={{ paddingLeft: i > 0 ? '1rem' : 0, borderRight: i < 2 ? '3px solid #000' : undefined }}>
                  <p style={{ fontFamily: ANTON, fontSize: 'clamp(1.5rem,4vw,2.2rem)', lineHeight: 1, color: '#000' }}>{num}</p>
                  <p className="text-[9px] text-gray-500 tracking-widest mt-1 uppercase" style={{ fontFamily: MONO }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── YOUR GENERATION IS READY ── mobile: stacked, desktop: 2-col */}
      <section className="grid grid-cols-2" style={{ borderTop: '4px solid #000' }}>
        <div className="relative overflow-hidden" style={{ borderBottom: '4px solid #000' }}>
          <img src="/images/a..2.creative images for sections/bright genz boy.png"
            alt="Your generation is ready"
            className="w-full object-top"
            style={{ display: 'block', filter: 'contrast(1.08)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '120px', height: '120px', overflow: 'hidden', opacity: 0.55, pointerEvents: 'none', borderTop: '4px solid #000', borderRight: '4px solid #000' }}>
            <img src="/images/a.1.abstract art background/Abstract Art.jpg" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex flex-col justify-center p-6 md:p-12 relative overflow-hidden" style={{ background: '#F4F4F4' }}>
          <div className="hidden md:block" style={{ position: 'absolute', right: '-16px', bottom: '-24px', fontFamily: ANTON, fontSize: '8rem', color: 'rgba(0,0,0,0.04)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', letterSpacing: '-4px' }}>NOW</div>
          <p style={{ fontFamily: MONO, fontSize: '10px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#aaa', marginBottom: '16px' }}>
            EMPOWERMENT · COMMUNITY · ACTION
          </p>
          <h2 style={{ fontFamily: ANTON, fontSize: 'clamp(2rem,5.5vw,4.5rem)', color: '#000', lineHeight: 0.88, letterSpacing: '-1px', marginBottom: '20px' }}>
            YOUR GENERATION<br />
            <span style={{ color: RED }}>IS READY.</span>
          </h2>
          <p style={{ fontFamily: MONO, fontSize: '12px', color: '#666', lineHeight: 1.8, maxWidth: '340px', marginBottom: '28px' }}>
            2,500+ young Kenyans have already joined the movement. Your voice, your city, your future.
          </p>
          <button onClick={() => navigate('/street/ycp')}
            style={{ fontFamily: MONO, fontSize: '11px', fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase', padding: '12px 28px', border: '4px solid #000', background: '#000', color: '#fff', cursor: 'pointer', alignSelf: 'flex-start' }}
            onMouseEnter={e => { e.currentTarget.style.background = RED; e.currentTarget.style.borderColor = RED; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.borderColor = '#000'; }}>
            JOIN THE MOVEMENT →
          </button>
        </div>
      </section>

      {/* ── STREET VOICES ── mobile: stacked cards, desktop: masonry */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="flex items-end gap-0 mb-8 overflow-hidden">
          <h2 style={{ fontFamily: ANTON, fontSize: 'clamp(2.5rem,8vw,7rem)', color: '#000', lineHeight: 0.85, letterSpacing: '-2px', margin: 0, flexShrink: 0 }}>
            STREET<br />VOICES.
          </h2>
          <div className="hidden sm:block flex-1 ml-6 mb-2">
            <p style={{ fontFamily: MONO, fontSize: '10px', color: '#aaa', letterSpacing: '0.2em', textTransform: 'uppercase', lineHeight: 1.9 }}>
              TEEN CHANGEMAKERS<br />ACROSS KENYA
            </p>
          </div>
        </div>

        {/* Mobile: all cards stacked */}
        <div className="md:hidden flex flex-col" style={{ border: '4px solid #000' }}>
          {VOICES.map((person, i) => (
            <motion.div key={person.name}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ display: 'flex', borderBottom: i < VOICES.length - 1 ? '4px solid #000' : 'none', background: i % 2 === 0 ? '#F4F4F4' : '#000', minHeight: '120px' }}>
              <div style={{ width: '120px', flexShrink: 0, overflow: 'hidden', borderRight: '4px solid #000', position: 'relative' }}>
                <img src={person.img} alt={person.name} className="w-full h-full object-cover object-top" style={{ minHeight: '120px' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, padding: '4px 8px', background: RED, borderRight: '3px solid #000', borderBottom: '3px solid #000' }}>
                  <span style={{ fontFamily: MONO, fontSize: '7px', color: '#fff', fontWeight: 900, letterSpacing: '0.2em' }}>{person.county}</span>
                </div>
              </div>
              <div style={{ flex: 1, padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontFamily: MONO, fontSize: '8px', color: RED, letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 900, marginBottom: '4px' }}>{person.role}</p>
                <p style={{ fontFamily: ANTON, fontSize: '1.3rem', color: i % 2 === 0 ? '#000' : '#fff', lineHeight: 0.95, marginBottom: '8px' }}>{person.name}</p>
                <p style={{ fontFamily: MONO, fontSize: '10px', color: i % 2 === 0 ? '#555' : '#aaa', lineHeight: 1.5 }}>"{person.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: masonry — tall left, stacked right */}
        <div className="hidden md:grid" style={{ gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: '0', border: '4px solid #000' }}>
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="group"
            style={{ gridRow: 'span 2', borderRight: '4px solid #000', position: 'relative', overflow: 'hidden', cursor: 'pointer', minHeight: '560px' }}>
            <img src={VOICES[0].img} alt={VOICES[0].name}
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 transition-all duration-300 group-hover:bg-black/30" />
            <div style={{ position: 'absolute', top: 0, right: 0, padding: '8px 16px', background: RED, borderLeft: '4px solid #000', borderBottom: '4px solid #000' }}>
              <span style={{ fontFamily: MONO, fontSize: '9px', color: '#fff', fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase' }}>{VOICES[0].county}</span>
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#000', borderTop: '4px solid #000', padding: '24px 28px' }}>
              <p style={{ fontFamily: MONO, fontSize: '9px', color: RED, letterSpacing: '0.35em', textTransform: 'uppercase', fontWeight: 900, marginBottom: '6px' }}>{VOICES[0].role}</p>
              <p style={{ fontFamily: ANTON, fontSize: '2rem', color: '#fff', lineHeight: 0.95, marginBottom: '12px' }}>{VOICES[0].name}</p>
              <p style={{ fontFamily: MONO, fontSize: '11px', color: '#aaa', lineHeight: 1.65 }}>"{VOICES[0].quote}"</p>
            </div>
          </motion.div>
          {VOICES.slice(1).map((person, i) => (
            <motion.div key={person.name}
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group"
              style={{ display: 'flex', borderBottom: i === 0 ? '4px solid #000' : 'none', cursor: 'pointer', background: i === 0 ? '#F4F4F4' : '#000', minHeight: '280px', transition: 'background 0.25s' }}>
              <div style={{ width: '150px', flexShrink: 0, overflow: 'hidden', borderRight: '4px solid #000', position: 'relative' }}>
                <img src={person.img} alt={person.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                <div style={{ position: 'absolute', top: 0, left: 0, padding: '5px 10px', background: RED, borderRight: '3px solid #000', borderBottom: '3px solid #000' }}>
                  <span style={{ fontFamily: MONO, fontSize: '8px', color: '#fff', fontWeight: 900, letterSpacing: '0.2em' }}>{person.county}</span>
                </div>
              </div>
              <div style={{ flex: 1, padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontFamily: MONO, fontSize: '9px', color: RED, letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 900, marginBottom: '6px' }}>{person.role}</p>
                <p style={{ fontFamily: ANTON, fontSize: '1.4rem', color: i === 0 ? '#000' : '#fff', lineHeight: 0.95, marginBottom: '10px' }}>{person.name}</p>
                <p style={{ fontFamily: MONO, fontSize: '11px', color: i === 0 ? '#555' : '#aaa', lineHeight: 1.6 }}>"{person.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <section className="px-4 md:px-6 py-5 max-w-7xl mx-auto flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button key={cat.name} onClick={() => setActiveCategory(cat.name)}
            className="px-4 py-2 text-[10px] font-black tracking-widest uppercase transition-all"
            style={{
              fontFamily: MONO,
              background: activeCategory === cat.name ? RED : 'transparent',
              color: activeCategory === cat.name ? '#fff' : '#888',
              border: activeCategory === cat.name ? `2px solid ${RED}` : '2px solid #ddd',
            }}>
            {cat.name}
          </button>
        ))}
      </section>

      {/* ── FEATURED ── mobile: stacked, desktop: 2-col */}
      <section style={{ background: '#000', position: 'relative', overflow: 'hidden' }}>
        {/* Ghost "06" — desktop only */}
        <div className="hidden md:block" style={{
          position: 'absolute', right: '-4vw', top: '50%', transform: 'translateY(-50%)',
          fontFamily: ANTON, fontSize: 'clamp(14rem,30vw,26rem)',
          color: 'rgba(255,255,255,0.05)', lineHeight: 1, letterSpacing: '-8px',
          userSelect: 'none', pointerEvents: 'none', zIndex: 1,
        }}>06</div>

        <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 2 }}>
          {featured[0] && (
            <div className="grid grid-cols-2">
              {/* Content */}
              <div className="p-6 md:p-12 flex flex-col justify-between" style={{ borderBottom: '4px solid #1a1a1a', borderRight: undefined }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                    <span style={{ fontFamily: MONO, fontSize: '9px', color: RED, letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: 900 }}>FEATURED STORY</span>
                    <div style={{ flex: 1, height: '1px', background: '#333' }} />
                  </div>
                  <div style={{ display: 'inline-block', background: RED, padding: '4px 12px', marginBottom: '16px', borderLeft: '5px solid #fff' }}>
                    <span style={{ fontFamily: MONO, fontSize: '9px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#fff' }}>{featured[0].category}</span>
                  </div>
                  <h2 style={{ fontFamily: ANTON, fontSize: 'clamp(2rem,5vw,4rem)', lineHeight: 0.88, color: '#fff', letterSpacing: '-1px', marginBottom: '16px' }}>
                    {featured[0].title}
                  </h2>
                  <p style={{ fontFamily: MONO, fontSize: '12px', color: '#888', lineHeight: 1.8 }}>
                    {featured[0].excerpt}
                  </p>
                </div>
                <div className="mt-8">
                  <p style={{ fontFamily: MONO, fontSize: '10px', color: '#555', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '16px' }}>
                    BY {featured[0].author?.toUpperCase()} · #{featured[0].issue} · {featured[0].readTime} MIN
                  </p>
                  <button
                    onClick={() => navigate(`/street/articles/${featured[0].id}`)}
                    style={{ fontFamily: MONO, fontSize: '11px', fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase', padding: '12px 28px', border: `4px solid ${RED}`, background: RED, color: '#fff', cursor: 'pointer' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = RED; }}
                    onMouseLeave={e => { e.currentTarget.style.background = RED; e.currentTarget.style.color = '#fff'; }}>
                    READ FULL STORY →
                  </button>
                </div>
              </div>
              {/* Image */}
              <div className="relative overflow-hidden" style={{ minHeight: '280px', borderLeft: '0' }}>
                <img src={featured[0].image} alt={featured[0].title}
                  className="w-full h-full object-cover"
                  style={{ display: 'block', filter: 'contrast(1.08)', minHeight: '280px' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '10px 20px', background: '#000', borderTop: `4px solid ${RED}`, borderRight: `4px solid ${RED}` }}>
                  <span style={{ fontFamily: ANTON, fontSize: '1.8rem', color: RED, lineHeight: 1 }}>ISSUE 06</span>
                </div>
              </div>
            </div>
          )}
          {/* Secondary featured strip — wraps on mobile */}
          {featured.length > 1 && (
            <div className="flex flex-col sm:flex-row" style={{ borderTop: '4px solid #1a1a1a' }}>
              {featured.slice(1).map((article, i) => (
                <div key={article.id}
                  onClick={() => navigate(`/street/articles/${article.id}`)}
                  className="flex-1 p-4 md:p-5 cursor-pointer transition-colors hover:bg-[#111]"
                  style={{ borderBottom: '2px solid #1a1a1a', borderRight: undefined }}>
                  <span style={{ fontFamily: MONO, fontSize: '9px', color: RED, fontWeight: 900, letterSpacing: '0.3em', display: 'block', marginBottom: '6px' }}>{article.category}</span>
                  <p style={{ fontFamily: ANTON, fontSize: '1.1rem', color: '#fff', lineHeight: 1, letterSpacing: '-0.5px', marginBottom: '6px' }}>{article.title}</p>
                  <p style={{ fontFamily: MONO, fontSize: '10px', color: '#444' }}>BY {article.author?.toUpperCase()}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── ART CARD GRID ── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 pt-10">
        <div className="flex items-center gap-0 mb-6">
          <span style={{ fontFamily: ANTON, fontSize: '2rem', letterSpacing: '0.05em', color: '#000' }}>LATEST</span>
          <div className="flex-1 ml-4" style={{ height: '4px', background: '#000' }} />
        </div>
        <div className="flex flex-wrap justify-center">
          {grid.map((article, i) => (
            <div key={article.id} className="w-full sm:w-1/2 lg:w-1/3" style={{ flexShrink: 0 }}>
              <StreetwearArtCard article={article} index={i} centered onClick={() => navigate(`/street/articles/${article.id}`)} />
            </div>
          ))}
        </div>
        <button onClick={() => navigate('/street/articles')}
          className="w-full py-4 font-black tracking-[0.2em] uppercase text-sm text-black transition-all"
          style={{ fontFamily: MONO, borderTop: '4px solid #000', background: 'transparent' }}
          onMouseEnter={e => { e.currentTarget.style.background = RED; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#000'; }}>
          VIEW ALL STORIES →
        </button>
      </section>

      {/* ── ABSTRACT ART BANNER ── simplified on mobile */}
      <div style={{ position: 'relative', height: '100px', overflow: 'hidden', borderTop: '4px solid #000', borderBottom: '4px solid #000' }}>
        <img src="/images/a.1.abstract art background/How to Make Pop Art_ A Simple Guide for Beginners 2025.jpg" alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'contrast(1.15) saturate(1.1)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />
        <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8" style={{ zIndex: 1 }}>
          <span style={{ fontFamily: ANTON, fontSize: 'clamp(1.4rem,4vw,3rem)', color: '#fff', letterSpacing: '-1px', lineHeight: 1 }}>
            VOLUME 01
          </span>
          <div className="hidden sm:block" style={{ height: '2px', flex: 1, background: 'rgba(255,255,255,0.25)', margin: '0 24px' }} />
          <span className="hidden sm:block" style={{ fontFamily: MONO, fontSize: '10px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            MARCH 2026 · NAIROBI
          </span>
          <div className="hidden sm:block" style={{ height: '2px', flex: 1, background: 'rgba(255,255,255,0.25)', margin: '0 24px' }} />
          <span style={{ fontFamily: ANTON, fontSize: 'clamp(1.4rem,4vw,3rem)', color: RED, letterSpacing: '-1px', lineHeight: 1 }}>
            TEENDOM
          </span>
        </div>
      </div>

      {/* ── PROGRAMS ── mobile: stacked, desktop: vertical label + 2 panels */}
      <section style={{ overflow: 'hidden', position: 'relative' }}>
        {/* Desktop: 3-col with vertical label. Mobile: 2 stacked panels, no label column */}
        <div className="hidden md:grid max-w-7xl mx-auto" style={{ gridTemplateColumns: '64px 1fr 1fr', minHeight: '380px' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '4px solid #000', overflow: 'hidden' }}>
            <img src="/images/a.1.abstract art background/download (18).jpg" alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'contrast(1.2) saturate(1.1)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(220,38,38,0.82)' }} />
            <span style={{ position: 'relative', zIndex: 1, fontFamily: ANTON, fontSize: '1.3rem', color: '#fff', letterSpacing: '0.35em', textTransform: 'uppercase', writingMode: 'vertical-rl', transform: 'rotate(180deg)', whiteSpace: 'nowrap' }}>PROGRAMS</span>
          </div>
          {[
            { title: 'YOUNG CITIZENS\nPROGRAM', sub: 'Constitutional education for Kenyan teens. Three tracks. Real knowledge that changes how you move.', cta: 'JOIN YCP →', path: '/street/ycp', bg: '#000', textColor: '#fff', subColor: '#888', ghost: 'YCP', ghostColor: 'rgba(220,38,38,0.1)', accent: RED },
            { title: 'TEENDOM\nAWARDS', sub: 'Exceptional teen changemakers celebrated across all 47 counties of Kenya. Your story matters here.', cta: 'EXPLORE AWARDS →', path: '/street/awards', bg: '#F4F4F4', textColor: '#000', subColor: '#666', ghost: '★', ghostColor: 'rgba(0,0,0,0.04)', accent: '#000' },
          ].map((prog, i) => (
            <div key={prog.cta} style={{ background: prog.bg, padding: '52px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: i === 0 ? '4px solid #000' : 'none', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', right: '-16px', bottom: '-24px', fontFamily: ANTON, fontSize: '9rem', color: prog.ghostColor, lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>{prog.ghost}</div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: '40px', height: '4px', background: prog.accent, marginBottom: '28px' }} />
                <h3 style={{ fontFamily: ANTON, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: prog.textColor, lineHeight: 0.9, letterSpacing: '-0.5px', marginBottom: '16px', whiteSpace: 'pre-line' }}>{prog.title}</h3>
                <p style={{ fontFamily: MONO, fontSize: '12px', color: prog.subColor, lineHeight: 1.75 }}>{prog.sub}</p>
              </div>
              <button onClick={() => navigate(prog.path)}
                style={{ fontFamily: MONO, fontSize: '11px', fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase', padding: '12px 28px', border: `4px solid ${prog.accent}`, background: prog.accent, color: '#fff', cursor: 'pointer', alignSelf: 'flex-start', position: 'relative', zIndex: 1, marginTop: '32px' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = prog.accent; }}
                onMouseLeave={e => { e.currentTarget.style.background = prog.accent; e.currentTarget.style.color = '#fff'; }}>
                {prog.cta}
              </button>
            </div>
          ))}
        </div>
        {/* Mobile: stacked cards */}
        <div className="md:hidden">
          {[
            { title: 'YOUNG CITIZENS PROGRAM', sub: 'Constitutional education for Kenyan teens. Three tracks. Real knowledge that changes how you move.', cta: 'JOIN YCP →', path: '/street/ycp', bg: '#000', textColor: '#fff', subColor: '#888', accent: RED },
            { title: 'TEENDOM AWARDS', sub: 'Exceptional teen changemakers celebrated across all 47 counties of Kenya. Your story matters here.', cta: 'EXPLORE AWARDS →', path: '/street/awards', bg: '#F4F4F4', textColor: '#000', subColor: '#666', accent: '#000' },
          ].map((prog, i) => (
            <div key={prog.cta} style={{ background: prog.bg, padding: '32px 24px', borderTop: i === 0 ? '4px solid #000' : '4px solid #333' }}>
              <div style={{ width: '32px', height: '4px', background: prog.accent, marginBottom: '20px' }} />
              <h3 style={{ fontFamily: ANTON, fontSize: '2rem', color: prog.textColor, lineHeight: 0.9, marginBottom: '12px' }}>{prog.title}</h3>
              <p style={{ fontFamily: MONO, fontSize: '12px', color: prog.subColor, lineHeight: 1.75, marginBottom: '24px' }}>{prog.sub}</p>
              <button onClick={() => navigate(prog.path)}
                style={{ fontFamily: MONO, fontSize: '11px', fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase', padding: '12px 28px', border: `4px solid ${prog.accent}`, background: prog.accent, color: '#fff', cursor: 'pointer' }}>
                {prog.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── EDITORIAL SPOTLIGHT ── always 2-col */}
      <section style={{ background: '#000' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2">
          <div className="relative overflow-hidden" style={{ minHeight: '320px', borderBottom: '4px solid #1a1a1a' }}>
            <img src="/images/a.1.abstract art background/Geometric Masterpiece_ Red, Cream, and Black Circles Abstract Art in the Style of Laszlo Moholy-nagy - Etsy.jpg"
              alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute top-0 left-0 overflow-hidden"
              style={{ width: '58%', height: '52%', borderRight: `4px solid ${RED}`, borderBottom: `4px solid ${RED}` }}>
              <img src="/images/a..2.creative images for sections/minimalistic boy.png"
                alt="Editorial" className="w-full h-full object-cover object-top" style={{ filter: 'contrast(1.1)' }} />
            </div>
            <div className="absolute bottom-0 left-0 px-4 py-2"
              style={{ background: RED, borderTop: '4px solid #000', borderRight: '4px solid #000' }}>
              <span style={{ fontFamily: MONO, fontSize: '9px', color: '#fff', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase' }}>EDITORIAL · VOL.01</span>
            </div>
            <div className="absolute top-0 right-0 px-4 py-3 text-center"
              style={{ background: '#000', borderLeft: `4px solid ${RED}`, borderBottom: `4px solid ${RED}` }}>
              <p style={{ fontFamily: ANTON, fontSize: '1.8rem', color: RED, lineHeight: 1 }}>06</p>
              <p style={{ fontFamily: MONO, fontSize: '8px', color: '#888', letterSpacing: '0.2em' }}>ISSUES</p>
            </div>
          </div>
          <div className="p-6 md:p-14 flex flex-col justify-center" style={{ background: '#000' }}>
            <p style={{ fontFamily: MONO, fontSize: '9px', color: RED, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 900 }}>
              EDITOR'S LETTER · MARCH 2026
            </p>
            <h2 style={{ fontFamily: ANTON, fontSize: 'clamp(2rem,5vw,4rem)', lineHeight: 0.9, color: '#fff', marginBottom: '20px' }}>
              THE STREETS<br />ARE TALKING.<br />
              <span style={{ color: RED }}>WE LISTEN.</span>
            </h2>
            <div style={{ borderLeft: `4px solid ${RED}`, paddingLeft: '20px', marginBottom: '24px' }}>
              <p style={{ fontFamily: MONO, fontSize: '12px', color: '#ccc', lineHeight: 1.75, fontStyle: 'italic' }}>
                "Every teen in Nairobi has a story worth front-page. We built Teendom so those stories stop being footnotes and start being headlines."
              </p>
              <p style={{ fontFamily: MONO, fontSize: '10px', color: '#555', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '10px' }}>
                — THE TEENDOM EDITORIAL TEAM
              </p>
            </div>
            <button
              style={{ fontFamily: MONO, fontSize: '11px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '12px 28px', border: `4px solid ${RED}`, background: 'transparent', color: RED, cursor: 'pointer', alignSelf: 'flex-start' }}
              onMouseEnter={e => { e.currentTarget.style.background = RED; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = RED; }}>
              READ FULL EDITORIAL
            </button>
          </div>
        </div>
      </section>

      {/* ── COUNTY REACH ── mobile: stacked, desktop: text left / art+stats right */}
      <section style={{ overflow: 'hidden', position: 'relative' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2">
          <div className="flex flex-col justify-center p-6 md:p-14 relative overflow-hidden" style={{ background: '#000', borderBottom: '4px solid #1a1a1a' }}>
            <div className="hidden md:block" style={{ position: 'absolute', right: '-20px', bottom: '-30px', fontFamily: ANTON, fontSize: 'clamp(8rem,16vw,14rem)', color: 'rgba(220,38,38,0.08)', lineHeight: 1, letterSpacing: '-6px', userSelect: 'none', pointerEvents: 'none' }}>47</div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ fontFamily: MONO, fontSize: '10px', color: RED, letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: 900, marginBottom: '14px' }}>OUR REACH</p>
              <h3 style={{ fontFamily: ANTON, fontSize: 'clamp(2.5rem,7vw,6rem)', color: '#fff', lineHeight: 0.85, letterSpacing: '-2px', marginBottom: '20px' }}>
                47<br />COUNTIES.<br /><span style={{ color: RED }}>ONE VOICE.</span>
              </h3>
              <p style={{ fontFamily: MONO, fontSize: '12px', color: '#666', lineHeight: 1.8 }}>
                From Turkana to Mombasa, Teendom covers every corner of Kenya. Every teen. Every story.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden" style={{ minHeight: '280px' }}>
            <img src="/images/a.1.abstract art background/Blue Abstract pattern _ Graphic design pattern, Abstract pattern design, Pattern art.jpg"
              alt="" className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'contrast(1.1) saturate(1.05)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)' }} />
            <div style={{ position: 'relative', zIndex: 1, padding: '32px 28px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {[['12', 'NAIROBI SCHOOLS'], ['340+', 'ACTIVE MEMBERS'], ['47', 'COUNTY REPS'], ['100%', 'TEEN-WRITTEN']].map(([num, label], i) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '20px', paddingTop: '14px', paddingBottom: '14px', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.12)' : 'none' }}>
                  <span style={{ fontFamily: ANTON, fontSize: 'clamp(1.6rem,3.5vw,3rem)', color: '#fff', lineHeight: 1, minWidth: '90px', fontWeight: 900 }}>{num}</span>
                  <span style={{ fontFamily: MONO, fontSize: '10px', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 900 }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── mobile: art on top, form below. Desktop: side by side */}
      <section style={{ overflow: 'hidden', position: 'relative', borderTop: `4px solid ${RED}` }}>
        <div className="grid grid-cols-2">
          <div className="relative overflow-hidden" style={{ minHeight: '220px', borderBottom: `4px solid ${RED}` }}>
            <img src="/images/a.1.abstract art background/Abstract Art.jpg" alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'contrast(1.1) saturate(1.1)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 24px', background: 'rgba(0,0,0,0.78)', borderTop: `4px solid ${RED}` }}>
              <p style={{ fontFamily: ANTON, fontSize: 'clamp(1.2rem,3vw,2.5rem)', color: '#fff', lineHeight: 0.95, margin: 0, letterSpacing: '-0.5px' }}>
                STAY IN THE LOOP.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center p-6 md:p-12 relative overflow-hidden" style={{ background: '#000' }}>
            <div className="hidden md:block" style={{ position: 'absolute', right: '-12px', bottom: '-20px', fontFamily: ANTON, fontSize: 'clamp(4rem,10vw,8rem)', color: 'rgba(220,38,38,0.07)', lineHeight: 1, letterSpacing: '-4px', userSelect: 'none', pointerEvents: 'none' }}>LOOP</div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ fontFamily: MONO, fontSize: '9px', color: RED, letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: 900, marginBottom: '10px' }}>WEEKLY DROPS</p>
              <p style={{ fontFamily: MONO, fontSize: '12px', color: '#888', lineHeight: 1.8, marginBottom: '24px' }}>
                Real stories. No spam. Just the best of Kenyan teen culture weekly.
              </p>
              <div style={{ display: 'flex', border: '4px solid #fff', overflow: 'hidden', marginBottom: '10px' }}>
                <input type="email" placeholder="YOUR EMAIL ADDRESS"
                  style={{ flex: 1, padding: '12px 14px', fontFamily: MONO, fontSize: '11px', letterSpacing: '0.1em', background: '#111', color: '#fff', border: 'none', outline: 'none', minWidth: 0 }} />
                <button
                  style={{ padding: '12px 20px', fontFamily: MONO, fontSize: '11px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', background: RED, color: '#fff', border: 'none', cursor: 'pointer', flexShrink: 0 }}
                  onMouseEnter={e => e.currentTarget.style.background = '#b91c1c'}
                  onMouseLeave={e => e.currentTarget.style.background = RED}>
                  JOIN
                </button>
              </div>
              <p style={{ fontFamily: MONO, fontSize: '10px', color: '#444', letterSpacing: '0.15em' }}>NO SPAM. JUST THE STORIES THAT MATTER.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-4 md:px-6 py-6" style={{ background: '#000', borderTop: `4px solid ${RED}` }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{ fontFamily: ANTON, fontSize: '1.6rem', color: '#fff' }}>TEENDOM</p>
          <p className="text-[10px] font-mono text-gray-500" style={{ fontFamily: MONO }}>© 2026 TEENDOM AFRICA</p>
          <div className="flex gap-4">
            {['IG', 'TW', 'YT'].map(s => (
              <button key={s}
                className="text-[11px] font-black uppercase text-gray-500 px-2 py-1 transition-all"
                style={{ fontFamily: MONO, border: '2px solid #333' }}
                onMouseEnter={e => { e.currentTarget.style.color = RED; e.currentTarget.style.borderColor = RED; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#6b7280'; e.currentTarget.style.borderColor = '#333'; }}>
                {s}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
