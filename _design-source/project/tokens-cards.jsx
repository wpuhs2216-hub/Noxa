// NOXA — Token cards (colors, type, spacing, radius, motion)

// Reusable bits
const SwatchRow = ({ items, height = 110 }) => (
  <div style={{ display: 'grid', gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: 12 }}>
    {items.map((it) => (
      <div key={it.label} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{
          height, borderRadius: 10, background: it.value,
          border: it.border || '1px solid rgba(255,255,255,0.06)',
          position: 'relative', overflow: 'hidden',
        }}>
          {it.ring && (
            <div style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 0 0 1px rgba(167, 139, 250, 0.22)', borderRadius: 10 }} />
          )}
        </div>
        <div style={{ fontFamily: 'var(--noxa-font-sans)', color: 'var(--noxa-text-primary)', fontSize: 12, fontWeight: 600, letterSpacing: -0.1 }}>{it.label}</div>
        <div style={{ fontFamily: 'var(--noxa-font-mono)', color: 'var(--noxa-text-muted)', fontSize: 11 }}>{it.value}</div>
      </div>
    ))}
  </div>
);

const CardShell = ({ children, padding = 28, height, eyebrow }) => (
  <div className="noxa-root" style={{
    width: '100%', height: height || '100%', padding, boxSizing: 'border-box',
    background: 'var(--noxa-bg-base)',
    backgroundImage: 'radial-gradient(circle at 100% 0%, rgba(124, 58, 237,0.06), transparent 50%)',
    display: 'flex', flexDirection: 'column', gap: 18,
  }}>
    {eyebrow && <div className="noxa-eyebrow">{eyebrow}</div>}
    {children}
  </div>
);

// ─── COLOR CARDS ────────────────────────────────────────────────
const ColorsBackground = () => (
  <CardShell eyebrow="01 · Background" height={300}>
    <SwatchRow items={[
      { label: 'bg / base',     value: '#0B0710', ring: true },
      { label: 'bg / elevated', value: '#14101C', ring: true },
      { label: 'bg / overlay',  value: 'rgba(11,7,16,0.72)', ring: true },
    ]} />
  </CardShell>
);

const ColorsSurface = () => (
  <CardShell eyebrow="02 · Surface" height={300}>
    <SwatchRow items={[
      { label: 'surface / card',  value: '#1A1424', ring: true },
      { label: 'surface / muted', value: '#221B2E', ring: true },
      { label: 'surface / hover', value: '#2A2237', ring: true },
    ]} />
  </CardShell>
);

const ColorsAccent = () => (
  <CardShell eyebrow="03 · Accent" height={300}>
    <SwatchRow items={[
      { label: 'primary · violet',    value: '#7C3AED' },
      { label: 'ink · lavender',      value: '#A78BFA' },
      { label: 'destructive · wine',  value: '#C4384A' },
    ]} />
  </CardShell>
);

const ColorsVioletHierarchy = () => {
  const tiers = [
    { label: 'deep',    sub: 'violet 900',  hex: '#4C1D95', use: '影、グラデ底' },
    { label: 'press',   sub: 'violet 700',  hex: '#5B21B6', use: 'active state' },
    { label: 'primary', sub: 'violet 600',  hex: '#7C3AED', use: 'main brand' },
    { label: 'ink',     sub: 'violet 400',  hex: '#A78BFA', use: 'text, eyebrow' },
    { label: 'faint',   sub: 'violet 300',  hex: '#C4B5FD', use: 'soft fill' },
  ];
  return (
    <CardShell eyebrow="07 · Violet hierarchy" height={320}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, alignItems: 'stretch' }}>
        {tiers.map((t) => (
          <div key={t.label} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{
              height: 110, borderRadius: 10, background: t.hex,
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
            }} />
            <div>
              <div style={{ color: '#F5F1FA', fontSize: 12, fontWeight: 600, letterSpacing: -0.1 }}>{t.label}</div>
              <div style={{ color: '#9C92AB', fontSize: 10, fontFamily: 'var(--noxa-font-mono)' }}>{t.sub}</div>
              <div style={{ color: '#645A75', fontSize: 10, fontFamily: 'var(--noxa-font-mono)', marginTop: 2 }}>{t.hex}</div>
              <div style={{ color: '#9C92AB', fontSize: 10, marginTop: 4, fontFamily: 'var(--noxa-font-sans-jp)' }}>{t.use}</div>
            </div>
          </div>
        ))}
      </div>
    </CardShell>
  );
};

