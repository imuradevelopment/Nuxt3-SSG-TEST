<template>
    <!-- 外部リンクの場合 -->
    <NuxtLink v-if="isOuter" target="_blank" rel="noopener noreferrer" :href="props.to" class="button-link"
        :style="buttonStyles" @click="handleClick">
        <span class="relative z-10">
            <slot name="buttonText">MORE</slot>
        </span>
    </NuxtLink>
    <!-- 内部リンクまたはボタンの場合 -->
    <a v-else @click="handleClick" :href="props.to || 'javascript:void(0);'" class="button-link" :style="buttonStyles">
        <span class="relative z-10">
            <slot name="buttonText">MORE</slot>
        </span>
    </a>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useScrollToTarget } from '~/composables/useScrollToTarget';

// プロパティの定義
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

// ボタンのスタイルを計算するためのcomputedプロパティ
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

// 高さの計算
const height = computed(() => {
    switch (props.height) {
        case 'auto':
            return 'auto';
        default:
            return 'auto';
    }
});

// ボタンの矢印タイプに応じた内容
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

// ボタンの背景色
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

// ボタンの背景色（before pseudo-element用）
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

// ボタンのテキスト色
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

// ボタンホバー時のテキスト色
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

// ボタンの枠線幅
const borderwidth = computed(() => {
    switch (props.colorType) {
        case 'yellow':
        case 'white':
        default:
            return '-2px';
    }
});

// ボタンの枠線色
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

// ボタンのアウトライン
const outline = computed(() => {
    switch (props.colorType) {
        case 'yellow':
        case 'white':
        default:
            return '2px solid transparent';
    }
});

// ボタンのアウトラインオフセット
const outlineoffset = computed(() => {
    switch (props.colorType) {
        case 'yellow':
        case 'white':
        default:
            return '2px';
    }
});

// 外部リンクかどうかを判定
const isOuter = computed(() => {
    return props.arrowType === 'outer';
});

const router = useRouter(); // ルーターのインスタンスを取得

// クリックハンドラー
const handleClick = (event: Event) => {
    const link = event.currentTarget as HTMLElement;
    handleNavigation(event); // ナビゲーションハンドラーを呼び出し
};

// ナビゲーションハンドラー
const handleNavigation = (event: Event) => {
    console.log('handleNavigation 呼び出し');
    if (props.onClick) {
        props.onClick(event);
    }
    if (props.to && props.to !== 'javascript:void(0);') {
        event.preventDefault();
        setTimeout(() => {
            if (props.to) {
                router.push(props.to).then(() => {
                    useScrollToTarget(); // ターゲットへのスクロール
                });
            }
        }, 200); // 0.2秒の遅延
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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border-width: var(--border-width);
    border-color: var(--border-color);
    background-color: var(--background-color);
    color: var(--color);
    height: var(--height);
}

/* before擬似要素のスタイル */
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

/* ホバー時のbefore擬似要素のスタイル */
.button-link:hover:before {
    transform: scaleX(1);
}

/* after擬似要素のスタイル */
.button-link:after {
    content: var(--after-content);
    transform: translateX(0);
    transition: transform 0.2s ease-in-out;
    margin-left: 0.25rem;
}

/* ホバー時のafter擬似要素のスタイル */
.button-link:hover:after {
    transform: translateX(0.25rem);
}

/* ホバー時のボタンのテキスト色 */
.button-link:hover {
    color: var(--hover-color);
}
</style>
