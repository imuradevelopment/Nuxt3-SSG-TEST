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
        <div class="m-4">
            <div class="zigzag-timeline__item">
                <!-- マイルストーン -->
                <div class="zigzag-timeline__milestone"></div>

                <!-- コンテンツ -->
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
                <!-- マイルストーン -->

                <div class="zigzag-timeline__milestone"></div>
                <!-- コンテンツ -->
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
                <!-- マイルストーン -->
                <div class="zigzag-timeline__milestone"></div>

                <!-- コンテンツ -->
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
                        <p class="text-sm md:text-base w-full text-center mt-4">
                            時代とクライアントニーズに合った技術力を提供致します。<br/>
                            技術力の提供については、システムエンジニアリングサービスと人材派遣の両方のニーズに対応しています。
                        </p>
                        <div class="m-auto my-4">
                            <FolderStructure></FolderStructure>
                        </div>
                    </div>
                </div>
            </div>

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
import FolderStructure from '~/components/FolderStructure.vue'
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