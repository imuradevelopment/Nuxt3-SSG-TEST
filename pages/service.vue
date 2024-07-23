<template>
    <div>
        <ClearGlassMaskCard :rounded="false" :opacity="0.5"
            class="h-12 fixed top-16 w-full maxWidth mx-auto z-50 hidden md:inline-block">
            <template #content>
                <div class="bg-custom-blue/30 h-full">
                    <div class="h-12 px-4 fixed top-16 w-full maxWidth mx-auto flex items-center justify-between">
                        <div>
                            <h1 class="font-bold text-lg md:text-2xl text-center text-custom-platina">事業情報</h1>
                        </div>
                        <div>
                            <PageHeader />
                        </div>
                    </div>
                </div>
            </template>
        </ClearGlassMaskCard>
        <div class="mx-4">
            <div class="zigzag-timeline__item pageHeaderMargin">
                <!-- マイルストーン -->
                <div class="zigzag-timeline__milestone"></div>

                <!-- コンテンツ -->
                <div class="w-full flex items-center justify-center">
                    <div class="flex flex-col text-center">
                        <h2 id="service01"
                            class="linkScrollPageHeader font-bold text-2xl md:text-4xl text-custom-blue mt-2">
                            事業概要
                        </h2>
                        <div class="text-xs mb-2">Business Summary</div>
                    </div>
                </div>
                <div class="mx-4">
                    <div class="m-auto">
                        <div class="flex flex-col">
                            <!-- <CommentCard class="mb-8 mr-4 md:max-w-screen-commentCardMaxWidth md:mx-auto">
                                <template #content>
                                    <p class="text-sm md:text-base w-full text-center break-keep">
                                        時代を先取りする技術力で、
                                        クライアントの未来を切り拓き、
                                        システムエンジニアリングと人材派遣で、幅広いニーズに応えます。
                                    </p>
                                </template>
                            </CommentCard> -->

                            <CustomFrameCard>
                                <template #title>
                                    事業への取り組み
                                </template>
                                <template #content>
                                    弊社では<span
                                        class="bg-blue-overlay">3つの事業</span>を柱として、システム構築・改修はもとより、<br
                                        class="hidden md:inline-block" />
                                    運用改善やお客様サポートなどの幅広いニーズに応え、<br class="hidden md:inline-block" />
                                    より使いやすいシステム、最適な技術者チームをご提案致します。<br class="hidden md:inline-block" />
                                </template>
                            </CustomFrameCard>

                            <VennDiagram></VennDiagram>

                            <!-- <CommentCard class="mt-4 mb-8 mr-4 md:max-w-screen-commentCardMaxWidth md:mx-auto">
                                <template #content>
                                    <p class="text-sm md:text-base w-full text-center break-keep">
                                        弊社が提供するシステムの概要です。
                                        詳しいシステムの内容や、
                                        技術スタック、参画工程については、
                                        詳細情報を<NuxtLink to="#service02" class="text-custom-blue">「開発実績」</NuxtLink>の項でご確認いただけます。
                                    </p>
                                </template>
                            </CommentCard>
                            <div class="mx-auto">
                                <FolderStructure></FolderStructure>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div class="zigzag-timeline__item">
                
                <div class="zigzag-timeline__milestone"></div>
                
                <div class="w-full flex items-center justify-center">
                    <div class="flex flex-col">
                        <h2 id="service01"
                            class="linkScrollPageHeader font-bold text-2xl md:text-4xl text-custom-blue mt-2 text-center">
                            SIサービス
                        </h2>
                        <div class="text-xs mb-2">System Integration Service</div>
                    </div>
                </div>
            </div>

            <div class="zigzag-timeline__item">

                <div class="zigzag-timeline__milestone"></div>
                
                <div class="w-full flex items-center justify-center">
                    <div class="flex flex-col">
                        <h2 id="service01"
                        class="linkScrollPageHeader font-bold text-2xl md:text-4xl text-custom-blue mt-2 text-center">
                        ITサービス
                        </h2>
                        <div class="text-xs mb-2">Information Technology Service</div>
                    </div>
                </div>
            </div>

            <div class="zigzag-timeline__item">

                <div class="zigzag-timeline__milestone"></div>

                <div class="w-full flex items-center justify-center">
                    <div class="flex flex-col">
                        <h2 id="service01"
                            class="linkScrollPageHeader font-bold text-2xl md:text-4xl text-custom-blue mt-2 text-center">
                            SEサービス
                        </h2>
                        <div class="text-xs mb-2">System Engineering Service</div>
                    </div>
                </div>
                <div class="mx-4 m-auto">
                    <div class="flex flex-col">
                        <div class="m-auto">
                            <CommentCard>
                                <template #content>
                                    <p class="text-sm md:text-base w-full text-center">
                                        時代とクライアントニーズに合った技術力を提供致します。<br />
                                        技術力の提供については、システムエンジニアリングサービスと人材派遣の両方のニーズに対応しています。
                                    </p>
                                </template>
                            </CommentCard>
                            <InvertedCorners>
                                <template #content>
                                    <p class="text-sm md:text-base w-full text-center">
                                        時代とクライアントニーズに合った技術力を提供致します。<br />
                                        技術力の提供については、システムエンジニアリングサービスと人材派遣の両方のニーズに対応しています。
                                    </p>
                                </template>
                            </InvertedCorners>
                        </div>
                        <div class="m-auto my-4">
                            <FolderStructure></FolderStructure>
                        </div>
                    </div>
                </div>
            </div> -->

            <div class="zigzag-timeline__item">
                <!-- マイルストーン -->
                <div class="zigzag-timeline__milestone"></div>

                <!-- コンテンツ -->
                <div class="w-full flex items-center justify-center">
                    <div class="flex flex-col">
                        <h2 id="service02"
                            class="linkScrollPageHeader font-bold text-2xl md:text-4xl text-custom-blue mt-2 text-center">
                            開発実績
                        </h2>
                        <div class="text-xs mb-2">Development Achievements</div>
                    </div>
                </div>
                <div class="mx-4 m-auto">
                    <!-- <DevelopmentAchievements></DevelopmentAchievements> -->
                    <DevelopmentAchievements2></DevelopmentAchievements2>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CustomFrameCard from '~/components/CustomFrameCard.vue'
