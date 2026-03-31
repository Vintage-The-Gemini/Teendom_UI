import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, Heart, Zap, Share2, Menu, X } from 'lucide-react';
import { mockArticles } from '../data/articles';
import { ART_BACKGROUNDS } from '../components/ArtCard';

const ANTON = 'Anton, sans-serif';
const MONO  = '"Space Mono", monospace';
const RED   = '#DC2626';

export default function StreetwearArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = mockArticles.find((a) => String(a.id) === String(id));

  const [liked, setLiked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ── Not found state ───────────────────────────────────────────────
  if (!article) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: '#000',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px',
        }}
      >
        <h1 style={{ fontFamily: ANTON, fontSize: '3rem', color: '#fff', margin: 0 }}>
          ARTICLE NOT FOUND
        </h1>
        <button
          onClick={() => navigate('/street/articles')}
          style={{
            fontFamily: MONO,
            fontSize: '11px',
            color: '#fff',
            background: RED,
            border: `3px solid #fff`,
            padding: '10px 24px',
            cursor: 'pointer',
            letterSpacing: '0.08em',
          }}
        >
          ← BACK TO ALL STORIES
        </button>
      </div>
    );
  }

  const artBg = ART_BACKGROUNDS[(article.id - 1) % ART_BACKGROUNDS.length];
  const related = mockArticles.filter((a) => a.id !== article.id).slice(0, 3);

  // ── Root wrapper ──────────────────────────────────────────────────
  return (
    <div
      style={{
        background: '#F4F4F4',
        minHeight: '100vh',
        paddingBottom: '52px',
        fontFamily: MONO,
      }}
    >
      {/* ── 1. NAV ───────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50" style={{ borderBottom: '4px solid #000', background: '#F4F4F4' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
          <button onClick={() => navigate('/home/street')}
            style={{ fontFamily: ANTON, fontSize: '1.75rem', letterSpacing: '-1px', color: '#000', lineHeight: 1, background: 'none', border: 'none', cursor: 'pointer' }}>
            TEENDOM
          </button>
          <span className="hidden md:block nav-breadcrumb"
            style={{ fontFamily: MONO, fontSize: '10px', color: '#888', letterSpacing: '0.1em' }}>
            HOME / ARTICLES / {article.category}
          </span>
          <div className="flex items-center gap-2">
            <button onClick={() => navigate('/street/ycp')}
              className="hidden md:block"
              style={{ fontFamily: MONO, fontSize: '10px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '8px 16px', border: '3px solid #000', background: RED, color: '#fff', cursor: 'pointer' }}>
              JOIN YCP
            </button>
            <button className="md:hidden p-1" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 py-4 flex flex-col" style={{ borderTop: '4px solid #000', background: '#F4F4F4' }}>
            {[['HOME', '/home/street'], ['ARTICLES', '/street/articles'], ['YOUNG CITIZENS', '/street/ycp']].map(([label, path]) => (
              <button key={label} onClick={() => { navigate(path); setMenuOpen(false); }}
                className="text-left py-3 px-2 font-black tracking-widest uppercase hover:bg-black hover:text-white transition-all"
                style={{ fontFamily: MONO, fontSize: '13px', borderBottom: '2px solid #000' }}>{label}</button>
            ))}
            <button onClick={() => { navigate('/street/ycp'); setMenuOpen(false); }}
              className="mt-3 py-3 px-4 font-black tracking-widest uppercase text-white text-center"
              style={{ fontFamily: MONO, fontSize: '13px', background: RED, border: '3px solid #000' }}>
              JOIN YCP
            </button>
          </div>
        )}
      </nav>

      {/* Inline style for breadcrumb desktop visibility */}
      <style>{`
        @media (min-width: 768px) {
          .nav-breadcrumb { display: block !important; }
        }
      `}</style>

      {/* ── 2. BACK + META BAR ───────────────────────────────────── */}
      <div
        style={{
          borderBottom: '4px solid #000',
          background: '#F4F4F4',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
        }}
      >
        {/* Left: back */}
        <button
          onClick={() => navigate('/street/articles')}
          style={{
            fontFamily: MONO,
            fontSize: '10px',
            color: '#000',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: 0,
            letterSpacing: '0.08em',
            fontWeight: 700,
          }}
        >
          <ArrowLeft size={12} />
          ALL STORIES
        </button>

        {/* Right: stamps */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
          <span
            style={{
              fontFamily: MONO,
              fontSize: '10px',
              color: '#fff',
              background: RED,
              padding: '4px 12px',
              letterSpacing: '0.06em',
              fontWeight: 700,
            }}
          >
            #{article.issue}
          </span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: '10px',
              color: '#fff',
              background: '#000',
              padding: '4px 12px',
              letterSpacing: '0.06em',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <Clock size={10} />
            {article.readTime} MIN READ
          </span>
        </div>
      </div>

      {/* ── 3. HERO — mobile: stacked, desktop: 60/40 split ─────────── */}
      <style>{`
        .hero-grid { display: grid; grid-template-columns: 1fr; border-bottom: 4px solid #000; }
        @media (min-width: 768px) { .hero-grid { grid-template-columns: 60% 40%; min-height: 70vh; } }
        .hero-img { min-height: 280px; }
        @media (min-width: 768px) { .hero-img { min-height: unset; } }
      `}</style>
      <div className="hero-grid">
        {/* Left: black side */}
        <div
          style={{
            background: '#000',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Category stamp */}
          <div
            style={{
              background: RED,
              padding: '8px 20px',
              fontFamily: MONO,
              fontSize: '10px',
              color: '#fff',
              letterSpacing: '0.12em',
              fontWeight: 700,
            }}
          >
            {article.category}
          </div>

          {/* Center content */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: 'clamp(24px, 4vw, 48px)',
            }}
          >
            <h1
              style={{
                fontFamily: ANTON,
                fontSize: 'clamp(3rem, 7vw, 7rem)',
                lineHeight: 0.88,
                color: '#fff',
                margin: '0 0 28px 0',
                letterSpacing: '-0.01em',
              }}
            >
              {article.title}
            </h1>

            <p
              style={{
                fontFamily: MONO,
                fontSize: '13px',
                color: '#888',
                maxWidth: '440px',
                lineHeight: 1.7,
                margin: '0 0 32px 0',
              }}
            >
              {article.excerpt}
            </p>

            <p
              style={{
                fontFamily: MONO,
                fontSize: '10px',
                color: '#666',
                letterSpacing: '0.08em',
                margin: 0,
              }}
            >
              BY {article.author.toUpperCase()} · {article.publishedAt} · {article.readTime} MIN READ
            </p>
          </div>
        </div>

        {/* Right: image side */}
        <div
          className="hero-img"
          style={{
            position: 'relative',
            borderTop: '4px solid #000',
            overflow: 'hidden',
          }}
        >
          <img
            src={article.image}
            alt={article.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              minHeight: '280px',
            }}
          />
          {/* Issue stamp top-right */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              background: RED,
              border: '4px solid #000',
              borderTop: 'none',
              borderRight: 'none',
              padding: '8px 16px',
              fontFamily: MONO,
              fontSize: '11px',
              color: '#fff',
              fontWeight: 700,
              letterSpacing: '0.06em',
            }}
          >
            #{article.issue}
          </div>
        </div>
      </div>

      {/* ── ART BACKGROUND SEPARATOR STRIP ───────────────────────── */}
      <div
        style={{
          width: '100%',
          height: '80px',
          borderTop: '4px solid #000',
          borderBottom: '4px solid #000',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <img
          src={artBg}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            filter: 'contrast(1.2)',
            opacity: 0.8,
          }}
        />
      </div>

      {/* ── 4. ARTICLE BODY ──────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: 'clamp(24px, 5vw, 64px) clamp(16px, 4vw, 24px)',
          background: '#F4F4F4',
        }}
      >
        {article.body.map((paragraph, i) => {
          const isCallout = i % 2 === 1;

          const paragraphEl = (
            <motion.p
              key={`p-${i}`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              style={{
                fontFamily: MONO,
                fontSize: '14px',
                lineHeight: 1.9,
                color: '#333',
                margin: 0,
              }}
            >
              {paragraph}
            </motion.p>
          );

          const wrappedParagraph = isCallout ? (
            <motion.div
              key={`callout-${i}`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              style={{
                border: '4px solid #000',
                padding: '24px 28px',
                background: '#fff',
                marginBottom: '32px',
              }}
            >
              <p
                style={{
                  fontFamily: MONO,
                  fontSize: '14px',
                  lineHeight: 1.9,
                  color: '#333',
                  margin: 0,
                }}
              >
                {paragraph}
              </p>
            </motion.div>
          ) : (
            <div key={`p-wrapper-${i}`} style={{ marginBottom: '32px' }}>
              {paragraphEl}
            </div>
          );

          // After paragraph index 2: insert pull quote
          if (i === 2) {
            return (
              <React.Fragment key={`frag-${i}`}>
                {wrappedParagraph}
                {/* PULL QUOTE */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  style={{
                    width: '100%',
                    background: '#000',
                    padding: 'clamp(20px, 4vw, 40px)',
                    marginBottom: '32px',
                    boxSizing: 'border-box',
                  }}
                >
                  <p
                    style={{
                      fontFamily: ANTON,
                      fontSize: 'clamp(1.4rem, 4vw, 2rem)',
                      color: '#fff',
                      lineHeight: 0.95,
                      margin: '0 0 20px 0',
                    }}
                  >
                    "{article.excerpt}"
                  </p>
                  <div
                    style={{
                      width: '100%',
                      height: '4px',
                      background: RED,
                      marginBottom: '12px',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: '10px',
                      color: RED,
                      letterSpacing: '0.1em',
                      fontWeight: 700,
                    }}
                  >
                    — {article.author.toUpperCase()}, {article.authorRole.toUpperCase()}
                  </span>
                </motion.div>
              </React.Fragment>
            );
          }

          return wrappedParagraph;
        })}

        {/* ── 5. TAGS ────────────────────────────────────────────── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            marginTop: '16px',
          }}
        >
          <span
            style={{
              fontFamily: MONO,
              fontSize: '9px',
              color: '#888',
              letterSpacing: '0.1em',
              fontWeight: 700,
            }}
          >
            TAGGED:
          </span>
          {article.tags.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>
      </div>

      {/* ── 6. REACTIONS BAR ────────────────────────────────────── */}
      <div
        style={{
          borderTop: '4px solid #000',
          borderBottom: '4px solid #000',
          background: '#000',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '80rem',
            margin: '0 auto',
            padding: '0 24px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Left: reaction buttons */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <ReactionButton
              icon={<Zap size={12} />}
              count={article.reactions.fire}
              active={liked}
              onClick={() => setLiked((v) => !v)}
            />
            <ReactionButton
              icon={<Heart size={12} />}
              count={article.reactions.hundred}
              active={false}
              onClick={() => {}}
            />
            <ReactionButton
              icon={<Share2 size={12} />}
              count="SHARE"
              active={false}
              onClick={() => {}}
            />
          </div>

          {/* Right: more from category */}
          <button
            onClick={() => navigate('/street/articles')}
            style={{
              fontFamily: MONO,
              fontSize: '10px',
              color: RED,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '0.08em',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            MORE FROM {article.category} →
          </button>
        </div>
      </div>

      {/* ── 7. RELATED ARTICLES ─────────────────────────────────── */}
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '48px 24px',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '24px' }}>
          <h2
            style={{
              fontFamily: ANTON,
              fontSize: '2rem',
              color: '#000',
              margin: '0 0 12px 0',
              lineHeight: 1,
            }}
          >
            MORE STORIES
          </h2>
          <div style={{ width: '100%', height: '4px', background: '#000' }} />
        </div>

        {/* Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '0' }}>
          {related.map((rel, i) => (
            <RelatedCard
              key={rel.id}
              article={rel}
              index={i}
              onClick={() => navigate(`/street/articles/${rel.id}`)}
            />
          ))}
        </div>
      </div>

      {/* ── 8. FOOTER ───────────────────────────────────────────── */}
      <footer
        style={{
          background: '#000',
          borderTop: `4px solid ${RED}`,
          padding: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        {/* Left: wordmark */}
        <span
          style={{
            fontFamily: ANTON,
            fontSize: '1.5rem',
            color: '#fff',
            lineHeight: 1,
          }}
        >
          TEENDOM
        </span>

        {/* Center: copyright */}
        <span
          style={{
            fontFamily: MONO,
            fontSize: '10px',
            color: '#888',
            letterSpacing: '0.06em',
          }}
        >
          © 2026 TEENDOM AFRICA
        </span>

        {/* Right: social buttons */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <SocialButton label="IG" />
          <SocialButton label="TW" />
          <SocialButton label="YT" />
        </div>
      </footer>
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────

function TagPill({ tag }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: MONO,
        fontSize: '10px',
        border: '2px solid #000',
        padding: '3px 10px',
        color: hovered ? RED : '#000',
        background: hovered ? '#000' : 'transparent',
        cursor: 'default',
        letterSpacing: '0.06em',
        transition: 'all 0.15s ease',
      }}
    >
      {tag}
    </span>
  );
}

function ReactionButton({ icon, count, active, onClick }) {
  const [hovered, setHovered] = useState(false);
  const isActive = active || hovered;
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: MONO,
        fontSize: '10px',
        fontWeight: 900,
        border: `2px solid ${isActive ? RED : '#333'}`,
        padding: '6px 16px',
        color: isActive ? '#fff' : '#666',
        background: isActive ? RED : 'transparent',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        letterSpacing: '0.06em',
        transition: 'all 0.15s ease',
      }}
    >
      {icon}
      {count}
    </button>
  );
}

