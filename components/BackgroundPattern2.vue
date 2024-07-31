<template>
    <!-- 背景パターンを描画するキャンバス -->
    <canvas id="bg-canvas" style="width:100vw;max-width:1280px;height:100vh;"></canvas>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const canvas = ref(null); // キャンバス要素を格納するref
const ctx = ref(null); // 2D描画コンテキストを格納するref

// 線の色と幅、線の数を定義するref
const lineColor = ref('rgb(156 163 175)');
const lineWidth = ref(0.5);
const numLines = ref(15);

// ランダムな線を描画する関数
const drawRandomLine = () => {
    const x1 = Math.random() * canvas.value.width;
    const y1 = Math.random() * canvas.value.height;
    const x2 = Math.random() * canvas.value.width;
    const y2 = Math.random() * canvas.value.height;

    ctx.value.beginPath();
    ctx.value.moveTo(x1, y1);
    ctx.value.lineTo(x2, y2);
    ctx.value.strokeStyle = lineColor.value;
    ctx.value.lineWidth = lineWidth.value;
    ctx.value.stroke();
};

onMounted(() => {
    // クライアントサイドでのみ実行される処理
    if (typeof window !== 'undefined') {
        // キャンバス要素と2D描画コンテキストを取得
        canvas.value = document.getElementById('bg-canvas');
        ctx.value = canvas.value.getContext('2d');

        // デバイスのピクセル比に基づいて線の幅を調整
        lineWidth.value = lineWidth.value * (window.devicePixelRatio / 3);

        // キャンバスの幅と高さをデバイスのピクセル比に基づいて設定
        canvas.value.width = canvas.value.clientWidth * window.devicePixelRatio;
        canvas.value.height = canvas.value.clientHeight * window.devicePixelRatio;

        // ランダムな線を描画
        for (let i = 0; i < numLines.value; i++) {
            drawRandomLine();
        }
    }
});
</script>

<style scoped>
#bg-canvas {
    image-rendering: -webkit-optimize-contrast;
    /* 画像レンダリングを最適化 */
    image-rendering: auto;
    /* 画像レンダリングを自動に設定 */
}
</style>
