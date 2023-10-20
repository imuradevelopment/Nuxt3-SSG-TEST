<template>
    <NuxtLink 
        :to=props.to
        class="flex items-center group border-2" :class="[buttonType, buttonStyle]">
        <span class="pl-8 pr-4 py-1 grow text-center">
            <slot>
                MORE
            </slot>
        </span>
        <el-icon size="1.5rem" style="margin-bottom: 0.1rem;" class="mr-2 rounded-full" :class="hoverArrowType">
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
    type: {
        type: String,
        required: true,
        default:""
    },
    hoverArrowType: {
        type: String,
        required: true,
        default:""
    },
    buttonStyle: {
        type: String,
        required: true,
        default:""
    }
})
const buttonType = [
  // props.modeに応じたクラスを追加
  props.type === '' ? [ 'bg-transparent', 'hover:bg-custom-blue', 'text-white', 'border-white', 'hover:border-transparent'] : '',
  props.type === 'fill' ? [ 'bg-custom-blue', 'hover:bg-transparent', 'text-white', 'hover:text-custom-blue', 'border-transparent', 'hover:border-custom-blue'] : '',
];
const hoverArrowType = [
  // props.modeに応じたクラスを追加
  props.hoverArrowType === '' ? [ ''] : '',
  props.hoverArrowType === 'fill' ? [ 'group-hover:bg-custom-blue2', 'text-white', 'group-hover:text-black'] : '',
  props.hoverArrowType === 'none' ? [ 'none'] : '',
];
const buttonStyle = [
  // props.modeに応じたクラスを追加
  props.buttonStyle === '' ? [ 'rounded-full'] : '',
  props.buttonStyle === 'square' ? [ ''] : '',
];
</script>
<style scoped></style>  