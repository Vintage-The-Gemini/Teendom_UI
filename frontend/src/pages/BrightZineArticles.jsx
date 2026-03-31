// BRIGHT GEN-Z — Articles Browse Page
// High energy, tilted cards, colored borders, Gen-Z editorial vibes
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Zap, Heart, Share2 } from 'lucide-react';
import { mockArticles, categories } from '../data/articles';
import { GenZArtCard } from '../components/ArtCard';

const CARD_COLORS = ['#FF6B35', '#0047FF', '#FF6B35', '#0047FF', '#FF6B35', '#0047FF'];

const ART_BACKGROUNDS = [
  "/images/a.1.abstract art background/download (18).jpg",
  "/images/a.1.abstract art background/download (21).jpg",
  "/images/a.1.abstract art background/Abstract Art.jpg",
  "/images/a.1.abstract art background/How to Make Pop Art_ A Simple Guide for Beginners 2025.jpg",
  "/images/a.1.abstract art background/Blue Abstract pattern _ Graphic design pattern, Abstract pattern design, Pattern art.jpg",
  "/images/a.1.abstract art background/download (19).jpg",
  "/images/a.1.abstract art background/Geometric Masterpiece_ Red, Cream, and Black Circles Abstract Art in the Style of Laszlo Moholy-nagy - Etsy.jpg",
];

const TRENDING = [
  { rank: 1, title: "Finding Balance in Grindset Culture", reads: "24.5K reads", color: '#FF6B35' },
  { rank: 2, title: "Teen CEO: Building Your Empire Young", reads: "19.2K reads", color: '#0047FF' },
  { rank: 3, title: "Differently Gifted: Your Superpower Unlocked", reads: "16.8K reads", color: '#DC2626' },
];

