<!-- 
■■■■■■ 使い方 ■■■■■
    背景色が明るい場合は「colorType」プロパティの指定無し
        <div class="p-4 bg-gray-200">
            <CustomArrowButton arrowType="outer" to="https://www.google.co.jp/"><template #buttonText>別タブリンクに使用</template></CustomArrowButton>
            <CustomArrowButton arrowType="transition" to="/company"><template #buttonText>ページ遷移に使用</template></CustomArrowButton>
            <CustomArrowButton arrowType="inner" to="/company#company01"><template #buttonText>ターゲット要素への遷移、ページ内遷移に使用</template></CustomArrowButton>
        </div>

    背景色が暗い場合は「colorType」プロパティに「yellow」を指定する
        <div class="p-4 bg-custom-deepBlue">
            <CustomArrowButton arrowType="outer" colorType="yellow" to="https://www.google.co.jp/"><template #buttonText>別タブリンクに使用</template></CustomArrowButton>
            <CustomArrowButton arrowType="transition" colorType="yellow" to="/company"><template #buttonText>ページ遷移に使用</template></CustomArrowButton>
            <CustomArrowButton arrowType="inner" colorType="yellow" to="/company#company01"><template #buttonText>ターゲット要素への遷移、ページ内遷移に使用</template></CustomArrowButton>
        </div>

■■■■■■ インポート等 ■■■■■
<script setup lang="ts">
//ここではコンポーネント内の「<script setup lang="ts">」でインポートし、タグ名を「CustomArrowButton」としている。
import CustomArrowButton from '~/components/CustomArrowButton.vue'
// 使いたい人は下記のようにiconをインポートしてボタンテキストに使用できます。
// 参考：https://element-plus.org/en-US/component/icon.html#icon-collection
import {
    EditPen,
} from '@element-plus/icons-vue'
</script>

■■■■■■ アイコンを使用する場合の例 ■■■■■
<CustomArrowButton arrowType="transition" to="/company"><template #buttonText><EditPen class="h-6 w-6 inline" />ベイルの特徴</template></CustomArrowButton>
 -->

<template>
    <!--
        コンポーネントの使い方：
        背景色が明るい場合は「colorType」プロパティの指定無し
        背景色が暗い場合は「colorType」プロパティに「yellow」を指定する
    -->
    <NuxtLink v-if="isOuter" target="_blank" rel="noopener noreferrer" :href="props.to" class="
            w-fit 
            relative 
            inline-flex 
            items-center 
            justify-center 
            px-6 
            py-2 
            text-lg 
            cursor-pointer 
            transition-all 
            duration-150 
            ease-in-out 
            before:absolute 
            before:inset-0 
            before:transform 
            before:-scale-x-0 
            before:origin-left 
            before:transition-transform 
            before:duration-150 
            before:ease-in-out 
            before:rounded-full 
            ml-2  
            after:transform 
            after:translate-x-0 
            after:transition-transform 
            after:duration-150 
            after:ease-in-out 
            hover:border-transparent 
            hover:before:scale-x-100 
            origin-left 
            hover:after:translate-x-4 
            rounded-l-full 
            rounded-r-full 
            hover:rounded-r-full 
            overflow-hidden
            shadow-md
        " :style="`--after-content: '${afterContent}'`">
        <span class="relative z-10">
            <slot name="buttonText">MORE</slot>
        </span>
    </NuxtLink>
    <NuxtLink v-if="isInner" @click="scrollToTarget()" :to="props.to" class="
            w-fit 
            relative 
            inline-flex 
            items-center 
            justify-center 
            px-6 
            py-2 
            text-lg 
            cursor-pointer 
            transition-all 
            duration-150 
            ease-in-out 
            before:absolute 
            before:inset-0 
            before:transform 
            before:-scale-x-0 
            before:origin-left 
            before:transition-transform 
            before:duration-150 
            before:ease-in-out 
            before:rounded-full 
            ml-2  
            after:transform 
            after:translate-x-0 
            after:transition-transform 
            after:duration-150 
            after:ease-in-out 
            hover:border-transparent 
            hover:before:scale-x-100 
            origin-left 
            hover:after:translate-x-4 
            rounded-l-full 
            rounded-r-full 
            hover:rounded-r-full 
            overflow-hidden
            shadow-md
        " :style="`--after-content: '${afterContent}'`">
        <span class="relative z-10">
            <slot name="buttonText">MORE</slot>
        </span>
    </NuxtLink>
    <NuxtLink v-if="!isOuter && !isInner" @click="scrollToTarget()" :to="props.to" class="
            w-fit 
            relative 
            inline-flex 
            items-center 
            justify-center 
            px-6 
            py-2 
            text-lg 
            cursor-pointer 
            transition-all 
            duration-150 
            ease-in-out 
            before:absolute 
            before:inset-0 
            before:transform 
            before:-scale-x-0 
            before:origin-left 
            before:transition-transform 
            before:duration-150 
            before:ease-in-out 
            before:rounded-full 
            ml-2  
            after:transform 
            after:translate-x-0 
            after:transition-transform 
            after:duration-150 
            after:ease-in-out 
            hover:border-transparent 
            hover:before:scale-x-100 
            origin-left 
            hover:after:translate-x-4 
            rounded-l-full 
            rounded-r-full 
            hover:rounded-r-full 
            overflow-hidden
            shadow-md
        " :style="`--after-content: '${afterContent}'`">
        <span class="relative z-10">
            <slot name="buttonText">MORE</slot>
        </span>
    </NuxtLink>
