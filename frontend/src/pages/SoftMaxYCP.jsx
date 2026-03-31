// SOFT MAXIMALISM — Young Citizens Program Page
// Editorial, layered, rich typography. Cream canvas. Bauhaus art elements.
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

const TRACKS = [
  {
    name: 'TRACK A',
    subtitle: 'Know Your Rights',
    description: 'Deep constitutional literacy, civic education workshops, and structured research programs. Graduate with knowledge most adults do not have about their own rights.',
    label: 'CIVICS & LAW',
    art: ART_BACKGROUNDS[4],
    tilt: 1.2,
  },
  {
    name: 'TRACK B',
    subtitle: 'Civic Engagement',
    description: 'Public speaking, community organizing, and mentorship pipelines. Learn how to engage local government, attend public participation forums, and make your voice count.',
    label: 'ADVOCACY',
    art: ART_BACKGROUNDS[3],
    tilt: -1.2,
  },
  {
    name: 'TRACK C',
    subtitle: 'Community Leadership',
    description: 'Become the teen leader your community deserves. Trained in project management, peer mentorship, and social enterprise — ready to lead change from the ground up.',
    label: 'LEADERSHIP',
    art: ART_BACKGROUNDS[2],
    tilt: 1.2,
  },
];

const TESTIMONIALS = [
  {
    quote: "I never thought a teenager could have a say in how their county is run. The YCP showed me that the Constitution is not a document for lawyers — it is a tool for all of us.",
    name: "Amara Kimani",
    county: "Nairobi County",
  },
  {
    quote: "When I stood up at our school senate and cited my constitutional rights, the deputy principal actually listened. That was the day I understood what civic power means.",
    name: "Jabari Mwangi",
    county: "Mombasa County",
  },
  {
    quote: "I used to think leadership was for adults in suits. Now I run the student welfare committee and we changed three school policies. We are not waiting anymore.",
    name: "Zuri Otieno",
    county: "Kisumu County",
  },
];

