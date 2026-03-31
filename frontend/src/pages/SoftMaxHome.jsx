// HOME 2 — SOFT MAXIMALISM
// Cream canvas. Bauhaus art panel. Abstract art card backgrounds. Playfair + Space Grotesk.
// No Fredoka. No Nunito. Rich but not childish.
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { mockArticles, categories } from '../data/articles';
import { SoftMaxArtCard, ART_BACKGROUNDS } from '../components/ArtCard';

const PF = '"Playfair Display", serif';
const SG = '"Space Grotesk", sans-serif';

const ART_BAUHAUS     = "/images/a.1.abstract art background/Geometric Masterpiece_ Red, Cream, and Black Circles Abstract Art in the Style of Laszlo Moholy-nagy - Etsy.jpg";
const ART_PSYCHEDELIC = "/images/a.1.abstract art background/download (21).jpg";
const ART_BLUE        = "/images/a.1.abstract art background/Blue Abstract pattern _ Graphic design pattern, Abstract pattern design, Pattern art.jpg";
const ART_POP         = "/images/a.1.abstract art background/How to Make Pop Art_ A Simple Guide for Beginners 2025.jpg";
const ART_ABSTRACT    = "/images/a.1.abstract art background/Abstract Art.jpg";
const ART_DL15        = "/images/a.1.abstract art background/download (15).jpg";
const ART_DL16        = "/images/a.1.abstract art background/download (16).jpg";

// ── Teen Voices quotes data ──────────────────────────────────────────────────
const TEEN_VOICES = [
  {
    quote:
      "I never thought a teenager could have a say in how their county is run. The YCP showed me that the Constitution is not a document for lawyers — it is a tool for all of us.",
    name: "Zawadi Otieno",
    school: "Kisumu Girls High School",
    county: "Kisumu County",
    art: ART_BACKGROUNDS[0],
  },
  {
    quote:
      "When I stood up at our school senate and cited my constitutional rights, the deputy principal actually listened. That was the day I understood what civic power means.",
    name: "Baraka Njiru",
    school: "Meru School",
    county: "Meru County",
    art: ART_BACKGROUNDS[3],
  },
  {
    quote:
      "I used to think leadership was for adults in suits. Now I run the student welfare committee and we have changed three school policies. We are not waiting anymore.",
    name: "Seline Wambua",
    school: "Machakos Girls High School",
    county: "Machakos County",
    art: ART_BACKGROUNDS[5],
  },
];

// ── Young Citizens Tracks data ───────────────────────────────────────────────
const YCP_TRACKS = [
  {
    name: "CREATIVE TRACK",
    description:
      "Express your Kenya through art, writing, photography, and digital media. Build a portfolio that speaks truth to power — and earns recognition at the Teendom Awards.",
    badge: "ARTS & MEDIA",
    badgeColor: "#7C3AED",
    badgeBg: "#F3E5F5",
    art: ART_BLUE,
  },
  {
    name: "ACADEMIC TRACK",
    description:
      "Deep constitutional literacy, civic education workshops, and structured research programs. Graduate with knowledge most adults do not have about their own rights.",
    badge: "CIVICS & LAW",
    badgeColor: "#0891B2",
    badgeBg: "#E0F2FE",
    art: ART_POP,
  },
  {
    name: "LEADERSHIP TRACK",
    description:
      "Public speaking, community organizing, and mentorship pipelines. Become the teen leader your community deserves — trained, certified, and ready.",
    badge: "COMMUNITY",
    badgeColor: "#059669",
    badgeBg: "#E8F5E9",
    art: ART_ABSTRACT,
  },
];

