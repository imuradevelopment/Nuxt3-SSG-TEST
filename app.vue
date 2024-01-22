<template>
    <NuxtLayout>
        <NuxtPage :transition="{ name: 'all', mode: 'out-in' }" />
    </NuxtLayout>
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

