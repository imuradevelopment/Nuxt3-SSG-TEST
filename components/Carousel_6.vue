<template>
    <div class="grid-carousel">
        <nav class="scene-nav-previewcontent">
            <!-- <div class="prev">
                <button @click="prevSlide"></button>
            </div> -->
        </nav>
        <main>
            <div class="hero" v-bind:style="{ backgroundImage: 'url(' + pics[currentPhotoNumber] + ')' }"></div>
        </main>
        <nav class="scene-nav-nextcontent">
            <!-- <div class="next">
                <button @click="nextSlide"></button>
            </div> -->
        </nav>
        <!-- <nav class="scene-nav-prev">
            <div class="prev">
                <button @click="prevSlide"></button>
            </div>
        </nav> -->
        <div class="scene">
            <div class="carousel">
                <div class="flex-item face face1" :id="slideIndex[0]" v-on:click="selectItem(slideIndex[0])" v-bind:style="{ backgroundImage: 'url(' + pics[0] + ')' }"></div>
                <div class="flex-item face face2" :id="slideIndex[1]" v-on:click="selectItem(slideIndex[1])" v-bind:style="{ backgroundImage: 'url(' + pics[1] + ')' }"></div>
                <div class="flex-item face face3" :id="slideIndex[2]" v-on:click="selectItem(slideIndex[2])" v-bind:style="{ backgroundImage: 'url(' + pics[2] + ')' }"></div>
                <div class="flex-item face face4" :id="slideIndex[3]" v-on:click="selectItem(slideIndex[3])" v-bind:style="{ backgroundImage: 'url(' + pics[3] + ')' }"></div>
                <div class="flex-item face face5" :id="slideIndex[4]" v-on:click="selectItem(slideIndex[4])" v-bind:style="{ backgroundImage: 'url(' + pics[4] + ')' }"></div>
                <div class="flex-item face face6" :id="slideIndex[5]" v-on:click="selectItem(slideIndex[5])" v-bind:style="{ backgroundImage: 'url(' + pics[5] + ')' }"></div>
            </div>
        </div>
        <!-- <nav class="scene-nav-next">
            <div class="next">
                <button @click="nextSlide"></button>
            </div>
        </nav> -->
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';

type ImageUrl = string;

const pics = ref<ImageUrl[]>([
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/cheering-robot.jpg",
    "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/little-robot.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/robot.jpg",
    "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/wall-e.jpg"
]);

const currentPhotoNumber = ref<number>(0);
const slides = ref<number>(pics.value.length);
const slideIndex = ref<string[]>(Array.from({ length: slides.value }, (_, i) => (i).toString()));

let carousel: HTMLElement;
let hero: HTMLElement;

onMounted(() => {
    carousel = document.querySelector('.carousel') as HTMLElement;
    hero = document.querySelector('.hero') as HTMLElement;

    const scrollableElement = document.querySelector('.scrollable-element') as HTMLElement;

    scrollableElement.addEventListener('wheel', (e) => {
        e.preventDefault();
        scrollableElement.scrollLeft += e.deltaY;
    });
});

const selectItem = (id:string) => {
    if (!hero) {
        console.error('ヒーロー要素が見つかりません。');
        return;
    }
    let faceBefore = carousel.children[currentPhotoNumber.value] as HTMLElement;
    faceBefore.style.boxShadow = `none`;
    currentPhotoNumber.value = parseInt(id);
    let face = carousel.children[currentPhotoNumber.value] as HTMLElement;
    face.style.boxShadow = `0 0 1px var(--custom-color-deepGray), 1px 1px 2px var(--custom-color-deepGray), -1px -1px 2px var(--custom-color-deepGray)`;


    hero.classList.add('switching-prev');
    hero.addEventListener('animationend', () => {
        hero.classList.remove('switching-prev');
    });
}

// const prevSlide = () => {
//     if (!hero) {
//         console.error('ヒーロー要素が見つかりません。');
//         return;
//     }
//     let faceBefore = carousel.children[currentPhotoNumber.value] as HTMLElement;
//     faceBefore.style.boxShadow = `none`;
//     currentPhotoNumber.value = currentPhotoNumber.value - 1 < 0 ? slides.value - 1 : currentPhotoNumber.value - 1;
//     let face = carousel.children[currentPhotoNumber.value] as HTMLElement;
//     face.style.boxShadow = `0 0 1px var(--custom-color-deepGray), 1px 1px 2px var(--custom-color-deepGray), -1px -1px 2px var(--custom-color-deepGray)`;


//     hero.classList.add('switching-prev');
//     hero.addEventListener('animationend', () => {
//         hero.classList.remove('switching-prev');
//     });
// };

