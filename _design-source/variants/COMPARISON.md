# NOXA Design v1 + 3 Variants — 比較レポート

作成: 2026-05-26

## 1. 並べて見るには

すべて Launch preview パネル経由で開けます（VSCode で各ファイルを表示するだけ）。Open Design daemon にも投入済み（後述）。

| 版 | ファイルパス | バイト数 | Open Design Project ID |
|---|---|---|---|
| 現状 v1 | [_design-source/project/NOXA Design System.html](_design-source/project/NOXA Design System.html) | — | `noxa-current-v1` |
| A. Warmer Nightfall | [_design-source/variants/warmer-nightfall.html](_design-source/variants/warmer-nightfall.html) | 29 KB | `noxa-variant-a-warmer` |
| B. Editorial Minimal | [_design-source/variants/editorial-minimal.html](_design-source/variants/editorial-minimal.html) | 20 KB | `noxa-variant-b-editorial` |
| C. Tactile Glow | [_design-source/variants/tactile-glow.html](_design-source/variants/tactile-glow.html) | 31 KB | `noxa-variant-c-glow` |

---

## 2. 各案の特徴

### v1（現状）
- ダーク violet 単色ヒエラルキー（5 段階）+ wine destructive
- yorulog `#7C3AED` / nomishugy `#A78BFA` / community `#C4384A`
- divider: violet hairline 16% alpha
- Cormorant Garamond + Shippori Mincho B1 のディスプレイ
- editorial / literary tone

### A. Warmer Nightfall — 温度感を上げる
**コア変更**：
- bg-base `#0B0710` → `#100A0E`（青み減・暖色寄り）
- **gold `#D4B27A` を 2nd accent に導入**
- **yorulog tint: violet → wine** に変更（親 NOXA と明確分離）
- community tint: wine → gold（温かみ・近日公開のお祝い感）
- divider: violet hairline → gold hairline 18%
- text-primary: `#F5F1FA` → `#F5EDE2`（warm white）
- CTA: violet → gold-deep のグラデ
- 「あなたの夜を、もっと整える」を italic gold で強調

**狙い**：レビュー 2.1（ブランド識別性ジレンマ）を直接解決。yorulog 単体で見て親と判別不能だった問題が、wine の独自色で解消。同時に gold で「ラグジュアリー夜店」感が増す。

**懸念**：色数増（violet + wine + gold）で「単一色ヒエラルキー」のミニマル感は薄れる。ハイクラスバー客向けの dignity は残しつつ、若年カジュアル層には少し重いかも。

---

### B. Editorial Minimal — 雑誌見開きに振る
**コア変更**：
- bg-base さらに deep: `#080608`
- **violet 3 段階のみ**（primary/ink/faint）+ wine + bone white `#EDE5D7`
- **グラデーション・radial glow を完全撤廃**
- LP hero: **Cormorant Garamond 140px Italic Light** で「Nightfall, refined.」を 2 行展開
- 余白: padding 96px → 160px、grid に 160px の「日付/編集情報」カラムを追加
- 「3 PRODUCTS」を **№ 01 · YORULOG** のような誌面ナンバリング
- divider: bone hairline 10%、ボタンも全部 squared corner（radius 0）
- 全テキストに letter-spacing と uppercase

**狙い**：レビュー 2.2（ターゲット適合性）の **逆方向解答** — 一般キャストでなく「ラグジュアリーバーオーナー / 大人客」を主要ターゲットに切り替えると刺さる。ハイブランド誌の表紙のような佇まい。

**懸念**：女性キャスト 20 代前半には「クール過ぎる・冷たい」と映る可能性。yorulog（夜職 CRM）に直接マッチさせるには別レイヤー（実用 UI）が必要。**LP・Brand site 用**として強い。

---

### C. Tactile Glow — 控えめなネオン許容
**コア変更**：
- bg-base さらに deep: `#07050D`
- violet を `#7C3AED` → `#8B5CF6`（明度 +5）
- **neon-purple `#C084FC`** を glow 専用色として追加
- **cyan-mist `#67E8F9`** をライブデータ（売上、unread）専用色に
- 全 surface に **subtle SVG noise texture**
- CTA に `--glow-ring` トークン、login の input focus glow を強化
- ナビ「O」「NOXA」文字に text-shadow glow
- 「Refined」の italic を violet-ink + box-shadow で発光
- 売上 ¥84,200 を cyan で glow（ライブ感）
- Plan CTA に `pulse-glow` 3.2s ease-in-out のアニメーション

