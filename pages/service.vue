<template>
    <div>
        <GlassCard :rounded="false" :opacity="0.5"
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
        </GlassCard>
        <div class="mx-4">
            <div class="zigzag-timeline__item">
                <!-- マイルストーン -->
                <div class="zigzag-timeline__milestone"></div>

                <!-- コンテンツ -->
                <div class="pageHeaderPadding w-full flex items-center justify-center">
                    <div class="flex flex-col text-center">
                        <h2 id="service01"
                            class="linkScrollPageHeader font-bold text-2xl md:text-4xl text-custom-blue mt-2">
                            SI・IT・SEサービス
                        </h2>
                        <div class="text-xs mb-2">System Integration Service</div>
                    </div>
                </div>
                <div class="m-auto">
                    <div class="flex flex-col">
                        <CommentCard class="mt-4 mb-8 mr-4">
                            <template #content>
                                <p class="text-sm md:text-base w-full text-center break-keep">
                                    時代を先取りする技術力で、
                                    クライアントの未来を切り拓き、
                                    システムエンジニアリングと人材
                                    派遣で幅広いニーズに応えます。
                                </p>
                            </template>
                        </CommentCard>
                        <VennDiagram></VennDiagram>
                        <CommentCard class="mt-4 mb-8 mr-4">
                            <template #content>
                                <p class="text-sm md:text-base w-full text-center break-keep">
                                    弊社が提供するシステムの概要です。
                                    詳しいシステムの内容や、
                                    技術スタックについては、
                                    詳細情報を「開発実績」の項で
                                    ご確認いただけます。
                                </p>
                            </template>
                        </CommentCard>
                        <div class="mx-auto">
                            <FolderStructure></FolderStructure>
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
                        <h2 id="service01"
                            class="linkScrollPageHeader font-bold text-2xl md:text-4xl text-custom-blue mt-2 text-center">
                            開発実績
                        </h2>
                        <div class="text-xs mb-2">Development Achievements</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import VennDiagram from '~/components/VennDiagram.vue'
import FolderStructure from '~/components/FolderStructure.vue'
import CommentCard from '~/components/CommentCard.vue'
import InvertedCorners from '~/components/InvertedCorners.vue'
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
</style>