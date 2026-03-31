// BRIGHT GEN-Z — Teendom Awards Page
// Celebratory, colorful, high energy, polaroid nominee cards
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Trophy, Star, Zap } from 'lucide-react';

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

const AWARD_CATEGORIES = [
  { name: 'YOUNG CHANGEMAKER', description: 'For the teen driving social impact in their community through bold action and innovation.', art: ART_BACKGROUNDS[0] },
  { name: 'ACADEMIC EXCELLENCE', description: 'Recognizing outstanding academic achievement and intellectual curiosity beyond the classroom.', art: ART_BACKGROUNDS[1] },
  { name: 'ARTS & CULTURE', description: 'Celebrating teens who use creative expression to shape culture, tell stories, and inspire.', art: ART_BACKGROUNDS[2] },
  { name: 'ENVIRONMENTAL CHAMPION', description: 'Honoring young people leading the charge on climate action and environmental sustainability.', art: ART_BACKGROUNDS[3] },
  { name: 'ENTREPRENEURSHIP', description: 'For the teen founder, builder, and problem-solver turning ideas into real ventures.', art: ART_BACKGROUNDS[4] },
  { name: 'COMMUNITY SERVICE', description: 'Recognizing selfless dedication to uplifting others through volunteering and community work.', art: ART_BACKGROUNDS[5] },
];

const NOMINEES = [
  {
    name: 'Zawadi Okonkwo',
    county: 'Nairobi County',
    category: 'YOUNG CHANGEMAKER',
    fire: 1248,
    photo: '/images/a..2.creative images for sections/dark fasion girl.png',
    color: '#FF6B35',
    tilt: '-1.5deg',
  },
  {
    name: 'Kofi Mutua',
    county: 'Kisumu County',
    category: 'ENTREPRENEURSHIP',
    fire: 987,
    photo: '/images/a..2.creative images for sections/bright genz boy.png',
    color: '#0047FF',
    tilt: '2deg',
  },
  {
    name: 'Amina Wachira',
    county: 'Mombasa County',
    category: 'ENVIRONMENTAL CHAMPION',
    fire: 1103,
    photo: '/images/a..2.creative images for sections/minimalistic boy.png',
    color: '#0047FF',
    tilt: '-1deg',
  },
];

const TIMELINE = [
  { step: '01', title: 'Nominations Open', date: 'APR 1', color: '#FF6B35' },
  { step: '02', title: 'Shortlisting', date: 'APR 15', color: '#0047FF' },
  { step: '03', title: 'Public Vote', date: 'MAY 1', color: '#DC2626' },
  { step: '04', title: 'Ceremony', date: 'JUN 5', color: '#0047FF' },
];

