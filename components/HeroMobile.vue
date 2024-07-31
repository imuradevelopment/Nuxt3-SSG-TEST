<template>
    <!-- モバイル表示専用のヒーローセクション -->
    <div id="canvasBox" class="md:hidden" style="min-height:450px; width: 100%;">
        <!-- キャンバス要素 -->
        <canvas id="lines" style="position: absolute;"></canvas>
        <div style="height:450px">
            <div class="heroString">
                <!-- キャッチコピー -->
                <h2 class="catchString fontSerif mb-1 text-6xl">
                    Solution<br /><span>&nbsp;</span>&<span>&nbsp;</span><br />Evolution
                </h2>
                <!-- サブメッセージ -->
                <p class="text-xs">
                    新しい発想と技術とコミュニケーションで問題を解決し、<br />より良い方法をご提案させていただきます。
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// キャンバスレンダラークラス
class CanvasRenderer {
    private canvas: HTMLCanvasElement; // キャンバス要素
    private context: CanvasRenderingContext2D; // キャンバスの描画コンテキスト
    private lineStyles: LineStyle[]; // ラインスタイルの配列
    private backgroundColor: Color; // 背景色設定
    private animationId: number | undefined; // アニメーションフレームを制御するためのID
    private linePatterns: LinePattern[]; // ラインパターンの配列
    private lineCount: number; // ラインの数
    private startPosition: string; // ラインの出発点の位置
    private parentElement: HTMLElement; // キャンバスの親要素
    private currentCanvasWidth: number; // 現在のキャンバスの幅

    constructor(
        canvasId: string, // キャンバス要素のID
        parentId: string, // キャンバス要素の親要素のID
        linePatterns: LinePattern[], // ラインのスタイルパターンの配列
        backgroundColor: Color, // 背景色の設定
        lineCount: number, // 描画するラインの数
        startPosition: string // ラインの出発点の位置
    ) {
        this.canvas = this.getCanvasElement(canvasId); // キャンバス要素を取得
        this.context = this.canvas.getContext("2d", { alpha: false }) as CanvasRenderingContext2D; // 2D コンテキストを取得
        this.backgroundColor = backgroundColor; // 背景色を設定
        this.parentElement = document.getElementById(parentId) as HTMLElement; // キャンバスの親要素を取得
        const canvasSize = this.setupCanvasSize(this.parentElement); // キャンバスサイズを設定
        this.currentCanvasWidth = canvasSize.width; // 現在のキャンバス幅を設定
        this.canvas.width = canvasSize.width; // キャンバスの幅を設定
        this.canvas.height = canvasSize.height; // キャンバスの高さを設定
        this.linePatterns = linePatterns; // ラインパターンを設定
        this.lineCount = lineCount; // ラインの数を設定
        this.startPosition = startPosition; // ラインの出発点を設定
        this.lineStyles = this.generateDrawingStyles(this.linePatterns, this.lineCount, this.startPosition); // ラインスタイルを生成
        this.setupResizeHandler(this.parentElement); // リサイズハンドラを設定
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
    private setupCanvasSize(parentElement: HTMLElement): { width: number, height: number } {
        return {
            width: Math.floor(parentElement.clientWidth),
            height: Math.floor(parentElement.clientHeight)
        }
    }

    // ラインスタイルを生成するメソッド
    private generateDrawingStyles(
        linePatterns: LinePattern[], // ラインのスタイルパターンの配列
        lineCount: number, // 生成するラインの数
        startPosition: string // ラインの出発点の位置
    ): LineStyle[] {
        const lines: LineStyle[] = [];
        // 必須のラインスタイルパターンのみを抽出し、lines 配列に追加
        const requiredLinePatterns = linePatterns.filter((linePattern) => linePattern.required);
        requiredLinePatterns.forEach((requiredLinePattern) => {
            lines.push(new LineStyle(requiredLinePattern, startPosition, this.canvas));
        });
        // 必須でないラインスタイルパターンをランダムに抽出して、lines 配列に追加
        for (let i = 0; i < lineCount - requiredLinePatterns.length; i++) {
            const anRequiredLinePatterns = linePatterns[Math.floor(Math.random() * linePatterns.length)];
            lines.push(new LineStyle(anRequiredLinePatterns, startPosition, this.canvas));
        }
        return lines;
    }

    // キャンバスリサイズハンドラを設定するメソッド
    private setupResizeHandler(parentElement: HTMLElement): void {
        window.addEventListener("resize", () => {
            // 現在と前回の横幅が違う場合だけ実行
            if (this.currentCanvasWidth != parentElement.clientWidth) {
                // アニメーションを停止
                this.stopAnimation();
                // キャンバスサイズを更新
                const canvasSize = this.setupCanvasSize(this.parentElement);
                this.currentCanvasWidth = canvasSize.width;
                this.canvas.width = canvasSize.width;
                this.canvas.height = canvasSize.height;
                // ラインスタイルを生成
                this.lineStyles = this.generateDrawingStyles(this.linePatterns, this.lineCount, this.startPosition);
                // アニメーションを再開
                this.startAnimation();
            }
        });
    }

    // アニメーションを開始するメソッド
    public startAnimation(): void {
        this.animationId = requestAnimationFrame(() => this.updateCanvas());
    }

    // アニメーションを停止するメソッド
    public stopAnimation(): void {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = undefined;
        }
    }

