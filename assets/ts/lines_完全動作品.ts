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
        this.context = this.canvas.getContext("2d", {alpha: false,}) as CanvasRenderingContext2D; 
        // 背景色を設定
        this.backgroundColor = backgroundColor;
        // キャンバスサイズを設定
        this.setupCanvasSize(parentId);

        this.linePatterns = linePatterns;
        this.lineCount = lineCount;
        this.startPosition = startPosition;
        // ラインスタイルを生成
        this.lineStyles = this.generateDrawingStyles(
            this.linePatterns,
            this.lineCount,
            this.startPosition
        );
        // リサイズハンドラを設定
        this.setupResizeHandler(parentId); 
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
    private setupCanvasSize(parentId: string): void {
        const parentElement = document.getElementById(parentId);
        if (parentElement) {
            this.canvas.width = Math.floor(parentElement.clientWidth);
            this.canvas.height = Math.floor(parentElement.clientHeight);
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
    private setupResizeHandler(parentId: string): void {
        window.addEventListener("resize", () => {
            // アニメーションを停止
            this.stopAnimation();
            // キャンバスサイズを更新
            this.setupCanvasSize(parentId);
            // ラインスタイルを生成
            this.lineStyles = this.generateDrawingStyles(
                this.linePatterns,
                this.lineCount,
                this.startPosition
            );
            // アニメーションを再開
            this.startAnimation();
        });
    }

    // アニメーションを開始するメソッド
    private startAnimation(): void {
        this.animationId = requestAnimationFrame(() => this.updateCanvas());
    }

    // アニメーションを停止するメソッド
    private stopAnimation(): void {
        if (this.animationId !== undefined) {
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
                // // 約5%の確率で条件が成立
                // if (Math.random() > 0.95) { 
                //     // パスの一部をランダムに変更
                //     line.mutatePath(); 
                // }
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
            context.lineWidth = 2; 
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
            context.lineWidth = 1; 
            context.imageSmoothingEnabled = false;
            // const translateX = 10; // 水平移動量 (調整が必要)
            // const translateY = 10;  // 垂直移動量 (不要なら0に設定)
            // // 移動を設定
            // context.translate(translateX, translateY);
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
            if (fragment.line) { path += ` ${fragment.line}`;} 
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

function initializeCanvas(
    canvasId: string,
    parentId: string,
    linePatterns: LinePattern[],
    backgroundColor: Color,
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