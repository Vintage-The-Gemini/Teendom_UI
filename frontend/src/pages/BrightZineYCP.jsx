// BRIGHT GEN-Z — Young Citizens Program Page
// Bright, energetic, polaroid frames, civic energy, Gen-Z vibes
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Zap, Users, BookOpen, Award } from 'lucide-react';

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

const TRACKS = [
  {
    icon: BookOpen,
    number: 'A',
    name: 'Know Your Rights',
    description: 'Understand your constitutional rights, civic duties, and how Kenya\'s governance systems work for you.',
    color: '#FF6B35',
    art: ART_BACKGROUNDS[0],
    points: [
      'The Bill of Rights and what it means for teens',
      'How to access government services and hold leaders accountable',
      'Legal literacy: knowing your rights at school and home',
      'Case studies from Kenyan youth who stood up and won',
    ],
  },
  {
    icon: Users,
    number: 'B',
    name: 'Civic Engagement',
    description: 'Learn how to participate in democracy, community forums, and local governance at every level.',
    color: '#0047FF',
    art: ART_BACKGROUNDS[1],
    points: [
      'How county governments work and where teen voices fit',
      'Running for student leadership and youth councils',
      'How to write petitions, letters to leaders, and proposals',
      'Digital civic tools and how to use social media responsibly',
    ],
  },
  {
    icon: Zap,
    number: 'C',
    name: 'Community Leadership',
    description: 'Build real projects that solve real problems in your community — and lead people to make it happen.',
    color: '#0047FF',
    art: ART_BACKGROUNDS[3],
    points: [
      'Project design: from idea to impact in 90 days',
      'Building teams, raising funds, and staying accountable',
      'Communication skills: public speaking and storytelling',
      'Mentorship from Teendom Alumni across 47 counties',
    ],
  },
];

const VOICES = [
  {
    name: 'Aisha Mwende',
    county: 'Mombasa County',
    quote: 'YCP gave me the language to talk to my county rep — and he actually listened. I was 16. It changed everything.',
    photo: '/images/a..2.creative images for sections/dark fasion girl.png',
    color: '#FF6B35',
    tilt: '-2deg',
  },
  {
    name: 'Brian Omondi',
    county: 'Kisumu County',
    quote: 'I joined thinking I\'d learn facts about government. I left with a project that got 200 kids in my estate clean water.',
    photo: '/images/a..2.creative images for sections/bright genz boy.png',
    color: '#0047FF',
    tilt: '1.5deg',
  },
  {
    name: 'Zawadi Njeri',
    county: 'Nakuru County',
    quote: 'The best part? Every facilitator looked like me. Teens teaching teens. That\'s the real power of Teendom.',
    photo: '/images/a..2.creative images for sections/minimalistic boy.png',
    color: '#0047FF',
    tilt: '-1deg',
  },
];

