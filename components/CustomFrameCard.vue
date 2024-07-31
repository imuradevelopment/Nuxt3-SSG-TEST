<template>
    <!-- カード全体を囲むラッパー -->
    <div class="wrapper">
        <!-- カードのタイトル部分 -->
        <h3 class="title">
            <!-- スロットを使用して親コンポーネントからタイトルを挿入 -->
            <slot name="title"></slot>
        </h3>
        <!-- カードの内容部分 -->
        <p class="content">
            <!-- スロットを使用して親コンポーネントから内容を挿入 -->
            <slot name="content"></slot>
        </p>
    </div>
</template>

<style scoped>
/* カードのラッパースタイル */
.wrapper {
    display: flex;
    /* フレックスボックスレイアウトを使用 */
    align-items: center;
    /* アイテムを中央に揃える（縦方向） */
    justify-content: center;
    /* アイテムを中央に揃える（横方向） */
    flex-direction: column;
    /* アイテムを縦方向に並べる */
}

/* タイトル部分のスタイル */
.title {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    font-weight: bold;
    overflow-wrap: break-word;
    /* 長い単語を折り返す */
    text-align: center;
    /* テキストを中央揃え */
    color: var(--custom-color-gray);
    /* テキストの色 */
    border-radius: 0.25rem;
    /* 角を丸くする */
    border: 1px solid var(--custom-color-gray);
    /* ボーダーのスタイル */
    width: max-content;
    /* コンテンツに合わせて幅を調整 */
    transform: translateY(50%);
    /* Y方向に50%移動 */
    background-color: white;
    /* 背景色 */

    @media (min-width: 768px) {
        font-size: 1.125rem;
        /* 画面幅が768px以上の場合のフォントサイズ */
    }
}

/* コンテンツ部分のスタイル */
.content {
    max-width: 48rem;
    /* 最大幅 */
    width: 100%;
    /* 幅 */
    padding: 1rem;
    padding-top: 2rem;
    line-height: 1.75rem;
    font-size: 0.875rem;
    white-space: pre-line;
    /* 改行を保持 */
    overflow-wrap: break-word;
    /* 長い単語を折り返す */
    word-break: keep-all;
    /* 単語の途中で折り返さない */
    text-align: center;
    /* テキストを中央揃え */
    border-radius: 0.25rem;
    /* 角を丸くする */
    border: 1px solid var(--custom-color-gray);
    /* ボーダーのスタイル */

    @media (min-width: 768px) {
        line-height: 2rem;
        /* 画面幅が768px以上の場合の行間 */
        font-size: 1rem;
        /* 画面幅が768px以上の場合のフォントサイズ */
    }
}
</style>