import VennDiagram from '~/components/VennDiagram.vue'
import FolderStructure from '~/components/FolderStructure.vue'
import CommentCard from '~/components/CommentCard.vue'
import DevelopmentAchievements from '~/components/DevelopmentAchievements.vue'
import DevelopmentAchievements2 from '~/components/DevelopmentAchievements2.vue'
</script>

<style scoped>
/* ジグザグのタイムライン */
.zigzag-timeline__item {
    /* マイルストーンの位置決めに使用 */
    position: relative;

    /* 枠線 */
    border-bottom: 1px solid #9ca3af;

    /* 最大幅まで伸ばす */
    width: 100%;
}

.zigzag-timeline__item:last-child {
    margin-bottom: 1.75rem;
}

.zigzag-timeline__milestone {
    position: absolute;
    top: 50%;

    /* 丸で囲む */
    border-radius: 50%;
    height: 1rem;
    width: 1rem;
    background: #9ca3af;
}

/* 偶数アイテムのためのスタイル */
.zigzag-timeline__item:nth-child(2n) {
    border-left: 1px solid #9ca3af;
}

.zigzag-timeline__item:nth-child(2n) .zigzag-timeline__milestone {
    left: 0;
    transform: translate(-50%, -50%);
}

/* 奇数アイテムのためのスタイル */
.zigzag-timeline__item:nth-child(2n + 1) {
    border-right: 1px solid #9ca3af;
}

.zigzag-timeline__item:nth-child(2n + 1) .zigzag-timeline__milestone {
    right: 0;
    transform: translate(50%, -50%);
}

.bg-blue-overlay {
background:
        repeating-linear-gradient(45deg,
            var(--custom-color-deepBlue),
            var(--custom-color-deepBlue) 1px,
            transparent 1px,
            transparent 1.5px),
        repeating-linear-gradient(-45deg,
            var(--custom-color-deepBlue),
            var(--custom-color-deepBlue) 1px,
            transparent 1px,
            transparent 1.5px);
    background-size: 1.5px 1.5px;
    /* これで網掛けがさらに細かくなります */
    color: white;
    display: inline;
    padding: 0 4px;
    border-radius: 2px;
}
</style>