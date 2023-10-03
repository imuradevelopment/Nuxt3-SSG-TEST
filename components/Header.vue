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
            <el-menu-item index="7">
                <NuxtLink to="/recruit/message">採用メッセージ</NuxtLink>
            </el-menu-item>
            <el-menu-item index="8">
                <NuxtLink to="/recruit/feature">ベイルの特徴</NuxtLink>
            </el-menu-item>
            <el-menu-item index="9">
                <NuxtLink to="/recruit/office">オフィス紹介</NuxtLink>
            </el-menu-item>
            <el-menu-item index="10">
                <NuxtLink to="/recruit/induction">研修制度</NuxtLink>
            </el-menu-item>
            <el-menu-item index="11">
                <NuxtLink to="/recruit/welfare">福利厚生</NuxtLink>
            </el-menu-item>
            <el-menu-item index="12">
                <NuxtLink to="/recruit/data">各種データ</NuxtLink>
            </el-menu-item>
            <el-menu-item index="13">
                <NuxtLink to="/recruit/qa">QA</NuxtLink>
            </el-menu-item>
            <el-menu-item index="14">
                <NuxtLink to="/recruit/employee">社員紹介</NuxtLink>
            </el-menu-item>
            <el-menu-item index="15">
                <NuxtLink to="/recruit/information">募集情報</NuxtLink>
            </el-menu-item>
            <el-menu-item index="16">
                <NuxtLink to="/policy">個人情報保護方針ページ</NuxtLink>
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