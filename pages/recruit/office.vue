<template>
    <div>
        <!-- オフィス紹介セクション -->
        <section class="mb-12 md:mb-24 flex bg-cover bg-[url('/images/recruit/office/001.png')]">
            <!-- セクションの左側のスタイルを設定 -->
            <div class="basis-1/3 h-auto z-10 bg-custom-deepBlue"
                style="clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%)">
            </div>
            <!-- セクションの右側のコンテンツ -->
            <div class="flex flex-col grow">
                <!-- オフィス紹介のタイトル -->
                <h1 id="recruit-office01" class="linkScroll self-end mx-8 text-2xl sm:text-4xl font-bold text-white">
                    オフィス紹介
                </h1>
                <!-- オフィス紹介の説明文 -->
                <p
                    class="pl-28 pr-4 -ml-28 mt-12 text-center mb-4 py-2 text-base md:text-lg font-bold text-white bg-custom-blue/70">
                    少しイメージ出来るように<br class="inline-block md:hidden" />中目黒本社ビルのオフィスを紹介します。
                </p>
            </div>
        </section>
        <!-- オフィス内部の各部屋やエリアの紹介セクション -->
        <section class="mb-12 md:mb-24 ">
            <div class="mx-4 flex justify-center items-center">
                <div class="max-auto">
                    <!-- オフィス内部の写真を表示するカルーセルコンポーネント -->
                    <Carousel :pics="[
                        {
                            src: '/images/recruit/office/002.png',
                            alt: 'オフィス外観',
                            mainText: `<h3 class='px-4 text-2xl font-bold leading-loose'>外観\（7階\～9階\）</h3>`,
                            subText: `<p class='text-sm sm:text-base font-bold sm:leading-7 leading-7'>山手通りに面した本社オフィス。<br />日比谷線/東急東横線「中目黒駅」から山手通り沿いを5分程歩くと見えてくる、<br class='hidden md:inline-block' />1階にお寿司屋さん(築地すし好)が入っているビルです。</p>`,
                            tileColor: 'rgba(0, 37, 92, 0.1)',
                            shadowColor: 'rgb(0 0 0 / 0.5)',
                            bgPosition: 'bottom center'
                        },
                        {
                            src: '/images/recruit/office/003.png',
                            alt: '7階 受付',
                            mainText: `<h3 class='px-4 text-2xl font-bold leading-loose'>受付（7階）</h3>`,
                            subText: `<p class=' text-sm sm:text-base font-bold sm:leading-7 leading-7'>7階右手に受付があります。<br />備え付けの受付電話でご用件をお伝え下さい。</p>`,
                            tileColor: 'rgba(0, 37, 92, 0.1)',
                            shadowColor: 'rgb(0 0 0 / 0.5)',
                            bgPosition: 'center'
                        },
                        {
                            src: '/images/recruit/office/005.png',
                            alt: '8階 開発ルーム',
                            mainText: `<h3 class='px-4 text-2xl font-bold leading-loose'>開発ルーム（8階）</h3>`,
                            subText: `<p class=' text-sm sm:text-base font-bold sm:leading-7 leading-7'>8階は、主に開発フロアとなっており、<br class='hidden md:inline-block' />受託開発案件などを本社開発メンバーで行っております。</p>`,
                            tileColor: 'rgba(0, 37, 92, 0.1)',
                            shadowColor: 'rgb(0 0 0 / 0.5)',
                            bgPosition: 'center'
                        },
                        {
                            src: '/images/recruit/office/006.png',
                            alt: '8階 ミーティングスペース',
                            mainText: `<h3 class='px-4 text-2xl font-bold leading-loose'>ミーティングスペース（8階）</h3>`,
                            subText: `<p class=' text-sm sm:text-base font-bold sm:leading-7 leading-7'>8階には開発フロアのほかにミーティングスペースがあり、<br class='hidden md:inline-block' />プロジェクトの打ち合わせや面談など用途に応じて使用出来るエリアを設けています。</p>`,
                            tileColor: 'rgba(0, 37, 92, 0.1)',
                            shadowColor: 'rgb(0 0 0 / 0.5)',
                            bgPosition: 'center'
                        },
                        {
                            src: '/images/recruit/office/007.png',
                            alt: '8階 グリコボックス',
                            mainText: `<h3 class='px-4 text-2xl font-bold leading-loose'>グリコボックス（8階）</h3>`,
                            subText: `<p class=' text-sm sm:text-base font-bold sm:leading-7 leading-7'>8階にはグリコボックスが設置されていて、200円で好きなお菓子が食べれます。<br class='hidden md:inline-block' />小腹がすいた時や、リフレッシュの際に利用されます。</p>`,
                            tileColor: 'rgba(0, 37, 92, 0.1)',
                            shadowColor: 'rgb(0 0 0 / 0.5)',
                            bgPosition: 'center'
                        },
                        {
                            src: '/images/recruit/office/004.png',
                            alt: '9階 セミナールーム',
                            mainText: `<h3 class='px-4 text-2xl font-bold leading-loose'>セミナールーム（9階）</h3>`,
                            subText: `<p class=' text-sm sm:text-base font-bold sm:leading-7 leading-7'>9階は、1つのフロアすべてがセミナールームになっており、<br class='hidden md:inline-block' />会社説明会や大人数会議の際に使用しています。</p>`,
                            tileColor: 'rgba(0, 37, 92, 0.1)',
                            shadowColor: 'rgb(0 0 0 / 0.5)',
                            bgPosition: 'center'
                        },
                        {
                            src: '/images/recruit/office/008.png',
                            alt: '職場風景１',
                            mainText: `<h3 class='px-4 text-2xl font-bold leading-loose'>職場風景１</h3>`,
                            subText: `<p class=' text-sm sm:text-base font-bold sm:leading-7 leading-7'>実際の職場環境の雰囲気。<br class='' />エンジニアに人気のBaronチェアやサブディスプレイ等完備。</p>`,
                            tileColor: 'rgba(0, 37, 92, 0.1)',
                            shadowColor: 'rgb(0 0 0 / 0.5)',
                            bgPosition: 'right top'
                        },
                        {
                            src: '/images/recruit/office/009.png',
                            alt: '職場風景２',
                            mainText: `<h3 class='px-4 text-2xl font-bold leading-loose'>職場風景２</h3>`,
                            subText: `<p class=' text-sm sm:text-base font-bold sm:leading-7 leading-7'>実際の職場環境の雰囲気。<br class='' />エンジニアに人気のBaronチェアやサブディスプレイ等完備。</p>`,
                            tileColor: 'rgba(0, 37, 92, 0.1)',
                            shadowColor: 'rgb(0 0 0 / 0.5)',
                            bgPosition: 'center'
                        },
                    ]"></Carousel>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'double-column-sidebar'
})
import Carousel from '~/components/Carousel.vue'
</script>

<style scoped></style>
