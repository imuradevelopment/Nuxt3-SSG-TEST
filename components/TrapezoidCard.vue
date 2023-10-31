<template>
    <div class="flex h-full z-10 w-full">
        <!-- レイヤー1: 画像部分 -->
        <div class="z-10 relative" style="width: 50%; clip-path: url(#imageClip); margin-bottom: 1rem;">
            <!-- レイヤー1: 画像 -->
            <NuxtImg :src="props.src" alt="Image" class="w-full h-full object-cover" id="imageElement"></NuxtImg>
            <!-- レイヤー1: 画像クリップ -->
            <!-- 以下svgは親要素に対して全画面サイズに配置し、覆い隠すためのスタイリング -->
            <svg width="0" height="0" id="imageClipSvg" class="absolute inset-0">
                <defs>
                    <clipPath id="imageClip">
                        <!-- jsで新しい座標を設定 -->
                        <path d=""></path>
                    </clipPath>
                </defs>
            </svg>
        </div>
        <!-- レイヤー2: タイトルとコンテンツ部分 -->
        <div class=" flex flex-col z-20 relative p-4 pt-0"
            style="box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.2); margin-left: -40%; padding-left: 37%; margin-top: 1rem; padding-bottom: 1rem; width: 90%">
            <div class="text-xs text-custom-blue" style="margin-top: 1rem; margin-left: -0.25rem;">－ <slot name="tag"></slot> －</div>
            <!-- レイヤー2: タイトル -->
            <div class="h-14 mt-2 flex items-center">
                <h2 class="text-xl font-bold"><slot name="title">カードタイトル（全角約１６文字まで）</slot></h2>
            </div>

            <!-- レイヤー3: コンテンツ -->
            <div class="grow line-clamp-6 flex items-baseline" style="display: flex; flex-grow: 1;">
                <div style="overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 6;">
                    <div class="text-xs lg:text-sm text-ellipsis mb-4" style="text-overflow: ellipsis;">
                        <slot name="content">（全角約１２６字まで）０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１２３４５６７８９０１</slot>
                    </div>
                </div>
            </div>

            <!-- レイヤー4: ボタンセクション -->
            <div class="flex flex-col self-end space-y-2 text-xs md:text-sm w-full">
                <slot name="button">
                    <div class="flex space-x-4 justify-end">
                        <!-- レイヤー4: ボタン3 -->
                        <NuxtLink to="/">
                            <button class="bg-custom-blue text-white font-semibold py-2 px-4 rounded">全角約１１字まで</button>
                        </NuxtLink>
                    </div>
                </slot>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
    src : {
        type: String,
        required: true,
    },
})
onMounted(() => {
    const observer = new ResizeObserver(function (entries) {
        for (let entry of entries) {
            if (entry.target === imageElement) {
                const imageWidth = entry.contentRect.width;
                const imageHeight = entry.contentRect.height;
                const imageAspect = imageWidth / imageHeight;
                const hAspect = 0.5;
                const hypotenuse = imageWidth + 5 * imageAspect;
                const v = String(imageHeight);
                const h = String(imageWidth * hAspect);
                const l = String(hypotenuse);
                // 新しいクリッピングパス座標を設定
                const newPath = `M0 0 V${v} H${h} L${l} 0 H0 Z`;
                document.querySelector("#imageClip path")!.setAttribute("d", newPath);
                document.getElementById("imageClipSvg")!.setAttribute("width", String(imageWidth));
                document.getElementById("imageClipSvg")!.setAttribute("height", String(imageHeight));
                // viewBoxの値を設定
                document
                    .getElementById("imageClipSvg")!
                    .setAttribute("viewBox", `0 0 ${imageWidth} ${imageHeight}`);
            }
        }
    });
    const imageElement = document.getElementById("imageElement") as  HTMLImageElement;
    observer.observe(imageElement);
});
</script>


<style scoped></style>