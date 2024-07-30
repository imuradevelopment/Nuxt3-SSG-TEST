<template>
    <div id="canvasBox" class="md:hidden" style="min-height:450px; width: 100%;">
        <canvas id="lines" style="position: absolute;"></canvas>
        <div style="height:450px">
            <div class="heroString">
                <h2 class="catchString fontSerif mb-1 text-6xl">
                    Solution<br /><span>&nbsp;</span>&<span>&nbsp;</span><br />Evolution
                </h2>
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
    // 画面に描画するためのキャンバスとして使用します。
    private canvas: HTMLCanvasElement;
    // 描画操作を行うためのコンテキストです。
    private context: CanvasRenderingContext2D;
    // キャンバス上に描画される各線のスタイルとパス情報を格納します。
    private lineStyles: LineStyle[];
    // 背景色設定
    private backgroundColor: Color;
    // アニメーションフレームを制御するために使用します。
    // アニメーションが停止中は未定義です。
    private animationId: number | undefined;

    private linePatterns: LinePattern[];
    private lineCount: number;
    private startPosition: string;
    private parentElement: HTMLElement;
    private currentCanvasWidth: number;

    constructor(
        // キャンバス要素のID。
        canvasId: string,
        // キャンバス要素の親要素のID。
        parentId: string,
        // ラインのスタイルパターンの配列。
        linePatterns: LinePattern[],
        // 背景色の設定。
        backgroundColor: Color,
        // 描画するラインの数。
        lineCount: number,
        // ラインの出発点の位置を示す文字列。
        startPosition: string
    ) {
        // キャンバス要素を取得
        this.canvas = this.getCanvasElement(canvasId);
        // 2D コンテキストを取得
        this.context = this.canvas.getContext("2d", { alpha: false }) as CanvasRenderingContext2D;
        // 背景色を設定
        this.backgroundColor = backgroundColor;
        this.parentElement = document.getElementById(parentId) as HTMLElement;
        // キャンバスサイズを設定
        const canvasSize = this.setupCanvasSize(this.parentElement);
        this.currentCanvasWidth = canvasSize.width;
        this.canvas.width = canvasSize.width;
        this.canvas.height = canvasSize.height;

        this.linePatterns = linePatterns;
        this.lineCount = lineCount;
        this.startPosition = startPosition;
        // ラインスタイルを生成
        this.lineStyles = this.generateDrawingStyles(this.linePatterns, this.lineCount, this.startPosition);
        // リサイズハンドラを設定
        this.setupResizeHandler(this.parentElement);
        // アニメーションを開始
        this.startAnimation();
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
    private setupCanvasSize(parentElement: HTMLElement): {width:number, height:number} {
        return {
            width: Math.floor(parentElement.clientWidth),
            height: Math.floor(parentElement.clientHeight)
        }
    }

    // ラインスタイルを生成するメソッド
    private generateDrawingStyles(
        // ラインのスタイルパターンの配列。
        linePatterns: LinePattern[],
        // 生成するラインの数。
        lineCount: number,
        // ラインの出発点の位置を示す文字列。
        startPosition: string
    ): LineStyle[] {
        const lines: LineStyle[] = [];

        // 必須のラインスタイルパターンのみを抽出、lines 配列に追加
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
        this.lineSize = linePattern.lineSize * (window.devicePixelRatio / 3);;
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
        // 線の末端のスタイルを指定
        context.lineCap = "round";
        // 2つの線が交差するときの角のスタイルを指定
        context.lineJoin = "round";
        context.stroke(new Path2D(this.path));
    }

    // 色を HSLA 文字列に変換するメソッド
    private getColorString(): string {
        return `hsla(${this.color.h}deg, ${this.color.s}%, ${this.color.l}%, ${this.color.a})`;
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

    // 描画スタイルを設定するメソッド
    private renderStyle(
        style: string,
        context: CanvasRenderingContext2D
    ): void {
        if (style === "glitches") {
            // 破線パターンのオフセットを設定
            context.lineDashOffset = this.offset + this.length;
            context.setLineDash([
                // 実線部分の長さを指定
                this.lineSize ** 1.5,
                // 実線部分の長さを指定
                (this.length / this.lineSize) * this.lineSize ** 2,
            ]);
            // 破線がどの位置から始まるかを制御
            this.offset += 20;
            // 描かれる線の幅
            context.lineWidth = 2 * (window.devicePixelRatio / 3);
        } else if (style === "pattern") {
            // 破線パターンのオフセットを設定
            context.lineDashOffset = this.length - this.offset;
            context.setLineDash([
                // 実線部分の長さを指定
                this.length,
                // 実線部分の長さを指定
                this.length,
            ]);
            // 破線がどの位置から始まるかを制御
            this.offset += 10;
            // 描かれる線の幅
            context.lineWidth = 1 * (window.devicePixelRatio / 3);
            context.imageSmoothingEnabled = false;
        }
    }

    // ラインのパスを生成するメソッド
    generatePath(): void {
        const segments = this.getPatterns();
        // SVG パスの始点を指定
        let path = `M${this.origin.x},${this.origin.y}`;
        // mag は線セグメントの長さを表す変数
        let mag = 0;
        for (let i = 0; i < this.length; i += 1) {
            // segments 配列からランダムに選択された要素を fragment 変数に代入しています。
            // Math.floor(Math.random() * segments.length) は、segments 配列内のランダムなインデックスを生成します。
            const fragment = segments[Math.floor(Math.random() * segments.length)];
            // fragment オブジェクトが line プロパティを持つ場合に、SVG パスに新しい線セグメントを追加しています。
            if (fragment.line) { path += ` ${fragment.line}`; }
            // mag 変数に fragment.mag を加算しています。
            // mag は線セグメントの長さを表す変数で、各セグメントの長さが加算されています。
            mag += fragment.mag;
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
    // ラインの一部がランダムに変更され、
    // アニメーション中にパスの一部が変わることで、ラインの外観が変化する効果が生じます。
    mutatePath(): void {
        // パスの一部をランダムに変更
        // this.path は、ラインのパスを表す文字列です。
        // この文字列は、SVG パスデータの一部で、ラインがどのように描かれるかを定義します。
        // ラインのパス文字列を空白文字で分割し、各パスセグメント（例: "h20"、"v10" など）に分割します。
        // これにより、パス文字列がセグメントごとに配列に分かれます。
        const lineFragments = this.path.split(" ").slice(1);
        const generator = this.getPatterns();
        // 選択されたランダムなパスセグメントを generator 配列からランダムに選択し、
        // lineFragments 配列内の対応するセグメントを置き換えます。
        // 配列内からランダムに選択されたインデックスを生成します。
        // これにより、ランダムに選択されたパスセグメントが決まります。
        lineFragments[Math.floor(Math.random() * lineFragments.length)] =
            // 新しいパスセグメントを生成するためのパターンを表す配列です。
            // 異なるパスセグメントのスタイルと長さが含まれています。
            generator[Math.floor(Math.random() * generator.length)].line;
        // 最後に、lineFragments 配列を再構築し、新しいパス文字列を生成します。
        this.path = `${this.path.split(" ")[0]} ${lineFragments.join(" ")}`;
    }
}

interface LinePattern {
    required: boolean;
    lineSize: number;
    lineStyle: string;
    color: Color;
}

interface Color {
    h: number;
    s: number;
    l: number;
    a: number;
}

// 以下は HSLA の成分についての説明です:
// 1. Hue (色相): Hue は色の種類やトーンを示します。
//    赤が 0 度、緑が 120 度、青が 240 度です。
// 2. Saturation (彩度): Saturation は色の鮮やかさや強さを示します。
//    0% の場合はグレースケールに近い灰色になり、100% の場合は最も鮮やかな色になります。
// 3. Lightness (明度): Lightness は色の明るさを示します。
//    0% の場合は黒に、100% の場合は白に近い明るさになります。
// 4. Alpha (透明度): Alpha は色の透明度を示します。
//    0 は完全に透明で、1 は完全に不透明です。
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
    if(canvasRenderer){
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

    /* 849px以下の幅のデバイスに適用するスタイル */
    .heroString {
        position: relative;
        color: white;
        text-align: center;
        top: calc(50% - 134px);
    }
}
</style>