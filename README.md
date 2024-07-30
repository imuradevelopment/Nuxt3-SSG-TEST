# ドキュメント

## 開発環境構築

以下、windows10用に記載

1. Nodeのバージョンを18.18.0にする。
    1. 管理者権限でpowershellを起動し(Windowsボタンを押下したあと、「powershell」と入力、その後右リックから管理者として実行)、下記のコマンドを実行しバージョンが18.18.0であることを確認する。  
    ※この時管理者権限が必要になるため、近藤さん等に相談して、権限を付与してもらうこと。

        ```ps1
        node -v
        ```

    2. nvm(windowsでnodeのバージョンを切り替えながら使えるようにするやつ)をインストールする。
    3. [nvmのGitHubRelease](https://github.com/coreybutler/nvm-windows/releases)から「Assets > nvm-setup.exe
    」をDLしインストールする。
    4. 下記コマンドを実行し、nvmがインストールされている事を確認する。(その他コマンドも後に使うので記載)

        ```ps1
        nvm -v
        # > 出力
        # 1.1.11
        # 現状(2023/10/02)の最新のnvmバージョンは「1.1.11」

        nvm list
        # > 出力
        # * 16.17.1 (Currently using 64-bit executable)
        #   14.19.1
        # 現在nvmで管理されているnodeのバージョン一覧「現在選択されているのは16.17.1」

        # 下記コマンドでnodeをインストールする
        nvm install lts # ltsは長期サポート対象の最新普段はこれで問題ない
        # または
        nvm install 18.18.0

        # 再びlistコマンドを実行すると下記のような出力になる
        nvm list
        # > 出力
        #   18.18.0
        # * 16.17.1 (Currently using 64-bit executable)
        #   14.19.1
        # 現在nvmで管理されているnodeのバージョン一覧「現在選択されているのは16.17.1」

        # 最後に使用するnodeのバージョンを使用して完了(今回は18.18.0)
        nvm use 18.18.0
        ```

2. Gitの設定
   1. 流石にgitはインストール済みであることを前提とする。
   2. gitのconfig設定を行う。
      1. 管理者権限で実行したpowershellで、下記コマンドにて諸々設定

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

   3. fork > clone > comit > push したらプルリクエストで返してください。
3. リポジトリcloneからのお話
   1. まずcloneしてNuxt-SSG-TESTフォルダをVSCodeで開く

        ```ps1
        git clone git@github.com:imuradevelopment/Nuxt3-SSG-TEST.git
        ```

   2. 「ctrl + @」でターミナルを起動して下記コマンドを実行

        ```ps1
        # 「package-lock.json」とかいうファイルに記述されているモジュールを「node_modules」とかいう所にDLしている
        npm install

        # ビルド
        npm run generate

        # ローカル開発
        npm run local
        ```

4. ngrok

   ```ps1
   ngrok http --basic-auth="vaile:password" 3000
   ```
