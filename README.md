# ドキュメント

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
