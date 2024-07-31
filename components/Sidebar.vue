<template>
    <!-- サイドバーコンテナ -->
    <div class="h-full w-min">
        <!-- Element Plusのメニューコンポーネント -->
        <el-menu :default-active="activeIndexStore.activeIndex" class="el-menu-vertical" :collapse="isCollapse">
            <!-- 各メニュー項目 -->
            <el-menu-item index="/recruit">
                <!-- 採用情報ページへのリンク -->
                <NuxtLink @click="scrollToTarget()" to="/recruit">
                    <el-icon>
                        <InfoFilled />
                    </el-icon>
                </NuxtLink>
                <template #title>
                    <NuxtLink @click="scrollToTarget()" to="/recruit">
                        採用情報
                    </NuxtLink>
                </template>
            </el-menu-item>
            <el-menu-item index="/recruit/message">
                <!-- 採用メッセージページへのリンク -->
                <NuxtLink @click="scrollToTarget()" to="/recruit/message">
                    <el-icon>
                        <ChatDotSquare />
                    </el-icon>
                </NuxtLink>
                <template #title>
                    <NuxtLink @click="scrollToTarget()" to="/recruit/message">
                        採用メッセージ
                    </NuxtLink>
                </template>
            </el-menu-item>
            <el-menu-item index="/recruit/feature">
                <!-- ベイルの特徴ページへのリンク -->
                <NuxtLink @click="scrollToTarget()" to="/recruit/feature">
                    <el-icon>
                        <Pointer />
                    </el-icon>
                </NuxtLink>
                <template #title>
                    <NuxtLink @click="scrollToTarget()" to="/recruit/feature">
                        ベイルの特徴
                    </NuxtLink>
                </template>
            </el-menu-item>
            <el-menu-item index="/recruit/induction">
                <!-- 研修制度ページへのリンク -->
                <NuxtLink @click="scrollToTarget()" to="/recruit/induction">
                    <el-icon>
                        <EditPen />
                    </el-icon>
                </NuxtLink>
                <template #title>
                    <NuxtLink @click="scrollToTarget()" to="/recruit/induction">
                        研修制度
                    </NuxtLink>
                </template>
            </el-menu-item>
            <el-menu-item index="/recruit/office">
                <!-- オフィス紹介ページへのリンク -->
                <NuxtLink @click="scrollToTarget()" to="/recruit/office">
                    <el-icon>
                        <School />
                    </el-icon>
                </NuxtLink>
                <template #title>
                    <NuxtLink @click="scrollToTarget()" to="/recruit/office">
                        オフィス紹介
                    </NuxtLink>
                </template>
            </el-menu-item>
            <el-menu-item index="/recruit/welfare">
                <!-- 福利厚生ページへのリンク -->
                <NuxtLink @click="scrollToTarget()" to="/recruit/welfare">
                    <el-icon>
                        <ColdDrink />
                    </el-icon>
                </NuxtLink>
                <template #title>
                    <NuxtLink @click="scrollToTarget()" to="/recruit/welfare">
                        福利厚生
                    </NuxtLink>
                </template>
            </el-menu-item>
            <el-menu-item index="/recruit/data">
                <!-- 各種データページへのリンク -->
                <NuxtLink @click="scrollToTarget()" to="/recruit/data">
                    <el-icon>
                        <TrendCharts />
                    </el-icon>
                </NuxtLink>
                <template #title>
                    <NuxtLink @click="scrollToTarget()" to="/recruit/data">
                        各種データ
                    </NuxtLink>
                </template>
            </el-menu-item>
            <el-menu-item index="/recruit/qa">
                <!-- Q&Aページへのリンク -->
                <NuxtLink @click="scrollToTarget()" to="/recruit/qa">
                    <el-icon>
                        <QuestionFilled />
                    </el-icon>
                </NuxtLink>
                <template #title>
                    <NuxtLink @click="scrollToTarget()" to="/recruit/qa">
                        Ｑ＆Ａ
                    </NuxtLink>
                </template>
            </el-menu-item>
            <el-menu-item index="/recruit/employee">
                <!-- 社員紹介ページへのリンク -->
                <NuxtLink @click="scrollToTarget()" to="/recruit/employee">
                    <el-icon>
                        <Avatar />
                    </el-icon>
                </NuxtLink>
                <template #title>
                    <NuxtLink @click="scrollToTarget()" to="/recruit/employee">
                        社員紹介
                    </NuxtLink>
                </template>
            </el-menu-item>
            <el-menu-item index="/recruit/information">
                <!-- 募集情報ページへのリンク -->
                <NuxtLink @click="scrollToTarget()" to="/recruit/information">
                    <el-icon>
                        <List />
                    </el-icon>
                </NuxtLink>
                <template #title>
                    <NuxtLink @click="scrollToTarget()" to="/recruit/information">
                        募集情報
                    </NuxtLink>
                </template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
    InfoFilled,
    ChatDotSquare,
    Pointer,
    EditPen,
    School,
    ColdDrink,
    TrendCharts,
    QuestionFilled,
    Avatar,
    List,
} from '@element-plus/icons-vue' // Element Plusのアイコンをインポート

import { useActiveIndexStore } from '~/stores/activeIndex' // アクティブなインデックスを管理するストアをインポート
const activeIndexStore = useActiveIndexStore() // ストアのインスタンスを作成

import { useScrollToTarget } from '~/composables/useScrollToTarget' // スクロール処理用のコンポーザブル関数をインポート
const { targetId, scrollToTarget } = useScrollToTarget() // スクロール処理用の関数を取得

const isCollapse = ref(false) // メニューの折りたたみ状態を管理
</script>

<style>
.el-menu {
    border-right: none;
    /* メニューの右側の境界線を削除 */
}

.el-menu-vertical:not(.el-menu--collapse) {
    width: 160px;
    /* メニューの幅を設定 */
    min-height: 400px;
    /* メニューの最小高さを設定 */
}

.el-menu-item {
    padding: 0 0 !important;
    /* メニュー項目のパディングを削除 */
    align-items: center;
    /* メニュー項目のコンテンツを中央揃えに */
}

.el-menu-item .el-menu-tooltip__trigger {
    padding: 0 0 !important;
    /* ツールチップトリガーのパディングを削除 */
}

.el-menu-item>a:nth-child(1) {
    padding: 0 10px 0 20px;
    /* 最初のリンクのパディングを設定 */
}

.el-menu-item>a:nth-child(2) {
    width: 100%;
    /* 2番目のリンクの幅を100%に */
    height: 100%;
    /* 2番目のリンクの高さを100%に */
    display: flex;
    /* フレックスボックスを使用 */
    align-items: center;
    /* コンテンツを中央揃えに */
}
</style>
