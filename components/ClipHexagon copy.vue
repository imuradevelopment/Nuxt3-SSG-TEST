<template>
    <div class="hexagon" ref="hexagon" style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);">
        <slot name="content"></slot>
    </div>
</template>
  
<script lang="ts" setup>

// 要素の参照を取得する
const hexagon = ref<HTMLElement | null>(null)

// 正六角形を保つ関数
const maintainHexagonShape = () => {
    // hexagon.valueがnullまたはundefinedでないことをチェックする
    if (hexagon.value) {
        // 要素の横幅を取得する
        const width = hexagon.value.offsetWidth
        // 正六角形の一辺の長さを計算する
        // const side = (width / 2) * (2 / Math.sqrt(3))
        // 要素の横幅を正六角形の一辺の長さに合わせる
        // hexagon.value.style.width = side + 'px'
        // 正六角形の高さを計算する
        // const height = (side * Math.sqrt(3) / 2) + 'px'
        // 要素の高さを設定する
        // hexagon.value.style.height = height
        hexagon.value.style.height = width + 'px'
    }
}

// ウィンドウのサイズが変更されたときに正六角形を保つ
const handleResize = () => {
    maintainHexagonShape()
}

// ページ読み込み時にも正六角形を保つ
onMounted(() => {
    maintainHexagonShape()
    window.addEventListener('resize', handleResize)
})

// イベントリスナーを削除する
onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})
</script>
  
<style scoped>
</style>
  