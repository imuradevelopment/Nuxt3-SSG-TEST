<template>
    <div class="folder-structure">
        <div class="font-bold text-lg md:text-xl" style="margin-left: -3rem;">提供システム</div>
        <ul class="">
            <li>
                <!-- コンテンツ -->
                <div class="content">
                    <div class="px-2 text-base md:text-lg font-bold">汎用系システム</div>
                </div>
                <!-- サブアイテム -->
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
                <!-- コンテンツ -->
                <div class="content">
                    <div class="px-2 text-base md:text-lg font-bold">オープン系システム</div>
                </div>
                <!-- サブアイテム -->
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
</template>
<script setup lang="ts">

</script>
<style scoped>
/* フォルダ構造 */
.folder-structure ul {
    /* リセット */
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