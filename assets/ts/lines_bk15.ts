function initializeCanvas(
    canvasId: string,     // キャンバス要素のID
    parentId: string,     // 親要素のID
    lineStyles: any[],    // 描画スタイルのリスト
    backgroundColor: any, // 背景色
    lineCount: number,    // 描画する線の数
    startPosition: string // 線の開始位置
): void {
    // 色オブジェクトからHSLA形式の色文字列を生成
    function getColorString(
        color: {
            h: number;
            s: number;
            l: number;
            a: number;
        }
    ): string {
        return `hsla(${color.h}deg, ${color.s}%, ${color.l}%, ${color.a})`;
    }

    // キャンバス要素を取得
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error("Canvas element not found"); // エラーメッセージ
        return;
    }

    // 描画コンテキストを取得
    const context = canvas.getContext("2d", { alpha: false });
    if (!context) {
        console.error("2D context not available"); // エラーメッセージ
        return;
    }

    // キャンバスのサイズを親要素に合わせる
    function fitCanvasSize(): void {
        const parentElement = document.getElementById(parentId);
        if (parentElement) {
            canvas.width = parentElement.clientWidth;
            canvas.height = parentElement.clientHeight;
        }
    }

    // 描画スタイルを表すクラス
    class LineStyle {
        size: number;
        canvas: HTMLCanvasElement;
        origin: { x: number; y: number };
        length: number;
        color: { h: number; s: number; l: number; a: number };
        style: string;
        offset: number;
        path: string;
        offsetSpeed: number;

        constructor(
            size: number,
            length: number,
            color: { h: number; s: number; l: number; a: number },
            style = "pattern",
            position = "center"
        ) {
            this.size = size;
            this.canvas = document.getElementById(canvasId);
            this.origin = this.calculateOrigin(position);
            this.length = length;
            this.color = color;
            this.style = style;
            this.offset = 0;
            this.path = "";
            this.offsetSpeed = length / size;
        }

        calculateOrigin(position: string): { x: number; y: number } {
            const canvasWidth = this.canvas.width;
            const canvasHeight = this.canvas.height;
            switch (position) {
                case "top": // 上部に線を開始
                    return { x: canvasWidth / 2, y: 0 };
                case "bottom": // 下部に線を開始
                    return { x: canvasWidth / 2, y: canvasHeight };
                case "random": // ランダムな位置に線を開始
                    return {
                        x: Math.random() * canvasWidth,
                        y: Math.random() * canvasHeight,
                    };
                case "left": // 左部に線を開始
                    return { x: 0, y: canvasHeight / 2 };
                case "right": // 右部に線を開始
                    return { x: canvasWidth, y: canvasHeight / 2 };
                case "center": // 中央に線を開始 (デフォルト)
                default:
                    return { x: canvasWidth / 2, y: canvasHeight / 2 };
            }
        }

        getColorString(): string {
            return getColorString(this.color);
        }

        generatePath() {
            const segments = this.getPatterns();
            let path = `M${this.origin.x},${this.origin.y}`;
            let mag = 0;
            for (let i = 0; i < this.length; i += 1) {
                const fragment = segments[Math.floor(Math.random() * segments.length)];
                if (fragment.line) {
                    path += ` ${fragment.line}`;
                }
                mag += fragment.mag;
            }
            this.path = path;
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
                // 他のパターンも追加できます
            ];
        }

        renderStyle(style: string) {
            // スタイルに応じて設定を変更
            if (style === "glitches") {
                context.lineDashOffset = this.offset + this.length;
                context.setLineDash(
                    [
                        this.size ** 1.5,
                        (this.length / this.size) * this.size ** 2,
                    ]
                );
                this.offset += 20;
                context.lineWidth = 2;
            } else if (style === "pattern") {
                context.lineDashOffset = this.length - this offset;
                context.setLineDash(
                    [
                        this.length, 
                        this.length
                    ]
                );
                this.offset += 10;
                context.lineWidth = 0.2;
            }
        }

        mutatePath() {
            // パスの一部をランダムに変更
            const lineFragments = this.path.split(" ").slice(1);
            const generator = this.getPatterns();
            lineFragments[
                Math.floor(
                    Math.random() * 
                    lineFragments.length
                )] =
                generator[
                    Math.floor(
                        Math.random() * 
                        generator.length
                    )].line;
            this.path = `${this.path.split(" ")[0]} ${lineFragments.join(" ")}`;
        }

        draw() {
            if (!this.path) {
                this.generatePath();
            }

            context.strokeStyle = this.getColorString();
            this.renderStyle(this.style);
            context.lineCap = "round";
            context.lineJoin = "round";
            context.stroke(
                new Path2D(
                    this.path
                )
            );
        }
    }

    fitCanvasSize();

    function clearCanvas() {
        context.fillStyle = getColorString(backgroundColor);
        context.fillRect(
            0, 
            0, 
            canvas.width, 
            canvas.height
        );
    }

    function generateDrawingStyles(
        styles: any[],
        count: number,
        startPosition: string
    ) {
        const lines = [];

        // "required: true" のスタイルを描画
        const requiredStyles = styles.filter(
            (style) => 
            style.required
        );
        requiredStyles.forEach(
            (style) => {
                lines.push(
                    new LineStyle(
                        style.size,
                        500 + Math.random() * 1000,
                        style.color,
                        style.style,
                        startPosition
                    )
                );
            }
        );

        // "required: false" のスタイルをランダムに描画
        for (let i = 0; i < count - requiredStyles.length; i += 1) {
            const randomStyle =
                styles[
                    Math.floor(Math.random() * 
                    styles.length
                )];
            lines.push(
                new LineStyle(
                    randomStyle.size,
                    500 + Math.random() * 1000,
                    randomStyle.color,
                    randomStyle.style,
                    startPosition
                )
            );
        }
        return lines;
    }

    let animationId: number | undefined;

    function resizeCanvas() {
        if (animationId !== undefined) {
            cancelAnimationFrame(animationId);
        }
        fitCanvasSize();
        const animatedLines = generateDrawingStyles(
            lineStyles,
            lineCount,
            startPosition
        );

        function updateCanvas() {
            if (!(animationId % 3)) {
                clearCanvas();
                animatedLines.forEach((line) => {
                    line.draw();
                    if (!(animationId % 5) 
                    && Math.random() > 0.95) {
                        line.mutatePath();
                    }
                });
            }
            animationId = requestAnimationFrame(updateCanvas);
        }
        animationId = requestAnimationFrame(updateCanvas);
    }

    window.addEventListener("resize", resizeCanvas, { passive: true });

    resizeCanvas();
}

export { initializeCanvas };
