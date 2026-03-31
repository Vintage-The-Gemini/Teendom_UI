// PREVIEW BAR — Brutalist fixed bottom bar shown on all /home/* routes.
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const HOMES = [
  { path: '/home/street', label: 'HOME 1', name: 'STREETWEAR' },
];

const SG = '"Space Grotesk", sans-serif';
const AN = 'Anton, sans-serif';

export default function PreviewBar() {
  const navigate       = useNavigate();
  const { pathname }   = useLocation();
  const current        = HOMES.find(h => h.path === pathname);
  const others         = HOMES.filter(h => h.path !== pathname);

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999,
      borderTop: '4px solid #DC2626',
      background: '#000',
      display: 'flex', alignItems: 'stretch',
      height: '52px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 20px', borderRight: '2px solid #222' }}>
        <span style={{ fontFamily: SG, fontSize: '9px', fontWeight: 900, letterSpacing: '0.25em', color: '#666', textTransform: 'uppercase' }}>PREVIEWING</span>
        <span style={{ fontFamily: AN, fontSize: '1.05rem', color: '#fff' }}>{current?.label} — {current?.name}</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'stretch', flex: 1 }}>
        {others.map(h => (
          <button key={h.path} onClick={() => navigate(h.path)}
            style={{ fontFamily: SG, fontSize: '10px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '0 16px', border: 'none', borderRight: '2px solid #222', background: 'transparent', color: '#666', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'background 0.15s, color 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#111'; e.currentTarget.style.color = '#DC2626'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#666'; }}>
            {h.label}
          </button>
        ))}
      </div>

      <button onClick={() => navigate('/')}
        style={{ fontFamily: SG, fontSize: '10px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '0 24px', border: 'none', borderLeft: '4px solid #DC2626', background: '#DC2626', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0, transition: 'background 0.15s' }}
        onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#000'; }}
        onMouseLeave={e => { e.currentTarget.style.background = '#DC2626'; e.currentTarget.style.color = '#fff'; }}>
        ← BACK TO SELECTOR
      </button>
    </div>
  );
}
