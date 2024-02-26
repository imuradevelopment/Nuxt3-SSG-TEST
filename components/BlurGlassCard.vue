<template>
    <div class="card" :class="props.rounded ? 'rounded' : ''" :style="`background:${props.color}; backdrop-filter:saturate(180%) blur(${props.blur}px);`">
        <p class="card-text">
            <slot>ガラスの上に表示するコンテンツ</slot>
        </p>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
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
}

/* カード内のテキストのスタイル */
.card-text {
    padding: 20px;
}</style>