<template>
    <div class="p-1 w-full h-full wrapper z-0 relative">
        <!-- 3番目のレイヤー -->
        <div class="p-2 h-full z-30 relative">
            <div :style="style" class="relative  h-full">
                <div class="flex flex-col h-full pt-16">
                    <!-- 2番目のレイヤー -->
                    <div :class=layer2Class>
                        <div class="lnline-flex p-2 mx-2 max-w-80" :class="discriptionClass" >
                            <slot name="description">デフォルト説明</slot>
                        </div>
                    </div>
                    <div class="my-1 text-base font-medium md:w-full" :class="buttonsClass">
                        <CustomButton v-for="(button, index) in buttons" :to="button.to" :class="[button.class, 'my-3', 'mx-2']" :key="index">
                            {{ button.label }}
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
        <!-- 1番目のレイヤーを3番目の右上に配置 -->
        <div class="z-30 absolute" :class=layer1Class>
            <div class="p-4 max-w-max ml-auto text-2xl font-bold line-clamp-1 z-20" :class="titleClass">
                <slot name="title">デフォルトタイトル</slot>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import CustomButton from './CustomButton.vue';
import { StyleValue } from 'nuxt/dist/app/compat/capi';

const props = defineProps({
    mode: {
        type: String,
        required: false,
        default: 'left'
    },
    titleMode: {
        type: String,
        required: false,
    },
    titleBackgroundMode: {
        type: Boolean,
        required: false,
        default: true
    },
    discriptionMode: {
        type: String,
        required: false,
    },
    discriptionBackgroundMode: {
        type: Boolean,
        required: false,
        default: true
    },
    buttonsMode: {
        type: String,
        required: false,
    },
    url: {
        type: String,
        required: false,
        default: '',
    },
    titleClass: {
        type: String,
        required: true,
        default: '',
    },
    discriptionClass: {
        type: String,
        required: true,
        default: '',
    },
    buttonsClass: {
        type: String,
        required: true,
        default: '',
    },
    buttons: {
        type: Array as PropType<{ to: string; class: string; label: string }[]>,
        required: false,
        default: () => [
            {
                to: '/',
                class: 'order-last',
                label: 'MORE',
            },
        ],
    },
});

const style: StyleValue = props.url
    ? {
        background: 'url(' + props.url + ') no-repeat center',
        'background-size': 'cover'
    }
    : '';

// modeによる切り替え
const layer1Class = [
  // props.modeに応じたクラスを追加
  props.mode === 'left' ? ['top-1', 'left-1'] : '',
  props.mode === 'center' ? ["top-1", 'left-1/2', '-translate-x-1/2'] : '',
  props.mode === 'right' ? ['top-1', 'right-1'] : '',
  props.titleMode === 'left' ? ['top-1', 'left-1'] : '',
  props.titleMode === 'center' ? ["top-1", 'left-1/2', '-translate-x-1/2'] : '',
  props.titleMode === 'right' ? ['top-1', 'right-1'] : '',
];
const layer2Class = [
  // props.modeに応じたクラスを追加
  props.mode === 'left' ? ['flex', 'flex-wrap', 'flex-1'] : '',
  props.mode === 'center' ? ['flex', 'flex-wrap', 'flex-1', 'justify-around'] : '',
  props.mode === 'right' ? ['flex', 'flex-wrap', 'flex-1', 'justify-end'] : '',
  props.discriptionMode === 'left' ? ['flex', 'flex-wrap', 'flex-1'] : '',
  props.discriptionMode === 'center' ? ['flex', 'flex-wrap', 'flex-1', 'justify-around'] : '',
  props.discriptionMode === 'right' ? ['flex', 'flex-wrap', 'flex-1', 'justify-end'] : '',
];
const buttonsClass = [
  // props.modeに応じたクラスを追加
  props.mode === 'left' ? ['flex', 'flex-wrap', 'flex-col', 'md:flex-row', 'mr-auto'] : '',
  props.mode === 'center' ? [ 'flex', 'flex-wrap', 'justify-around', 'flex-col', 'md:flex-row', 'm-auto'] : '',
  props.mode === 'right' ? [ 'flex', 'flex-wrap', 'justify-end', 'flex-col', 'md:flex-row', 'ml-auto'] : '',
  props.buttonsMode === 'left' ? ['flex', 'flex-wrap', 'flex-col', 'md:flex-row', 'mr-auto'] : '',
  props.buttonsMode === 'center' ? [ 'flex', 'flex-wrap', 'justify-around', 'flex-col', 'md:flex-row', 'm-auto'] : '',
  props.buttonsMode === 'right' ? [ 'flex', 'flex-wrap', 'justify-end', 'flex-col', 'md:flex-row', 'ml-auto'] : '',
  props.buttonsClass
];
const titleClass = [
    props.titleBackgroundMode === true ? ['bg-gray-900/40'] : '',
    props.titleBackgroundMode === false ? ['pt-8'] : '',
    props.titleClass
];
const discriptionClass = [
    props.discriptionBackgroundMode === true ? ['bg-gray-900/40'] : '',
    props.discriptionClass
];
</script>
<style scoped>
.max-w-80 {
    max-width: 80%;
}
</style>
  