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
body {
    min-height: 100vh;
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