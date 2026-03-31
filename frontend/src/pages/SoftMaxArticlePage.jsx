import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, Heart, Zap, Share2, BookOpen } from 'lucide-react';
import { mockArticles } from '../data/articles';
import { ART_BACKGROUNDS } from '../components/ArtCard';

const PF = '"Playfair Display", serif';
const SG = '"Space Grotesk", sans-serif';
const RED = '#DC2626';
const BG = '#FDFCF5';

export default function SoftMaxArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = mockArticles.find(a => a.id === Number(id));
  const [liked, setLiked] = useState(false);
  const related = mockArticles.filter(a => a.id !== Number(id)).slice(0, 3);

  if (!article) return (
    <div style={{ minHeight: '100vh', background: BG, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ fontFamily: SG }}>
        Article not found.{' '}
        <button onClick={() => navigate('/soft/articles')} style={{ color: RED, background: 'none', border: 'none', cursor: 'pointer', fontFamily: SG }}>
          ← Back
        </button>
      </p>
    </div>
  );

  const artBg = ART_BACKGROUNDS[article.id % ART_BACKGROUNDS.length];
  const initials = article.author.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div style={{ minHeight: '100vh', background: BG, paddingBottom: '52px' }}>

      {/* ── NAV ── */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: BG,
        borderBottom: '2px solid #000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
        height: '56px',
      }}>
        {/* Left: Logo */}
        <button
          onClick={() => navigate('/home/soft')}
          style={{
            fontFamily: PF,
            fontSize: '1.3rem',
            fontStyle: 'italic',
            fontWeight: 700,
            color: '#000',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          Teendom
        </button>

        {/* Center: Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontFamily: SG, fontSize: '10px', color: '#aaa', letterSpacing: '0.08em', fontWeight: 700 }}>
            ARTICLES
          </span>
          <span style={{ fontFamily: SG, fontSize: '10px', color: '#bbb' }}>/</span>
          <span style={{ fontFamily: SG, fontSize: '10px', color: RED, fontWeight: 900, letterSpacing: '0.08em' }}>
            {article.category}
          </span>
        </div>

        {/* Right: CTA */}
        <button
          onClick={() => navigate('/soft/ycp')}
          style={{
            fontFamily: SG,
            fontSize: '10px',
            fontWeight: 900,
            letterSpacing: '0.1em',
            color: '#fff',
            background: RED,
            border: 'none',
            padding: '8px 18px',
            cursor: 'pointer',
          }}
        >
          JOIN YCP
        </button>
      </nav>

      {/* ── BACK BAR ── */}
      <div style={{
        background: BG,
        borderBottom: '2px solid #000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
        height: '44px',
      }}>
        <button
          onClick={() => navigate('/soft/articles')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: SG,
            fontSize: '10px',
            fontWeight: 900,
            letterSpacing: '0.1em',
            color: '#000',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <ArrowLeft size={13} />
          BACK TO ARTICLES
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            fontFamily: SG,
            fontSize: '10px',
            fontWeight: 900,
            letterSpacing: '0.06em',
            color: '#555',
            border: '2px solid #ddd',
            padding: '3px 10px',
          }}>
            #{article.issue}
          </span>
          <span style={{
            fontFamily: SG,
            fontSize: '10px',
            fontWeight: 900,
            letterSpacing: '0.06em',
            color: '#555',
            border: '2px solid #ddd',
            padding: '3px 10px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}>
            <Clock size={10} />
            {article.readTime} MIN READ
          </span>
        </div>
      </div>

      {/* ── ARTICLE HERO ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ borderBottom: '2px solid #000' }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: '7fr 5fr',
          minHeight: '520px',
        }}>
          {/* Left col */}
          <div style={{
            background: BG,
            padding: '60px 64px 60px 48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '24px',
          }}>
            {/* Category badge */}
            <div>
              <span style={{
                fontFamily: SG,
                fontSize: '9px',
                fontWeight: 900,
                letterSpacing: '0.14em',
                color: '#fff',
                background: RED,
                padding: '5px 12px',
                textTransform: 'uppercase',
              }}>
                {article.category}
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: PF,
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: '-1.5px',
              color: '#000',
              margin: 0,
            }}>
              {article.title}
            </h1>

            {/* Excerpt */}
            <p style={{
              fontFamily: SG,
              fontSize: '15px',
              color: '#666',
              maxWidth: '480px',
              lineHeight: 1.7,
              margin: 0,
            }}>
              {article.excerpt}
            </p>

            {/* Author row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: RED,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{ fontFamily: SG, fontSize: '12px', fontWeight: 900, color: '#fff' }}>
                  {initials}
                </span>
              </div>
              <div>
                <div style={{ fontFamily: SG, fontSize: '13px', fontWeight: 700, color: '#000' }}>
                  {article.author}
                </div>
                <div style={{ fontFamily: SG, fontSize: '11px', color: '#999', fontWeight: 400 }}>
                  {article.authorRole}
                </div>
              </div>
            </div>

            {/* Meta row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
              <span style={{
                fontFamily: SG,
                fontSize: '10px',
                color: '#aaa',
                fontWeight: 700,
                letterSpacing: '0.06em',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}>
                <Clock size={10} />
                {article.readTime} MIN READ
              </span>
              <span style={{ fontFamily: SG, fontSize: '10px', color: '#aaa', fontWeight: 500 }}>
                {article.publishedAt}
              </span>
            </div>
          </div>

          {/* Right col: image */}
          <div style={{
            borderLeft: '2px solid #000',
            overflow: 'hidden',
            minHeight: '520px',
          }}>
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
        </div>
      </motion.section>

      {/* ── ABSTRACT ART DIVIDER STRIP ── */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '120px',
        borderTop: '2px solid #000',
        borderBottom: '2px solid #000',
        overflow: 'hidden',
      }}>
        <img
          src={artBg}
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.7,
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            background: '#fff',
            padding: '8px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{
              fontFamily: 'Anton, sans-serif',
              fontSize: '3rem',
              color: '#ccc',
              letterSpacing: '0.08em',
              lineHeight: 1,
            }}>
              ISSUE #{article.issue}
            </span>
          </div>
        </div>
      </div>

      {/* ── ARTICLE BODY ── */}
      <section style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 24px' }}>
        {article.body && article.body.map((para, i) => {
          const isDropcap = i % 2 === 0;

          return (
            <React.Fragment key={i}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                style={{
                  fontFamily: PF,
                  fontSize: '18px',
                  lineHeight: 1.85,
                  color: '#333',
                  marginBottom: '28px',
                  margin: '0 0 28px 0',
                }}
              >
                {isDropcap ? (
                  <>
                    <span style={{
                      float: 'left',
                      fontFamily: PF,
                      fontSize: '4rem',
                      lineHeight: '0.8',
                      color: RED,
                      marginRight: '6px',
                      marginBottom: '0',
                      fontWeight: 900,
                    }}>
                      {para[0]}
                    </span>
                    {para.slice(1)}
                  </>
                ) : para}
              </motion.p>

              {/* Pull quote after the 3rd paragraph (index 2) */}
              {i === 2 && (
                <motion.aside
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  style={{
                    borderLeft: `4px solid ${RED}`,
                    paddingLeft: '32px',
                    margin: '48px 0',
                  }}
                >
                  <p style={{
                    fontFamily: PF,
                    fontStyle: 'italic',
                    fontSize: '1.4rem',
                    lineHeight: 1.55,
                    color: '#333',
                    margin: '0 0 12px 0',
                  }}>
                    "{para.slice(0, 80)}..."
                  </p>
                  <span style={{
                    fontFamily: SG,
                    fontSize: '10px',
                    fontWeight: 900,
                    color: RED,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}>
                    — {article.author}
                  </span>
                </motion.aside>
              )}
            </React.Fragment>
          );
        })}

        {/* ── TAGS ROW ── */}
        {article.tags && article.tags.length > 0 && (
          <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontFamily: SG, fontSize: '9px', color: '#aaa', fontWeight: 700, letterSpacing: '0.1em', marginRight: '4px' }}>
              TAGGED IN:
            </span>
            {article.tags.map(tag => (
              <TagPill key={tag} tag={tag} />
            ))}
          </div>
        )}
      </section>

      {/* ── REACTIONS BAR ── */}
      <div style={{
        borderTop: '2px solid #000',
        borderBottom: '2px solid #000',
        background: BG,
      }}>
        <div style={{
          maxWidth: '720px',
          margin: '0 auto',
          padding: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'wrap',
        }}>
          {/* Left: reaction buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Fire / Like */}
            <ReactionButton
              icon={<Zap size={14} />}
              label={String(article.reactions.fire + (liked ? 1 : 0))}
              active={liked}
              onClick={() => setLiked(l => !l)}
            />
            {/* Heart */}
            <ReactionButton
              icon={<Heart size={14} />}
              label={String(article.reactions.hundred)}
              active={false}
              onClick={() => {}}
            />
            {/* Share */}
            <ReactionButton
              icon={<Share2 size={14} />}
              label="SHARE"
              active={false}
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: article.title, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
            />
          </div>

          {/* Right: read more link */}
          <button
            onClick={() => navigate('/soft/articles')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: SG,
              fontSize: '10px',
              fontWeight: 900,
              color: RED,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: 0,
            }}
          >
            <BookOpen size={13} />
            READ MORE FROM {article.category}
          </button>
        </div>
      </div>

      {/* ── RELATED ARTICLES ── */}
      <section style={{
        maxWidth: '1152px',
        margin: '0 auto',
        padding: '60px 24px',
        borderTop: '2px solid #000',
      }}>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          style={{
            fontFamily: PF,
            fontStyle: 'italic',
            fontSize: '2rem',
            fontWeight: 700,
            color: '#000',
            marginBottom: '36px',
          }}
        >
          You Might Also Like
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}>
          {related.map((rel, i) => (
            <RelatedCard
              key={rel.id}
              article={rel}
              index={i}
              onNavigate={() => navigate(`/soft/articles/${rel.id}`)}
            />
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: '2px solid #000',
        background: BG,
        padding: '24px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <span style={{ fontFamily: PF, fontStyle: 'italic', fontSize: '1.2rem', fontWeight: 700, color: '#000' }}>
          Teendom Africa
        </span>
        <span style={{ fontFamily: SG, fontSize: '11px', color: '#aaa', fontWeight: 500 }}>
          © 2024 Teendom Africa
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {['Instagram', 'Twitter', 'YouTube'].map(platform => (
            <button
              key={platform}
              style={{
                fontFamily: SG,
                fontSize: '10px',
                fontWeight: 700,
                color: '#555',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                letterSpacing: '0.06em',
              }}
            >
              {platform}
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
}

// ── Helper: Tag Pill ──
function TagPill({ tag }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: '"Space Grotesk", sans-serif',
        fontSize: '10px',
        fontWeight: 900,
        padding: '4px 12px',
        border: `2px solid ${hovered ? '#DC2626' : '#ddd'}`,
        color: hovered ? '#DC2626' : '#555',
        cursor: 'pointer',
        transition: 'border-color 0.2s, color 0.2s',
        letterSpacing: '0.04em',
      }}
    >
      {tag}
    </span>
  );
}

// ── Helper: Reaction Button ──
function ReactionButton({ icon, label, active, onClick }) {
  const [hovered, setHovered] = useState(false);

  const isActive = active;
  const showHover = hovered && !isActive;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        fontFamily: '"Space Grotesk", sans-serif',
        fontSize: '11px',
        fontWeight: 900,
        padding: '10px 20px',
        border: `2px solid ${isActive || showHover ? '#DC2626' : '#ddd'}`,
        background: isActive ? '#DC2626' : 'transparent',
        color: isActive ? '#fff' : showHover ? '#DC2626' : '#555',
        cursor: 'pointer',
        transition: 'all 0.2s',
        letterSpacing: '0.06em',
      }}
    >
      {icon}
      {label}
    </button>
  );
}

