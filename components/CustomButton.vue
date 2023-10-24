<template>
    <NuxtLink 
        :to=props.to
        class="flex items-center group border-2" :class="[buttonType, buttonStyle]">
            <span class="pl-8 pr-4 py-1 grow text-center">
                <slot>
                    MORE
                </slot>
            </span>
            <!-- <el-icon size="1.5rem" style="margin-bottom: 0.1rem;" class="mr-2 rounded-full" :class="hoverArrowType">
                <CaretRight />
            </el-icon> -->
            <span class="h-6 w-9">
                <!-- <svg height="24" width="36" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19" cy="12" r="12" stroke="white" stroke-width="3" fill="none"/>
                <line x1="0" y1="12" x2="22" y2="12" stroke="white" stroke-width="3"/>
                <polygon points="28,8 28,16 32,12" fill="white"/>
                </svg> -->
                <!-- <svg height="30" width="38" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="12" r="12" stroke="white" stroke-width="3" fill="none"/>
                <line x1="0" y1="12" x2="32" y2="12" stroke="white" stroke-width="3"/>
                <polygon points="28,9 28,15 32,12" fill="white"/>
                </svg> -->
                <!-- <svg height="24" width="36" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19" cy="12" r="12" stroke="white" stroke-width="3" fill="none"/>
                <line x1="0" y1="12" x2="22" y2="12" stroke="white" stroke-width="3"/>
                <polygon points="22,9 22,15 26,12" fill="white"/>
                </svg> -->
                <svg height="24" width="36" xmlns="http://www.w3.org/2000/svg">
                <circle cx="23.5" cy="12" r="10.5" stroke="white" stroke-width="3" fill="none"/>
                <line x1="0" y1="12" x2="22" y2="12" stroke="white" stroke-width="3"/>
                <polygon points="22,6 22,18 28,12" fill="white"/>
                </svg>
            </span>
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
<style scoped>
/* 背景色を青に変更 */
.background {
  fill: blue;
}

/* 丸の塗りつぶし色を白に変更 */
.circle {
  fill: white;
}

/* 矢印の塗りつぶし色と線の色を黄色に変更 */
.arrow-head, .arrow-tail {
  fill: yellow;
  stroke: yellow;
}
</style>  
