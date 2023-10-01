<template>
    <el-container>
        <el-header>
            <Header />
        </el-header>
        <NuxtLayou :name="layout">
            <NuxtPage />
        </NuxtLayou>
        <el-footer>
            <Footer />
        </el-footer>
    </el-container>
</template>

<script setup lang="ts">
const layout = "threeLayers";
</script>