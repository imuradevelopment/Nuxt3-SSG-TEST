<template>
    <!-- NuxtLayoutコンポーネントでページ全体のレイアウトを設定 -->
    <NuxtLayout>
        <!-- NuxtPageコンポーネントで現在のページコンテンツを表示 -->
        <NuxtPage />
    </NuxtLayout>
    <!-- el-backtopコンポーネントでスクロールトップボタンを表示 -->
    <el-backtop :right="48" :bottom="48" style="width:60px; height:60px; z-index: 51;">
        <!-- アイコンを表示 -->
        <el-icon size="1.8rem" class="w-full h-full text-center">
            <!-- CaretTopアイコンを使用 -->
            <CaretTop />
        </el-icon>
    </el-backtop>
</template>

<script setup lang="ts">
import {
    CaretTop, // CaretTopアイコンをインポート
} from '@element-plus/icons-vue' // Element Plusのアイコンライブラリからアイコンをインポート
</script>
