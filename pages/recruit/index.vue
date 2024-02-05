<template>
    <section class="flex flex-col bg-cover bg-[url('/images/recruit/index/001.png')]">
        <h1 id="recruit01" class="linkScroll self-end m-4 text-4xl font-bold text-white">採用情報</h1>
        <div class="self-end mr-10 text-lg font-bold text-white">Recruit</div>
        <p class="mt-12 text-center mb-4 leading-10 text-lg font-bold text-white bg-custom-lightBlue">自身の成長が選択肢を拡げ、影響を与える</p>
    </section>

    <section class="h-24 p-4 flex justify-end items-center">
        <CustomArrowButton arrowType="transition" to="/recruit/feature"><template #buttonText>
                <Pointer class="h-6 w-6 inline" />ベイルの特徴
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

    <!-- <section class="bg-gray-200 flex flex-col md2:flex-row md2:justify-evenly">
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
    </section> -->

        <section class="bg-custom-silver flex flex-col md:flex-row">
            <div class="flex-1 flex flex-col space-y-6 pb-4">
            <h2 id="recruit02" class="ml-4 text-4xl leading-loose font-bold text-custom-deepBlue">採用メッセージ</h2>
            <div class="md:hidden w-screen overflow-hidden">
                <img class="object-cover" src="/images/recruit/index/002_M.png" alt="採用担当者イメージ" />
            </div>
            <p class="px-4 font-bold break-keep">
                採用担当者<br />
                <br />
                人を育てるのに一番必要なのは<br class="hidden md:inline-block" />「仕事が楽しい」「やりがいがある」と感じる事だと考えます。
            </p>
            <CustomArrowButton arrowType="transition" to="/recruit/message"></CustomArrowButton>
            </div>
            <div class="md:w-1/2">
                <img class="hidden md:inline-block h-full object-cover" src="/images/recruit/index/002_D.png" alt="採用担当者イメージ" />
            </div>
        </section>

    <section class="mt-24 flex w-full bg-cover bg-[url('/images/recruit/index/003.png')]">
        <div class="hidden sm:inline-block basis-1/3 h-auto z-10 bg-custom-deepBlue" style="clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%);">
        </div>
        <div class="flex flex-col grow">
            <h2 id="recruit03" class="self-end px-4 text-4xl leading-loose font-bold min-w-fit bg-custom-lightOrange text-custom-deepBlue">ベイルの特徴</h2>
            <ul class="mt-4 w-fit list-disc self-end p-4 pl-8 mx-4 text-sm md:text-lg font-bold bg-custom-lightOrange text-custom-deepBlue">
                <li>複数の大手Sierとの直接取引</li>
                <li>未経験でも安心充実した１年間の研修制度</li>
                <li>社員の育成をじっくり促せる安定した経営基盤</li>
            </ul>

            <div class="grow self-end px-4 mt-4 mb-4">
                <CustomArrowButton arrowType="transition" color-type="yellow" to="/recruit/feature"></CustomArrowButton>
            </div>
        </div>
    </section>

    <!-- <section class="mt-32 w-fit ml-auto mr-auto flex justify-items-stretch">
        <div class="flex flex-col gap-y-4 md:gap-y-8">
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
    </section> -->

        <section class="mt-24 flex flex-row justify-stretch">
            <div class="w-1/2 flex flex-col space-y-4 md:space-y-8 relative top-8 md:top-16">
                <div class="flex flex-row">
                    <h2 id="recruit04" class="z-20 w-full self-end text-white px-4 text-4xl leading-loose font-bold whitespace-nowrap bg-custom-deepBlue">研修制度</h2>
                    <div class="z-20 leading-loose bg-custom-deepBlue w-6 md:w-12 -mr-6 md:-mr-12"></div>
                </div>
                <p class="z-20 self-start ml-4 md:mr-4 font-bold text-sm md:text-base">成長に繋がるトレーニング制度</p>
                <div class="z-20 self-start ml-4">
                    <CustomArrowButton arrowType="transition" to="/recruit/induction"></CustomArrowButton>
                </div>
            </div>
            <div class="w-1/2 overflow-hidden">
                <div class="pr-6 md:pr-12 pt-6 md:pt-12">
                    <div class="z-0 relative -top-6 md:-top-12 -right-6 md:-right-12  bg-custom-deepBlue">
                        <img class="z-10 relative top-4 md:top-8 right-4 md:right-8" src="/images/recruit/index/004.png" alt="研修のイメージ" />
                    </div>
                </div>
            </div>
        </section>
    <!-- <NuxtImg class="inline-block md:hidden z-10 relative -top-64 h-64" src="/images/recruit/index/004.png" fit="cover" width="231.5px" alt="研修のイメージ"></NuxtImg> -->
    <!-- <img class="z-10 relative -top-64 bg-cover h-64" src="https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYTWduM4_jBFVIzmFWC9txP6MaQBLbXuOp78azaKYT9r2q1ZHBMdhjMDJIT_gU9Y_yF7FZ4RVETvt9Vpu42u2tntShkd=w2190-h1921"></img> -->

    <div class="mt-24 mx-4 grid gap-4 grid-cols-1 md:grid-cols-2">
        <section class="h-64 flex flex-col gap-y-8 bg-cover bg-[url('/images/recruit/index/005.png')] items-center justify-center shadow-md">
            <h2 id="recruit05" class="text-white px-4 text-4xl leading-loose font-bold">オフィス紹介</h2>
            <p class="text-white">私たちの働くオフィスを紹介します。</p>
            <CustomArrowButton arrowType="transition" color-type="white" to="/recruit/office"></CustomArrowButton>
        </section>

        <section class="h-64 flex flex-col gap-y-8 bg-cover bg-[url('/images/recruit/index/006.png')] items-center justify-center shadow-md">
            <h2 id="recruit06" class="text-white px-4 text-4xl leading-loose font-bold">福利厚生</h2>
            <p class="text-white">ベイルの福利厚生制度。</p>
            <CustomArrowButton arrowType="transition" color-type="white" to="/recruit/welfare"></CustomArrowButton>
        </section>
        <section class="h-64 flex flex-col gap-y-8 bg-cover bg-[url('/images/recruit/index/007.png')] items-center justify-center shadow-md">
            <h2 id="recruit07" class="text-white px-4 text-4xl leading-loose font-bold">各種データ</h2>
            <p class="text-white">ベイルの様々な情報。</p>
            <CustomArrowButton arrowType="transition" color-type="white" to="/recruit/data"></CustomArrowButton>
        </section>
        <section class="h-64 flex flex-col gap-y-8 bg-cover bg-[url('/images/recruit/index/008.png')] items-center justify-center shadow-md">
            <h2 id="recruit08" class="text-white px-4 text-4xl leading-loose font-bold">Ｑ＆Ａ</h2>
            <p class="text-white">よくある質問に関する回答。</p>
            <CustomArrowButton arrowType="transition" color-type="white" to="/recruit/qa"></CustomArrowButton>
        </section>
    </div>


    <section class="mt-24">
        <Slider />
    </section>

        <section class="mt-24 mb-24 h-96 md:h-64 bg-cover bg-[url('/images/recruit/index/013.png')]">
            <h2 id="recruit10" class="text-white px-4 text-4xl leading-loose font-bold w-fit ml-auto mr-auto">募集情報</h2>
            <div class="flex flex-col md:px-20 items-center md:flex-row md:justify-between">
                <div class="mt-6">
                    <CustomArrowButton arrowType="transition" color-type="white" to="/recruit/information#TEST"><template #buttonText >新卒採用情報</template></CustomArrowButton>
                </div>
                <div class="mt-6">
                    <CustomArrowButton arrowType="transition" color-type="white" to="/recruit/information#TEST"><template #buttonText >キャリア採用情報</template></CustomArrowButton>
                </div>
                <div class="mt-6">
                    <CustomArrowButton arrowType="transition" color-type="white" to="/recruit/information#TEST"><template #buttonText >契約社員採用情報</template></CustomArrowButton>
                </div>
            </div>
            <div class="flex mt-6 justify-center md:justify-end md:mr-20">
                <CustomArrowButton arrowType="transition" color-type="yellow" to="/recruit/information"><template #buttonText >ENTRY</template></CustomArrowButton>
            </div>
        </section>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'double-column-sidebar'
})
import CustomArrowButton from '~/components/CustomArrowButton.vue'
import Slider from '~/components/Slider.vue'
import {
    Pointer,
} from '@element-plus/icons-vue'
</script>

<style scoped></style>