<template>
    <section class="w-full h-[30rem] bg-[url('/images/recruit/index/009.png')]">
        <h2 id="recruit09" class="px-4 w-fit text-4xl leading-loose font-bold whitespace-nowrap bg-custom-deepBlue text-white">社員紹介</h2>
        <div class="w-full h-[410px] flex justify-center items-center">
            <div class="flex flex-col h-full">
                <img class="slide object-cover" :src="images[index]" alt="社員紹介" />
                <div class="mb-8 flex-1 flex h-full items-end justify-center space-x-8 text-4xl font-bold text-custom-deepBlue">
                    <div class="arrow cursor-pointer h-10 w-10 leading-9 border-2 rounded-full border-custom-deepBlue bg-gray-100" @click="prev">←</div>
                    <div class="arrow cursor-pointer h-10 w-10 leading-9 border-2 rounded-full border-custom-deepBlue bg-gray-100" @click="next">→</div>
                </div>
            </div>
            <div class="mb-8 w-16 self-end text-4xl font-bold text-custom-deepBlue">{{ index + 1 }}/{{ images.length }}</div>
        </div>
    </section>
</template>

<!-- <script>
export default {
    data() {
        return {
            images: [
                "/images/recruit/index/010.png",
                "/images/recruit/index/011.png",
                "/images/recruit/index/012.png",
            ],
            index: 0,
        };
    },
    methods: {
        prev() {
            // indexが0のときは、最後の写真に移動する
            if (this.index === 0) {
                this.index = this.images.length - 1;
            } else {
                this.index--;
            }
        },
        next() {
            // indexが最後の写真のときは、最初の写真に移動する
            if (this.index === this.images.length - 1) {
                this.index = 0;
            } else {
                this.index++;
            }
        },
    },
};
</script> -->
<script setup lang="ts">
import { ref } from "vue";

const images = [
    "/images/recruit/index/010.png",
    "/images/recruit/index/011.png",
    "/images/recruit/index/012.png",
];
const index = ref(0);

const prev = () => {
    // indexが0のときは、最後の写真に移動する
    if (index.value === 0) {
        index.value = images.length - 1;
    } else {
        index.value--;
    }
};

const next = () => {
    // indexが最後の写真のときは、最初の写真に移動する
    if (index.value === images.length - 1) {
        index.value = 0;
    } else {
        index.value++;
    }
};
</script>

<style scoped>

</style>