const ColorsText = () => (
  <CardShell eyebrow="04 · Text" height={300}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
      {[
        { label: 'primary', hex: '#F5F1FA', sample: 'Aa 夜' },
        { label: 'muted',   hex: '#9C92AB', sample: 'Aa 夜' },
        { label: 'inverse', hex: '#0B0710', sample: 'Aa 夜', bg: '#F5F1FA' },
      ].map((it) => (
        <div key={it.label} style={{
          background: it.bg || '#1A1424', borderRadius: 10,
          padding: '22px 16px', display: 'flex', flexDirection: 'column', gap: 6,
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ fontFamily: 'var(--noxa-font-display-en)', fontSize: 28, lineHeight: 1, color: it.hex }}>{it.sample}</div>
          <div style={{ fontFamily: 'var(--noxa-font-sans)', fontSize: 12, fontWeight: 600, color: it.bg ? '#0B0710' : '#F5F1FA' }}>text / {it.label}</div>
          <div style={{ fontFamily: 'var(--noxa-font-mono)', fontSize: 11, color: it.bg ? 'rgba(11,7,16,0.6)' : '#9C92AB' }}>{it.hex}</div>
        </div>
      ))}
    </div>
  </CardShell>
);

const ColorsBorder = () => (
  <CardShell eyebrow="05 · Border & Divider" height={300}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
      <div style={{ background: '#14101C', borderRadius: 10, padding: 18, border: '1px solid #2A2237' }}>
        <div style={{ color: '#F5F1FA', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>border</div>
        <div style={{ fontFamily: 'var(--noxa-font-mono)', fontSize: 11, color: '#9C92AB' }}>#2A2237</div>
        <div style={{ height: 1, background: '#2A2237', marginTop: 18 }} />
      </div>
      <div style={{ background: '#14101C', borderRadius: 10, padding: 18, border: '1px solid #2A2237' }}>
        <div style={{ color: '#F5F1FA', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>divider · violet hairline</div>
        <div style={{ fontFamily: 'var(--noxa-font-mono)', fontSize: 11, color: '#9C92AB' }}>rgba(167,139,250,.16)</div>
        <div style={{ height: 1, background: 'rgba(167, 139, 250, 0.16)', marginTop: 18 }} />
      </div>
    </div>
  </CardShell>
);

const ColorsFamilyTints = () => (
  <CardShell eyebrow="06 · Sub-brand tints" height={320}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
      {[
        { name: 'yorulog',   tag: '夜職売上CRM',    hex: '#7C3AED' },
        { name: 'nomishugy', tag: 'バーポータル',   hex: '#A78BFA' },
        { name: 'community', tag: '交流掲示板',     hex: '#C4384A' },
      ].map((it) => (
        <div key={it.name} style={{
          background: '#14101C', borderRadius: 12, padding: 18,
          border: '1px solid #2A2237', display: 'flex', flexDirection: 'column', gap: 12,
        }}>
          <div style={{ width: '100%', height: 60, borderRadius: 8, background: it.hex }} />
          <div>
            <div style={{ color: '#F5F1FA', fontSize: 14, fontWeight: 600, letterSpacing: -0.1 }}>{it.name}</div>
            <div style={{ color: '#9C92AB', fontSize: 11, marginTop: 2, fontFamily: 'var(--noxa-font-sans-jp)' }}>{it.tag}</div>
            <div style={{ color: '#645A75', fontSize: 10, marginTop: 4, fontFamily: 'var(--noxa-font-mono)' }}>{it.hex}</div>
          </div>
        </div>
      ))}
    </div>
  </CardShell>
);

// ─── TYPE CARDS ─────────────────────────────────────────────────
const TypeDisplay = () => (
  <CardShell eyebrow="Type · Display" height={360}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div>
        <div style={{ fontFamily: 'var(--noxa-font-display-en)', fontSize: 56, lineHeight: 1.08, fontWeight: 500, color: '#F5F1FA', letterSpacing: '-0.02em' }}>Nightfall, refined.</div>
        <div style={{ fontFamily: 'var(--noxa-font-mono)', fontSize: 11, color: '#9C92AB', marginTop: 6 }}>Cormorant Garamond · 56 / 60 · 500 · –2%</div>
      </div>
      <div style={{ height: 1, background: 'rgba(167, 139, 250, 0.16)' }} />
      <div>
        <div style={{ fontFamily: 'var(--noxa-font-display-jp)', fontSize: 44, lineHeight: 1.15, fontWeight: 500, color: '#F5F1FA', letterSpacing: '0.02em' }}>夜の街のための、</div>
        <div style={{ fontFamily: 'var(--noxa-font-mono)', fontSize: 11, color: '#9C92AB', marginTop: 6 }}>Shippori Mincho B1 · 44 / 51 · 500</div>
      </div>
    </div>
  </CardShell>
);

const TypeHeadings = () => (
  <CardShell eyebrow="Type · Headings" height={380}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {[
        { cls: 'noxa-h1', label: 'H1 · 40 / 46 · 500',   text: 'Welcome back', jp: '今夜の売上をひと目で' },
        { cls: 'noxa-h2', label: 'H2 · 28 / 35 · 500',   text: 'This week',    jp: 'プロダクト一覧' },
        { cls: 'noxa-h3', label: 'H3 · 20 / 27 · 600',   text: 'Account plan', jp: 'クレジット残高' },
      ].map((it) => (
        <div key={it.cls} style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <span className={it.cls} style={{ color: '#F5F1FA' }}>{it.text}</span>
            <span style={{ marginLeft: 12, fontFamily: 'var(--noxa-font-sans-jp)', color: '#A78BFA', fontSize: 14 }}>{it.jp}</span>
          </div>
          <div style={{ fontFamily: 'var(--noxa-font-mono)', fontSize: 10, color: '#645A75', whiteSpace: 'nowrap' }}>{it.label}</div>
        </div>
      ))}
    </div>
  </CardShell>
);

const TypeBody = () => (
  <CardShell eyebrow="Type · Body & Mono" height={360}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <div className="noxa-body" style={{ color: '#F5F1FA' }}>
          Body. The quiet hours have their own grammar — <span style={{ fontFamily: 'var(--noxa-font-sans-jp)' }}>夜は夜の文法を持っている。</span>
        </div>
        <div style={{ fontFamily: 'var(--noxa-font-mono)', fontSize: 10, color: '#645A75', marginTop: 4 }}>Geist · 15 / 24 · 400 — paired with Noto Sans JP</div>
      </div>
      <div>
        <div className="noxa-caption">Caption · 13 / 19 · 500 — meta, labels, eyebrow</div>
        <div style={{ fontFamily: 'var(--noxa-font-mono)', fontSize: 10, color: '#645A75', marginTop: 4 }}>color: text-muted #9C92AB</div>
      </div>
      <div>
        <div className="noxa-mono" style={{ color: '#F5F1FA' }}>const credits = 4_200; // 残高</div>
        <div style={{ fontFamily: 'var(--noxa-font-mono)', fontSize: 10, color: '#645A75', marginTop: 4 }}>JetBrains Mono · 13 / 20</div>
      </div>
      <div>
        <div className="noxa-eyebrow">Eyebrow · 11 · 0.18em tracking</div>
        <div style={{ fontFamily: 'var(--noxa-font-mono)', fontSize: 10, color: '#645A75', marginTop: 4 }}>uppercase, lavender</div>
      </div>
    </div>
  </CardShell>
);

// ─── SPACING / RADIUS / SHADOW / MOTION ────────────────────────
const SpacingScale = () => {
  const scale = [
    { n: 0,  v: 0 },  { n: 1,  v: 4 },  { n: 2,  v: 8 },  { n: 3,  v: 12 },
    { n: 4,  v: 16 }, { n: 6,  v: 24 }, { n: 8,  v: 32 }, { n: 12, v: 48 },
    { n: 16, v: 64 }, { n: 24, v: 96 },
  ];
  return (
    <CardShell eyebrow="Spacing · 4px base" height={360}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {scale.map((s) => (
          <div key={s.n} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 36, fontFamily: 'var(--noxa-font-mono)', fontSize: 11, color: '#9C92AB' }}>{s.n}</div>
            <div style={{ width: 48, fontFamily: 'var(--noxa-font-mono)', fontSize: 11, color: '#645A75' }}>{s.v}px</div>
            <div style={{ height: 10, width: s.v || 1, background: s.v ? 'linear-gradient(90deg, #7C3AED 0%, #A78BFA 100%)' : '#2A2237', borderRadius: 2 }} />
          </div>
        ))}
      </div>
    </CardShell>
  );
};

const RadiusScale = () => (
  <CardShell eyebrow="Radius" height={260}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
      {[
        { n: 'sm',   v: '4px' },
        { n: 'md',   v: '10px' },
        { n: 'lg',   v: '18px' },
        { n: 'pill', v: '9999px' },
      ].map((r) => (
        <div key={r.n} style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
          <div style={{ width: '100%', height: 80, background: '#1A1424', borderRadius: r.v, border: '1px solid #2A2237' }} />
          <div style={{ color: '#F5F1FA', fontSize: 12, fontWeight: 600 }}>{r.n}</div>
          <div style={{ fontFamily: 'var(--noxa-font-mono)', color: '#9C92AB', fontSize: 10 }}>{r.v}</div>
        </div>
      ))}
    </div>
  </CardShell>
);

const MotionCard = () => (
  <CardShell eyebrow="Motion · duration & easing" height={320}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ color: '#F5F1FA', fontSize: 12, fontWeight: 600, letterSpacing: -0.1 }}>Duration</div>
        {[
          { n: 'fast', v: '150ms', use: 'hover, focus' },
          { n: 'base', v: '250ms', use: 'panels, toasts' },
          { n: 'slow', v: '400ms', use: 'modal, page' },
        ].map((d) => (
          <div key={d.n} style={{ display: 'flex', alignItems: 'baseline', gap: 8, color: '#9C92AB', fontSize: 12 }}>
            <span style={{ width: 40, color: '#F5F1FA', fontWeight: 500 }}>{d.n}</span>
            <span style={{ width: 56, fontFamily: 'var(--noxa-font-mono)', color: '#A78BFA' }}>{d.v}</span>
            <span style={{ flex: 1 }}>{d.use}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ color: '#F5F1FA', fontSize: 12, fontWeight: 600, letterSpacing: -0.1 }}>Easing</div>
        {[
          { n: 'standard',   v: '0.4, 0, 0.2, 1' },
          { n: 'enter',      v: '0, 0, 0.2, 1' },
          { n: 'exit',       v: '0.4, 0, 1, 1' },
          { n: 'emphasized', v: '0.2, 0.7, 0.1, 1' },
        ].map((e) => (
          <div key={e.n} style={{ fontSize: 12, color: '#9C92AB', lineHeight: 1.5 }}>
            <span style={{ color: '#F5F1FA', fontWeight: 500 }}>{e.n}</span>
            <span style={{ fontFamily: 'var(--noxa-font-mono)', color: '#645A75', marginLeft: 8 }}>cubic-bezier({e.v})</span>
          </div>
        ))}
      </div>
    </div>
  </CardShell>
);

Object.assign(window, {
  ColorsBackground, ColorsSurface, ColorsAccent, ColorsVioletHierarchy, ColorsText, ColorsBorder, ColorsFamilyTints,
  TypeDisplay, TypeHeadings, TypeBody,
  SpacingScale, RadiusScale, MotionCard,
  CardShell,
});
