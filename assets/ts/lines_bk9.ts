/*
このコードは、Canvasを使用してランダムな線のアニメーションを作成するためのものです。
基本的な機能は以下の通りです。

1. キャンバス要素を取得し、2D コンテキストを設定します。
    2Dコンテキスト（2D context）は、HTML5の <canvas> 要素を操作して2次元のグラフィックスを描画するためのAPIです。
    HTML5の <canvas> 要素は、ビットマップ画像を描画するための領域を提供し、
    2Dコンテキストを使用することで、図形、テキスト、画像などの要素を描画できます。
2. Line クラスは、ランダムな線を生成し描画するためのクラスです。
3. getColorString メソッドは、HSLA 形式の色文字列を返します。
4. generators メソッドは、パスの生成に使用するセグメント（線分）のリストを返します。
5. generate メソッドは、ランダムなパスを生成します。
6. renderStyle メソッドは、線の描画スタイルを設定します。
7. mutatePath メソッドは、パスの一部をランダムに変更します。
8. draw メソッドは、線を描画します。
9. clear 関数は、キャンバスをクリアして背景色を設定します。
10. generateLines 関数は、複数の線オブジェクトを生成します。
11. resize 関数は、ウィンドウのリサイズ時に呼び出され、アニメーションを更新します。
*/

// HSLA 形式の色文字列を生成する関数
function getColorString(color: { h: number; s: number; l: number; a: number }) {
    return `hsla(${color.h}deg,${color.s}%,${color.l}%,${color.a})`;
}

