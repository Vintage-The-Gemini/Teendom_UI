// SOFT MAXIMALISM — Teendom Awards Page
// Prestigious, editorial, typographic richness. Cream canvas. Bauhaus art elements.
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PF = '"Playfair Display", serif';
const SG = '"Space Grotesk", sans-serif';

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
  {
    name: 'Young Changemaker',
    description: 'Recognizing teens who have driven measurable change in their communities through grassroots initiatives and bold action.',
  },
  {
    name: 'Academic Excellence',
    description: 'Honoring outstanding academic achievement and intellectual curiosity that goes beyond the classroom.',
  },
  {
    name: 'Arts & Culture',
    description: 'Celebrating teens who express Kenya\'s rich heritage and evolving culture through music, visual art, writing, and performance.',
  },
  {
    name: 'Environmental Champion',
    description: 'Recognizing youth-led climate action, conservation efforts, and environmental stewardship across all 47 counties.',
  },
  {
    name: 'Entrepreneurship Award',
    description: 'For teens building businesses, solving real problems, and proving that age is no barrier to economic leadership.',
  },
  {
    name: 'Community Service',
    description: 'Honoring selfless dedication to community wellbeing through volunteering, mentorship, and social impact programs.',
  },
];

const NOMINEES = [
  {
    name: 'Amara Kimani',
    county: 'Nairobi County',
    category: 'YOUNG CHANGEMAKER',
    image: '/images/a..2.creative images for sections/hero section teens.png',
    bio: 'Founded a peer mental health support network reaching over 2,000 teens across Nairobi\'s secondary schools.',
  },
  {
    name: 'Jabari Mwangi',
    county: 'Mombasa County',
    category: 'ENTREPRENEURSHIP',
    image: '/images/a..2.creative images for sections/hero section teens.png',
    bio: 'Built a coastal waste recycling cooperative at age 16, employing 12 youth from his neighborhood.',
  },
  {
    name: 'Zuri Odhiambo',
    county: 'Kisumu County',
    category: 'ARTS & CULTURE',
    image: '/images/a..2.creative images for sections/hero section teens.png',
    bio: 'Her spoken word poetry on Lake Victoria\'s environmental crisis has been performed in 6 counties.',
  },
];

const PAST_WINNERS = [
  { name: 'Grace Mutua', county: 'Machakos', category: 'Young Changemaker' },
  { name: 'Brian Ochieng', county: 'Kisumu', category: 'Academic Excellence' },
  { name: 'Fatuma Hassan', county: 'Mombasa', category: 'Arts & Culture' },
  { name: 'Kevin Kariuki', county: 'Nairobi', category: 'Entrepreneurship' },
  { name: 'Purity Njeri', county: 'Nyeri', category: 'Environmental Champion' },
  { name: 'David Rotich', county: 'Eldoret', category: 'Community Service' },
  { name: 'Aisha Wanjiku', county: 'Nakuru', category: 'Young Changemaker' },
  { name: 'Samuel Otieno', county: 'Siaya', category: 'Academic Excellence' },
];

