<template>
    <div>
        <!-- トップセクション -->
        <section class="mb-12 sm:mb-24 flex bg-cover bg-[url('/images/recruit/message/001.png')]">
            <!-- 左側の装飾エリア -->
            <div class="basis-1/3 h-auto z-10 bg-custom-deepBlue"
                style="clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%)">
            </div>
            <!-- 右側のテキストエリア -->
            <div class="flex flex-col grow">
                <h1 id="recruit-message01" class="linkScroll self-end mx-8 text-2xl sm:text-4xl font-bold text-white">
                    採用メッセージ
                </h1>
                <p
                    class="pl-28 pr-4 -ml-28 mt-12 text-center mb-4 py-2 text-base md:text-lg font-bold text-white bg-custom-blue/70">
                    皆様とお会い出来る事を<br class="inline-block md:hidden" />楽しみにしております。</p>
            </div>
        </section>

        <!-- 採用メッセージセクション -->
        <section class="mb-12 sm:mb-48 py-4 px-4">
            <!-- ガラス効果のカード -->
            <BlurGlassCard class="mb-0 sm:-mb-28 mx-0 sm:mx-4 py-4">
                <!-- セクションタイトル -->
                <h2 class="px-8 w-fit text-white bg-custom-deepBlue text-2xl font-bold leading-loose">はじめの一歩</h2>
                <div class="flex flex-col sm:flex-row">
                    <!-- メッセージテキスト -->
                    <p
                        class="order-2 sm:order-1 w-full sm:w-1/2 p-4 text-balance text-sm sm:text-base font-bold sm:leading-7 leading-7">
                        文系大学出身、PG志望。他業界からの転職、IT知識ほとんどなし。ベイルではじめの一歩を踏み出したそんな彼らも、入社5年後にはSE・PLとして第一線へ。あなたは5年後の姿、見えてますか？
                    </p>
                    <!-- 代表取締役社長の写真と名前 -->
                    <section class="mb-0 mt-4 sm:-mt-28 order-1 sm:order-2 grow flex flex-col">
                        <div class="w-full self-end">
                            <img class="w-full object-cover" src="/images/recruit/message/002.png" />
                            <div class="my-1 text-center text-xs sm:text-base font-bold">代表取締役社長 安部 功</div>
                        </div>
                    </section>
                </div>
                <!-- メッセージ詳細 -->
                <section>
                    <!-- デスクトップ表示用メッセージ -->
                    <div class="hidden sm:inline-block">
                        <div class="mb-1 px-4 w-fit text-white bg-custom-deepBlue text-xl font-bold leading-loose">
                            人を育てるのに一番必要なのは「仕事が楽しい」・「やりがいある」
                        </div>
                        <div class="mb-1 px-4 w-fit text-white bg-custom-deepBlue text-xl font-bold leading-loose">
                            こういったことだと考えています。
                        </div>
                    </div>
                    <!-- モバイル表示用メッセージ -->
                    <div class="inline-block sm:hidden">
                        <div class="mb-1 px-4 w-fit text-white bg-custom-deepBlue text-xs font-bold leading-loose">
                            人を育てるのに一番必要なのは
                        </div>
                        <div class="mb-1 px-4 w-fit text-white bg-custom-deepBlue text-xs font-bold leading-loose">
                            「仕事が楽しい」・「やりがいある」
                        </div>
                        <div class="mb-1 px-4 w-fit text-white bg-custom-deepBlue text-xs font-bold leading-loose">
                            こういったことだと考えています。
                        </div>
                    </div>
                    <!-- メッセージ詳細テキスト -->
                    <p class="p-4 text-balance text-xs sm:text-base font-bold sm:leading-7 leading-5">
                        人はみな一人ひとり違います。ですから「仕事が楽しい」・「やりがいある」と感じてもらうためには、それぞれ個々に合った作業をしてもらうのが一番近道なのです。IT業界は様々な作業内容・作業環境があります。ですからベイルでは社員一人ひとりの個性に合ったスキルプランを日々考え実施しています。社員一人ひとりの小さな成長が、会社を大きく成長させる原動力になる。こう考えています。
                    </p>
                </section>
                <!-- メッセージ詳細 -->
                <section>
                    <!-- デスクトップ表示用メッセージ -->
                    <div class="hidden sm:inline-block">
                        <div class="mb-1 px-4 w-fit text-white bg-custom-deepBlue text-xl font-bold leading-loose">
                            ひとりひとりが提案や試行錯誤を重ね成長し、</div>
                        <div class="mb-1 px-4 w-fit text-white bg-custom-deepBlue text-xl font-bold leading-loose">
                            より良い人生を送り
                            会社が発展してゆく為にVaileは存在しています。</div>
                    </div>
                    <!-- モバイル表示用メッセージ -->
                    <div class="inline-block sm:hidden">
                        <div class="mb-1 px-4 w-fit text-white bg-custom-deepBlue text-xs font-bold leading-loose">
                            ひとりひとりが提案や試行錯誤を重ね成長し、</div>
                        <div class="mb-1 px-4 w-fit text-white bg-custom-deepBlue text-xs font-bold leading-loose">
                            より良い人生を送り
                            会社が発展してゆく為に</div>
                        <div class="mb-1 px-4 w-fit text-white bg-custom-deepBlue text-xs font-bold leading-loose">
                            Vaileは存在しています。
                        </div>
                    </div>
                    <!-- メッセージ詳細テキスト -->
                    <p class="p-4 text-balance text-xs sm:text-base font-bold sm:leading-7 leading-5">
                        自分の人生については自分で考える。そんな当たり前の事がやっと認識されはじめています。個人の成長が会社をのばします。会社とは自分の仕事と人生に誇りとやりがいを持ち、仕事を続けることにより、ひとりひとりの人間が成長してゆく為の器だとVaileは考えています。
                    </p>
                </section>
            </BlurGlassCard>
        </section>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'double-column-sidebar'
})
import BlurGlassCard from '~/components/BlurGlassCard.vue'
</script>

<style scoped></style>
