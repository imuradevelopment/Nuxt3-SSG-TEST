<template>
    <section class="flex flex-col bg-cover" style="
                background-image: url(/images/recruit/index/001.png);
            ">
        <h1 id="recruit01" class="self-end m-4 text-4xl font-bold text-white">採用情報</h1>
        <div class="self-end mr-10 text-lg font-bold text-white">Recruit</div>
        <p class="mt-2 text-center mb-4 leading-10 text-lg font-bold text-white bg-custom-lightBlue">自身の成長が選択肢を拡げ、影響を与える</p>
    </section>

    <section class="h-24 p-4 flex justify-end items-center">
        <CustomArrowButton arrowType="transition" to="/recruit/feature"><template #buttonText>
                <EditPen class="h-6 w-6 inline" />ベイルの特徴
            </template></CustomArrowButton>
    </section>

    <!-- <section class="bg-gray-200 grid grid-rows-3 grid-cols-12 auto-rows-min">
        <div class="order-1 md:order-none col-span-12 row-span-1 md:col-span-6 md:row-span-1">
            <h2 id="recruit02" class="px-4 text-4xl leading-loose font-bold text-custom-deepBlue">採用メッセージ</h2>
        </div>
        <div class="order-2 md:order-none w-full col-span-12 row-span-1 md:col-span-6 md:row-span-3">
            <NuxtImg src="/images/recruit/index/002.png" fit="cover" width="100vw md:560" alt="代表取締役社長のイメージ"></NuxtImg>
        </div>
        <div class="order-3 md:order-none col-span-12 row-span-1 md:col-span-6 md:row-span-2">
            <p class="px-4 font-bold break-keep">
                代表取締役社長 安部 功<br />
                <br />
                人を育てるのに一番必要なのは<br class="hidden md:inline-block" />「仕事が楽しい」「やりがいがある」と感じる事だと考えます
            </p>
        </div>
    </section> -->

    <!-- <section class="bg-gray-200 flex flex-col md:flex-row">
            <div class="order-1 md:order-0 flex-col md:flex-row">
                <h2 id="recruit02" class="px-4 text-4xl leading-loose font-bold text-custom-deepBlue">採用メッセージ</h2>
            </div>
            <div class="order-3 md:order-0 flex-col md:flex-row">
                <p class="px-4 font-bold break-keep">
                    代表取締役社長 安部 功<br />
                    <br />
                    人を育てるのに一番必要なのは<br class="hidden md:inline-block" />「仕事が楽しい」「やりがいがある」と感じる事だと考えます
                </p>
            </div>
            <div class="order-2 md:order-0 flex-col md:flex-row">
                <NuxtImg src="/images/recruit/index/002.png" fit="cover" sizes="100vw md:560px" alt="代表取締役社長のイメージ"></NuxtImg>
            </div>
        </section> -->

    <!-- <section class="bg-gray-200 flex flex-col md:flex-row md:justify-evenly">
        <div class="flex flex-col md:flex-row">
          <div class="flex flex-col flex-1 order-1 md:order-none">
            <div class="h-auto">
                <h2 id="recruit02" class="text-4xl leading-loose font-bold text-custom-deepBlue">採用メッセージ</h2>
            </div>
            <div class="h-auto hidden md:inline-block">
                        <p class="px-4 font-bold break-keep">
                            代表取締役社長 安部 功<br />
                            <br />
                            人を育てるのに一番必要なのは<br class="hidden md:inline-block" />「仕事が楽しい」「やりがいがある」と感じる事だと考えます
                        </p>
                        <div class="mb-2 mt-2">
                            <CustomArrowButton arrowType="transition" to="/recruit/message"></CustomArrowButton>
                        </div>
            </div>
          </div>
          <div class="flex-1 order-2 md:order-none h-auto">
            <NuxtImg class="hidden md:inline-block" src="/images/recruit/index/002.png" fit="cover" width="560px" alt="代表取締役社長のイメージ"></NuxtImg>
            <NuxtImg class="inline-block md:hidden" src="/images/recruit/index/002.png" fit="cover" width="768px" alt="代表取締役社長のイメージ"></NuxtImg>
          </div>
          <div class="order-3 md:order-none p-4 h-auto inline-block md:hidden">
                        <p class="px-4 font-bold break-keep">
                            代表取締役社長 安部 功<br />
                            <br />
                            人を育てるのに一番必要なのは<br class="hidden md:inline-block" />「仕事が楽しい」「やりがいがある」と感じる事だと考えます
                        </p>
                        <div class="m-4">
                            <CustomArrowButton arrowType="transition" to="/recruit/message"></CustomArrowButton>
                        </div>
          </div>
        </div>
    </section> -->

    <section class="bg-gray-200 flex flex-col md2:flex-row md2:justify-evenly">
        <div class="flex flex-col md2:flex-row">
            <div class="flex flex-col flex-1 order-1 md2:order-none">
                <div class="h-auto">
                    <h2 id="recruit02" class="ml-4 text-4xl leading-loose font-bold text-custom-deepBlue">採用メッセージ</h2>
                </div>
                <div class="h-auto hidden md2:inline-block">
                    <p class="px-4 font-bold break-keep">
                        代表取締役社長 安部 功<br />
                        <br />
                        人を育てるのに一番必要なのは<br class="hidden md2:inline-block" />「仕事が楽しい」「やりがいがある」と感じる事だと考えます。
                    </p>
                    <div class="mb-2 mt-2">
                        <CustomArrowButton arrowType="transition" to="/recruit/message"></CustomArrowButton>
                    </div>
                </div>
            </div>
            <div class="flex-1 order-2 md2:order-none h-auto">
                <NuxtImg class="hidden md2:inline-block" src="/images/recruit/index/002.png" fit="cover" width="560px"
                    alt="代表取締役社長のイメージ"></NuxtImg>
                <NuxtImg class="inline-block md2:hidden" src="/images/recruit/index/002.png" fit="cover" width="768px"
                    alt="代表取締役社長のイメージ"></NuxtImg>
            </div>
            <div class="order-3 md2:order-none p-4 h-auto inline-block md2:hidden">
                <p class="px-4 font-bold break-keep">
                    代表取締役社長 安部 功<br />
                    <br />
                    人を育てるのに一番必要なのは<br class="hidden md2:inline-block" />「仕事が楽しい」「やりがいがある」と感じる事だと考えます。
                </p>
                <div class="m-4">
                    <CustomArrowButton arrowType="transition" to="/recruit/message"></CustomArrowButton>
                </div>
            </div>
        </div>
    </section>

    <section class="h-48 mt-24 flex w-full bg-cover" style="
        background-image: url(/images/recruit/index/003.png);
    ">
        <div class="basis-1/3 h-full z-10 bg-custom-deepBlue" style="clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%);">
        </div>
        <div class="flex flex-col grow">
            <h2 id="recruit03" class="self-end text-white px-4 text-4xl leading-loose font-bold min-w-fit">ベイルの特徴</h2>
            <div class="grow self-end px-4 mt-8">
                <CustomArrowButton arrowType="transition" color-type="yellow" to="/recruit/feature"></CustomArrowButton>
            </div>
        </div>
    </section>

    <section class="mt-24 w-fit ml-auto mr-auto flex justify-items-stretch">
        <div class="flex flex-col gap-y-8">
            <h2 id="recruit04" class="z-20 self-end w-fit min-w-fit pr-20 md:pr-36 -mr-12 text-white px-4 text-4xl leading-loose font-bold whitespace-nowrap bg-custom-deepBlue">研修制度</h2>
            <p class="z-20 self-end md:mr-4 font-bold text-sm md:text-base">成長に繋がるトレーニング制度</p>
            <div class="z-20 ml-8 md:ml-0 md:self-end md:mr-28">
                <CustomArrowButton arrowType="transition" to="/recruit/induction"></CustomArrowButton>
            </div>
        </div>
        <div class="grow">
            <div class="pr-12">
                <div class="z-0 relative -top-8 -right-12 w-[231.5px] h-32 md:w-[463px] md:h-64 bg-custom-deepBlue">
                    <NuxtImg class="z-10 relative top-8 right-8" src="/images/recruit/index/004.png" fit="inset" sizes="231 463" alt="研修のイメージ"></NuxtImg>
                </div>
            </div>
        </div>
    </section>
    <!-- <NuxtImg class="inline-block md:hidden z-10 relative -top-64 h-64" src="/images/recruit/index/004.png" fit="cover" width="231.5px" alt="研修のイメージ"></NuxtImg> -->
    <!-- <img class="z-10 relative -top-64 bg-cover h-64" src="https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYTWduM4_jBFVIzmFWC9txP6MaQBLbXuOp78azaKYT9r2q1ZHBMdhjMDJIT_gU9Y_yF7FZ4RVETvt9Vpu42u2tntShkd=w2190-h1921"></img> -->

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
import {
    EditPen,
} from '@element-plus/icons-vue'
</script>

<style scoped></style>