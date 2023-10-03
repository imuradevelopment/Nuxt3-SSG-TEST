<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
        <el-menu-item index="0" class="logo">
            <!-- <el-image src="../images/header/logo.png"></el-image> -->
            LOGO
        </el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="1" class="el-menu-item">
            <NuxtLink to="/">Company</NuxtLink>
        </el-menu-item>
        <el-menu-item index="2" class="el-menu-item">
            <NuxtLink to="/service">Service</NuxtLink>
        </el-menu-item>
        <el-menu-item index="3" class="el-menu-item">
            <NuxtLink to="/recruit">Recruit</NuxtLink>
        </el-menu-item>
        <el-menu-item index="4" class="el-menu-item">
            <NuxtLink to="/access">Access</NuxtLink>
        </el-menu-item>
        <el-menu-item index="5" class="el-menu-item">
            <NuxtLink to="/contact">Contact</NuxtLink>
        </el-menu-item>
        <el-sub-menu index="6">
            <template #title>その他遷移</template>
            <el-menu-item index="0">
                <NuxtLink to="/">/recruit/message</NuxtLink>
            </el-menu-item>
            <el-menu-item index="1">
                <NuxtLink to="/">/recruit/feature</NuxtLink>
            </el-menu-item>
            <el-menu-item index="2">
                <NuxtLink to="/">/recruit/office</NuxtLink>
            </el-menu-item>
            <el-menu-item index="3">
                <NuxtLink to="/">/recruit/induction</NuxtLink>
            </el-menu-item>
            <el-menu-item index="4">
                <NuxtLink to="/">/recruit/welfare</NuxtLink>
            </el-menu-item>
            <el-menu-item index="5">
                <NuxtLink to="/">/recruit/data</NuxtLink>
            </el-menu-item>
            <el-menu-item index="6">
                <NuxtLink to="/">/recruit/qa</NuxtLink>
            </el-menu-item>
            <el-menu-item index="7">
                <NuxtLink to="/">/recruit/employee</NuxtLink>
            </el-menu-item>
            <el-menu-item index="8">
                <NuxtLink to="/">/recruit/information</NuxtLink>
            </el-menu-item>
            <el-menu-item index="9">
                <NuxtLink to="/">個人情報保護方針ページ</NuxtLink>
            </el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>
<style scoped>
.flex-grow {
    flex-grow: 1;
}

.el-menu-item {
    padding: 0px;
}

.el-menu-item>a {
    padding: 0 20px 0 20px;
}

.logo {
    padding: 0 0 0 0;
}
</style>