<template>
    <el-row class="bg-custom-gray text-white">
        <el-col :sm="19" :span="24">
            <el-row>
                <div class="mb-3 bg-white border-t-2 border-custom-gray drop-shadow-md">
                    <!-- <el-image src="./images/footer/logo.png"></el-image> -->
                    <el-image src="./images/footer/logo.svg"></el-image>
                </div>
            </el-row>
            <el-row class="px-12 md:px-3">
                <el-col :lg="2" :span="0"></el-col>
                <el-col :sm="4" :lg="3" :span="24" class="pb-3 md:px-3">
                    <div class="text-lg font-medium leading-6">
                        <LinkIndex linkTo="/" class="hover:text-gray-200 hover:underline">Top</LinkIndex>
                    </div>
                </el-col>
                <el-col :sm="5" :lg="4" :span="24" class="pb-3 md:px-3">
                    <el-row>
                        <div class="mb-2 text-lg font-medium leading-6">
                            <LinkIndex linkTo="/company" class="hover:text-gray-200 hover:underline"><span
                                    class="underline underline-offset-8 decoration-2">会社</span>情報
                            </LinkIndex>
                        </div>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/company#TEST"
                            class="text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                            トップメッセージ</LinkIndex>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/company#TEST"
                            class="text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                            ベイルの由来</LinkIndex>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/company#TEST"
                            class="text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">沿革
                        </LinkIndex>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/company#TEST"
                            class="text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                            会社概要</LinkIndex>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/company#TEST"
                            class="text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                            アクセス</LinkIndex>
                    </el-row>
                </el-col>
                <el-col :sm="5" :lg="4" :span="24" class="pb-3 md:px-3">
                    <el-row>
                        <div class="mb-2 text-lg font-medium leading-6">
                            <LinkIndex linkTo="/service" class="hover:text-gray-200 hover:underline"><span
                                    class="underline underline-offset-8 decoration-2">事業</span>情報
                            </LinkIndex>
                        </div>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/service#TEST"
                            class="text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                            SIサービス</LinkIndex>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/service#TEST"
                            class="text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                            ITサービス</LinkIndex>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/service#TEST"
                            class="text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                            SEサービス</LinkIndex>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/service#TEST"
                            class="text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                            開発実績</LinkIndex>
                    </el-row>
                </el-col>
                <el-col :sm="5" :lg="4" :span="24" class="pb-3 md:px-3">
                    <!-- <el-row> -->
                    <!-- <el-col :span="24"> -->
                    <el-row>
                        <div class="mb-2 text-lg font-medium leading-6">
                            <LinkIndex linkTo="/recruit" class="hover:text-gray-200 hover:underline"><span
                                    class="underline underline-offset-8 decoration-2">採用</span>情報
                            </LinkIndex>
                        </div>
                    </el-row>
                    <!-- </el-col> -->
                    <!-- <el-col :sm="12" :span="24"> -->
                    <el-row>
                        <LinkIndex linkTo="/recruit#TEST"
                            class="text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                            採用メッセージ</LinkIndex>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/recruit#TEST"
                            class="text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                            ベイルの特徴</LinkIndex>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/recruit#TEST"
                            class="text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                            オフィス紹介</LinkIndex>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/recruit#TEST"
                            class="text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                            研修制度</LinkIndex>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/recruit#TEST"
                            class="text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                            福利厚生</LinkIndex>
                    </el-row>
                    <!-- </el-col> -->
                    <!-- <el-col :sm="12" :span="24"> -->
                    <el-row>
                        <LinkIndex linkTo="/recruit#TEST"
                            class="text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                            各種データ</LinkIndex>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/recruit#TEST"
                            class="text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">Q&A
                        </LinkIndex>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/recruit#TEST"
                            class="text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                            社員紹介</LinkIndex>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/recruit#TEST"
                            class="text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                            募集情報</LinkIndex>
                    </el-row>
                    <!-- </el-col> -->
                    <!-- </el-row> -->
                </el-col>
                <el-col :sm="5" :lg="4" :span="24" class="pb-3 md:px-3">
                    <el-row>
                        <div class="mb-2 text-lg font-medium leading-6">
                            <LinkIndex linkTo="/contact" class="hover:text-gray-200 hover:underline"><span
                                    class="underline underline-offset-8 decoration-2">お問</span>い合わせ
                            </LinkIndex>
                        </div>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/contact#TEST"
                            class="text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                            採用に関する問い合わせ</LinkIndex>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/contact#TEST"
                            class="text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                            その他の問い合わせ</LinkIndex>
                    </el-row>
                </el-col>
            </el-row>
        </el-col>
        <el-col :sm="5" :span="24">
            <div class=" px-3 pb-3 md:px-0">
                <div class="pt-3 px-9 md:px-3 border-t-2 md:mt-8 md:border-t-0 md:border-l-2">
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
                <div class="pr-6 md:pr-12">© 2023 Vaile. All rights reserved.</div>
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
</style>