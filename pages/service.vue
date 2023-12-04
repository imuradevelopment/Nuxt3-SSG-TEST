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
                <!-- Milestone -->
                <div class="zigzag-timeline__milestone"></div>

                <!-- Content -->
                <div class="w-full flex items-center justify-center">
                    <h2 id="service01"
                        class="linkScrollPageHeader font-bold text-2xl md:text-4xl text-custom-blue my-2 text-center">
                        SIサービス
                    </h2>
                    <div class="text-xs">System Integration Service</div>
                </div>
            </div>
            <div class="zigzag-timeline__item">
                <!-- Milestone -->
                <div class="zigzag-timeline__milestone"></div>
                <!-- Content -->
                <div class="w-full flex items-center justify-center">
                    <h2 id="service01"
                        class="linkScrollPageHeader font-bold text-2xl md:text-4xl text-custom-blue my-2 text-center">
                        ITサービス
                    </h2>
                    <div class="text-xs">Information Technology Service</div>
                </div>
            </div>
            <div class="zigzag-timeline__item">
                <!-- Milestone -->
                <div class="zigzag-timeline__milestone"></div>
                <!-- Content -->
                <div class="w-full flex items-center justify-center">
                    <h2 id="service01"
                        class="linkScrollPageHeader font-bold text-2xl md:text-4xl text-custom-blue my-2 text-center">
                        SEサービス
                    </h2>
                    <div class="text-xs">System Engineering Service</div>
                </div>
                <div class="mx-4 ml-16 w-fit">
                    <div class="folder-structure">
                        <div class="font-bold text-lg md:text-xl" style="margin-left: -3rem;">提供システム</div>
                        <ul class="">
                            <li>
                                <!-- Content -->
                                <div class="content">
                                    <div class="px-2 text-base md:text-lg font-bold">汎用系システム</div>
                                </div>
                                <!-- Sub items -->
                                <ul>
                                    <li>
                                        <div class="px-2 text-sm md:text-base leading-7">金融系システム</div>
                                    </li>
                                    <li>
                                        <div class="px-2 text-sm md:text-base leading-7">省庁・地方自治体システム</div>
                                    </li>
                                    <li>
                                        <div class="px-2 text-sm md:text-base leading-7">流通系システム</div>
                                    </li>
                                    <li>
                                        <div class="px-2 text-sm md:text-base leading-7">製造系システム</div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <!-- Content -->
                                <div class="content">
                                    <div class="px-2 text-base md:text-lg font-bold">オープン系システム</div>
                                </div>
                                <!-- Sub items -->
                                <ul>
                                    <li>
                                        <div class="px-2 text-sm md:text-base leading-7">Windowsアプリケーション開発</div>
                                    </li>
                                    <li>
                                        <div class="px-2 text-sm md:text-base leading-7">通信/ネットワークシステム</div>
                                    </li>
                                    <li>
                                        <div class="px-2 text-sm md:text-base leading-7">UNIXアプリケーション開発</div>
                                    </li>
                                    <li>
                                        <div class="px-2 text-sm md:text-base leading-7">制御システム</div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="zigzag-timeline__item">
                <!-- Milestone -->
                <div class="zigzag-timeline__milestone"></div>
                <!-- Content -->
                <div class="w-full flex items-center justify-center">
                    <h2 id="service01"
                        class="linkScrollPageHeader font-bold text-2xl md:text-4xl text-custom-blue my-2 text-center">
                        開発実績
                    </h2>
                    <div class="text-xs">Development Achievements</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Zigzag timeline */
.zigzag-timeline__item {
    /* Used to position the milestone */
    position: relative;

    /* Border */
    border-bottom: 1px solid #9ca3af;

    /* Take full width */
    width: 100%;
}

.zigzag-timeline__milestone {
    /* Absolute position */
    position: absolute;
    top: 50%;

    /* Circle it */
    border-radius: 50%;
    height: 1rem;
    width: 1rem;

    /* Misc */
    background: #9ca3af;
}

/* Styles for even items */
.zigzag-timeline__item:nth-child(2n) {
    border-left: 1px solid #9ca3af;
}

.zigzag-timeline__item:nth-child(2n) .zigzag-timeline__milestone {
    left: 0;
    transform: translate(-50%, -50%);
}

/* Styles for odd items */
.zigzag-timeline__item:nth-child(2n + 1) {
    border-right: 1px solid #9ca3af;
}

.zigzag-timeline__item:nth-child(2n + 1) .zigzag-timeline__milestone {
    right: 0;
    transform: translate(50%, -50%);
}

/* フォルダ構造 */
.folder-structure ul {
    /* Reset */
    list-style-type: none;
    margin: 0 !important;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}

.folder-structure li {
    padding: var(--font-size-base) 0rem 0rem 0rem;
    position: relative;
}

.folder-structure li::before {
    border-left: 1px solid #d1d5db;
    content: "";
    left: 0;
    position: absolute;
    top: 0;
    transform: translate(calc(-1 * var(--font-lineHeight-4xl)), 0);
    height: 100%;
}

.folder-structure li::after {
    border-bottom: 1px solid #d1d5db;
    content: "";
    left: 0;
    position: absolute;
    top: calc(var(--font-size-base) + var(--font-lineHeight-base) / 2);
    transform: translate(-100%, 0);
    width: var(--font-lineHeight-4xl);
}

/* 最後のアイテムからボーダーを取り除く */
.folder-structure li:last-child::before {
    height: calc(var(--font-size-base) + var(--font-lineHeight-base) / 2);
}

.folder-structure li:nth-child(1) li:nth-child(1)::before,
.folder-structure li:nth-child(2) li:nth-child(1)::before {
    top: -0.95rem;
    height: calc(100% + 0.95rem);
}
@media screen and (max-width: 768px) {
    .folder-structure li:nth-child(1) li:nth-child(1)::before,
    .folder-structure li:nth-child(2) li:nth-child(1)::before {
        top: -0.725rem;
        height: calc(100% + 0.725rem);
    }
}
</style>