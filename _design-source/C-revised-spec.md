# NOXA C-revised — Tactile Glow × ui-ux-pro-max 補強仕様

作成: 2026-05-30
ベース: `_design-source/variants/tactile-glow.html` (C 案)
補強ソース: ui-ux-pro-max BM25 推論（style / landing / typography / chart / ux）

---

## 0. 決定事項

採用方向：**C. Tactile Glow** をベースに、ui-ux-pro-max が引いてきた業界セオリーを統合して v1.1 化する。

---

## 1. C 案で「そのまま残す」要素

ui-ux-pro-max が NOXA に対して引いた業界推論（Trust & Authority + Real-Time / Cyberpunk UI / Japanese Elegant）と整合しているもの：

| 要素 | C 案の決定 | 推論との整合 |
|---|---|---|
| ダークモード only | `#07050D` background | Dark Mode (OLED) / Cyberpunk UI 推奨と一致 |
| neon glow（限定） | violet `#8B5CF6` + neon-purple `#C084FC` glow | Cyberpunk UI の「Neon glow text-shadow」と一致 |
| violet ヒエラルキー | brand hue 維持 | ブランド統一性を優先（推論色は無視） |
| serif display | Cormorant Garamond + Shippori | "Editorial Classic"（推論にも該当） |
| live data 強調 | cyan-mist `#67E8F9` で売上発光 | Real-Time landing の「Status colors (green/amber/red)」を拡張した形 |
| subtle noise texture | SVG fractalNoise overlay | Cinema Mobile dark の「animated ambient blobs」相当 |

---

## 2. C 案を「変更すべき」要素（重要）

### 2.1 ⚠️ pulse-glow CTA は要再検討
**問題**: ui-ux-pro-max の Animation ガイドライン `continuous-animation`（severity: Medium）に該当：
> "Infinite animations are distracting"
> Do: Use for **loading indicators only**
> Don't: Use for **decorative elements**

**対応**:
- CTA の `animation: pulse-glow 3.2s ease-in-out infinite` は **削除**
- 代わりに **hover 時のみ** glow を強化（150〜300ms transition）
- 「動いていることが意味を持つ」要素（loading skeleton、live data の点滅）にのみ continuous を許可

### 2.2 ⚠️ prefers-reduced-motion 必須対応（現状未実装）
すべての glow / texture / hover scale に対し:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .tex { background-image: none; }  /* noise texture も無効化 */
}
```

### 2.3 ⚠️ pure `#000000` は使わない
ui-ux-pro-max の Cinema Mobile dark によると、**pure black は OLED smear（残像）** を起こす：
- C 案の `#07050D` は OK（near-black、わずかに violet tint）
- ただし要素の中で `#000000` を使っている箇所があれば差し替え（現状チェック必要）

---

## 3. 追加すべき設計要素（C 案で未定義）

### 3.1 セマンティック status token 群（最優先）
ui-ux-pro-max の Real-Time landing パターン「Status colors (green/amber/red)」を正式 token 化：

```css
:root {
  /* Status semantic tokens */
  --noxa-status-success: #7BE8A1;     /* 営業中、アクティブ、成功 */
  --noxa-status-warning: #F5D472;     /* 注意、ペンディング */
  --noxa-status-error:   #C4384A;     /* エラー（wine と同じ） */
  --noxa-status-info:    #67E8F9;     /* live data、cyan-mist */
  --noxa-status-soon:    #9C92AB;     /* 近日公開、グレー */

  /* Status with glow (for live indicators) */
  --noxa-status-success-glow: 0 0 8px rgba(123, 232, 161, 0.5);
  --noxa-status-info-glow:    0 0 8px rgba(103, 232, 249, 0.5);
}
```
→ レビュー 2.6 で挙げた「色覚多様性ユーザー対策」と組み合わせて、すべての status バッジに **ドット色 + アイコン + テキスト** の三重符号化。

### 3.2 motion token 群
Cinema Mobile dark から借用：

```css
:root {
  /* Motion */
  --noxa-easing-natural: cubic-bezier(0.16, 1, 0.3, 1);  /* expo.out 風 */
  --noxa-easing-spring:  cubic-bezier(0.34, 1.56, 0.64, 1);  /* 軽い spring */
  --noxa-easing-standard: cubic-bezier(0.4, 0, 0.2, 1);  /* 既存 */

  --noxa-duration-instant: 80ms;     /* tap feedback */
  --noxa-duration-fast:    150ms;    /* hover, focus */
  --noxa-duration-base:    250ms;    /* panel, toast */
  --noxa-duration-slow:    400ms;    /* modal, page */
}
```

### 3.3 elevation スケール
shadcn/ui 実装時に統一できるよう：

