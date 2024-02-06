// components/CustomArrowButton.vue
<template>
    <NuxtLink @click="handleClick" :to="props.to" class="
            animated-button 
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

// ルーターインスタンスを取得
const router = useRouter()

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

// ボタンの高さを計算する
const height = computed(() => {
    switch (props.height) {
        case 'auto':
            return 'auto'
        default:
            return 'auto'
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


// クリックイベントを処理する関数
const handleClick = (event: Event) => {
    // デフォルトの遷移動作を防ぐ
    event.preventDefault()
    // 遷移先のURLを取得
    const targetPage = props.to
    // リンク要素を取得
    const link = event.currentTarget as HTMLElement
    // transitionendイベントのリスナーを追加
    link.addEventListener("transitionend", () => {
        // アニメーションが終わったら遷移する
        router.push(targetPage)
    })
    // スクロールする関数を定義
    const scrollToTarget = (id: string = '') => {
        // 引数で渡されたidをtargetIdに代入
        const targetId = id
        // target-idが空の場合
        if (!targetId) {
            // トップにスクロール
            window.scrollTo({ top: 0, left: 0, behavior: "smooth", });
        } else {
            // 要素を取得
            const element = document.getElementById(targetId);
            // 要素が存在する場合
            if (element) {
                // 要素の位置を取得
                const rect = element.getBoundingClientRect()
                const currentScrolledHeight = window.pageYOffset || document.documentElement.scrollTop
                // スムーズにスクロール
                window.scrollTo({ top: rect.top + currentScrolledHeight - 64, behavior: "smooth" })
            }
        }
    }
    // スクロールする関数を呼び出す
    scrollToTarget()
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