export default function BrightZineArticles() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [liked, setLiked] = useState({});
  const [email, setEmail] = useState('');

  const filteredArticles = activeCategory === 'ALL'
    ? mockArticles
    : mockArticles.filter(a => a.category === activeCategory);

  const handleLike = (id) => {
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', background: '#FFFFFF', minHeight: '100vh', paddingBottom: '52px' }}>

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <button onClick={() => navigate('/home/genz')}
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-1px', color: '#DC2626', background: 'none', border: 'none', cursor: 'pointer' }}>
            TEENDOM
          </button>
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'HOME', path: '/home/genz', color: '#DC2626' },
              { label: 'ARTICLES', path: '/genz/articles', color: '#0047FF' },
              { label: 'YOUNG CITIZENS', path: '/genz/ycp', color: '#FF6B35' },
              { label: 'AWARDS', path: '/genz/awards', color: '#0047FF' },
            ].map(({ label, path, color }) => (
              <button key={label} onClick={() => navigate(path)}
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color, background: 'none', border: 'none', cursor: 'pointer', borderBottom: '2px solid transparent', paddingBottom: '2px' }}
                onMouseEnter={e => e.currentTarget.style.borderBottomColor = color}
                onMouseLeave={e => e.currentTarget.style.borderBottomColor = 'transparent'}>{label}</button>
            ))}
          </div>
          <button onClick={() => navigate('/genz/ycp')}
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '8px 20px', border: '2px solid #000', background: '#FF6B35', color: '#000', cursor: 'pointer' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#FF6B35'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#FF6B35'; e.currentTarget.style.color = '#000'; }}>
            JOIN YCP
          </button>
        </div>
      </nav>

      {/* ── HEADER ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ background: '#fff', padding: '4rem 1.5rem 3rem', borderBottom: '4px solid #000' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <h1 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(4rem, 10vw, 8rem)',
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: '-3px',
              color: '#000',
              margin: 0,
            }}>
              <span style={{ display: 'inline-block', borderBottom: `6px solid ${CARD_COLORS[0]}` }}>ALL</span>
              <br />
              <span style={{ display: 'inline-block', borderBottom: `6px solid ${CARD_COLORS[1]}` }}>STORIES</span>
            </h1>
          </div>
          <p style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1.1rem', color: '#555', maxWidth: '480px', marginBottom: '2rem' }}>
            Every story from Kenyan teens who are changing the world.
          </p>
          {/* Stat badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {[
              { label: '24 Stories', color: '#FF6B35', tilt: '-2deg' },
              { label: '7 Categories', color: '#0047FF', tilt: '1.5deg' },
              { label: '100K+ Reads', color: '#DC2626', tilt: '-1deg' },
            ].map(({ label, color, tilt }) => (
              <div key={label} style={{
                background: color,
                color: '#fff',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 900,
                fontSize: '0.9rem',
                letterSpacing: '0.05em',
                padding: '8px 20px',
                border: '3px solid #000',
                transform: `rotate(${tilt})`,
                display: 'inline-block',
                boxShadow: '3px 3px 0 #000',
              }}>{label}</div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── CATEGORY FILTER ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        style={{ background: '#fff', padding: '2rem 1.5rem', borderBottom: '2px solid #000' }}>
        <div className="max-w-7xl mx-auto" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
          <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', color: '#999', letterSpacing: '0.2em', textTransform: 'uppercase', marginRight: '0.5rem' }}>FILTER:</span>
          {categories.map((cat, i) => {
            const isActive = activeCategory === cat.name;
            const chipColor = CARD_COLORS[i % CARD_COLORS.length];
            return (
              <button key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: '8px 18px',
                  border: `2px solid ${isActive ? chipColor : '#000'}`,
                  background: isActive ? chipColor : '#fff',
                  color: isActive ? '#fff' : '#000',
                  cursor: 'pointer',
                  transform: isActive ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.2s',
                  boxShadow: isActive ? `2px 2px 0 #000` : 'none',
                }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = chipColor; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = chipColor; } }}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#000'; e.currentTarget.style.borderColor = '#000'; } }}>
                {cat.name}
              </button>
            );
          })}
        </div>
      </motion.section>

      {/* ── ARTICLES GRID ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ background: '#fff', padding: '4rem 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
            {filteredArticles.map((article, i) => (
              <div key={article.id} style={{ width: 'clamp(280px, calc(33.333% - 27px), 400px)', minWidth: '280px', flex: '1 1 280px', maxWidth: '400px' }}>
                <GenZArtCard
                  article={article}
                  index={i}
                  liked={liked[article.id]}
                  onLike={handleLike}
                  onClick={() => navigate(`/genz/articles/${article.id}`)}
                />
              </div>
            ))}
          </div>

          {/* Load more */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                fontWeight: 900,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                padding: '14px 40px',
                border: '3px solid #FF6B35',
                background: '#fff',
                color: '#FF6B35',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '3px 3px 0 #FF6B35',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#FF6B35'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#FF6B35'; }}>
              LOAD MORE STORIES
            </button>
          </div>
        </div>
      </motion.section>

      {/* ── TRENDING BLOCK ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ background: '#0047FF', padding: '4rem 1.5rem', borderTop: '4px solid #000', borderBottom: '4px solid #000' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <Zap size={28} color="#FF6B35" fill="#FF6B35" />
            <h2 style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              color: '#fff',
              letterSpacing: '-1px',
              margin: 0,
            }}>MOST READ THIS WEEK</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {TRENDING.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{
                  background: '#fff',
                  border: '4px solid #000',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  boxShadow: '4px 4px 0 #000',
                }}>
                <span style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 900,
                  fontSize: '3rem',
                  color: item.color,
                  lineHeight: 1,
                  minWidth: '60px',
                }}>{String(item.rank).padStart(2, '0')}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    color: '#000',
                    margin: '0 0 4px',
                  }}>{item.title}</h3>
                  <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', color: '#666' }}>{item.reads}</span>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontFamily: '"Space Mono", monospace', fontSize: '10px', color: '#999' }}>
                    <Heart size={14} />
                  </button>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontFamily: '"Space Mono", monospace', fontSize: '10px', color: '#999' }}>
                    <Share2 size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── NEWSLETTER ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ background: '#FF6B35', padding: '4rem 1.5rem', borderBottom: '4px solid #000' }}>
        <div className="max-w-3xl mx-auto" style={{ textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: '#fff',
            letterSpacing: '-1px',
            margin: '0 0 0.75rem',
          }}>STAY IN THE LOOP</h2>
          <p style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.8)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '2rem',
          }}>NEW STORIES EVERY WEEK · NO SPAM · UNSUBSCRIBE ANYTIME</p>
          <div style={{ display: 'flex', gap: '0', maxWidth: '500px', margin: '0 auto' }}>
            <input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                flex: 1,
                padding: '14px 20px',
                fontFamily: '"Space Mono", monospace',
                fontSize: '11px',
                letterSpacing: '0.1em',
                border: '4px solid #000',
                borderRight: 'none',
                background: '#fff',
                color: '#000',
                outline: 'none',
              }}
            />
            <button
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '11px',
                fontWeight: 900,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '14px 28px',
                border: '4px solid #000',
                background: '#000',
                color: '#FF6B35',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#000'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#FF6B35'; }}>
              SUBSCRIBE
            </button>
          </div>
        </div>
      </motion.section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#000', borderTop: '4px solid #FF6B35', padding: '2rem 1.5rem' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem', fontWeight: 900, color: '#fff' }}>TEENDOM</p>
          <p style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '10px', color: '#555', letterSpacing: '0.1em' }}>© 2024 Teendom Africa · Empowering Young Citizens</p>
          <div style={{ display: 'flex', gap: '16px' }}>
            {['Instagram', 'Twitter', 'YouTube'].map(s => (
              <button key={s} style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#555', background: 'none', border: 'none', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.color = '#FF6B35'}
                onMouseLeave={e => e.currentTarget.style.color = '#555'}>{s}</button>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}
