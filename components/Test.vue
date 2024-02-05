<!-- components/MyComponent.vue -->
<template>
    <section class="text-white bg-custom-deepBlue text-2xl font-bold leading-loose text-balance">
        <h2 class="text-center" ref="h2">
            <!-- slotで親から文字列を受け取る -->
            <slot></slot>
        </h2>
    </section>
</template>

<style scoped>
/* spanタグに白い背景色と青い文字色を指定する */
span {
    background-color: white;
    color: #003366;
}
</style>

<script setup lang="ts">
// Composition APIの関数をインポートする
import { ref, onMounted } from 'vue'

// h2要素の参照を作成する
const h2 = ref<HTMLElement | null>(null)

// コンポーネントがマウントされたときに実行する関数を定義する
onMounted(() => {
    // h2要素が存在する場合
    if (h2.value) {
        // h2要素の高さを取得する
        const h2Height = h2.value.offsetHeight
        // h2要素のline-heightを取得する
        const h2LineHeight = parseInt(window.getComputedStyle(h2.value).lineHeight)
        // h2要素の行数を計算する
        const h2Lines = Math.floor(h2Height / h2LineHeight)
        // h2要素の行数が2より大きい場合
        if (h2Lines > 2) {
            // h2要素のテキストを分割する
            const h2Text = h2.value.textContent?.split("") ?? []
            // 2行目の開始位置と終了位置を計算する
            const start = Math.floor(h2Text.length / h2Lines)
            const end = start * 2
            // 2行目のテキストを取得する
            const secondLine = h2Text.slice(start, end).join("")
            // 2行目のテキストにspanタグを付ける
            const span = "<span>" + secondLine + "</span>"
            // h2要素のテキストを置き換える
            h2.value.innerHTML = h2.value.textContent?.replace(secondLine, span) ?? ""
        }
    }
})
</script>
