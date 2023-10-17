<template>
    <BurgerMenu class="md:hidden"/>
    <!-- デスクトップメニュー -->
    <div class="hidden md:inline-block" style="width:100%">
        <el-menu class="hidden md:inline-block" :default-active="activeIndexStore.activeIndex" mode="horizontal" :ellipsis="false">
            <el-menu-item index="/" class="logo">
                <NuxtLink to="/">
                    <el-image src="../images/logo/logo.svg"></el-image>
                </NuxtLink>
            </el-menu-item>
            <div class="flex-grow" />
            <el-menu-item index="/company" class="el-menu-item-custom">
                <NuxtLink to="/company">会社情報</NuxtLink>
            </el-menu-item>
            <el-menu-item index="/service" class="el-menu-item-custom">
                <NuxtLink to="/service">事業情報</NuxtLink>
            </el-menu-item>
            <el-menu-item index="/recruit" class="el-menu-item-custom">
                <NuxtLink to="/recruit">採用情報</NuxtLink>
            </el-menu-item>
            <el-menu-item index="/access" class="el-menu-item-custom2">
                <el-button type="primary" class="el-button-custom">
                    <NuxtLink to="/access">アクセス</NuxtLink>
                </el-button>
            </el-menu-item>
            <el-menu-item index="/contact" class="el-menu-item-custom2">
                <el-button type="primary" class="el-button-custom">
                    <NuxtLink to="/contact">お問い合わせ</NuxtLink>
                </el-button>
            </el-menu-item>
            <el-sub-menu index="6">
                <template #title>その他遷移</template>
                <el-menu-item index="/recruit/message">
                    <NuxtLink to="/recruit/message">採用メッセージ</NuxtLink>
                </el-menu-item>
                <el-menu-item index="/recruit/feature">
                    <NuxtLink to="/recruit/feature">ペイルの特徴</NuxtLink>
                </el-menu-item>
                <el-menu-item index="/recruit/office">
                    <NuxtLink to="/recruit/office">オフィス紹介</NuxtLink>
                </el-menu-item>
                <el-menu-item index="/recruit/induction">
                    <NuxtLink to="/recruit/induction">研修制度</NuxtLink>
                </el-menu-item>
                <el-menu-item index="/recruit/welfare">
                    <NuxtLink to="/recruit/welfare">福利厚生</NuxtLink>
                </el-menu-item>
                <el-menu-item index="/recruit/data">
                    <NuxtLink to="/recruit/data">各種データ</NuxtLink>
                </el-menu-item>
                <el-menu-item index="/recruit/qa">
                    <NuxtLink to="/recruit/qa">QA</NuxtLink>
                </el-menu-item>
                <el-menu-item index="/recruit/employee">
                    <NuxtLink to="/recruit/employee">社員紹介</NuxtLink>
                </el-menu-item>
                <el-menu-item index="/recruit/information">
                    <NuxtLink to="/recruit/information">募集情報</NuxtLink>
                </el-menu-item>
                <el-menu-item index="/policy">
                    <NuxtLink to="/policy">個人情報保護方針ページ</NuxtLink>
                </el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
</template>
  
<script setup lang="ts">
import { useActiveIndexStore } from '~/stores/activeIndex'

const activeIndexStore = useActiveIndexStore()
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