<template>
    <div class="css-art--3-pie-venn-diagram">
        <div class="pie-main-intersection">
            <h3 class="inline-block">Vaile</h3>
            <div class="inline-block">：弊社の事業概要</div>
        </div>
        <div class="css-art--pie css-art--pie-1">
            <h3>SIサービス</h3>
            <ul>
                <li>業務分析</li>
                <li>システム最適化計画</li>
                <li>設計から保守まで<br class="hidden vennDiagramBreakpoint:inline-block" />トータルサポート</li>
            </ul>
        </div>
        <div class="pie-1-2-intersect">
            <h3>SIサービス ✕ ITサービス</h3>
            <ul>
                <li>豊富な経験に基づく洞察力と、充実したサポートでお客様を全面的にバックアップします。</li>
            </ul>
        </div>
        <div class="css-art--pie css-art--pie-2">
            <h3>ITサービス</h3>
            <ul>
                <li>ヘルプデスク</li>
                <li>システム監視</li>
                <li>アウトソーシングサービス</li>
            </ul>
        </div>
        <div class="pie-2-3-intersect">
            <h3>ITサービス ✕ SEサービス</h3>
            <ul>
                <li>システムを常に最適な状態で稼働、ビジネスの継続性を確保します。</li>
            </ul>
        </div>
        <div class="css-art--pie css-art--pie-3">
            <h3>SEサービス</h3>
            <ul>
                <li>システムエンジニアリング</li>
                <li>人材派遣</li>
                <li>共に対応可能</li>
            </ul>
        </div>
        <div class="pie-3-1-intersect">
            <h3 class="element-invisible">SEサービス ✕ SIサービス</h3>
            <ul>
                <li>経験豊富なプロフェッショナルが、IT業務の効率化を実現し、<br class="inline-block vennDiagramBreakpoint:hidden" />コスト削減と品質向上を実現します。
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
.css-art--3-pie-venn-diagram[class] {
    font-size: 1rem;
}

.css-art--3-pie-venn-diagram {
    position: relative;
    font-size: 1rem;
    width: auto;
    margin: 1em auto;
}

.css-art--3-pie-venn-diagram ul {
    padding-left: 0em;
}

.css-art--3-pie-venn-diagram li {
    font-size: 0.7em;
    padding: 0 0 0.25em;
    list-style: none;
}

.css-art--3-pie-venn-diagram .css-art--pie li {
    font-size: 0.875em;
    padding: 0 0 0.25em;
    list-style: disc;
}

.css-art--pie {
    position: relative;
    box-sizing: border-box;
    padding: 0.5em 0 2em;
}

.css-art--pie h3 {
    box-sizing: border-box;
    width: 100%;
    color: rgb(173, 53, 53);
}

.css-art--pie,
.pie-1-2-intersect,
.pie-2-3-intersect,
.pie-3-1-intersect,
.pie-main-intersection {
    position: relative;
    padding: 1em 0 0.75em 1.5em;
}

.css-art--pie h3 {
    margin: 0 0 0.75em;
}

.css-art--pie ul {
    margin: 0;
    padding: 0 0 0 1.5em;
    list-style: disc;
}

.css-art--pie li {
    margin: 0 0 0.25em;
}

.css-art--pie:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 0.5em;
    height: 100%;
    background: #be4c45;
}

.css-art--pie-2:before {
    background: #2b929e;
}

.css-art--pie-2 h3 {
    color: rgb(51, 133, 146);
}

.css-art--pie-3:before {
    background: #dc9947;
}

.css-art--pie-3 h3 {
    color: rgb(200, 133, 51);
}

.pie-1-2-intersect h3 {
    color: #40617f;
}

.pie-1-2-intersect:before {
    background: #40617f;
}

.pie-2-3-intersect h3 {
    color: #649540;
}

.pie-2-3-intersect:before {
    background: #649540;
}

.pie-3-1-intersect h3 {
    color: #bb5335;
}

.pie-3-1-intersect:before {
    background: #c5674c;
}

.pie-main-intersection h3 {
    color: #444;
}

.pie-main-intersection:before {
    background: #444;
}

.pie-1-2-intersect:before,
.pie-1-2-intersect:after,
.pie-2-3-intersect:before,
.pie-2-3-intersect:after,
.pie-3-1-intersect:before,
.pie-3-1-intersect:after,
.pie-main-intersection:before,
.pie-main-intersection:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 0.5em;
    height: 100%;
}

