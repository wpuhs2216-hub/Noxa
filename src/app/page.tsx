import Link from 'next/link';

const PRODUCTS = [
  {
    key: 'yorulog',
    tag: '夜職売上 CRM',
    desc: 'ホスト・キャスト向け。今夜の同伴・指名・売上が一目で。',
    cta: 'try yorulog →',
    url: 'https://yorulog.vercel.app',
    tint: '#7C3AED',
  },
  {
    key: 'nomishugy',
    tag: '大阪バーポータル',
    desc: 'バーを見つけ、飲み仲間と出会い、求人を見つける。',
    cta: 'open nomishugy →',
    url: 'https://nomishugy.vercel.app',
    tint: '#A78BFA',
  },
  {
    key: 'community',
    tag: '交流掲示板',
    desc: '夜の街で働く・遊ぶ人の声が集まる場所。Coming soon.',
    cta: '近日公開',
    url: '/community',
    tint: '#C4384A',
    soon: true,
  },
];

export default function NoxaLandingPage() {
  return (
    <main className="relative overflow-hidden" style={{ background: 'var(--noxa-bg-base)', minHeight: '100vh' }}>
      {/* ambient violet glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
          width: 900, height: 600,
          background: 'radial-gradient(ellipse, rgba(124, 58, 237, 0.18) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute', top: '40%', right: '-10%',
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(212,178,122,0.10) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Nav */}
      <nav
        className="relative flex items-center px-6 md:px-16 py-6"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
      >
        <Link href="/" className="noxa-logo" style={{ fontSize: 26 }}>
          N<em>O</em>XA
        </Link>
        <div className="hidden md:flex gap-7 ml-14 flex-1">
          {['yorulog', 'nomishugy', 'community', '料金', 'ニュース'].map((n) => (
            <span key={n} style={{ color: 'var(--noxa-text-muted)', fontSize: 13 }}>{n}</span>
          ))}
        </div>
        <div className="flex gap-3.5 items-center ml-auto">
          <Link
            href="/account/login"
            style={{ color: 'var(--noxa-text-muted)', fontSize: 13 }}
            className="hidden sm:inline"
          >
            ログイン
          </Link>
          <Link href="/account/signup" className="noxa-btn noxa-btn-primary" style={{ fontSize: 13 }}>
            はじめる
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-6 md:px-16 pt-24 pb-16" style={{ maxWidth: 1100 }}>
        <div className="noxa-eyebrow">夜の街のための、統合プラットフォーム</div>
        <h1
          className="noxa-display"
          style={{ fontSize: 'clamp(48px, 8vw, 88px)', margin: '24px 0 14px', color: 'var(--noxa-text-primary)' }}
        >
          Nightfall,{' '}
          <em
            style={{
              color: 'var(--noxa-accent-primary-ink)',
              fontStyle: 'italic',
              fontWeight: 400,
            }}
          >
            refined
          </em>
          .
        </h1>
        <p
          style={{
            fontFamily: 'var(--noxa-font-display-jp)',
            fontSize: 'clamp(20px, 3.2vw, 28px)',
            color: 'var(--noxa-text-primary)',
            fontWeight: 400,
            lineHeight: 1.4,
            marginBottom: 32,
            letterSpacing: '0.04em',
          }}
        >
          働く、集う、つながる。
          <br />
          <span style={{ color: 'var(--noxa-text-muted)' }}>
            夜の街に必要なすべてを、ひとつに。
          </span>
        </p>
        <div className="flex gap-3.5 flex-wrap">
          <Link href="/account/signup" className="noxa-btn noxa-btn-primary" style={{ padding: '16px 28px', fontSize: 15 }}>
            アカウントを作成
          </Link>
          <Link href="#products" className="noxa-btn noxa-btn-secondary" style={{ padding: '16px 28px', fontSize: 15 }}>
            製品を見る ↗
          </Link>
        </div>
      </section>

      {/* Product strip */}
      <section id="products" className="relative px-6 md:px-16 pb-24">
        <div className="noxa-eyebrow" style={{ marginBottom: 24 }}>
          3 PRODUCTS · ONE FAMILY
        </div>
        <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {PRODUCTS.map((p) => (
            <Link
              key={p.key}
              href={p.url}
              target={p.url.startsWith('http') ? '_blank' : undefined}
              className="relative overflow-hidden flex flex-col gap-3.5"
              style={{
                background: 'linear-gradient(180deg, #1A1424 0%, #14101C 100%)',
                border: '1px solid var(--noxa-border)',
                borderRadius: 'var(--noxa-radius-lg)',
                padding: 28,
                minHeight: 260,
                textDecoration: 'none',
                transition: 'border-color var(--noxa-duration-base) var(--noxa-ease-standard), transform var(--noxa-duration-base) var(--noxa-ease-standard)',
              }}
            >
              <div
                aria-hidden
                style={{
                  position: 'absolute', top: 0, left: 0,
                  height: 2, width: 56,
                  background: p.tint,
                }}
              />
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden
                  style={{ width: 8, height: 8, borderRadius: 4, background: p.tint }}
                />
                <span
                  className="noxa-mono"
                  style={{
                    fontSize: 11,
                    color: 'var(--noxa-text-muted)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {p.key}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--noxa-font-display-jp)',
                  fontSize: 24,
                  color: 'var(--noxa-text-primary)',
                  lineHeight: 1.25,
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                {p.tag}
              </h3>
              <p style={{ color: 'var(--noxa-text-muted)', fontSize: 13, lineHeight: 1.65, flex: 1, margin: 0 }}>
                {p.desc}
              </p>
              <div
                className="noxa-mono"
                style={{
                  color: p.tint,
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                {p.cta}
              </div>
            </Link>
          ))}
        </div>

        {/* Footer CTA */}
        <div
          className="relative overflow-hidden mt-16 flex items-center gap-8 flex-wrap"
          style={{
            padding: '48px 56px',
            background: 'linear-gradient(135deg, #1A1424 0%, #221B2E 100%)',
            borderRadius: 24,
            border: '1px solid var(--noxa-border)',
          }}
        >
          <div
            aria-hidden
            style={{
              position: 'absolute', right: -100, top: -100,
              width: 400, height: 400,
              background: 'radial-gradient(circle, rgba(124, 58, 237, 0.18) 0%, transparent 60%)',
            }}
          />
          <div className="flex-1 relative" style={{ minWidth: 260 }}>
            <div className="noxa-eyebrow" style={{ marginBottom: 10 }}>Get started</div>
            <div
              className="noxa-display"
              style={{ fontSize: 'clamp(28px, 4vw, 36px)', marginBottom: 8 }}
            >
              あなたの夜を、もっと整える。
            </div>
            <div style={{ color: 'var(--noxa-text-muted)', fontSize: 14 }}>
              30 秒でアカウント作成。クレジットカード不要。
            </div>
          </div>
          <Link href="/account/signup" className="noxa-btn noxa-btn-primary relative" style={{ padding: '16px 32px', fontSize: 15 }}>
            はじめる →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative px-6 md:px-16 py-8 flex gap-4 flex-wrap items-center"
        style={{
          color: 'var(--noxa-text-faint)',
          fontSize: 12,
          borderTop: '1px solid var(--noxa-divider)',
        }}
      >
        <span>© 2026 NOXA</span>
        <span aria-hidden>·</span>
        <Link href="/terms" style={{ color: 'var(--noxa-text-faint)' }}>利用規約</Link>
        <span aria-hidden>·</span>
        <Link href="/privacy" style={{ color: 'var(--noxa-text-faint)' }}>プライバシー</Link>
        <span style={{ marginLeft: 'auto' }}>運営: 田口修平 / egshugy</span>
      </footer>
    </main>
  );
}
