<template>
    <a class="custom-arrow-button" :style="`--after-content: '${afterContent}'`">
        <span class="button-text">
            {{ props.buttonTitle }}
        </span>
    </a>
</template>


<script setup lang="ts">
const props = defineProps({
    buttonTitle: {
        type: String,
        required: true,
    },
    buttonType: {
        // 生成AI：after:content-['_↗']の部分をコンポーネント使用時に選択できるようにする。buttonTypeは列挙型でouterが指定された場合「_↗」、transitionが指定された場合「→」、innerが指定された場合「↓」を挿入する。
        type: String,
        required: true,
        validator: (value: string) => {
            return ['outer', 'transition', 'inner'].includes(value)
        }
    }
})

const afterContent = computed(() => {
    switch (props.buttonType) {
        case 'outer':
            return '_↗'
        case 'transition':
            return '→'
        case 'inner':
            return '↓'
        default:
            return ''
    }
})
</script>

<style scoped>
.custom-arrow-button {
    width: fit-content;
    /* ボタンの幅を内容に合わせる */
    position: relative;
    /* 絶対位置指定の基準にする */
    display: inline-flex;
    /* ボタンをインライン要素として並べる */
    align-items: center;
    /* ボタン内の要素を垂直方向に中央揃えにする */
    justify-content: center;
    /* ボタン内の要素を水平方向に中央揃えにする */
    padding: 0.75rem 1.5rem;
    /* ボタンの内側の余白を設定する */
    border: 2px solid rgb(0, 10, 135);
    /* ボタンの境界線を設定する */
    outline: 2px solid transparent;
    /* ボタンのアウトラインを消す */
    background-color: transparent;
    /* ボタンの背景色を透明にする */
    color: rgb(0, 10, 135);
    /* ボタンの文字色を設定する */
    font-size: 1.125rem;
    /* ボタンの文字サイズを設定する */
    cursor: pointer;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    /* ボタンにマウスカーソルを合わせたときにポインターにする */
    transition: all 0.3s ease-in-out;
    /* ボタンの全てのプロパティにトランジション効果を適用する */
    margin-left: 0.5rem;
    /* ボタンの左側の余白を設定する */
    border-radius: 9999px;
    /* ボタンの角を丸くする */
    overflow: hidden;
    /* ボタンの外側にはみ出した部分を隠す */
}

.custom-arrow-button::before {
    content: "";
    /* 疑似要素の内容を空にする */
    position: absolute;
    /* 疑似要素を絶対位置指定にする */
    top: 0;
    /* 疑似要素の上端をボタンの上端に合わせる */
    left: 0;
    /* 疑似要素の左端をボタンの左端に合わせる */
    width: 100%;
    /* 疑似要素の幅をボタンと同じにする */
    height: 100%;
    /* 疑似要素の高さをボタンと同じにする */
    background-color: rgb(0, 10, 135);
    /* 疑似要素の背景色を設定する */
    transform: scaleX(0);
    /* 疑似要素を水平方向に0倍にする */
    transform-origin: left;
    /* 疑似要素の変形の基準点を左端にする */
    transition: transform 0.3s ease-in-out;
    /* 疑似要素の変形にトランジション効果を適用する */
    border-radius: 9999px;
    /* 疑似要素の角を丸くする */
}

.custom-arrow-button::after {
    content: var(--after-content);
    /* 疑似要素の内容をCSS変数にする */
    position: absolute;
    /* 疑似要素を絶対位置指定にする */
    top: 50%;
    /* 疑似要素の上端をボタンの中央に合わせる */
    right: 0;
    /* 疑似要素の右端をボタンの右端に合わせる */
    transform: translateY(-50%) translateX(0);
    /* 疑似要素を垂直方向に中央揃えにし、水平方向に移動しないようにする */
    transition: transform 0.3s ease-in-out;
    /* 疑似要素の変形にトランジション効果を適用する */
}

.custom-arrow-button:hover {
    color: rgb(231, 198, 148);
    /* ボタンにマウスカーソルを合わせたときの文字色を設定する */
    border-color: transparent;
    /* ボタンにマウスカーソルを合わせたときの境界線の色を透明にする */
}

.custom-arrow-button:hover::before {
    transform: scaleX(1);
    /* ボタンにマウスカーソルを合わせたときに疑似要素を水平方向に1倍にする */
}

.custom-arrow-button:hover::after {
    transform: translateY(-50%) translateX(1rem);
    /* ボタンにマウスカーソルを合わせたときに疑似要素を水平方向に1rem分移動する */
}

.button-text{
    position: relative;
    z-index: 10;
}
</style>
