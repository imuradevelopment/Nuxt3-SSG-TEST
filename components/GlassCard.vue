<template>
  <div class="glass-container" :class="props.rounded ? 'rounded': ''" :style="{backgroundColor: `rgba(0, 0, 0, ${props.opacity})`}"> <!-- ガラスの板を表すdiv要素 -->
      <div class="glass-text">
          <slot name="content">ガラスの上に表示するコンテンツ</slot>
      </div> <!-- ガラスの上に表示するテキスト -->
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  rounded : {
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
.glass-container {
  margin: auto; /* ガラスの板のマージン */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* ガラスの板の外側に黒い影をつける */

}
</style>
