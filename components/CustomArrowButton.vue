<template>
    <!--
        ボタンコンポーネントのテンプレート部分。条件によってNuxtLinkまたはaタグをレンダリングします。
        - isOuterがtrueの場合、NuxtLinkを使用して外部リンクを生成。
        - isOuterがfalseの場合、aタグを使用して内部リンクを生成。
        ボタンにはクリックイベント（handleClick）とマウスオーバー、マウスリーブイベントがバインドされています。
    -->
    <NuxtLink v-if="isOuter" target="_blank" rel="noopener noreferrer" :href="props.to" class="button-link"
        :style="buttonStyles" @click="handleClick" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
        <span class="relative z-10">
            <slot name="buttonText">MORE</slot>
        </span>
    </NuxtLink>
    <a v-else @click="handleClick" :href="props.to || 'javascript:void(0);'" class="button-link" :style="buttonStyles"
        @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
        <span class="relative z-10">
            <slot name="buttonText">MORE</slot>
        </span>
    </a>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useScrollToTarget } from '~/composables/useScrollToTarget';

// プロパティの定義:
// - to: リンク先URL（省略可能）。
// - height: ボタンの高さ（現状'auto'のみサポート、バリデーションあり）。
// - arrowType: 矢印の種類（'outer', 'transition', 'inner'のいずれか）。
// - colorType: ボタンの色タイプ（'blue-bg-white', 'yellow', 'white'のいずれか）。
// - onClick: クリック時に実行される関数（省略可能）。
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

// 計算プロパティを定義し、ボタンのスタイルを動的に決定します。
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

// ボタンの高さを計算する。現状では'auto'のみをサポート。
const height = computed(() => {
    switch (props.height) {
        case 'auto':
            return 'auto';
        default:
            return 'auto';
    }
});

// ボタンの矢印部分の表示内容を計算する。arrowTypeによって異なる矢印を表示。
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

// 背景色を計算する。colorTypeに応じて異なる色を返す。
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

// 前景の色を計算する。colorTypeに応じて異なる色を返す。
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

// テキストの色を計算する。colorTypeに応じて異なる色を返す。
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

// ホバー時のテキスト色を計算する。colorTypeに応じて異なる色を返す。
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

// ボーダーの幅を計算する。colorTypeに応じて同じ幅を返す。
const borderwidth = computed(() => {
    switch (props.colorType) {
        case 'yellow':
        case 'white':
        default:
            return '-2px';
    }
});

// ボーダーの色を計算する。colorTypeに応じて異なる色を返す。
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

// アウトラインのスタイルを計算する。colorTypeに応じて同じスタイルを返す。
const outline = computed(() => {
    switch (props.colorType) {
        case 'yellow':
        case 'white':
        default:
            return '2px solid transparent';
    }
});

// ホバー時のアウトラインのスタイルを計算する。colorTypeに応じて同じスタイルを返す。
const hoveroutline = computed(() => {
    switch (props.colorType) {
        case 'yellow':
        case 'white':
        default:
            return '2px solid transparent';
    }
});

// アウトラインのオフセットを計算する。colorTypeに応じて同じオフセットを返す。
const outlineoffset = computed(() => {
    switch (props.colorType) {
        case 'yellow':
        case 'white':
        default:
            return '2px';
    }
});

// ボタンのタイプが「outer」かどうかを判定する。
const isOuter = computed(() => {
    return props.arrowType === 'outer';
});

// ルーターを使用してページ遷移を行うための設定。
const router = useRouter();
const isAnimating = ref(false);
const isHovering = ref(false);
const hasNavigated = ref(false); // ナビゲーションが実行されたかどうかを追跡するフラグ

// マウスホバー時の状態を管理するための関数。
const handleMouseOver = () => {
    isHovering.value = true;
};

// マウスがボタンから離れた時の状態を管理するための関数。
const handleMouseLeave = () => {
    isHovering.value = false;
};

// クリックイベントの処理を行う関数。
const handleClick = (event: Event) => {
    const link = event.currentTarget as HTMLElement;

    // すでにアニメーション中の場合は処理を中断。
    if (isAnimating.value) return;

    // ボタンの::before疑似要素のスタイルを取得。
    const computedStyle = window.getComputedStyle(link, '::before');
    const transitionDuration = parseFloat(computedStyle.transitionDuration) || 0;
    const transitionDelay = parseFloat(computedStyle.transitionDelay) || 0;
    const totalTransitionTime = (transitionDuration + transitionDelay) * 1000;

    console.log(`トランジション継続時間: ${transitionDuration}s, トランジション遅延時間: ${transitionDelay}s, トータルトランジション時間: ${totalTransitionTime}ms`);

    // トランジション時間が0またはホバー中でない場合は即時ナビゲーション処理。
    if (totalTransitionTime === 0 || !isHovering.value) {
        handleNavigation(event);
        return;
    }

    isAnimating.value = true;

    // トランジション終了時のイベントリスナー。
    const handleTransitionEnd = () => {
        if (!hasNavigated.value) {
            console.log('トランジション終了');
            hasNavigated.value = true; // フラグをセットして二重ナビゲーションを防ぐ
            link.removeEventListener('transitionend', handleTransitionEnd);
            isAnimating.value = false;
            handleNavigation(event);
        }
    };

    // トランジション終了イベントリスナーを追加。
    link.addEventListener('transitionend', handleTransitionEnd, { once: true });

    // トランジションが終了しない場合のタイムアウト処理。
    setTimeout(() => {
        if (isAnimating.value && !hasNavigated.value) {
            console.log('タイムアウトがトランジション終了前に到達');
            handleTransitionEnd();
        }
    }, totalTransitionTime + 50); // 少し余裕を持たせる。
};

// ナビゲーション処理を行う関数。
const handleNavigation = (event: Event) => {
    console.log('handleNavigation 呼び出し');
    // onClickプロパティが設定されている場合は実行。
    if (props.onClick) {
        props.onClick(event);
    }

    // toプロパティが設定されており、かつ'javascript:void(0);'でない場合はリンク遷移を行う。
    if (props.to && props.to !== 'javascript:void(0);') {
        event.preventDefault();
        router.push(props.to).then(() => {
            useScrollToTarget();
        });
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
