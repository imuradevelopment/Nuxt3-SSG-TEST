<template>
    <NuxtLink v-if="isOuter" target="_blank" rel="noopener noreferrer" :href="props.to" class="
            w-fit 
            relative 
            inline-flex 
            items-center 
            justify-center 
            px-6 
            py-3 
            border-2 
            outline-none 
            bg-transparent 
            text-lg 
            cursor-pointer 
            transition-all 
            duration-300 
            ease-in-out 
            before:absolute 
            before:inset-0 
            before:transform 
            before:-scale-x-0 
            before:origin-left 
            before:transition-transform 
            before:duration-300 
            before:ease-in-out 
            before:rounded-full 
            ml-2  
            after:transform 
            after:translate-x-0 
            after:transition-transform 
            after:duration-300 
            after:ease-in-out 
            hover:border-transparent 
            hover:before:scale-x-100 
            origin-left 
            hover:after:translate-x-4 
            rounded-l-full 
            rounded-r-full 
            hover:rounded-r-full 
            overflow-hidden
            border-[rgb(0,10,135)] 
            text-[rgb(0,10,135)] 
            before:bg-[rgb(0,10,135)] 
            hover:text-[rgb(231,198,148)] 
        " :style="`--after-content: '${afterContent}'`">
        <span class="relative z-10">
            {{ props.buttonTitle }}
        </span>
    </NuxtLink>
    <NuxtLink v-if="!isOuter" :href="props.to" class="
            w-fit 
            relative 
            inline-flex 
            items-center 
            justify-center 
            px-6 
            py-3 
            border-2 
            outline-none 
            bg-transparent 
            text-lg 
            cursor-pointer 
            transition-all 
            duration-300 
            ease-in-out 
            before:absolute 
            before:inset-0 
            before:transform 
            before:-scale-x-0 
            before:origin-left 
            before:transition-transform 
            before:duration-300 
            before:ease-in-out 
            before:rounded-full 
            ml-2  
            after:transform 
            after:translate-x-0 
            after:transition-transform 
            after:duration-300 
            after:ease-in-out 
            hover:border-transparent 
            hover:before:scale-x-100 
            origin-left 
            hover:after:translate-x-4 
            rounded-l-full 
            rounded-r-full 
            hover:rounded-r-full 
            overflow-hidden
            border-[rgb(0,10,135)] 
            text-[rgb(0,10,135)] 
            before:bg-[rgb(0,10,135)] 
            hover:text-[rgb(231,198,148)] 
        " :style="`--after-content: '${afterContent}'`">
        <span class="relative z-10">
            {{ props.buttonTitle }}
        </span>
    </NuxtLink>
</template>


<script setup lang="ts">

const props = defineProps({
    buttonTitle: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    arrowType: {
        // 生成AI：after:content-['_↗']の部分をコンポーネント使用時に選択できるようにする。buttonTypeは列挙型でouterが指定された場合「_↗」、transitionが指定された場合「→」、innerが指定された場合「↓」を挿入する。
        type: String,
        required: true,
        validator: (value: string) => {
            return ['outer', 'transition', 'inner'].includes(value)
        }
    },
    colorType: {
        // 生成AI：after:content-['_↗']の部分をコンポーネント使用時に選択できるようにする。buttonTypeは列挙型でouterが指定された場合「_↗」、transitionが指定された場合「→」、innerが指定された場合「↓」を挿入する。
        type: String,
        required: true,
        validator: (value: string) => {
            return ['outline-blue', 'outline-white', 'fill'].includes(value)
        }
    }
})

const afterContent = computed(() => {
    switch (props.arrowType) {
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
const isOuter = computed(() => {
    switch (props.arrowType) {
        case 'outer':
            return true;
        default:
            return false;
    }
})

</script>

<style scoped>
a:after {
    content: var(--after-content);
}

a:hover:after {
    content: var(--after-content);
}
</style>
