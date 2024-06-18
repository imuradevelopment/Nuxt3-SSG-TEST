<template>
    <NuxtLink v-if="isOuter" target="_blank" rel="noopener noreferrer" :href="props.to" class="button-link"
        :style="buttonStyles" @click="handleClick">
        <span class="relative z-10">
            <slot name="buttonText">MORE</slot>
        </span>
    </NuxtLink>
    <a v-else @click="handleClick" :href="props.to || 'javascript:void(0);'" class="button-link" :style="buttonStyles">
        <span class="relative z-10">
            <slot name="buttonText">MORE</slot>
        </span>
    </a>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useScrollToTarget } from '~/composables/useScrollToTarget';

// コンポーネントに渡されるプロパティ
const props = defineProps({
    to: {
        type: String,
        required: false,
    },
    height: {
        type: String,
        required: false,
        validator: (value: string) => {
            return ['auto'].includes(value);
        },
    },
    arrowType: {
        type: String,
        required: true,
        validator: (value: string) => {
            return ['outer', 'transition', 'inner'].includes(value);
        },
    },
    colorType: {
        type: String,
        required: false,
        validator: (value: string) => {
            return ['blue-bg-white', 'yellow', 'white'].includes(value);
        },
    },
    onClick: {
        type: Function,
        required: false,
    },
});

// スタイル用の計算プロパティを定義
const buttonStyles = computed(() => {
    const baseStyles = {
        '--before-bg-color': beforebackgroundcolor.value,
        '--border-color': bordercolor.value,
        '--color': color.value,
        '--hover-color': hovercolor.value,
        '--border-width': borderwidth.value,
        '--outline': outline.value,
        '--outline-offset': outlineoffset.value,
        '--background-color': backgroundcolor.value,
        '--height': height.value,
        '--after-content': `"${afterContent.value}"`,
    };
    return baseStyles;
});

// ボタンの高さを計算する
const height = computed(() => {
    switch (props.height) {
        case 'auto':
            return 'auto';
        default:
            return 'auto';
    }
});

// ボタンの矢印部分の表示内容を計算する
const afterContent = computed(() => {
    switch (props.arrowType) {
        case 'outer':
            return '↗';
        case 'transition':
            return '→';
        case 'inner':
            return '↓';
        default:
            return '';
    }
});

// 背景の色を計算する
const backgroundcolor = computed(() => {
    switch (props.colorType) {
        case 'blue-bg-white':
            return 'white';
        case 'yellow-bg-white':
            return 'white';
        case 'yellow':
            return 'transparent';
        case 'white':
            return 'transparent';
        default:
            return 'transparent';
    }
});

// 背景の色を計算する（前景の色の補完）
const beforebackgroundcolor = computed(() => {
    switch (props.colorType) {
        case 'yellow':
            return 'rgba(231, 198, 148)';
        case 'white':
            return 'white';
        default:
            return 'rgb(0, 10, 135)';
    }
});

// テキストの色を計算する
const color = computed(() => {
    switch (props.colorType) {
        case 'yellow':
            return 'rgba(231, 198, 148)';
        case 'white':
            return 'white';
        default:
            return 'rgb(0, 10, 135)';
    }
});

// ホバー時のテキスト色を計算する
const hovercolor = computed(() => {
    switch (props.colorType) {
        case 'yellow':
            return 'rgb(0, 10, 135)';
        case 'white':
            return 'rgb(0, 10, 135)';
        default:
            return 'rgb(231, 198, 148)';
    }
});

// ボーダーの幅を計算する
const borderwidth = computed(() => {
    switch (props.colorType) {
        case 'yellow':
            return '-2px';
        case 'white':
            return '-2px';
        default:
            return '-2px';
    }
});

// ボーダーの色を計算する
const bordercolor = computed(() => {
    switch (props.colorType) {
        case 'yellow':
            return 'rgba(231, 198, 148)';
        case 'white':
            return 'white';
        default:
            return 'rgb(0, 10, 135)';
    }
});

// アウトラインのスタイルを計算する
const outline = computed(() => {
    switch (props.colorType) {
        case 'yellow':
            return '2px solid transparent';
        case 'white':
            return '2px solid transparent';
        default:
            return '2px solid transparent';
    }
});

// ホバー時のアウトラインのスタイルを計算する
const hoveroutline = computed(() => {
    switch (props.colorType) {
        case 'yellow':
            return '2px solid transparent';
        case 'white':
            return '2px solid transparent';
        default:
            return '2px solid transparent';
    }
});

// アウトラインのオフセットを計算する
const outlineoffset = computed(() => {
    switch (props.colorType) {
        case 'yellow':
            return '2px';
        case 'white':
            return '2px';
        default:
            return '2px';
    }
});

// ボタンのタイプが「outer」かどうかを判定
const isOuter = computed(() => {
    return props.arrowType === 'outer';
});

// ルーターを使用してページ遷移を行う
const router = useRouter();
const handleClick = (event: Event) => {
    const link = event.currentTarget as HTMLElement;
    const handleTransitionEnd = () => {
        link.removeEventListener("transitionend", handleTransitionEnd);

        if (props.onClick) {
            props.onClick(event);
        }

        if (props.to) {
            event.preventDefault();
            const targetPage = props.to;
            router.push(targetPage);
            useScrollToTarget();
        }
    };

    // アニメーションが実行中かどうかを判定
    const computedStyle = window.getComputedStyle(link);
    const transitionDuration = parseFloat(computedStyle.transitionDuration) || 0;
    const transitionDelay = parseFloat(computedStyle.transitionDelay) || 0;
    const totalTransitionTime = (transitionDuration + transitionDelay) * 1000;

    if (totalTransitionTime > 0) {
        link.addEventListener("transitionend", handleTransitionEnd);
    } else {
        handleTransitionEnd();
    }
};
</script>

<style scoped>
.button-link {
    width: fit-content;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1.5rem;
    font-size: 1.125rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border-radius: 9999px;
    /* Full rounded */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border-width: var(--border-width);
    border-color: var(--border-color);
    background-color: var(--background-color);
    color: var(--color);
    height: var(--height);
}

.button-link:before {
    content: '';
    position: absolute;
    inset: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease-in-out;
    background-color: var(--before-bg-color);
    border-radius: 9999px;
}

.button-link:hover:before {
    transform: scaleX(1);
}

.button-link:after {
    content: var(--after-content);
    transform: translateX(0);
    transition: transform 0.2s ease-in-out;
    margin-left: 0.25rem;
}

.button-link:hover:after {
    transform: translateX(0.25rem);
}

.button-link:hover {
    color: var(--hover-color);
}
</style>