export default function BrightZineYCP() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', county: '' });
  const [submitted, setSubmitted] = useState(false);

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
        style={{ background: '#fff', padding: '5rem 1.5rem 4rem', borderBottom: '4px solid #000', position: 'relative', overflow: 'hidden' }}>
        {/* Abstract paint splatter — very low opacity bg texture */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `url("/images/a.1.abstract art background/download (18).jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
        }} />
        <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center' }}>
            {/* Left: Heading + stats */}
            <div>
              <div style={{ marginBottom: '0.75rem' }}>
                <span style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '11px',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#999',
                }}>YOUNG CITIZENS PROGRAM</span>
              </div>
              <h1 style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(3.5rem, 9vw, 7rem)',
                lineHeight: 0.9,
                letterSpacing: '-3px',
                color: '#000',
                margin: '0 0 1.5rem',
              }}>
                JOIN THE<br />
                <span style={{ color: '#FF6B35' }}>MOVEMENT</span>
              </h1>
              <p style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: '1.1rem',
                color: '#444',
                maxWidth: '420px',
                marginBottom: '2.5rem',
                lineHeight: 1.6,
              }}>
                A 12-week program for Kenya's most ambitious teens. Learn your rights, build civic power, and lead your community to change.
              </p>

              {/* Stats bar */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {[
                  { label: '2500+ Members', color: '#FF6B35' },
                  { label: '47 Counties', color: '#0047FF' },
                  { label: '3 Tracks', color: '#0047FF' },
                ].map(({ label, color }, i) => (
                  <div key={label} style={{
                    border: `3px solid ${color}`,
                    padding: '10px 20px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    color: '#000',
                    letterSpacing: '0.02em',
                    background: '#fff',
                    boxShadow: `3px 3px 0 ${color}`,
                  }}>{label}</div>
                ))}
              </div>
            </div>

            {/* Right: Polaroid hero image */}
            <div style={{
              background: '#fff',
              padding: '10px 10px 36px 10px',
              border: '4px solid #FF6B35',
              boxShadow: '8px 8px 0 #000',
              transform: 'rotate(2.5deg)',
              maxWidth: '280px',
              flexShrink: 0,
            }}>
              <img
                src="/images/a..2.creative images for sections/hero section teens.png"
                alt="Teens at Teendom YCP"
                style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '3/4' }}
              />
              <p style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '10px',
                textAlign: 'center',
                color: '#999',
                marginTop: '8px',
                letterSpacing: '0.1em',
              }}>YCP COHORT 2024</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── WHAT IS YCP — 3 tilted info cards ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ background: '#fff', padding: '5rem 1.5rem', borderBottom: '4px solid #000' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', letterSpacing: '0.3em', color: '#999', textTransform: 'uppercase' }}>WHAT WE DO</span>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-1px', color: '#000', margin: '0.5rem 0 0' }}>THREE TRACKS. ONE MISSION.</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem' }}>
            {TRACKS.map((track, i) => {
              const Icon = track.icon;
              const tilt = i % 2 === 0 ? `rotate(${1.5 - i * 0.5}deg)` : 'rotate(-1.2deg)';
              return (
                <motion.div key={track.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  whileHover={{ rotate: 0, scale: 1.03, transition: { duration: 0.25 } }}
                  style={{
                    background: '#fff',
                    border: `4px solid ${track.color}`,
                    padding: '2rem 1.75rem',
                    maxWidth: '320px',
                    flex: '1 1 280px',
                    transform: tilt,
                    boxShadow: `5px 5px 0 ${track.color}`,
                    cursor: 'pointer',
                  }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <div style={{ background: track.color, padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={20} color="#fff" />
                    </div>
                    <span style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: track.color,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                    }}>TRACK {track.number}</span>
                  </div>
                  <h3 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 900,
                    fontSize: '1.5rem',
                    color: '#000',
                    letterSpacing: '-0.5px',
                    margin: '0 0 0.75rem',
                    lineHeight: 1.1,
                  }}>{track.name}</h3>
                  <p style={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: '0.9rem',
                    color: '#555',
                    lineHeight: 1.6,
                    margin: 0,
                  }}>{track.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ── THREE TRACKS DETAIL ── */}
      {TRACKS.map((track, i) => {
        const isEven = i % 2 === 0;
        return (
          <motion.section key={track.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ background: isEven ? '#fff' : '#fafafa', borderBottom: '4px solid #000' }}>
            {/* Color band top */}
            <div style={{ background: track.color, height: '12px', width: '100%' }} />
            {/* Abstract art strip */}
            <div style={{ height: '180px', position: 'relative', overflow: 'hidden', borderBottom: '4px solid #000' }}>
              <img src={track.art} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.05)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }} />
              <div style={{ position: 'absolute', bottom: '1rem', left: '1.5rem' }}>
                <span style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '11px',
                  letterSpacing: '0.3em',
                  color: 'rgba(255,255,255,0.7)',
                  textTransform: 'uppercase',
                }}>TRACK {track.number}</span>
              </div>
            </div>
            <div className="max-w-7xl mx-auto" style={{ padding: '3.5rem 1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                <div>
                  <h2 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 900,
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    letterSpacing: '-1px',
                    color: '#000',
                    margin: '0 0 1rem',
                    lineHeight: 1,
                  }}>{track.name.toUpperCase()}</h2>
                  <p style={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: '1rem',
                    color: '#555',
                    lineHeight: 1.7,
                  }}>{track.description}</p>
                </div>
                <div>
                  <p style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '10px',
                    letterSpacing: '0.2em',
                    color: track.color,
                    textTransform: 'uppercase',
                    marginBottom: '1rem',
                  }}>WHAT YOU LEARN</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem' }}>
                    {track.points.map((pt, j) => (
                      <li key={j} style={{
                        fontFamily: '"Space Grotesk", sans-serif',
                        fontSize: '0.95rem',
                        color: '#333',
                        padding: '0.75rem 0',
                        borderBottom: j < track.points.length - 1 ? '1px solid #eee' : 'none',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        lineHeight: 1.5,
                      }}>
                        <span style={{ color: track.color, fontWeight: 900, marginTop: '2px', flexShrink: 0 }}>→</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <button
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '11px',
                      fontWeight: 900,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      padding: '12px 28px',
                      border: `3px solid ${track.color}`,
                      background: track.color,
                      color: '#fff',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      boxShadow: `3px 3px 0 #000`,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.borderColor = '#000'; e.currentTarget.style.color = track.color; }}
                    onMouseLeave={e => { e.currentTarget.style.background = track.color; e.currentTarget.style.borderColor = track.color; e.currentTarget.style.color = '#fff'; }}>
                    APPLY FOR TRACK {track.number}
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        );
      })}

      {/* ── MEMBER VOICES ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ background: '#fff', padding: '5rem 1.5rem', borderBottom: '4px solid #000' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', letterSpacing: '0.3em', color: '#999', textTransform: 'uppercase' }}>ALUMNI</span>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-1px', color: '#000', margin: '0.5rem 0 0' }}>WHAT THEY SAY</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem' }}>
            {VOICES.map((voice, i) => (
              <motion.div key={voice.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ rotate: 0, scale: 1.03, transition: { duration: 0.25 } }}
                style={{
                  background: '#fff',
                  border: `4px solid ${voice.color}`,
                  padding: '10px 10px 1.75rem 10px',
                  maxWidth: '300px',
                  flex: '1 1 260px',
                  transform: `rotate(${voice.tilt})`,
                  boxShadow: '5px 5px 0 #000',
                  cursor: 'pointer',
                }}>
                {/* Photo */}
                <div style={{ height: '220px', overflow: 'hidden', marginBottom: '1.25rem', border: '2px solid rgba(0,0,0,0.1)' }}>
                  <img src={voice.photo} alt={voice.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                {/* Name + county */}
                <div style={{ padding: '0 0.5rem' }}>
                  <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: '1.1rem', color: '#000', margin: '0 0 4px' }}>{voice.name}</p>
                  <div style={{ display: 'inline-block', background: voice.color, padding: '2px 10px', marginBottom: '0.75rem' }}>
                    <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '9px', color: '#fff', letterSpacing: '0.1em' }}>{voice.county}</span>
                  </div>
                  <p style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontStyle: 'italic',
                    fontSize: '0.9rem',
                    color: '#333',
                    lineHeight: 1.6,
                    margin: '0 0 1rem',
                  }}>"{voice.quote}"</p>
                  {/* Reaction buttons */}
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {['🔥', '💯', '👏'].map((r, j) => (
                      <button key={j} style={{
                        fontFamily: '"Space Mono", monospace',
                        fontSize: '11px',
                        padding: '4px 10px',
                        border: `2px solid ${voice.color}`,
                        background: '#fff',
                        color: '#000',
                        cursor: 'pointer',
                        transition: 'all 0.15s',
                      }}
                        onMouseEnter={e => e.currentTarget.style.background = voice.color}
                        onMouseLeave={e => e.currentTarget.style.background = '#fff'}>{r}</button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── JOIN FORM ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ background: '#0047FF', padding: '5rem 1.5rem', borderBottom: '4px solid #000' }}>
        <div className="max-w-2xl mx-auto" style={{ textAlign: 'center' }}>
          <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>APPLICATIONS OPEN NOW</span>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            color: '#fff',
            letterSpacing: '-2px',
            margin: '0.75rem 0 1rem',
            lineHeight: 1,
          }}>APPLY NOW</h2>
          <p style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: '11px',
            color: 'rgba(255,255,255,0.65)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '2.5rem',
          }}>FREE · OPEN TO TEENS 14–22 · ALL 47 COUNTIES</p>

          {submitted ? (
            <div style={{
              background: '#FF6B35',
              border: '4px solid #000',
              padding: '2.5rem',
              boxShadow: '6px 6px 0 #000',
            }}>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: '1.5rem', color: '#fff', margin: '0 0 0.5rem' }}>YOU'RE IN THE QUEUE!</p>
              <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.1em' }}>We'll email you within 48 hours with next steps.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { key: 'name', label: 'YOUR FULL NAME', type: 'text' },
                { key: 'email', label: 'YOUR EMAIL ADDRESS', type: 'email' },
                { key: 'county', label: 'YOUR COUNTY', type: 'text' },
              ].map(({ key, label, type }) => (
                <input
                  key={key}
                  type={type}
                  placeholder={label}
                  value={formData[key]}
                  onChange={e => setFormData(prev => ({ ...prev, [key]: e.target.value }))}
                  style={{
                    padding: '16px 20px',
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
              <button
                type="submit"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '12px',
                  fontWeight: 900,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  padding: '18px 40px',
                  border: '4px solid #000',
                  background: '#fff',
                  color: '#0047FF',
                  cursor: 'pointer',
                  marginTop: '0.5rem',
                  transition: 'all 0.2s',
                  boxShadow: '4px 4px 0 #000',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#FF6B35'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0047FF'; }}>
                JOIN THE PROGRAM
              </button>
            </form>
          )}
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
