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

    // 線の色と太さを設定する変数
    const lineColor = "black";
    const lineWidth = 0.25;

    // ランダムな線の数
    const numLines = 10;

    // ランダムな線の生成
    for (let i = 0; i < numLines; i++) {
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = Math.random() * canvas.width;
        const y2 = Math.random() * canvas.height;

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
    image-rendering: -webkit-optimize-contrast;
    image-rendering: auto;
}
</style>