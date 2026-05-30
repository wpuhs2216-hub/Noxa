# NOXA Design System v1 — レビュー

レビュー日: 2026-05-26
対象: `_design-source/project/` 配下の Design System v1（HTML + 4 jsx + tokens CSS）
プレビュー: Open Design `noxa-current-v1` プロジェクト

---

## 1. 強み（残すべき軸）

### 1.1 コンセプトの明快さ
"nox (L. night) + a — refined." という語源と、「ダーク優先 / ネオン禁止 / 妖艶ではなく静けさ」という **やらないことの宣言** が明確。デザイン判断のときに迷う場面が減る。

### 1.2 単一色ヒエラルキー
violet 5 段階（`#4C1D95` → `#5B21B6` → `#7C3AED` → `#A78BFA` → `#C4B5FD`）+ wine destructive `#C4384A` のみで構築されている。色数の少なさが「洗練」と「ブランド識別性」を同時に成立させている。

### 1.3 タイポペアリング
Cormorant Garamond + Shippori Mincho B1 は **serif DNA を共有** しており、JP/EN 混在の一行表現が破綻しない。これは多くのデザインシステムが躓くポイントを最初から避けている。

### 1.4 violet hairline divider
`rgba(167, 139, 250, 0.16)` の細い divider が「夜の繊細さ」を視覚的に体現する identifying element として機能。divider という地味な要素にブランドアトムを仕込んだのは賢い。

### 1.5 eyebrow style
mono 11px / 0.18em tracking / uppercase / lavender。あらゆるカードの上に出てくる brand atom として再利用性が高い。

---

## 2. 課題（要レビュー）

### 2.1 ブランド識別性のジレンマ ★最重要
- **yorulog `#7C3AED` と NOXA parent が同色** → サブブランド単体で見たとき、親と区別がつかない
- **nomishugy `#A78BFA` は violet-ink と同色** → "lavender" がサブブランド色と汎用 text-ink を兼ねている
- README.md でも「ご相談ポイント」として明記されている既知の課題

**懸念**: yorulog の LP 単体を見て、これが NOXA グループの一員か、yorulog 独自プロダクトなのか、視覚言語だけでは判別不能。サブブランド戦略としての強度が弱い。

### 2.2 ターゲット適合性
- 夜職（ホスト・キャスト）向け CRM のメインユーザーは **20 代前半女性キャスト** が中心
- 現状の editorial / literary tone は「品はあるが、刺さりにくい」可能性
- "おかえりなさい / The night is yours, again." は美しいが、忙しい現場で売上を確認するキャストには **実用感が薄い**
- nomishugy（バー客向け）と yorulog（キャスト向け）でターゲット心理が違うのに、視覚言語が完全一致

**示唆**: NOXA parent は editorial tone のままで OK。yorulog だけはもう一段「日常感」を出すサブテーマがあると刺さる可能性。

### 2.3 アクセシビリティ（コントラスト）
| 組み合わせ | コントラスト比 | 判定 |
|---|---|---|
| text-faint `#645A75` on bg-base `#0B0710` | ≒ 4.7:1 | AA 大きな文字のみ通過 |
| text-muted `#9C92AB` on bg `#0B0710` | ≒ 8.2:1 | AAA OK |
| 白 on violet `#7C3AED` | ≒ 5.4:1 | AA OK |
| `text-faint` を 11px の eyebrow に使うサンプルあり | — | **NG**：小さい本文には不可 |

`#645A75` を 13px 未満で本文化している箇所がある（dashboard の "© 2026 NOXA" 等）。OK だが、メタテキストとして許容範囲。明確に「caption 用には text-muted を使う」というルール化を推奨。

### 2.4 レスポンシブが未定義
- 全サンプルページが **1280px 固定**（LP 1280×1100、Login 1280×820、Dashboard 1280×900）
- モバイルブレークポイントの定義なし
- 実装側（`src/app/`）は Tailwind なのでフレキシブルだが、デザイン側にレスポンシブ提案がない

**示唆**: 夜職向け CRM は **モバイル利用率が圧倒的に高い**（出勤前・帰宅時の電車内、店舗 iPad）。モバイル版が事実上の本番。

