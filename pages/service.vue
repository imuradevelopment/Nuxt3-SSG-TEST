<template>
    <h1>事業情報</h1>

    <div class="m-4">
        <div class="zigzag-timeline__item">
            <!-- Milestone -->
            <div class="zigzag-timeline__milestone"></div>

            <!-- Content -->
            <div class="w-full flex items-center justify-center">
                <h2 id="service01"
                    class="linkScrollPageHeader font-bold text-2xl md:text-4xl text-custom-blue my-2 text-center">
                    SIサービス
                    <div class="text-xs">System Integration Service</div>
                </h2>
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
                    <div class="text-xs">Information Technology Service</div>
                </h2>
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
                    <div class="text-xs">System Engineering Service</div>
                </h2>
            </div>
            <div class="mx-4 ml-20">
                <div class="folder-structure">
                    <div class="font-bold text-lg md:text-xl" style="margin-left: -3rem;">提供システム</div>
                    <ul>
                        <li>
                            <!-- Content -->
                            <div class="content">
                                <div class="px-2 text-base md:text-lg font-bold">汎用系システム</div>
                            </div>
                            <!-- Sub items -->
                            <ul>
                                <li>
                                    <div class="px-2 text-sm md:text-base">金融系システム</div>
                                </li>
                                <li>
                                    <div class="px-2 text-sm md:text-base">省庁・地方自治体システム</div>
                                </li>
                                <li>
                                    <div class="px-2 text-sm md:text-base">流通系システム</div>
                                </li>
                                <li>
                                    <div class="px-2 text-sm md:text-base">製造系システム</div>
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
                                    <div class="px-2 text-sm md:text-base">Windowsアプリケーション開発</div>
                                </li>
                                <li>
                                    <div class="px-2 text-sm md:text-base">通信/ネットワークシステム</div>
                                </li>
                                <li>
                                    <div class="px-2 text-sm md:text-base">UNIXアプリケーション開発</div>
                                </li>
                                <li>
                                    <div class="px-2 text-sm md:text-base">制御システム</div>
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
                    <div class="text-xs">Development Achievements</div>
                </h2>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

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

/* Folder structure */
:root {
    --folder-structure-item-height: 1.5rem;
    --folder-structure-item-margin-left: 2.5rem;
    --folder-structure-item-padding-top: 1rem;
}

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
    padding: var(--folder-structure-item-padding-top) 0rem 0rem 0rem;
    position: relative;
}

.folder-structure li::before {
    border-left: 1px solid #d1d5db;
    content: "";

    /* Position */
    left: 0;
    position: absolute;
    top: 0;
    transform: translate(calc(-1 * var(--folder-structure-item-margin-left)), 0);

    /* Size */
    height: 100%;
}

.folder-structure li::after {
    border-bottom: 1px solid #d1d5db;
    content: "";

    /* Position */
    left: 0;
    position: absolute;
    top: 1.75rem;
    transform: translate(-100%, 0);

    /* Size */
    width: var(--folder-structure-item-margin-left);
}

@media screen and (max-width: 768px) {
    .folder-structure li::after {
        border-bottom: 1px solid #d1d5db;
        content: "";
    
        /* Position */
        left: 0;
        position: absolute;
        top: 1.5rem;
        transform: translate(-100%, 0);
    
        /* Size */
        width: var(--folder-structure-item-margin-left);
    }
}

@media screen and (max-width: 768px) {
    .folder-structure li:first-child::after {
        border-bottom: 1px solid #d1d5db;
        content: "";
    
        /* Position */
        left: 0;
        position: absolute;
        top: 1.75rem;
        transform: translate(-100%, 0);
        
        /* Size */
        width: var(--folder-structure-item-margin-left);
    }    
}
/* Remove the border from the last item */
.folder-structure li:last-child::before {
    height: 1.75rem;
}
@media screen and (max-width: 768px) {
    .folder-structure li:last-child::before {
        height: 1.5rem;
}
}
.content {
    position: relative;
}

.content::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 1px;
    height: calc(50% + 2px);
    background-color: #d1d5db;
}
@media screen and (max-width: 768px) {
    .content::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 1px;
        height: 50%;
        background-color: #d1d5db;
}
}
</style>