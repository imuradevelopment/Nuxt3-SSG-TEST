<template>
    <div class="flex h-80 z-10 w-full md:w-1/2">
        <!-- レイヤー1: 画像部分 -->
        <div class="z-10 relative" style="width: 50%; clip-path: url(#imageClip12); margin-bottom: 1rem;">
            <!-- レイヤー1: 画像 -->
            <img src="/images/top/001.webp" alt="Image" class="w-full h-full object-cover" id="imageElement12">
            <!-- レイヤー1: 画像クリップ -->
            <!-- 以下svgは親要素に対して全画面サイズに配置し、覆い隠すためのスタイリング -->
            <svg width="0" height="0" id="imageClipSvg12" class="absolute inset-0">
                <defs>
                    <clipPath id="imageClip12">
                        <!-- jsで新しい座標を設定 -->
                        <path d=""></path>
                    </clipPath>
                </defs>
            </svg>
        </div>
        <!-- レイヤー2: タイトルとコンテンツ部分 -->
        <div class=" flex flex-col z-20 relative p-2 pt-0"
            style="box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.2); margin-left: -40%; padding-left: 37%; margin-top: 1rem; padding-bottom: 1rem; width: 90%">
            <div class="text-xs text-blue-500" style="margin-top: 1rem; margin-left: -0.25rem;">－ Service1 －</div>
            <!-- レイヤー2: タイトル -->
            <div class="h-14 mt-2 flex items-center">
                <h2 class="text-xl font-bold">カードタイトル（全角約１６文字まで）</h2>
            </div>

            <!-- レイヤー3: コンテンツ -->
            <div class="grow line-clamp-6 flex items-center" style="display: flex; flex-grow: 1;">
                <div style="overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 6;">
                    <p class="text-xs md:text-sm text-ellipsis" style="text-overflow: ellipsis;">
                        （全角約１２６字まで）０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１
                    </p>
                </div>
            </div>

            <!-- レイヤー4: ボタンセクション -->
            <div class="flex flex-col self-end space-y-2 text-xs md:text-sm w-full">
                <div class="flex space-x-4 justify-end">
                    <!-- レイヤー4: ボタン3 -->
                    <button class="bg-blue-500 text-white font-semibold py-2 px-4 rounded">全角約１１字まで</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
// import { onMounted } from "vue";
// 画像の幅と高さを取得
let imageElement: HTMLImageElement | null = null;
let imageWidth = 0;
let imageHeight = 0;
let imageAspect = 0;
let hAspect = 0.5;
let hypotenuse = 0;
let v = "";
let h = "";
let l = "";
onMounted(() => {
    imageElement = document.getElementById("imageElement12") as  HTMLImageElement | null; 
    imageWidth = imageElement!.clientWidth;
    imageHeight = imageElement!.clientHeight;
    imageAspect = imageWidth / imageHeight;
    hAspect = 0.5;
    hypotenuse = imageWidth + 5 * imageAspect;
    v = String(imageHeight);
    h = String(imageWidth * hAspect);
    l = String(hypotenuse);
    // 新しいクリッピングパス座標を設定
    const newPath = `M0 0 V${v} H${h} L${l} 0 H0 Z`;
    document.querySelector("#imageClip12 path")!.setAttribute("d", newPath);
    document.getElementById("imageClipSvg12")!.setAttribute("width", String(imageWidth));
    document.getElementById("imageClipSvg12")!.setAttribute("height", String(imageHeight));
    // viewBoxの値を設定
    document
        .getElementById("imageClipSvg12")!
        .setAttribute("viewBox", `0 0 ${imageWidth} ${imageHeight}`);
});
</script>


<style scoped></style>