<template>
    <div class="grid-carousel h-[700px] w-full">
        <div class="grid-hero">
            <nav class="scene-nav-prev">
                <!-- <div class="prev">
                    <button @click="prevSlide"></button>
                </div> -->
            </nav>
            <main class="wrapper-hero">
                <div class="hero" v-bind:style="{ backgroundImage: 'url(' + pics[pos] + ')' }"></div>
            </main>
            <nav class="scene-nav-next">
                <!-- <div class="next">
                    <button @click="nextSlide"></button>
                </div> -->
            </nav>
        </div>
        <!-- <nav class="scene-nav">
                <div class="prev">
                    <button @click="prevSlide"></button>
                </div>
                <div class="next">
                    <button @click="nextSlide"></button>
                </div>
        </nav> -->
        <article class="wheel-wr">
            <nav class="scene-nav-prev">
                <div class="prev">
                    <button @click="prevSlide"></button>
                </div>
            </nav>
            <div class="scene">
                <div class="carousel">
                    <div class="face face1" v-bind:style="{ backgroundImage: 'url(' + pics[0] + ')' }"></div>
                    <div class="face face2" v-bind:style="{ backgroundImage: 'url(' + pics[1] + ')' }"></div>
                    <div class="face face3" v-bind:style="{ backgroundImage: 'url(' + pics[2] + ')' }"></div>
                    <div class="face face4" v-bind:style="{ backgroundImage: 'url(' + pics[3] + ')' }"></div>
                    <div class="face face5" v-bind:style="{ backgroundImage: 'url(' + pics[4] + ')' }"></div>
                    <div class="face face6" v-bind:style="{ backgroundImage: 'url(' + pics[5] + ')' }"></div>
                </div>
            </div>
            <nav class="scene-nav-next">
                <div class="next">
                    <button @click="nextSlide"></button>
                </div>
            </nav>
        </article>
        <!-- <article class="wheel-wr">
            <div class="scene">
                <div class="carousel">
                    <div class="face" v-bind:style="{ backgroundImage: 'url(' + pics[0] + ')' }"></div>
                    <div class="face" v-bind:style="{ backgroundImage: 'url(' + pics[1] + ')' }"></div>
                    <div class="face" v-bind:style="{ backgroundImage: 'url(' + pics[2] + ')' }"></div>
                    <div class="face" v-bind:style="{ backgroundImage: 'url(' + pics[3] + ')' }"></div>
                    <div class="face" v-bind:style="{ backgroundImage: 'url(' + pics[4] + ')' }"></div>
                    <div class="face" v-bind:style="{ backgroundImage: 'url(' + pics[5] + ')' }"></div>
                </div>
            </div>
        </article> -->
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
const pos = ref<number>(0);
const carPos = ref<number>(0);
const slides = ref<number>(pics.value.length);

let ctr: HTMLElement | null;
let hero: HTMLElement | null;

onMounted(() => {
    ctr = document.querySelector('.carousel');
    hero = document.querySelector('.hero');
});

const rotateCarousel = () => {
    if (!ctr) {
        console.error('カルーセル要素が見つかりません。');
        return;
    }
    // const angle = (carPos.value / slides.value) * -360;
    // ctr.style.transform = `rotate(0deg)translateZ(-190px) rotateY(${angle}deg)`;
};

const prevSlide = () => {
    if (!hero) {
        console.error('ヒーロー要素が見つかりません。');
        return;
    }
    carPos.value--;
    rotateCarousel();
    hero.classList.add('switching-prev');
    hero.addEventListener('animationend', () => {
        hero.classList.remove('switching-prev');
    });
    setTimeout(() => {
        pos.value = pos.value - 1 < 0 ? slides.value - 1 : pos.value - 1;
    }, 250);
};

