<template>
    <div class="grid-carousel">
        <main class="hero-wrapper">
            <!-- ヒーローイメージとして選択された画像を表示 -->
            <div class="hero">
                <ClientOnly>
                    <!-- BlurGlassCardコンポーネントにメインテキストをpropsとして渡す -->
                    <BlurGlassCard class="main-text-card text-white rounded-tl-sm rounded-br-md" :rounded="false"
                        :blur="0" :color="'rgba(0, 0, 0, 0.5)'" v-html="pics[currentHeroNumber].mainText" />
                    <div class="h-full pb-4 flex justify-center items-end">
                        <!-- サブテキストをpropsとして渡す -->
                        <BlurGlassCard class="mx-4 py-2 px-4 text-white" :rounded="true" :blur="0"
                            :color="'rgba(0, 0, 0, 0.5)'" v-html="pics[currentHeroNumber].subText" />
                    </div>
                </ClientOnly>
            </div>
        </main>
        <div class="scene">
            <div class="carousel">
                <!-- サムネイル画像をv-forで繰り返し表示 -->
                <div class="face" v-for="(pic, index) in pics" :key="index" :id="index.toString()"
                    @click="selectItem(index)" :style="{ backgroundImage: 'url(' + pic.src + ')' }"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import BlurGlassCard from './BlurGlassCard.vue'; // BlurGlassCardコンポーネントをインポート
import { useCurrentPhotoNumberStore } from '~/stores/currentPhotoNumber'; // ストアをインポート

// propsでpicsをオブジェクトの配列として定義
const props = defineProps({
    pics: {
        type: Array as () => {
            src: string;
            alt?: string;
            mainText: string;
            subText: string;
            tileColor?: string;
            shadowColor?: string;
            bgPosition?: string;
        }[],
        required: true
    }
});

const currentPhotoNumber = useCurrentPhotoNumberStore(); // ストアのインスタンスを取得
const currentHeroNumber = ref<number>(currentPhotoNumber.currentPhotoNumber); // 現在のヒーロー画像のインデックスを管理するref

let carousel: HTMLElement; // キャロセルのDOM要素
let hero: HTMLElement; // ヒーロー画像のDOM要素

onMounted(() => {
    carousel = document.querySelector('.carousel') as HTMLElement; // キャロセルのDOM要素を取得
    hero = document.querySelector('.hero') as HTMLElement; // ヒーロー画像のDOM要素を取得

    const scrollableElement = document.querySelector('.carousel') as HTMLElement; // スクロール可能なキャロセル要素を取得

    scrollableElement.addEventListener('wheel', (e) => {
        // 横スクロールが必要かどうかを判断する条件
        const shouldScrollHorizontally =
            scrollableElement.scrollWidth > scrollableElement.clientWidth;
        // 横スクロールが最後まで達したかどうかを判断する条件
        const isAtEndOfScroll =
            Math.abs(scrollableElement.scrollLeft + scrollableElement.clientWidth - scrollableElement.scrollWidth) < 0.5;
        if (shouldScrollHorizontally && !isAtEndOfScroll) {
            e.preventDefault(); // デフォルトのスクロール動作を防止
            scrollableElement.scrollLeft += e.deltaY; // 横スクロールを実行
        }
    });

    selectItem(currentPhotoNumber.currentPhotoNumber); // 初期表示のアイテムを選択
});

const selectItem = (index: number) => {
    itemFocus(index); // 選択したアイテムにフォーカスを当てる

    setTimeout(() => {
        currentHeroNumber.value = index; // 現在のヒーロー画像のインデックスを更新
        hero.style.backgroundImage = `url(${props.pics[index].src})`; // ヒーロー画像を更新
        hero.style.backgroundSize = `cover`; // 背景サイズをカバーに設定
        hero.style.backgroundPosition = `${props.pics[index].bgPosition}`; // 背景位置を更新
    }, 500);

    hero.classList.add('switching'); // 画像切り替えのアニメーションを開始
    hero.addEventListener('animationend', () => {
        hero.classList.remove('switching'); // アニメーション終了時にクラスを削除
    });
}

const itemFocus = (index: number) => {
    let faceBefore = carousel.children[currentPhotoNumber.currentPhotoNumber] as HTMLElement; // 前回選択されたアイテム
    faceBefore.style.boxShadow = `none`; // 前回選択されたアイテムの影を削除
    currentPhotoNumber.currentPhotoNumber = index; // 現在の写真番号を更新
    let face = carousel.children[currentPhotoNumber.currentPhotoNumber] as HTMLElement; // 現在選択されたアイテム
    face.style.boxShadow = `0 0 5px var(--custom-color-blue),2px 2px 3px var(--custom-color-blue),-2px -2px 3px var(--custom-color-blue)`; // 選択されたアイテムに影を追加
}
</script>

<style scoped>
.grid-carousel {
    display: grid;
    grid-template-areas:
        "hero"
        "images";
    grid-template-columns: minmax(300px, calc(1280px - 160px));
    grid-template-rows: 600px calc(7rem + 8px + 12px);
    gap: 0.5rem;
}