**狙い**：レビュー 2.7（モーション仕様の実証不足）と 2.2（若年層への適合）の両解決。yorulog の主要ユーザーである 20 代前半キャストに「ゲーム的・SNS 的」な期待値が当てはまる層へ刺す。

**懸念**：v1 で明示的に「禁止」だった neon glow を解禁することで、ブランド原則の一貫性が揺らぐ。多用すると「サイバーパンクすぎ」「品が崩れる」リスク。**glow は CTA / focus / live data のみ** という制約は明文化必須。

---

## 3. 比較表（主要属性）

| 属性 | v1 現状 | A. Warmer | B. Editorial | C. Glow |
|---|---|---|---|---|
| ブランド識別性 | △（yorulog ≒ 親） | ◎（wine 独立） | △ | △ |
| 温度感 | 冷たい・静か | 温かい・贅沢 | 凛冽・冷たい | 妖艶・電子的 |
| 色数 | 2 hue（violet+wine） | 3 hue（+gold） | 2 hue（violet+wine） | 3 hue（+cyan-mist）|
| グラデ使用 | 控えめ | 中（CTA） | なし | 多用（glow） |
| タイポ密度 | 並 | 並 | 大胆・大型 | 並 |
| 余白 | 標準 | 標準 | 1.5〜2 倍 | 標準 |
| モーション | 静的 | 静的 | 静的 | pulse-glow あり |
| 想定主ターゲット | ハイクラス全般 | バーオーナー・大人客 | ラグジュアリー大人 | 20 代前半キャスト |
| yorulog 適合 | △ | ○ | △ | ◎ |
| nomishugy 適合 | ○ | ○ | △ | ○ |
| Community 適合 | ○ | ○ | ○ | ○ |
| 実装コスト | （現状） | 低 | 中（レイアウト変更） | 中（glow トークン追加） |
| ブランド一貫性 | ◎ | ○ | ◎ | △（neon 解禁） |

---

## 4. ハイブリッド可能性

3 案は排他ではありません。組み合わせ案：

**A + C ハイブリッド**：Warmer の温度感 + Glow の若年訴求
- yorulog だけ wine + 控えめ glow（C のサブセット）
- nomishugy は v1 そのまま（lavender、glow なし）
- community は gold（A の community 案）
- 親 NOXA の LP・ログイン・dashboard は v1 のミニマルさを維持

**A + B ハイブリッド**：Warmer の色 + Editorial の余白
- Warmer の色配置を採用しつつ、LP は Editorial 風の見開きレイアウト
- 大人向け雑誌的なラグジュアリー感に振る

---

## 5. 推奨ネクストステップ

1. **方向性合意**：3 案 + ハイブリッドの中から進める方向を 1 つ選ぶ
2. v1.1 として **トークン更新**（決定したパレット、divider、新規 token）
3. 実装側の `src/app/globals.css` と `_design-source/project/colors_and_type.css` を同期
4. 既存ページ（`/account/login`、`/account/signup`、`/`、dashboard）に反映
5. モバイルブレークポイント定義（レビュー 2.4）と ステータス色トークン化（レビュー 2.6）を同時に手当
6. その後 `gstack-qa` で実機ブラウザ確認

---

## 6. Open Design daemon でも見るには

現在 `http://127.0.0.1:7456` で daemon が稼働しています。**ただし** Web UI（Next.js）は別ポート `56914` で動作しており、こちらは別データストア（`.tmp/tools-dev/...`）を参照しているため、私が投入したプロジェクト 4 つは Web UI からは見えません。

Web UI で見たい場合は次のどちらか：
- 現 daemon を `--open` 付きで再起動（`node apps/daemon/dist/cli.js --port 7456` を kill して `--port 7456 --open` で立ち上げる）→ ブラウザが開く
- 同じファイルを tools-dev 経由でアップロード（必要なら別途対応）

シンプルには **Launch preview パネル**で 4 つの HTML を直接見るのが最速です。
