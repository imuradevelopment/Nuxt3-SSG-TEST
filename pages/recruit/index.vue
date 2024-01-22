<template>
    <section class="flex flex-col bg-cover" style="
                background-image: url(https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYTWduM4_jBFVIzmFWC9txP6MaQBLbXuOp78azaKYT9r2q1ZHBMdhjMDJIT_gU9Y_yF7FZ4RVETvt9Vpu42u2tntShkd=w2190-h1921);
            ">
        <h1 id="recruit01" class="self-end m-4 text-4xl font-bold text-white">採用情報</h1>
        <div class="self-end mr-10 text-lg font-bold text-white">Recruit</div>
        <p class="mt-2 text-center mb-4 leading-10 text-lg font-bold text-white bg-custom-lightBlue">自身の成長が選択肢を拡げ、影響を与える</p>
    </section>
    <section class="bg-gray-100">
        <h2 id="recruit02" class="px-4 text-4xl leading-loose font-bold text-custom-deepBlue">採用メッセージ</h2>
        <p class="px-4 font-bold break-keep">
            代表取締役社長 安部 功<br />
            <br />
            人を育てるのに一番必要なのは<br class="hidden md:inline-block" />「仕事が楽しい」「やりがいがある」と感じる事だと考えます
        </p>

        <CustomArrowButton buttonTitle="外部リンク" arrowType="outer" to="https://www.google.co.jp/" />
        <CustomArrowButton buttonTitle="遷移" arrowType="transition" to="/company" />
        <CustomArrowButton buttonTitle="内部リンク" arrowType="inner" to="/" />
        <div class="p-4 bg-custom-deepBlue"><CustomArrowButton buttonTitle="内部リンク" arrowType="inner" colorType="yellow" to="/" /></div>

    </section>
    <section class="bg-gradient-to-r from-purple-500 to-pink-500">
        <h2 id="recruit03">ベイルの特徴</h2>
    </section>
    <section class="bg-gradient-to-r from-cyan-500 to-blue-500">
        <h2 id="recruit04">研修制度</h2>
        <p>成長に繋がるトレーニング制度</p>
    </section>
    <section class="bg-gradient-to-r from-purple-500 to-pink-500">
        <h2 id="recruit05">オフィス紹介</h2>
        <p>私たちの働くオフィスを紹介します。</p>
    </section>
    <section class="bg-gradient-to-r from-cyan-500 to-blue-500">
        <h2 id="recruit06">福利厚生</h2>
        <p>ベイルの福利厚生制度。</p>
    </section>
    <section class="bg-gradient-to-r from-purple-500 to-pink-500">
        <h2 id="recruit07">各種データ</h2>
        <p>ベイルの様々な情報。</p>
    </section>
    <section class="bg-gradient-to-r from-cyan-500 to-blue-500">
        <h2 id="recruit08">Ｑ＆Ａ</h2>
        <p>よくある質問に関する回答。</p>
    </section>
    <section class="bg-gradient-to-r from-purple-500 to-pink-500">
        <h2 id="recruit09">社員紹介</h2>
    </section>
    <section class="bg-gradient-to-r from-cyan-500 to-blue-500">
        <h2 id="recruit10">募集情報</h2>
    </section>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'double-column-sidebar'
})
import CustomArrowButton from '~/components/CustomArrowButton.vue'
</script>

<style scoped></style>