<template>
    <div>
        <h1>各種データ</h1>
        <section class="my-24 mx-4">
            <div class="text-center">6枚パターン</div>
            <!-- <Carousel_6></Carousel_6> -->
        </section>

        <section class="my-24 mx-4">
            <div class="text-center">3枚パターン</div>
                <Carousel_2 :pics="[
                    {
                        src: '/images/recruit/office/005.png',
                        alt: '8階 開発ルーム',
                        mainText: `<h2 class='px-4 text-2xl font-bold leading-loose'>開発ルーム（8階）</h2>`,
                        subText: `<p class='px-4 py-2 font-bold text-base leading-6'>8階は、主に開発フロアとなっており、<br />受託開発案件などを本社開発メンバーで行っております。</p>`,
                        tileColor: 'rgba(0, 37, 92, 0.1)',
                        shadowColor: 'rgb(0 0 0 / 0.5)'
                    },
                    {
                        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/robot.jpg',
                        alt: '説明1',
                        mainText: 'メインテキスト2',
                        subText: 'サブテキスト2',
                        tileColor: 'rgba(0, 37, 92, 0.1)',
                        shadowColor: 'rgb(0 0 0 / 0.5)'
                    },
                    {
                        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/robot.jpg',
                        alt: '説明1',
                        mainText: 'メインテキスト1',
                        subText: 'サブテキスト1',
                        tileColor: 'rgba(0, 37, 92, 0.1)',
                        shadowColor: 'rgb(0 0 0 / 0.5)'
                    },
                    {
                        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/robot.jpg',
                        alt: '説明1',
                        mainText: 'メインテキスト1',
                        subText: 'サブテキスト1',
                        tileColor: 'rgba(0, 37, 92, 0.1)',
                        shadowColor: 'rgb(0 0 0 / 0.5)'
                    },
                    {
                        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/robot.jpg',
                        alt: '説明1',
                        mainText: 'メインテキスト1',
                        subText: 'サブテキスト1',
                        tileColor: 'rgba(0, 37, 92, 0.1)',
                        shadowColor: 'rgb(0 0 0 / 0.5)'
                    },
                    // 他の画像オブジェクト...
                ]"></Carousel_2>
        </section>
<!-- 
        <section class="my-24 mx-4">
            <div class="text-center">3枚パターン</div>
            <div class="flex justify-center items-center">
                <Carousel_3></Carousel_3>
            </div>
        </section>

        <section class="my-24 mx-4">
            <div class="text-center">8枚パターン</div>
            <div class="flex justify-center items-center">
                <Carousel_8></Carousel_8>
            </div>
        </section> -->
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'double-column-sidebar'
})
import Carousel_6 from '~/components/Carousel_6.vue'
import Carousel_2 from '~/components/Carousel_2.vue'
// import Carousel_3 from '~/components/Carousel_3.vue'
// import Carousel_8 from '~/components/Carousel_8.vue'
</script>

<style scoped></style>