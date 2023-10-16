function initializeCanvas(canvasId: string, parentId: string, styles: any[], backgroundColor: any, lineCount: number, linePosition: string): void {
    // 色オブジェクトからhsla形式の色文字列を生成する関数
    function getColorString(color: { h: number; s: number; l: number; a: number }): string {
        return `hsla(${color.h}deg, ${color.s}%, ${color.l}%, ${color.a})`;
    }

    // キャンバス要素を取得
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error("Canvas element not found");
        return;
    }

    // 描画コンテキストを取得
    const context = canvas.getContext("2d", { alpha: false });
    if (!context) {
        console.error("2D context not available");
        return;
    }

    // キャンバス要素のサイズを親要素に合わせる関数
    function fitCanvasToParent(): void {
        const parent = document.getElementById(parentId);
        if (parent) {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
        }
    }

    // 線オブジェクトを表すクラス
    class Line {
        size: number;
        canvas: HTMLCanvasElement;
        origin: { x: number; y: number };
        length: number;
        color: { h: number; s: number; l: number; a: number };
        style: string;
        offSet: number;
        line: { path: string; mag: number };
        offSetSpeed: number;
        constructor(
            size,
            length,
            color,
            style = "pattern",
            position = "center"
        ) {
            this.size = size;
            this.canvas = document.getElementById(id);
            this.origin = this.calcOrigin(position); // Use the 'position' argument
            this.length = length;
            this.color = color;
            this.style = style;
            this.offSet = 0;
            this.line = null;
            this.offSetSpeed = length / size;
        }

        calcOrigin(position) {
            const x = this.canvas.width,
                y = this.canvas.height;
            switch (position) {
                case "top": // Use the 'position' parameter
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
                    return { x: x / 2, y: y / 2 };
                default:
                    return { x: x / 2, y: y / 2 };
            }
        }

        getColorString(): string {
            return getColorString(this.color);
        }

        getPatterns() {
            return [
                // 直線セグメント
                {
                    line: `h${this.size}`, // 水平線
                    mag: this.size, // セグメントの長さ
                },
                {
                    line: `h-${this.size}`, // 逆向きの水平線
                    mag: this.size, // セグメントの長さ
                },
                {
                    line: `v${this.size}`, // 垂直線
                    mag: this.size, // セグメントの長さ
                },
                {
                    line: `v-${this.size}`, // 逆向きの垂直線
                    mag: this.size, // セグメントの長さ
                },
                {
                    line: `l${this.size},${this.size}`, // 左下がりの対角線
                    mag: Math.hypot(this.size, this.size), // セグメントの長さ
                },
                {
                    line: `l${this.size}-${this.size}`, // 右下がりの対角線
                    mag: Math.hypot(this.size, this.size), // セグメントの長さ
                },
                {
                    line: `l-${this.size},${this.size}`, // 左上がりの対角線
                    mag: Math.hypot(this.size, this.size), // セグメントの長さ
                },
                {
                    line: `l-${this.size}-${this.size}`, // 右上がりの対角線
                    mag: Math.hypot(this.size, this.size), // セグメントの長さ
                },
                // 曲線セグメント
                // { curve: `Q${this.size * 2},${this.size * 2},${this.size},${this.size}`, mag: 2 * Math.hypot(this.size, this.size) }, // 二次ベジェ曲線
                // { curve: `Q${-this.size * 2},${-this.size * 2},${-this.size},${-this.size}`, mag: 2 * Math.hypot(this.size, this.size) }, // 逆向きの二次ベジェ曲線
                // { curve: `q${this.size},${this.size / 2},0,${this.size}`, mag: 2 * this.size }, // sin波
                // { curve: `q${this.size},${-this.size / 2},0,${-this.size}`, mag: 2 * this.size }, // cos波
                // { curve: `q${this.size},${this.size},0,${this.size}`, mag: 2 * this.size }, // tan波
                // { curve: `l${this.size},${this.size / 2}`, mag: Math.hypot(this.size, this.size / 2) }, // ノコギリ波
                // { curve: `l${this.size},${0}`, mag: this.size }, // 矩形波
                // { curve: `l${this.size},${-this.size}`, mag: this.size }, // ピーク波
                // { curve: `q${this.size / 2},${this.size},${-this.size / 2},${-this.size}`, mag: 2 * this.size }, // 三角波
                // { curve: `l${this.size / 2},${0} q${this.size / 2},${this.size / 2},0,${this.size}`, mag: this.size + (this.size / 2) }, // パルス波
                // { curve: `q${-this.size},${-this.size / 2},0,${-this.size}`, mag: 2 * this.size }, // 逆向きのsin波
                // { curve: `l${-this.size},${-this.size / 2}`, mag: Math.hypot(this.size, this.size / 2) }, // 逆向きのノコギリ波
                // { curve: `Q${this.size * 2},${this.size * 2},${this.size},${this.size}`, mag: 2 * Math.hypot(this.size, this.size) }, // 二次ベジェ曲線
                // { curve: `Q${-this.size * 2},${-this.size * 2},${-this.size},${-this.size}`, mag: 2 * Math.hypot(this.size, this.size) }, // 逆向きの二次ベジェ曲線
                // { curve: `q${this.size},${this.size / 2},0,${this.size}`, mag: 2 * this.size }, // sin波
                // { curve: `q${this.size},${-this.size / 2},0,${-this.size}`, mag: 2 * this.size }, // cos波
                // { curve: `q${this.size},${this.size},0,${this.size}`, mag: 2 * this.size }, // tan波
                // { curve: `l${this.size},${this.size / 2}`, mag: Math.hypot(this.size, this.size / 2) }, // ノコギリ波
                // { curve: `l${this.size},${0}`, mag: this.size }, // 矩形波
                // { curve: `l${this.size},${-this.size}`, mag: this.size }, // ピーク波
                // { curve: `q${this.size / 2},${this.size},${-this.size / 2},${-this.size}`, mag: 2 * this.size }, // 三角波
                // { curve: `l${this.size / 2},${0} q${this.size / 2},${this.size / 2},0,${this.size}`, mag: this.size + (this.size / 2) }, // パルス波
                // { curve: `q${-this.size},${-this.size / 2},0,${-this.size}`, mag: 2 * this.size }, // 逆向きのsin波
                // { curve: `l${-this.size},${-this.size / 2}`, mag: Math.hypot(this.size, this.size / 2) }, // 逆向きのノコギリ波
            ];
        }

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

        renderStyle(style: string) {
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
        // renderStyle(style: string) {
        //     if (style === "glitches") {
        //         ctx.lineDashOffset = this.line.mag + this.offSet;
        //         ctx.setLineDash([
        //             this.size ** 1.5,
        //             (this.line.mag / this.length) * this.size ** 2,
        //         ]);
        //         this.offSet += 20;
        //         ctx.lineWidth = 2;
        //         return this;
        //     }
        //     if (style === "pattern") {
        //         ctx.lineDashOffset = -this.offSet; // ダッシュオフセットを負の値に設定
        //         ctx.setLineDash([this.size * 4, this.size * 4]); // ダッシュの間隔を調整
        //         this.offSet += 10;
        //         ctx.lineWidth = 1; // サイズに合わせて線幅を設定
        //     }
        // }
        
        mutatePath() {
            let lineFragment = this.line.path.split(" ").slice(1);
            let generator = this.getPatterns();
            lineFragment[(Math.random() * lineFragment.length) | 0] =
                generator[(Math.random() * generator.length) | 0].line;
            this.line.path = `${
                this.line.path.split(" ")[0]
            } ${lineFragment.join(" ")}`;
        }

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

    function clear() {
        ctx.fillStyle = getColorString(bgColor);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // 線オブジェクトを生成する関数
    function generateLines(styles: any[], count: number, position: string) {
        let lines = [];

        // "required: true" のスタイルを先に描画
        const requiredStyles = styles.filter((style) => style.required);
        requiredStyles.forEach((style) => {
            lines.push(
                new Line(
                    style.size,
                    500 + Math.random() * 1000,
                    style.color,
                    style.style,
                    position
                )
            );
        });

        // "required: false" のスタイルをランダムに描画
        for (let i = 0; i < count - requiredStyles.length; i += 1) {
            let randomStyle = styles[(Math.random() * styles.length) | 0];
            lines.push(
                new Line(
                    randomStyle.size,
                    500 + Math.random() * 1000,
                    randomStyle.color,
                    randomStyle.style,
                    position
                )
            );
        }
        return lines;
    }

    let animationId: number | undefined;

    function resizeCanvas() {
        if (animationId !== undefined) cancelAnimationFrame(animationId);
        fit();
        const animatedLines = generateLines(styles, count, position);

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

    window.addEventListener("resize", resizeCanvas, { passive: true });

    resizeCanvas();
}

export { initCanvas };