// ── Helper: Related Article Card ──
function RelatedCard({ article, index, onNavigate }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.22 } }}
      onClick={onNavigate}
      style={{ cursor: 'pointer', border: '2px solid #000', overflow: 'hidden', background: '#FDFCF5' }}
    >
      {/* Image */}
      <div style={{ height: '160px', overflow: 'hidden', borderBottom: '2px solid #000' }}>
        <img
          src={article.image}
          alt={article.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '16px', background: '#FDFCF5' }}>
        {/* Category badge */}
        <span style={{
          display: 'inline-block',
          fontFamily: '"Space Grotesk", sans-serif',
          fontSize: '9px',
          fontWeight: 900,
          letterSpacing: '0.1em',
          color: '#fff',
          background: '#DC2626',
          padding: '3px 8px',
          marginBottom: '10px',
          textTransform: 'uppercase',
        }}>
          {article.category}
        </span>

        {/* Title */}
        <h3 style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: '1rem',
          fontWeight: 700,
          lineHeight: 1.35,
          color: '#000',
          margin: '0 0 10px 0',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {article.title}
        </h3>

        {/* Author + arrow */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            fontFamily: '"Space Grotesk", sans-serif',
            fontSize: '10px',
            color: '#aaa',
            fontWeight: 500,
          }}>
            {article.author}
          </span>
          <span style={{ color: '#DC2626', fontSize: '14px', fontWeight: 700 }}>→</span>
        </div>
      </div>
    </motion.div>
  );
}