// ── Changemaker Spotlight data ───────────────────────────────────────────────
const CHANGEMAKERS = [
  {
    name: "Amara Kimani",
    role: "Youth Wellness Advocate",
    county: "Nairobi County",
    school: "Kenya High School",
    bio: "Amara led a school-wide mental health campaign that reached over 800 students across three Nairobi institutions. She believes balance is a form of resistance.",
    image: "/images/articles/self-esteem/self-esteem1.jpg",
    tilt: "-1.5deg",
  },
  {
    name: "Jabari Mwangi",
    role: "Fashion & Identity Activist",
    county: "Nairobi County",
    school: "Alliance High School",
    bio: "Jabari documented the Gikomba fashion economy for his KCSE project and turned it into a viral photo series. Style is politics, he says — and he is right.",
    image: "/images/articles/career/career1.jpg",
    tilt: "1.8deg",
  },
  {
    name: "Faith Huini",
    role: "Teen Entrepreneur",
    county: "Kiambu County",
    school: "Limuru Girls High School",
    bio: "Faith bootstrapped a school uniform reselling cooperative that now serves four schools. She is proof that the entrepreneurship curriculum sold teens short.",
    image: "/images/articles/teen ceo/Teen ceo primary.JPG",
    tilt: "-1deg",
  },
];

// ── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
};

