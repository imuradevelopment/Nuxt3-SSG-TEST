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
    <NuxtLink v-if="isOuter && hasTo" target="_blank" rel="noopener noreferrer" :href="props.to" class="
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
            duration-200 
            ease-in-out 
            before:absolute 
            before:inset-0 
            before:transform 
            before:-scale-x-0 
            before:origin-left 
            before:transition-transform 
            before:duration-200 
            before:ease-in-out 
            before:rounded-full 
            ml-2  
            after:transform 
            after:translate-x-0 
            after:transition-transform 
            after:duration-200 
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
    <a @click="handleClick" v-if="isInner || !hasTo" :href="hasTo ? props.to : '#'" class="
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
            duration-200 
            ease-in-out 
            before:absolute 
            before:inset-0 
            before:transform 
            before:-scale-x-0 
            before:origin-left 
            before:transition-transform 
            before:duration-200 
            before:ease-in-out 
            before:rounded-full 
            ml-2  
            after:transform 
            after:translate-x-0 
            after:transition-transform 
            after:duration-200 
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
    </a>
    <a @click="handleClick" v-if="!isOuter && !isInner && hasTo" :href="hasTo ? props.to : '#'" class="
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
            duration-200 
            ease-in-out 
            before:absolute 
            before:inset-0 
            before:transform 
            before:-scale-x-0 
            before:origin-left 
            before:transition-transform 
            before:duration-200 
            before:ease-in-out 
            before:rounded-full 
            ml-2  
            after:transform 
            after:translate-x-0 
            after:transition-transform 
            after:duration-200 
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
    </a>
</template>

<script setup lang="ts">
import { useScrollToTarget } from '~/composables/useScrollToTarget'

const props = defineProps({
    to: { type: String, required: false },
    height: { type: String, required: false, validator: (value: string) => ['auto'].includes(value) },
    arrowType: { type: String, required: true, validator: (value: string) => ['outer', 'transition', 'inner', 'none'].includes(value) },
    colorType: { type: String, required: false, validator: (value: string) => ['blue-bg-white', 'yellow', 'white'].includes(value) },
    clickHandler: { type: Function, required: false }
})

const height = computed(() => props.height === 'auto' ? 'auto' : 'auto')

const afterContent = computed(() => {
    switch (props.arrowType) {
        case 'outer': return '↗'
        case 'transition': return '→'
        case 'inner': return '↓'
        case 'none': return ''
        default: return ''
    }
})

const backgroundcolor = computed(() => {
    switch (props.colorType) {
        case 'blue-bg-white':
        case 'yellow-bg-white':
            return 'white'
        case 'yellow':
        case 'white':
        default:
            return 'transparent'
    }
})

const beforebackgroundcolor = computed(() => {
    switch (props.colorType) {
        case 'yellow': return 'rgba(231, 198, 148)'
        case 'white': return 'white'
        default: return 'rgb(0, 10, 135)'
    }
})

const color = computed(() => {
    switch (props.colorType) {
        case 'yellow': return 'rgba(231, 198, 148)'
        case 'white': return 'white'
        default: return 'rgb(0, 10, 135)'
    }
})

const hovercolor = computed(() => {
    switch (props.colorType) {
        case 'yellow':
        case 'white':
            return 'rgb(0, 10, 135)'
        default:
            return 'rgb(231, 198, 148)'
    }
})

const borderwidth = computed(() => '2px')

const bordercolor = computed(() => {
    switch (props.colorType) {
        case 'yellow': return 'rgba(231, 198, 148)'
        case 'white': return 'white'
        default: return 'rgb(0, 10, 135)'
    }
})

const outline = computed(() => '2px solid transparent')

const hoveroutline = computed(() => '2px solid transparent')

const outlineoffset = computed(() => '2px')

const isOuter = computed(() => props.arrowType === 'outer')

const isInner = computed(() => props.arrowType === 'inner')

const hasTo = computed(() => !!props.to)

const router = useRouter()

const handleClick = (event: Event) => {
    event.preventDefault()
    if (hasTo.value) {
        const targetPage = props.to as string
        const link = event.currentTarget as HTMLElement
        link.addEventListener("transitionend", () => {
            router.push(targetPage)
            useScrollToTarget()
        })
    } else if (props.clickHandler) {
        props.clickHandler(event)
    }
}
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