@media (min-width: 51em) {
    .css-art--3-pie-venn-diagram {
        position: relative;
        font-size: 1rem;
        width: calc(45em + 4em);
        height: 45em;
    }

    .css-art--3-pie-venn-diagram ul {
        padding-left: 1.125em;
    }

    .css-art--3-pie-venn-diagram li {
        font-size: 0.7em;
        padding: 0 0 0.25em;
    }

    .css-art--3-pie-venn-diagram .css-art--pie li {
        font-size: 0.875em;
        padding: 0 0 0.25em;
    }

    .css-art--pie {
        position: absolute;
        z-index: 0;
        box-sizing: border-box;
        width: 21em;
        height: 21em;
        border-radius: 50%;
        background: rgba(173, 53, 45, 0.7);
        color: #fff;
    }

    .css-art--pie:before {
        display: none;
    }

    .css-art--pie h3 {
        position: absolute;
        top: -2em;
        box-sizing: border-box;
        width: 100%;
    }

    .css-art--pie ul {
        position: absolute;
        width: 12.5em;
        margin: 0 auto;
    }

    .css-art--pie-1 {
        top: calc(45em / 2 - 21em + 4.5em);
        left: calc(45em / 2 - 21em + 6.5em);
        z-index: 1;
    }

    .css-art--pie-1 h3 {
        padding-right: 4em;
        font-size: x-large;
    }

    .css-art--pie-1 ul {
        left: 2.5em;
        top: 6em;
        right: 5em;
    }

    .css-art--pie-1 li:nth-child(2) {
        padding-right: 1em;
    }

    .css-art--pie-1 li:nth-child(3) {
        padding-right: 2em;
    }

    .css-art--pie-2 {
        top: calc(45em / 2 - 21em + 4.5em);
        right: calc(45em / 2 - 21em + 6.5em);
        background-color: rgba(0, 108, 119, 0.5);
        z-index: 3;
    }

    .css-art--pie-2 h3 {
        padding-right: 2em;
        color: rgb(53, 161, 172);
        text-align: right;
        font-size: x-large;
    }

    .css-art--pie-2 ul {
        right: 0;
        top: 6em;
        left: 10em;
    }

    .css-art--pie-2 li:nth-child(1) {
        padding-right: 2em;
    }

    .css-art--pie-2 li:nth-child(2) {
        padding-right: 1em;
    }

    .css-art--pie-3 {
        bottom: calc(45em / 2 - 21em + 4.5em);
        left: calc(45em / 2 - 21em / 2 + 2em);
        z-index: 0;
        background-color: rgba(220, 153, 71, 1);
    }

    .css-art--pie-3 h3 {
        top: auto;
        left: 0em;
        bottom: -3em;
        color: rgb(242, 141, 40);
        text-align: center;
        font-size: x-large;
    }

    .css-art--pie-3 ul {
        top: 12em;
        left: 6em;
    }

    .pie-1-2-intersect,
    .pie-2-3-intersect,
    .pie-3-1-intersect {
        position: absolute;
        z-index: 5;
        display: inline-block;
        max-width: calc(21em - 5em);
    }

    .pie-1-2-intersect:before,
    .pie-1-2-intersect:after,
    .pie-2-3-intersect:before,
    .pie-2-3-intersect:after,
    .pie-3-1-intersect:before,
    .pie-3-1-intersect:after {
        content: '';
        position: absolute;
        top: auto;
        right: auto;
        bottom: auto;
        left: auto;
        display: block;
        background: transparent;
    }

    .pie-1-2-intersect:after,
    .pie-2-3-intersect:after,
    .pie-3-1-intersect:after {
        width: 0.5em;
        height: 0.5em;
        border: 0.125rem solid #f0d9b8;
        border-radius: 50%;
    }

    .pie-1-2-intersect h3,
    .pie-2-3-intersect h3,
    .pie-3-1-intersect h3 {
        position: absolute !important;
        clip: rect(1px, 1px, 1px, 1px);
        overflow: hidden;
        height: 1px;
    }

    .pie-1-2-intersect {
        left: 50%;
        transform: translate(-50%, 0);
    }

    .pie-1-2-intersect:before {
        top: 100%;
        left: 50%;
        left: calc(50% - 0.0625rem);
        width: 0;
        height: 9em;
        border-left: 0.125rem solid #f0d9b8;
    }

    .pie-1-2-intersect:after {
        top: calc(100% + 9em);
        left: 50%;
        transform: translate(-50%, 0);
    }

    .pie-2-3-intersect {
        top: calc(21em + (45em / 2 - 21em + 4em));
        right: 0;
        width: 13em;
        text-align: right;
    }

    .pie-2-3-intersect:before {
        bottom: 100%;
        right: 50%;
        right: calc(50% - 0.0625rem);
        width: 12em;
        height: 3em;
        border-top: 0.125rem solid #f0d9b8;
        border-right: 0.125rem solid #f0d9b8;
    }

    .pie-2-3-intersect:after {
        bottom: calc(100% + 3.0625em);
        right: calc(50% + 12em);
        transform: translate(0, 50%);
    }

    .pie-2-3-intersect ul {
        display: inline-block;
        text-align: left;
    }

    .pie-3-1-intersect {
        top: calc(21em + (45em / 2 - 21em + 4em));
        left: 0;
        width: 13em;
    }

    .pie-3-1-intersect:before {
        bottom: 100%;
        left: 50%;
        left: calc(50% - 0.0625rem);
        width: 12em;
        height: 3em;
        border-top: 0.125rem solid #f0d9b8;
        border-left: 0.125rem solid #f0d9b8;
    }

    .pie-3-1-intersect:after {
        bottom: calc(100% + 3.0625em);
        left: calc(50% + 12em);
        transform: translate(0, 50%);
    }

    .pie-main-intersection {
        font-size: 0.875em;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 5;
        width: 8em;
        padding: 0;
        transform: translate(-50%, -50%) translate(0, -1.5em);
        text-align: center;
        color: #fff;
    }

    .pie-main-intersection:before {
        display: none;
    }

    .pie-main-intersection div {
        position: absolute !important;
        clip: rect(1px, 1px, 1px, 1px);
        overflow: hidden;
        height: 1px;
    }

    .pie-main-intersection h3 {
        color: #fff;
    }
}
</style>