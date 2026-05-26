// NOXA — Component cards: Button, Input, Card, Badge, Avatar, Nav, Dialog, Toast

const Shell = ({ children, eyebrow, height, padding = 28 }) => (
  <div className="noxa-root" style={{
    width: '100%', height: height || '100%', padding, boxSizing: 'border-box',
    background: 'var(--noxa-bg-base)',
    display: 'flex', flexDirection: 'column', gap: 18,
  }}>
    {eyebrow && <div className="noxa-eyebrow">{eyebrow}</div>}
    {children}
  </div>
);

// ─── BUTTONS ───────────────────────────────────────────────────
const baseBtn = {
  fontFamily: 'var(--noxa-font-sans)', fontSize: 14, fontWeight: 500,
  padding: '10px 18px', borderRadius: 10, border: 'none', cursor: 'pointer',
  letterSpacing: -0.1, transition: 'all 200ms cubic-bezier(0.4,0,0.2,1)',
  display: 'inline-flex', alignItems: 'center', gap: 8,
};
const stateLabel = (s) => (
  <div style={{ fontFamily: 'var(--noxa-font-mono)', fontSize: 10, color: '#645A75', marginTop: 6 }}>{s}</div>
);

const ButtonsPrimary = () => (
  <Shell eyebrow="Button · Primary" height={260}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
      {[
        { s: 'default',  bg: '#7C3AED', col: '#fff' },
        { s: 'hover',    bg: '#9061F0', col: '#fff', shadow: '0 0 0 1px rgba(124, 58, 237,0.32), 0 8px 24px rgba(124, 58, 237,0.25)' },
        { s: 'active',   bg: '#5B21B6', col: '#fff' },
        { s: 'disabled', bg: '#2A2237', col: '#645A75' },
      ].map((b) => (
        <div key={b.s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <button style={{ ...baseBtn, background: b.bg, color: b.col, boxShadow: b.shadow }}>はじめる</button>
          {stateLabel(b.s)}
        </div>
      ))}
    </div>
  </Shell>
);

const ButtonsSecondary = () => (
  <Shell eyebrow="Button · Secondary" height={260}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
      {[
        { s: 'default',  bg: '#1A1424', border: '1px solid #2A2237' },
        { s: 'hover',    bg: '#221B2E', border: '1px solid #A78BFA' },
        { s: 'active',   bg: '#2A2237', border: '1px solid #A78BFA' },
        { s: 'disabled', bg: '#1A1424', border: '1px solid #2A2237', col: '#645A75' },
      ].map((b) => (
        <div key={b.s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <button style={{ ...baseBtn, background: b.bg, color: b.col || '#F5F1FA', border: b.border }}>詳細を見る</button>
          {stateLabel(b.s)}
        </div>
      ))}
    </div>
  </Shell>
);

const ButtonsGhostDestructive = () => (
  <Shell eyebrow="Button · Ghost & Destructive" height={300}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div>
        <div style={{ color: '#9C92AB', fontSize: 11, marginBottom: 8, fontFamily: 'var(--noxa-font-mono)' }}>GHOST</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {[
            { s: 'default',  bg: 'transparent', col: '#F5F1FA' },
            { s: 'hover',    bg: 'rgba(124, 58, 237,0.10)', col: '#F5F1FA' },
            { s: 'active',   bg: 'rgba(124, 58, 237,0.18)', col: '#F5F1FA' },
            { s: 'disabled', bg: 'transparent', col: '#645A75' },
          ].map((b) => (
            <div key={b.s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <button style={{ ...baseBtn, background: b.bg, color: b.col }}>キャンセル</button>
              {stateLabel(b.s)}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div style={{ color: '#9C92AB', fontSize: 11, marginBottom: 8, fontFamily: 'var(--noxa-font-mono)' }}>DESTRUCTIVE</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {[
            { s: 'default',  bg: '#C4384A', col: '#fff' },
            { s: 'hover',    bg: '#D24557', col: '#fff' },
            { s: 'active',   bg: '#A82D3D', col: '#fff' },
            { s: 'disabled', bg: '#2A2237', col: '#645A75' },
          ].map((b) => (
            <div key={b.s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <button style={{ ...baseBtn, background: b.bg, color: b.col }}>削除</button>
              {stateLabel(b.s)}
            </div>
          ))}
        </div>
      </div>
    </div>
  </Shell>
);

// ─── INPUTS ────────────────────────────────────────────────────
const inputBase = {
  fontFamily: 'var(--noxa-font-sans)', fontSize: 14,
  padding: '11px 14px', borderRadius: 10, width: '100%', boxSizing: 'border-box',
  background: '#14101C', color: '#F5F1FA', outline: 'none',
};

const Inputs = () => (
  <Shell eyebrow="Input · States" height={420}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
      {[
        { s: 'default', border: '1px solid #2A2237',  label: 'メールアドレス', val: '', placeholder: 'you@noxa.app', help: '' },
        { s: 'focus',   border: '1.5px solid #7C3AED', label: 'メールアドレス', val: 'rin@noxa.app', placeholder: '', help: '', glow: true },
        { s: 'error',   border: '1.5px solid #C4384A', label: 'パスワード',     val: '••••', placeholder: '',  help: '8文字以上で入力してください' },
        { s: 'disabled',border: '1px solid #221B2E',  label: '店舗ID',         val: 'NOX-2104',  placeholder: '', help: '', disabled: true },
      ].map((f) => (
        <div key={f.s} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label style={{ color: '#9C92AB', fontSize: 12, fontWeight: 500 }}>{f.label}</label>
          <div style={{ position: 'relative' }}>
            <input readOnly defaultValue={f.val} placeholder={f.placeholder} style={{
              ...inputBase, border: f.border, opacity: f.disabled ? 0.55 : 1,
              boxShadow: f.glow ? '0 0 0 4px rgba(124, 58, 237,0.16)' : 'none',
            }} />
          </div>
          {f.help && (
            <div style={{ color: f.s === 'error' ? '#C4384A' : '#9C92AB', fontSize: 11, marginTop: 2 }}>{f.help}</div>
          )}
          {stateLabel(f.s)}
        </div>
      ))}
    </div>
  </Shell>
);

// ─── CARDS ─────────────────────────────────────────────────────
const Cards = () => (
  <Shell eyebrow="Card" height={380}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      <div style={{ background: '#1A1424', border: '1px solid #2A2237', borderRadius: 18, padding: 22, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div className="noxa-eyebrow">YORULOG</div>
        <div style={{ fontFamily: 'var(--noxa-font-display-en)', fontSize: 28, color: '#F5F1FA', lineHeight: 1.1 }}>今夜の売上</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <span style={{ fontFamily: 'var(--noxa-font-display-en)', fontSize: 36, color: '#A78BFA', fontWeight: 500 }}>¥84,200</span>
          <span style={{ color: '#9C92AB', fontSize: 12 }}>+12.4%</span>
        </div>
        <div style={{ height: 1, background: 'rgba(167, 139, 250, 0.16)' }} />
        <div style={{ color: '#9C92AB', fontSize: 12 }}>同伴 2 件 · 指名 5 件</div>
      </div>
      <div style={{ background: 'linear-gradient(180deg, #1A1424 0%, #14101C 100%)', border: '1px solid #2A2237', borderRadius: 18, padding: 22, display: 'flex', flexDirection: 'column', gap: 12, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, background: 'radial-gradient(circle, rgba(124, 58, 237,0.18) 0%, transparent 70%)' }} />
        <div className="noxa-eyebrow" style={{ color: '#A78BFA' }}>NOMISHUGY</div>
        <div style={{ fontFamily: 'var(--noxa-font-display-jp)', fontSize: 22, color: '#F5F1FA', lineHeight: 1.2 }}>北新地・ウイスキーバー</div>
        <div style={{ color: '#9C92AB', fontSize: 12, lineHeight: 1.5 }}>静かに、ゆっくり。一杯から始まる夜。</div>
        <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
          <span style={{ padding: '4px 10px', background: 'rgba(167, 139, 250, 0.14)', color: '#A78BFA', borderRadius: 9999, fontSize: 11 }}>静か</span>
          <span style={{ padding: '4px 10px', background: 'rgba(167, 139, 250, 0.14)', color: '#A78BFA', borderRadius: 9999, fontSize: 11 }}>一人OK</span>
        </div>
      </div>
    </div>
  </Shell>
);

// ─── BADGES ────────────────────────────────────────────────────
const Badges = () => {
  const pill = (bg, color, text, border) => (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 10px', borderRadius: 9999, fontSize: 11, fontWeight: 600,
      background: bg, color, border: border || 'none',
      fontFamily: 'var(--noxa-font-sans)', letterSpacing: 0.02,
    }}>{text}</span>
  );
  const dot = (c) => <span style={{ width: 6, height: 6, borderRadius: 3, background: c }} />;
  return (
    <Shell eyebrow="Badge · Role & Status" height={300}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div>
          <div style={{ color: '#9C92AB', fontSize: 11, marginBottom: 10, fontFamily: 'var(--noxa-font-mono)' }}>ROLE</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {pill('rgba(124, 58, 237,0.14)', '#A78BFA', 'ホスト')}
            {pill('rgba(167, 139, 250, 0.16)', '#C4B5FD', 'キャスト')}
            {pill('rgba(196,56,74,0.14)', '#E07487', 'マネージャー')}
            {pill('rgba(156,146,171,0.14)', '#9C92AB', 'ゲスト')}
          </div>
        </div>
        <div>
          <div style={{ color: '#9C92AB', fontSize: 11, marginBottom: 10, fontFamily: 'var(--noxa-font-mono)' }}>STATUS</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {pill('rgba(74,222,128,0.12)', '#7BE8A1', <><>{dot('#7BE8A1')}</> 営業中</>)}
            {pill('rgba(167, 139, 250, 0.16)', '#A78BFA', <><>{dot('#A78BFA')}</> 同伴中</>)}
            {pill('rgba(156,146,171,0.14)', '#9C92AB', <><>{dot('#9C92AB')}</> オフライン</>)}
            {pill('rgba(196,56,74,0.14)', '#E07487', '満席')}
            {pill('transparent', '#A78BFA', 'NEW', '1px solid rgba(167, 139, 250, 0.36)')}
          </div>
        </div>
      </div>
    </Shell>
  );
};

// ─── AVATARS ───────────────────────────────────────────────────
const Avatars = () => {
  const Av = ({ size, initials, ring, tint }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div style={{
        width: size, height: size, borderRadius: '50%',
        background: tint || 'linear-gradient(135deg, #2A2237 0%, #1A1424 100%)',
        border: ring ? '1.5px solid #A78BFA' : '1px solid #2A2237',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--noxa-font-display-en)',
        color: '#F5F1FA', fontSize: size * 0.4, fontWeight: 500,
        boxShadow: ring ? '0 0 0 3px rgba(167, 139, 250, 0.16)' : 'none',
      }}>{initials}</div>
      <div style={{ color: '#645A75', fontSize: 10, fontFamily: 'var(--noxa-font-mono)' }}>{size}px</div>
    </div>
  );
  return (
    <Shell eyebrow="Avatar" height={280}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 18, justifyContent: 'flex-start' }}>
        <Av size={24} initials="r" />
        <Av size={32} initials="K" />
        <Av size={40} initials="蓮" />
        <Av size={56} initials="凛" tint="linear-gradient(135deg, #7C3AED 0%, #C4384A 100%)" />
        <Av size={72} initials="N" ring tint="linear-gradient(135deg, #1A1424 0%, #2A2237 100%)" />
      </div>
      <div style={{ color: '#9C92AB', fontSize: 12 }}>
        Gradient avatars use violet→wine for visual depth. <span style={{ color: '#A78BFA' }}>Ring</span> indicates verified or premium.
      </div>
    </Shell>
  );
};

// ─── NAV HEADER ────────────────────────────────────────────────
const NavHeader = () => (
  <Shell eyebrow="Nav · Header" height={280}>
    <div style={{ background: 'rgba(11,7,16,0.72)', backdropFilter: 'blur(20px)', border: '1px solid #2A2237', borderRadius: 14, padding: '14px 22px', display: 'flex', alignItems: 'center', gap: 24 }}>
      <div style={{ fontFamily: 'var(--noxa-font-display-en)', fontSize: 22, color: '#F5F1FA', letterSpacing: '0.04em', fontWeight: 500 }}>
        N<span style={{ color: '#A78BFA' }}>O</span>XA
      </div>
      <div style={{ display: 'flex', gap: 22, flex: 1 }}>
        {['yorulog', 'nomishugy', 'community', 'pricing'].map((n, i) => (
          <span key={n} style={{ color: i === 0 ? '#F5F1FA' : '#9C92AB', fontSize: 13, fontWeight: i === 0 ? 600 : 400, position: 'relative', paddingBottom: 4 }}>
            {n}
            {i === 0 && <span style={{ position: 'absolute', bottom: -4, left: 0, right: 0, height: 1, background: '#A78BFA' }} />}
          </span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <span style={{ color: '#9C92AB', fontSize: 13 }}>ログイン</span>
        <button style={{ ...baseBtn, background: '#7C3AED', color: '#fff', padding: '8px 14px', fontSize: 13 }}>はじめる</button>
      </div>
    </div>
    <div style={{ color: '#9C92AB', fontSize: 12 }}>Frosted overlay over base. Active link gets a hairline-violet underline.</div>
  </Shell>
);

// ─── DIALOG ────────────────────────────────────────────────────
const Dialog = () => (
  <Shell eyebrow="Dialog / Modal" height={420}>
    <div style={{ flex: 1, position: 'relative', background: '#0B0710', borderRadius: 14, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,7,16,0.72)', backdropFilter: 'blur(12px)' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '88%', background: '#1A1424', border: '1px solid #2A2237', borderRadius: 18, padding: 28, boxShadow: '0 24px 60px rgba(0,0,0,0.6)' }}>
        <div className="noxa-eyebrow" style={{ marginBottom: 14 }}>確認</div>
        <div style={{ fontFamily: 'var(--noxa-font-display-en)', fontSize: 22, color: '#F5F1FA', lineHeight: 1.2, marginBottom: 8 }}>このセッションを終了しますか？</div>
        <div style={{ color: '#9C92AB', fontSize: 13, lineHeight: 1.6, marginBottom: 20 }}>
          売上は自動で保存されます。後からダッシュボードで編集できます。
        </div>
        <div style={{ height: 1, background: 'rgba(167, 139, 250, 0.16)', marginBottom: 16 }} />
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
          <button style={{ ...baseBtn, background: 'transparent', color: '#9C92AB', padding: '8px 16px', fontSize: 13 }}>キャンセル</button>
          <button style={{ ...baseBtn, background: '#7C3AED', color: '#fff', padding: '8px 16px', fontSize: 13 }}>終了する</button>
        </div>
      </div>
    </div>
  </Shell>
);

// ─── TOAST ─────────────────────────────────────────────────────
const Toasts = () => {
  const T = ({ icon, color, title, body }) => (
    <div style={{
      background: '#1A1424', border: '1px solid #2A2237', borderRadius: 12,
      padding: '14px 16px', display: 'flex', gap: 12, alignItems: 'flex-start',
      boxShadow: '0 8px 24px rgba(0,0,0,0.4)', borderLeft: `2px solid ${color}`,
    }}>
      <div style={{ width: 22, height: 22, borderRadius: 11, background: `${color}22`, color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, flexShrink: 0 }}>{icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ color: '#F5F1FA', fontSize: 13, fontWeight: 600, marginBottom: 2 }}>{title}</div>
        <div style={{ color: '#9C92AB', fontSize: 12, lineHeight: 1.5 }}>{body}</div>
      </div>
    </div>
  );
  return (
    <Shell eyebrow="Toast" height={320}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <T icon="✓" color="#7BE8A1" title="保存しました" body="今夜のセッションが yorulog に記録されました。" />
        <T icon="i" color="#A78BFA" title="新しい一致" body="あなたと相性の良い飲み仲間が 3 人見つかりました。" />
        <T icon="!" color="#A78BFA" title="クレジット残少" body="残り 120 クレジット。チャージを推奨します。" />
        <T icon="×" color="#E07487" title="送信できませんでした" body="ネットワーク接続をご確認ください。" />
      </div>
    </Shell>
  );
};

Object.assign(window, {
  ButtonsPrimary, ButtonsSecondary, ButtonsGhostDestructive,
  Inputs, Cards, Badges, Avatars, NavHeader, Dialog, Toasts,
});
