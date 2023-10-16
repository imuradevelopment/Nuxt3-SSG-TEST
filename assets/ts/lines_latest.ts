/**
 * CanvasRenderer クラス: キャンバスを管理し、アニメーションを描画します
 */
class CanvasRenderer {
    private canvas: HTMLCanvasElement; // キャンバス要素
    private context: CanvasRenderingContext2D; // キャンバスの2D描画コンテキスト
    private lineStyles: LineStyle[]; // 描画スタイルのライン
    private backgroundColor: Color; // キャンバスの背景色
    private animationId: number | undefined; // アニメーションID
    private lineLength: LineLength;

    /**
     * コンストラクタ
     * @param {string} canvasId - キャンバス要素のID
     * @param {string} parentId - キャンバス要素の親要素のID
     * @param {LineLength[]} linePatterns - ラインのスタイルパターンの配列
     * @param {Color} backgroundColor - 背景色の設定
     * @param {number} lineCount - 描画するラインの数
     * @param {string} startPosition - ラインの出発点の位置を示す文字列
     */
    constructor(
        canvasId: string,  // キャンバス要素のID
        parentId: string,  // キャンバス要素の親要素のID
        linePatterns: LinePattern[],  // ラインのスタイルパターンの配列
        backgroundColor: Color,  // 背景色の設定
        lineCount: number,  // 描画するラインの数
        startPosition: string, // ラインの出発点の位置を示す文字列
        lineLength: LineLength
    ) {
        // キャンバス要素を取得
        this.canvas = this.getCanvasElement(canvasId);
        // 2D コンテキストを取得
        this.context = this.canvas.getContext("2d", { alpha: false, }) as CanvasRenderingContext2D;
        // 背景色を設定
        this.backgroundColor = backgroundColor;
        // キャンバスサイズを設定
        this.setupCanvasSize(parentId);
        // ラインスタイルを生成
        this.lineStyles = this.generateDrawingStyles(linePatterns, lineCount, startPosition, lineLength);
        // リサイズハンドラを設定
        this.setupResizeHandler(parentId);
        // アニメーションを開始
        this.startAnimation();
    }
    /**
     * キャンバス要素を取得するメソッド
     */
    private getCanvasElement(canvasId: string): HTMLCanvasElement {
        const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        if (!canvas) {
            console.error("Canvas element not found");
        }
        return canvas;
    }
    /**
     * キャンバスサイズを設定するメソッド
     */
    private setupCanvasSize(parentId: string): void {
        const parentElement = document.getElementById(parentId);
        if (parentElement) {
            this.canvas.width = parentElement.clientWidth;
            this.canvas.height = parentElement.clientHeight;
        }
    }

    /**
     * ラインのスタイルパターンから必須と必須でないラインスタイルを生成します。
     *
     * @param {LineLength[]} linePatterns - ラインのスタイルパターンの配列
     * @param {number} lineCount - 描画するラインの総数
     * @param {string} startPosition - ラインの出発点の位置を示す文字列
     * @returns {LineStyle[]} - 生成されたラインスタイルの配列
     *
     * @description
     * このメソッドは、指定されたラインのスタイルパターンから必須のラインスタイルと必須でないラインスタイルを生成します。
     * 必須のラインスタイルは `linePatterns` 配列内の `required` プロパティが `true` のパターンです。
     * 必須でないラインスタイルは `linePatterns` 配列からランダムに選択され、必須のラインスタイルの数を除いた残りの数が `lineCount` によって制御されます。
     * 生成されたラインスタイルは、アニメーションの各ラインに適用され、キャンバス上に描画されます。
     *
     * @example
     * // ラインスタイルパターンを定義
     * const linePatterns = [
     *   { required: true, lineSize: 1.25, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
     *   // 他の必須または必須でないパターンを追加
     * ];
     *
     * // 生成されたラインスタイルを取得
     * const lineStyles = generateDrawingStyles(linePatterns, 10, "center");
     */
    private generateDrawingStyles(linePatterns: LinePattern[], lineCount: number, startPosition: string, lineLength: LineLength): LineStyle[] {
        const lines: LineStyle[] = [];

        // 必須のラインスタイルパターンのみを抽出、lines 配列に追加
        const requiredLinePatterns = linePatterns.filter((linePattern) => linePattern.required);
        requiredLinePatterns.forEach((requiredLinePattern) => {
            lines.push(
                new LineStyle(
                    requiredLinePattern, 
                    startPosition, 
                    this.canvas,
                    lineLength
                )
            );
        });

        // 必須でないラインスタイルパターンをランダムに抽出して、lines 配列に追加
        for (let i = 0; i < lineCount - requiredLinePatterns.length; i++) {
            const anRequiredLinePatterns = linePatterns[Math.floor(Math.random() * linePatterns.length)];
            lines.push(
                new LineStyle(
                    anRequiredLinePatterns, 
                    startPosition, 
                    this.canvas,
                    lineLength
                )
            );
        }

        return lines;
    }

