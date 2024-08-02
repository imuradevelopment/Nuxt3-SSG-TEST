<template>
    <!-- 採用情報セクションの背景画像とテキストの配置 -->
    <section class="flex flex-col bg-cover bg-[url('/images/recruit/index/001.png')]">
        <!-- 見出し: 採用情報 -->
        <h1 id="recruit01" class="linkScroll self-end m-4 text-4xl font-bold text-white">採用情報</h1>
        <div class="self-end mr-10 text-lg font-bold text-white">Recruit</div>
        <p class="mt-12 text-center mb-4 py-2 text-base md:text-lg font-bold text-white bg-custom-blue/70">
            自身の成長が選択肢を拡げ、影響を与える
        </p>
    </section>

    <!-- ベイルの特徴セクションへの遷移ボタン -->
    <section class="h-24 p-4 flex justify-end items-center">
        <CustomArrowButton color-type="blue-bg-white" arrowType="transition" to="/recruit/feature">
            <template #buttonText>
                <Pointer class="h-6 w-6 inline" />ベイルの特徴
            </template>
        </CustomArrowButton>
    </section>

    <!-- 採用メッセージセクション -->
    <section class="flex flex-col md:flex-row">
        <div class="flex-1 flex flex-col space-y-6 pb-4 bg-gradient-to-r from-gray-200 to-custom-silver">
            <h2 id="recruit02" class="ml-4 text-4xl leading-loose font-bold text-custom-deepBlue">採用メッセージ</h2>
            <div class="md:hidden w-screen overflow-hidden">
                <img class="object-cover" src="/images/recruit/index/002_M.png" alt="採用担当者イメージ" />
            </div>
            <p class="px-4 font-bold break-keep">
                ベイル採用担当者<br />
                <br />
                人を育てるのに一番必要なのは<br class="hidden md:inline-block" />「仕事が楽しい」「やりがいがある」と感じる事だと考えます。
            </p>
            <CustomArrowButton class="ml-4" arrowType="transition" to="/recruit/message"></CustomArrowButton>
        </div>
        <div class="md:w-1/2">
            <img class="hidden md:inline-block h-full object-cover" src="/images/recruit/index/002_D.png"
                alt="採用担当者イメージ" />
        </div>
    </section>

    <!-- ベイルの特徴セクション -->
    <section class="mt-24 flex w-full bg-cover bg-[url('/images/recruit/index/003.png')]">
        <div class="hidden sm:inline-block basis-1/3 h-auto z-10 bg-custom-deepBlue"
            style="clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%);">
        </div>
        <div class="flex flex-col grow">
            <h2 id="recruit03"
                class="self-end px-4 text-4xl leading-loose font-bold min-w-fit bg-custom-lightOrange text-custom-deepBlue">
                ベイルの特徴
            </h2>
            <ul
                class="mt-4 w-fit list-disc self-end p-4 pl-8 mx-4 text-sm md:text-lg font-bold bg-custom-lightOrange text-custom-deepBlue">
                <li>複数の大手Sierとの直接取引</li>
                <li>未経験でも安心充実した１年間の研修制度</li>
                <li>社員の育成をじっくり促せる安定した経営基盤</li>
            </ul>
            <div class="grow self-end px-4 mt-4 mb-4">
                <CustomArrowButton arrowType="transition" color-type="yellow" to="/recruit/feature"></CustomArrowButton>
            </div>
        </div>
    </section>

    <!-- 研修制度セクション -->
    <section class="mt-24 flex flex-row justify-stretch">
        <div class="w-1/2 flex flex-col space-y-4 md:space-y-8 relative top-8 md:top-16">
            <div class="flex flex-row">
                <h2 id="recruit04"
                    class="z-20 w-full self-end text-white px-4 text-4xl leading-loose font-bold whitespace-nowrap bg-custom-deepBlue">
                    研修制度
                </h2>
                <div class="z-20 leading-loose bg-custom-deepBlue w-6 md:w-12 -mr-6 md:-mr-12"></div>
            </div>
            <p class="z-20 self-start ml-4 md:mr-4 font-bold text-sm md:text-base">成長に繋がるトレーニング制度</p>
            <div class="z-20 self-start ml-4">
                <CustomArrowButton color-type="blue-bg-white" arrowType="transition" to="/recruit/induction">
                </CustomArrowButton>
            </div>
        </div>
        <div class="w-1/2 overflow-hidden">
            <div class="pr-6 md:pr-12 pt-6 md:pt-12">
                <div class="z-0 relative -top-6 md:-top-12 -right-6 md:-right-12 bg-custom-deepBlue">
                    <img class="z-10 relative top-4 md:top-8 right-4 md:right-8" src="/images/recruit/index/004.png"
                        alt="研修のイメージ" />
                </div>
            </div>
        </div>
    </section>

    <!-- オフィス紹介と福利厚生のセクション -->
    <div class="mt-24 mx-4 grid gap-4 grid-cols-1 md:grid-cols-2">
        <section
            class="h-64 flex flex-col gap-y-8 bg-cover bg-[url('/images/recruit/index/005.png')] items-center justify-center shadow-md">
            <h2 id="recruit05" class="text-white px-4 text-4xl leading-loose font-bold">オフィス紹介</h2>
            <p class="text-white">私たちの働くオフィスを紹介します。</p>
            <CustomArrowButton arrowType="transition" color-type="white" to="/recruit/office"></CustomArrowButton>
        </section>
        <section
            class="h-64 flex flex-col gap-y-8 bg-cover bg-[url('/images/recruit/index/006.png')] items-center justify-center shadow-md">
            <h2 id="recruit06" class="text-white px-4 text-4xl leading-loose font-bold">福利厚生</h2>
            <p class="text-white">ベイルの福利厚生制度。</p>
            <CustomArrowButton arrowType="transition" color-type="white" to="/recruit/welfare"></CustomArrowButton>
        </section>
        <section
            class="h-64 flex flex-col gap-y-8 bg-cover bg-[url('/images/recruit/index/007.png')] items-center justify-center shadow-md">
            <h2 id="recruit07" class="text-white px-4 text-4xl leading-loose font-bold">各種データ</h2>
            <p class="text-white">ベイルの様々な情報。</p>
            <CustomArrowButton arrowType="transition" color-type="white" to="/recruit/data"></CustomArrowButton>
        </section>
        <section
            class="h-64 flex flex-col gap-y-8 bg-cover bg-[url('/images/recruit/index/008.png')] items-center justify-center shadow-md">
            <h2 id="recruit08" class="text-white px-4 text-4xl leading-loose font-bold">Ｑ＆Ａ</h2>
            <p class="text-white">よくある質問に関する回答。</p>
            <CustomArrowButton arrowType="transition" color-type="white" to="/recruit/qa"></CustomArrowButton>
        </section>
    </div>

    <!-- 社員紹介セクション -->
    <section class="my-24">
        <BackgroundPattern>
        </BackgroundPattern>
        <div class="w-full flex flex-col">
            <h2 id="recruit09" class="pl-16 pr-8 w-fit text-white bg-custom-deepBlue text-4xl font-bold leading-loose">
                社員紹介
            </h2>
            <div class="mx-4 mt-8 mb-4 flex justify-center items-center">
                <div class="max-w-xl">
                    <Carousel :pics="[
                        {
                            src: '/images/recruit/employee/002.jpg',
                            alt: '人物写真T.I.',
                            mainText: `<div class='text-center px-4 text-2xl font-bold leading-loose min-w-[6rem]'>T.I.</div>`,
                            subText: `<div class='flex flex-col min-w-[210px]'><div class='grow text-center text-sm sm:text-base font-bold'>若手エンジニア<br>文系私立大学卒<br>2023年入社</div><a href='/recruit/employee' class='flex justify-center items-center border border-b-2 mt-2 py-1 px-4'>詳しく見る<i class='el-icon ml-2' style='font-size: 20px;'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'><path fill='currentColor' d='M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96'></path><path fill='currentColor' d='M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128M288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32m0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32'></path></svg></i></a></div>`,
                            tileColor: 'rgba(0, 37, 92, 0.1)',
                            shadowColor: 'rgb(0 0 0 / 0.5)',
                            bgPosition: 'right top'
                        },
                        {
                            src: '/images/recruit/employee/003.jpg',
                            alt: '人物写真M.F.',
                            mainText: `<div class='text-center px-4 text-2xl font-bold leading-loose min-w-[6rem]'>M.F.</div>`,
                            subText: `<div class='flex flex-col min-w-[210px]'><div class='grow text-center text-sm sm:text-base font-bold'>若手エンジニア<br>文系私立大学卒<br>2021年入社</div><a href='/recruit/employee' class='flex justify-center items-center border border-b-2 mt-2 py-1 px-4'>詳しく見る<i class='el-icon ml-2' style='font-size: 20px;'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'><path fill='currentColor' d='M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96'></path><path fill='currentColor' d='M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128M288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32m0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32'></path></svg></i></a></div>`,
                            tileColor: 'rgba(0, 37, 92, 0.1)',
                            shadowColor: 'rgb(0 0 0 / 0.5)',
                            bgPosition: 'center top'
                        },
                        {
                            src: '/images/recruit/employee/004.jpg',
                            alt: '人物写真T.H.',
                            mainText: `<div class='text-center px-4 text-2xl font-bold leading-loose min-w-[6rem]'>T.H.</div>`,
                            subText: `<div class='flex flex-col min-w-[210px]'><div class='grow text-center text-sm sm:text-base font-bold'>若手エンジニア<br>文系私立大学卒<br>2023年入社</div><a href='/recruit/employee' class='flex justify-center items-center border border-b-2 mt-2 py-1 px-4'>詳しく見る<i class='el-icon ml-2' style='font-size: 20px;'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'><path fill='currentColor' d='M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96'></path><path fill='currentColor' d='M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128M288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32m0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32'></path></svg></i></a></div>`,
                            tileColor: 'rgba(0, 37, 92, 0.1)',
                            shadowColor: 'rgb(0 0 0 / 0.5)',
                            bgPosition: 'center'
                        },
                        {
                            src: '/images/recruit/employee/005.jpg',
                            alt: '人物写真M.K.',
                            mainText: `<div class='text-center px-4 text-2xl font-bold leading-loose min-w-[6rem]'>M.K.</div>`,
                            subText: `<div class='flex flex-col min-w-[210px]'><div class='grow text-center text-sm sm:text-base font-bold'>若手エンジニア<br>文系私立大学卒<br>2022年入社</div><a href='/recruit/employee' class='flex justify-center items-center border border-b-2 mt-2 py-1 px-4'>詳しく見る<i class='el-icon ml-2' style='font-size: 20px;'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'><path fill='currentColor' d='M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96'></path><path fill='currentColor' d='M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128M288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32m0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32'></path></svg></i></a></div>`,
                            tileColor: 'rgba(0, 37, 92, 0.1)',
                            shadowColor: 'rgb(0 0 0 / 0.5)',
                            bgPosition: 'right'
                        },
                        {
                            src: '/images/recruit/employee/006.jpg',
                            alt: '人物写真T.S.',
                            mainText: `<div class='text-center px-4 text-2xl font-bold leading-loose min-w-[6rem]'>T.S.</div>`,
                            subText: `<div class='flex flex-col min-w-[210px]'><div class='grow text-center text-sm sm:text-base font-bold'>若手エンジニア<br>情報系専門卒<br>2023年入社</div><a href='/recruit/employee' class='flex justify-center items-center border border-b-2 mt-2 py-1 px-4'>詳しく見る<i class='el-icon ml-2' style='font-size: 20px;'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'><path fill='currentColor' d='M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96'></path><path fill='currentColor' d='M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128M288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32m0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32'></path></svg></i></a></div>`,
                            tileColor: 'rgba(0, 37, 92, 0.1)',
                            shadowColor: 'rgb(0 0 0 / 0.5)',
                            bgPosition: 'right top'
                        },
                        {
                            src: '/images/recruit/employee/007.jpg',
                            alt: '人物写真A.M.',
                            mainText: `<div class='text-center px-4 text-2xl font-bold leading-loose min-w-[6rem]'>A.M.</div>`,
                            subText: `<div class='flex flex-col min-w-[210px]'><div class='grow text-center text-sm sm:text-base font-bold'>若手エンジニア<br>文系私立大学卒<br>2022年入社</div><a href='/recruit/employee' class='flex justify-center items-center border border-b-2 mt-2 py-1 px-4'>詳しく見る<i class='el-icon ml-2' style='font-size: 20px;'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'><path fill='currentColor' d='M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96'></path><path fill='currentColor' d='M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128M288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32m0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32'></path></svg></i></a></div>`,
                            tileColor: 'rgba(0, 37, 92, 0.1)',
                            shadowColor: 'rgb(0 0 0 / 0.5)',
                            bgPosition: 'right top'
                        },
                        {
                            src: '/images/recruit/employee/008.jpg',
                            alt: '人物写真R.T.',
                            mainText: `<div class='text-center px-4 text-2xl font-bold leading-loose min-w-[6rem]'>R.T.</div>`,
                            subText: `<div class='flex flex-col min-w-[210px]'><div class='grow text-center text-sm sm:text-base font-bold'>若手エンジニア<br>理系私立大学卒<br>2023年入社</div><a href='/recruit/employee' class='flex justify-center items-center border border-b-2 mt-2 py-1 px-4'>詳しく見る<i class='el-icon ml-2' style='font-size: 20px;'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024'><path fill='currentColor' d='M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96'></path><path fill='currentColor' d='M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128M288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32m0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32'></path></svg></i></a></div>`,
                            tileColor: 'rgba(0, 37, 92, 0.1)',
                            shadowColor: 'rgb(0 0 0 / 0.5)',
                            bgPosition: 'center'
                        },
                    ]"></Carousel>
                </div>
            </div>
        </div>
    </section>

    <!-- 募集情報セクション -->
    <section class="mt-24 mb-24 p-4 bg-cover bg-[url('/images/recruit/index/009.png')]">
        <h2 id="recruit10" class="text-white px-4 text-4xl leading-loose font-bold w-fit ml-auto mr-auto">募集情報</h2>
        <div class="flex flex-col p-4 items-center md2:flex-row md2:flex-wrap md2:justify-between">
            <div class="mt-6">
                <CustomArrowButton arrowType="transition" color-type="white" to="/recruit/information?tab=first">
                    <template #buttonText>新卒採用情報</template>
                </CustomArrowButton>
            </div>
            <div class="mt-6">
                <CustomArrowButton arrowType="transition" color-type="white" to="/recruit/information?tab=second">
                    <template #buttonText>キャリア採用情報</template>
                </CustomArrowButton>
            </div>
            <div class="mt-6">
                <CustomArrowButton arrowType="transition" color-type="white" to="/recruit/information?tab=third">
                    <template #buttonText>契約社員採用情報</template>
                </CustomArrowButton>
            </div>
        </div>
        <div class="flex mt-6 px-4 justify-center md2:justify-end">
            <CustomArrowButton arrowType="transition" color-type="yellow" to="/recruit/information#recruitInfomation02">
                <template #buttonText><span class="tracking-wide">ENTRY</span></template>
            </CustomArrowButton>
        </div>
    </section>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'double-column-sidebar'
})
import CustomArrowButton from '~/components/CustomArrowButton.vue'
import Carousel from '~/components/Carousel.vue'
import BackgroundPattern from '~/components/BackgroundPattern.vue'
import {
    Pointer,
} from '@element-plus/icons-vue'
</script>

<style scoped></style>