function RelatedCard({ article, index, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      style={{
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      {/* Image */}
      <div
        style={{
          height: '200px',
          overflow: 'hidden',
          border: '4px solid #000',
        }}
      >
        <img
          src={article.image}
          alt={article.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      {/* Bottom info */}
      <div
        style={{
          background: '#F4F4F4',
          borderLeft: '4px solid #000',
          borderRight: '4px solid #000',
          borderBottom: '4px solid #000',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {/* Category */}
        <span
          style={{
            fontFamily: MONO,
            fontSize: '9px',
            color: RED,
            letterSpacing: '0.1em',
            fontWeight: 700,
          }}
        >
          {article.category}
        </span>

        {/* Title */}
        <h3
          style={{
            fontFamily: ANTON,
            fontSize: '1.1rem',
            lineHeight: 0.95,
            color: '#000',
            margin: 0,
          }}
        >
          {article.title}
        </h3>

        {/* Author */}
        <span
          style={{
            fontFamily: MONO,
            fontSize: '10px',
            color: '#888',
            letterSpacing: '0.04em',
          }}
        >
          {article.author}
        </span>

        {/* Read link */}
        <span
          style={{
            fontFamily: MONO,
            fontSize: '10px',
            color: RED,
            fontWeight: 700,
            letterSpacing: '0.08em',
            marginTop: '4px',
          }}
        >
          READ →
        </span>
      </div>
    </motion.div>
  );
}

function SocialButton({ label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: MONO,
        fontSize: '10px',
        color: hovered ? RED : '#888',
        background: 'none',
        border: `2px solid ${hovered ? RED : '#333'}`,
        padding: '5px 12px',
        cursor: 'pointer',
        letterSpacing: '0.06em',
        transition: 'all 0.15s ease',
      }}
    >
      {label}
    </button>
  );
}
