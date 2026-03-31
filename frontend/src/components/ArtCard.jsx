// ArtCard — Article images as card visuals. Abstract art backgrounds are for section textures.
// Solid text boxes for contrast at bottom of each card.
import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export const ART_BACKGROUNDS = [
  "/images/a.1.abstract art background/download (18).jpg",
  "/images/a.1.abstract art background/download (21).jpg",
  "/images/a.1.abstract art background/Abstract Art.jpg",
  "/images/a.1.abstract art background/How to Make Pop Art_ A Simple Guide for Beginners 2025.jpg",
  "/images/a.1.abstract art background/Blue Abstract pattern _ Graphic design pattern, Abstract pattern design, Pattern art.jpg",
  "/images/a.1.abstract art background/download (19).jpg",
  "/images/a.1.abstract art background/Geometric Masterpiece_ Red, Cream, and Black Circles Abstract Art in the Style of Laszlo Moholy-nagy - Etsy.jpg",
];

// ─────────────────────────────────────────────────────────────────
// SOFT MAXIMALISM
// ─────────────────────────────────────────────────────────────────
const SOFT_LABELS = ['MUST READ', 'TRENDING', 'FRESH DROP', 'TOP PICK', 'STAFF FAV', 'HOT TAKE'];

export function SoftMaxArtCard({ article, index, onClick }) {
  const cardTilt  = index % 2 === 0 ? 'rotate(1.2deg)' : 'rotate(-0.8deg)';

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      viewport={{ once: true }}
      className="relative overflow-hidden cursor-pointer group"
      style={{ height: '360px', border: '2px solid #000', transform: cardTilt, display: 'flex', flexDirection: 'column' }}
      whileHover={{ rotate: 0, scale: 1.02, transition: { duration: 0.3 } }}
      onClick={onClick}>

      {/* Article image — top 60% */}
      <div style={{ height: '60%', position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
        <img src={article.image} alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        {/* Sticker label */}
        <div className="absolute top-3 right-3 z-20 px-2 py-1 border-2 border-black text-[9px] font-black tracking-widest uppercase bg-white"
          style={{ fontFamily: '"Space Grotesk", sans-serif', transform: 'rotate(-2deg)' }}>
          {SOFT_LABELS[index % SOFT_LABELS.length]}
        </div>
        {/* Category */}
        <div className="absolute top-3 left-3 z-20">
          <span className="px-2.5 py-1 text-[9px] font-black tracking-widest uppercase bg-[#DC2626] text-white"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            {article.category}
          </span>
        </div>
      </div>

      {/* Text box */}
      <div className="flex-1 z-20" style={{ background: 'rgba(0,0,0,0.84)', padding: '14px 18px 18px' }}>
        <h3 className="font-black text-white leading-tight mb-1.5"
          style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.05rem' }}>
          {article.title}
        </h3>
        <p className="text-white/60 text-xs line-clamp-1 mb-2"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
          {article.excerpt}
        </p>
        <div className="flex items-center gap-4 text-white/45 text-[10px]"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
          <span className="font-bold">{article.author}</span>
          <span className="flex items-center gap-1"><Clock size={8} /> {article.readTime} min</span>
        </div>
      </div>
    </motion.article>
  );
}

// ─────────────────────────────────────────────────────────────────
// GRITTY STREETWEAR — article image top, hard black text box bottom
// ─────────────────────────────────────────────────────────────────
export function StreetwearArtCard({ article, index, onClick, centered = false }) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      viewport={{ once: true }}
      className="relative overflow-hidden cursor-pointer group"
      style={{
        height: '360px',
        border: '4px solid #000',
        marginLeft: centered ? 0 : (index % 3 > 0 ? '-4px' : 0),
        marginTop: centered ? 0 : (index >= 3 ? '-4px' : 0),
        display: 'flex',
        flexDirection: 'column',
      }}
      onClick={onClick}>

      {/* Article image — top 58% */}
      <div style={{ height: '58%', position: 'relative', overflow: 'hidden', flexShrink: 0, borderBottom: '4px solid #000' }}>
        <img src={article.image} alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
          style={{ filter: 'contrast(1.05)' }} />
        {/* Red category badge — top left */}
        <div style={{ position: 'absolute', top: 0, left: 0, padding: '6px 12px', background: '#DC2626', borderRight: '4px solid #000', borderBottom: '4px solid #000' }}>
          <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '9px', fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#fff' }}>
            {article.category}
          </span>
        </div>
        {/* Issue stamp — top right */}
        <div style={{ position: 'absolute', top: 0, right: 0, padding: '6px 10px', background: '#F4F4F4', borderLeft: '4px solid #000', borderBottom: '4px solid #000' }}>
          <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '9px', color: '#000' }}>#{article.issue}</span>
        </div>
      </div>

      {/* Hard black text box — brutalist stamp at bottom */}
      <div style={{ flex: 1, background: '#000', padding: '12px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <h3 style={{ fontFamily: 'Anton, sans-serif', fontSize: '1.2rem', color: '#fff', lineHeight: 0.95, letterSpacing: '-0.5px', margin: 0 }}>
          {article.title}
        </h3>
        <div>
          <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', color: 'rgba(255,255,255,0.4)', margin: '0 0 6px', lineHeight: 1.5 }}
            className="line-clamp-1">
            {article.excerpt}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>{article.author}</span>
            <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '9px', color: '#DC2626', fontWeight: 900 }}>{article.readTime} MIN</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// ─────────────────────────────────────────────────────────────────
// BRIGHT GEN-Z — article image top, colored border, reaction bar
// ─────────────────────────────────────────────────────────────────
const CARD_COLORS = ['#FF6B35', '#0047FF', '#FF6B35', '#0047FF', '#FF6B35', '#0047FF'];
const TILTS_GZ    = [1.5, -1, 0.8, -1.5, 1, -0.8];

export function GenZArtCard({ article, index, liked, onLike, onClick }) {
  const color = CARD_COLORS[index % CARD_COLORS.length];
  const tilt  = TILTS_GZ[index % TILTS_GZ.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      viewport={{ once: true }}
      className="relative overflow-hidden cursor-pointer group"
      style={{ height: '360px', border: `4px solid ${color}`, transform: `rotate(${tilt}deg)`, display: 'flex', flexDirection: 'column' }}
      whileHover={{ rotate: 0, scale: 1.02, transition: { duration: 0.25 } }}
      onClick={onClick}>

      {/* Article image — top 55% */}
      <div style={{ height: '55%', position: 'relative', overflow: 'hidden', flexShrink: 0, borderBottom: `3px solid ${color}` }}>
        <img src={article.image} alt={article.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600" />
        {/* Category badge */}
        <div style={{ position: 'absolute', top: '10px', left: '10px', padding: '4px 10px', background: color }}>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '9px', fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#fff' }}>
            {article.category}
          </span>
        </div>
      </div>

      {/* Text box */}
      <div style={{ flex: 1, background: 'rgba(0,0,0,0.92)', borderTop: `3px solid ${color}`, padding: '12px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: '1rem', color: '#fff', lineHeight: 1.1, margin: 0 }}>
          {article.title}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={e => { e.stopPropagation(); onLike && onLike(article.id); }}
            style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '3px 8px', fontSize: '10px', fontWeight: 900, border: `2px solid ${color}`, background: liked ? color : 'transparent', color: liked ? '#fff' : color, cursor: 'pointer', fontFamily: 'Poppins, sans-serif' }}>
            ↑ {article.reactions.fire + (liked ? 1 : 0)}
          </button>
          <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '9px', color: 'rgba(255,255,255,0.3)' }}>
            {article.readTime} MIN · {article.author}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
