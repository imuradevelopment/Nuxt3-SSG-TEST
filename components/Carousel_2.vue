<template>
    <div class="grid-carousel">
        <main class="hero-wrapper">
            <!-- ヒーローイメージとして選択された画像を表示 -->
            <div class="hero" :style="heroStyle">
                <!-- BlurGlassCardコンポーネントを使用してメインテキストを表示 -->
                <BlurGlassCard class="main-text-card" :rounded="true" :blur="10" :color="'rgba(255, 255, 255, 0.5)'">
                    {{ pics[currentHeroNumber].mainText }}
                </BlurGlassCard>
                <!-- サブテキストを表示 -->
                <div class="sub-text">{{ pics[currentHeroNumber].subText }}</div>
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
import { ref, computed } from 'vue';
import BlurGlassCard from './BlurGlassCard.vue';

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
        }[],
        required: true
    }
});

const currentPhotoNumber = ref<number>(0);
const currentHeroNumber = ref<number>(0);
const heroStyle = computed(() => ({
    backgroundImage: `url(${props.pics[currentPhotoNumber.value].src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}));

// const selectItem = (index: number) => {
//     currentPhotoNumber.value = index;
// };

let carousel: HTMLElement;
let hero: HTMLElement;

onMounted(() => {
    carousel = document.querySelector('.carousel') as HTMLElement;
    hero = document.querySelector('.hero') as HTMLElement;

    const scrollableElement = document.querySelector('.carousel') as HTMLElement;

    scrollableElement.addEventListener('wheel', (e) => {
        e.preventDefault();
        scrollableElement.scrollLeft += e.deltaY;
    });
});

const selectItem = (index: number) => {
    let faceBefore = carousel.children[currentPhotoNumber.value] as HTMLElement;
    faceBefore.style.boxShadow = `none`;
    currentPhotoNumber.value = index;
    let face = carousel.children[currentPhotoNumber.value] as HTMLElement;
    face.style.boxShadow = `0 0 1px var(--custom-color-deepGray), 1px 1px 2px var(--custom-color-deepGray), -1px -1px 2px var(--custom-color-deepGray)`;
    setTimeout(() => {
        currentHeroNumber.value = currentPhotoNumber.value;
    }, 500);

    hero.classList.add('switching');
    hero.addEventListener('animationend', () => {
        hero.classList.remove('switching');
    });
}
</script>

<style scoped>
.grid-carousel {
    display: grid;
    grid-template-areas:
        "hero"
        "images";
    grid-template-columns: minmax(300px, calc(1280px - 160px - 2rem));
    grid-template-rows: 450px 180px;
    gap: 1rem;
}

.hero-wrapper {
    grid-area: hero;
    display: flex;
    filter: drop-shadow(0px 0px 2px var(--custom-color-blue)) drop-shadow(2px 2px 1px var(--custom-color-blue)) drop-shadow(-2px -2px 1px var(--custom-color-blue));
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
    border: 2px solid var(--custom-color-deepGray);
    border-radius: 5px;
}
.main-text-card {
  position: absolute;
  top: 0;
  left: 0;
  /* max-width: 300px; 適宜調整 */
}
.main-text {
    position: absolute;
    top: 1rem;
    left: 1rem;
    color: white;
    font-size: 1.5em;
    padding: 1rem;
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

/* スクロールバー全体のスタイル */
.carousel::-webkit-scrollbar {
    width: 8px;
    /* スクロールバーの幅を細く */
    height: 8px;
}

/* スクロールバーのトラック（背景部分）のスタイル */
.carousel::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    /* 背景色を透明度の低い黒に */
}

/* スクロールバーのサム（動かす部分）のスタイル */
.carousel::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    /* サムの色を透明度のやや高い黒に */
    border-radius: 4px;
    /* 角を丸く */
}

/* スクロールバーのサムにホバーしたときのスタイル */
.carousel::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.3);
    /* ホバー時の色を少し濃く */
}
</style>