export const lines = (
    canvasId: string, // キャンバスのIDを外部から受け取る
    styles: { size: number; color: { h: number; s: number; l: number; a: number }; style?: string }[], // 線のスタイル情報を外部から受け取る
    numberOfLines: number, // 生成する線の数を外部から受け取る
    backgroundColor: { h: number; s: number; l: number; a: number; } // 背景色をデフォルト値として追加
) => {
    // ウィンドウのロードが完了したときに実行する関数
    // window.addEventListener("load", () => {
        // キャンバス要素を取得
        const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
        if (!canvas) {
            console.error("キャンバス要素が見つかりません");
            return;
        }
        // 2D コンテキストを取得
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            console.error("2Dコンテキストが利用できない");
            return;
        }
        // キャンバスのサイズを親要素に合わせる
        function fitCanvasToParent() {
            const parent = document.getElementById('canvasBox');
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            }
        }

        // 線オブジェクトのクラスを定義
        // ランダムな線を生成し描画するためのクラスです。線のスタイル、色、サイズ、形状などを指定できます。
        class Line {
            size: number; // 線の太さ
            origin: { x: number; y: number }; // 線の始点座標
            length: number; // 線の長さ
            color: { h: number; s: number; l: number; a: number }; // 線の色
            style: string; // 線の描画スタイル
            offSet: number; // オフセット値
            line: { path: string; mag: number } | null; // パス情報
            offSetSpeed: number; // オフセットの速度

            // // 原型
            // constructor(
            //     origin: { x: number; y: number },
            //     size: number,
            //     length: number,
            //     color: { h: number; s: number; l: number; a: number },
            //     style = "pattern"
            // ) {
            //     this.size = size;
            //     this.origin = origin;
            //     this.length = length;
            //     this.color = color;
            //     this.style = style;
            //     this.origin = `M${origin.x},${origin.y}`;
            //     this.offSet = 0;
            //     this.line = null;
            //     this.offSetSpeed = length / size;
            // }

            // Line クラスのコンストラクタ内で origin をランダムに設定する
            constructor(
                origin: { x: number; y: number },
                size: number,
                length: number,
                color: { h: number; s: number; l: number; a: number },
                style = "pattern"
            ) {
                this.size = size;
                this.origin = { x: Math.random() * origin.x, y: Math.random() *origin.y }
                this.length = length;
                this.color = color;
                this.style = style;
                this.origin = `M${Math.random() * origin.x},${Math.random() * origin.y}`;
                this.offSet = 0;
                this.line = null;
                this.offSetSpeed = length / size;
            }

            // // Line クラスのコンストラクタ内で origin をキャンバスの中央に設定する
            // constructor(
            //     origin: { x: number; y: number },
            //     size: number,
            //     length: number,
            //     color: { h: number; s: number; l: number; a: number },
            //     style = "pattern"
            // ) {
            //     this.size = size;
            //     this.origin = { x: origin.x / 2, y: origin.y / 2 }
            //     this.length = length;
            //     this.color = color;
            //     this.style = style;
            //     this.origin = `M${origin.x / 2},${origin.y / 2}`;
            //     this.offSet = 0;
            //     this.line = null;
            //     this.offSetSpeed = length / size;
            // }

            // HSLA 形式の色文字列を取得
            getColorString() {
                return getColorString(this.color);
            }

            // パスの生成に使用するセグメント（線分）のリストを定義
            generators() {
                return [
                    { line: `h${this.size}`, mag: this.size }, // 水平線
                    { line: `h-${this.size}`, mag: this.size }, // 逆向きの水平線
                    { line: `v${this.size}`, mag: this.size }, // 垂直線
                    { line: `v-${this.size}`, mag: this.size }, // 逆向きの垂直線
                    { line: `l${this.size},${this.size}`, mag: Math.hypot(this.size, this.size) }, // 対角線
                    { line: `l${this.size}-${this.size}`, mag: Math.hypot(this.size, this.size) }, // 逆向きの対角線
                    { line: `l-${this.size},${this.size}`, mag: Math.hypot(this.size, this.size) }, // 逆向きの対角線
                    { line: `l-${this.size}-${this.size}`, mag: Math.hypot(this.size, this.size) }, // 対角線
                    // 新しい曲線セグメントを追加します
                    { curve: `Q${this.size * 2},${this.size * 2},${this.size},${this.size}`, mag: 2 * Math.hypot(this.size, this.size) }, // 二次ベジェ曲線
                    { curve: `Q${-this.size * 2},${-this.size * 2},${-this.size},${-this.size}`, mag: 2 * Math.hypot(this.size, this.size) }, // 逆向きの二次ベジェ曲線
                    { curve: `q${this.size},${this.size / 2},0,${this.size}`, mag: 2 * this.size }, // sin波
                    { curve: `q${this.size},${-this.size / 2},0,${-this.size}`, mag: 2 * this.size }, // cos波
                    { curve: `q${this.size},${this.size},0,${this.size}`, mag: 2 * this.size }, // tan波
                    { curve: `l${this.size},${this.size / 2}`, mag: Math.hypot(this.size, this.size / 2) }, // ノコギリ波
                    { curve: `l${this.size},${0}`, mag: this.size }, // 矩形波
                    { curve: `l${this.size},${-this.size}`, mag: this.size }, // ピーク波
                    { curve: `q${this.size / 2},${this.size},${-this.size / 2},${-this.size}`, mag: 2 * this.size }, // 三角波
                    { curve: `l${this.size / 2},${0} q${this.size / 2},${this.size / 2},0,${this.size}`, mag: this.size + (this.size / 2) }, // パルス波
                    { curve: `q${-this.size},${-this.size / 2},0,${-this.size}`, mag: 2 * this.size }, // 逆向きのsin波
                    { curve: `l${-this.size},${-this.size / 2}`, mag: Math.hypot(this.size, this.size / 2) }, // 逆向きのノコギリ波
                    // 他のセグメントを追加することができます
                ];
            }


            // ランダムなパスの生成メソッド
            generate() {
                let segments = this.generators(this.size);
                let path = this.origin;
                let mag = 0;
                let fragment;
                for (let i = 0; i < this.length; i += 1) {
                    fragment = segments[(Math.random() * segments.length) | 0];
                    if (fragment.line) {
                        path += ` ${fragment.line}`;
                    } else if (fragment.curve) {
                        path += ` ${fragment.curve}`;
                    }
                    mag += fragment.mag;
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
                    ctx.lineDashOffset = this.line!.mag + this.offSet;
                    ctx.setLineDash([
                        this.size ** 1.5,
                        (this.line!.mag / this.length) * this.size ** 2
                    ]);
                    this.offSet += 20;
                    ctx.lineWidth = 2;
                    return this;
                }
                if (style === "pattern") {
                    ctx.lineDashOffset = this.line!.mag - this.offSet;
                    ctx.setLineDash([this.line!.mag, this.line!.mag]);
                    this.offSet += 10;
                    ctx.lineWidth = 0.2;
                }
            }

            // パスの一部をランダムに変更するメソッド
            mutatePath() {
                let lineFragment = this.line!.path.split(" ").slice(1);
                let generator = this.generators();
                lineFragment[(Math.random() * lineFragment.length) | 0] =
                    generator[(Math.random() * generator.length) | 0].line;
                this.line!.path = `${this.line!.path.split(" ")[0]} ${lineFragment.join(
                    " "
                )}`;
            }

            // 線を描画するメソッド
            draw() {
                if (!this.line) this.generate();

                ctx.strokeStyle = this.getColorString();
                this.renderStyle(this.style);
                ctx.lineCap = "round";
                ctx.lineJoin = "round";
                ctx.stroke(new Path2D(this.line.path));
                return this;
            }
        }

        fitCanvasToParent();

        // キャンバスをクリアする関数
        function clear() {
            ctx.fillStyle = getColorString(backgroundColor); // 引数で渡された背景色を設定
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        // 線オブジェクトを生成する関数
        function generateLines(amount: number): Line[] {
            let lines: Line[] = [];
            for (let i = 0; i < amount; i += 1) {
                // styles 配列からランダムなスタイルを選択
                let style = styles[(Math.random() * styles.length) | 0];
                lines.push(
                    new Line(
                        { x: canvas.width, y: canvas.height },
                        style.size,
                        500 + Math.random() * 1000,
                        style.color,
                        style.style
                    )
                );
            }
            return lines;
        }

        let id: number | undefined; // アニメーションフレームの ID を保持する変数

        // ウィンドウのリサイズ時に呼び出される関数
        function resize() {
            if (id !== undefined) cancelAnimationFrame(id);
            fitCanvasToParent();
            const lines = generateLines(numberOfLines); // numberOfLines の値を使用
            function update() {
                if (!(id! % 3)) {
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
    // });
};