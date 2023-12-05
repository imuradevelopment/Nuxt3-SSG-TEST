<!-- ネストは3階層まで -->
<template>
    <div class="folder-structure" style="padding-left:3rem;">
        <div class="font-bold text-lg md:text-xl text-custom-deepGray" style="margin-left:-3rem;">開発システム</div>
        <ul class="">
            <li>
                <!-- コンテンツ -->
                <div class="content">
                    <div class="px-2 text-base md:text-lg font-bold text-custom-deepGray">汎用系システム</div>
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
                    <div class="px-2 text-base md:text-lg font-bold text-custom-deepGray">オープン系システム</div>
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

/* 段組み */
.folder-structure ul li {
    padding: var(--font-size-base) 0rem 0rem 0rem;
    position: relative;
}

/* 縦線 */
/* 1段目 */
.folder-structure ul li::before {
    border-left: 1px solid var(--custom-color-lightGray);
    content: "";
    left: 0;
    position: absolute;
    top: 1px;
    transform: translate(calc(-1 * var(--font-lineHeight-4xl)), 0);
    height: 100%;
}

/* 2段目 */
.folder-structure ul li ul li::before {
    border-left: 1px solid var(--custom-color-lightGray);
    content: "";
    left: 0;
    position: absolute;
    top: calc(var(--font-lineHeight-lg) * -1 / 2);
    transform: translate(calc(-1 * var(--font-lineHeight-4xl)), 0);
    height: 100%;
}

/* 3段目 */
.folder-structure ul li ul li ul li::before {
    border-left: 1px solid var(--custom-color-lightGray);
    content: "";
    left: 0;
    position: absolute;
    top: calc(var(--font-lineHeight-lg) * -1 / 2);
    transform: translate(calc(-1 * var(--font-lineHeight-4xl)), 0);
    height: 100%;
}

/* 1段目 */
.folder-structure ul li:last-child::before {
    height: calc(var(--font-size-base) + var(--font-lineHeight-lg) / 2);
}

/* 2段目 */
.folder-structure ul li ul li:last-child::before {
    height: calc(var(--font-size-base) + var(--font-lineHeight-lg) / 2 + var(--font-lineHeight-lg) / 2);
}

/* 3段目 */
.folder-structure ul li ul li ul li:last-child::before {
    height: calc(var(--font-size-sm) + var(--font-lineHeight-lg) / 2 + var(--font-lineHeight-lg) / 2);
}

/* 横線 */
/* 1段目 */
.folder-structure ul li::after {
    border-bottom: 1px solid var(--custom-color-lightGray);
    content: "";
    left: 0;
    position: absolute;
    top: calc(var(--font-size-base) + var(--font-lineHeight-lg) / 2);
    transform: translate(-100%, 0);
    width: var(--font-lineHeight-4xl);
}

/* 2段目 */
.folder-structure ul li ul li::after {
    top: calc(var(--font-size-base) + var(--font-lineHeight-lg) / 2);
}

/* 3段目 */
.folder-structure ul li ul li ul li::after {
    top: calc(var(--font-size-sm) + var(--font-lineHeight-lg) / 2);
}

@media screen and (max-width: 768px) {

    /* 縦線 */
    /* 1段目 */
    .folder-structure ul li::before {
        border-left: 1px solid var(--custom-color-lightGray);
        content: "";
        left: 0;
        position: absolute;
        top: 1px;
        transform: translate(calc(-1 * var(--font-lineHeight-4xl)), 0);
        height: 100%;
    }

    /* 2段目 */
    .folder-structure ul li ul li::before {
        border-left: 1px solid var(--custom-color-lightGray);
        content: "";
        left: 0;
        position: absolute;
        top: calc(var(--font-lineHeight-sm) * -1 / 2);
        transform: translate(calc(-1 * var(--font-lineHeight-4xl)), 0);
        height: 100%;
    }

    /* 3段目 */
    .folder-structure ul li ul li ul li::before {
        border-left: 1px solid var(--custom-color-lightGray);
        content: "";
        left: 0;
        position: absolute;
        top: calc(var(--font-lineHeight-sm) * -1 / 2);
        transform: translate(calc(-1 * var(--font-lineHeight-4xl)), 0);
        height: 100%;
    }

    /* 1段目 */
    .folder-structure ul li:last-child::before {
        height: calc(var(--font-size-base) + var(--font-lineHeight-base)/2);
    }

    /* 2段目 */
    .folder-structure ul li ul li:last-child::before {
        height: calc(var(--font-size-base) + var(--font-lineHeight-base)/2 + var(--font-lineHeight-base)/2);
    }

    /* 3段目 */
    .folder-structure ul li ul li ul li:last-child::before {
        height: calc(var(--font-size-sm) + var(--font-lineHeight-sm) / 2 + var(--font-lineHeight-sm) / 2);
    }

    /* 横線 */
    /* 1段目 */
    .folder-structure ul li::after {
        border-bottom: 1px solid var(--custom-color-lightGray);
        content: "";
        left: 0;
        position: absolute;
        top: calc(var(--font-size-base) + var(--font-lineHeight-base)/2);
        transform: translate(-100%, 0);
        width: var(--font-lineHeight-4xl);
    }

    /* 2段目 */
    .folder-structure ul li ul li::after {
        top: calc(var(--font-size-base) + var(--font-lineHeight-base)/2);
    }

    /* 3段目 */
    .folder-structure ul li ul li ul li::after {
        top: calc(var(--font-size-sm) + var(--font-lineHeight-sm) / 2);
    }
}
</style>