export default function SoftMaxYCP() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', county: '' });

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
      <section style={{ minHeight: '90vh', display: 'flex', flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}>
        {/* Left panel — cream, typography */}
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
          {/* Badge */}
          <div style={{ marginBottom: '28px' }}>
            <span style={{ fontFamily: SG, fontSize: '9px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#DC2626', border: '2px solid #DC2626', padding: '4px 12px' }}>
              TEENDOM AFRICA
            </span>
          </div>
          {/* Anton headline */}
          <h1 style={{ fontFamily: 'Anton, sans-serif', fontSize: 'clamp(4rem, 9vw, 8rem)', lineHeight: 0.92, color: '#000', letterSpacing: '-1px', marginBottom: '0' }}>
            YOUNG
          </h1>
          <h1 style={{ fontFamily: 'Anton, sans-serif', fontSize: 'clamp(4rem, 9vw, 8rem)', lineHeight: 0.92, color: '#000', letterSpacing: '-1px', marginBottom: '0' }}>
            CITIZENS
          </h1>
          <h1 style={{ fontFamily: 'Anton, sans-serif', fontSize: 'clamp(4rem, 9vw, 8rem)', lineHeight: 0.92, color: '#000', letterSpacing: '-1px', marginBottom: '28px' }}>
            PROGRAM
          </h1>
          {/* Red accent bar */}
          <div style={{ width: '64px', height: '5px', background: '#DC2626', marginBottom: '28px' }} />
          <p style={{ fontFamily: SG, fontSize: '1rem', color: '#444', lineHeight: 1.7, maxWidth: '420px', marginBottom: '40px' }}>
            Connecting Kenyan teens with their constitutional rights through education, advocacy, and action.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button
              style={{ fontFamily: SG, fontSize: '10px', fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase', padding: '14px 32px', border: '2px solid #DC2626', background: '#DC2626', color: '#fff', cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#b91c1c'; e.currentTarget.style.borderColor = '#b91c1c'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#DC2626'; e.currentTarget.style.borderColor = '#DC2626'; }}>
              JOIN NOW
            </button>
            <button
              style={{ fontFamily: SG, fontSize: '10px', fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase', padding: '14px 32px', border: '2px solid #000', background: 'transparent', color: '#000', cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#000'; }}>
              LEARN MORE
            </button>
          </div>
        </motion.div>

        {/* Right panel — Bauhaus abstract art */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          style={{ flex: '1 1 360px', minHeight: '60vh', position: 'relative', borderLeft: '2px solid #000', overflow: 'hidden' }}>
          <img
            src="/images/a.1.abstract art background/Geometric Masterpiece_ Red, Cream, and Black Circles Abstract Art in the Style of Laszlo Moholy-nagy - Etsy.jpg"
            alt="Bauhaus Abstract Art"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </motion.div>
      </section>

      {/* ── WHAT IS YCP — 3 COLUMNS ─────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ background: '#FDFCF5', padding: '96px 24px', borderTop: '2px solid #000' }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ marginBottom: '64px', textAlign: 'center' }}>
            <span style={{ fontFamily: SG, fontSize: '9px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#aaa', border: '2px solid #ddd', padding: '4px 14px' }}>
              THE PROGRAM
            </span>
            <h2 style={{ fontFamily: PF, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontStyle: 'italic', fontWeight: 900, color: '#000', lineHeight: 1.1, marginTop: '20px', letterSpacing: '-0.5px' }}>
              What is YCP?
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '48px' }}>
            {[
              {
                num: '01',
                heading: 'Know Your Rights',
                body: 'The Kenyan Constitution gives every young person rights most teens have never heard of. We change that — through deep-dive workshops, printed guides, and community sessions that break down the law into language you actually speak.',
              },
              {
                num: '02',
                heading: 'Civic Engagement',
                body: 'Knowing your rights is step one. Using them is step two. We train teens to attend public participation forums, engage their ward representatives, and hold government accountable through lawful, organized civic action.',
              },
              {
                num: '03',
                heading: 'Community Leadership',
                body: 'Every community needs a teen who shows up. YCP graduates walk away with leadership certification, a network of peers across 47 counties, and the confidence to drive real change in their schools and neighborhoods.',
              },
            ].map((col, i) => (
              <motion.div
                key={col.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                style={{ borderTop: '3px solid #DC2626', paddingTop: '28px' }}>
                <div style={{ fontFamily: PF, fontSize: '3.5rem', fontStyle: 'italic', fontWeight: 900, color: '#DC2626', lineHeight: 1, marginBottom: '12px', opacity: 0.25 }}>
                  {col.num}
                </div>
                <h3 style={{ fontFamily: PF, fontSize: '1.4rem', fontStyle: 'italic', fontWeight: 900, color: '#000', marginBottom: '14px', lineHeight: 1.2 }}>
                  {col.heading}
                </h3>
                <p style={{ fontFamily: SG, fontSize: '13px', color: '#555', lineHeight: 1.75 }}>
                  {col.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── THREE TRACKS ────────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        style={{ background: '#FDFCF5', padding: '96px 24px', borderTop: '2px solid #000' }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ marginBottom: '64px', textAlign: 'center' }}>
            <span style={{ fontFamily: SG, fontSize: '9px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#aaa', border: '2px solid #ddd', padding: '4px 14px' }}>
              CHOOSE YOUR PATH
            </span>
            <h2 style={{ fontFamily: PF, fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontStyle: 'italic', fontWeight: 900, color: '#000', lineHeight: 1.1, marginTop: '20px', letterSpacing: '-0.5px' }}>
              The Three Tracks
            </h2>
            <div style={{ width: '48px', height: '3px', background: '#DC2626', margin: '16px auto 0' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '36px' }}>
            {TRACKS.map((track, i) => (
              <motion.div
                key={track.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                style={{
                  border: '2px solid #000',
                  background: '#fff',
                  transform: `rotate(${track.tilt}deg)`,
                  boxShadow: '4px 4px 0 #000',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
                whileHover={{ rotate: 0, scale: 1.02, transition: { duration: 0.25 } }}>
                {/* Art header */}
                <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                  <img src={track.art} alt={track.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  {/* Sticker label */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    fontFamily: SG,
                    fontSize: '8px',
                    fontWeight: 900,
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    background: '#fff',
                    color: '#000',
                    border: '2px solid #000',
                    padding: '3px 8px',
                    transform: 'rotate(-2deg)',
                  }}>
                    {track.label}
                  </div>
                </div>
                {/* Card body */}
                <div style={{ padding: '24px 24px 28px' }}>
                  <div style={{ marginBottom: '8px' }}>
                    <span style={{ fontFamily: SG, fontSize: '9px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#DC2626' }}>
                      {track.name}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'Anton, sans-serif', fontSize: '1.6rem', color: '#000', lineHeight: 1, marginBottom: '12px', letterSpacing: '0.02em' }}>
                    {track.subtitle.toUpperCase()}
                  </h3>
                  <p style={{ fontFamily: SG, fontSize: '13px', color: '#555', lineHeight: 1.7, marginBottom: '20px' }}>
                    {track.description}
                  </p>
                  <button
                    style={{ fontFamily: SG, fontSize: '9px', fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase', padding: '9px 20px', border: '2px solid #000', background: 'transparent', color: '#000', cursor: 'pointer' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#000'; }}>
                    APPLY FOR THIS TRACK
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        style={{ background: '#1C1C1C', padding: '96px 24px' }}>
        <div className="max-w-6xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ fontFamily: SG, fontSize: '9px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#aaa', border: '2px solid #555', padding: '4px 14px' }}>
              VOICES FROM THE PROGRAM
            </span>
            <h2 style={{ fontFamily: PF, fontSize: 'clamp(2rem, 4vw, 3rem)', fontStyle: 'italic', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginTop: '20px', letterSpacing: '-0.5px' }}>
              What They're Saying
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '32px' }}>
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                style={{ border: '2px solid #333', padding: '36px 28px', background: '#222' }}>
                <div style={{ fontFamily: PF, fontSize: '2.5rem', color: '#DC2626', lineHeight: 1, marginBottom: '16px', opacity: 0.6 }}>"</div>
                <p style={{ fontFamily: PF, fontSize: '1.05rem', fontStyle: 'italic', color: '#fff', lineHeight: 1.65, marginBottom: '24px' }}>
                  {t.quote}
                </p>
                <div style={{ borderTop: '1px solid #444', paddingTop: '16px' }}>
                  <p style={{ fontFamily: SG, fontSize: '11px', fontWeight: 900, color: '#DC2626', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>
                    {t.name}
                  </p>
                  <span style={{ fontFamily: SG, fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#666', border: '1px solid #444', padding: '2px 8px' }}>
                    {t.county}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── APPLY / JOIN ────────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ background: '#FDFCF5', padding: '96px 24px', borderTop: '2px solid #000' }}>
        <div className="max-w-2xl mx-auto" style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontFamily: SG, fontSize: '9px', fontWeight: 900, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#DC2626', border: '2px solid #DC2626', padding: '4px 12px' }}>
              APPLICATIONS OPEN
            </span>
          </div>
          <h2 style={{ fontFamily: PF, fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontStyle: 'italic', fontWeight: 900, color: '#000', lineHeight: 1.1, letterSpacing: '-0.5px', marginBottom: '16px' }}>
            Ready to join<br />the movement?
          </h2>
          <div style={{ width: '48px', height: '3px', background: '#DC2626', margin: '0 auto 24px' }} />
          <p style={{ fontFamily: SG, fontSize: '14px', color: '#555', lineHeight: 1.7, marginBottom: '48px' }}>
            Fill in your details below. We'll reach out within 5 business days with your program placement and next steps.
          </p>

          {/* Form */}
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { label: 'FULL NAME', placeholder: 'Your full name', type: 'text' },
              { label: 'EMAIL ADDRESS', placeholder: 'your@email.com', type: 'email' },
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
                COUNTY
              </label>
              <select
                style={{ width: '100%', padding: '14px 16px', fontFamily: SG, fontSize: '13px', color: '#000', background: '#fff', border: '2px solid #000', outline: 'none', appearance: 'none', cursor: 'pointer', boxSizing: 'border-box' }}>
                <option value="">Select your county</option>
                {['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Meru', 'Thika', 'Machakos', 'Nyeri', 'Other'].map(county => (
                  <option key={county} value={county.toLowerCase()}>{county}</option>
                ))}
              </select>
            </div>

            <button
              style={{ fontFamily: SG, fontSize: '11px', fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase', padding: '18px 32px', border: '2px solid #DC2626', background: '#DC2626', color: '#fff', cursor: 'pointer', marginTop: '8px', width: '100%' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#b91c1c'; e.currentTarget.style.borderColor = '#b91c1c'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#DC2626'; e.currentTarget.style.borderColor = '#DC2626'; }}>
              JOIN YCP NOW
            </button>
          </div>
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
