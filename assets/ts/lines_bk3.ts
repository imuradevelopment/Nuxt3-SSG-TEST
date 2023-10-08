export const lines = () => {
    // キャンバス要素を取得
    const canvas = document.getElementById("lines");
    // 2D コンテキストを取得
    const ctx = canvas.getContext("2d");
    let width; // キャンバスの幅を保持する変数
    let height; // キャンバスの高さを保持する変数

    // 線オブジェクトのクラスを定義
    class Line {
        constructor(origin, size, length, color, style = "pattern") {
            this.size = size; // 線の太さ
            this.origin = origin; // 線の始点座標
            this.length = length; // 線の長さ
            this.color = color; // 線の色
            this.style = style; // 線の描画スタイル
            this.origin = `M${origin.x},${origin.y}`; // 始点座標をパスの始点として設定
            this.offSet = 0; // オフセット値の初期化
            this.line = null; // パス情報の初期化
            this.offSetSpeed = length / size; // オフセットの速度を計算
        }

        // HSLA 形式の色文字列を返すメソッド
        getColorString() {
            return `hsla(${this.color.h}deg,${this.color.s}%,${this.color.l}%,${this.color.a})`;
        }

        // パスの生成に使用するセグメント（線分）のリストを定義
        generators() {
            return [
                {
                    line: `h${this.size}`,
                    mag: this.size
                },
                {
                    line: `h-${this.size}`,
                    mag: this.size
                },
                {
                    line: `v${this.size}`,
                    mag: this.size
                },
                {
                    line: `v-${this.size}`,
                    mag: this.size
                },
                {
                    line: `l${this.size},${this.size}`,
                    mag: Math.hypot(this.size, this.size)
                },
                {
                    line: `l${this.size}-${this.size}`,
                    mag: Math.hypot(this.size, this.size)
                },
                {
                    line: `l-${this.size},${this.size}`,
                    mag: Math.hypot(this.size, this.size)
                },
                {
                    line: `l-${this.size}-${this.size}`,
                    mag: Math.hypot(this.size, this.size)
                }
            ];
        }

        // ランダムなパスの生成メソッド
        generate() {
            let segments = this.generators(this.size); // ランダムセグメントのリストを取得
            let path = this.origin; // パスの始点を設定
            let mag = 0; // パスの長さを初期化
            let fragment; // セグメント（線分）の一時保存変数
            let i;
            for (i = 0; i < this.length; i += 1) {
                fragment = segments[(Math.random() * segments.length) | 0]; // ランダムなセグメントを選択
                path += ` ${fragment.line}`; // パスにセグメントを追加
                mag += fragment.mag; // パスの長さを更新
            }
            this.line = {
                path,
                mag
            };
            return this;
        }

        // 線の描画スタイルを設定するメソッド
        renderStyle(style) {
            if (style === "glitches") {
                ctx.lineDashOffset = this.line.mag + this.offSet; // ダッシュオフセットを設定
                ctx.setLineDash([
                    this.size ** 1.5,
                    (this.line.mag / this.length) * this.size ** 2
                ]); // ダッシュパターンを設定
                this.offSet += 20; // オフセットを更新
                ctx.lineWidth = 2; // 線の幅を設定
                return this;
            }
            if (style === "pattern") {
                ctx.lineDashOffset = this.line.mag - this.offSet; // ダッシュオフセットを設定
                ctx.setLineDash([this.line.mag, this.line.mag]); // ダッシュパターンを設定
                this.offSet += 10; // オフセットを更新
                ctx.lineWidth = 0.2; // 線の幅を設定
            }
        }

        // パスの一部をランダムに変更するメソッド
        mutatePath() {
            let lineFragment = this.line.path.split(" ").slice(1); // パスを分割
            let generator = this.generators(); // ランダムセグメントのリストを取得
            lineFragment[(Math.random() * lineFragment.length) | 0] =
                generator[(Math.random() * generator.length) | 0].line; // ランダムなセグメントを選択し、パスを変更
            this.line.path = `${this.line.path.split(" ")[0]} ${lineFragment.join(
                " "
            )}`; // パスを更新
        }

        // 線を描画するメソッド
        draw() {
            !this.line && this.generate(); // パスが生成されていない場合は生成

            ctx.strokeStyle = this.getColorString(); // 線の色を設定
            this.renderStyle(this.style); // 描画スタイルを設定
            ctx.lineCap = "round"; // 線のキャップスタイルを設定
            ctx.lineJoin = "round"; // 線のジョインスタイルを設定
            ctx.stroke(new Path2D(this.line.path)); // パスを描画
            return this;
        }
    }

    // キャンバスをクリアする関数
    function clear() {
        ctx.fillStyle = `hsla(200deg, 20%, 10%, 0.3)`; // キャンバスの背景色を設定
        ctx.fillRect(0, 0, width, height); // キャンバスを塗りつぶし
    }

    // 線オブジェクトを生成する関数
    function generateLines(amount) {
        let lines = []; // 線オブジェクトのリストを初期化
        let styles = [
            {
                size: 1.25,
                style: "pattern",
                color: { h: 210, s: 100, l: 70, a: 0.5 }
            },
            { size: 2.5, style: "pattern", color: { h: 190, s: 90, l: 50, a: 0.3 } },
            { size: 5, style: "pattern", color: { h: 210, s: 70, l: 60, a: 0.2 } },
            { size: 10, style: "pattern", color: { h: 310, s: 80, l: 55, a: 0.15 } },
            { size: 20, style: "pattern", color: { h: 200, s: 25, l: 35, a: 0.12 } },
            { size: 20, style: "pattern", color: { h: 210, s: 20, l: 40, a: 0.12 } },
            { size: 40, style: "pattern", color: { h: 190, s: 40, l: 50, a: 0.12 } },
            { size: 80, style: "pattern", color: { h: 220, s: 50, l: 60, a: 0.12 } },
            { size: 40, style: "glitches", color: { h: 300, s: 100, l: 50, a: 0.3 } },
            { size: 20, style: "glitches", color: { h: 210, s: 100, l: 50, a: 0.3 } },
            { size: 60, style: "glitches", color: { h: 30, s: 100, l: 50, a: 0.3 } }
        ];
        for (let i = 0; i < amount; i += 1) {
            let style = styles[(Math.random() ** 2 * styles.length) | 0]; // ランダムなスタイルを選択
            lines.push(
                new Line(
                    { x: width * 0.5, y: height * 0.5 },
                    style.size,
                    500 + Math.random() * 1000,
                    style.color,
                    style.style
                )
            ); // 線オブジェクトを生成し、リストに追加
        }
        return lines; // 生成した線オブジェクトのリストを返す
    }

    let id; // アニメーションフレームの ID を保持する変数

    // ウィンドウのリサイズ時に呼び出される関数
    function resize() {
        id = cancelAnimationFrame(id); // アニメーションを停止
        width = window.innerWidth; // キャンバスの幅を更新
        height = window.innerHeight; // キャンバスの高さを更新
        canvas.width = width; // キャンバスの幅を設定
        canvas.height = height; // キャンバスの高さを設定
        const lines = generateLines(40); // 線オブジェクトを生成
        function update() {
            if (!(id % 3)) {
                clear(); // キャンバスをクリア
                lines.forEach((line) => {
                    line.draw(); // 線を描画
                    if (!(id % 5) && Math.random() > 0.95) {
                        line.mutatePath(); // パスをランダムに変更
                    }
                });
            }
            id = requestAnimationFrame(update); // アニメーションフレームをリクエスト
        }
        id = requestAnimationFrame(update); // アニメーションを開始
    }

    // ウィンドウのリサイズイベントリスナーを登録
    window.addEventListener("resize", resize, {
        passive: true
    });

    resize(); // 初期化時にリサイズ関数を呼び出す
}
