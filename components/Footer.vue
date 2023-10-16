<template>
    <el-row class="bg-custom-gray text-white">
        <el-col :sm="18" :span="24">
            <el-row>
                <div class="mb-3 bg-white border-t-2 border-custom-gray drop-shadow-md">
                    <!-- <el-image src="./images/footer/logo.png"></el-image> -->
                    <el-image src="./images/footer/logo.svg"></el-image>
                </div>
            </el-row>
            <div class="flex flex-wrap flex-col md:flex-row px-12 md:px-6 lg:px-10 xl:px-20 2xl:px-40">
                <div class="flex flex-col flex-auto basis-auto md:basis-16 px-1.5 mb-6 text-lg font-medium leading-6">
                    <NuxtLink to="/" class="underLine w-fit mb-2 hover:text-gray-200 hover:underline">Top</NuxtLink>
                </div>
                <div class="flex flex-col flex-auto basis-auto px-1.5 mb-6 text-lg font-medium leading-6">
                    <NuxtLink to="/company" class="underLine w-fit mb-2 hover:text-gray-200 hover:underline border-l-2-white">会社情報</NuxtLink>
                    <!-- <NuxtLink to="/company" class="w-fit mb-2 hover:text-gray-200 hover:underline border-l-2-white"><span class="underline underline-offset-8 decoration-2">会社</span>情報</NuxtLink> -->
                    <NuxtLink to="/company#TEST" class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">トップメッセージ</NuxtLink>
                    <NuxtLink to="/company#TEST" class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">ペイルの由来</NuxtLink>
                    <NuxtLink to="/company#TEST" class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">沿革</NuxtLink>
                    <NuxtLink to="/company#TEST" class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">会社概要</NuxtLink>
                    <NuxtLink to="/company#TEST" class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">アクセス</NuxtLink>
                </div>
                <div class="flex flex-col flex-auto basis-auto px-1.5 mb-6 text-lg font-medium leading-6">
                    <!-- <NuxtLink to="/service" class="w-fit mb-2 hover:text-gray-200 hover:underline"><span class="underline underline-offset-8 decoration-2">事業</span>情報</NuxtLink> -->
                    <NuxtLink to="/service" class="underLine w-fit mb-2 hover:text-gray-200 hover:underline">事業情報</NuxtLink>
                    <NuxtLink to="/service#TEST" class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">SIサービス</NuxtLink>
                    <NuxtLink to="/service#TEST" class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">ITサービス</NuxtLink>
                    <NuxtLink to="/service#TEST" class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">SEサービス</NuxtLink>
                    <NuxtLink to="/service#TEST" class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">開発実績</NuxtLink>
                </div>
                <div class="flex flex-auto flex-col justify-around md:flex-row">
                    <div class="flex flex-col px-1.5 mb-6 text-lg font-medium leading-6">
                        <div class="mb-2">
                            <!-- <NuxtLink to="/recruit" class="w-fit hover:text-gray-200 hover:underline"><span class="underline underline-offset-8 decoration-2">採用</span>情報</NuxtLink> -->
                            <NuxtLink to="/recruit" class="underLine w-fit hover:text-gray-200 hover:underline">採用情報</NuxtLink>
                        </div>
                        <div class="flex flex-wrap flex-col md:flex-row">
                            <div class="flex flex-col">
                                <NuxtLink to="/recruit#TEST" class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">採用メッセージ</NuxtLink>
                                <NuxtLink to="/recruit#TEST" class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">ペイルの特徴</NuxtLink>
                                <NuxtLink to="/recruit#TEST" class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">オフィス紹介</NuxtLink>
                                <NuxtLink to="/recruit#TEST" class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">研修制度</NuxtLink>
                                <NuxtLink to="/recruit#TEST" class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">福利厚生</NuxtLink>
                            </div>
                            <div class="flex flex-col">
                                <NuxtLink to="/recruit#TEST" class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">各種データ</NuxtLink>
                                <NuxtLink to="/recruit#TEST" class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">Q&A</NuxtLink>
                                <NuxtLink to="/recruit#TEST" class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">社員紹介</NuxtLink>
                                <NuxtLink to="/recruit#TEST" class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">募集情報</NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col px-1.5 mb-6 text-lg font-medium leading-6">
                        <!-- <NuxtLink to="/contact" class="w-fit mb-2 hover:text-gray-200 hover:underline"><span class="underline underline-offset-8 decoration-2">お問</span>い合わせ</NuxtLink> -->
                        <NuxtLink to="/contact" class=" underLine w-fit mb-2 hover:text-gray-200 hover:underline">お問い合わせ</NuxtLink>
                        <NuxtLink to="/contact#TEST" class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">採用に関する問い合わせ</NuxtLink>
                        <NuxtLink to="/contact#TEST" class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">その他の問い合わせ</NuxtLink>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :sm="6" :span="24">
            <div class=" px-6 py-6 md:px-0 h-full">
                <div class="pt-3 px-9 md:px-3 h-full border-t-2 md:border-t-0 md:border-l-2" >
                    <div class="mt-1 text-xs font-normal leading-6">本社</div>
                    <div class="text-xs font-normal leading-6">
                        〒000-0000<br />
                        東京都◯◯◯◯◯◯1-6-2<br class="hidden md:inline-block" />
                        ◯◯◯◯◯ビル<br />
                    </div>
                    <div class="pl-3 text-xs font-normal leading-6">
                        7F（受付）<br />
                        8F（開発フロア）<br />
                        9F（セミナーフロア）<br />
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
    <el-row align="middle" class="pl-6 md:pl-12 text-black text-xs font-light">
        <el-col :span="12">
            <el-row align="middle">
                <el-image class="mr-4 h-10 w-10" src="../images/footer/policy.png"></el-image>
                <span class="text-xs">個人情報保護方針</span>
            </el-row>
        </el-col>
        <el-col :span="12">
            <el-row justify="end" class="text-xs">
                <div class="pr-6 md:pr-12">© 2023 企業名. All rights reserved.</div>
            </el-row>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* .footerLogo {
    border-top: #697F9F solid 1px;
    background-color: #FFFFFF;
    margin: 0 1px 1rem 1px;
    padding: 0 0.5rem 0 0;
} */

