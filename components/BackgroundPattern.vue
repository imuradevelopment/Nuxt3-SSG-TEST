<template>
    <canvas id="bg-canvas" style="width:100vw;max-width:1280px;height:100vh;"></canvas>
</template>
<script setup>
onMounted(() => {
    const canvas = document.getElementById("bg-canvas");
    const ctx = canvas.getContext("2d");

    // キャンバスの論理サイズをCSSの表示サイズに合わせる
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    const lineColor = "rgb(156 163 175)";
    const lineWidth = 1;

    // ランダムな線の数
    const numLines = 300;

    // ランダムな線の生成
    for (let i = 0; i < numLines; i++) {
        const isVertical = Math.random() < 0.5; // 垂直方向か水平方向かをランダムに決定
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        let x2, y2;

        if (isVertical) {
            // 垂直方向の場合
            x2 = x1;
            y2 = y1 + Math.random() * (canvas.height - y1);
        } else {
            // 水平方向の場合
            x2 = x1 + Math.random() * (canvas.width - x1);
            y2 = y1;
        }

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
#bg-canvas {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
}
</style>