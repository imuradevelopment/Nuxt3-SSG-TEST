<template>
    <el-container class="layoutThreeLayers layoutSinglePage">
        <Header />
        <NuxtLayou>
            <NuxtPage />
        </NuxtLayou>
        <Footer />
    </el-container>
</template>

<script setup lang="ts">
</script>

<style scoped>
html {
    height: -webkit-fill-available;
}

body {
    min-height: 100vh;
    min-height: -webkit-fill-available;
}

.layoutThreeLayers {
    display: grid;
    grid-template-rows: auto 1fr auto;
}

.layoutSinglePage {
    max-width: 1980px;
    margin: 0 auto;
}
</style>