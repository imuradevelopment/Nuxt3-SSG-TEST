<template>
    <canvas id="bg-canvas2" style="width:100%;height:100%;position: absolute;">
    </canvas>
</template>
<script setup>
onMounted(() => {
    const canvas = document.getElementById("bg-canvas2");
    const ctx = canvas.getContext("2d");

    // キャンバスの論理サイズをCSSの表示サイズに合わせる
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    // 線の色と太さを設定する変数
    const lineColor = "rgb(156 163 175)";
    const lineWidth = 1;

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