import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, Heart, Zap, Share2 } from 'lucide-react';
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
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: '#F4F4F4',
          borderBottom: '4px solid #000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          height: '56px',
        }}
      >
        {/* Left: logo */}
        <button
          onClick={() => navigate('/home/street')}
          style={{
            fontFamily: ANTON,
            fontSize: '1.75rem',
            color: '#000',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            lineHeight: 1,
          }}
        >
          TEENDOM
        </button>

        {/* Center: breadcrumb (desktop only) */}
        <span
          style={{
            fontFamily: MONO,
            fontSize: '10px',
            color: '#888',
            letterSpacing: '0.1em',
            display: 'none',
            // shown via media query fallback — use inline style trick
          }}
          className="nav-breadcrumb"
        >
          HOME / ARTICLES / {article.category}
        </span>

        {/* Right: JOIN YCP */}
        <button
          style={{
            fontFamily: MONO,
            fontSize: '11px',
            color: '#fff',
            background: RED,
            border: '3px solid #000',
            padding: '8px 18px',
            cursor: 'pointer',
            letterSpacing: '0.08em',
            fontWeight: 700,
          }}
        >
          JOIN YCP
        </button>
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

      {/* ── 3. HERO — brutalist split ─────────────────────────────── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '60% 40%',
          minHeight: '70vh',
          borderBottom: '4px solid #000',
        }}
      >
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
              padding: '40px 48px',
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
          style={{
            position: 'relative',
            borderLeft: `4px solid ${RED}`,
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
          padding: '64px 24px',
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
                    padding: '32px 40px',
                    marginBottom: '32px',
                    boxSizing: 'border-box',
                  }}
                >
                  <p
                    style={{
                      fontFamily: ANTON,
                      fontSize: '2rem',
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

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0',
          }}
        >
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
          © 2024 TEENDOM AFRICA
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
        marginLeft: index > 0 ? '-4px' : '0',
        position: 'relative',
        zIndex: index,
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
