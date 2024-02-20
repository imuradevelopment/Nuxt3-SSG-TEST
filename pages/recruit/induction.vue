<template>
    <div>
        <section class="flex bg-cover bg-[url('/images/recruit/induction/001.png')]">
            <div class="basis-1/3 h-auto z-10 bg-custom-deepBlue" style="clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%)">
            </div>
            <div class="flex flex-col grow">
                <h1 id="recruit-induction01"
                    class="linkScroll self-end mt-28 mb-4 sm:mt-36 sm:mb-8 mx-8 text-2xl sm:text-4xl font-bold text-white">
                    研修制度
                </h1>
            </div>
        </section>
        <!-- <section>
            <h2 class="pl-8 pr-4 w-fit text-white bg-custom-deepBlue text-2xl font-bold leading-loose">研修制度</h2>
            <div class="flex flex-col justify-center items-center">
                <p>
                <div>未経験でも安心。充実した研修制度。</div>
                <div class="break-keep">
                    ベイルでは文系・IT未経験でも確実にエンジニアとして成長できる環境を用意しており、入社後の1年間 様々な研修・OJTで、社会人・技術者としての 基礎 を築きます。
                </div>
                </p>

                <div class="text-custom-deepBlue text-xl font-bold leading-loose">研修プログラム</div>
                <div class="text-custom-deepBlue text-xs">※前年度の実績で研修内容は毎年変わります</div>
                <div class="m-auto text-left w-fit">
                    <Timeline />
                </div>
            </div>
        </section> -->
            <section>
                <h2 class="pl-8 pr-4 w-fit text-white bg-custom-deepBlue text-2xl font-bold leading-loose">研修制度</h2>
                <div class="flex flex-col justify-center items-center">
                    <p>
                    <div>未経験でも安心。充実した研修制度。</div>
                    <div class="break-keep">
                        ベイルでは文系・IT未経験でも確実にエンジニアとして成長できる環境を用意しており、入社後の1年間 様々な研修・OJTで、社会人・技術者としての 基礎 を築きます。
                    </div>
                    </p>

                    <div class="text-custom-deepBlue text-xl font-bold leading-loose">研修プログラム</div>
                    <div class="text-custom-deepBlue text-xs">※前年度の実績で研修内容は毎年変わります</div>
                </div>
                <div class="m-4">
                    <Timeline2 :items="timeline" />
                </div>
            </section>
        <section>
            <CareerPath />
        </section>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'double-column-sidebar'
})
import CareerPath from '~/components/CareerPath.vue'
// import Timeline from '~/components/Timeline.vue'
import Timeline2 from '~/components/Timeline2.vue'
import { ref } from 'vue'
// タイムラインのデータを定義
const timeline = ref([
    {
        month: '4月',
        text: 'プログラミング初級講座（4日間）\n4日間でJava基本文法やOOP概念、Javaを使ったプログラムの作成を学びます。上級者向けのHTML、CSS、データベースについても学びます。実際の現場には欠かせないプロジェクトの進め方やチーム開発に役立ちます。'
    },
    {
        month: '8月',
        text: 'インターン参加報告会\n社会人として働くイメージがつかめて自己成長したと感じた。貴重なアドバイスをいただきました。'
    },
    {
        month: '9月',
        image: '/images/recruit/induction/002.png',
        text: '写真ブレソフィア社員（※2名）'
    },
    {
        month: '10月',
        text: 'プログラミング中級講座（※2名）\nプログラミング中級者向けの内容でこのコースは開発現場で使える技術と知識をしっかり身に着ける為、Java、システム設計について深く学ぶ。プログラミング技術者認定試験対策も行います。'
    },
    {
        month: '11月',
        image: '/images/recruit/induction/003.png',
        text: 'AWS勉強会（1カ月）\n1カ月間、AWSの基礎を学び、認定資格取得を目指します'
    },
    {
        month: '12月',
        text: '忘年会\n一年間の成果を振り返り、仲間と楽しく交流しましょう。\n飲み放題・食べ放題のビュッフェ形式です。'
    },
    {
        month: '3月',
        image: '/images/recruit/induction/004.png',
        text: '卒業式\nプログラミング初級講座の修了証書を授与します。\nおめでとうございます！'
    }
])
</script>

<style scoped></style>