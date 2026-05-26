# NOXA

夜の街のための統合プラットフォーム NOXA のハブ／アカウント／ブランド LP。

## URL 体系

```
noxa-delta.vercel.app/                  ← NOXA ブランド LP
noxa-delta.vercel.app/account/login     ← NOXA アカウントログイン
noxa-delta.vercel.app/account/signup    ← NOXA アカウント作成
noxa-delta.vercel.app/account           ← マイページ（ハブ）
noxa-delta.vercel.app/account/profile   ← プロフィール編集
noxa-delta.vercel.app/account/notifications ← 通知設定
noxa-delta.vercel.app/account/subscription  ← プラン・課金
noxa-delta.vercel.app/account/credits   ← AI クレジット履歴
noxa-delta.vercel.app/account/delete    ← 退会
```

## 関連プロダクト

- **yorulog** (https://yorulog.vercel.app) — 夜職向け売上・顧客管理 CRM
- **nomishugy** (https://nomishugy.vercel.app) — ミナミのバーポータル + 飲み仲間 + バー求人
- **NOXA Community** (近日公開) — 夜の街で働く / 遊ぶ人の交流掲示板

## クロスドメイン認証 (interim)

本ドメイン取得 (noxa.app) 前の暫定構成:

1. yorulog/nomishugy で「ログイン」→ `noxa-delta.vercel.app/account/login?redirect=...` に遷移
2. ログイン成功 → Cloud Function `exchangeAuthToken` で Custom Token 発行
3. `redirect` URL に `?noxaAuth=<token>` を付けて戻す
4. yorulog/nomishugy 側の `NoxaAuthReceiver` が `signInWithCustomToken` で session 確立

本ドメイン取得後はサブドメイン構成 (`auth.noxa.app` + `yorulog.noxa.app`) に切り替えて Cookie 共有 SSO 化予定。

## Firebase

`minami-bar-guide` プロジェクトを yorulog / nomishugy と共有。
- account_users / account_subscriptions / account_iap_transactions 等の共通 doc を直接読み書き
- Cloud Functions は yorulog/functions に集約（`exchangeAuthToken` / `deleteNoxaAccount` 等）

## 開発

```bash
npm install
NEXT_PUBLIC_USE_EMULATOR=true npm run dev  # port 3100
```

## デプロイ

Vercel で `noxa-delta.vercel.app` にデプロイ予定。
