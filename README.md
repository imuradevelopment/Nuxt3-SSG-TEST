# ドキュメント

## GitHubの登録方法

GitHubの登録方法を以下に示します。

1. [GitHubの公式ウェブサイト](https://github.com/)にアクセスします。
2. 右上の「Sign Up」ボタンをクリックします。
3. 必要な情報（ユーザー名、メールアドレス、パスワード）を入力します。
4. 「Create account」ボタンをクリックします。
5. 登録したメールアドレスに送られてくる確認メールを開きます。
6. メール内のリンクをクリックしてアカウントを確認します。
7. [GitHubの利用規約](https://docs.github.com/ja/github/site-policy/github-terms-of-service)に同意します。
8. プロフィール情報を設定します（任意）。
9. 登録が完了しました。GitHubを利用する準備が整いました。

以上がGitHubの登録方法です。

## GitHub Codespace向けの開発環境構築

GitHub Codespaceは、クラウドベースの開発環境であり、GitHub上で直接コードを編集、ビルド、デバッグすることができます。以下は、GitHub Codespace向けの開発環境構築手順です。

1. リポジトリのフォークとクローン
    - リポジトリのフォークとは、他のユーザーのリポジトリを自分のアカウントにコピーすることです。以下の手順でフォークしてください。
        1. [GitHubのリポジトリ](https://github.com/imuradevelopment/Nuxt3-SSG-TEST)にアクセスします。
        2. ページ右上の「Fork」ボタンをクリックします。
        3. 自分のアカウントにリポジトリがフォークされます。
    - Codespaceを利用するために、フォークしたリポジトリを自分のアカウントにクローンします。

      ```bash
      git clone git@github.com:your-username/Nuxt3-SSG-TEST.git
      ```

2. Codespaceの作成
    - フォークしたリポジトリを開き、画面右上の「Code」ボタンをクリックします。
    - 「Open with Codespaces」を選択します。
    - Codespaceの作成が開始され、数分待つと開発環境が準備されます。

3. 開発環境の利用
    - Codespaceが作成されると、ブラウザ上で開発環境が表示されます。
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

以上がGitHub Codespace向けの環境で動かすための手順です。

## Windows向けの開発環境構築

1. VSCodeのインストール
    - [VSCodeの公式ウェブサイト](https://code.visualstudio.com/)にアクセスし、VSCodeをダウンロードしてインストールします。

2. Scoopのインストール
    - 管理者権限でpowershellを起動します（Windowsボタンを押下した後、「powershell」と入力し、右クリックから「管理者として実行」を選択します）。
    - 下記のコマンドを実行して、Scoopをインストールします。

      ```ps1
      iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
      ```

3. Scoopを用いたGitのインストール
    - powershellで以下のコマンドを実行して、Gitをインストールします。

      ```ps1
      scoop install git
      ```

4. Nodeのインストール
    - powershellで以下のコマンドを実行して、Nodeのバージョンを18.18.0に設定します。

      ```ps1
      scoop install nodejs-lts
      nvm install 18.18.0
      nvm use 18.18.0
      ```

5. リポジトリのフォークとクローン
    - リポジトリのフォークとは、他のユーザーのリポジトリを自分のアカウントにコピーすることです。以下の手順でフォークしてください。
        1. [GitHubのリポジトリ](https://github.com/imuradevelopment/Nuxt3-SSG-TEST)にアクセスします。
        2. ページ右上の「Fork」ボタンをクリックします。
        3. 自分のアカウントにリポジトリがフォークされます。
    - powershellで以下のコマンドを実行して、リポジトリをローカルにクローンします。

      ```ps1
      git clone git@github.com:your-username/Nuxt3-SSG-TEST.git
      ```

6. プロジェクトの依存関係のインストールと起動
    - powershellで以下のコマンドを実行して、プロジェクトの依存関係をインストールします。

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
