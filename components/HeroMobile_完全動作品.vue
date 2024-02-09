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
<script setup>
import { initializeCanvas } from "~~/assets/ts/lines"
// 以下は HSLA の成分についての説明です:
// 1. Hue (色相): Hue は色の種類やトーンを示します。
//    赤が 0 度、緑が 120 度、青が 240 度です。
// 2. Saturation (彩度): Saturation は色の鮮やかさや強さを示します。
//    0% の場合はグレースケールに近い灰色になり、100% の場合は最も鮮やかな色になります。
// 3. Lightness (明度): Lightness は色の明るさを示します。
//    0% の場合は黒に、100% の場合は白に近い明るさになります。
// 4. Alpha (透明度): Alpha は色の透明度を示します。
//    0 は完全に透明で、1 は完全に不透明です。
onMounted(() => {
    if(document.getElementById("canvasBox") != undefined) {
        initializeCanvas(
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
                // 
                // { required: false, lineSize: 1.25, lineStyle: "pattern", color: { h: 210, s: 100, l: 70, a: 0.5 } },
                // { required: false, lineSize: 2.5, lineStyle: "pattern", color: { h: 190, s: 90, l: 50, a: 0.3 } },
                // { required: false, lineSize: 5, lineStyle: "pattern", color: { h: 210, s: 70, l: 60, a: 0.2 } },
                // { required: false, lineSize: 10, lineStyle: "pattern", color: { h: 310, s: 80, l: 55, a: 0.15 } },
                // { required: false, lineSize: 20, lineStyle: "pattern", color: { h: 200, s: 25, l: 35, a: 0.12 } },
                // { required: false, lineSize: 20, lineStyle: "pattern", color: { h: 210, s: 20, l: 40, a: 0.12 } },
                // { required: false, lineSize: 40, lineStyle: "pattern", color: { h: 190, s: 40, l: 50, a: 0.12 } },
                // { required: false, lineSize: 80, lineStyle: "pattern", color: { h: 220, s: 50, l: 60, a: 0.12 } },
                // { required: false, lineSize: 40, lineStyle: "glitches", color: { h: 300, s: 100, l: 50, a: 0.3 } },
                // { required: false, lineSize: 20, lineStyle: "glitches", color: { h: 210, s: 100, l: 50, a: 0.3 } },
                // { required: false, lineSize: 60, lineStyle: "glitches", color: { h: 30, s: 100, l: 50, a: 0.3 } },
                //
                // { required: false, lineSize: 40, lineStyle: "glitches", color: { h: 216, s: 22, l: 52, a: 0.3 } },
                // { required: false, lineSize: 20, lineStyle: "glitches", color: { h: 210, s: 100, l: 50, a: 0.3 } },
                // { required: false, lineSize: 60, lineStyle: "glitches", color: { h: 216, s: 22, l: 52, a: 0.3 } },
                // { required: true, lineSize: 10, lineStyle: "test", color: { h: 209, s: 100, l: 40, a: 0.5 } },
                // { required: true, lineSize: 1.25, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
                // { required: true, lineSize: 1.25, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
                // { required: true, lineSize: 1.25, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
                // { required: true, lineSize: 1.25, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
                // { required: true, lineSize: 1.25, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
                // { required: true, lineSize: 1.25, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
                // { required: true, lineSize: 1.25, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
                // { required: true, lineSize: 1.25, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
                // { required: true, lineSize: 2.5, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
                // { required: true, lineSize: 2.5, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
                // { required: true, lineSize: 2.5, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
                // { required: true, lineSize: 2.5, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
                // { required: true, lineSize: 3.5, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
                // { required: true, lineSize: 4.5, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
                // { required: true, lineSize: 5.5, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
                // { required: false, lineSize: 10.5, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
                // { required: false, lineSize: 20.5, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
                // { required: false, lineSize: 20.5, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
                // { required: false, lineSize: 40.5, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
                // { required: false, lineSize: 80.5, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
                // { required: false, lineSize: 40, lineStyle: "glitches", color: { h: 216, s: 22, l: 52, a: 0.3 } },
                // { required: false, lineSize: 20, lineStyle: "glitches", color: { h: 216, s: 22, l: 52, a: 0.3 } },
                // { required: false, lineSize: 60, lineStyle: "glitches", color: { h: 216, s: 22, l: 52, a: 0.3 } },
            ],
            { h: 200, s: 20, l: 10, a: 0.3 },
            40,
            "center",
            // {minLength: 500, maxLength: 1000} 
        );
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