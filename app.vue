<template>
    <el-container class="layoutThreeLayers">
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
    <el-backtop :right="48" :bottom="48" style="width:60px; height:60px;"/>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* html {
    height: -webkit-fill-available;
}

#__nuxt {
    min-height: -webkit-fill-available;
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    max-width: 1980px;
    margin: 0 auto;
} */
.el-header-custom{
    padding: 0 0 0 0;
}
.layoutThreeLayers {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    max-width: 1980px;
    margin: 0 auto;
}
.el-main-custom{
    padding:0 0 0 0;
}
.el-footer-custom{
    padding: 0 0 0 0;
    height: auto;
}
</style>