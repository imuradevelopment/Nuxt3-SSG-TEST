<template>
    <div>
        <!-- 背景オーバーレイ (ヘッダーとメニューの外) -->
        <div v-if="menuOpen" class="fixed top-0 left-0 w-full h-screen z-50 bg-black opacity-50" @click="closeMenu"></div>

        <!-- ヘッダー -->
        <div>
            <div class="fixed top-0 left-0 w-full bg-white z-50 px-2 pt-2 flex justify-between items-center">
                <!-- ロゴ（クリックでメニューを閉じる） -->
                <div @click="closeMenu">
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
        </div>

        <!-- ハンバーガーメニュー (ヘッダーの下) -->
        <div v-if="menuOpen" class="fixed top-16 left-0 w-full z-50">
            <div class="px-4 bg-white backdrop-blur-md">
                <!-- メニューコンテンツ -->
                <ul class="text-black">
                    <li class="h-14 border-b border-b-gray-400">
                        <NuxtLink to="/" @click="closeMenu" class="w-full h-full flex items-center"><el-icon size="1.5rem"
                                class="mb-1">
                                <House class="text-custom-blue" />
                            </el-icon>トップ</NuxtLink>
                    </li>
                    <li class="h-14 border-b border-b-gray-400">
                        <NuxtLink to="/company" @click="closeMenu" class="w-full h-full flex items-center"><el-icon
                                size="1.5rem" class="mb-1">
                                <OfficeBuilding class="text-custom-blue" />
                            </el-icon>会社情報</NuxtLink>
                    </li>
                    <li class="h-14 border-b border-b-gray-400">
                        <NuxtLink to="/service" @click="closeMenu" class="w-full h-full flex items-center"><el-icon
                                size="1.5rem" class="mb-1">
                                <DataAnalysis class="text-custom-blue" />
                            </el-icon>事業情報</NuxtLink>
                    </li>
                    <li class="h-14 border-b border-b-gray-400">
                        <div class="flex justify-between items-center w-full h-full">
                            <NuxtLink to="/recruit" @click="closeMenu" class="flex items-center">
                                <el-icon size="1.5rem" class="mb-1">
                                    <User class="text-custom-blue" />
                                </el-icon>
                                採用情報
                            </NuxtLink>
                            <div class="pr-3">
                                <el-button size="large" type="primary" :icon="Plus" circle />
                            </div>
                        </div>
                    </li>
                </ul>
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="TEST" name="1">
                        <ul class="text-black">
                            <li class="h-14 border-b border-b-gray-400">
                                <div class="flex justify-between items-center w-full h-full">
                                    <NuxtLink to="/recruit" @click="closeMenu" class="flex items-center">
                                        <el-icon size="1.5rem" class="mb-1">
                                            <User class="text-custom-blue" />
                                        </el-icon>
                                        採用情報
                                    </NuxtLink>
                                    <div class="pr-3">
                                        <el-button size="large" type="primary" :icon="Plus" circle />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </el-collapse-item>
                </el-collapse>
                <div class="flex p-4">
                    <el-button size="large" round type="primary" class="flex-grow">
                        <NuxtLink to="/access" @click="closeMenu">アクセス</NuxtLink>
                    </el-button>
                    <el-button size="large" round type="primary" class="flex-grow">
                        <NuxtLink to="/contact" @click="closeMenu">お問い合わせ</NuxtLink>
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<!-- <script>
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
</script> -->
<script setup lang="ts">
import {
    House,
    User,
    DataAnalysis,
    OfficeBuilding,
    Plus
} from '@element-plus/icons-vue'
import { ref } from 'vue'

let menuOpen = ref(false)
let scrollY = ref(0)

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
    if (menuOpen.value) {
        document.body.classList.add("overflow-hidden")
        scrollY.value = window.scrollY
    } else {
        document.body.classList.remove("overflow-hidden")
        window.scrollTo(0, scrollY.value)
    }
}

const closeMenu = () => {
    menuOpen.value = false
    document.body.classList.remove("overflow-hidden")
    window.scrollTo(0, scrollY.value)
}

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
    console.log(val)
}
</script>
    
<style scoped>
/* スタイリングを追加する場合はここに記述 */

/* クローズボタンのスタイル */
/* 不要なスタイリングの削除 */

/* スクロールバーを非表示にするためのスタイル */
.overflow-hidden {
    overflow: hidden;
}
</style>
    