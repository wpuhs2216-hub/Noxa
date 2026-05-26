// NOXA — Sample page previews: LP, Login, Dashboard

// ─── LANDING PAGE ──────────────────────────────────────────────
const LandingPage = () => (
  <div className="noxa-root" style={{
    width: '100%', height: '100%',
    background: 'var(--noxa-bg-base)',
    overflow: 'hidden', position: 'relative',
  }}>
    {/* ambient glow */}
    <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: 900, height: 600, background: 'radial-gradient(ellipse, rgba(124, 58, 237,0.18) 0%, transparent 60%)', pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', top: '40%', right: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(212,178,122,0.10) 0%, transparent 70%)', pointerEvents: 'none' }} />

    {/* nav */}
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', padding: '24px 64px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ fontFamily: 'var(--noxa-font-display-en)', fontSize: 26, color: '#F5F1FA', letterSpacing: '0.06em', fontWeight: 500 }}>
        N<span style={{ color: '#A78BFA' }}>O</span>XA
      </div>
      <div style={{ display: 'flex', gap: 28, marginLeft: 56, flex: 1 }}>
        {['yorulog', 'nomishugy', 'community', '料金', 'ニュース'].map((n) => (
          <span key={n} style={{ color: '#9C92AB', fontSize: 13 }}>{n}</span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
        <span style={{ color: '#9C92AB', fontSize: 13 }}>ログイン</span>
        <button style={{ background: '#7C3AED', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 18px', fontSize: 13, fontWeight: 500, fontFamily: 'inherit' }}>はじめる</button>
      </div>
    </div>

    {/* hero */}
    <div style={{ position: 'relative', padding: '96px 64px 64px', textAlign: 'left', maxWidth: 1100 }}>
      <div className="noxa-eyebrow">夜の街のための、統合プラットフォーム</div>
      <h1 style={{ fontFamily: 'var(--noxa-font-display-en)', fontSize: 88, lineHeight: 1.02, fontWeight: 500, color: '#F5F1FA', margin: '24px 0 14px', letterSpacing: '-0.02em' }}>
        Nightfall, <em style={{ color: '#A78BFA', fontStyle: 'italic', fontWeight: 400 }}>refined</em>.
      </h1>
      <div style={{ fontFamily: 'var(--noxa-font-display-jp)', fontSize: 28, color: '#F5F1FA', fontWeight: 400, lineHeight: 1.4, marginBottom: 32, letterSpacing: '0.04em' }}>
        働く、集う、つながる。<br />
        <span style={{ color: '#9C92AB' }}>夜の街に必要なすべてを、ひとつに。</span>
      </div>
      <div style={{ display: 'flex', gap: 14 }}>
        <button style={{ background: '#7C3AED', color: '#fff', border: 'none', borderRadius: 12, padding: '16px 28px', fontSize: 15, fontWeight: 500, fontFamily: 'inherit' }}>アカウントを作成</button>
        <button style={{ background: 'transparent', color: '#F5F1FA', border: '1px solid #2A2237', borderRadius: 12, padding: '16px 28px', fontSize: 15, fontWeight: 500, fontFamily: 'inherit' }}>製品を見る ↗</button>
      </div>
    </div>

    {/* product strip */}
    <div style={{ position: 'relative', padding: '0 64px 96px' }}>
      <div className="noxa-eyebrow" style={{ marginBottom: 24 }}>3 PRODUCTS · ONE FAMILY</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {[
          { key: 'yorulog',   tag: '夜職売上CRM',   tint: '#7C3AED', desc: 'ホスト・キャスト向け。今夜の同伴・指名・売上が一目で。', cta: 'try yorulog →' },
          { key: 'nomishugy', tag: '大阪バーポータル', tint: '#A78BFA', desc: 'バーを見つけ、飲み仲間と出会い、求人を見つける。', cta: 'open nomishugy →' },
          { key: 'community', tag: '交流掲示板',     tint: '#C4384A', desc: '夜の街で働く・遊ぶ人の声が集まる場所。Coming soon.', cta: '近日公開' },
        ].map((p) => (
          <div key={p.key} style={{
            background: 'linear-gradient(180deg, #1A1424 0%, #14101C 100%)',
            border: '1px solid #2A2237', borderRadius: 18, padding: 28,
            position: 'relative', overflow: 'hidden', minHeight: 260,
            display: 'flex', flexDirection: 'column', gap: 14,
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, height: 2, width: 56, background: p.tint }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 8, height: 8, borderRadius: 4, background: p.tint }} />
              <span style={{ fontFamily: 'var(--noxa-font-mono)', fontSize: 11, color: '#9C92AB', letterSpacing: 0.1, textTransform: 'uppercase' }}>{p.key}</span>
            </div>
            <div style={{ fontFamily: 'var(--noxa-font-display-jp)', fontSize: 24, color: '#F5F1FA', lineHeight: 1.25, fontWeight: 500 }}>{p.tag}</div>
            <div style={{ color: '#9C92AB', fontSize: 13, lineHeight: 1.65, flex: 1 }}>{p.desc}</div>
            <div style={{ color: p.tint, fontSize: 13, fontWeight: 500, fontFamily: 'var(--noxa-font-mono)' }}>{p.cta}</div>
          </div>
        ))}
      </div>

      {/* footer cta */}
      <div style={{ marginTop: 64, padding: '48px 56px', background: 'linear-gradient(135deg, #1A1424 0%, #221B2E 100%)', borderRadius: 24, border: '1px solid #2A2237', display: 'flex', alignItems: 'center', gap: 32, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -100, top: -100, width: 400, height: 400, background: 'radial-gradient(circle, rgba(124, 58, 237,0.18) 0%, transparent 60%)' }} />
        <div style={{ flex: 1, position: 'relative' }}>
          <div className="noxa-eyebrow" style={{ marginBottom: 10 }}>Get started</div>
          <div style={{ fontFamily: 'var(--noxa-font-display-en)', fontSize: 36, color: '#F5F1FA', lineHeight: 1.1, fontWeight: 500, marginBottom: 8 }}>あなたの夜を、もっと整える。</div>
          <div style={{ color: '#9C92AB', fontSize: 14 }}>30 秒でアカウント作成。クレジットカード不要。</div>
        </div>
        <button style={{ background: '#7C3AED', color: '#fff', border: 'none', borderRadius: 12, padding: '16px 32px', fontSize: 15, fontWeight: 500, fontFamily: 'inherit', position: 'relative' }}>はじめる →</button>
      </div>
    </div>
  </div>
);

// ─── LOGIN PAGE ────────────────────────────────────────────────
const LoginPage = () => (
  <div className="noxa-root" style={{ width: '100%', height: '100%', background: 'var(--noxa-bg-base)', position: 'relative', overflow: 'hidden', display: 'flex' }}>
    {/* visual half */}
    <div style={{ flex: 1, position: 'relative', borderRight: '1px solid #2A2237', background: 'linear-gradient(160deg, #14101C 0%, #0B0710 100%)', padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(124, 58, 237,0.18) 0%, transparent 60%)' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '15%', width: 280, height: 280, background: 'radial-gradient(circle, rgba(212,178,122,0.10) 0%, transparent 70%)' }} />

      <div style={{ position: 'relative', fontFamily: 'var(--noxa-font-display-en)', fontSize: 30, color: '#F5F1FA', letterSpacing: '0.06em', fontWeight: 500 }}>
        N<span style={{ color: '#A78BFA' }}>O</span>XA
      </div>

      <div style={{ position: 'relative' }}>
        <div style={{ fontFamily: 'var(--noxa-font-display-jp)', fontSize: 36, color: '#F5F1FA', lineHeight: 1.4, fontWeight: 500, letterSpacing: '0.02em' }}>
          おかえりなさい。<br />
          <span style={{ color: '#A78BFA', fontSize: 22, fontFamily: 'var(--noxa-font-display-en)', fontStyle: 'italic', fontWeight: 400, letterSpacing: 0 }}>The night is yours, again.</span>
        </div>
        <div style={{ color: '#9C92AB', fontSize: 14, marginTop: 18, maxWidth: 360, lineHeight: 1.65 }}>
          yorulog, nomishugy, NOXA Community. ひとつの NOXA アカウントで、全てのサービスに。
        </div>
      </div>

      <div style={{ position: 'relative', display: 'flex', gap: 16, color: '#645A75', fontSize: 12 }}>
        <span>© 2026 NOXA</span>
        <span>·</span>
        <span>利用規約</span>
        <span>·</span>
        <span>プライバシー</span>
      </div>
    </div>

    {/* form half */}
    <div style={{ width: 460, padding: '64px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 28 }}>
      <div>
        <div className="noxa-eyebrow" style={{ marginBottom: 14 }}>Sign in</div>
        <div style={{ fontFamily: 'var(--noxa-font-display-en)', fontSize: 36, color: '#F5F1FA', fontWeight: 500, lineHeight: 1.1, marginBottom: 8 }}>Welcome back</div>
        <div style={{ color: '#9C92AB', fontSize: 14 }}>NOXA アカウントでログイン</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div>
          <label style={{ color: '#9C92AB', fontSize: 12, fontWeight: 500, display: 'block', marginBottom: 6 }}>メールアドレス</label>
          <input defaultValue="rin@noxa.app" readOnly style={{ width: '100%', boxSizing: 'border-box', background: '#14101C', border: '1.5px solid #7C3AED', borderRadius: 10, padding: '12px 14px', color: '#F5F1FA', fontFamily: 'inherit', fontSize: 14, outline: 'none', boxShadow: '0 0 0 4px rgba(124, 58, 237,0.14)' }} />
        </div>
        <div>
          <label style={{ color: '#9C92AB', fontSize: 12, fontWeight: 500, display: 'block', marginBottom: 6 }}>パスワード</label>
          <input type="password" defaultValue="••••••••" readOnly style={{ width: '100%', boxSizing: 'border-box', background: '#14101C', border: '1px solid #2A2237', borderRadius: 10, padding: '12px 14px', color: '#F5F1FA', fontFamily: 'inherit', fontSize: 14, outline: 'none' }} />
          <div style={{ textAlign: 'right', marginTop: 6 }}><span style={{ color: '#A78BFA', fontSize: 12 }}>パスワードを忘れた？</span></div>
        </div>
      </div>

      <button style={{ background: '#7C3AED', color: '#fff', border: 'none', borderRadius: 12, padding: '14px', fontSize: 15, fontWeight: 500, fontFamily: 'inherit', cursor: 'pointer' }}>ログイン</button>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ flex: 1, height: 1, background: 'rgba(167, 139, 250, 0.16)' }} />
        <span style={{ color: '#645A75', fontSize: 11, fontFamily: 'var(--noxa-font-mono)', letterSpacing: 0.1 }}>OR</span>
        <div style={{ flex: 1, height: 1, background: 'rgba(167, 139, 250, 0.16)' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <button style={{ background: '#1A1424', color: '#F5F1FA', border: '1px solid #2A2237', borderRadius: 12, padding: '12px', fontSize: 14, fontFamily: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
          <span style={{ width: 18, height: 18, borderRadius: 4, background: '#fff', color: '#0B0710', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--noxa-font-display-en)', fontSize: 13, fontWeight: 600 }}>G</span>
          Google で続ける
        </button>
        <button style={{ background: '#1A1424', color: '#F5F1FA', border: '1px solid #2A2237', borderRadius: 12, padding: '12px', fontSize: 14, fontFamily: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
          <span style={{ width: 18, height: 18, color: '#F5F1FA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}></span>
          Apple で続ける
        </button>
      </div>

      <div style={{ textAlign: 'center', fontSize: 13, color: '#9C92AB' }}>
        アカウントをお持ちでない？ <span style={{ color: '#A78BFA' }}>新規登録</span>
      </div>
    </div>
  </div>
);

// ─── DASHBOARD ─────────────────────────────────────────────────
const DashboardPage = () => (
  <div className="noxa-root" style={{ width: '100%', height: '100%', background: 'var(--noxa-bg-base)', display: 'flex' }}>
    {/* sidebar */}
    <div style={{ width: 240, background: '#0B0710', borderRight: '1px solid #2A2237', padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: 28 }}>
      <div style={{ padding: '0 8px' }}>
        <div style={{ fontFamily: 'var(--noxa-font-display-en)', fontSize: 22, color: '#F5F1FA', letterSpacing: '0.06em', fontWeight: 500 }}>
          N<span style={{ color: '#A78BFA' }}>O</span>XA
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <div style={{ color: '#645A75', fontSize: 10, padding: '0 10px 8px', fontFamily: 'var(--noxa-font-mono)', letterSpacing: 0.1, textTransform: 'uppercase' }}>Account</div>
        {[
          { label: 'ダッシュボード', icon: '◇', active: true },
          { label: 'プラン', icon: '◈' },
          { label: 'クレジット', icon: '◆' },
          { label: '請求', icon: '◇' },
          { label: 'チーム', icon: '◇' },
        ].map((it) => (
          <div key={it.label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 8, background: it.active ? 'rgba(124, 58, 237,0.12)' : 'transparent', color: it.active ? '#F5F1FA' : '#9C92AB', fontSize: 13, fontWeight: it.active ? 500 : 400 }}>
            <span style={{ width: 14, color: it.active ? '#A78BFA' : '#645A75' }}>{it.icon}</span>
            <span>{it.label}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <div style={{ color: '#645A75', fontSize: 10, padding: '0 10px 8px', fontFamily: 'var(--noxa-font-mono)', letterSpacing: 0.1, textTransform: 'uppercase' }}>Services</div>
        {[
          { label: 'yorulog',   tint: '#7C3AED' },
          { label: 'nomishugy', tint: '#A78BFA' },
          { label: 'community', tint: '#C4384A', soon: true },
        ].map((s) => (
          <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 8, color: s.soon ? '#645A75' : '#F5F1FA', fontSize: 13 }}>
            <span style={{ width: 6, height: 6, borderRadius: 3, background: s.tint, opacity: s.soon ? 0.5 : 1 }} />
            <span style={{ fontFamily: 'var(--noxa-font-mono)' }}>{s.label}</span>
            {s.soon && <span style={{ marginLeft: 'auto', fontSize: 9, color: '#645A75', fontFamily: 'var(--noxa-font-mono)' }}>SOON</span>}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10, padding: 10, borderRadius: 10, background: '#1A1424', border: '1px solid #2A2237' }}>
        <div style={{ width: 32, height: 32, borderRadius: 16, background: 'linear-gradient(135deg, #7C3AED 0%, #C4384A 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'var(--noxa-font-display-en)', fontSize: 14 }}>凛</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: '#F5F1FA', fontSize: 12, fontWeight: 500 }}>凛 / Rin</div>
          <div style={{ color: '#9C92AB', fontSize: 10 }}>rin@noxa.app</div>
        </div>
      </div>
    </div>

    {/* main */}
    <div style={{ flex: 1, padding: '36px 40px', overflow: 'auto' }}>
      <div className="noxa-eyebrow" style={{ marginBottom: 10 }}>Account</div>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 32 }}>
        <h1 style={{ fontFamily: 'var(--noxa-font-display-en)', fontSize: 42, color: '#F5F1FA', fontWeight: 500, margin: 0, letterSpacing: '-0.01em' }}>
          こんばんは、<span style={{ color: '#A78BFA', fontFamily: 'var(--noxa-font-display-jp)' }}>凛</span> さん
        </h1>
        <button style={{ background: 'transparent', color: '#F5F1FA', border: '1px solid #2A2237', borderRadius: 10, padding: '10px 16px', fontSize: 13, fontFamily: 'inherit' }}>設定 →</button>
      </div>

      {/* plan + credits */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 20, marginBottom: 32 }}>
        <div style={{ background: 'linear-gradient(135deg, #1A1424 0%, #221B2E 100%)', border: '1px solid #2A2237', borderRadius: 18, padding: 28, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, background: 'radial-gradient(circle, rgba(124, 58, 237,0.22) 0%, transparent 60%)' }} />
          <div style={{ position: 'relative' }}>
            <div className="noxa-eyebrow" style={{ marginBottom: 10 }}>Current plan</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 6 }}>
              <span style={{ fontFamily: 'var(--noxa-font-display-en)', fontSize: 36, color: '#F5F1FA', fontWeight: 500 }}>NOXA Pro</span>
              <span style={{ padding: '3px 9px', background: 'rgba(167, 139, 250, 0.22)', color: '#C4B5FD', borderRadius: 9999, fontSize: 11, fontWeight: 600, letterSpacing: 0.04 }}>ANNUAL</span>
            </div>
            <div style={{ color: '#9C92AB', fontSize: 13, marginBottom: 22 }}>¥4,800 / 月 · 次回更新 2026/06/12</div>
            <div style={{ height: 1, background: 'rgba(167, 139, 250, 0.16)', marginBottom: 16 }} />
            <div style={{ display: 'flex', gap: 20, fontSize: 12, color: '#9C92AB' }}>
              <span><span style={{ color: '#7BE8A1' }}>●</span> yorulog 無制限</span>
              <span><span style={{ color: '#7BE8A1' }}>●</span> nomishugy Premium</span>
              <span><span style={{ color: '#A78BFA' }}>●</span> Community 早期アクセス</span>
            </div>
          </div>
        </div>

        <div style={{ background: '#1A1424', border: '1px solid #2A2237', borderRadius: 18, padding: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="noxa-eyebrow">Credits</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
            <span style={{ fontFamily: 'var(--noxa-font-display-en)', fontSize: 48, color: '#A78BFA', fontWeight: 500, lineHeight: 1 }}>4,200</span>
            <span style={{ color: '#9C92AB', fontSize: 13 }}>/ 5,000</span>
          </div>
          <div style={{ height: 6, background: '#221B2E', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{ width: '84%', height: '100%', background: 'linear-gradient(90deg, #7C3AED 0%, #A78BFA 100%)' }} />
          </div>
          <button style={{ background: '#7C3AED', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 14px', fontSize: 13, fontFamily: 'inherit', alignSelf: 'flex-start' }}>クレジット追加</button>
        </div>
      </div>

      {/* services */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
          <h2 style={{ fontFamily: 'var(--noxa-font-sans)', fontSize: 20, color: '#F5F1FA', fontWeight: 600, margin: 0 }}>サービス</h2>
          <span style={{ color: '#9C92AB', fontSize: 13 }}>3 つ連携中</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {[
          { name: 'yorulog',   tag: '夜職売上CRM',   tint: '#7C3AED', stat: '今夜 ¥84,200',     status: '営業中',    statusColor: '#7BE8A1' },
          { name: 'nomishugy', tag: '大阪バーポータル', tint: '#A78BFA', stat: '8 件の新着メッセージ', status: 'アクティブ', statusColor: '#7BE8A1' },
          { name: 'community', tag: '交流掲示板',     tint: '#C4384A', stat: 'ウェイトリスト #142',  status: '近日公開',   statusColor: '#9C92AB', soon: true },
        ].map((s) => (
          <div key={s.name} style={{ background: '#1A1424', border: '1px solid #2A2237', borderRadius: 16, padding: 22, display: 'flex', flexDirection: 'column', gap: 12, opacity: s.soon ? 0.78 : 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 28, height: 28, borderRadius: 7, background: `${s.tint}22`, color: s.tint, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--noxa-font-display-en)', fontSize: 13, fontWeight: 600 }}>{s.name[0].toUpperCase()}</span>
                <div>
                  <div style={{ color: '#F5F1FA', fontSize: 14, fontWeight: 600, fontFamily: 'var(--noxa-font-mono)' }}>{s.name}</div>
                  <div style={{ color: '#9C92AB', fontSize: 11, fontFamily: 'var(--noxa-font-sans-jp)' }}>{s.tag}</div>
                </div>
              </div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: s.statusColor, fontSize: 11 }}>
                <span style={{ width: 5, height: 5, borderRadius: 3, background: s.statusColor }} />
                {s.status}
              </span>
            </div>
            <div style={{ height: 1, background: 'rgba(76, 29, 149, 0.30)' }} />
            <div style={{ color: '#F5F1FA', fontSize: 14 }}>{s.stat}</div>
            <div style={{ color: s.soon ? '#645A75' : s.tint, fontSize: 12, fontFamily: 'var(--noxa-font-mono)', marginTop: 'auto' }}>{s.soon ? '通知を受け取る →' : 'open →'}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

Object.assign(window, { LandingPage, LoginPage, DashboardPage });
