export const lines = (options: {
    canvasId: string, // キャンバス要素のID
    lineCount: number, // 生成する線の数
    lineWidth: number, // 線の太さ
    lineLength: number, // 線の長さ
    lineColor: { h: number; s: number; l: number; a: number }, // 線の色 (HSLA 形式)
    lineStyle: "pattern" | "glitches", // 線の描画スタイル
    startPosition: { x: number; y: number }, // 描画の開始位置
    drawSpeed: number // 描画速度
}) => {
    // キャンバス要素を取得
    const canvas = document.getElementById(options.canvasId) as HTMLCanvasElement | null;
    if (!canvas) {
        console.error("Canvas element not found");
        return;
    }
    // 2D コンテキストを取得
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        console.error("2D context not available");
        return;
    }
    let width: number; // キャンバスの幅を保持する変数
    let height: number; // キャンバスの高さを保持する変数

    // 線オブジェクトのクラスを定義
    class Line {
        size: number;
        origin: { x: number; y: number };
        length: number;
        color: { h: number; s: number; l: number; a: number };
        style: string;
        offSet: number;
        line: { path: string; mag: number } | null;
        offSetSpeed: number;

        constructor(
            origin: { x: number; y: number },
            size: number,
            length: number,
            color: { h: number; s: number; l: number; a: number },
            style = "pattern"
        ) {
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
        renderStyle(style: string) {
            if (style === "glitches") {
                ctx.lineDashOffset = this.line!.mag + this.offSet; // ダッシュオフセットを設定
                ctx.setLineDash([
                    this.size ** 1.5,
                    (this.line!.mag / this.length) * this.size ** 2
                ]); // ダッシュパターンを設定
                this.offSet += 20; // オフセットを更新
                ctx.lineWidth = 2; // 線の幅を設定
                return this;
            }
            if (style === "pattern") {
                ctx.lineDashOffset = this.line!.mag - this.offSet; // ダッシュオフセットを設定
                ctx.setLineDash([this.line!.mag, this.line!.mag]); // ダッシュパターンを設定
                this.offSet += 10; // オフセットを更新
                ctx.lineWidth = 0.2; // 線の幅を設定
            }
        }

        // パスの一部をランダムに変更するメソッド
        mutatePath() {
            let lineFragment = this.line!.path.split(" ").slice(1); // パスを分割
            let generator = this.generators(); // ランダムセグメントのリストを取得
            lineFragment[(Math.random() * lineFragment.length) | 0] =
                generator[(Math.random() * generator.length) | 0].line; // ランダムなセグメントを選択し、パスを変更
            this.line!.path = `${this.line!.path.split(" ")[0]} ${lineFragment.join(
                " "
            )}`; // パスを更新
        }

        // 線を描画するメソッド
        draw() {
            if (!this.line) this.generate(); // パスが生成されていない場合は生成

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
        ctx.fillStyle = `hsla(200deg, 20%, 10%, 0.3)`;
        ctx.fillRect(0, 0, width, height);
    }

    // 線オブジェクトを生成する関数
    function generateLines(amount: number): Line[] {
        let lines: Line[] = [];
        for (let i = 0; i < amount; i += 1) {
            lines.push(
                new Line(
                    options.startPosition,
                    options.lineWidth,
                    options.lineLength,
                    options.lineColor,
                    options.lineStyle
                )
            );
        }
        return lines;
    }

    let id: number | undefined; // アニメーションフレームの ID を保持する変数

    // ウィンドウのリサイズ時に呼び出される関数
    function resize() {
        if (id !== undefined) cancelAnimationFrame(id);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        const lines = generateLines(options.lineCount);
        function update() {
            if (!(id! % options.drawSpeed)) {
                clear();
                lines.forEach((line) => {
                    line.draw();
                    if (!(id! % 5) && Math.random() > 0.95) {
                        line.mutatePath();
                    }
                });
            }
            id = requestAnimationFrame(update);
        }
        id = requestAnimationFrame(update);
    }

    // ウィンドウのリサイズイベントリスナーを登録
    window.addEventListener("resize", resize, {
        passive: true
    });

    resize(); // 初期化時にリサイズ関数を呼び出す
}
