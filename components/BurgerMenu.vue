<template>
    <div>
        <!-- 背景オーバーレイ (ヘッダーとメニューの外) -->
        <div v-if="menuOpen" class="fixed top-0 left-0 w-full h-screen z-50 bg-black opacity-50" @click="closeMenu"></div>

        <!-- ヘッダー -->
        <div>
            <div class="header fixed top-0 left-0 w-full bg-white z-50 px-2 pt-2 flex justify-between items-center">
                <!-- ロゴ（クリックでメニューを閉じる） -->
                <div @click="closeMenu">
                    <NuxtLink to="/">
                        <el-image src="../images/logo/logo.svg"></el-image>
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
                <ul class="menuContents overflow-auto text-black">
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
                                <el-button :text=true :bg=true size="large" type="primary" :icon="showRecruitItem ? Minus : Plus" circle class="recruitButton" @click="toggleRecruitItem" />
                            </div>
                        </div>
                    </li>
                    <li class="h-14 border-b border-b-gray-400" v-if="showRecruitItem">
                        <NuxtLink to="/recruit/message" @click="closeMenu" class="w-full h-full flex items-center group hover:text-custom-blue text-white bg-custom-blue hover:bg-white">
                            <el-icon size="1.5rem" class="mb-1 mx-4">
                                <ChatDotSquare />
                            </el-icon>
                            <span class="w-3 h-full bg-white group-hover:bg-custom-blue"></span>
                            <span class="px-4 grow">採用メッセージ</span>
                            <el-icon size="1.5rem" class="mb-1 mr-4">
                                <CaretRight />
                            </el-icon>
                        </NuxtLink>
                    </li>
                    <li class="h-14 border-b border-b-gray-400" v-if="showRecruitItem">
                        <NuxtLink to="/recruit/feature" @click="closeMenu" class="w-full h-full flex items-center group hover:text-custom-blue text-white bg-custom-blue hover:bg-white">
                            <el-icon size="1.5rem" class="mb-1 mx-4">
                                <Pointer />
                            </el-icon>
                            <span class="w-3 h-full bg-white group-hover:bg-custom-blue"></span>
                            <span class="px-4 grow">ベイルの特長</span>
                            <el-icon size="1.5rem" class="mb-1 mr-4">
                                <CaretRight />
                            </el-icon>
                        </NuxtLink>
                        </li>
                        <li class="h-14 border-b border-b-gray-400" v-if="showRecruitItem">
                        <NuxtLink to="/recruit/induction" @click="closeMenu" class="w-full h-full flex items-center group hover:text-custom-blue text-white bg-custom-blue hover:bg-white">
                            <el-icon size="1.5rem" class="mb-1 mx-4">
                                <EditPen />
                            </el-icon>
                            <span class="w-3 h-full bg-white group-hover:bg-custom-blue"></span>
                            <span class="px-4 grow">研修制度</span>
                            <el-icon size="1.5rem" class="mb-1 mr-4">
                                <CaretRight />
                            </el-icon>
                        </NuxtLink>
                    </li>
                    <li class="h-14 border-b border-b-gray-400" v-if="showRecruitItem">
                        <NuxtLink to="/recruit/office" @click="closeMenu" class="w-full h-full flex items-center group hover:text-custom-blue text-white bg-custom-blue hover:bg-white">
                            <el-icon size="1.5rem" class="mb-1 mx-4">
                                <School />
                            </el-icon>
                            <span class="w-3 h-full bg-white group-hover:bg-custom-blue"></span>
                            <span class="px-4 grow">オフィス紹介</span>
                            <el-icon size="1.5rem" class="mb-1 mr-4">
                                <CaretRight />
                            </el-icon>
                        </NuxtLink>
                    </li>
                    <li class="h-14 border-b border-b-gray-400" v-if="showRecruitItem">
                        <NuxtLink to="/recruit/welfare" @click="closeMenu" class="w-full h-full flex items-center group hover:text-custom-blue text-white bg-custom-blue hover:bg-white">
                            <el-icon size="1.5rem" class="mb-1 mx-4">
                                <ColdDrink />
                            </el-icon>
                            <span class="w-3 h-full bg-white group-hover:bg-custom-blue"></span>
                            <span class="px-4 grow">福利厚生</span>
                            <el-icon size="1.5rem" class="mb-1 mr-4">
                                <CaretRight />
                            </el-icon>
                        </NuxtLink>
                    </li>
                    <li class="h-14 border-b border-b-gray-400" v-if="showRecruitItem">
                        <NuxtLink to="/recruit/data" @click="closeMenu" class="w-full h-full flex items-center group hover:text-custom-blue text-white bg-custom-blue hover:bg-white">
                            <el-icon size="1.5rem" class="mb-1 mx-4">
                                <TrendCharts />
                            </el-icon>
                            <span class="w-3 h-full bg-white group-hover:bg-custom-blue"></span>
                            <span class="px-4 grow">各種データ</span>
                            <el-icon size="1.5rem" class="mb-1 mr-4">
                                <CaretRight />
                            </el-icon>
                        </NuxtLink>
                    </li>
                    <li class="h-14 border-b border-b-gray-400" v-if="showRecruitItem">
                        <NuxtLink to="/recruit/qa" @click="closeMenu" class="w-full h-full flex items-center group hover:text-custom-blue text-white bg-custom-blue hover:bg-white">
                            <el-icon size="1.5rem" class="mb-1 mx-4">
                                <QuestionFilled />
                            </el-icon>
                            <span class="w-3 h-full bg-white group-hover:bg-custom-blue"></span>
                            <span class="px-4 grow">Q & A</span>
                            <el-icon size="1.5rem" class="mb-1 mr-4">
                                <CaretRight />
                            </el-icon>
                        </NuxtLink>
                    </li>
                    <li class="h-14 border-b border-b-gray-400" v-if="showRecruitItem">
                        <NuxtLink to="/recruit/employee" @click="closeMenu" class="w-full h-full flex items-center group hover:text-custom-blue text-white bg-custom-blue hover:bg-white">
                            <el-icon size="1.5rem" class="mb-1 mx-4">
                                <Avatar />
                            </el-icon>
                            <span class="w-3 h-full bg-white group-hover:bg-custom-blue"></span>
                            <span class="px-4 grow">社員紹介</span>
                            <el-icon size="1.5rem" class="mb-1 mr-4">
                                <CaretRight />
                            </el-icon>
                        </NuxtLink>
                    </li>
                    <li class="h-14 border-b border-b-gray-400" v-if="showRecruitItem">
                        <NuxtLink to="/recruit/information" @click="closeMenu" class="w-full h-full flex items-center group hover:text-custom-blue text-white bg-custom-blue hover:bg-white">
                            <el-icon size="1.5rem" class="mb-1 mx-4">
                                <List />
                            </el-icon>
                            <span class="w-3 h-full bg-white group-hover:bg-custom-blue"></span>
                            <span class="px-4 grow">募集情報</span>
                            <el-icon size="1.5rem" class="mb-1 mr-4">
                                <CaretRight />
                            </el-icon>
                        </NuxtLink>
                    </li>
                </ul>
                <div class="flex p-4">
                    <el-button size="large" round type="primary" class="el-button-custom flex-grow">
                        <NuxtLink to="/access" class="w-full h-full" @click="closeMenu">アクセス</NuxtLink>
                    </el-button>
                    <el-button size="large" round type="primary" class="el-button-custom flex-grow">
                        <NuxtLink to="/contact" class="w-full h-full" @click="closeMenu">お問い合わせ</NuxtLink>
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import {
    House,
    User,
    DataAnalysis,
    OfficeBuilding,
    Plus,
    Minus,
    CaretRight,
    ChatDotSquare,
    Pointer,
    EditPen,
    School,
    ColdDrink,
    QuestionFilled,
    Avatar,
    TrendCharts,
    List,
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

const showRecruitItem = ref(false) // 採用情報項目の表示状態

// 採用情報項目の表示/非表示を切り替えるメソッド
function toggleRecruitItem() {
  showRecruitItem.value = !showRecruitItem.value
}
</script>
    
<style scoped>
.recruitButton {
    background-color: var(--el-color-primary) !important;
    color: white !important;
}
.el-button-custom{
    padding:0 !important;
}
.el-button-custom a{
    width: calc((100vw-4.75rem)/2);
    height: 40px;
    line-height: 2.5rem;
}
.header{
    height: 3.75rem;;
}
.menuContents{
    max-height: calc(80vh -8rem);
}
</style>
    