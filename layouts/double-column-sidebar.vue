<template>
    <el-container id="PAGETOP" class="layoutThreeLayers">
        <el-header class="el-header-custom">
            <Header />
        </el-header>
        <div class="wrapper">
            <aside class="sidebar hidden md:inline-block">
                <div class="widget--sticky">
                    <Sidebar></Sidebar>
                </div>
            </aside>
            <el-main class="el-main-custom main">
                <div class="background-line-container">
                    <!-- <div class="background-line0 quarter-pixel-border"></div>
                    <div class="background-line1 quarter-pixel-border"></div>
                    <div class="background-line2 quarter-pixel-border"></div>
                    <div class="background-line3 quarter-pixel-border"></div>
                    <div class="background-line4 quarter-pixel-border"></div> -->
                    <!-- <BackgroundPattern /> -->
                    <!-- <BackgroundPattern2 /> -->
                    <BackgroundPattern3 />
                    <!-- <ClientOnly>
                    </ClientOnly> -->
                </div>
                <slot /><!-- pages配下のファイルを表示する -->
            </el-main>
        </div>
        <el-footer class="el-footer-custom">
            <Footer />
        </el-footer>
    </el-container>
</template>
<script setup lang="ts">
import Sidebar from '~/components/Sidebar.vue'
import BackgroundPattern from '~/components/BackgroundPattern.vue'
import BackgroundPattern2 from '~/components/BackgroundPattern2.vue'
import BackgroundPattern3 from '~/components/BackgroundPattern3.vue'
</script>
<style scoped>
.el-header-custom {
    padding: 0 0 0 0;
}

.layoutThreeLayers {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    max-width: 1280px;
    margin: 0 auto;
}

.el-main-custom {
    padding: 0 0 0 0;
    overflow: hidden;
}

.el-footer-custom {
    padding: 0 0 0 0;
    height: auto;
}

.wrapper {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.main {
    width: calc(100% - 160px);
}

@media screen and (max-width: 768px) {
    .main {
        width: 100vw;
    }
}

.sidebar {
    width: 160px;
}

.widget--sticky {
    position: sticky;
    top: var(--header-height);
}

.background-line-container {
    position: fixed;
    inset: 0;
    margin: auto;
    max-width: 1280px;
    z-index: -1;
}
.quarter-pixel-border {
    height: 100vh;
    width: 1px;
    box-shadow: -.25px 0 0 #818181;
}

.background-line0 {
    position: absolute;
    top: 0;
    left: 0%;
    z-index: -1;
}

.background-line1 {
    position: absolute;
    top: 0;
    left: 25%;
    z-index: -1;
}

.background-line2 {
    position: absolute;
    top: 0;
    left: 50%;
    z-index: -1;
}

.background-line3 {
    position: absolute;
    top: 0;
    left: 75%;
    z-index: -1;
}

.background-line4 {
    position: absolute;
    top: 0;
    left: calc(100% + 0.75px);
    z-index: -1;
}
</style>