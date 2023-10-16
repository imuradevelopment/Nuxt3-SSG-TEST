class CanvasRenderer {
    private canvas: HTMLCanvasElement; // キャンバス要素を保持
    private context: CanvasRenderingContext2D; // キャンバス 2D コンテキストを保持
    private lineStyles: LineStyle[]; // LineStyle インスタンスの配列
    private backgroundColor: any; // 背景色設定
    private animationId: number | undefined; // アニメーションの ID

    constructor(
        canvasId: string,
        parentId: string,
        lineStyles: any[],
        backgroundColor: any,
        lineCount: number,
        startPosition: string
    ) {
        this.canvas = this.getCanvasElement(canvasId); // キャンバス要素を取得
        this.context = this.canvas.getContext("2d", {
            alpha: false,
        }) as CanvasRenderingContext2D; // 2D コンテキストを取得

        this.backgroundColor = backgroundColor; // 背景色を設定
        this.setupCanvasSize(parentId); // キャンバスサイズを設定        
        this.lineStyles = this.generateDrawingStyles( // ラインスタイルを生成
            lineStyles,
            lineCount,
            startPosition
        );
        this.setupResizeHandler(parentId); // リサイズハンドラを設定
        this.startAnimation(); // アニメーションを開始
    }

    // キャンバス要素を取得するメソッド
    private getCanvasElement(canvasId: string): HTMLCanvasElement {
        const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        if (!canvas) {
            console.error("Canvas element not found");
        }
        return canvas;
    }

    // キャンバスサイズを設定するメソッド
    private setupCanvasSize(parentId: string): void {
        const parentElement = document.getElementById(parentId);
        if (parentElement) {
            this.canvas.width = parentElement.clientWidth;
            this.canvas.height = parentElement.clientHeight;
        }
    }

    // ラインスタイルを生成するメソッド
    private generateDrawingStyles(
        styles: any[],
        count: number,
        startPosition: string
    ): LineStyle[] {
        const lines: LineStyle[] = [];
        const requiredStyles = styles.filter((style) => style.required);

        requiredStyles.forEach((style) => {
            lines.push(new LineStyle(style, startPosition, this.canvas));
        });

        for (let i = 0; i < count - requiredStyles.length; i++) {
            const randomStyle =
                styles[Math.floor(Math.random() * styles.length)];
            lines.push(new LineStyle(randomStyle, startPosition, this.canvas));
        }

        return lines;
    }

    // キャンバスリサイズハンドラを設定するメソッド
    private setupResizeHandler(parentId: string): void {
        window.addEventListener("resize", () => this.setupCanvasSize(parentId)); // parentId を引数として渡す
    }

    // アニメーションを開始するメソッド
    private startAnimation(): void {
        this.animationId = requestAnimationFrame(() => this.updateCanvas());
    }

    // キャンバスをアップデートするメソッド
    private updateCanvas(): void {
        if (this.animationId !== undefined) {
            this.clearCanvas(); // キャンバスをクリア
            this.lineStyles.forEach((line) => {
                line.draw(this.context); // ラインを描画
                if (Math.random() > 0.95) {
                    line.mutatePath(); // パスを変更
                }
            });
            this.animationId = requestAnimationFrame(() => this.updateCanvas()); // 次のアニメーションフレームをリクエスト
        }
    }

    // キャンバスをクリアするメソッド
    private clearCanvas(): void {
        this.context.fillStyle = this.getColorString(this.backgroundColor);
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // 色を HSLA 文字列に変換するメソッド
    private getColorString(color: {
        h: number;
        s: number;
        l: number;
        a: number;
    }): string {
        return `hsla(${color.h}deg, ${color.s}%, ${color.l}%, ${color.a})`;
    }
}

class LineStyle {
    size: number;
    origin: { x: number; y: number };
    length: number;
    color: { h: number; s: number; l: number; a: number };
    style: string;
    offset: number;
    path: string;
    offsetSpeed: number;
    canvas: HTMLCanvasElement; // キャンバスを保持するプロパティを追加

    constructor(style: any, startPosition: string, canvas: HTMLCanvasElement) {
        this.size = style.size;
        this.origin = this.calculateOrigin(startPosition, canvas); // キャンバスを引数として渡す
        this.length = 500 + Math.random() * 1000;
        this.color = style.color;
        this.style = style.style || "pattern";
        this.offset = 0;
        this.path = "";
        this.offsetSpeed = this.length / this.size;
        this.canvas = canvas; // キャンバスを保持
    }

    // ラインを描画するメソッド
    draw(context: CanvasRenderingContext2D): void {
        if (!this.path) {
            this.generatePath(); // パスを生成
        }

        context.strokeStyle = this.getColorString();
        this.renderStyle(this.style, context);
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke(new Path2D(this.path));
    }

    // 色を HSLA 文字列に変換するメソッド
    private getColorString(): string {
        return `hsla(${this.color.h}deg, ${this.color.s}%, ${this.color.l}%, ${this.color.a})`;
    }

    // 描画スタイルを設定するメソッド
    private renderStyle(
        style: string,
        context: CanvasRenderingContext2D
    ): void {
        if (style === "glitches") {
            context.lineDashOffset = this.offset + this.length;
            context.setLineDash([
                this.size ** 1.5,
                (this.length / this.size) * this.size ** 2,
            ]);
            this.offset += 20;
            context.lineWidth = 2;
        } else if (style === "pattern") {
            context.lineDashOffset = this.length - this.offset;
            context.setLineDash([this.length, this.length]);
            this.offset += 10;
            context.lineWidth = 0.2;
        }
    }

    // ラインのパスを生成するメソッド
    generatePath(): void {
        const segments = this.getPatterns();
        let path = `M${this.origin.x},${this.origin.y}`;
        let mag = 0;
        for (let i = 0; i < this.length; i += 1) {
            const fragment =
                segments[Math.floor(Math.random() * segments.length)];
            if (fragment.line) {
                path += ` ${fragment.line}`;
            }
            mag += fragment.mag;
        }
        this.path = path;
    }

    // ラインのパスセグメントを取得するメソッド
    getPatterns(): any[] {
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

    // パスをランダムに変更するメソッド
    mutatePath(): void {
        // パスの一部をランダムに変更
        const lineFragments = this.path.split(" ").slice(1);
        const generator = this.getPatterns();
        lineFragments[Math.floor(Math.random() * lineFragments.length)] =
            generator[Math.floor(Math.random() * generator.length)].line;
        this.path = `${this.path.split(" ")[0]} ${lineFragments.join(" ")}`;
    }

    // キャンバス上のラインの出発点を計算するメソッド
    private calculateOrigin(
        position: string,
        canvas: HTMLCanvasElement
    ): { x: number; y: number } {
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
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
}

function initializeCanvas(
    canvasId: string,
    parentId: string,
    lineStyles: any[],
    backgroundColor: any,
    lineCount: number,
    startPosition: string
): void {
    new CanvasRenderer(
        canvasId,
        parentId,
        lineStyles,
        backgroundColor,
        lineCount,
        startPosition
    );
}

export { initializeCanvas };