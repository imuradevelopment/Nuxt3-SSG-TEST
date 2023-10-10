<template>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="white"
        text-color="black" active-text-color="#ffd04b" @select="handleSelect">
        <el-menu-item index="0" class="logo">
            <NuxtLink to="/">
                <el-image src="../images/header/logo.svg"></el-image>
            </NuxtLink>
        </el-menu-item>
        <div class="flex-grow" />
        <el-sub-menu index="1">
            <template #title>Workspace</template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
            <el-menu-item index="1-3">item three</el-menu-item>
            <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
                <el-menu-item index="1-4-2">item two</el-menu-item>
                <el-menu-item index="1-4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2" disabled>Info</el-menu-item>
        <el-menu-item index="3">Orders</el-menu-item>
    </el-menu>
</template>
  
<script setup lang="ts">
import { useActiveIndexStore } from '~/stores/activeIndex'

const activeIndexStore = useActiveIndexStore()
const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    activeIndexStore.activeIndex = key
}
</script>
  
<style scoped>
.flex-grow {
    flex-grow: 1;
}

.el-menu-item {
    padding: 0 1rem 0 1rem;
    font-family: 'Ariel';
    font-size: medium;
    font-weight: 600;
}

.logo {
    width: 185px;
    padding: 0;
    transition-property: none !important;
}

.logo.is-active {
    border-bottom: 2px solid white !important;
}

.logo:hover,
.logo:focus {
    background-color: white !important;
}
</style>