import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, Heart, Zap, Share2, BookOpen, Calendar } from 'lucide-react';
import { mockArticles } from '../data/articles';
import { ART_BACKGROUNDS } from '../components/ArtCard';

const CARD_COLORS = ['#FF6B35', '#0047FF', '#FF6B35', '#0047FF', '#FF6B35', '#0047FF'];
const accentColor = (id) => CARD_COLORS[(id - 1) % CARD_COLORS.length];

export default function BrightZineArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const article = mockArticles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <p style={{ fontSize: '1.25rem', fontWeight: 900, color: '#000' }}>
          Article not found.
        </p>
        <button
          onClick={() => navigate('/home/genz')}
          style={{
            background: CARD_COLORS[0],
            color: '#fff',
            border: '2px solid #000',
            padding: '10px 24px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 900,
            fontSize: '0.875rem',
            cursor: 'pointer',
          }}
        >
          ← BACK HOME
        </button>
      </div>
    );
  }

  const accent = accentColor(article.id);
  const relatedArticles = mockArticles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div style={{ background: '#fff', minHeight: '100vh', paddingBottom: '52px' }}>

      {/* ── 1. NAV ── */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: '#fff',
          borderBottom: '2px solid #000',
          padding: '0 24px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left: Logo */}
        <button
          onClick={() => navigate('/home/genz')}
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 900,
            fontSize: '1.1rem',
            color: '#DC2626',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            letterSpacing: '-0.5px',
          }}
        >
          TEENDOM
        </button>

        {/* Center: Breadcrumb */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '10px',
            fontWeight: 700,
          }}
        >
          <span style={{ color: '#999' }}>ARTICLES</span>
          <span style={{ color: '#999' }}>/</span>
          <span style={{ color: accent }}>{article.category}</span>
        </div>

        {/* Right: CTA */}
        <button
          style={{
            background: '#FF6B35',
            color: '#fff',
            border: '2px solid #000',
            padding: '6px 16px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 900,
            fontSize: '9px',
            letterSpacing: '1px',
            cursor: 'pointer',
          }}
        >
          JOIN YCP
        </button>
      </nav>

      {/* ── 2. HERO ── */}
      <section
        style={{
          borderBottom: '4px solid #000',
          background: '#fff',
          padding: '48px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {/* Left: Polaroid image */}
          <motion.div
            initial={{ rotate: -2, opacity: 0, y: 24 }}
            whileInView={{ rotate: 0, opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            style={{
              display: 'inline-block',
              background: '#fff',
              padding: '8px 8px 28px 8px',
              border: `4px solid ${accent}`,
              boxShadow: '8px 8px 0 #000',
            }}
          >
            <img
              src={article.image}
              alt={article.title}
              style={{
                width: '100%',
                height: '360px',
                objectFit: 'cover',
                objectPosition: 'top',
                display: 'block',
              }}
            />
            <div
              style={{
                paddingTop: '6px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '11px',
                color: '#333',
                textAlign: 'center',
              }}
            >
              {article.author}
            </div>
          </motion.div>

          {/* Right: Meta */}
          <div>
            {/* Category badge */}
            <div
              style={{
                display: 'inline-block',
                background: accent,
                color: '#fff',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 900,
                fontSize: '9px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                padding: '4px 12px',
                marginBottom: '18px',
              }}
            >
              {article.category}
            </div>

            {/* Title */}
            <h1
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: 0.9,
                letterSpacing: '-2px',
                color: '#000',
                margin: '0 0 16px 0',
              }}
            >
              {article.title}
            </h1>

            {/* Excerpt */}
            <p
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: '14px',
                color: '#666',
                lineHeight: 1.7,
                marginTop: '16px',
                marginBottom: '20px',
              }}
            >
              {article.excerpt}
            </p>

            {/* Meta badges */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
              {/* Read time */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  border: '2px solid #000',
                  padding: '4px 10px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 900,
                  fontSize: '9px',
                  color: '#000',
                  letterSpacing: '0.5px',
                }}
              >
                <Clock size={10} />
                {article.readTime} MIN
              </div>

              {/* Published at */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  border: '2px solid #000',
                  padding: '4px 10px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 900,
                  fontSize: '9px',
                  color: '#000',
                  letterSpacing: '0.5px',
                }}
              >
                <Calendar size={10} />
                {article.publishedAt}
              </div>

              {/* Issue */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  border: `2px solid ${accent}`,
                  padding: '4px 10px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 900,
                  fontSize: '9px',
                  color: accent,
                  letterSpacing: '0.5px',
                }}
              >
                <BookOpen size={10} />
                ISSUE {article.issue}
              </div>
            </div>

            {/* Reaction row */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {[
                { icon: <Zap size={12} />, label: article.reactions.fire, key: 'fire' },
                { icon: <Heart size={12} />, label: article.reactions.hundred, key: 'hundred' },
                { icon: <Share2 size={12} />, label: article.reactions.clap, key: 'clap' },
              ].map(({ icon, label, key }) => (
                <button
                  key={key}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    border: `2px solid ${accent}`,
                    color: accent,
                    background: 'transparent',
                    padding: '8px 16px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 900,
                    fontSize: '10px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = accent;
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = accent;
                  }}
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. ART TEXTURE DIVIDER ── */}
      <div
        style={{
          position: 'relative',
          height: '80px',
          borderTop: '4px solid #000',
          borderBottom: '4px solid #000',
          overflow: 'hidden',
        }}
      >
        <img
          src={ART_BACKGROUNDS[article.id % ART_BACKGROUNDS.length]}
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.6,
            mixBlendMode: 'multiply',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'Anton, sans-serif',
              fontSize: '4rem',
              color: accent,
              WebkitTextStroke: `2px ${accent}`,
              WebkitTextFillColor: 'transparent',
              lineHeight: 1,
              letterSpacing: '-1px',
            }}
          >
            ISSUE {article.issue}
          </span>
        </div>
      </div>

      {/* ── 4. ARTICLE BODY ── */}
      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          padding: '64px 24px',
        }}
      >
        {article.body && article.body.map((para, i) => {
          const isHighlight = i % 3 === 2;

          return (
            <React.Fragment key={i}>
              {/* Pull quote after paragraph index 1 */}
              {i === 2 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  style={{
                    background: accent,
                    padding: '32px 36px',
                    margin: '40px 0',
                    border: '4px solid #000',
                    transform: 'rotate(-0.5deg)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 900,
                      fontSize: '3rem',
                      color: '#fff',
                      lineHeight: 0.8,
                      marginBottom: '8px',
                    }}
                  >
                    &ldquo;
                  </div>
                  <p
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 900,
                      fontSize: '1.3rem',
                      color: '#fff',
                      lineHeight: 1.2,
                      margin: '0 0 16px 0',
                    }}
                  >
                    {article.excerpt}
                  </p>
                  <span
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '10px',
                      color: 'rgba(255,255,255,0.7)',
                    }}
                  >
                    — {article.author}, {article.authorRole || 'Contributor'}
                  </span>
                </motion.div>
              )}

              {/* Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                style={
                  isHighlight
                    ? {
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '16px',
                        lineHeight: 1.85,
                        color: '#222',
                        marginBottom: '32px',
                        borderLeft: `4px solid ${accent}`,
                        paddingLeft: '24px',
                        marginLeft: '-28px',
                      }
                    : {
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '16px',
                        lineHeight: 1.85,
                        color: '#222',
                        marginBottom: '28px',
                      }
                }
              >
                {para}
              </motion.p>
            </React.Fragment>
          );
        })}

        {/* ── 5. TAGS ── */}
        {article.tags && article.tags.length > 0 && (
          <div
            style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              alignItems: 'center',
              marginTop: '16px',
            }}
          >
            <span
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: '9px',
                color: '#999',
                fontWeight: 700,
                letterSpacing: '1px',
              }}
            >
              TAGGED:
            </span>
            {article.tags.map((tag) => (
              <button
                key={tag}
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 900,
                  fontSize: '10px',
                  padding: '4px 12px',
                  border: `2px solid ${accent}`,
                  color: accent,
                  background: 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  letterSpacing: '0.5px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = accent;
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = accent;
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── 6. REACTIONS + SHARE ── */}
      <div
        style={{
          borderTop: '4px solid #000',
          borderBottom: '4px solid #000',
          background: accent,
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 24px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Left: reaction buttons */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {/* Fire — toggleable */}
            <button
              onClick={() => setLiked((prev) => !prev)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                background: liked ? '#000' : '#fff',
                border: '2px solid #000',
                color: liked ? '#fff' : '#000',
                padding: '6px 14px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 900,
                fontSize: '10px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <Zap size={12} />
              {article.reactions.fire + (liked ? 1 : 0)}
            </button>

            {/* Heart */}
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                background: '#fff',
                border: '2px solid #000',
                color: '#000',
                padding: '6px 14px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 900,
                fontSize: '10px',
                cursor: 'pointer',
              }}
            >
              <Heart size={12} />
              {article.reactions.hundred}
            </button>

            {/* Share */}
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                background: '#fff',
                border: '2px solid #000',
                color: '#000',
                padding: '6px 14px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 900,
                fontSize: '10px',
                cursor: 'pointer',
              }}
            >
              <Share2 size={12} />
              {article.reactions.clap}
            </button>
          </div>

          {/* Right: share label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 900,
              fontSize: '10px',
              color: '#fff',
              letterSpacing: '0.5px',
              cursor: 'pointer',
            }}
          >
            SHARE THIS STORY
            <Share2 size={12} />
          </div>
        </div>
      </div>

      {/* ── 7. RELATED ARTICLES ── */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '56px 24px',
        }}
      >
        {/* Heading */}
        <div style={{ marginBottom: '40px' }}>
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 900,
              fontSize: '2.5rem',
              color: '#000',
              margin: '0 0 8px 0',
              lineHeight: 1,
            }}
          >
            MORE LIKE THIS
          </h2>
          <div
            style={{
              height: '8px',
              width: '180px',
              background: accent,
            }}
          />
        </div>

        {/* Related cards */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '32px',
          }}
        >
          {relatedArticles.map((related, i) => {
            const cardColor = CARD_COLORS[i % CARD_COLORS.length];
            const tiltDeg = i % 2 === 0 ? '1deg' : '-1deg';

            return (
              <motion.div
                key={related.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ rotate: 0, scale: 1.02, transition: { duration: 0.2 } }}
                onClick={() => navigate(`/genz/articles/${related.id}`)}
                style={{
                  width: 'calc(33.333% - 22px)',
                  minWidth: '260px',
                  border: `4px solid ${cardColor}`,
                  background: '#fff',
                  cursor: 'pointer',
                  transform: `rotate(${tiltDeg})`,
                  overflow: 'hidden',
                }}
              >
                {/* Image */}
                <div
                  style={{
                    height: '160px',
                    overflow: 'hidden',
                    borderBottom: `4px solid ${cardColor}`,
                  }}
                >
                  <img
                    src={related.image}
                    alt={related.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: '14px 16px' }}>
                  {/* Category badge */}
                  <div
                    style={{
                      display: 'inline-block',
                      background: cardColor,
                      color: '#fff',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 900,
                      fontSize: '8px',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      padding: '3px 8px',
                      marginBottom: '8px',
                    }}
                  >
                    {related.category}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 900,
                      fontSize: '1rem',
                      color: '#000',
                      lineHeight: 1.2,
                      margin: '0 0 6px 0',
                    }}
                  >
                    {related.title}
                  </h3>

                  {/* Author */}
                  <p
                    style={{
                      fontFamily: '"Space Grotesk", sans-serif',
                      fontSize: '11px',
                      color: '#666',
                      margin: '0 0 14px 0',
                    }}
                  >
                    {related.author}
                  </p>

                  {/* Read link */}
                  <div
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 900,
                      fontSize: '10px',
                      color: cardColor,
                      letterSpacing: '0.5px',
                    }}
                  >
                    → READ
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── 8. FOOTER ── */}
      <footer
        style={{
          background: '#000',
          borderTop: '4px solid #FF6B35',
          padding: '2rem 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        {/* Left: Logo */}
        <span
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 900,
            fontSize: '1.5rem',
            color: '#fff',
            letterSpacing: '-1px',
          }}
        >
          TEENDOM
        </span>

        {/* Center: Copyright */}
        <span
          style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: '10px',
            color: '#666',
          }}
        >
          © 2026 Teendom Africa. All rights reserved.
        </span>

        {/* Right: Socials */}
        <div style={{ display: 'flex', gap: '16px' }}>
          {['Instagram', 'Twitter', 'YouTube'].map((platform) => (
            <button
              key={platform}
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: '10px',
                color: '#666',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#FF6B35'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#666'; }}
            >
              {platform}
            </button>
          ))}
        </div>
      </footer>

    </div>
  );
}