    /**
     * キャンバスリサイズハンドラを設定するメソッド
     */
    private setupResizeHandler(parentId: string): void {
        window.addEventListener("resize", () => this.setupCanvasSize(parentId));
    }

    /**
     * アニメーションを開始するメソッド
     */
    private startAnimation(): void {
        this.animationId = requestAnimationFrame(() => this.updateCanvas());
    }

    /**
     * キャンバスをアップデートするメソッド
     */
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

    /**
     * キャンバスをクリアするメソッド
     */
    private clearCanvas(): void {
        // 背景色をキャンバス全体に描画
        this.context.fillStyle = this.getColorString(this.backgroundColor);
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /**
     * 色を HSLA 文字列に変換するメソッド
     * @param {Color} color - 変換する色
     * @returns {string} - HSLA 形式の色文字列
     */
    private getColorString(color: Color): string {
        return `hsla(${color.h}deg, ${color.s}%, ${color.l}%, ${color.a})`;
    }
}

/**
 * ラインのスタイル情報を表すクラスです。
 *
 * @class
 */
class LineStyle {
    lineSize: number;
    origin: { x: number; y: number };
    lineLength: number;
    color: { h: number; s: number; l: number; a: number };
    lineStyle: string;
    offset: number;
    path: string;
    offsetSpeed: number;
    canvas: HTMLCanvasElement;

    /**
     * コンストラクタ
     * @param {LineLength} linePattern - ラインのスタイル情報
     * @param {string} startPosition - ラインの出発点の位置を示す文字列
     * @param {HTMLCanvasElement} canvas - キャンバス要素
     */
    constructor(linePattern: LinePattern, startPosition: string, canvas: HTMLCanvasElement, lineLength: LineLength) {
        this.canvas = canvas;
        this.origin = this.calculateOrigin(startPosition, canvas);
        this.lineSize = linePattern.lineSize;
        this.color = linePattern.color;
        // ラインの形状を定義するために使用されるパスを示すプロパティ
        this.path = "";
        // ラインの全長を表すプロパティ
        this.lineLength = lineLength.minLength + Math.random() * lineLength.maxLength;
        // ラインの描画スタイルを指定するプロパティ
        this.lineStyle = linePattern.lineStyle || "pattern";
        // ラインの描画スタイルにおけるオフセットを示すプロパティ
        // オフセットは通常、アニメーション効果の一部として使用され、ラインが動的に変化するように見せる
        this.offset = 0;
        // オフセットの速度を示すプロパティ
        // オフセット速度は、アニメーション中にオフセットが変化する速さを指定
        this.offsetSpeed = this.lineLength / this.lineSize;
    }

    /**
     * ラインを描画するメソッド
     * @param {CanvasRenderingContext2D} context - 描画コンテキスト
     */
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

    /**
     * 色を HSLA 文字列に変換するメソッド
     * @returns {string} - HSLA 形式の色文字列
     */
    private getColorString(): string {
        return `hsla(${this.color.h}deg, ${this.color.s}%, ${this.color.l}%, ${this.color.a})`;
    }

    /**
     * キャンバス上のラインの出発点を計算するメソッド。
     *
     * @param {string} position - ラインの出発点の位置を示す文字列。
     * @param {HTMLCanvasElement} canvas - キャンバス要素。
     * @returns {{ x: number; y: number }} - 出発点の座標オブジェクト。
     */
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

    /**
     * 描画スタイルを設定するメソッド。
     *
     * @param {string} style - ラインの描画スタイル。
     * @param {CanvasRenderingContext2D} context - 描画コンテキスト。
     */
    private renderStyle(style: string, context: CanvasRenderingContext2D): void {
        if (style === "glitches") {
            // 破線パターンのオフセットを設定
            context.lineDashOffset = this.offset + this.lineLength;
            context.setLineDash([
                // 実線部分の長さを指定
                this.lineSize ** 1.5, 
                // 実線部分の長さを指定
                (this.lineLength / this.lineSize) * this.lineSize ** 2, 
            ]);
            // 破線がどの位置から始まるかを制御
            this.offset += 20; 
            // 描かれる線の幅
            context.lineWidth = 2; 
        } else if (style === "pattern") {
            // 破線パターンのオフセットを設定
            context.lineDashOffset = this.lineLength - this.offset; 
            context.setLineDash([
                // 実線部分の長さを指定
                this.lineLength,  
                // 破線部分の長さを指定
                this.lineLength,  
            ]);
            // 破線がどの位置から始まるかを制御
            this.offset += 10;
            // 描かれる線の幅
            context.lineWidth = 0.2; 
        } else if (style === "test") {
            // 破線パターンのオフセットを設定
            context.lineDashOffset = this.lineLength - this.offset; 
            context.setLineDash([
                // 実線部分の長さを指定
                10,  
                // 破線部分の長さを指定
                100,  
            ]);
            // 破線がどの位置から始まるかを制御
            this.offset += 10;
            // 描かれる線の幅
            context.lineWidth = 5; 
        }
    }

