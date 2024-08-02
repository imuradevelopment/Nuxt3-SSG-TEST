# ドキュメント

## 目次
1. [GitHub の登録方法（必須）](#GitHub-の登録方法)
2. [GitHub Codespace 向けの開発環境構築（GitHub上のエディタで作業する場合）](#GitHub-Codespace-向けの開発環境構築)
3. [Windows 向けの開発環境構築（ローカルPC上で作業する場合）](#Windows-向けの開発環境構築)
4. [プロジェクトの構成（本プロジェクトのファイル構成）](#プロジェクトの構成)

## GitHub の登録方法

GitHub の登録方法を以下に示します。

1. [GitHub の公式ウェブサイト](https://github.com/)にアクセスします。
2. 右上の「Sign Up」ボタンをクリックします。
3. 必要な情報（ユーザー名、メールアドレス、パスワード）を入力します。
4. 「Create account」ボタンをクリックします。
5. 登録したメールアドレスに送られてくる確認メールを開きます。
6. メール内のリンクをクリックしてアカウントを確認します。
7. [GitHub の利用規約](https://docs.github.com/ja/github/site-policy/github-terms-of-service)に同意します。
8. プロフィール情報を設定します（任意）。
9. 登録が完了しました。GitHub を利用する準備が整いました。

以上が GitHub の登録方法です。

## GitHub Codespace 向けの開発環境構築

GitHub Codespace は、クラウドベースの開発環境であり、GitHub 上で直接コードを編集、ビルド、デバッグすることができます。以下は、GitHub Codespace 向けの開発環境構築手順です。

1. リポジトリのフォークとクローン

    - リポジトリのフォークとは、他のユーザーのリポジトリを自分のアカウントにコピーすることです。以下の手順でフォークしてください。
        1. [GitHub のリポジトリ](https://github.com/imuradevelopment/Nuxt3-SSG-TEST)にアクセスします。
        2. ページ右上の「Fork」ボタンをクリックします。
        3. 自分のアカウントにリポジトリがフォークされます。

2. Codespace の作成

    - フォークしたリポジトリを開き、画面右上の「Code」ボタンをクリックします。
    - 「Open with Codespaces」を選択します。
    - Codespace の作成が開始され、数分待つと開発環境が準備されます。

3. 開発環境の利用

    - Codespace が作成されると、ブラウザ上で開発環境が表示されます。
    - コードの編集、ビルド、デバッグなど、通常の開発作業を行うことができます。

4. プロジェクトの依存関係のインストールと起動

    - ターミナルで以下のコマンドを実行して、プロジェクトの依存関係をインストールします。

        ```ps1
        npm install
        ```

    - プロジェクトをビルドし、ローカルサーバーを起動するには、以下のコマンドを実行します。

        ```ps1
        npm run generate
        npx serve .output/public
        ```

    - ビルドとローカルサーバーの起動を一度に行いたい場合は、以下のコマンドを実行します。

        ```ps1
        npm run local
        ```

以上が GitHub Codespace 向けの環境で動かすための手順です。

## Windows 向けの開発環境構築

1. VSCode のインストール

    - [VSCode の公式ウェブサイト](https://code.visualstudio.com/)にアクセスし、VSCode をダウンロードしてインストールします。

2. Scoop のインストール

    - 管理者権限で powershell を起動します（Windows ボタンを押下した後、「powershell」と入力し、右クリックから「管理者として実行」を選択します）。
    - 下記のコマンドを実行して、Scoop をインストールします。

        ```ps1
        iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
        ```

3. Scoop を用いた Git のインストール

    - powershell で以下のコマンドを実行して、Git をインストールします。

        ```ps1
        scoop install git
        ```

    - powershell で以下のコマンドを実行して、Git の設定を行います。

        ```ps1
        # 現在の設定を参照
        git config --global --list

        # 以下設定
        # コミット時の名称設定
        git config --global user.name 'Yuta Miyaura'
        # 自分の名前でね、間違ったら下記で消してね
        # git config --global --unset user.name
        git config --global user.email 'imuradevelopmentauth@gmail.com'
        # 自分のメアドでね、間違ったら下記で消してね
        # git config --global --unset user.email
        git config --global init.defaultBranch main
        git config --global core.autocrlf false
        git config --global core.ignorecase false
        git config --global color.ui true
        git config --global core.quotepath false
        ```

4. Node のインストール

    - powershell で以下のコマンドを実行して、Node のバージョンを 18.18.0 に設定します。

        ```ps1
        scoop install nodejs-lts
        nvm install 18.18.0
        nvm use 18.18.0
        ```

5. リポジトリのフォークとクローン

    - リポジトリのフォークとは、他のユーザーのリポジトリを自分のアカウントにコピーすることです。以下の手順でフォークしてください。
        1. [GitHub のリポジトリ](https://github.com/imuradevelopment/Nuxt3-SSG-TEST)にアクセスします。
        2. ページ右上の「Fork」ボタンをクリックします。
        3. 自分のアカウントにリポジトリがフォークされます。
    - powershell で以下のコマンドを実行して、リポジトリをローカルにクローンします。

        ```ps1
        git clone git@github.com:your-username/Nuxt3-SSG-TEST.git
        ```

6. プロジェクトの依存関係のインストールと起動

    - powershell で以下のコマンドを実行して、プロジェクトの依存関係をインストールします。

        ```ps1
        cd Nuxt3-SSG-TEST
        npm install
        ```

    - プロジェクトをビルドし、ローカルサーバーを起動するには、以下のコマンドを実行します。

        ```ps1
        npm run generate
        npx serve .output/public
        ```

    - ビルドとローカルサーバーの起動を一度に行いたい場合は、以下のコマンドを実行します。

        ```ps1
        npm run local
        ```

以上が、このプロジェクトをローカル環境で動かすための手順です。

## プロジェクトの構成

```
Nuxt3-SSG-TEST-main/
    .gitignore               # Gitで無視するファイルやディレクトリを指定
    .npmrc                   # npmの設定ファイル
    README.md                # プロジェクトの概要や設定手順
    app.vue                  # アプリケーションのルートコンポーネント
    nuxt.config.ts           # Nuxtの設定ファイル
    package-lock.json        # 固定された依存関係のバージョン
    package.json             # プロジェクトの依存関係やスクリプト
    tailwind.config.ts       # Tailwind CSSの設定ファイル
    tsconfig.json            # TypeScriptの設定ファイル
    .github/                 # GitHubの設定ファイル
        workflows/           # GitHub Actionsの設定
            main.yml         # GitHub Actionsのワークフロー設定
    .vscode/                 # Visual Studio Code用の設定ファイル
        settings.json        # VSCodeの設定ファイル
    assets/                  # 未加工のアセット（画像やスタイルシートなど）
        styles/              # スタイルシート
            css/             # CSSファイル
                reset.css    # CSSリセットファイル
                style.css    # カスタムスタイル
                tailwind.css # Tailwindのスタイル
            element/         # Element UIのスタイル
                dark.scss    # ダークテーマスタイル
                index.scss   # Element UIのスタイル
    components/              # Vueコンポーネント
        BackgroundPattern.vue        # 背景パターンコンポーネント
        BackgroundPattern2.vue       # 背景パターンコンポーネント2
        BlurGlassCard.vue            # ブラーガラスカードコンポーネント
        BurgerMenu.vue               # ハンバーガーメニューコンポーネント
        Carousel.vue                 # カルーセルコンポーネント
        CarouselEmployee.vue         # 従業員カルーセルコンポーネント
        ClearGlassMaskCard.vue       # クリアガラスマスクカードコンポーネント
        CustomArrowButton.vue        # カスタム矢印ボタンコンポーネント
        CustomFrameCard.vue          # カスタムフレームカードコンポーネント
        CustomTable.vue              # カスタムテーブルコンポーネント
        DevelopmentAchievements.vue  # 開発成果コンポーネント
        Footer.vue                   # フッターコンポーネント
        Header.vue                   # ヘッダーコンポーネント
        HeroDesktop.vue              # デスクトップ用ヒーローコンポーネント
        HeroMobile.vue               # モバイル用ヒーローコンポーネント
        ImageCard.vue                # 画像カードコンポーネント
        PageHeader.vue               # ページヘッダーコンポーネント
        Sidebar.vue                  # サイドバーコンポーネント
        Timeline.vue                 # タイムラインコンポーネント
        VennDiagram.vue              # ベン図コンポーネント
    composables/                      # Vue 3のComposition APIフック
        useScrollToTarget.ts         # ターゲットへスクロールするフック
    layouts/                         # アプリケーションのレイアウト
        default.vue                  # デフォルトレイアウト
        double-column-sidebar.vue    # 二列サイドバーのレイアウト
    middleware/                      # ミドルウェア
        nuxtLinkIntercept.global.ts  # Nuxtリンクのインターセプトミドルウェア
    pages/                           # アプリケーションのページコンポーネント
        company.vue                  # 会社情報ページ
        contact.vue                  # お問い合わせページ
        index.vue                    # ホームページ
        policy.vue                   # ポリシーページ
        service.vue                  # サービスページ
        recruit/                     # 採用関連のページ
            data.vue                 # 採用データページ
            employee.vue             # 採用従業員ページ
            feature.vue              # 採用特徴ページ
            index.vue                # 採用インデックスページ
            induction.vue            # 採用導入ページ
            information.vue          # 採用情報ページ
            message.vue              # 採用メッセージページ
            office.vue               # 採用オフィスページ
            qa.vue                   # 採用Q&Aページ
            welfare.vue              # 採用福利厚生ページ
    plugins/                         # Vueプラグイン
        nuxtLinkIntercept.client.ts  # Nuxtリンクのインターセプトプラグイン
    public/                          # 静的ファイル
        favicon.ico                  # ファビコン
        common/                      # 共通ファイル
            sendemail.php            # メール送信スクリプト
            sitemap.xml              # サイトマップ
        images/                      # 画像ファイル
            common/
                check.svg            # 共通のチェックマーク画像
            company/
                001.jfif             # 会社画像1
                002.jpg              # 会社画像2
                003.png              # 会社画像3
                004.png              # 会社画像4
            contact/
                001.png              # お問い合わせ画像1
            footer/
                policy.png           # フッターポリシー画像
            logo/
                logo.svg             # ロゴ画像
            recruit/
                data/
                    001.png          # 採用データ画像1
                    002.png          # 採用データ画像2
                employee/
                    001.png          # 採用従業員画像1
                    002.jpg          # 採用従業員画像2
                feature/
                    001.png          # 採用特徴画像1
                    002.png          # 採用特徴画像2
                index/
                    001.png          # 採用インデックス画像1
                    002_D.png        # 採用インデックス画像2
                induction/
                    001.png          # 採用導入画像1
                    002.png          # 採用導入画像2
                information/
                    001.png          # 採用情報画像1
                message/
                    001.png          # 採用メッセージ画像1
                office/
                    001.png          # 採用オフィス画像1
                qa/
                    001.png          # 採用Q&A画像1
                welfare/
                    001.png          # 採用福利厚生画像1
            top/
                001.jpg              # トップ画像1
        videos/
            vaile.mp4                # ビデオファイル
    server/                          # サーバーサイドのロジック
        tsconfig.json                # サーバー側のTypeScript設定ファイル
    stores/                          # Vuexストア
        activeIndex.ts               # アクティブインデックスの状態管理
        currentPhotoNumber.ts        # 現在の写真番号の状態管理
        tabStore.ts                  # タブの状態管理
```