const nextSlide = () => {
    if (!hero) {
        console.error('ヒーロー要素が見つかりません。');
        return;
    }
    carPos.value++;
    rotateCarousel();
    hero.classList.add('switching-next');
    hero.addEventListener('animationend', () => {
        hero.classList.remove('switching-next');
    });
    setTimeout(() => {
        pos.value = pos.value + 1 > slides.value - 1 ? 0 : pos.value + 1;
    }, 250);
};
</script>


<!-- <script>
export default {
    data() {
        return {
            pics: [
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/cheering-robot.jpg",
                "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/little-robot.jpg",
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/robot.jpg",
                "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80",
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/wall-e.jpg",
            ],
            pos: 0,
            carPos: 0,
            slides: 6
        };
    },
    methods: {
        rotateCarousel: function () {
            let angle = (this.carPos / this.slides) * -360;
            const ctr = document.querySelector(".carousel");
            ctr.style.transform = "rotate(0deg)translateZ(-190px) rotateY(" + angle + "deg)";
        },
        prevSlide: function () {
            this.carPos--;
            this.rotateCarousel();
            const hero = document.querySelector(".hero");
            hero.classList.add("switching-prev");
            hero.addEventListener("animationend", () => {
                hero.classList.remove("switching-prev");
            });
            setTimeout(() => {
                if (this.pos - 1 < 0) {
                    this.pos = this.slides - 1;
                } else {
                    this.pos--;
                }
            }, 250);
        },
        nextSlide: function () {
            this.carPos++;
            this.rotateCarousel();
            const hero = document.querySelector(".hero");
            hero.classList.add("switching-next");
            hero.addEventListener("animationend", () => {
                hero.classList.remove("switching-next");
            });
            setTimeout(() => {
                if (this.pos + 1 > this.slides - 1) {
                    this.pos = 0;
                } else {
                    this.pos++;
                }
            }, 250);
        }
    }
};
</script> -->

<style lang="scss" scoped>
.grid-hero{
    grid-column: 1;
    grid-row: 1;
    display: grid;
    grid-template-areas: "previewcontent hero nextcontent";
    grid-template-columns: 4rem 1fr 4rem;
    grid-template-rows: auto;
    column-gap: 1rem;
    align-items: center;
}

.grid-hero .scene-nav-prev {
    grid-area: previewcontent;
}

.wrapper-hero {
    height:100%;
    width:100%;
}
.grid-hero .wrapper-hero {
    grid-area: hero;
}

.grid-hero .scene-nav-next{
    grid-area: nextcontent;
}
button {
    border: none;
    cursor: pointer;
    background: #ebfbfa;
    width: 100%;
    height: 100%;
}

.grid-carousel {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: calc(100% - 220px) 220px;
}

.grid-carousel nav .prev,
.grid-carousel nav .next {
    width: 4rem;
    height: 2rem;
    padding: 0 0.5rem 0 0.5rem;
    filter: drop-shadow(0 0 1px turquoise) drop-shadow(1px 1px 1px turquoise) drop-shadow(-1px -1px 1px turquoise);
    align-self: center;
    // transform: rotate(-90deg);
}

.grid-carousel nav .prev button {
    // clip-path: polygon(25% 100%, 25% 45%, 3% 45%, 0 35%, 45% 0, 55% 0, 100% 35%, 97% 45%, 75% 45%, 75% 100%, 25% 100%);
    clip-path: polygon(0 50%, 100% 0, 100% 100%);
}

.grid-carousel nav .next button {
    // clip-path: polygon(25% 0, 25% 55%, 3% 55%, 0 65%, 45% 100%, 55% 100%, 100% 65%, 97% 55%, 75% 55%, 75% 0, 25% 0);
    clip-path: polygon(100% 50%, 0 100%, 0 0);
}

