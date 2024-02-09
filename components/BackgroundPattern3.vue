<template>
    <canvas id="bg-canvas" style="width:100vw;max-width:1280px;height:100vh;"></canvas>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue'

const canvas = ref(null);
const ctx = ref(null);

const lineColor = ref('rgb(156 163 175)');
const lineWidth = ref(0.5);
const numLines = ref(15);

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
        canvas.value = document.getElementById('bg-canvas');
        ctx.value = canvas.value.getContext('2d');

        // 修正点
        lineWidth.value = lineWidth * (window.devicePixelRatio / 3);

        canvas.value.width = canvas.value.clientWidth * window.devicePixelRatio;
        canvas.value.height = canvas.value.clientHeight * window.devicePixelRatio;

        for (let i = 0; i < numLines.value; i++) {
            drawRandomLine();
        }
    }
});
</script>

<style scoped>
#bg-canvas {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: auto;
}
</style>