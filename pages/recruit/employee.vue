<template>
    <div>

        <section class="mb-12 md:mb-24 flex bg-cover bg-[url('/images/recruit/employee/001.png')]">
            <div class="basis-1/3 h-auto z-10 bg-custom-deepBlue"
                style="clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%)">
            </div>
            <div class="flex flex-col grow">
                <h1 id="recruit-employee01" class="linkScroll self-end mx-8 text-2xl sm:text-4xl font-bold text-white">
                    社員紹介
                </h1>
                <p
                    class="pl-28 pr-4 -ml-28 mt-12 text-center mb-4 py-2 text-base md:text-lg font-bold text-white bg-custom-blue/70">
                    ベイルの先輩社員から貰った<br class="inline-block md:hidden" />コメントを紹介します。</p>
            </div>
        </section>

        <section class="mb-12 md:mb-24">
            <h2 id="recruit-employee02 mb-4"
                class="pl-16 pr-8 w-fit text-white bg-custom-deepBlue text-4xl font-bold leading-loose">
                インタビュー</h2>
            <div class=" mx-4">
                <CarouselEmployee :pics="[
                    {
                        src: '/images/recruit/employee/003.jpeg',
                        alt: 'オフィス外観',
                        introduction: `<div class='flex h-full items-center justify-end'><div class='h-full bg-custom-deepBlue/70 text-white flex justify-center items-center'><div class='p-4 text-2xl font-bold leading-loose text-center'>システムエンジニア<br />Y.K<br />システム部<br />東京理科大学<br />理工学部情報学科出身</div></div></div>`,
                        message1: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>山手通りに面した本社オフィス。<br />日比谷線/東急東横線「中目黒駅」から山手通り沿いを5分程歩くと見えてくる、<br class='hidden md:inline-block' />1階にお寿司屋さん(築地すし好)が入っているビルです。</p>`,
                        message2: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>山手通りに面した本社オフィス。<br />日比谷線/東急東横線「中目黒駅」から山手通り沿いを5分程歩くと見えてくる、<br class='hidden md:inline-block' />1階にお寿司屋さん(築地すし好)が入っているビルです。</p>`,
                        message3: `<p class='message text-sm sm:text-base font-bold sm:leading-7 leading-7'>山手通りに面した本社オフィス。<br />日比谷線/東急東横線「中目黒駅」から山手通り沿いを5分程歩くと見えてくる、<br class='hidden md:inline-block' />1階にお寿司屋さん(築地すし好)が入っているビルです。</p>`,
                        tileColor: 'rgba(0, 37, 92, 0.1)',
                        shadowColor: 'rgb(0 0 0 / 0.5)',
                        bgPosition: 'center'
                    },
                    // 他の画像オブジェクト...
                ]"></CarouselEmployee>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'double-column-sidebar'
})
import CarouselEmployee from '~/components/CarouselEmployee.vue'
</script>

<style scoped></style>