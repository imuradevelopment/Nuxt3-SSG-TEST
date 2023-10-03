<template>
    <el-container class="custom_container">
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
.custom_container {
        display: grid;
        grid-template-rows: auto 1fr auto;
        min-height: 100vh;
    }
</style>