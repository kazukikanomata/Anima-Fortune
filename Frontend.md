### 1. Node.js バージョン管理ツールのインストール

`nvm`を利用して Node.js を利用します。以下のリンクからインストール方法を確認し利用する
[nvm 公式ドキュメント](https://github.com/nvm-sh/nvm)

### 2. Node.js バージョン指定と切り替え

プロジェクトのルートにある`.nvmrc`ファイルで指定されたバージョンを使用

#### 1. 必要なバージョンをインストール

```bash
nvm install
```

#### 2. インストールしたバージョンを有効にする

```bash
nvm use
```

#### 3. パッケージのインストール

必要な依存関係をインストールします:

```bash
npm ci
```

### 4. 認証の設定
※ 今回はプロジェクトでは使わない予定
#### auth secret 作成

以下のコマンドを実行して、secret を作成する

```bash
npx auth secret --copy
```

次の形式で出力される。
AUTH_SECRET="xxxxxx"

.env.localに出力された値を追加する

```bash
AUTH_SECRET="xxxxxxxxxxx"
```

## コマンド

#### 開発サーバーを起動（Next.js）

```bash
npm run dev
```

#### Lintを実行

```bash
npm run check
```

#### Lintの自動修正を実行

```bash
npm run fix
```

#### Testを実行

```bash
npm run test
```

#### Storybookを起動

```bash
npm run storybook
```

#### OpenApi仕様書からmarianne-apiの型定義ファイルを生成

```bash
npm run regenerate-api-types
```