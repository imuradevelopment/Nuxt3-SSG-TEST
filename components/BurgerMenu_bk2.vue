<template>
    <div class="relative">
        <!-- ロゴ -->
        <NuxtLink to="/">
            <el-image alt="Logo" class="absolute top-0 left-0" src="../images/header/logo.svg"></el-image>
        </NuxtLink>

        <!-- ハンバーガーアイコン -->
        <div @click="toggleMenu" class="cursor-pointer absolute top-0 right-0 h-16 w-16 flex items-center justify-center">
            <div v-if="!isOpen" class="bg-black h-1.25 w-12"></div>
            <div v-if="!isOpen" class="bg-black h-1.25 w-12 mt-1"></div>
            <div v-if="!isOpen" class="bg-black h-1.25 w-12 mt-1"></div>
            <div v-if="isOpen" class="bg-black h-1.25 w-12"></div>
            <div v-if="isOpen" class="bg-black h-1.25 w-12 mt-1"></div>
        </div>

        <!-- ハンバーガーメニュー -->
        <div v-if="isOpen" class="fixed top-0 left-0 h-screen w-screen bg-white z-50">
            <div class="h-60 flex flex-col items-center justify-center">
                <nuxt-link to="/company">会社情報</nuxt-link>
                <nuxt-link to="/service">事業情報</nuxt-link>
                <nuxt-link to="/recruit">採用情報</nuxt-link>
                <nuxt-link to="/access">アクセス</nuxt-link>
                <nuxt-link to="/contact">お問い合わせ</nuxt-link>
            </div>
            <div @click="toggleMenu" class="absolute top-4 right-4 cursor-pointer h-12 w-12">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>
  
<style scoped>
/* ここに必要なスタイリングを追加 */
</style>
  