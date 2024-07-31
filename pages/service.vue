<template>
    <div>
        <!-- 固定ヘッダーカード -->
        <ClearGlassMaskCard :rounded="false" :opacity="0.5"
            class="h-12 fixed top-16 w-full maxWidth mx-auto z-50 hidden md:inline-block">
            <template #content>
                <div class="bg-custom-blue/30 h-full">
                    <div class="h-12 px-4 fixed top-16 w-full maxWidth mx-auto flex items-center justify-between">
                        <div>
                            <!-- ページタイトル -->
                            <h1 class="font-bold text-lg md:text-2xl text-center text-custom-platina">事業情報</h1>
                        </div>
                        <div>
                            <!-- ページヘッダーコンポーネント -->
                            <PageHeader />
                        </div>
                    </div>
                </div>
            </template>
        </ClearGlassMaskCard>
        <div class="mx-4">
            <!-- 事業概要セクション -->
            <div class="zigzag-timeline__item pageHeaderMargin">
                <div class="zigzag-timeline__milestone"></div>
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
                            <CustomFrameCard>
                                <template #title>
                                    事業への取り組み
                                </template>
                                <template #content>
                                    弊社では<span class="bg-blue-overlay">3つの事業</span>を柱として、システム構築・改修はもとより、<br
                                        class="hidden md:inline-block" />
                                    運用改善やお客様サポートなどの幅広いニーズに応え、<br class="hidden md:inline-block" />
                                    より使いやすいシステム、最適な技術者チームをご提案致します。<br class="hidden md:inline-block" />
                                </template>
                            </CustomFrameCard>
                            <!-- ベン図コンポーネント -->
                            <VennDiagram></VennDiagram>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 開発実績セクション -->
            <div class="zigzag-timeline__item">
                <div class="zigzag-timeline__milestone"></div>
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
                    <!-- 開発実績コンポーネント -->
                    <DevelopmentAchievements></DevelopmentAchievements>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CustomFrameCard from '~/components/CustomFrameCard.vue'
import VennDiagram from '~/components/VennDiagram.vue'
import DevelopmentAchievements from '~/components/DevelopmentAchievements.vue'
</script>

<style scoped>
/* ジグザグタイムラインアイテムのスタイル */
.zigzag-timeline__item {
    position: relative;
    border-bottom: 1px solid #9ca3af;
    width: 100%;
}

.zigzag-timeline__item:last-child {
    margin-bottom: 1.75rem;
}

/* ジグザグタイムラインマイルストーンのスタイル */
.zigzag-timeline__milestone {
    position: absolute;
    top: 50%;
    border-radius: 50%;
    height: 1rem;
    width: 1rem;
    background: #9ca3af;
}

/* 偶数番目のアイテムのスタイル */
.zigzag-timeline__item:nth-child(2n) {
    border-left: 1px solid #9ca3af;
}

.zigzag-timeline__item:nth-child(2n) .zigzag-timeline__milestone {
    left: 0;
    transform: translate(-50%, -50%);
}

/* 奇数番目のアイテムのスタイル */
.zigzag-timeline__item:nth-child(2n + 1) {
    border-right: 1px solid #9ca3af;
}

.zigzag-timeline__item:nth-child(2n + 1) .zigzag-timeline__milestone {
    right: 0;
    transform: translate(50%, -50%);
}

/* 青いオーバーレイスタイル */
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
    color: white;
    display: inline;
    padding: 0 4px;
    border-radius: 2px;
}
</style>