.grid-carousel main {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    filter: drop-shadow(0px 0px 2px #e0d040) drop-shadow(2px 2px 1px #e0d040) drop-shadow(-2px -2px 1px #e0d040);
}

.grid-carousel main .hero {
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

.grid-carousel main .hero.switching-prev::after {
    animation: trans 1.5s ease-in-out forwards;
}

.grid-carousel main .hero.switching-next {
    animation: leaving 1s ease-in-out reverse forwards;
}

.grid-carousel main .hero.switching-next::after {
    animation: trans 1s ease-in-out forwards;
}

@keyframes trans {
    0% {
        background: transparent;
    }

    30% {
        background: white;
    }

    70% {
        background: white;
    }

    100% {
        background: transparent;
    }
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

.grid-carousel .wheel-wr {
    grid-column: 1;
    grid-row: 2;
    display: grid;
    grid-template-areas: "prev images next";
    grid-template-columns: 4rem 1fr 4rem;
    grid-template-rows: auto;
    column-gap: 1rem;
    align-items: center;
}

.wheel-wr .scene-nav-prev {
    grid-area: prev;
}

.wheel-wr .scene-nav-next {
    grid-area: next;
}

.grid-carousel .wheel-wr .scene {
    // width: 220px;
    grid-area: images;
    // height: 200px;
    // perspective: 3000px;
    // left: 0.5%;
    align-self: center;
    // display: grid;
    // grid-template-areas: "img1 img2 img3 img4 img5 img6";
    // grid-template-columns: auto auto auto auto auto auto;
    // grid-template-rows: auto;
    // column-gap: 1rem;
    align-items: center;
}

.grid-carousel .wheel-wr .scene .carousel {
    width:100%;
    overflow-x: scroll;
    height:100%;
    display: grid;
    grid-template-areas: "img1 img2 img3 img4 img5 img6";
    grid-template-columns: 7rem 7rem 7rem 7rem 7rem 7rem;
    grid-template-rows: auto;
    column-gap: 1rem;
    align-items: center;
}

.grid-carousel .wheel-wr .scene .carousel .face1  {
    grid-area: img1;
}
.grid-carousel .wheel-wr .scene .carousel .face2  {
    grid-area: img2;
}
.grid-carousel .wheel-wr .scene .carousel .face3  {
    grid-area: img3;
}
.grid-carousel .wheel-wr .scene .carousel .face4  {
    grid-area: img4;
}
.grid-carousel .wheel-wr .scene .carousel .face5  {
    grid-area: img5;
}
.grid-carousel .wheel-wr .scene .carousel .face6  {
    grid-area: img6;
}

// .grid-carousel .wheel-wr .scene .carousel {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: 0;
//     transform: rotate(0deg) translateZ(-190px);
//     transform-style: preserve-3d;
//     transition: transform 1s ease-in-out;
// }

.grid-carousel .wheel-wr .scene .carousel .face {
    // position: absolute;
    width: 7rem;
    height: 7rem;
    top: 0;
    left: 5px;
    background-size: cover;
    background-position: center;
    opacity: 1;
    border: 2px solid #d040e0;
    border-radius: 5px;
    box-shadow: 0 0 1px #db6ce7, 1px 1px 2px #db6ce7, -1px -1px 2px #db6ce7;
}

// .grid-carousel .wheel-wr .scene .carousel .face:nth-of-type(1) {
//     transform: rotate(0deg) translateZ(190px);
// }

// .grid-carousel .wheel-wr .scene .carousel .face:nth-of-type(2) {
//     transform: rotateY(60deg) rotate(0deg) translateZ(190px);
// }

// .grid-carousel .wheel-wr .scene .carousel .face:nth-of-type(3) {
//     transform: rotateY(120deg) rotate(0deg) translateZ(190px);
// }

// .grid-carousel .wheel-wr .scene .carousel .face:nth-of-type(4) {
//     transform: rotateY(180deg) rotate(0deg) translateZ(190px);
// }

// .grid-carousel .wheel-wr .scene .carousel .face:nth-of-type(5) {
//     transform: rotateY(240deg) rotate(0deg) translateZ(190px);
// }

// .grid-carousel .wheel-wr .scene .carousel .face:nth-of-type(6) {
//     transform: rotateY(300deg) rotate(0deg) translateZ(190px);
// }
</style>