@media screen and (max-width: 768px) {
    .grid-carousel {
        display: grid;
        grid-template-areas:
            "hero"
            "images";
        grid-template-columns: minmax(300px, calc(1280px - 160px));
        grid-template-rows: 450px calc(7rem + 8px + 12px);
        gap: 0.5rem;
    }
}

.hero-wrapper {
    grid-area: hero;
    display: flex;
    filter: drop-shadow(0px 0px 2px var(--custom-color-deepGray)) drop-shadow(2px 2px 1px var(--custom-color-deepGray)) drop-shadow(-2px -2px 1px var(--custom-color-deepGray));
}

.hero {
    margin: auto;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    position: relative;
    border-radius: 5px;
}

.hero::after {
    background: transparent;
    content: "";
    position: absolute;
    transition: all 1s linear;
}

.hero.switching {
    animation: leaving 1s ease-in-out forwards;
}

@keyframes leaving {
    0% {
        clip-path: polygon(0 100%, 0 0, 14.29% 0, 14.29% 0, 28.58% 0, 28.58% 0, 42.87% 0, 42.87% 0, 57.16% 0, 57.16% 0, 71.45% 0, 71.45% 0, 85.74% 0, 85.74% 0, 100% 0, 100% 100%, 0 100%);
    }

    25% {
        clip-path: polygon(0 100%, 0 75%, 14.29% 75%, 14.29% 55%, 28.58% 55%, 28.58% 25%, 42.87% 25%, 42.87% 0, 57.16% 0, 57.16% 25%, 71.45% 25%, 71.45% 55%, 85.74% 55%, 85.74% 75%, 100% 75%, 100% 100%, 0 100%);
    }

    50% {
        clip-path: polygon(0 100%, 0 100%, 14.29% 100%, 14.29% 100%, 28.58% 100%, 28.58% 100%, 42.87% 100%, 42.87% 100%, 57.16% 100%, 57.16% 100%, 71.45% 100%, 71.45% 100%, 85.74% 100%, 85.74% 100%, 100% 100%, 100% 100%, 0 100%);
    }

    51% {
        clip-path: polygon(0 0, 0 0, 100% 0, 100% 0, 85.74% 0, 85.74% 0, 71.45% 0, 71.45% 0, 57.16% 0, 57.16% 0, 42.87% 0, 42.87% 0, 28.58% 0, 28.58% 0, 14.29% 0, 14.29% 0, 0 0);
    }

    76% {
        clip-path: polygon(0 25%, 0 0, 100% 0, 100% 25%, 85.74% 25%, 85.74% 45%, 71.45% 45%, 71.45% 75%, 57.16% 75%, 57.16% 100%, 42.87% 100%, 42.87% 75%, 28.58% 75%, 28.58% 45%, 14.29% 45%, 14.29% 25%, 0 25%);
    }

    100% {
        clip-path: polygon(0 100%, 0 0, 100% 0, 100% 100%, 85.74% 100%, 85.74% 100%, 71.45% 100%, 71.45% 100%, 57.16% 100%, 57.16% 100%, 42.87% 100%, 42.87% 100%, 28.58% 100%, 28.58% 100%, 14.29% 100%, 14.29% 100%, 0 100%);
    }
}

.scene {
    grid-area: images;
}

.carousel {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    overflow-x: auto;
    flex-shrink: 0;
    padding-left: 6px;
    padding-right: 6px;
    background-color: white;
}

.face {
    flex-shrink: 0;
    width: 7rem;
    height: 7rem;
    top: 0;
    left: 5px;
    background-size: cover;
    background-position: center;
    opacity: 1;
    border: 2px solid var(--custom-color-blue);
    border-radius: 5px;
}

.main-text-card {
    position: absolute;
    top: 0;
    left: 0;
    /* max-width: 300px; 適宜調整 */
}

.card {
    box-shadow: none !important;
}

.sub-text {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 1em;
    margin-bottom: 1rem;
    background: rgba(0, 0, 0, 0.5);
    padding: 0.5rem 1rem;
    border-radius: 10px;
}

.sub-text-center-bottom {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 1rem;
    top: auto;
}

/* スクロールバー全体のスタイル */
.carousel::-webkit-scrollbar {
    width: 8px;
    /* スクロールバーの幅を細く */
    height: 8px;
}

/* スクロールバーのトラック（背景部分）のスタイル */
.carousel::-webkit-scrollbar-track {
    background: rgba(0, 10, 135, 0.3);
    /* 背景色を透明度の低い黒に */
}

/* スクロールバーのサム（動かす部分）のスタイル */
.carousel::-webkit-scrollbar-thumb {
    background-color: rgba(0, 10, 135, 0.4);
    /* サムの色を透明度のやや高い黒に */
    border-radius: 4px;
    /* 角を丸く */
}

/* スクロールバーのサムにホバーしたときのスタイル */
.carousel::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 10, 135, 0.5);
    /* ホバー時の色を少し濃く */
}
</style>