```css
:root {
  --noxa-elev-0: none;
  --noxa-elev-1: 0 1px 2px rgba(0,0,0,.5);
  --noxa-elev-2: 0 6px 24px rgba(0,0,0,.45), 0 1px 2px rgba(0,0,0,.4);
  --noxa-elev-3: 0 24px 60px rgba(0,0,0,.6), 0 2px 6px rgba(0,0,0,.4);
  /* glow tokens (C 案から) */
  --noxa-glow-soft:   0 0 16px rgba(139, 92, 246, 0.32);
  --noxa-glow-strong: 0 0 24px rgba(192, 132, 252, 0.45), 0 0 60px rgba(139, 92, 246, 0.32);
  --noxa-glow-ring:   0 0 0 1px rgba(184, 156, 251, 0.40), 0 0 24px rgba(139, 92, 246, 0.32);
}
```

---

## 4. サブブランド別 LP パターン（C 案の最大の漏れ）

ui-ux-pro-max は NOXA parent には「Trust & Authority + Real-Time」を引いたが、**yorulog と nomishugy は別パターン**になる。C 案では LP が 1 種類しかないため、サブブランドごとに分ける：

### 4.1 NOXA parent（umbrella ブランド）
- パターン: **Trust & Authority + Real-Time**
- セクション順: Hero / Features / CTA
- 現状の C 案 LP がほぼこれに一致 → そのまま採用

### 4.2 yorulog（夜職売上 CRM）
- パターン: **Real-Time / Operations Landing**
- セクション順:
  1. **Hero（製品 + ライブプレビュー or ステータス）** ← 売上ダッシュボードのスクショ or リアルタイム数値
  2. **Key metrics / indicators** ← 「ホスト 1,200 名利用 / 月間 ¥2 億円流通 / 平均売上 +18%」など
  3. **How it works** ← 3 ステップで仕組み紹介
  4. **CTA**（Start trial / Contact）
- カラー戦略: Dark + status colors（green/amber/red） + violet → **C 案の方向と完全一致**
- CTA 配置: **navbar + after metrics**（2 箇所）

### 4.3 nomishugy（バーポータル + マッチング）
- パターン: **Marketplace / Directory**
- セクション順:
  1. **Hero（Search focused）** ← 「大阪・ミナミ・梅田・北新地」のエリア検索 + 「バー / バーテン求人 / 飲み仲間」タブ
  2. **Categories** ← カテゴリアイコン（バー / ガールズバー / コンカフェ / スナック）
  3. **Featured Listings** ← おすすめバー 6〜8 件
  4. **Trust/Safety** ← レビュー、運営チェック、年齢確認
  5. **CTA（Become a host/seller）** ← 「バーを掲載する」「キャストを探す」
- カラー戦略: 検索バーは High contrast、カテゴリは Visual icons、Trust は Blue/Green
- CTA 配置: **Hero Search Bar + Navbar 'バーを掲載する'**

→ **C 案 HTML をベースに、yorulog LP と nomishugy LP は別ファイルで作成必要**。今の C 案には Hero search box / Categories / Featured listings / Trust signals が無い。

### 4.4 NOXA Community
- パターン: 既存 v1 の「coming soon」表現で OK
- 正式リリース時に **Hero + Testimonials + CTA**（社会的証明型）に切替

---

## 5. 売上ダッシュボード（yorulog 主要画面）の追加スペック

ui-ux-pro-max の chart 推論より：

| 観点 | 推奨 |
|---|---|
| グラフ種別 | **Line Chart**（trend over time）/ secondary は Area Chart |
| ライブラリ | **Recharts** または ApexCharts（React 18+ 対応） |
| プライマリ色 | violet `#8B5CF6`（NOXA 統一） |
| 複数 series | 色 + **線種**（solid/dashed/dotted）の二重符号化 |
| Fill | opacity 20% で area 表現 |
| データ密度 | 1000 pts まで SVG、それ以上は Canvas + downsampling |
| インタラクション | Hover + Zoom |
| Accessibility | A11y fallback として「データテーブル切替」を必ず併設 |

実装サンプル:
```tsx
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

<ResponsiveContainer width="100%" height={280}>
  <LineChart data={salesData}>
    <XAxis dataKey="date" stroke="#9C92AB" fontSize={11} />
    <YAxis stroke="#9C92AB" fontSize={11} />
    <Tooltip contentStyle={{ background: '#1A1424', border: '1px solid #2A2237', borderRadius: 8 }} />
    <Line type="monotone" dataKey="sales" stroke="#8B5CF6" strokeWidth={2} dot={false}
          activeDot={{ r: 5, fill: '#C084FC' }} />
  </LineChart>
</ResponsiveContainer>
```

---

## 6. モバイル動線（C 案で未定義 → 必須）

C 案はすべて 1280px 固定。ui-ux-pro-max のガイドライン：

### 6.1 ブレークポイント
```
sm: 375px  (small phone)
md: 768px  (tablet)
lg: 1024px (laptop)
xl: 1440px (desktop)
```

### 6.2 ナビゲーション戦略
- **モバイル（<768px）**: bottom tab bar 5 個まで（Dashboard / yorulog / nomishugy / Community / Account）
- **タブレット（768〜1023px）**: top app bar + drawer
- **デスクトップ（≥1024px）**: 現状の sidebar 240px

### 6.3 touch target
- 全ボタン min `44×44px`（CTA は 48〜52px）
- 隣接要素間 `8px` 以上の隙間
- input は min `height: 44px`

