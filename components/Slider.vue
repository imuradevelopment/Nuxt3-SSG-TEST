<template>
    <section class="w-full flex flex-col h-[37rem] bg-[url('/images/recruit/index/009.png')]">
        <h2 id="recruit09" class="px-4 w-fit text-4xl leading-loose font-bold whitespace-nowrap bg-custom-deepBlue text-white">社員紹介</h2>
        <div class="mb-4 w-full flex-1 flex justify-center items-center">
            <div class="flex flex-col h-full">
                <img class="ml-20 mt-4 object-cover w-[260px]" :src="images[index]" alt="社員紹介" />
                <div class="ml-20 p-2 bg-gray-100 border border-custom-lightGray border-t-0" v-html="imagesDiscription[index]"></div>
                <div class="ml-20 flex-1 flex h-full items-end justify-center space-x-8 text-4xl font-bold text-custom-deepBlue">
                    <div class="cursor-pointer h-16 w-16 leading-9 border-2 rounded-full border-custom-deepBlue bg-gray-100 flex justify-center items-center" @click="prev"><div class="text-4xl font-bold text-custom-deepBlue">←</div></div>
                    <div class="cursor-pointer h-16 w-16 leading-9 border-2 rounded-full border-custom-deepBlue bg-gray-100 flex justify-center items-center" @click="next"><div class="text-4xl font-bold text-custom-deepBlue">→</div></div>
                </div>
            </div>
            <div class="w-20 h-20 self-end border-2 rounded-full border-custom-deepBlue bg-gray-100 flex justify-center items-center"><div class="text-4xl font-bold text-custom-deepBlue">{{ index + 1 }}/{{ images.length }}</div></div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const images = [
    "/images/recruit/index/010.png",
    "/images/recruit/index/011.png",
    "/images/recruit/index/012.png",
];
const imagesDiscription = [
    '<div class="flex flex-col justyfy-center items-center space-y-2"><div class="font-bold">システムエンジニア</div><div class="font-bold">A.O</div><div class="font-bold">立正大学</div><div class="font-bold">文学部哲学科出身</div></div>',
    '<div class="flex flex-col justyfy-center items-center space-y-2"><div class="font-bold">システムエンジニア</div><div class="font-bold">J.K</div><div class="font-bold">山形大学</div><div class="font-bold">工学部応用生命システム工学科出身</div></div>',
    '<div class="flex flex-col justyfy-center items-center space-y-2"><div class="font-bold">システムエンジニア</div><div class="font-bold">Y.K</div><div class="font-bold">東京理科大学</div><div class="font-bold">理工学部情報科学科出身</div></div>',
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
