<!-- ネストは3階層まで -->
<template>
    <div class="folder-structure" style="padding-left: 3rem">
        <div class="font-bold text-lg md:text-xl text-custom-deepGray" style="margin-left: -3rem">開発システム</div>
        <ul class="">
            <li>
                <!-- コンテンツ -->
                <div class="content">
                    <div class="px-2 text-base md:text-lg font-bold text-custom-deepGray">
                        <span class="tooltip">
                            汎用系システム
                            <span class="tooltiptext">
                                汎用系システムは、さまざまな業界や用途に適用可能な広範囲にわたるシステムです。これらはカスタマイズが可能で、多くの場合、標準化されたコンポーネントを使用しています。
                            </span>
                        </span>
                    </div>
                </div>
                <!-- サブアイテム -->
                <ul>
                    <li>
                        <div class="px-2 text-sm md:text-base leading-7">
                            <span class="tooltip">
                                金融系システム
                                <span class="tooltiptext">
                                    金融系システムは、銀行、証券、保険などの金融業界で使用されるシステムです。これらは取引処理、リスク管理、顧客情報の管理などを行います。
                                </span>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="px-2 text-sm md:text-base leading-7">
                            <span class="tooltip">
                                省庁・地方自治体システム
                                <span class="tooltiptext">
                                    省庁・地方自治体システムは、公共サービスの提供、市民とのコミュニケーション、行政管理などを目的としたシステムです。
                                </span>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="px-2 text-sm md:text-base leading-7">
                            <span class="tooltip">
                                流通系システム
                                <span class="tooltiptext">
                                    流通系システムは、商品の在庫管理、物流、販売管理などを行うシステムで、小売業界や卸売業界で広く使用されています。
                                </span>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="px-2 text-sm md:text-base leading-7">
                            <span class="tooltip">
                                製造系システム
                                <span class="tooltiptext">
                                    製造系システムは、製品の設計、生産、品質管理などを行うシステムで、製造業界に特化しています。
                                </span>
                            </span>
                        </div>
                    </li>
                </ul>
            </li>
            <li>
                <!-- コンテンツ -->
                <div class="content">
                    <div class="px-2 text-base md:text-lg font-bold text-custom-deepGray">
                        <span class="tooltip">
                            オープン系システム
                            <span class="tooltiptext">
                                オープン系システムは、異なるハードウェアやソフトウェア間での互換性を持つシステムで、柔軟性と拡張性に優れています。
                            </span>
                        </span>
                    </div>
                </div>
                <!-- サブアイテム -->
                <ul>
                    <li>
                        <div class="px-2 text-sm md:text-base leading-7">
                            <span class="tooltip">
                                Windowsアプリケーション開発
                                <span class="tooltiptext">
                                    Windowsアプリケーション開発は、Microsoft Windowsオペレーティングシステム上で動作するアプリケーションの開発を指します。
                                </span>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="px-2 text-sm md:text-base leading-7">
                            <span class="tooltip">
                                通信/ネットワークシステム
                                <span class="tooltiptext">
                                    通信/ネットワークシステムは、データの送受信、ネットワークの管理、セキュリティ対策などを行うシステムです。
                                </span>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="px-2 text-sm md:text-base leading-7">
                            <span class="tooltip">
                                UNIXアプリケーション開発
                                <span class="tooltiptext">
                                    UNIXアプリケーション開発は、UNIXベースのオペレーティングシステム上で動作するアプリケーションの開発を指します。
                                </span>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="px-2 text-sm md:text-base leading-7">
                            <span class="tooltip">
                                制御システム
                                <span class="tooltiptext">
                                    制御システムは、機械やプロセスの自動制御を行うシステムで、産業オートメーションやロボティクスなどに使用されます。
                                </span>
                            </span>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
.tooltip {
    position: relative;
    display: inline-block;
}

.tooltip .tooltiptext {
    visibility: hidden;
    /* width: 50vw; */
    max-width: 640px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 320px;
    opacity: 0;
    transition: opacity 0.3s;
    padding: 1rem;
    margin: 1rem;
    font-size: xx-small;
    line-height: 1rem;
}

@media screen and (max-width: 768px) {
  .tooltip .tooltiptext {
    width: 50vw;
    /* left: 5%; */
    left: -25vw;
    margin-left: 0;
    text-align: left;
  }
}

.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}

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