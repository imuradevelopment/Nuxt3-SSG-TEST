<template>
    <a class="
    custom-arrow-button 
    custom-arrow-button--position 
    custom-arrow-button--decoration 
    custom-arrow-button--transition 
    custom-arrow-button--transform 
    custom-arrow-button--hover 
    custom-arrow-button--rounded 
    custom-arrow-button--rounded-left 
    custom-arrow-button--rounded-right 
    " :style="`--after-content: '${afterContent}'`">
        <span class="custom-arrow-button__text">
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
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    border: 2px solid rgb(0, 10, 135);
    outline: none;
    background-color: transparent;
    color: rgb(0, 10, 135);
    font-size: 1.125rem;
    cursor: pointer;
    margin-left: 0.5rem;
    border-radius: 9999px;
    overflow: hidden;
}

.custom-arrow-button__text {
    position: relative;
    z-index: 10;
}

.custom-arrow-button--position::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.custom-arrow-button--position::after {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}

.custom-arrow-button--decoration {
    border-color: rgb(0, 10, 135);
    background-color: transparent;
    color: rgb(0, 10, 135);
}

.custom-arrow-button--decoration::before {
    background-color: rgb(0, 10, 135);
}

.custom-arrow-button--decoration::after {
    content: var(--after-content);
}

.custom-arrow-button--transition {
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
}

.custom-arrow-button--transition::before {
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
}

.custom-arrow-button--transition::after {
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
}

.custom-arrow-button--transform::before {
    transform: scaleX(0);
    transform-origin: left;
}

.custom-arrow-button--transform::after {
    transform: translateX(0);
}

.custom-arrow-button--hover:hover {
    color: rgb(231, 198, 148);
    border-color: transparent;
}

.custom-arrow-button--hover:hover::before {
    transform: scaleX(1);
}

.custom-arrow-button--hover:hover::after {
    transform: translateX(1rem);
}

.custom-arrow-button--rounded {
    border-radius: 9999px;
}

.custom-arrow-button--rounded::before {
    border-radius: 9999px;
}

.custom-arrow-button--rounded-left {
    border-top-left-radius: 9999px;
    border-bottom-left-radius: 9999px;
}

.custom-arrow-button--rounded-right {
    border-top-right-radius: 9999px;
    border-bottom-right-radius: 9999px;
}

.custom-arrow-button--rounded-right:hover {
    border-top-right-radius: 9999px;
    border-bottom-right-radius: 9999px;
}
</style>
