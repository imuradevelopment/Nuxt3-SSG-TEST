<template>
  <!-- ガラスの板を表すdiv要素 -->
  <div class="glass-container" :class="props.rounded ? 'rounded' : ''"
    :style="{ backgroundColor: `rgba(0, 0, 0, ${props.opacity})` }">
    <!-- スロットを使用してコンテンツを挿入 -->
    <slot name="content">ガラスの上に表示するコンテンツ</slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

// コンポーネントのプロパティを定義
const props = defineProps({
  rounded: {
    type: Boolean,
    required: false,
    default: true
  },
  opacity: {
    type: Number,
    required: false,
    default: 0.2
  }
})
</script>

<style>
/* ガラスの板のスタイル */
.glass-container {
  margin: auto;
  /* ガラスの板のマージン */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  /* ガラスの板の外側に黒い影をつける */
}

/* roundedクラスが追加された場合のスタイル */
.rounded {
  border-radius: 10px;
  /* 角を丸くする */
}
</style>
