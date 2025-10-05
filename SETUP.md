# 動物占いアプリ セットアップガイド

このアプリは、GAS（Google Apps Script）を API として使用し、Next.js アプリから占い結果を取得する仕組みです。

## セットアップ手順

### 1. GAS アプリのデプロイ

1. `AnimalFortune/`フォルダの GAS アプリを Google Apps Script にデプロイします
2. デプロイ時に「新しいデプロイ」を選択し、種類を「ウェブアプリ」に設定
3. アクセス権限を「全員（匿名ユーザーを含む）」に設定
4. デプロイ後、ウェブアプリの URL をコピー

### 2. Next.js アプリの設定

1. `app/config.ts`ファイルの`GAS_API_URL`を実際の GAS ウェブアプリの URL に更新：

```typescript
export const GAS_API_URL =
  "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";
```

### 3. アプリの起動

```bash
cd animal-fortune
npm install
npm run dev
```

## 動作の流れ

1. ユーザーがニックネームを入力
2. 12 個の質問に回答
3. Next.js アプリが GAS API に POST リクエストを送信
4. GAS が占いロジックを実行し、結果 URL を返す
5. Next.js アプリが結果を表示

## 注意事項

- GAS アプリは変更せず、Next.js アプリのみを変更しています
- CORS エラーが発生する場合は、GAS アプリの`doPost`関数の CORS ヘッダー設定を確認してください
- スプレッドシートの ID は`AnimalFortune/コード.gs`の`bookId`で設定されています
