<template>
    <NuxtLink :to=props.to
        class="flex items-center group hover:text-custom-blue text-white bg-custom-blue hover:bg-white">
        <el-icon size="1.5rem" class="mb-1 mx-4">
            <List />
        </el-icon>
        <span class="px-4 grow">
            <slot>
                MORE
            </slot>
        </span>
        <el-icon size="1.5rem" class="mb-1 mr-4">
            <CaretRight />
        </el-icon>
    </NuxtLink>
</template>
  
<script lang="ts" setup>
import {
    CaretRight,
    List,
} from '@element-plus/icons-vue'
const props = defineProps({
    to: {
        type: String,
        required: true,
    },
})
</script>
<style scoped></style>  