    /**
     * ラインのパスを生成するメソッド
     */
    generatePath(): void {
        // ラインを構成するパスセグメントの配列を取得
        const segments = this.getPatterns();
        // SVG パスの始点を指定
        let path = `M${this.origin.x},${this.origin.y}`;
        // ラインの全長を保持する変数
        let mag = 0;

        for (let i = 0; i < this.lineLength; i += 1) {
            // segments 配列からランダムに選択されたパスセグメントを取得
            const fragment = segments[Math.floor(Math.random() * segments.length)];
            
            // パスセグメントが線を表す場合
            if (fragment.line) { 
                // パスに新しい線セグメントを追加
                path += ` ${fragment.line}`;
            }
            
            // パスセグメントの長さを全長に加算
            mag += fragment.mag;
        }

        // 生成されたパスをラインのパスとして設定
        this.path = path;
    }

    /**
     * ラインのパスセグメントのパターンを取得するメソッド
     * @returns {LineSegment[]} LineSegment オブジェクトの配列
     */
    getPatterns(): LineSegment[] {
        return [
            // 直線セグメントのパターン
            {
                line: `h${this.lineSize}`, // 水平線
                mag: this.lineSize, // セグメントの長さ
            },
            {
                line: `h-${this.lineSize}`, // 逆向きの水平線
                mag: this.lineSize, // セグメントの長さ
            },
            // {
            //     line: `v${this.lineSize}`, // 垂直線
            //     mag: this.lineSize, // セグメントの長さ
            // },
            // {
            //     line: `v-${this.lineSize}`, // 逆向きの垂直線
            //     mag: this.lineSize, // セグメントの長さ
            // },
            // {
            //     line: `l${this.lineSize},${this.lineSize}`, // 左下がりの対角線
            //     mag: Math.hypot(this.lineSize, this.lineSize), // セグメントの長さ
            // },
            // {
            //     line: `l${this.lineSize}-${this.lineSize}`, // 右下がりの対角線
            //     mag: Math.hypot(this.lineSize, this.lineSize), // セグメントの長さ
            // },
            // {
            //     line: `l-${this.lineSize},${this.lineSize}`, // 左上がりの対角線
            //     mag: Math.hypot(this.lineSize, this.lineSize), // セグメントの長さ
            // },
            // {
            //     line: `l-${this.lineSize}-${this.lineSize}`, // 右上がりの対角線
            //     mag: Math.hypot(this.lineSize, this.lineSize), // セグメントの長さ
            // },
        ];
    }

    /**
     * パスをランダムに変更するメソッド
     * ラインの一部がランダムに変更され、
     * アニメーション中にパスの一部が変わることで、ラインの外観が変化する効果が生じます。
     */
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

/**
 * ラインのパスセグメントの情報を表すインターフェース
 * @interface
 */
interface LineSegment {
    line: string; // パスセグメント
    mag: number;  // セグメントの長さ
}

/**
 * LinePattern 線の長さの最小、最大値の情報を表すインターフェース
 * @interface
 */
interface LineLength {
    minLength: number;
    maxLength: number;
}

/**
 * Color インターフェースは色情報を表すインターフェースです。
 * @interface
 */
interface Color {
    h: number; // 色相 (0-360)
    s: number; // 彩度 (0-100)
    l: number; // 明度 (0-100)
    a: number; // 透明度 (0-1)
}

/**
 * LinePattern インターフェースはラインのスタイルパターンを表すインターフェースです。
 * @interface
 */
interface LinePattern {
    required: boolean; // 必須フラグ
    lineSize: number; // ラインのサイズ
    lineStyle: string; // ラインのスタイル
    color: Color; // ラインの色
}

/**
 * キャンバスを初期化する関数
 * @param {string} canvasId - キャンバス要素のID
 * @param {string} parentId - キャンバス要素の親要素のID
 * @param {LineLength[]} linePatterns - ラインのスタイルパターンの配列
 * @param {Color} backgroundColor - 背景色の設定
 * @param {number} lineCount - 描画するラインの数
 * @param {string} startPosition - ラインの出発点の位置を示す文字列
 */
function initializeCanvas(
    canvasId: string,
    parentId: string,
    linePatterns: LinePattern[],
    backgroundColor: Color,
    lineCount: number,
    startPosition: string,
    lineLength: LineLength
): void {
    new CanvasRenderer(
        canvasId,
        parentId,
        linePatterns,
        backgroundColor,
        lineCount,
        startPosition,
        lineLength
    );
}

export { initializeCanvas };