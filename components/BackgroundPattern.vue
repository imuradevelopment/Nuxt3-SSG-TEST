<template>
    <!-- 背景パターンを描画するキャンバス -->
    <canvas id="bg-canvas3"></canvas>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    // キャンバス要素を取得
    const canvas = document.getElementById("bg-canvas3");
    const ctx = canvas.getContext("2d");

    // キャンバスの論理サイズをCSSの表示サイズに合わせる
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    // 線の色と幅を設定
    const lineColor = "rgb(0 10 135)";
    const lineWidth = 1;

    // ランダムな線の数を設定
    const numLines = 60;

    // ランダムな線を生成して描画
    for (let i = 0; i < numLines; i++) {
        const isVertical = Math.random() < 0.5; // 垂直方向か水平方向かをランダムに決定
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        let x2, y2;

        if (isVertical) {
            // 垂直方向の場合の終点座標を計算
            x2 = x1;
            y2 = y1 + Math.random() * (canvas.height - y1);
        } else {
            // 水平方向の場合の終点座標を計算
            x2 = x1 + Math.random() * (canvas.width - x1);
            y2 = y1;
        }

        // 線を描画
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
    }
})
</script>

<style scoped>
#bg-canvas3 {
    image-rendering: -moz-crisp-edges;
    /* 画像レンダリングをクリスプエッジに設定（Mozilla用） */
    image-rendering: pixelated;
    /* 画像レンダリングをピクセル化 */
    max-width: calc(1280px - 160px);
    /* 最大幅を設定 */
    width: calc(100vw - 160px - 2rem);
    /* ビューポート幅に基づく幅を設定 */
    height: 860px;
    /* 固定高さを設定 */
    position: absolute;
    /* 絶対位置を設定 */
    z-index: -1;
    /* 背景に配置 */
    background-color: white;
    /* 背景色を白に設定 */
}

@media screen and (max-width: 768px) {
    #bg-canvas3 {
        image-rendering: -moz-crisp-edges;
        image-rendering: pixelated;
        width: 100%;
        /* 幅を100%に設定（小画面用） */
        height: 710px;
        /* 高さを710pxに設定（小画面用） */
        position: absolute;
        z-index: -1;
        background-color: white;
    }
}
</style>
