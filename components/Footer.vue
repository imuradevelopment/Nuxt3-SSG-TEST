<template>
    <el-row class="bg-custom-gray text-white">
        <el-col :sm="18" :span="24">
            <el-row>
                <div class="mb-3 bg-white border-t-2 border-custom-gray drop-shadow-md">
                    <NuxtImg width="185" fit="cover" src="/images/logo/logo.png" />
                </div>
            </el-row>
            <div class="flex flex-wrap flex-col md:flex-row px-12 md:px-6">
                <div class="flex flex-col flex-auto basis-auto md:basis-16 px-1.5 mb-6 text-lg font-medium leading-6">

                    <NuxtLink @click="scrollToTarget()" to="/"
                        class="underLine w-fit mb-2 hover:text-gray-200 hover:underline">Top</NuxtLink>
                </div>
                <div class="flex flex-col flex-auto basis-auto px-1.5 mb-6 text-lg font-medium leading-6">
                    <NuxtLink @click="scrollToTarget()" to="/company"
                        class="underLine w-fit mb-2 hover:text-gray-200 hover:underline border-l-2-white">会社情報
                    </NuxtLink>
                    <NuxtLink to="/company#company01"
                        class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                        トップメッセージ</NuxtLink>
                    <NuxtLink to="/company#company02"
                        class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                        ベイルの由来</NuxtLink>
                    <NuxtLink to="/company#company03"
                        class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                        沿革</NuxtLink>
                    <NuxtLink to="/company#company04"
                        class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                        会社概要</NuxtLink>
                    <NuxtLink to="/company#company05"
                        class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                        アクセス</NuxtLink>
                </div>
                <div class="flex flex-col flex-auto basis-auto px-1.5 mb-6 text-lg font-medium leading-6">
                    <NuxtLink @click="scrollToTarget()" to="/service"
                        class="underLine w-fit mb-2 hover:text-gray-200 hover:underline">事業情報</NuxtLink>
                    <NuxtLink to="/service#service01"
                        class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                        事業概要</NuxtLink>
                    <NuxtLink to="/service#service02"
                        class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                        開発実績</NuxtLink>
                </div>
                <div class="flex flex-auto flex-col justify-around md:flex-row">
                    <div class="flex flex-col px-1.5 mb-6 text-lg font-medium leading-6">
                        <div class="mb-2">
                            <NuxtLink @click="scrollToTarget()" to="/recruit"
                                class="underLine w-fit hover:text-gray-200 hover:underline">採用情報</NuxtLink>
                        </div>
                        <div class="flex flex-wrap flex-col md:flex-row">
                            <div class="flex flex-col">
                                <NuxtLink to="/recruit/message"
                                    class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                                    採用メッセージ</NuxtLink>
                                <NuxtLink to="/recruit/feature"
                                    class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                                    ベイルの特徴</NuxtLink>
                                <NuxtLink to="/recruit/office"
                                    class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                                    オフィス紹介</NuxtLink>
                                <NuxtLink to="/recruit/induction"
                                    class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                                    研修制度</NuxtLink>
                                <NuxtLink to="/recruit/welfare"
                                    class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                                    福利厚生</NuxtLink>
                            </div>
                            <div class="flex flex-col">
                                <NuxtLink to="/recruit/data"
                                    class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                                    各種データ</NuxtLink>
                                <NuxtLink to="/recruit/qa"
                                    class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                                    Q&A</NuxtLink>
                                <NuxtLink to="/recruit/employee"
                                    class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                                    社員紹介</NuxtLink>
                                <NuxtLink to="/recruit/information"
                                    class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                                    募集情報</NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col px-1.5 mb-6 text-lg font-medium leading-6">
                        <NuxtLink @click="scrollToTarget()" to="/contact"
                            class=" underLine w-fit mb-2 hover:text-gray-200 hover:underline">お問い合わせ</NuxtLink>
                        <NuxtLink to="/contact?inquiryType=recruitment"
                            class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                            採用に関する問い合わせ</NuxtLink>
                        <NuxtLink to="/contact?inquiryType=other"
                            class="w-fit text-xs font-normal tracking-wide leading-6 ml-4 hover:text-gray-200 hover:underline">
                            その他の問い合わせ</NuxtLink>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :sm="6" :span="24">
            <div class=" px-6 py-6 md:px-0 h-full">
                <div class="pt-3 px-9 md:px-3 h-full border-t-2 md:border-t-0 md:border-l-2">
                    <div class="mt-1 text-xs font-normal leading-6">本社</div>
                    <div class="text-xs font-normal leading-6">
                        〒153-0043<br />
                        東京都目黒区東山1-6-2<br class="hidden md:inline-block" />
                        ＴＰＲ中目黒ビル<br />
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
    <el-row align="middle" class="pl-6 md:pl-12 bg-white text-black text-xs font-light">
        <el-col :span="12">
            <el-row align="middle">
                <NuxtLink @click="scrollToTarget()" to="/policy">
                    <NuxtImg class="mr-4 inline-flex" width="40" height="40" fit="cover"
                        src="/images/footer/policy.png" />
                    <span class="text-xs">個人情報保護方針</span>
                </NuxtLink>
            </el-row>
        </el-col>
        <el-col :span="12">
            <el-row justify="end" class="text-xs">
                <div class="pr-6 md:pr-12">© 2024 Vaile. All rights reserved.</div>
            </el-row>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { useScrollToTarget } from '~/composables/useScrollToTarget'
// useScrollToTargetを呼び出す
const { targetId, scrollToTarget } = useScrollToTarget()
</script>

<style scoped>
.underLine {
    position: relative;
}

.underLine::before {
    border-bottom: 2px solid #fff;
    content: "";
    height: 1.6rem;
    left: 0;
    position: absolute;
    top: 0;
    width: 2rem;
}
</style>