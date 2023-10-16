class CanvasRenderer {
    private canvas: HTMLCanvasElement; // キャンバス要素を保持
    private context: CanvasRenderingContext2D; // キャンバス 2D コンテキストを保持
    private lineStyles: LineStyle[]; // LineStyle インスタンスの配列
    private backgroundColor: any; // 背景色設定
    private animationId: number | undefined; // アニメーションの ID

    constructor(
        canvasId: string,
        parentId: string,
        linePatterns: LinePattern[],
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
            linePatterns,
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
        linePatterns: LinePattern[],
        lineCount: number,
        startPosition: string
    ): LineStyle[] {
        const lines: LineStyle[] = [];
        const requiredLinePatterns = linePatterns.filter((linePattern) => linePattern.required);

        requiredLinePatterns.forEach((requiredLinePattern) => {
            lines.push(new LineStyle(requiredLinePattern, startPosition, this.canvas));
        });

        for (let i = 0; i < lineCount - requiredLinePatterns.length; i++) {
            const anRequiredLinePatterns = linePatterns[Math.floor(Math.random() * linePatterns.length)];
            lines.push(new LineStyle(anRequiredLinePatterns, startPosition, this.canvas));
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
                if (Math.random() > 0.95) { // 約5%の確率で条件が成立
                    line.mutatePath(); // パスの一部をランダムに変更
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
    lineSize: number;
    origin: { x: number; y: number };
    length: number;
    color: { h: number; s: number; l: number; a: number };
    lineStyle: string;
    offset: number;
    path: string;
    offsetSpeed: number;
    canvas: HTMLCanvasElement;

    constructor(linePattern: LinePattern, startPosition: string, canvas: HTMLCanvasElement) {
        this.lineSize = linePattern.lineSize;
        this.origin = this.calculateOrigin(startPosition, canvas);
        this.length = 500 + Math.random() * 1000;
        this.color = linePattern.color;
        this.lineStyle = linePattern.lineStyle || "pattern";
        this.offset = 0;
        this.path = "";
        this.offsetSpeed = this.length / this.lineSize;
        this.canvas = canvas;
    }

    // ラインを描画するメソッド
    draw(context: CanvasRenderingContext2D): void {
        if (!this.path) {
            this.generatePath();
        }

        context.strokeStyle = this.getColorString();
        this.renderStyle(this.lineStyle, context);
        context.lineCap = "round"; // 線の末端のスタイルを指定
        context.lineJoin = "round"; // 2つの線が交差するときの角のスタイルを指定
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
            context.lineDashOffset = this.offset + this.length; // 破線パターンのオフセットを設定
            context.setLineDash([
                this.lineSize ** 1.5, // 破線の長さを指定
                (this.length / this.lineSize) * this.lineSize ** 2, // 破線の長さを指定
            ]);
            this.offset += 20; // 破線がどの位置から始まるかを制御
            context.lineWidth = 2; // 描かれる線の幅
        } else if (style === "pattern") {
            context.lineDashOffset = this.length - this.offset; // 破線パターンのオフセットを設定
            context.setLineDash([
                this.length,  // 破線の長さを指定
                this.length,  // 破線の長さを指定
            ]);
            this.offset += 10; // 破線がどの位置から始まるかを制御
            context.lineWidth = 0.2; // 描かれる線の幅
        }
    }

    // ラインのパスを生成するメソッド
    generatePath(): void {
        const segments = this.getPatterns();
        let path = `M${this.origin.x},${this.origin.y}`; // SVG パスの始点を指定
        let mag = 0;
        for (let i = 0; i < this.length; i += 1) {
            const fragment = segments[Math.floor(Math.random() * segments.length)]; // segments 配列からランダムに選択された要素を fragment 変数に代入しています。Math.floor(Math.random() * segments.length) は、segments 配列内のランダムなインデックスを生成します。
            if (fragment.line) { path += ` ${fragment.line}`;} // fragment オブジェクトが line プロパティを持つ場合に、SVG パスに新しい線セグメントを追加しています。
            mag += fragment.mag; // mag 変数に fragment.mag を加算しています。mag は線セグメントの長さを表す変数で、各セグメントの長さが加算されています。
        }
        this.path = path;
    }

    // ラインのパスセグメントを取得するメソッド
    getPatterns(): any[] {
        return [
            // 直線セグメント
            {
                line: `h${this.lineSize}`, // 水平線
                mag: this.lineSize, // セグメントの長さ
            },
            {
                line: `h-${this.lineSize}`, // 逆向きの水平線
                mag: this.lineSize, // セグメントの長さ
            },
            {
                line: `v${this.lineSize}`, // 垂直線
                mag: this.lineSize, // セグメントの長さ
            },
            {
                line: `v-${this.lineSize}`, // 逆向きの垂直線
                mag: this.lineSize, // セグメントの長さ
            },
            {
                line: `l${this.lineSize},${this.lineSize}`, // 左下がりの対角線
                mag: Math.hypot(this.lineSize, this.lineSize), // セグメントの長さ
            },
            {
                line: `l${this.lineSize}-${this.lineSize}`, // 右下がりの対角線
                mag: Math.hypot(this.lineSize, this.lineSize), // セグメントの長さ
            },
            {
                line: `l-${this.lineSize},${this.lineSize}`, // 左上がりの対角線
                mag: Math.hypot(this.lineSize, this.lineSize), // セグメントの長さ
            },
            {
                line: `l-${this.lineSize}-${this.lineSize}`, // 右上がりの対角線
                mag: Math.hypot(this.lineSize, this.lineSize), // セグメントの長さ
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

interface LinePattern {
    required: boolean;
    lineSize: number;
    lineStyle: string;
    color: {
        h: number;
        s: number;
        l: number;
        a: number;
    };
}

function initializeCanvas(
    canvasId: string,
    parentId: string,
    linePatterns: LinePattern[],
    backgroundColor: any,
    lineCount: number,
    startPosition: string
): void {
    new CanvasRenderer(
        canvasId,
        parentId,
        linePatterns,
        backgroundColor,
        lineCount,
        startPosition
    );
}

export { initializeCanvas };