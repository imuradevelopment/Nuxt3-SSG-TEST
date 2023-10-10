<template>
    <div class="relative">
        <!-- ロゴ -->
        <div class="absolute top-0 left-0 p-4">
            <NuxtLink to="/">
                <el-image src="../images/header/logo.svg"></el-image>
            </NuxtLink>
        </div>

        <!-- ハンバーガーアイコンとメニューのトグル -->
        <div class="absolute top-0 right-0 p-4">
            <button @click="toggleMenu" class="text-gray-500 hover:text-white focus:text-white focus:outline-none">
                <svg v-if="!menuOpen" class="h-12 w-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <!-- ハンバーガーアイコン（三本線） -->
                    <path
                        d="M4 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM5 11a1 1 0 100 2h14a1 1 0 100-2H5a1 1 0 000 0z" />
                </svg>
                <svg v-else class="h-12 w-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <!-- ✘のアイコン -->
                    <path
                        d="M3.293 5.293a1 1 0 011.414 0L12 13.586l7.293-7.293a1 1 0 111.414 1.414l-8 8a1 1 0 01-1.414 0l-8-8a1 1 0 010-1.414z" />
                </svg>
            </button>
        </div>

        <!-- ハンバーガーメニュー -->
        <div v-if="menuOpen" class="absolute top-0 right-0 w-64 h-screen bg-gray-800 z-50">
            <div class="p-4">
                <!-- メニューコンテンツ -->
                <ul>
                    <li>
                        <NuxtLink to="/company" @click="closeMenu">会社情報</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/service" @click="closeMenu">事業情報</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/recruit" @click="closeMenu">採用情報</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/access" @click="closeMenu">アクセス</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact" @click="closeMenu">お問い合わせ</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        closeMenu() {
            this.menuOpen = false;
        },
    },
};
</script>

<style scoped>
/* スタイリングを追加する場合はここに記述 */

/* クローズボタンのスタイル */
.absolute.top-0.right-0 p-4 button:hover {
    /* クローズボタンのスタイリングを追加 */
    color: white; /* クローズボタンのテキストカラー */
}
</style>
