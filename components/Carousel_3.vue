<template>
    <div class="grid">
        <main class="h-96">
            <div class="hero3" v-bind:style="{ backgroundImage: 'url(' + pics[pos] + ')' }"></div>
        </main>
        <nav class="scene-nav">
            <div class="prev">
                <button @click="prevSlide"></button>
            </div>
            <div class="next">
                <button @click="nextSlide"></button>
            </div>
        </nav>
        <article class="wheel-wr">
            <div class="scene">
                <div class="carousel3">
                    <div class="face3" v-bind:style="{ backgroundImage: 'url(' + pics[0] + ')' }"></div>
                    <div class="face3" v-bind:style="{ backgroundImage: 'url(' + pics[1] + ')' }"></div>
                    <div class="face3" v-bind:style="{ backgroundImage: 'url(' + pics[2] + ')' }"></div>
                    <!-- <div class="face3" v-bind:style="{ backgroundImage: 'url(' + pics[3] + ')' }"></div>
                    <div class="face3" v-bind:style="{ backgroundImage: 'url(' + pics[4] + ')' }"></div>
                    <div class="face3" v-bind:style="{ backgroundImage: 'url(' + pics[5] + ')' }"></div>
                    <div class="face3" v-bind:style="{ backgroundImage: 'url(' + pics[6] + ')' }"></div>
                    <div class="face3" v-bind:style="{ backgroundImage: 'url(' + pics[7] + ')' }"></div> -->
                </div>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pics: [
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/cheering-robot.jpg",
                "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/little-robot.jpg",
                // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/robot.jpg",
                // "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80",
                // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/wall-e.jpg",
            ],
            pos: 0,
            carPos: 0,
            slides: 3
        };
    },
    methods: {
        rotateCarousel: function () {
            let angle = (this.carPos / this.slides) * -360;
            const ctr = document.querySelector(".carousel3");
            ctr.style.transform = "rotate(0deg)translateZ(-190px) rotateY(" + angle + "deg)";
        },
        prevSlide: function () {
            this.carPos--;
            this.rotateCarousel();
            const hero = document.querySelector(".hero3");
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
            }, 1000);
        },
        nextSlide: function () {
            this.carPos++;
            this.rotateCarousel();
            const hero = document.querySelector(".hero3");
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
            }, 1000);
        }
    }
};
</script>

<style lang="scss" scoped>
button {
    border: none;
    cursor: pointer;
    background: #ebfbfa;
    width: 100%;
    height: 100%;
}