### 6.4 sticky / fixed の安全領域
```css
/* iOS safe area */
.bottom-nav { padding-bottom: env(safe-area-inset-bottom); }
.top-nav    { padding-top: env(safe-area-inset-top); }
```

---

## 7. shadcn/ui コンポーネント実装指針

C 方向を shadcn/ui + Tailwind で実装する際の対応マッピング：

| shadcn コンポーネント | C 案カスタマイズ |
|---|---|
| `Button` (default) | `bg-[--noxa-accent-primary]` + `box-shadow: var(--noxa-glow-soft)` on hover only |
| `Button` (destructive) | `bg-[--noxa-status-error]` |
| `Button` (outline) | `border-[--noxa-border-strong]` + 透過 |
| `Input` (focus) | `ring-2 ring-[--noxa-accent-primary]` + `box-shadow: 0 0 0 4px rgba(139,92,246,.2)` |
| `Card` | `bg-[--noxa-surface-card]` + `border-[--noxa-border]` + optional `tex` class |
| `Badge` (status) | status semantic token を背景 22% alpha + 文字色 ink |
| `Dialog` overlay | `bg-[--noxa-bg-overlay]` + `backdrop-blur-md` |
| `Toast` | 左端に 3px の status color アクセント |
| `Tabs` (active) | underline + violet color |
| `Avatar` (gradient) | `bg-gradient-to-br from-violet to-violet-neon` + glow on focused |

### Tailwind config の追加
```js
// tailwind.config.ts (Tailwind 4 syntax)
@theme {
  --color-noxa-bg-base:        #07050D;
  --color-noxa-bg-elevated:    #110A1C;
  --color-noxa-surface-card:   #1A1228;
  --color-noxa-accent-primary: #8B5CF6;
  --color-noxa-accent-ink:     #B89CFB;
  --color-noxa-accent-neon:    #C084FC;
  --color-noxa-status-success: #7BE8A1;
  --color-noxa-status-info:    #67E8F9;
  --color-noxa-status-error:   #C4384A;

  --font-display: 'Cormorant Garamond', 'Shippori Mincho B1', serif;
  --font-sans:    'Geist', 'Noto Sans JP', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', ui-monospace, monospace;

  --ease-natural: cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## 8. 実装ロードマップ（v1.1 → v1.2）

### Phase v1.1（トークン更新）
- [ ] `_design-source/project/colors_and_type.css` を C 配色 + status/motion/elevation トークン追加で更新
- [ ] `src/app/globals.css` に Tailwind 4 `@theme` 構文で同期
- [ ] 既存の `/account/login`、`/account/signup`、`/`、dashboard を新 token で再描画
- [ ] `prefers-reduced-motion` ガード追加
- [ ] pulse-glow CTA を hover-only に変更

### Phase v1.2（サブブランド LP + dashboard）
- [ ] yorulog LP: Real-Time / Operations パターンで `_design-source/variants/yorulog-lp.html` を新規作成
- [ ] nomishugy LP: Marketplace / Directory パターンで `_design-source/variants/nomishugy-lp.html` を新規作成
- [ ] dashboard に Recharts ベースの売上 Line Chart を実装
- [ ] モバイル bottom tab bar コンポーネント実装
- [ ] レスポンシブブレークポイント全 page 適用

### Phase v1.3（仕上げ）
- [ ] gstack-qa で全画面ブラウザ確認
- [ ] WCAG コントラスト全 token ペア検証
- [ ] OLED 端末で pure black 残像チェック
- [ ] Lighthouse / Core Web Vitals 計測

---

## 9. 「C 案でいい」を再確認できた根拠

ui-ux-pro-max 検索を通じて、C 方向の妥当性が以下で裏付けられた：

1. **業界推論で Cyberpunk UI が引かれた** → neon glow + dark + serif の組合せは entertainment / 夜系で実績ある定石
2. **Real-Time / Operations landing パターン** → yorulog（夜職売上 CRM）が要求する「リアルタイム指標」の表現に cyan-mist live data がそのまま機能
3. **Cinema Mobile dark** の参考実装が C 案と酷似 → 設計思想が既に「業界水準」に乗っている
4. **タイポ "Editorial Classic"（Cormorant Garamond）が独立検索で再出現** → 現状ペアリング維持で正解

逆に C 案で **見落としていた重要観点** は §2〜§7 に集約。これらを反映すれば C-revised は **NOXA の v1.1 として実装に進める品質** に到達する。

---

## 10. ネクストアクション提案

優先順：
1. **§2.1 + §2.2** の motion 修正（pulse-glow と reduced-motion）を `_design-source/variants/tactile-glow.html` に反映 → C-revised プレビュー
2. **§3.1** status token を `colors_and_type.css` と `globals.css` に追加
3. **§4.2 / §4.3** yorulog LP / nomishugy LP の別案を 1〜2 ファイル作成（業界パターンの実装サンプル）
4. **§5** dashboard に Recharts を入れて売上グラフを実装

どれから着手するか指示ください。
