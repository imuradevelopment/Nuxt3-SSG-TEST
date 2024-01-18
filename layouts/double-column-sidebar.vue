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
    width: 100%;
  }
}
.sidebar {
    width: 160px;
}

.widget--sticky {
    position: sticky;
    top: var(--header-height);
}
</style>