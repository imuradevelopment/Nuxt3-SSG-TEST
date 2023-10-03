<template>
    <el-container class="layoutThreeLayers layoutSinglePage">
        <Header />
        <NuxtLayou :name="layout">
            <NuxtPage />
        </NuxtLayou>
        <Footer />
    </el-container>
</template>

<script setup lang="ts">
const layout = "threeLayers";
</script>

<style scoped>
.layoutThreeLayers {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}

.layoutSinglePage {
    max-width: 1980px;
    margin: 0 auto;
}
</style>