    // キャンバスをアップデートするメソッド
    private updateCanvas(): void {
        if (this.animationId !== undefined) {
            // キャンバスをクリア
            this.clearCanvas();
            this.lineStyles.forEach((line) => {
                // ラインを描画
                line.draw(this.context);
            });
            // 次のアニメーションフレームをリクエスト
            this.animationId = requestAnimationFrame(() => this.updateCanvas());
        }
    }

    // キャンバスをクリアするメソッド
    private clearCanvas(): void {
        this.context.fillStyle = this.getColorString(this.backgroundColor);
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // 色を HSLA 文字列に変換するメソッド
    private getColorString(color: Color): string {
        return `hsla(${color.h}deg, ${color.s}%, ${color.l}%, ${color.a})`;
    }
}

// ラインスタイルクラス
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
        this.lineSize = linePattern.lineSize * (window.devicePixelRatio / 3);
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

    // キャンバス上のラインの出発点を計算するメソッド
    private calculateOrigin(position: string, canvas: HTMLCanvasElement): { x: number; y: number } {
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

    // 描画スタイルを設定するメソッド
    private renderStyle(style: string, context: CanvasRenderingContext2D): void {
        if (style === "glitches") {
            context.lineDashOffset = this.offset + this.length; // 破線パターンのオフセットを設定
            context.setLineDash([
                this.lineSize ** 1.5, // 実線部分の長さを指定
                (this.length / this.lineSize) * this.lineSize ** 2, // 実線部分の長さを指定
            ]);
            this.offset += 20; // 破線がどの位置から始まるかを制御
            context.lineWidth = 2 * (window.devicePixelRatio / 3); // 描かれる線の幅
        } else if (style === "pattern") {
            context.lineDashOffset = this.length - this.offset; // 破線パターンのオフセットを設定
            context.setLineDash([
                this.length, // 実線部分の長さを指定
                this.length, // 実線部分の長さを指定
            ]);
            this.offset += 10; // 破線がどの位置から始まるかを制御
            context.lineWidth = 1 * (window.devicePixelRatio / 3); // 描かれる線の幅
            context.imageSmoothingEnabled = false;
        }
    }

    // ラインのパスを生成するメソッド
    generatePath(): void {
        const segments = this.getPatterns();
        let path = `M${this.origin.x},${this.origin.y}`; // SVG パスの始点を指定
        let mag = 0; // 線セグメントの長さを表す変数
        for (let i = 0; i < this.length; i += 1) {
            const fragment = segments[Math.floor(Math.random() * segments.length)]; // ランダムにセグメントを選択
            if (fragment.line) { path += ` ${fragment.line}`; } // パスにセグメントを追加
            mag += fragment.mag; // セグメントの長さを加算
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
        ];
    }

    // パスをランダムに変更するメソッド
    mutatePath(): void {
        const lineFragments = this.path.split(" ").slice(1); // パスを分割
        const generator = this.getPatterns();
        lineFragments[Math.floor(Math.random() * lineFragments.length)] =
            generator[Math.floor(Math.random() * generator.length)].line; // パスセグメントをランダムに置き換え
        this.path = `${this.path.split(" ")[0]} ${lineFragments.join(" ")}`; // パスを再構築
    }
}

interface LinePattern {
    required: boolean; // 必須かどうか
    lineSize: number; // ラインのサイズ
    lineStyle: string; // ラインのスタイル
    color: Color; // ラインの色
}

interface Color {
    h: number; // 色相 (Hue)
    s: number; // 彩度 (Saturation)
    l: number; // 明度 (Lightness)
    a: number; // 透明度 (Alpha)
}

let canvasRenderer: CanvasRenderer | undefined;

onMounted(() => {
    canvasRenderer = new CanvasRenderer(
        "lines",
        "canvasBox",
        [
            { required: false, lineSize: 1.25, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
            { required: false, lineSize: 2.5, lineStyle: "pattern", color: { h: 190, s: 90, l: 50, a: 0.3 } },
            { required: false, lineSize: 5, lineStyle: "pattern", color: { h: 210, s: 70, l: 60, a: 0.2 } },
            { required: false, lineSize: 10, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.15 } },
            { required: false, lineSize: 20, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.12 } },
            { required: false, lineSize: 20, lineStyle: "pattern", color: { h: 210, s: 20, l: 40, a: 0.12 } },
            { required: false, lineSize: 40, lineStyle: "pattern", color: { h: 190, s: 40, l: 50, a: 0.12 } },
            { required: false, lineSize: 80, lineStyle: "pattern", color: { h: 220, s: 100, l: 60, a: 0.12 } },
        ],
        { h: 200, s: 20, l: 10, a: 0.3 },
        40,
        "center",
    );
    if (canvasRenderer) {
        canvasRenderer.startAnimation();
    }
})

onBeforeUnmount(() => {
    if (canvasRenderer) {
        canvasRenderer.stopAnimation();
        canvasRenderer = undefined;
    }
})
</script>

<style scoped>
#canvasBox {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: auto;
}

.catchString {
    letter-spacing: 0.1em;
}

.fontSerif {
    font-family: 'Sorts Mill Goudy', serif;
}

.heroString {
    position: relative;
    color: white;
    text-align: center;
    top: calc(50% - 62px);
}

@media (max-width: 849px) {
    .heroString {
        position: relative;
        color: white;
        text-align: center;
        top: calc(50% - 134px);
    }
}
</style>