export default function SoftMaxHome() {
  const navigate  = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const featured = mockArticles.filter(a => a.featured);
  const grid     = mockArticles.filter(a => !a.featured);
  const all      = [...featured, ...grid];

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: '#FDFCF5', fontFamily: SG, paddingBottom: '52px' }}
    >

      {/* ── NAVBAR ──────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-black" style={{ background: '#FDFCF5' }}>
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">
          <button
            onClick={() => navigate('/')}
            className="text-2xl font-black text-black"
            style={{ fontFamily: PF, letterSpacing: '-1px' }}
          >
            Teendom
          </button>
          <div className="hidden md:flex items-center gap-9">
            {['Home', 'Articles', 'Young Citizens', 'About'].map(link => (
              <button
                key={link}
                className="text-sm font-bold text-gray-600 hover:text-black transition-colors"
                style={{ fontFamily: PF }}
              >
                {link}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/')}
              className="hidden md:block px-5 py-2 text-sm font-black border-2 border-black bg-[#FFFDE7] hover:bg-black hover:text-white transition-all"
              style={{ fontFamily: SG, letterSpacing: '0.05em' }}
            >
              Join YCP
            </button>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div
            className="md:hidden border-t-2 border-black px-6 py-5 flex flex-col gap-4"
            style={{ background: '#FDFCF5' }}
          >
            {['Home', 'Articles', 'Young Citizens', 'About'].map(link => (
              <button
                key={link}
                className="text-left font-bold text-gray-700 border-b border-gray-200 pb-3"
                style={{ fontFamily: PF }}
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO — 3-column: text | image | Bauhaus art ─────────────────────── */}
      <section className="pt-24 pb-0 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-0 items-stretch min-h-[85vh]">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="md:col-span-5 flex flex-col justify-center gap-6 py-12 md:pr-10"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
              <span
                className="inline-block px-3 py-1.5 border-2 border-black text-[10px] font-black tracking-widest uppercase bg-[#FCE4EC]"
                style={{ fontFamily: SG }}
              >
                FOR KENYAN TEENS · BY KENYAN TEENS
              </span>
            </motion.div>
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="font-black text-black leading-[0.92]"
              style={{ fontSize: 'clamp(3rem,7vw,5.5rem)', fontFamily: PF, letterSpacing: '-2px' }}
            >
              Your Story<br />
              <span style={{ fontFamily: PF, color: '#DC2626', fontWeight: 900, fontStyle: 'italic' }}>Matters.</span>
            </motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5 } } }}
              className="text-sm text-gray-600 leading-relaxed max-w-sm"
              style={{ fontFamily: SG }}
            >
              Where young Kenyans find their voice, learn their rights, and build a better future — together.
            </motion.p>
            <motion.div
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5 } } }}
              className="flex gap-3 flex-wrap"
            >
              <button
                onClick={() => navigate('/')}
                className="px-8 py-3 bg-black text-white font-black border-2 border-black hover:bg-[#DC2626] hover:border-[#DC2626] transition-all text-sm"
                style={{ fontFamily: SG, letterSpacing: '0.05em' }}
              >
                JOIN YOUNG CITIZENS
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-8 py-3 bg-[#FFFDE7] text-black font-black border-2 border-black hover:bg-white transition-all text-sm"
                style={{ fontFamily: SG, letterSpacing: '0.05em' }}
              >
                READ ARTICLES
              </button>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5 } } }}
              className="grid grid-cols-3 gap-2 mt-2"
            >
              {[
                ['2,500+', 'Young Citizens', '#E8F5E9'],
                ['10+',    'Schools',         '#FFF3E0'],
                ['100+',   'Changemakers',    '#F3E5F5'],
              ].map(([num, label, bg]) => (
                <div key={label} className="p-3 border-2 border-black text-center" style={{ background: bg }}>
                  <p className="text-xl font-black text-black" style={{ fontFamily: PF }}>{num}</p>
                  <p className="text-[9px] font-bold text-gray-600 mt-0.5 uppercase tracking-wide" style={{ fontFamily: SG }}>
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-4 relative flex items-end border-x-2 border-black overflow-hidden"
            style={{ minHeight: '500px' }}
          >
            <img
              src="/images/a..2.creative images for sections/minimalistic boy.png"
              alt="Teen"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="relative z-10 w-full px-4 pb-5">
              <span
                className="inline-block px-3 py-1.5 border-2 border-black text-[10px] font-black tracking-widest uppercase bg-[#FFFDE7]"
                style={{ fontFamily: SG, transform: 'rotate(-2deg)', display: 'inline-block' }}
              >
                TEEN EDITORIAL · 2024
              </span>
            </div>
          </motion.div>

          {/* Bauhaus art panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-3 relative overflow-hidden border-l-0 md:border-l-2 border-black"
            style={{ minHeight: '500px' }}
          >
            <img
              src={ART_BAUHAUS}
              alt="Bauhaus art"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 border-t-2 border-black">
              <p className="text-[9px] font-black tracking-[0.2em] uppercase text-gray-500" style={{ fontFamily: SG }}>
                ART · CULTURE · EXPRESSION
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TICKER ──────────────────────────────────────────────────────────── */}
      <div className="border-y-2 border-black py-3 overflow-hidden" style={{ background: '#000' }}>
        <div className="flex animate-ticker whitespace-nowrap" style={{ width: 'max-content' }}>
          {[...categories, ...categories].map((cat, i) => (
            <span
              key={i}
              className="mx-6 text-[11px] font-black tracking-widest text-white uppercase"
              style={{ fontFamily: SG }}
            >
              ✦ {cat.name}
            </span>
          ))}
        </div>
      </div>

      {/* ── ART CARD GRID — Fresh From the Desk ─────────────────────────────── */}
      <section className="py-14 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-black text-black" style={{ fontFamily: PF }}>
            Fresh From the Desk
          </h2>
          <span
            className="px-3 py-1.5 border-2 border-black text-[10px] font-black tracking-widest uppercase bg-[#E8F5E9]"
            style={{ fontFamily: SG }}
          >
            NEW STORIES
          </span>
        </div>

        <div className="grid md:grid-cols-6 gap-3 justify-items-center">
          {all.map((article, i) => {
            const isWide = i === 0 || i === 3;
            return (
              <div key={article.id} className={`w-full ${isWide ? 'md:col-span-4' : 'md:col-span-2'}`}>
                <SoftMaxArtCard article={article} index={i} onClick={() => navigate(`/soft/articles/${article.id}`)} />
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/')}
            className="px-10 py-3 border-2 border-black font-black bg-white hover:bg-black hover:text-white transition-all text-sm"
            style={{ fontFamily: SG, letterSpacing: '0.1em' }}
          >
            SEE ALL ARTICLES
          </button>
        </div>
      </section>

      {/* ── PROGRAMS ────────────────────────────────────────────────────────── */}
      <section className="py-14 border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-black mb-8" style={{ fontFamily: PF }}>
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="relative overflow-hidden border-2 border-black" style={{ minHeight: '220px' }}>
              <img
                src={ART_PSYCHEDELIC}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: 0.7 }}
              />
              <div className="absolute inset-0 bg-white/20" />
              <div className="relative z-10 p-6 flex flex-col justify-end h-full" style={{ minHeight: '220px' }}>
                <p
                  className="text-[10px] font-black tracking-widest uppercase text-white/80 bg-black/40 inline-block px-2 py-0.5 self-start"
                  style={{ fontFamily: SG }}
                >
                  OUR PROGRAMS
                </p>
              </div>
            </div>
            {[
              {
                title: 'Young Citizens Program',
                desc: 'Constitutional education in 3 tracks. Real knowledge for real Kenyan teens.',
                cta: 'Join YCP',
                bg: '#E8F5E9',
              },
              {
                title: 'Teendom Awards',
                desc: 'Celebrating extraordinary teen changemakers across all 47 Kenyan counties.',
                cta: 'View Awards',
                bg: '#FFF3E0',
              },
            ].map(prog => (
              <div
                key={prog.title}
                className="p-8 border-2 border-black flex flex-col justify-between"
                style={{ background: prog.bg }}
              >
                <div>
                  <h3 className="text-xl font-black text-black mb-3" style={{ fontFamily: PF }}>
                    {prog.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: SG }}>
                    {prog.desc}
                  </p>
                </div>
                <button
                  onClick={() => navigate('/')}
                  className="mt-6 px-6 py-2.5 border-2 border-black font-black text-sm bg-white hover:bg-black hover:text-white transition-all self-start"
                  style={{ fontFamily: SG, letterSpacing: '0.08em' }}
                >
                  {prog.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          SECTION A — TEEN VOICES (dark editorial)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: '#1C1C1C',
          borderTop: '2px solid #000',
          borderBottom: '2px solid #000',
          padding: '80px 0',
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section label */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12 flex items-center gap-5"
          >
            <span
              className="text-[11px] tracking-[0.25em] font-black uppercase"
              style={{ fontFamily: SG, color: '#FDFCF5', letterSpacing: '0.22em' }}
            >
              WHAT THEY SAY
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.15)' }} />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-black mb-14 leading-none"
            style={{
              fontFamily: PF,
              fontSize: 'clamp(2rem, 5vw, 3.8rem)',
              color: '#FDFCF5',
              letterSpacing: '-1.5px',
            }}
          >
            Teen Voices
          </motion.h2>

          {/* Quote cards */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-px"
            style={{ border: '2px solid rgba(255,255,255,0.08)' }}
          >
            {TEEN_VOICES.map((voice, i) => (
              <motion.div
                key={voice.name}
                variants={fadeUp}
                className="relative overflow-hidden group"
                style={{ minHeight: '380px' }}
              >
                {/* Abstract art BG at very low opacity */}
                <img
                  src={voice.art}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ opacity: 0.12 }}
                />
                {/* Dark overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'rgba(28,28,28,0.72)' }}
                />

                {/* Content */}
                <div
                  className="relative z-10 flex flex-col justify-between h-full p-8"
                  style={{ minHeight: '380px' }}
                >
                  {/* Large quote mark */}
                  <span
                    className="block font-black leading-none mb-4"
                    style={{
                      fontFamily: PF,
                      fontSize: '5rem',
                      color: '#DC2626',
                      lineHeight: 0.8,
                      opacity: 0.85,
                    }}
                  >
                    "
                  </span>

                  {/* Quote text */}
                  <p
                    className="flex-1 leading-relaxed"
                    style={{
                      fontFamily: PF,
                      fontStyle: 'italic',
                      fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
                      color: '#FDFCF5',
                      lineHeight: 1.7,
                    }}
                  >
                    {voice.quote}
                  </p>

                  {/* Attribution */}
                  <div className="mt-8 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.14)' }}>
                    <p
                      className="font-black tracking-wide"
                      style={{
                        fontFamily: SG,
                        fontSize: '0.75rem',
                        color: '#FDFCF5',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {voice.name}
                    </p>
                    <p
                      style={{
                        fontFamily: SG,
                        fontSize: '0.68rem',
                        color: 'rgba(253,252,245,0.45)',
                        marginTop: '3px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {voice.school}
                    </p>
                    <p
                      style={{
                        fontFamily: SG,
                        fontSize: '0.65rem',
                        color: '#DC2626',
                        marginTop: '2px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        fontWeight: 700,
                      }}
                    >
                      {voice.county}
                    </p>
                  </div>
                </div>

                {/* Right border divider (except last card) */}
                {i < TEEN_VOICES.length - 1 && (
                  <div
                    className="absolute top-0 right-0 bottom-0"
                    style={{ width: '1px', background: 'rgba(255,255,255,0.09)' }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Full-width art divider between Section A and B ─────────────────── */}
      <div
        className="relative overflow-hidden"
        style={{ height: '90px', borderBottom: '2px solid #000' }}
      >
        <img
          src={ART_DL16}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.18, filter: 'saturate(0.6)' }}
        />
        <div className="absolute inset-0" style={{ background: '#FDFCF5', opacity: 0.55 }} />
        {/* Decorative center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="tracking-[0.35em] uppercase text-[9px] font-black text-black/30"
            style={{ fontFamily: SG }}
          >
            Young Citizens Programme · Teendom Africa · Est. 2022
          </span>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════════
          SECTION B — YOUNG CITIZENS TRACKS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#FDFCF5', padding: '80px 0 90px' }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] font-black tracking-[0.22em] uppercase mb-4"
              style={{ fontFamily: SG, color: '#DC2626' }}
            >
              Young Citizens Programme
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-black leading-none"
              style={{
                fontFamily: PF,
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                color: '#111',
                letterSpacing: '-1.5px',
              }}
            >
              The Three Tracks
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-lg text-sm text-gray-500 leading-relaxed"
              style={{ fontFamily: SG }}
            >
              Choose the path that fits who you are. All three tracks lead to the same destination: a Kenya shaped by young people who know their power.
            </motion.p>
          </motion.div>

          {/* Track cards */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-4"
          >
            {YCP_TRACKS.map((track, i) => (
              <motion.div
                key={track.name}
                variants={fadeUp}
                className="flex flex-col border-2 border-black overflow-hidden group cursor-pointer"
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                style={{ background: '#fff' }}
              >
                {/* Top art banner strip */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: '72px', borderBottom: '2px solid #000' }}
                >
                  <img
                    src={track.art}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
                    style={{ opacity: 0.85 }}
                  />
                  {/* Track number stamp */}
                  <div
                    className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white border-2 border-black"
                    style={{ fontFamily: PF, fontWeight: 900, fontSize: '1rem' }}
                  >
                    {i + 1}
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-7 gap-4">
                  {/* Badge */}
                  <span
                    className="self-start px-3 py-1 text-[9px] font-black tracking-widest uppercase border"
                    style={{
                      fontFamily: SG,
                      color: track.badgeColor,
                      background: track.badgeBg,
                      borderColor: track.badgeColor,
                    }}
                  >
                    {track.badge}
                  </span>

                  {/* Track name */}
                  <h3
                    className="font-black leading-tight"
                    style={{
                      fontFamily: PF,
                      fontSize: '1.45rem',
                      color: '#111',
                      letterSpacing: '-0.5px',
                    }}
                  >
                    {track.name}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm text-gray-600 leading-relaxed flex-1"
                    style={{ fontFamily: SG }}
                  >
                    {track.description}
                  </p>

                  {/* CTA */}
                  <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 self-start text-xs font-black uppercase tracking-widest mt-2 hover:text-[#DC2626] transition-colors"
                    style={{ fontFamily: SG }}
                  >
                    LEARN MORE <ArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          SECTION C — CHANGEMAKER SPOTLIGHT
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: '#F8F5EE',
          borderTop: '2px solid #000',
          borderBottom: '2px solid #000',
          padding: '80px 0 90px',
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4"
          >
            <div>
              <motion.p
                variants={fadeUp}
                className="text-[11px] font-black tracking-[0.22em] uppercase mb-3"
                style={{ fontFamily: SG, color: '#DC2626' }}
              >
                Changemaker Spotlight
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-black leading-none"
                style={{
                  fontFamily: PF,
                  fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                  color: '#111',
                  letterSpacing: '-1.5px',
                }}
              >
                The Young Ones<br />
                <span style={{ fontStyle: 'italic', color: '#DC2626' }}>Leading.</span>
              </motion.h2>
            </div>
            <motion.p
              variants={fadeUp}
              className="max-w-xs text-sm text-gray-500 leading-relaxed md:text-right"
              style={{ fontFamily: SG }}
            >
              These are not future leaders. They are the leaders Kenya has right now.
            </motion.p>
          </motion.div>

          {/* Profile cards */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {CHANGEMAKERS.map((person, i) => (
              <motion.div
                key={person.name}
                variants={fadeUp}
                className="flex flex-col border-2 border-black overflow-hidden bg-white group"
                style={{ transform: `rotate(${person.tilt})` }}
                whileHover={{
                  rotate: 0,
                  scale: 1.015,
                  boxShadow: '6px 6px 0 #000',
                  transition: { duration: 0.28 },
                }}
              >
                {/* Profile photo */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: '260px', borderBottom: '2px solid #000' }}
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Corner label */}
                  <div
                    className="absolute bottom-3 left-3 px-2.5 py-1 border-2 border-black bg-white"
                    style={{ transform: 'rotate(-1.5deg)' }}
                  >
                    <span
                      className="text-[9px] font-black tracking-widest uppercase"
                      style={{ fontFamily: SG, color: '#DC2626' }}
                    >
                      Changemaker
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6 gap-3">
                  <div>
                    <h3
                      className="font-black leading-tight"
                      style={{ fontFamily: PF, fontSize: '1.35rem', color: '#111', letterSpacing: '-0.5px' }}
                    >
                      {person.name}
                    </h3>
                    <p
                      className="text-[11px] font-black uppercase tracking-wider mt-1"
                      style={{ fontFamily: SG, color: '#DC2626' }}
                    >
                      {person.role}
                    </p>
                  </div>
                  <div
                    className="flex items-center gap-3 text-[10px] font-bold text-gray-500 uppercase tracking-wide"
                    style={{ fontFamily: SG }}
                  >
                    <span>{person.school}</span>
                    <span style={{ color: '#ccc' }}>·</span>
                    <span>{person.county}</span>
                  </div>
                  <p
                    className="text-xs text-gray-600 leading-relaxed flex-1"
                    style={{ fontFamily: SG }}
                  >
                    {person.bio}
                  </p>
                  <button
                    onClick={() => navigate('/')}
                    className="mt-2 w-full py-2.5 border-2 border-black font-black text-xs tracking-widest uppercase bg-transparent hover:bg-black hover:text-white transition-all"
                    style={{ fontFamily: SG }}
                  >
                    READ STORY
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 border-2 border-black bg-white"
          >
            <div>
              <p
                className="font-black text-black text-lg"
                style={{ fontFamily: PF }}
              >
                Could you be next?
              </p>
              <p className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: SG }}>
                Apply to the Teendom Awards 2024 — nominations open across all 47 counties.
              </p>
            </div>
            <button
              onClick={() => navigate('/')}
              className="whitespace-nowrap px-8 py-3 bg-[#DC2626] text-white font-black border-2 border-[#DC2626] hover:bg-black hover:border-black transition-all text-sm"
              style={{ fontFamily: SG, letterSpacing: '0.06em' }}
            >
              APPLY NOW
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── NEWSLETTER ──────────────────────────────────────────────────────── */}
      <section
        className="py-14 px-6"
        style={{ background: '#FCE4EC', borderTop: '2px solid #000' }}
      >
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-4xl font-black text-black mb-2" style={{ fontFamily: PF }}>
            Stay in the Loop
          </h2>
          <p className="text-sm text-gray-600 mb-6" style={{ fontFamily: SG }}>
            Fresh stories, opportunities, and updates. No spam.
          </p>
          <div className="flex border-2 border-black">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 text-sm outline-none bg-white placeholder-gray-400"
              style={{ fontFamily: SG }}
            />
            <button
              className="px-5 py-3 bg-black text-white font-black text-sm hover:bg-[#DC2626] transition-colors"
              style={{ fontFamily: SG, letterSpacing: '0.1em' }}
            >
              JOIN
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="border-t-2 border-black px-6 py-8" style={{ background: '#FDFCF5' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-2xl font-black text-black" style={{ fontFamily: PF }}>
            Teendom
          </p>
          <p className="text-xs text-gray-400" style={{ fontFamily: SG }}>
            © 2024 Teendom Africa · Empowering Young Citizens
          </p>
          <div className="flex gap-5">
            {['Instagram', 'Twitter', 'YouTube'].map(s => (
              <button
                key={s}
                className="text-xs font-bold text-gray-500 hover:text-black transition-colors"
                style={{ fontFamily: SG }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
