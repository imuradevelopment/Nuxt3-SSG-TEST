<template>
    <div>
        <!-- ヘッダー -->
        <div class="fixed top-0 left-0 w-full bg-gray-100 z-50 p-2 flex justify-between items-center">
            <!-- ロゴ -->
            <div>
                <NuxtLink to="/">
                    <el-image src="../images/header/logo.svg"></el-image>
                </NuxtLink>
            </div>
            <!-- ハンバーガーアイコンとメニューのトグル -->
            <div>
                <button @click="toggleMenu"
                    class="text-gray-500 hover:text-gray-400 focus:text-gray-400 focus:outline-none">
                    <svg v-if="!menuOpen" class="h-12 w-12 fill-current" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <!-- ハンバーガーアイコン（三本線） -->
                        <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="2" />
                        <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="2" />
                        <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" stroke-width="2" />
                    </svg>
                    <svg v-else class="h-12 w-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <!-- ✘のアイコン -->
                        <path
                            d="M6.293 6.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 111.414 1.414L13.414 12l4.293 4.293a1 1 0 01-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- ハンバーガーメニュー -->
        <div v-if="menuOpen" class="fixed top-16 right-0 w-64 h-screen bg-gray-800 z-50">
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
            // メニューを開く/閉じるときにbody要素にクラスを追加/削除してstickyヘッダーを制御
            if (this.menuOpen) {
                document.body.classList.add("overflow-hidden");
                // メニューを開いたときにスクロール位置を保存
                this.scrollY = window.scrollY;
            } else {
                document.body.classList.remove("overflow-hidden");
                // メニューを閉じたときにスクロール位置を復元
                window.scrollTo(0, this.scrollY);
            }
        },
        closeMenu() {
            this.menuOpen = false;
            // メニューを閉じるときにbody要素のクラスを削除してstickyヘッダーを制御
            document.body.classList.remove("overflow-hidden");
            // メニューを閉じたときにスクロール位置を復元
            window.scrollTo(0, this.scrollY);
        },
    },
};
</script>
  
<style scoped>
/* スタイリングを追加する場合はここに記述 */

/* クローズボタンのスタイル */
/* 不要なスタイリングの削除 */

/* スクロールバーを非表示にするためのスタイル */
/* .overflow-hidden {
    overflow: hidden;
} */
</style>
  