### 2.5 アイコン使用の不整合
- README は Lucide 推奨（1.5px stroke）
- サンプルの dashboard には **◇ ◈ ◆ ダイヤ glyph** が使われている
- 意味のない記号はナビゲーション識別子として認知負荷を生む（ユーザーは「◇＝何のメニュー？」を毎回学習しなければならない）

**示唆**: Lucide で統一するか、ダイヤ glyph を貫くなら「装飾としてのみ使い、ラベルに意味を持たせる」ルールを明文化。

### 2.6 ステータス表現の色依存
- "営業中 / アクティブ" = `#7BE8A1` 緑のドット
- "近日公開" = `#9C92AB` グレー
- 色覚多様性ユーザーに対し、ドット + 色だけで状態を伝えるのは弱い
- テキストラベルは付いているので致命的ではないが、**ステータス用色トークン** がデザインシステムに含まれていない（緑がアドホックに登場）

**示唆**: `--noxa-status-success/warning/info` をトークンに追加。

### 2.7 モーション仕様の実証不足
- duration / easing は定義されている
- ただし **動く要素のサンプルが一切ない**（HTML は全部静的）
- "lift opacity or color, never scale" の hover ルールが、実装に落ちているか確認不能

**示唆**: せめて 1 コンポーネント（Button hover、Toast 入退場）で実際の motion を見せたい。

### 2.8 グラデーション運用
- "Forbidden: multi-stop bluish-purple gradients" と明記されている
- 一方で dashboard の凛アバターは `linear-gradient(135deg, #7C3AED 0%, #C4384A 100%)`（violet → wine）→ **2 色グラデ**
- LP の hero CTA セクションは `linear-gradient(135deg, #1A1424 0%, #221B2E 100%)` だがほぼ単色
- ルールと実装が一致していない

**示唆**: 「bluish-purple gradient は禁止だが、violet→wine の brand-spectrum gradient はアクセント用途で許可」のような明文化が必要。

---

## 3. 優先度評価

| 課題 | 影響度 | 修正コスト | 優先度 |
|---|---|---|---|
| 2.1 ブランド識別性 | 高 | 中 | ★★★ |
| 2.4 レスポンシブ未定義 | 高 | 中 | ★★★ |
| 2.2 ターゲット適合性（yorulog） | 中-高 | 高（別テーマ化） | ★★ |
| 2.6 ステータス色トークン | 中 | 低 | ★★ |
| 2.5 アイコン統一 | 中 | 低 | ★★ |
| 2.3 コントラスト微調整 | 低 | 低 | ★ |
| 2.8 グラデルール明文化 | 低 | 低 | ★ |
| 2.7 motion 実例 | 低 | 中 | ★ |

---

## 4. 別案バリアントの方向性提案

レビューを踏まえた 3 方向。それぞれ別プロジェクトとして Open Design に作成可能。

### A. **Warmer Nightfall**（温度感を上げる）
- violet ヒエラルキーは維持しつつ、**gold/champagne `#D4B27A`** を 2nd accent として導入
- yorulog のサブブランド色を violet → wine `#C4384A` に変更し、親 NOXA と明確に分離
- 夜職特有のラグジュアリー感、温かみ
- 想定読者：女性キャスト・男性ホスト両方に「自分の店」感を出したい場合

### B. **Editorial Minimal**（雑誌寄りに振る）
- 余白を 1.5〜2 倍に拡大、display タイポをさらに大胆に（120pt 級）
- 色を violet 1 色 + wine + bone white に絞る、グラデ完全撤廃
- LP は雑誌の見開きのような縦長レイアウト
- 想定読者：ハイクラスバー客、ラグジュアリー業態オーナー

### C. **Tactile Glow**（控えめなネオン許容）
- 現状の forbidden ルール（neon glow）を「アクセント限定で許可」に緩和
- LP hero に subtle violet glow、Login の input focus を強化、CTA に微細な glow ring
- mono の役割を増やし、サイバー寄り
- 想定読者：若年層キャスト、テック系夜職プラットフォームと並べたい場合

---

## 5. 推奨ネクストステップ

1. **このレビューで合意された優先度 ★★★** をまず v1.1 として手当
2. 並行して上記 A〜C のうち 1〜2 案を Open Design に試作 → 視覚比較
3. yorulog / nomishugy 単体の LP モックを別案で見せる（サブブランド独自性のテスト）
