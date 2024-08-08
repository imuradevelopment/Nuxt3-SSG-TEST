<template>
    <!-- ハンバーガーメニューを表示（モバイル向け） -->
    <BurgerMenu class="md:hidden" />

    <!-- デスクトップメニュー -->
    <!-- デスクトップサイズ（md以上）で表示されるメニュー -->
    <div class="hidden md:inline-block fixed mt-0 z-50" style="width:100%; max-width:1280px">
        <!-- Element Plusのメニューコンポーネント -->
        <el-menu class="hidden md:inline-block" :default-active="activeIndexStore.activeIndex" mode="horizontal"
            :ellipsis="false">
            <!-- ロゴ部分 -->
            <el-menu-item index="/" class="logo">
                <!-- NuxtLinkを使用してホームページへのリンクを設定 -->
                <NuxtLink @click="scrollToTarget()" to="/">
                    <!-- NuxtImgでロゴ画像を表示 -->
                    <NuxtImg width="185" fit="cover" src="/images/logo/logo.png" />
                </NuxtLink>
            </el-menu-item>

            <!-- メニュー項目を右寄せにするためのスペーサー -->
            <div class="flex-grow" />

            <!-- 会社情報ページへのリンク -->
            <el-menu-item index="/company" class="el-menu-item-custom">
                <NuxtLink @click="scrollToTarget()" to="/company">会社情報</NuxtLink>
            </el-menu-item>

            <!-- 事業情報ページへのリンク -->
            <el-menu-item index="/service" class="el-menu-item-custom">
                <NuxtLink @click="scrollToTarget()" to="/service">事業情報</NuxtLink>
            </el-menu-item>

            <!-- 採用情報ページへのリンク -->
            <el-menu-item index="/recruit" class="el-menu-item-custom">
                <NuxtLink @click="scrollToTarget()" to="/recruit">採用情報</NuxtLink>
            </el-menu-item>

            <!-- アクセスページへのリンク -->
            <el-menu-item index="/access" class="el-menu-item-custom2">
                <!-- ボタンを使用してアクセスページへのリンクを設定 -->
                <el-button type="primary" class="el-button-custom">
                    <NuxtLink class="w-full h-full" style="padding: 18px 15px;" @click="scrollToTarget()"
                        to="/company#company05">アクセス</NuxtLink>
                </el-button>
            </el-menu-item>

            <!-- お問い合わせページへのリンク -->
            <el-menu-item index="/contact" class="el-menu-item-custom2" style="margin-right: 0px;">
                <!-- ボタンを使用してお問い合わせページへのリンクを設定 -->
                <el-button type="primary" class="el-button-custom">
                    <NuxtLink class="w-full h-full" style="padding: 18px 15px;" @click="scrollToTarget()" to="/contact">
                        お問い合わせ</NuxtLink>
                </el-button>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { useActiveIndexStore } from '~/stores/activeIndex' // アクティブなメニュー項目の状態管理用ストアをインポート
const activeIndexStore = useActiveIndexStore() // ストアのインスタンスを作成

import { useScrollToTarget } from '~/composables/useScrollToTarget' // スクロール処理用のコンポーザブル関数をインポート
const { targetId, scrollToTarget } = useScrollToTarget() // スクロール処理用の関数を取得
</script>

<style scoped>
/* メニュー項目を右寄せするためのスペーサー */
.flex-grow {
    flex-grow: 1;
}

/* メニュー項目のカスタムスタイル */
.el-menu-item-custom {
    padding: 0.25rem 1rem 0 1rem;
    font-size: large;
    font-weight: bold;
    height: auto;
    letter-spacing: 0.075rem;
}

/* ボタンを含むメニュー項目のカスタムスタイル */
.el-menu-item-custom2 {
    padding: 0;
    margin: 0.25rem 0.5rem 0 0.5rem;
    font-size: large;
    font-weight: bold;
    height: auto;
    letter-spacing: 0.075rem;
}

.el-menu-item-custom2 a {
    font-size: medium;
    font-weight: 600;
}

/* カスタムボタンのスタイル */
.el-button-custom {
    height: 100%;
    margin: 0 0 0.25rem 0;
    padding: 0!important;
}

/* ロゴ部分のカスタムスタイル */
.logo {
    padding: 0;
    margin-top: auto;
    margin-bottom: auto;
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
