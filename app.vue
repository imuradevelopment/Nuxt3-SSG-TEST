<template>
    <el-container id="PAGETOP" class="layoutThreeLayers">
        <!-- <el-container> -->
            <el-header class="el-header-custom">
                <Header />
            </el-header>
            <el-main class="el-main-custom">
            <NuxtLayou>
                <NuxtPage />
            </NuxtLayou>
            </el-main>
            <el-footer class="el-footer-custom">
            <Footer />
        </el-footer>
    </el-container>
    <el-backtop :right="48" :bottom="48" style="width:60px; height:60px; z-index: 51;">
        <el-icon size="1.8rem" class="w-full h-full text-center">
            <CaretTop />
        </el-icon>
    </el-backtop>
</template>

<script setup lang="ts">
import {
    CaretTop,
} from '@element-plus/icons-vue'
</script>

<style scoped>
.el-header-custom{
    padding: 0 0 0 0;
}
.layoutThreeLayers {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    max-width: 1280px;
    margin: 0 auto;
}
.el-main-custom{
    padding:0 0 0 0;
    overflow: hidden;
}
.el-footer-custom{
    padding: 0 0 0 0;
    height: auto;
}
</style>