<template>
    <div class="pentagon" ref="pentagon" style="clip-path: polygon(50% 0%, 100% 25%, 100% 100%, 0 100%, 0 25%);">
        <slot name="content"></slot>
    </div>
</template>
  
<script lang="ts" setup>

// 要素の参照を取得する
const pentagon = ref<HTMLElement | null>(null)

// 正五角形を保つ関数
const maintainPentagonShape = () => {
    // pentagon.valueがnullまたはundefinedでないことをチェックする
    if (pentagon.value) {
        // 要素の横幅を取得する
        const width = pentagon.value.offsetWidth
        // 要素の高さを設定する
        // pentagon.value.style.height = width + 'px'
    }
}

// ウィンドウのサイズが変更されたときに正五角形を保つ
const handleResize = () => {
    maintainPentagonShape()
}

// ページ読み込み時にも正五角形を保つ
onMounted(() => {
    maintainPentagonShape()
    window.addEventListener('resize', handleResize)
})

// イベントリスナーを削除する
onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})
</script>
  
<style scoped>
</style>
  