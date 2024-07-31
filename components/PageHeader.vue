<template>
    <!-- ナビゲーションバー -->
    <nav class="flex items-center text-sm font-medium w-fit" style="max-width: 1280px;">
        <ol class="flex items-center space-x-4">
            <!-- 項目をリスト表示 -->
            <li v-for="(item, index) in items" :key="item.id" class="flex">
                <div class="flex items-center">
                    <!-- リンクを生成 -->
                    <NuxtLink :to="`${useRoute().path}#${item.id}`" class="text-gray-200 hover:text-gray-100">{{
                item.text }}</NuxtLink>
                    <!-- セパレータを表示 -->
                    <svg v-if="index < items.length - 1" class="flex-shrink-0 ml-4 h-5 w-5 text-gray-300"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path :d="getPath(separator)" />
                    </svg>
                </div>
            </li>
        </ol>
    </nav>
</template>

<script setup>
import { onMounted, ref } from 'vue'

// 見出し項目を格納するためのリファレンス
const items = ref([])

// コンポーネントがマウントされたときの処理
onMounted(() => {
    // ページ内のh2要素を取得し、itemsリストに追加
    const headings = document.querySelectorAll('h2[id]')
    items.value = Array.from(headings).map(h => ({ id: h.id, text: h.textContent }))
})

// プロパティの定義
const props = defineProps({
    separator: {
        type: String,
        default: 'Slash', // デフォルトはスラッシュ
        validator: value => ['Slash', 'Chevron', 'Arrow'].includes(value) // 有効なセパレータの種類を検証
    }
})

// セパレータのパスを取得する関数
const getPath = (type) => {
    switch (type) {
        case 'Slash':
            return 'M5.555 17.776l8-16 .894.448-8 16-.894-.448z'
        case 'Chevron':
            return 'M9 5l7 7-7 7'
        case 'Arrow':
            return 'M17 10l-5 5-5-5'
        default:
            return 'M5.555 17.776l8-16 .894.448-8 16-.894-.448z'
    }
}
</script>
