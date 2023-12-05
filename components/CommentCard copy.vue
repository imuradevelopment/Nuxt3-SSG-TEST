<template>
    <div class="p-4 mx-auto">
        <div class="comment-card bg-white p-4 rounded-lg shadow-lg relative">
            <div class="comment-arrow absolute -left-2 top-5 bg-white border-l border-b transform rotate-45 w-4 h-4"></div>
            <p class="text-gray-600">
                <slot name="content">

                </slot>
            </p>
        </div>
    </div>
</template>

<script setup>
// Nuxt3コンポーネントのスクリプトをここに記述
</script>

<style>
/* Tailwind CSSを使用したスタイル */
.comment-card {
    border: 1px solid #e5e7eb;
    /* 線は1px */
}

.comment-arrow {
    border-color: #e5e7eb;
    /* 吹き出しの矢印部分のボーダーカラー */
}
</style>