</template>


<script setup lang="ts">
import { useScrollToTarget } from '~/composables/useScrollToTarget'
const { targetId, scrollToTarget } = useScrollToTarget()

// コンポーネントに渡されるプロパティ
const props = defineProps({
    to: {
        type: String,
        required: true,
    },
    height: {
        type: String,
        required: false,
        validator: (value: string) => {
            return ['auto'].includes(value)
        }
    },
    arrowType: {
        type: String,
        required: true,
        validator: (value: string) => {
            return ['outer', 'transition', 'inner'].includes(value)
        }
    },
    colorType: {
        type: String,
        required: false,
        validator: (value: string) => {
            return ['blue-bg-white', 'yellow', 'white'].includes(value)
        }
    }
})

// ボタンの高さを計算する
const height = computed(() => {
    switch (props.height) {
        case 'auto':
            return 'auto'
        default:
            return 'auto'
    }
})



// ボタンの矢印部分の表示内容を計算する
const afterContent = computed(() => {
    switch (props.arrowType) {
        case 'outer':
            return '↗'
        case 'transition':
            return '→'
        case 'inner':
            return '↓'
        default:
            return ''
    }
})

// 背景の色を計算する
const backgroundcolor = computed(() => {
    switch (props.colorType) {
        case 'blue-bg-white':
            return 'white'
        case 'yellow-bg-white':
            return 'white'
        case 'yellow':
            return 'transparent'
        case 'white':
            return 'transparent'
        default:
            return 'transparent'
    }
})

// 背景の色を計算する（前景の色の補完）
const beforebackgroundcolor = computed(() => {
    switch (props.colorType) {
        case 'yellow':
            return 'rgba(231 198 148)'
        case 'white':
            return 'white'
        default:
            return 'rgb(0 10 135)'
    }
})

// テキストの色を計算する
const color = computed(() => {
    switch (props.colorType) {
        case 'yellow':
            return 'rgba(231 198 148)'
        case 'white':
            return 'white'
        default:
            return 'rgb(0 10 135)'
    }
})

// ホバー時のテキスト色を計算する
const hovercolor = computed(() => {
    switch (props.colorType) {
        case 'yellow':
            return 'rgb(0 10 135)'
        case 'white':
            return 'rgb(0 10 135)'
        default:
            return 'rgb(231 198 148)'
    }
})

// ボーダーの幅を計算する
const borderwidth = computed(() => {
    switch (props.colorType) {
        case 'yellow':
            return '2px'
        case 'white':
            return '2px'
        default:
            return '2px'
    }
})

// ボーダーの色を計算する
const bordercolor = computed(() => {
    switch (props.colorType) {
        case 'yellow':
            return 'rgba(231 198 148)'
        case 'white':
            return 'white'
        default:
            return 'rgb(0 10 135)'
    }
})

// アウトラインのスタイルを計算する
const outline = computed(() => {
    switch (props.colorType) {
        case 'yellow':
            return '2px solid transparent'
        case 'white':
            return '2px solid transparent'
        default:
            return '2px solid transparent'
    }
})

// ホバー時のアウトラインのスタイルを計算する
const hoveroutline = computed(() => {
    switch (props.colorType) {
        case 'yellow':
            return '2px solid transparent'
        case 'white':
            return '2px solid transparent'
        default:
            return '2px solid transparent'
    }
})

// アウトラインのオフセットを計算する
const outlineoffset = computed(() => {
    switch (props.colorType) {
        case 'yellow':
            return '2px'
        case 'white':
            return '2px'
        default:
            return '2px'
    }
})

// ボタンのタイプが「outer」かどうかを判定
const isOuter = computed(() => {
    switch (props.arrowType) {
        case 'outer':
            return true;
        default:
            return false;
    }
})


// ボタンのタイプが「inner」かどうかを判定
const isInner = computed(() => {
    switch (props.arrowType) {
        case 'inner':
            return true;
        default:
            return false;
    }
})
</script>

<style scoped>
a:before {
    background-color: v-bind(beforebackgroundcolor);
}

a {
    border-color: v-bind(bordercolor);
    color: v-bind(color);
    border-width: v-bind(borderwidth);
    outline: v-bind(outline);
    outline-offset: v-bind(outlineoffset);
    background-color: v-bind(backgroundcolor);
    height: v-bind(height);
}

a:after {
    content: var(--after-content);
    margin-left: 0.25rem;
}

a:hover {
    color: v-bind(hovercolor);
    border: v-bind(hoveroutline);
}

a:hover:after {
    content: var(--after-content);
}
</style>
