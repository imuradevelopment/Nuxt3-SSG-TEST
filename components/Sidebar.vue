<template>
    <div class="h-full w-min">
        <el-menu :default-active="activeIndexStore.activeIndex" class="el-menu-vertical" :collapse="isCollapse">
            <el-menu-item index="/recruit">
                <NuxtLink @click="scrollToTarget()" to="/recruit">
                        <el-icon><InfoFilled /></el-icon>
                </NuxtLink>
                <template #title>
                    <NuxtLink @click="scrollToTarget()" to="/recruit">
                        採用情報
                    </NuxtLink>
                </template>
            </el-menu-item>
            <el-menu-item index="/recruit/message">
                <NuxtLink @click="scrollToTarget()" to="/recruit/message">
                        <el-icon><ChatDotSquare /></el-icon>
                </NuxtLink>
                <template #title>
                    <NuxtLink @click="scrollToTarget()" to="/recruit/message">
                        採用メッセージ
                    </NuxtLink>
                </template>
            </el-menu-item>
            <el-menu-item index="/recruit/feature">
                <NuxtLink @click="scrollToTarget()" to="/recruit/feature">
                    <el-icon><Pointer /></el-icon>
                </NuxtLink>
                <template #title>
                    <NuxtLink @click="scrollToTarget()" to="/recruit/feature">ベイルの特徴</NuxtLink></template>
            </el-menu-item>
            <el-menu-item index="/recruit/induction">
                <NuxtLink @click="scrollToTarget()" to="/recruit/induction">
                    <el-icon>
                        <EditPen />
                    </el-icon>
                </NuxtLink>
                <template #title><NuxtLink @click="scrollToTarget()" to="/recruit/induction">研修制度</NuxtLink></template>
            </el-menu-item>
            <el-menu-item index="/recruit/office">
                <NuxtLink @click="scrollToTarget()" to="/recruit/office">
                    <el-icon>
                        <School />
                    </el-icon>
                </NuxtLink>
                <template #title><NuxtLink @click="scrollToTarget()" to="/recruit/office">オフィス紹介</NuxtLink></template>
            </el-menu-item>
            <el-menu-item index="/recruit/welfare">
                <NuxtLink @click="scrollToTarget()" to="/recruit/welfare">
                    <el-icon>
                        <ColdDrink />
                    </el-icon>
                </NuxtLink>
                <template #title><NuxtLink @click="scrollToTarget()" to="/recruit/welfare">福利厚生</NuxtLink></template>
            </el-menu-item>
            <el-menu-item index="/recruit/data">
                <NuxtLink @click="scrollToTarget()" to="/recruit/data">
                    <el-icon>
                        <TrendCharts />
                    </el-icon>
                </NuxtLink>
                <template #title><NuxtLink @click="scrollToTarget()" to="/recruit/data">各種データ</NuxtLink></template>
            </el-menu-item>
            <el-menu-item index="/recruit/qa">
                <NuxtLink @click="scrollToTarget()" to="/recruit/qa">
                    <el-icon>
                        <QuestionFilled />
                    </el-icon>
                </NuxtLink>
                <template #title><NuxtLink @click="scrollToTarget()" to="/recruit/qa">Ｑ＆Ａ</NuxtLink></template>
            </el-menu-item>
            <el-menu-item index="/recruit/employee">
                <NuxtLink @click="scrollToTarget()" to="/recruit/employee">
                    <el-icon>
                        <Avatar />
                    </el-icon>
                </NuxtLink>
                <template #title><NuxtLink @click="scrollToTarget()" to="/recruit/employee">社員紹介</NuxtLink></template>
            </el-menu-item>
            <el-menu-item index="/recruit/information">
                <NuxtLink @click="scrollToTarget()" to="/recruit/information">
                    <el-icon>
                        <List />
                    </el-icon>
                </NuxtLink>
                <template #title><NuxtLink @click="scrollToTarget()" to="/recruit/information">募集情報</NuxtLink></template>
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
} from '@element-plus/icons-vue'

import { useActiveIndexStore } from '~/stores/activeIndex'
const activeIndexStore = useActiveIndexStore()
import { useScrollToTarget } from '~/composables/useScrollToTarget'
// useScrollToTargetを呼び出す
const { targetId, scrollToTarget } = useScrollToTarget()
const isCollapse = ref(false)
</script>

<style>
.el-menu {
    border-right: none;
}
.el-menu-vertical:not(.el-menu--collapse) {
    width: 160px;
    min-height: 400px;
}
.el-menu-item {
    padding: 0 0!important;
    align-items: center;
}
.el-menu-item .el-menu-tooltip__trigger {
    padding: 0 0!important;
}
.el-menu-item > a:nth-child(1) {
    padding: 0 10px 0 20px;
}
.el-menu-item > a:nth-child(2) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}

</style>