.grid {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 100%;
    grid-template-rows: calc(100% - 220px - 60px) 220px 60px;

    nav {
        grid-column: 1;
        grid-row: 3;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .prev,
        .next {
            width: 45px;
            height: 75px;
            filter: drop-shadow(0 0 1px turquoise) drop-shadow(1px 1px 1px turquoise) drop-shadow(-1px -1px 1px turquoise);
            align-self: center;
            transform: rotate(-90deg);
        }

        .prev {

            button {
                clip-path: polygon(25% 100%,
                        25% 45%,
                        3% 45%,
                        0 35%,
                        45% 0,
                        55% 0,
                        100% 35%,
                        97% 45%,
                        75% 45%,
                        75% 100%,
                        25% 100%);
            }
        }

        .next {

            button {
                clip-path: polygon(25% 0,
                        25% 55%,
                        3% 55%,
                        0 65%,
                        45% 100%,
                        55% 100%,
                        100% 65%,
                        97% 55%,
                        75% 55%,
                        75% 0,
                        25% 0);
            }
        }
    }

    main {
        grid-column: 1;
        grid-row: 1;
        display: flex;
        filter: drop-shadow(0px 0px 2px #e0d040) drop-shadow(2px 2px 1px #e0d040) drop-shadow(-2px -2px 1px #e0d040);

        .hero3 {
            margin: auto;
            width: 75%;
            height: 75%;
            background-size: cover;
            background-position: center;
            position: relative;
            border-radius: 5px;

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
                    clip-path: polygon(0 100%,
                            0 0,
                            14.29% 0,
                            14.29% 0,
                            28.58% 0,
                            28.58% 0,
                            42.87% 0,
                            42.87% 0,
                            57.16% 0,
                            57.16% 0,
                            71.45% 0,
                            71.45% 0,
                            85.74% 0,
                            85.74% 0,
                            100% 0,
                            100% 100%,
                            0 100%);
                }

                25% {
                    clip-path: polygon(0 100%,
                            0 75%,
                            14.29% 75%,
                            14.29% 55%,
                            28.58% 55%,
                            28.58% 25%,
                            42.87% 25%,
                            42.87% 0,
                            57.16% 0,
                            57.16% 25%,
                            71.45% 25%,
                            71.45% 55%,
                            85.74% 55%,
                            85.74% 75%,
                            100% 75%,
                            100% 100%,
                            0 100%);
                }

                50% {
                    clip-path: polygon(0 100%,
                            0 100%,
                            14.29% 100%,
                            14.29% 100%,
                            28.58% 100%,
                            28.58% 100%,
                            42.87% 100%,
                            42.87% 100%,
                            57.16% 100%,
                            57.16% 100%,
                            71.45% 100%,
                            71.45% 100%,
                            85.74% 100%,
                            85.74% 100%,
                            100% 100%,
                            100% 100%,
                            0 100%);
                }

                51% {
                    clip-path: polygon(0 0,
                            0 0,
                            100% 0,
                            100% 0,
                            85.74% 0,
                            85.74% 0,
                            71.45% 0,
                            71.45% 0,
                            57.16% 0,
                            57.16% 0,
                            42.87% 0,
                            42.87% 0,
                            28.58% 0,
                            28.58% 0,
                            14.29% 0,
                            14.29% 0,
                            0 0);
                }

                76% {
                    clip-path: polygon(0 25%,
                            0 0,
                            100% 0,
                            100% 25%,
                            85.74% 25%,
                            85.74% 45%,
                            71.45% 45%,
                            71.45% 75%,
                            57.16% 75%,
                            57.16% 100%,
                            42.87% 100%,
                            42.87% 75%,
                            28.58% 75%,
                            28.58% 45%,
                            14.29% 45%,
                            14.29% 25%,
                            0 25%);
                }

                100% {
                    clip-path: polygon(0 100%,
                            0 0,
                            100% 0,
                            100% 100%,
                            85.74% 100%,
                            85.74% 100%,
                            71.45% 100%,
                            71.45% 100%,
                            57.16% 100%,
                            57.16% 100%,
                            42.87% 100%,
                            42.87% 100%,
                            28.58% 100%,
                            28.58% 100%,
                            14.29% 100%,
                            14.29% 100%,
                            0 100%);
                }
            }

            &::after {
                width: 100%;
                height: 100%;
                background: transparent;
                content: "";
                position: absolute;
                transition: all 0.25s linear;
            }

            &.switching-prev {
                animation: leaving 2s ease-in-out forwards;

                &::after {
                    animation: trans 2s ease-in-out forwards;
                }
            }

            &.switching-next {
                animation: leaving 1.5s ease-in-out reverse forwards;

                &::after {
                    animation: trans 1.5s ease-in-out forwards;
                }
            }
        }
    }

    .wheel-wr {
        grid-column: 1;
        grid-row: 2;
        display: flex;
        padding-top: 30px;
        padding-bottom: 30px;
        justify-content: space-evenly;
        align-items: center;

        .scene {
            width: 220px;
            height: 200px;
            perspective: 3000px;
            left: 0.5%;
            align-self: center;

            .carousel3 {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                transform: rotate(0deg) translateZ(-190px);
                transform-style: preserve-3d;
                transition: transform 2s ease-in-out;

                .face3 {
                    position: absolute;
                    width: 210px;
                    height: 100%;
                    top: 0;
                    left: 5px;
                    background-size: cover;
                    background-position: center;
                    opacity: 1;
                    border: 2px solid #d040e0;
                    border-radius: 5px;
                    box-shadow: 0 0 1px #db6ce7, 1px 1px 2px #db6ce7,
                        -1px -1px 2px #db6ce7;

                    &:nth-of-type(1) {
                        transform: rotate(0deg) translateZ(190px);
                    }

                    &:nth-of-type(2) {
                        transform: rotateY(120deg) rotate(0deg) translateZ(190px);
                    }

                    &:nth-of-type(3) {
                        transform: rotateY(240deg) rotate(0deg) translateZ(190px);
                    }

                }
            }
        }
    }
}
</style>
