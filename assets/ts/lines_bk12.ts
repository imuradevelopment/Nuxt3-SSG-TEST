// キャンバス要素とその描画コンテキストを初期化する関数
function initCanvas(id, parentId, styles, bgColor, count, position) {
    // 色オブジェクトからhsla形式の色文字列を生成する関数
    function getColorString(color) {
        return `hsla(${color.h}deg,${color.s}%,${color.l}%,${color.a})`;
    }

    // キャンバス要素を取得
    const canvas = document.getElementById(id);
    if (!canvas) return console.error("Canvas element not found");

    // 描画コンテキストを取得
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return console.error("2D context not available");

    // キャンバス要素のサイズを親要素に合わせる関数
    function fit() {
        const parent = document.getElementById(parentId);
        if (parent)
            (canvas.width = parent.clientWidth),
                (canvas.height = parent.clientHeight);
    }

    // 線オブジェクトを表すクラス
    class Line {
        // コンストラクタ
        constructor(origin, size, length, color, style = "pattern") {
            this.size = size; // 線の太さ
            this.canvas = document.getElementById(id); // 線を描画するキャンバス要素
            this.origin = this.calcOrigin(origin, position); // 線の始点
            this.length = length; // 線のパスの長さ
            this.color = color; // 線の色
            this.style = style; // 線のスタイル
            this.offSet = 0; // 線のオフセット
            this.line = null; // 線のパスオブジェクト
            this.offSetSpeed = length / size; // 線のオフセット速度
        }

        // 線の始点を計算する関数
        calcOrigin(point) {
            const x = this.canvas.width,
                y = this.canvas.height;
            switch (point) {
                case "top":
                    return { x: x / 2, y: 0 };
                case "bottom":
                    return { x: x / 2, y: this.canvas.height };
                case "random":
                    return { x: Math.random() * x, y: Math.random() * y };
                case "left":
                    return { x: 0, y: y / 2 };
                case "right":
                    return { x: x, y: y / 2 };
                case "center":
                    return { x: x, y: y / 2 };
                default:
                    return { x: x / 2, y: y / 2 };
            }
        }

        // 線の色文字列を取得する関数
        getColorString() {
            return getColorString(this.color);
        }

        // 線のパスを生成するための基本的なパターンを返す関数
        getPatterns() {
            return [
                { line: `h${this.size}`, mag: this.size },
                { line: `h-${this.size}`, mag: this.size },
                { line: `v${this.size}`, mag: this.size },
                { line: `v-${this.size}`, mag: this.size },
                {
                    line: `l${this.size},${this.size}`,
                    mag: Math.hypot(this.size, this.size),
                },
                {
                    line: `l${this.size}-${this.size}`,
                    mag: Math.hypot(this.size, this.size),
                },
                {
                    line: `l-${this.size},${this.size}`,
                    mag: Math.hypot(this.size, this.size),
                },
                {
                    line: `l-${this.size}-${this.size}`,
                    mag: Math.hypot(this.size, this.size),
                },
            ];
        }

        // 線のパスを生成する関数
        generatePath() {
            let segments = this.getPatterns();
            let path = `M${this.origin.x},${this.origin.y}`;
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
                mag,
            };
            return this;
        }

        // 線の描画スタイルを設定する関数
        renderStyle(style) {
            if (style === "glitches") {
                ctx.lineDashOffset = this.line.mag + this.offSet;
                ctx.setLineDash([
                    this.size ** 1.5,
                    (this.line.mag / this.length) * this.size ** 2,
                ]);
                this.offSet += 20;
                ctx.lineWidth = 2;
                return this;
            }
            if (style === "pattern") {
                ctx.lineDashOffset = this.line.mag - this.offSet;
                ctx.setLineDash([this.line.mag, this.line.mag]);
                this.offSet += 10;
                ctx.lineWidth = 0.2;
            }
        }

        // パスの一部をランダムに変更する関数
        mutatePath() {
            let lineFragment = this.line.path.split(" ").slice(1);
            let generator = this.getPatterns();
            lineFragment[(Math.random() * lineFragment.length) | 0] =
                generator[(Math.random() * generator.length) | 0].line;
            this.line.path = `${
                this.line.path.split(" ")[0]
            } ${lineFragment.join(" ")}`;
        }

        // 線を描画する関数
        draw() {
            if (!this.line) this.generatePath();

            ctx.strokeStyle = this.getColorString();
            this.renderStyle(this.style);
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.stroke(new Path2D(this.line.path));
            return this;
        }
    }

    fit();

    // キャンバスをクリアする関数
    function clear() {
        ctx.fillStyle = getColorString(bgColor);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // 線オブジェクトを生成する関数
    function generateLines(amount) {
        let lines = [];
        for (let i = 0; i < amount; i += 1) {
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

    let animationId;

    // ウィンドウのリサイズ時に呼び出される関数
    function resizeCanvas() {
        if (animationId !== undefined) cancelAnimationFrame(animationId);
        fit();
        const animatedLines = generateLines(count);

        function update() {
            if (!(animationId % 3)) {
                clear();
                animatedLines.forEach((line) => {
                    line.draw();
                    if (!(animationId % 5) && Math.random() > 0.95) {
                        line.mutatePath();
                    }
                });
            }
            animationId = requestAnimationFrame(update);
        }
        animationId = requestAnimationFrame(update);
    }

    // ウィンドウのリサイズイベントリスナーを登録
    window.addEventListener("resize", resizeCanvas, { passive: true });

    resizeCanvas(); // 初期化時にリサイズ関数を呼び出す
}

// initCanvas関数を外部から利用できるようにエクスポート
export { initCanvas };
