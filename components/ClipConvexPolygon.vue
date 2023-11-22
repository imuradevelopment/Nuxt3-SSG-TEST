<template>
    <div class="convexPolygon" ref="convexPolygon" style="clip-path: polygon(50% 0%, 90% 30%, 75% 80%, 25% 80%, 10% 30%);">
        <slot name="content"></slot>
    </div>
</template>
  
<script lang="ts" setup>

// 要素の参照を取得する
const convexPolygon = ref<HTMLElement | null>(null)

// 凸多角形を保つ関数
const maintainConvexPolygonShape = () => {
    // convexPolygon.valueがnullまたはundefinedでないことをチェックする
    if (convexPolygon.value) {
        // 要素の横幅を取得する
        const width = convexPolygon.value.offsetWidth
        // 要素の高さを設定する
        convexPolygon.value.style.height = width * 0.8 + 'px'
    }
}

// ウィンドウのサイズが変更されたときに凸多角形を保つ
const handleResize = () => {
    maintainConvexPolygonShape()
}

// ページ読み込み時にも凸多角形を保つ
onMounted(() => {
    maintainConvexPolygonShape()
    window.addEventListener('resize', handleResize)
})

// イベントリスナーを削除する
onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})
</script>
  
<style scoped>
.convexPolygon {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
}
</style>