export default function BrightZineAwards() {
  const navigate = useNavigate();
  const [votes, setVotes] = useState({});
  const [formData, setFormData] = useState({ name: '', county: '', category: '', why: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleVote = (name) => {
    setVotes(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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

      {/* ── HERO ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ background: '#fff', padding: '5rem 1.5rem 3rem', borderBottom: '4px solid #000' }}>
        <div className="max-w-5xl mx-auto" style={{ textAlign: 'center' }}>
          {/* Nominations open badge — tilted */}
          <div style={{ display: 'inline-block', transform: 'rotate(-2deg)', marginBottom: '2rem' }}>
            <div style={{
              background: '#FF6B35',
              border: '3px solid #000',
              padding: '8px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '3px 3px 0 #000',
            }}>
              <Zap size={14} color="#fff" fill="#fff" />
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: 900, letterSpacing: '0.25em', color: '#fff', textTransform: 'uppercase' }}>NOMINATIONS OPEN</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(4rem, 12vw, 9rem)',
            lineHeight: 0.88,
            letterSpacing: '-4px',
            margin: '0 0 0.5rem',
          }}>
            <span style={{ color: CARD_COLORS[0], display: 'block' }}>TEENDOM</span>
            <span style={{ color: CARD_COLORS[1], display: 'block' }}>AWARDS</span>
          </h1>

          {/* 2026 — outlined text */}
          <div style={{ margin: '0.5rem 0 1.5rem' }}>
            <span style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              letterSpacing: '-2px',
              WebkitTextStroke: '3px #000',
              color: 'transparent',
              display: 'inline-block',
            }}>2026</span>
          </div>

          {/* Subtitle */}
          <p style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: '1.1rem',
            color: '#444',
            maxWidth: '540px',
            margin: '0 auto 3rem',
            lineHeight: 1.6,
          }}>
            Celebrating 100 exceptional teen changemakers across all 47 counties of Kenya.
          </p>

          {/* Full-width hero image strip */}
          <div style={{
            border: '4px solid #000',
            overflow: 'hidden',
            height: '280px',
            boxShadow: '6px 6px 0 #000',
          }}>
            <img
              src="/images/a..2.creative images for sections/hero section teens.png"
              alt="Teendom Award nominees"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
        </div>
      </motion.section>

      {/* ── AWARD CATEGORIES ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ background: '#fafafa', padding: '5rem 1.5rem', borderBottom: '4px solid #000' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', letterSpacing: '0.3em', color: '#999', textTransform: 'uppercase' }}>SIX AWARD CATEGORIES</span>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-1px', color: '#000', margin: '0.5rem 0 0' }}>WHAT WE CELEBRATE</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
            {AWARD_CATEGORIES.map((cat, i) => {
              const color = CARD_COLORS[i % CARD_COLORS.length];
              const tilt = i % 3 === 0 ? '1.5deg' : i % 3 === 1 ? '-1deg' : '0.5deg';
              return (
                <motion.div key={cat.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ rotate: 0, scale: 1.03, transition: { duration: 0.2 } }}
                  style={{
                    background: '#fff',
                    border: `4px solid ${color}`,
                    maxWidth: '320px',
                    flex: '1 1 280px',
                    transform: `rotate(${tilt})`,
                    boxShadow: `4px 4px 0 ${color}`,
                    cursor: 'pointer',
                    overflow: 'hidden',
                  }}>
                  {/* Abstract art header */}
                  <div style={{ height: '100px', position: 'relative', overflow: 'hidden' }}>
                    <img src={cat.art} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    {/* Category badge */}
                    <div style={{
                      position: 'absolute',
                      top: '8px',
                      left: '8px',
                      background: color,
                      padding: '4px 10px',
                      border: '2px solid #000',
                    }}>
                      <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '8px', color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700 }}>
                        {cat.name.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                  {/* Card content */}
                  <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
                    <h3 style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 900,
                      fontSize: '1.05rem',
                      color: '#000',
                      letterSpacing: '-0.3px',
                      margin: '0 0 0.6rem',
                      lineHeight: 1.15,
                    }}>{cat.name}</h3>
                    <p style={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontSize: '0.85rem',
                      color: '#555',
                      lineHeight: 1.6,
                      margin: 0,
                    }}>{cat.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ── NOMINEES SPOTLIGHT ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ background: '#FF6B35', padding: '5rem 1.5rem', borderBottom: '4px solid #000' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ marginBottom: '3rem' }}>
            <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase' }}>FEATURED NOMINEES</span>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-1px', color: '#fff', margin: '0.5rem 0 0' }}>CLASS OF 2026</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem' }}>
            {NOMINEES.map((nominee, i) => {
              const isVoted = votes[nominee.name];
              return (
                <motion.div key={nominee.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  whileHover={{ rotate: 0, scale: 1.03, transition: { duration: 0.25 } }}
                  style={{
                    background: '#fff',
                    border: '4px solid #000',
                    padding: '10px 10px 1.5rem 10px',
                    maxWidth: '280px',
                    flex: '1 1 240px',
                    transform: `rotate(${nominee.tilt})`,
                    boxShadow: '6px 6px 0 #000',
                    cursor: 'pointer',
                  }}>
                  {/* Color accent top bar */}
                  <div style={{ height: '6px', background: nominee.color, margin: '-10px -10px 0', marginBottom: '10px' }} />
                  {/* Photo */}
                  <div style={{ height: '240px', overflow: 'hidden', marginBottom: '1rem', border: '2px solid rgba(0,0,0,0.1)' }}>
                    <img src={nominee.photo} alt={nominee.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                  </div>
                  {/* Info */}
                  <div style={{ padding: '0 0.5rem' }}>
                    <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: '1.1rem', color: '#000', margin: '0 0 0.4rem' }}>{nominee.name}</p>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                      <div style={{ background: nominee.color, padding: '2px 10px' }}>
                        <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '9px', color: '#fff', letterSpacing: '0.08em' }}>{nominee.county}</span>
                      </div>
                      <div style={{ background: '#000', padding: '2px 8px' }}>
                        <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '8px', color: '#fff', letterSpacing: '0.05em' }}>{nominee.category}</span>
                      </div>
                    </div>
                    {/* Vote button */}
                    <button
                      onClick={() => handleVote(nominee.name)}
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '11px',
                        fontWeight: 900,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        padding: '8px 20px',
                        border: `3px solid ${isVoted ? nominee.color : '#000'}`,
                        background: isVoted ? nominee.color : '#fff',
                        color: isVoted ? '#fff' : '#000',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        width: '100%',
                        justifyContent: 'center',
                      }}>
                      🔥 {nominee.fire + (isVoted ? 1 : 0)} {isVoted ? 'VOTED' : 'VOTE'}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ── NOMINATE SOMEONE ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ background: '#fff', padding: '5rem 1.5rem', borderBottom: '4px solid #000' }}>
        <div className="max-w-6xl mx-auto" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          {/* Left: tilted heading */}
          <div>
            <h2 style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              letterSpacing: '-2px',
              color: '#000',
              lineHeight: 0.9,
              margin: '0 0 1.5rem',
              transform: 'rotate(-1.5deg)',
              display: 'inline-block',
            }}>
              KNOW A<br />
              <span style={{ color: '#FF6B35' }}>CHANGEMAKER?</span>
            </h2>
            <p style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: '1rem',
              color: '#555',
              lineHeight: 1.7,
              maxWidth: '360px',
            }}>
              Nominate any teen between 14–22 from any county in Kenya. Tell us their story and why they deserve to be celebrated. Nominations close April 14, 2026.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Open to all 47 counties', 'Multiple categories per person', 'Self-nominations accepted', 'No entry fee'].map((pt, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '8px', height: '8px', background: CARD_COLORS[i % CARD_COLORS.length], flexShrink: 0 }} />
                  <span style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '0.9rem', color: '#333' }}>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          {submitted ? (
            <div style={{
              background: '#FF6B35',
              border: '4px solid #000',
              padding: '2.5rem',
              boxShadow: '6px 6px 0 #000',
              textAlign: 'center',
            }}>
              <Trophy size={40} color="#fff" style={{ marginBottom: '1rem' }} />
              <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: '1.5rem', color: '#fff', margin: '0 0 0.5rem' }}>NOMINATION RECEIVED!</p>
              <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.1em' }}>We'll review and follow up within 72 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { key: 'name', label: "NOMINEE'S FULL NAME", type: 'text' },
                { key: 'county', label: 'THEIR COUNTY', type: 'text' },
                { key: 'category', label: 'AWARD CATEGORY', type: 'text' },
              ].map(({ key, label, type }) => (
                <input
                  key={key}
                  type={type}
                  placeholder={label}
                  value={formData[key]}
                  onChange={e => setFormData(prev => ({ ...prev, [key]: e.target.value }))}
                  style={{
                    padding: '14px 18px',
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    border: '4px solid #000',
                    background: '#fff',
                    color: '#000',
                    outline: 'none',
                  }}
                />
              ))}
              <textarea
                placeholder="WHY DO THEY DESERVE THIS AWARD?"
                value={formData.why}
                onChange={e => setFormData(prev => ({ ...prev, why: e.target.value }))}
                rows={4}
                style={{
                  padding: '14px 18px',
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  border: '4px solid #000',
                  background: '#fff',
                  color: '#000',
                  outline: 'none',
                  resize: 'vertical',
                }}
              />
              <button
                type="submit"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '12px',
                  fontWeight: 900,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  padding: '16px 32px',
                  border: '4px solid #000',
                  background: '#FF6B35',
                  color: '#fff',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: '4px 4px 0 #000',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#FF6B35'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#FF6B35'; e.currentTarget.style.color = '#fff'; }}>
                SUBMIT NOMINATION
              </button>
            </form>
          )}
        </div>
      </motion.section>

      {/* ── TIMELINE ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ background: '#0047FF', padding: '5rem 1.5rem', borderBottom: '4px solid #000' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>WHAT HAPPENS NEXT</span>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-1px', color: '#fff', margin: '0.5rem 0 0' }}>THE JOURNEY</h2>
          </div>

          {/* Timeline steps — horizontal row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0', position: 'relative' }}>
            {/* Connecting line (desktop) */}
            <div style={{
              position: 'absolute',
              top: '40px',
              left: '10%',
              right: '10%',
              height: '4px',
              background: 'rgba(255,255,255,0.2)',
              zIndex: 0,
            }} />

            {TIMELINE.map((item, i) => (
              <motion.div key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                style={{
                  flex: '1 1 200px',
                  maxWidth: '260px',
                  textAlign: 'center',
                  padding: '0 1rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                {/* Step number badge */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: item.color,
                  border: '4px solid #000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                  boxShadow: '4px 4px 0 #000',
                }}>
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: '1.75rem', color: '#fff', lineHeight: 1 }}>{item.step}</span>
                </div>
                {/* Step title */}
                <h3 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 900,
                  fontSize: '1.1rem',
                  color: '#fff',
                  letterSpacing: '-0.3px',
                  margin: '0 0 0.5rem',
                  lineHeight: 1.2,
                }}>{item.title}</h3>
                {/* Date */}
                <p style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '12px',
                  color: item.color,
                  letterSpacing: '0.1em',
                  margin: 0,
                  fontWeight: 700,
                }}>{item.date}</p>
                {/* Connector arrow (between steps) */}
                {i < TIMELINE.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    top: '36px',
                    right: '-10px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 900,
                    fontSize: '1.5rem',
                    color: 'rgba(255,255,255,0.3)',
                    zIndex: 2,
                  }}>→</div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button
              onClick={() => {
                const section = document.getElementById('nominate-section');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                fontWeight: 900,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                padding: '16px 40px',
                border: '4px solid #fff',
                background: 'transparent',
                color: '#fff',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '4px 4px 0 rgba(255,255,255,0.3)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0047FF'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff'; }}>
              NOMINATE NOW — CLOSES APR 14
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
