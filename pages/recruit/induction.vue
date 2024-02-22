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
        <section class="mt-12">
            <h2 id="recruit-induction02" class="px-8 w-fit text-white bg-custom-deepBlue text-4xl font-bold leading-loose">研修制度</h2>
            <div class="flex flex-col justify-center items-center">
                <div
                    class="mt-4 text-2xl font-bold underline decoration-wavy decoration-2 decoration-custom-deepBlue underline-offset-8">
                    未経験でも安心。充実した研修。</div>
                <div class="mt-4 text-sm sm:text-base font-bold text-center">
                    ベイルでは文系・IT未経験でも確実にエンジニアとして<br />成長できる環境を用意しており、入社後の1年間<br />様々な研修・OJTで、社会人・技術者としての基礎を築きます。
                </div>

                <div class="mt-4 text-custom-deepBlue text-2xl font-bold">研修プログラム</div>
                <div class="text-custom-deepBlue text-sm font-bold">※前年度の実績で研修内容は毎年変わります</div>
            </div>
            <div class="m-4">
                <Timeline :items="timeline" />
            </div>
        </section>
        <section class="mt-12">
            <div class="m-4">
                <h2 id="recruit-induction03" class="px-8 w-fit text-white bg-custom-deepBlue text-4xl font-bold leading-loose">教育システム</h2>
            </div>
        </section>
        <section class="mt-12">
            <h2 id="recruit-induction0" class="px-8 w-fit text-white bg-custom-deepBlue text-4xl font-bold leading-loose">キャリアパス</h2>
            <div class="mx-4">
                <div class="flex flex-col justify-center items-center">
                    <div
                        class="mt-4 text-2xl font-bold underline decoration-wavy decoration-2 decoration-custom-deepBlue underline-offset-8">
                        目標を見つけて ステップアップ !</div>
                    <div class="mt-4 text-sm sm:text-base font-bold text-center">
                        途中でやりたい事が変わっても<br />積み上げた経験を活かす事で 唯一無二のエンジニアに。
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <NuxtImg class="hidden md:inline-block" width="1087" src="/images/recruit/induction/005.png" />
                    <NuxtImg class="inline-block md:hidden" width="343" src="/images/recruit/induction/006.png" />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'double-column-sidebar'
})
import CareerPath from '~/components/CareerPath.vue'
import Timeline from '~/components/Timeline.vue'
import { ref } from 'vue'
// タイムラインのデータを定義
const timeline = ref([
    {
        month: '4月',
        text: '<div class="font-bold leading-8">プログラミング外部研修<br class="inline-block sm:hidden" />（4ヵ月）</div><div class="text-sm font-bold tracking-wide leading-6">4月から7月末までの4か月間、Javaを中心としたプログラミングの基礎を学習します。Java以外にも、HTML、CSS、データベースについて学習します。研修の最後には実際のプロジェクトのようなチーム開発も行います。</div>'
    },
    {
        month: '8月',
        text: '<div class="font-bold leading-8">インターン講師担当</div><div class="text-sm font-bold tracking-wide leading-6">株式会社ベイルのインターンシップに講師として参加し、研修で得た技術・知識をアウトプットしていただきます。</div>',
        // image: '/images/recruit/induction/002.png',
    },
    {
        month: '9月',
        image: '/images/recruit/induction/002.png',
    },
    {
        month: '10月',
        text: '<div class="font-bold leading-8">プログラミング内部研修<br class="inline-block sm:hidden" />（約2ヵ月）</div><div class="text-sm font-bold tracking-wide leading-6">プログラミング外部研修の復習やグループでのプログラム開発など様々な課題に取り組みながら、Java、フレームワークについて理解を深め、プログラミング技術を定着化させます。</div>'
    },
    {
        month: '11月',
        text: '<div class="font-bold leading-8">AWS外部研修<br class="inline-block sm:hidden" />（1ヵ月）</div><div class="text-sm font-bold tracking-wide leading-6">1か月間、AWSの基礎を学び、認定資格の取得を目指します。クラウド化が進む今のIT業界で、AWS(Amazon Web Services)の知識は必ず必要になります。</div>'
    },
    {
        month: '12月',
        text: '<div class="font-bold leading-8">OJT参画</div><div class="text-sm font-bold tracking-wide leading-6">社内プロジェクト、もしくはお客様先のプロジェクトにOJTとして参画し、先輩社員の下で実務トレーニングになります。</div>',
        image: '/images/recruit/induction/003.png',
    },
    {
        month: '3月',
        text: '<div class="font-bold leading-8">プロジェクトアサイン</div><div class="text-sm font-bold tracking-wide leading-6">1人の技術者としてプロジェクトに参画し、作業を行います。</div>'
    }
])
</script>

<style scoped></style>