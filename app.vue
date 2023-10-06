<template>
    <el-container class="layoutThreeLayers">
        <Header />
        <el-main class="el-main-custom">
            <NuxtLayou>
                <NuxtPage />
            </NuxtLayou>
        </el-main>
        <Footer />
    </el-container>
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
</style>