// HOME 4 — BRIGHT GEN-Z
// Blown-out white. Paint splatter abstract as texture. Nairobi teens hero.
// Tilted cards. Bold colored borders. Reaction counts. High energy.
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Clock, Zap, Heart, Share2 } from 'lucide-react';
import { mockArticles, categories } from '../data/articles';
import { GenZArtCard } from '../components/ArtCard';

// Abstract art textures
const ART_SPLASH    = "/images/a.1.abstract art background/download (18).jpg";   // multicolor splatter on white
const ART_ABSTRACT  = "/images/a.1.abstract art background/Abstract Art.jpg";    // paint explosion

// Card accent colors — high saturation, no gradients
const CARD_COLORS = ['#FF6B35', '#0047FF', '#FF6B35', '#0047FF', '#FF6B35', '#0047FF'];
const TILTS       = ['rotate-[1.5deg]', '-rotate-[1deg]', 'rotate-[0.7deg]', '-rotate-[1.5deg]', 'rotate-[1deg]', '-rotate-[0.8deg]'];

export default function BrightZine() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [liked, setLiked] = useState({});
  const featured = mockArticles.filter(a => a.featured);
  const grid     = mockArticles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative"
      style={{ fontFamily: 'Poppins, sans-serif', paddingBottom: '52px' }}>

      {/* ── TWO LIGHT LEAKS — one element, very subtle, minimal ── */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{
        background: [
          'radial-gradient(ellipse at 92% 8%, rgba(255,107,53,0.08) 0%, transparent 40%)',
          'radial-gradient(ellipse at 5% 92%, rgba(0,71,255,0.06) 0%, transparent 40%)',
        ].join(', '),
      }} />

      {/* ── NAVBAR ── clean white, colored active states */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <button onClick={() => navigate('/')}
            className="text-2xl font-black text-[#DC2626]"
            style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-1px' }}>
            TEENDOM
          </button>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'HOME',          color: '#DC2626' },
              { label: 'ARTICLES',      color: '#0047FF' },
              { label: 'YOUNG CITIZENS',color: '#FF6B35' },
              { label: 'ABOUT',         color: '#0047FF' },
            ].map(({ label, color }) => (
              <button key={label}
                className="text-[11px] font-black tracking-widest uppercase pb-0.5 border-b-2 border-transparent hover:border-current transition-all"
                style={{ fontFamily: 'Poppins, sans-serif', color }}>
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/')}
              className="hidden md:block px-5 py-2 text-[11px] font-black tracking-widest uppercase border-2 border-black hover:bg-[#FF6B35] hover:border-[#FF6B35] hover:text-white transition-all"
              style={{ fontFamily: 'Poppins, sans-serif' }}>
              JOIN YCP
            </button>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} strokeWidth={3} /> : <Menu size={22} strokeWidth={3} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t-2 border-black bg-white px-6 py-5 flex flex-col gap-4">
            {['HOME', 'ARTICLES', 'YOUNG CITIZENS', 'ABOUT'].map(link => (
              <button key={link}
                className="text-left text-sm font-black tracking-widest uppercase pb-3 border-b border-gray-100">
                {link}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── full-bleed Nairobi teens with paint splatter texture */}
      <section className="relative pt-14 min-h-[95vh] flex items-end overflow-hidden">
        {/* Main hero photo */}
        <div className="absolute inset-0">
          <img src="/images/a..2.creative images for sections/hero section teens.png"
            alt="Nairobi teens"
            className="w-full h-full object-cover object-center" />
          {/* Paint splatter texture over photo */}
          <div className="absolute inset-0">
            <img src={ART_SPLASH} alt=""
              className="w-full h-full object-cover"
              style={{ opacity: 0.12, mixBlendMode: 'screen' }} />
          </div>
          {/* Bottom gradient for text readability — kept tight */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 45%, transparent 80%)',
          }} />
        </div>

        {/* Tilted brand badge top-right */}
        <motion.div
          initial={{ opacity: 0, y: -20, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-24 right-6 bg-[#DC2626] border-4 border-black px-5 py-2.5">
          <p className="text-white font-black text-[11px] tracking-widest uppercase"
            style={{ fontFamily: 'Poppins, sans-serif' }}>
            NAIROBI · 2026
          </p>
        </motion.div>

        {/* Bright color splash accent — top left abstract corner */}
        <div className="absolute top-14 left-0 w-48 h-48 overflow-hidden pointer-events-none opacity-40">
          <img src={ART_ABSTRACT} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Hero text */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}>

            <p className="text-white/60 text-[11px] font-bold tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              EMPOWERING KENYAN TEENS SINCE 2024
            </p>

            <h1 className="font-black text-white leading-none mb-5"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                letterSpacing: '-3px',
              }}>
              WE RUN<br />
              <span style={{ color: '#FF6B35' }}>THIS CITY.</span>
            </h1>

            <p className="text-white/75 text-base max-w-md mb-8 leading-relaxed"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              Constitutional education. Youth advocacy. Stories of real Kenyan teens changing their world.
            </p>

            <div className="flex gap-3 flex-wrap">
              <button onClick={() => navigate('/')}
                className="px-8 py-3 font-black text-sm tracking-wider uppercase bg-[#FF6B35] border-4 border-black text-black hover:bg-white transition-all"
                style={{ fontFamily: 'Poppins, sans-serif' }}>
                JOIN YOUNG CITIZENS
              </button>
              <button onClick={() => navigate('/')}
                className="px-8 py-3 font-black text-sm tracking-wider uppercase bg-white border-4 border-black text-black hover:bg-[#0047FF] hover:text-white hover:border-[#0047FF] transition-all"
                style={{ fontFamily: 'Poppins, sans-serif' }}>
                READ STORIES
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── cobalt blue */}
      <section className="relative z-10" style={{ background: '#0047FF' }}>
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-3 gap-0">
          {[['2,500+', 'Young Citizens'], ['10+', 'Schools'], ['100+', 'Changemakers']].map(([num, label]) => (
            <div key={label} className="px-6 text-center">
              <p className="text-3xl font-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>{num}</p>
              <p className="text-[10px] font-bold text-blue-200 tracking-widest uppercase mt-1"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CATEGORY FILTER ── colored active pills */}
      <section className="py-6 px-6 max-w-7xl mx-auto relative z-10">
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat, i) => (
            <button key={cat.name} onClick={() => setActiveCategory(cat.name)}
              className="px-5 py-2 text-[10px] font-black tracking-widest uppercase transition-all"
              style={{
                fontFamily: 'Poppins, sans-serif',
                borderRadius: '999px',
                background: activeCategory === cat.name ? CARD_COLORS[i % CARD_COLORS.length] : '#f3f3f3',
                color: activeCategory === cat.name ? 'white' : '#888',
                border: 'none',
                transform: activeCategory === cat.name ? 'scale(1.05)' : 'scale(1)',
              }}>
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* ── FEATURED — large tilted editorial card ── */}
      {featured[0] && (
        <section className="px-6 pb-10 max-w-7xl mx-auto relative z-10">
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-400 mb-5"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            Featured Story
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-0 border-4 border-black cursor-pointer group"
            style={{ transform: 'rotate(1deg)', transformOrigin: 'center' }}
            whileHover={{ rotate: 0, transition: { duration: 0.3 } }}>
            {/* Image panel */}
            <div className="overflow-hidden h-64 md:h-auto relative" style={{ borderRight: '4px solid #000', minHeight: '280px' }}>
              <img src={featured[0].image} alt={featured[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              {/* Paint splatter accent in corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 overflow-hidden opacity-50 pointer-events-none">
                <img src={ART_SPLASH} alt="" className="w-full h-full object-cover" />
              </div>
              <span className="absolute top-4 left-4 px-3 py-1 text-[10px] font-black tracking-widest uppercase text-white border-2 border-white"
                style={{ background: CARD_COLORS[0], fontFamily: 'Poppins, sans-serif' }}>
                {featured[0].category}
              </span>
            </div>
            {/* Content panel */}
            <div className="p-8 flex flex-col justify-between bg-white">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-black leading-tight mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {featured[0].title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                  {featured[0].excerpt}
                </p>
              </div>
              <div>
                {/* Reaction counts */}
                <div className="flex gap-3 flex-wrap my-5">
                  <span className="px-3 py-1.5 border-2 text-[11px] font-black flex items-center gap-1.5"
                    style={{ borderColor: '#FF6B35', color: '#FF6B35', background: '#fff7f4' }}>
                    <Zap size={11} /> {featured[0].reactions.fire}
                  </span>
                  <span className="px-3 py-1.5 border-2 text-[11px] font-black flex items-center gap-1.5"
                    style={{ borderColor: '#0047FF', color: '#0047FF', background: '#f0f4ff' }}>
                    <Heart size={11} /> {featured[0].reactions.hundred}
                  </span>
                  <span className="px-3 py-1.5 border-2 text-[11px] font-black flex items-center gap-1.5"
                    style={{ borderColor: '#0047FF', color: '#0047FF', background: '#f5f0ff' }}>
                    <Share2 size={11} /> {featured[0].reactions.clap}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-gray-400"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                  <span className="font-bold">{featured[0].author}</span>
                  <span className="flex items-center gap-1"><Clock size={9} /> {featured[0].readTime} min</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* ── ARTICLE GRID — abstract art card backgrounds, tilted, bold borders ── */}
      <section className="px-6 pb-16 max-w-7xl mx-auto relative z-10">
        <p className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-400 mb-8"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
          Latest Stories
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          {grid.map((article, i) => (
            <div key={article.id} className="w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)]">
              <GenZArtCard
                article={article}
                index={i}
                liked={liked[article.id]}
                onLike={id => setLiked(prev => ({ ...prev, [id]: !prev[id] }))}
                onClick={() => navigate(`/genz/articles/${article.id}`)}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <button onClick={() => navigate('/')}
            className="px-10 py-3 border-4 border-black font-black text-sm tracking-wider uppercase hover:bg-[#FF6B35] hover:border-[#FF6B35] hover:text-white transition-all"
            style={{ fontFamily: 'Poppins, sans-serif' }}>
            VIEW ALL STORIES
          </button>
        </div>
      </section>

      {/* ── PROGRAMS — abstract art left panel + program cards ── */}
      <section className="relative overflow-hidden" style={{ borderTop: '4px solid #000', borderBottom: '4px solid #000' }}>
        <div className="max-w-7xl mx-auto" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', minHeight: '360px' }}>
          {/* Abstract art panel — full brightness, no dimming */}
          <div style={{ position: 'relative', overflow: 'hidden', borderRight: '4px solid #000' }}>
            <img src={ART_SPLASH} alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'contrast(1.15) saturate(1.1)' }} />
            {/* Label stamped over art */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 20px', background: 'rgba(0,0,0,0.8)', borderTop: '4px solid #FF6B35' }}>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: '1.2rem', color: '#fff', lineHeight: 1, margin: 0, letterSpacing: '-0.5px' }}>OUR<br />PROGRAMS</p>
            </div>
          </div>
          {/* Program cards — right side */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            {[
              { title: 'Young Citizens Program', desc: "Constitutional education that makes Kenya's constitution real for teens. Three learning tracks. One powerful outcome.", cta: 'JOIN YCP', path: '/genz/ycp', color: '#FF6B35' },
              { title: 'Teendom Awards', desc: 'Celebrating outstanding Kenyan teen changemakers from all 47 counties. Nominate a hero from your community.', cta: 'VIEW AWARDS', path: '/genz/awards', color: '#0047FF' },
            ].map((prog, i) => (
              <div key={prog.title}
                style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderLeft: i > 0 ? '4px solid #000' : 'none', borderTop: `6px solid ${prog.color}` }}>
                <div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: '1.25rem', color: '#000', letterSpacing: '-0.5px', marginBottom: '12px', lineHeight: 1.1 }}>
                    {prog.title}
                  </h3>
                  <p style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '13px', color: '#666', lineHeight: 1.7 }}>
                    {prog.desc}
                  </p>
                </div>
                <button onClick={() => navigate(prog.path)}
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '10px 24px', background: prog.color, color: '#fff', border: '3px solid #000', cursor: 'pointer', alignSelf: 'flex-start', marginTop: '24px', transition: 'opacity 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.82'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                  {prog.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRIGHT GENZ BOY ── editorial image break */}
      <section className="grid md:grid-cols-2" style={{ minHeight: '320px' }}>
        <div className="overflow-hidden relative" style={{ borderRight: '4px solid #000', minHeight: '320px' }}>
          <img src="/images/a..2.creative images for sections/bright genz boy.png"
            alt="Gen-Z energy"
            className="w-full h-full object-cover object-top" style={{ minHeight: '320px' }} />
          {/* Colour paint overlay in corner */}
          <div className="absolute bottom-0 left-0 w-32 h-32 overflow-hidden opacity-60 pointer-events-none">
            <img src={ART_ABSTRACT} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex flex-col justify-center px-10 py-12 bg-white">
          <p className="text-[10px] font-black tracking-[0.35em] uppercase text-gray-400 mb-4"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            EMPOWERMENT · COMMUNITY · ACTION
          </p>
          <h2 className="font-black text-black leading-none mb-5"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-1.5px' }}>
            YOUR GENERATION<br />
            <span style={{ color: '#FF6B35' }}>IS READY.</span>
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-sm"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            2,500+ young Kenyans have already joined the movement. Your voice, your city, your future.
          </p>
        </div>
      </section>

      {/* ── TRENDING NOW ── */}
      <section className="py-14 px-6 relative overflow-hidden" style={{ background: '#FAFAFA' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="px-4 py-1.5 border-2 border-black bg-[#DC2626]">
              <span className="text-[10px] font-black tracking-widest uppercase text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>TRENDING NOW</span>
            </div>
            <div style={{ flex: 1, height: '2px', background: '#000' }} />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { rank: '01', topic: 'Constitutional Rights 101', count: '8.4K reads', color: '#FF6B35', art: '/images/a.1.abstract art background/How to Make Pop Art_ A Simple Guide for Beginners 2025.jpg' },
              { rank: '02', topic: 'County Budget Watch', count: '6.1K reads', color: '#0047FF', art: '/images/a.1.abstract art background/Blue Abstract pattern _ Graphic design pattern, Abstract pattern design, Pattern art.jpg' },
              { rank: '03', topic: 'YCP Track: Devolution', count: '4.9K reads', color: '#0047FF', art: '/images/a.1.abstract art background/download (21).jpg' },
            ].map((item, i) => (
              <motion.div key={item.rank}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="cursor-pointer group"
                style={{ border: `4px solid ${item.color}`, background: '#fff', overflow: 'hidden', transform: i % 2 === 1 ? 'rotate(-0.6deg)' : 'rotate(0.5deg)' }}
                whileHover={{ rotate: 0, scale: 1.02, transition: { duration: 0.2 } }}>
                <div style={{ height: '120px', overflow: 'hidden', borderBottom: `4px solid ${item.color}`, position: 'relative' }}>
                  <img src={item.art} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div style={{ position: 'absolute', top: '10px', left: '10px', padding: '4px 10px', background: item.color, border: '2px solid #000' }}>
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '10px', fontWeight: 900, color: '#fff', letterSpacing: '0.15em' }}>#{item.rank}</span>
                  </div>
                </div>
                <div style={{ padding: '16px 18px' }}>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 900, color: '#000', lineHeight: 1.2, marginBottom: '8px' }}>{item.topic}</p>
                  <p style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '10px', color: item.color, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{item.count}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHANGEMAKER PROFILES ── polaroid tilted cards */}
      <section className="py-16 px-6" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline gap-4 mb-10">
            <h2 className="text-3xl font-black text-black" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-1px' }}>CHANGEMAKERS</h2>
            <span className="text-[10px] font-black tracking-widest uppercase text-gray-400" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>CLASS OF 2026</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: 'Amara K.', county: 'Nairobi', role: 'Climate Activist', img: '/images/a..2.creative images for sections/hero section teens.png', color: '#FF6B35', fire: 423, tilt: 1.5 },
              { name: 'Jabari M.', county: 'Mombasa', role: 'Student Leader', img: '/images/a..2.creative images for sections/minimalistic boy.png', color: '#0047FF', fire: 387, tilt: -1 },
              { name: 'Zuri N.', county: 'Kisumu', role: 'Journalist & Poet', img: '/images/a..2.creative images for sections/dark fasion girl.png', color: '#0047FF', fire: 512, tilt: 1 },
            ].map((person, i) => (
              <motion.div key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="w-full sm:w-[calc(33.333%-22px)] cursor-pointer group"
                style={{ border: `4px solid ${person.color}`, background: '#fff', transform: `rotate(${person.tilt}deg)` }}
                whileHover={{ rotate: 0, scale: 1.03, transition: { duration: 0.25 } }}>
                {/* Polaroid-style photo */}
                <div style={{ padding: '8px 8px 0', borderBottom: `3px solid ${person.color}` }}>
                  <div style={{ height: '240px', overflow: 'hidden' }}>
                    <img src={person.img} alt={person.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
                <div style={{ padding: '14px 16px 18px' }}>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '9px', fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase', color: person.color, marginBottom: '4px' }}>
                    {person.role} · {person.county}
                  </p>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 900, color: '#000', marginBottom: '10px' }}>{person.name}</p>
                  <div className="flex items-center gap-2">
                    <button
                      className="flex items-center gap-1 px-2.5 py-1 text-[10px] font-black border-2 transition-all"
                      style={{ borderColor: person.color, color: person.color, background: 'transparent', fontFamily: 'Poppins, sans-serif' }}
                      onMouseEnter={e => { e.currentTarget.style.background = person.color; e.currentTarget.style.color = '#fff'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = person.color; }}>
                      ↑ {person.fire}
                    </button>
                    <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '9px', color: '#aaa' }}>VOTE</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTS / WHAT'S HAPPENING ── */}
      <section className="py-16 px-6" style={{ background: "#0047FF" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-8" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-1.5px' }}>
            WHAT'S HAPPENING
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { date: ['APR', '05'], title: 'YCP Nairobi Chapter Meetup', loc: 'Westlands Youth Hub', type: 'MEETUP', color: '#FF6B35' },
              { date: ['APR', '12'], title: 'Constitutional Rights Workshop', loc: 'Kibera Community Centre', type: 'WORKSHOP', color: '#DC2626' },
              { date: ['APR', '20'], title: 'Teendom Awards Nominations Open', loc: 'Online — All 47 Counties', type: 'AWARDS', color: '#0047FF' },
              { date: ['MAY', '01'], title: 'Youth Advocacy Summit', loc: 'KICC, Nairobi', type: 'SUMMIT', color: '#FF6B35' },
            ].map((ev, i) => (
              <motion.div key={ev.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-0 cursor-pointer group"
                style={{ border: '4px solid #000', background: '#fff' }}>
                {/* Date block */}
                <div className="flex flex-col items-center justify-center shrink-0"
                  style={{ width: '80px', borderRight: '4px solid #000', background: ev.color }}>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.8rem', fontWeight: 900, color: '#fff', lineHeight: 1 }}>{ev.date[1]}</p>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '10px', fontWeight: 900, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.1em' }}>{ev.date[0]}</p>
                </div>
                {/* Info */}
                <div className="flex flex-col justify-center px-6 py-4 flex-1">
                  <div style={{ display: 'inline-block', padding: '2px 8px', background: ev.color, marginBottom: '6px', alignSelf: 'flex-start' }}>
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '8px', fontWeight: 900, letterSpacing: '0.25em', color: '#fff', textTransform: 'uppercase' }}>{ev.type}</span>
                  </div>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', fontWeight: 900, color: '#000', lineHeight: 1.2, marginBottom: '4px' }}>{ev.title}</p>
                  <p style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '11px', color: '#888' }}>{ev.loc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── abstract art right, form left */}
      <section style={{ overflow: 'hidden', borderTop: '4px solid #FF6B35' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          {/* Left: orange bg with form */}
          <div style={{ background: '#FF6B35', padding: '56px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff', letterSpacing: '-1.5px', lineHeight: 1, marginBottom: '12px' }}>
              STAY IN<br />THE LOOP
            </h2>
            <p style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: '28px' }}>
              Stories, opportunities, and updates straight to your inbox. No spam.
            </p>
            <div style={{ display: 'flex', border: '4px solid #000', overflow: 'hidden', background: '#fff' }}>
              <input type="email" placeholder="your@email.com"
                style={{ flex: 1, padding: '14px 16px', fontSize: '13px', outline: 'none', background: '#fff', color: '#000', fontFamily: '"Space Grotesk", sans-serif', border: 'none' }} />
              <button
                style={{ padding: '14px 24px', background: '#000', color: '#fff', fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', transition: 'background 0.2s', flexShrink: 0 }}
                onMouseEnter={e => e.currentTarget.style.background = '#0047FF'}
                onMouseLeave={e => e.currentTarget.style.background = '#000'}>
                JOIN
              </button>
            </div>
          </div>
          {/* Right: abstract art at full brightness */}
          <div style={{ position: 'relative', overflow: 'hidden', minHeight: '280px', borderLeft: '4px solid #000' }}>
            <img src={ART_ABSTRACT} alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'contrast(1.1) saturate(1.1)' }} />
            {/* Cobalt stamp */}
            <div style={{ position: 'absolute', top: 0, left: 0, padding: '10px 20px', background: '#0047FF', borderRight: '4px solid #000', borderBottom: '4px solid #000' }}>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: '10px', color: '#fff', letterSpacing: '0.2em', textTransform: 'uppercase' }}>WEEKLY DROPS</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-black border-t-4 border-[#FF6B35] px-6 py-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-2xl font-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>TEENDOM</p>
          <p className="text-[10px] text-gray-500" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            © 2024 Teendom Africa · Empowering Young Citizens
          </p>
          <div className="flex gap-4">
            {['Instagram', 'Twitter', 'YouTube'].map(s => (
              <button key={s}
                className="text-[10px] font-bold text-gray-500 hover:text-[#FF6B35] transition-colors uppercase tracking-wider">
                {s}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
