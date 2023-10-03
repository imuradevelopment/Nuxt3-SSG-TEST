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
.wrapper{
    justify-content: center;
}
.custom_container {
        display: grid;
        grid-template-rows: auto 1fr auto;
        min-height: 100vh;
        max-width: 1980px;
        margin: 0 auto;
    }
</style>