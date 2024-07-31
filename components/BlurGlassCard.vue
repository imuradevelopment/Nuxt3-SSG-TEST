<template>
    <!-- カードコンポーネント -->
    <!-- 動的なクラスとスタイルを適用 -->
    <div class="card" :class="props.rounded ? 'rounded' : ''"
        :style="`background:${props.color}; backdrop-filter:saturate(180%) blur(${props.blur}px);`">
        <!-- カード内のテキスト -->
        <p class="card-text">
            <!-- スロットを使用してコンテンツを挿入 -->
            <slot>ガラスの上に表示するコンテンツ</slot>
        </p>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

// コンポーネントのプロパティを定義
const props = defineProps({
    rounded: {
        type: Boolean,
        required: false,
        default: false
    },
    blur: {
        type: Number,
        required: false,
        default: 3
    },
    color: {
        type: String,
        required: false,
        default: "rgba(0, 37, 92, 0.1)"
    },
})
</script>

<style scoped>
/* カードのスタイル */
.card {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    /* カードに影をつける */
}

/* カード内のテキストのスタイル */
.card-text {
    padding: 1rem;
    /* テキストの内側余白を設定 */
}

/* カードがroundedクラスを持つ場合のスタイル */
.rounded {
    border-radius: 12px;
    /* 角を丸くする */
}
</style>