/* .footerTopLeft {
    background-color: #697F9F;
    color: #F2F7FC;
} */

/* .footerTopRight {
    background-color: #697F9F;
    color: #F2F7FC;
} */

/* .footerTopTitleText {
    font-size: large;
    font-weight: 500;
    line-height: 1.3;
    margin: 0 0 0.5rem 0;
} */

/* .footerTopHorizontalLine {
    border-bottom: 3px solid #F2F7FC;
} */

/* .footerTopInnnerText{
    font-size: small;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.1em;
    margin: 0 0 0 1rem;
} */

/* .addressTitle {
    font-size: small;
    font-weight: 400;
    line-height: 1.5;
    margin: 0 0 0.2rem 0;
} */

/* .address {
    font-size: small;
    font-weight: 400;
    line-height: 1.5;
} */

/* .addressDetail {
    font-size: small;
    font-weight: 400;
    line-height: 1.5;
    padding: 0 0 0 1rem;
} */

/* .footerBottom {
    background-color: #F5F5F5;
    color: #000000;
    font-size: smaller;
    font-weight: 400;
    padding: 0 0 0 3rem;
}

.policyMark {
    height: 40px;
    width: 40px;
    margin: 0 1rem 0 0;
}
.copyrightMark{
    margin: 0 2.5rem 0 0;
} */
.underLine {
  position: relative;
}

.underLine::before {
    /* border-left: 2px solid #fff; */
    border-bottom: 2px solid #fff;
    content: "";
    height: 1.6rem;
    left: 0;
    position: absolute;
    top: 0;
    /* transform: rotate(-90deg); */
    width: 2rem;
}
</style>