export default function SoftMaxAwards() {
  const navigate = useNavigate();
  const [nomineeForm, setNomineeForm] = useState({ name: '', county: '', category: '', reason: '' });

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
                style={{ fontFamily: SG, fontSize: '10px', fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#555', background: 'none', border: 'none', borderBottom: '2px solid transparent', cursor: 'pointer' }}
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

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section style={{ background: '#FDFCF5', position: 'relative', overflow: 'hidden' }}>
        {/* Red accent stripe at top */}
        <div style={{ height: '8px', background: '#DC2626', width: '100%' }} />

        <div style={{ display: 'flex', flexWrap: 'wrap', minHeight: '88vh' }}>
          {/* Left — typography panel */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              flex: '1 1 480px',
              background: '#FDFCF5',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '80px 60px 80px 48px',
            }}>
            <div style={{ marginBottom: '24px' }}>
              <span style={{ fontFamily: SG, fontSize: '9px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#DC2626', border: '2px solid #DC2626', padding: '4px 12px' }}>
                ANNUAL CEREMONY · 2026
              </span>
            </div>
            <h1 style={{ fontFamily: 'Anton, sans-serif', fontSize: 'clamp(4.5rem, 10vw, 9rem)', lineHeight: 0.88, color: '#000', letterSpacing: '-1px', marginBottom: '0' }}>
              TEENDOM
            </h1>
            <h1 style={{ fontFamily: 'Anton, sans-serif', fontSize: 'clamp(4.5rem, 10vw, 9rem)', lineHeight: 0.88, color: '#000', letterSpacing: '-1px', marginBottom: '0' }}>
              AWARDS
            </h1>
            <h1 style={{ fontFamily: 'Anton, sans-serif', fontSize: 'clamp(4.5rem, 10vw, 9rem)', lineHeight: 0.88, color: '#DC2626', letterSpacing: '-1px', marginBottom: '32px' }}>
              2026
            </h1>
            <div style={{ width: '64px', height: '5px', background: '#DC2626', marginBottom: '28px' }} />
            <p style={{ fontFamily: SG, fontSize: '1rem', color: '#444', lineHeight: 1.75, maxWidth: '440px' }}>
              Celebrating 100 exceptional teen changemakers across all 47 counties of Kenya. Nominated by their communities. Chosen by their peers.
            </p>
          </motion.div>

          {/* Right — hero image panel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{ flex: '1 1 360px', minHeight: '60vh', position: 'relative', borderLeft: '2px solid #000', overflow: 'hidden' }}>
            <img
              src="/images/a..2.creative images for sections/hero section teens.png"
              alt="Teendom Awards"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            {/* Editorial overlay tag */}
            <div style={{ position: 'absolute', bottom: '32px', left: '24px' }}>
              <div style={{ background: '#DC2626', padding: '10px 18px', display: 'inline-block' }}>
                <span style={{ fontFamily: SG, fontSize: '10px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#fff' }}>
                  47 COUNTIES
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── AWARD CATEGORIES ────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ background: '#FDFCF5', padding: '96px 24px', borderTop: '2px solid #000' }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ fontFamily: SG, fontSize: '9px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#aaa', border: '2px solid #ddd', padding: '4px 14px' }}>
              THE CATEGORIES
            </span>
            <h2 style={{ fontFamily: PF, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontStyle: 'italic', fontWeight: 900, color: '#000', lineHeight: 1.1, marginTop: '20px', letterSpacing: '-0.5px' }}>
              Six Ways to Win
            </h2>
            <div style={{ width: '48px', height: '3px', background: '#DC2626', margin: '16px auto 0' }} />
          </div>
          {/* 3×2 grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {AWARD_CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                style={{
                  border: '2px solid #000',
                  background: '#fff',
                  overflow: 'hidden',
                  transform: i % 2 === 0 ? 'rotate(1deg)' : 'rotate(-1deg)',
                  boxShadow: '4px 4px 0 #000',
                  cursor: 'pointer',
                }}
                whileHover={{ rotate: 0, scale: 1.02, transition: { duration: 0.25 } }}>
                {/* Abstract art header */}
                <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={ART_BACKGROUNDS[i % ART_BACKGROUNDS.length]}
                    alt={cat.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  {/* Category number sticker */}
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '12px',
                    fontFamily: PF,
                    fontSize: '2rem',
                    fontStyle: 'italic',
                    fontWeight: 900,
                    color: '#fff',
                    lineHeight: 1,
                    textShadow: '2px 2px 0 #000',
                  }}>
                    0{i + 1}
                  </div>
                </div>
                {/* Card body */}
                <div style={{ padding: '22px 22px 26px' }}>
                  <h3 style={{ fontFamily: 'Anton, sans-serif', fontSize: '1.3rem', color: '#000', lineHeight: 1.05, marginBottom: '10px', letterSpacing: '0.02em' }}>
                    {cat.name.toUpperCase()}
                  </h3>
                  <p style={{ fontFamily: SG, fontSize: '12px', color: '#555', lineHeight: 1.7 }}>
                    {cat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── NOMINEES SPOTLIGHT ──────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        style={{ background: '#FDFCF5', padding: '96px 24px', borderTop: '2px solid #000' }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ fontFamily: SG, fontSize: '9px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#DC2626', border: '2px solid #DC2626', padding: '4px 14px' }}>
              CLASS OF 2026
            </span>
            <h2 style={{ fontFamily: PF, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontStyle: 'italic', fontWeight: 900, color: '#000', lineHeight: 1.1, marginTop: '20px', letterSpacing: '-0.5px' }}>
              Nominees Spotlight
            </h2>
            <div style={{ width: '48px', height: '3px', background: '#DC2626', margin: '16px auto 0' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            {NOMINEES.map((nominee, i) => (
              <motion.div
                key={nominee.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                style={{
                  border: '2px solid #000',
                  background: '#fff',
                  transform: i % 2 === 0 ? 'rotate(1.2deg)' : 'rotate(-1.2deg)',
                  boxShadow: '6px 6px 0 #000',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
                whileHover={{ rotate: 0, scale: 1.02, transition: { duration: 0.25 } }}>
                {/* Nominee image */}
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={nominee.image}
                    alt={nominee.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  {/* Category badge */}
                  <div style={{ position: 'absolute', top: '12px', left: '12px', background: '#DC2626', padding: '4px 10px' }}>
                    <span style={{ fontFamily: SG, fontSize: '8px', fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#fff' }}>
                      {nominee.category}
                    </span>
                  </div>
                </div>
                {/* Nominee info */}
                <div style={{ padding: '24px 22px 26px' }}>
                  <h3 style={{ fontFamily: PF, fontSize: '1.3rem', fontStyle: 'italic', fontWeight: 900, color: '#000', marginBottom: '6px' }}>
                    {nominee.name}
                  </h3>
                  <p style={{ fontFamily: SG, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#DC2626', marginBottom: '12px' }}>
                    {nominee.county}
                  </p>
                  <p style={{ fontFamily: SG, fontSize: '12px', color: '#555', lineHeight: 1.7 }}>
                    {nominee.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── NOMINATE SOMEONE ────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ background: '#FDFCF5', padding: '96px 24px', borderTop: '2px solid #000' }}>
        <div className="max-w-2xl mx-auto" style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontFamily: SG, fontSize: '9px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#aaa', border: '2px solid #ddd', padding: '4px 14px' }}>
              NOMINATIONS OPEN
            </span>
          </div>
          <h2 style={{ fontFamily: PF, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontStyle: 'italic', fontWeight: 900, color: '#000', lineHeight: 1.1, letterSpacing: '-0.5px', marginBottom: '16px' }}>
            Know a Teen Changemaker?
          </h2>
          <div style={{ width: '48px', height: '3px', background: '#DC2626', margin: '0 auto 24px' }} />
          <p style={{ fontFamily: SG, fontSize: '14px', color: '#555', lineHeight: 1.7, marginBottom: '48px' }}>
            Nominations are open to all Kenyan residents. Tell us about a teen who is making a real difference — in their school, county, or the country.
          </p>

          {/* Nomination form */}
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { label: 'NOMINEE\'S FULL NAME', placeholder: 'Full name of the teen', type: 'text' },
              { label: 'COUNTY', placeholder: 'Their county', type: 'text' },
            ].map(field => (
              <div key={field.label}>
                <label style={{ fontFamily: SG, fontSize: '9px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#000', display: 'block', marginBottom: '6px' }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  style={{ width: '100%', padding: '14px 16px', fontFamily: SG, fontSize: '13px', color: '#000', background: '#fff', border: '2px solid #000', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
            ))}

            <div>
              <label style={{ fontFamily: SG, fontSize: '9px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#000', display: 'block', marginBottom: '6px' }}>
                AWARD CATEGORY
              </label>
              <select
                style={{ width: '100%', padding: '14px 16px', fontFamily: SG, fontSize: '13px', color: '#000', background: '#fff', border: '2px solid #000', outline: 'none', appearance: 'none', cursor: 'pointer', boxSizing: 'border-box' }}>
                <option value="">Select a category</option>
                {AWARD_CATEGORIES.map(cat => (
                  <option key={cat.name} value={cat.name}>{cat.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ fontFamily: SG, fontSize: '9px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#000', display: 'block', marginBottom: '6px' }}>
                REASON FOR NOMINATION
              </label>
              <textarea
                placeholder="Tell us what makes this teen extraordinary..."
                rows={5}
                style={{ width: '100%', padding: '14px 16px', fontFamily: SG, fontSize: '13px', color: '#000', background: '#fff', border: '2px solid #000', outline: 'none', resize: 'vertical', boxSizing: 'border-box', lineHeight: 1.6 }}
              />
            </div>

            <button
              style={{ fontFamily: SG, fontSize: '11px', fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 32px', border: '2px solid #DC2626', background: '#DC2626', color: '#fff', cursor: 'pointer', marginTop: '8px', width: '100%' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#b91c1c'; e.currentTarget.style.borderColor = '#b91c1c'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#DC2626'; e.currentTarget.style.borderColor = '#DC2626'; }}>
              SUBMIT NOMINATION
            </button>
          </div>
        </div>
      </motion.section>

      {/* ── PAST WINNERS TICKER ─────────────────────────────────────────── */}
      <section style={{ background: '#1C1C1C', borderTop: '2px solid #000', padding: '32px 0', overflow: 'hidden' }}>
        <div style={{ marginBottom: '16px', textAlign: 'center' }}>
          <span style={{ fontFamily: SG, fontSize: '9px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#555' }}>
            PAST WINNERS
          </span>
        </div>
        {/* Static marquee row */}
        <div style={{ display: 'flex', overflow: 'hidden', position: 'relative' }}>
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
            style={{ display: 'flex', gap: '0', whiteSpace: 'nowrap', flexShrink: 0 }}>
            {/* Doubled for seamless loop */}
            {[...PAST_WINNERS, ...PAST_WINNERS].map((winner, i) => (
              <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0' }}>
                <span style={{ fontFamily: SG, fontSize: '11px', fontWeight: 700, color: '#fff', letterSpacing: '0.05em', padding: '0 20px' }}>
                  {winner.name}
                </span>
                <span style={{ fontFamily: SG, fontSize: '10px', color: '#DC2626', letterSpacing: '0.1em' }}>
                  {winner.county}
                </span>
                <span style={{ fontFamily: SG, fontSize: '10px', color: '#555', padding: '0 16px 0 10px', letterSpacing: '0.05em' }}>
                  · {winner.category} ·
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

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
