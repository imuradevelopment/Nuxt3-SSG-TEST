<template>
    <div>

        <section class="mb-12 md:mb-24 flex bg-cover bg-[url('/images/recruit/information/001.png')]">
            <div class="basis-1/3 h-auto z-10 bg-custom-deepBlue"
                style="clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%)">
            </div>
            <div class="flex flex-col grow">
                <h1 id="recruit-information01"
                    class="linkScroll self-end mx-8 text-2xl sm:text-4xl font-bold text-white">
                    募集情報
                </h1>
                <p
                    class="pl-28 pr-4 -ml-28 mt-12 text-center mb-4 py-2 text-base md:text-lg font-bold text-white bg-custom-blue/70">
                    新卒採用の募集内容をお伝えします。</p>
            </div>
        </section>

        <section>
            <el-tabs v-model="activeName" type="card" class="tabs" @tab-click="handleClick">
                <el-tab-pane label="新卒採用" name="first">User</el-tab-pane>
                <el-tab-pane label="キャリア採用" name="second">Config</el-tab-pane>
                <el-tab-pane label="契約社員採用" name="third">Role</el-tab-pane>
            </el-tabs>
        </section>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'double-column-sidebar'
})
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
</script>

<style>
.tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.el-tabs--card>.el-tabs__header .el-tabs__nav {
    border: none!important;
}

.el-tabs--card>.el-tabs__header .el-tabs__item:first-child {
    border-left: 1px solid var(--el-border-color-light) !important;
    margin-right: 1rem !important;
}

.el-tabs--card>.el-tabs__header .el-tabs__item:last-child {
    margin-left:1rem!important;
}

.el-tabs--card>.el-tabs__header .el-tabs__item {
    border-bottom: 1px solid #0000 !important;
    border-left: 1px solid var(--el-border-color-light)!important;
    border-right: 1px solid var(--el-border-color-light)!important;
    border-top: 1px solid var(--el-border-color-light)!important;
    border-top-left-radius: 0.375rem !important;
    border-top-right-radius: 0.375rem !important;
    transition: color var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier), padding var(--el-transition-duration) var(--el-transition-function-ease-in-out-bezier)!important;
}

.el-tabs__item.is-active,
.el-tabs__item:hover {
    color: white !important;
    background-color: var(--custom-color-deepBlue)!important;
}
</style>