<template>
    <BurgerMenu class="md:hidden"/>
    <!-- デスクトップメニュー -->
    <div class="hidden md:inline-block" style="width:100%">
        <el-menu class="hidden md:inline-block" :default-active="activeIndexStore.activeIndex" mode="horizontal" :ellipsis="false"
            @select="handleSelect">
            <el-menu-item index="0" class="logo">
                <NuxtLink to="/">
                    <el-image src="../images/header/logo.svg"></el-image>
                </NuxtLink>
            </el-menu-item>
            <div class="flex-grow" />
            <el-menu-item index="1" class="el-menu-item-custom">
                <NuxtLink to="/company">会社情報</NuxtLink>
            </el-menu-item>
            <el-menu-item index="2" class="el-menu-item-custom">
                <NuxtLink to="/service">事業情報</NuxtLink>
            </el-menu-item>
            <el-menu-item index="3" class="el-menu-item-custom">
                <NuxtLink to="/recruit">採用情報</NuxtLink>
            </el-menu-item>
            <el-menu-item index="4" class="el-menu-item-custom2">
                <el-button type="primary" class="el-button-custom">
                    <NuxtLink to="/access">アクセス</NuxtLink>
                </el-button>
            </el-menu-item>
            <el-menu-item index="5" class="el-menu-item-custom2">
                <el-button type="primary" class="el-button-custom">
                    <NuxtLink to="/contact">お問い合わせ</NuxtLink>
                </el-button>
            </el-menu-item>
            <el-sub-menu index="6">
                <template #title>その他遷移</template>
                <el-menu-item index="7">
                    <NuxtLink to="/recruit/message">採用メッセージ</NuxtLink>
                </el-menu-item>
                <el-menu-item index="8">
                    <NuxtLink to="/recruit/feature">ペイルの特徴</NuxtLink>
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
    </div>
</template>
  
<script setup lang="ts">
import { useActiveIndexStore } from '~/stores/activeIndex'

const activeIndexStore = useActiveIndexStore()

const handleSelect = (key: string, keyPath: string[]) => {
    activeIndexStore.activeIndex = key
}

let menuOpen = false

const toggleMenu = () => {
    menuOpen = !menuOpen
}

const closeMenu = () => {
    menuOpen = false
}
</script>
  
<style scoped>
.flex-grow {
    flex-grow: 1;
}

.el-menu-item-custom {
    padding: 0.25rem 1rem 0 1rem;
    font-family: 'Meiryo';
    font-size: medium;
    font-weight: 600;
    height: auto;
}
.el-menu-item-custom2 {
    padding: 0;
    margin: 0.25rem 0.5rem 0 0.5rem;
    font-family: 'Meiryo';
    font-size: medium;
    font-weight: 600;
    height: auto;
}
.el-menu-item-custom2 a {
    font-size: medium;
    font-weight: 600;
}
.el-button-custom{
    height: 100%;
    margin: 0 0 0.25rem 0;
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