// const nextSlide = () => {
//     if (!hero) {
//         console.error('ヒーロー要素が見つかりません。');
//         return;
//     }
//     let faceBefore = carousel.children[currentPhotoNumber.value] as HTMLElement;
//     faceBefore.style.boxShadow = `none`;
//     currentPhotoNumber.value = currentPhotoNumber.value + 1 > slides.value - 1 ? 0 : currentPhotoNumber.value + 1;
//     let face = carousel.children[currentPhotoNumber.value] as HTMLElement;
//     face.style.boxShadow = `0 0 1px var(--custom-color-deepGray), 1px 1px 2px var(--custom-color-deepGray), -1px -1px 2px var(--custom-color-deepGray)`;

//     hero.classList.add('switching-next');
//     hero.addEventListener('animationend', () => {
//         hero.classList.remove('switching-next');
//     });
// };
</script>

<style scoped>
.scene-nav-previewcontent {
    grid-area: previewcontent;
}

.scene-nav-nextcontent {
    grid-area: nextcontent;
}

.grid-carousel button {
    border: none;
    cursor: pointer;
    background: #ebfbfa;
    width: 100%;
    height: 100%;
}

.grid-carousel {
    display: grid;
    grid-template-areas:
        "previewcontent hero nextcontent"
        "prev images next";
    /* grid-template-columns: 4rem minmax(300px, calc(1280px - 160px - 2rem)) 4rem; */
    grid-template-columns: auto minmax(300px, calc(1280px - 160px - 2rem)) auto;
    grid-template-rows: 360px 180px;
    gap: 1rem;
}
.scene-nav-prev {
    grid-area: prev;
}

.scene-nav-next {
    grid-area: next;
}

.grid-carousel .scene {
    grid-area: images;
}

.grid-carousel .scene .carousel {
    /* width: 100%;
    overflow-x: scroll;
    height: 100%;
    display: grid;
    grid-template-areas: "img1 img2 img3 img4 img5 img6";
    grid-template-columns: 7rem 7rem 7rem 7rem 7rem 7rem;
    grid-template-rows: auto;
    column-gap: 1rem;
    align-items: center; */
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    overflow-x: auto;
    flex-shrink: 0;
}

.flex-item {
    flex-shrink: 0;
}
/* スクロールバー全体のスタイル */
.carousel::-webkit-scrollbar {
  width: 8px; /* スクロールバーの幅を細く */
  height: 8px;
}

/* スクロールバーのトラック（背景部分）のスタイル */
.carousel::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1); /* 背景色を透明度の低い黒に */
}

/* スクロールバーのサム（動かす部分）のスタイル */
.carousel::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2); /* サムの色を透明度のやや高い黒に */
  border-radius: 4px; /* 角を丸く */
}

/* スクロールバーのサムにホバーしたときのスタイル */
.carousel::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.3); /* ホバー時の色を少し濃く */
}

/* .grid-carousel .scene .carousel .face1 {
    grid-area: img1;
}

.grid-carousel .scene .carousel .face2 {
    grid-area: img2;
}

.grid-carousel .scene .carousel .face3 {
    grid-area: img3;
}

.grid-carousel .scene .carousel .face4 {
    grid-area: img4;
}

.grid-carousel .scene .carousel .face5 {
    grid-area: img5;
}

.grid-carousel .scene .carousel .face6 {
    grid-area: img6;
} */

.grid-carousel .scene .carousel .face {
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

/* .grid-carousel nav .prev,
.grid-carousel nav .next {
    width: 4rem;
    height: 2rem;
    padding: 0 0.5rem 0 0.5rem;
    filter: drop-shadow(0 0 1px turquoise) drop-shadow(1px 1px 1px turquoise) drop-shadow(-1px -1px 1px turquoise);
    align-self: center;
}

.grid-carousel nav .prev button {
    clip-path: polygon(0 50%, 100% 0, 100% 100%);
}

.grid-carousel nav .next button {
    clip-path: polygon(100% 50%, 0 100%, 0 0);
} */

.grid-carousel main {
    display: flex;
    filter: drop-shadow(0px 0px 2px var(--custom-color-blue)) drop-shadow(2px 2px 1px var(--custom-color-blue)) drop-shadow(-2px -2px 1px var(--custom-color-blue));
}

.grid-carousel main .hero {
    grid-area: hero;
    margin: auto;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    position: relative;
    border-radius: 5px;
}

.grid-carousel main .hero::after {
    background: transparent;
    content: "";
    position: absolute;
    transition: all 0.25s linear;
}

.grid-carousel main .hero.switching-prev {
    animation: leaving 1.5s ease-in-out forwards;
}

.grid-carousel main .hero.switching-next {
    animation: leaving 1s ease-in-out reverse forwards;
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

</style>
