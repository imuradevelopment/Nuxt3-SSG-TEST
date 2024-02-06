
<template>
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
</template>
<script setup lang="ts">
import { useScrollToTarget } from '~/composables/useScrollToTarget'
const { targetId, scrollToTarget } = useScrollToTarget()

const props = defineProps({
    to: {
        type: String,
        required: true,
    },
    height: {
        type: String,
        required: false,
        validator: (value: string) => {
            return ['3rem'].includes(value)
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
            return ['yellow', 'white'].includes(value)
        }
    }
})
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
const isOuter = computed(() => {
    switch (props.arrowType) {
        case 'outer':
            return true;
        default:
            return false;
    }
})
const isInner = computed(() => {
    switch (props.arrowType) {
        case 'inner':
            return true;
        default:
            return false;
    }
})

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
const beforebackgroundcolor = computed(() => {
    switch (props.colorType) {
        case 'yellow':
            return 'rgba(231 198 148)'
        case 'white':
            return 'rgb(0 10 135)'
        default:
            return 'rgb(0 10 135)'
    }
})
const hovercolor = computed(() => {
    switch (props.colorType) {
        case 'yellow':
            return 'rgb(0 10 135)'
        case 'white':
            return 'white'
        default:
            return 'rgb(231 198 148)'
    }
})
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
const outline = computed(() => {
    switch (props.colorType) {
        case 'yellow':
            return '2px solid transparent'
        case 'white':
            return '2px solid white'
        default:
            return '2px solid transparent'
    }
})
const outlineoffset = computed(() => {
    switch (props.colorType) {
        case 'yellow':
            return '2px'
        case 'white':
            return '-2px'
        default:
            return '2px'
    }
})
const backgroundcolor = computed(() => {
    switch (props.colorType) {
        case 'yellow':
            return 'transparent'
        case 'white':
            return 'transparent'
        default:
            return 'transparent'
    }
})
const height = computed(() => {
    switch (props.height) {
        case '3rem':
            return '3rem'
        default:
            return '3rem'
    }
})
const hoveroutline = computed(() => {
    switch (props.colorType) {
        case 'yellow':
            return '2px solid rgba(231 198 148)'
        case 'white':
            return '2px solid white'
        default:
            return '2px solid rgb(0 10 135)'
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
    /* border: v-bind(hoveroutline); */
}

a:hover:after {
    content: var(--after-content);
}
</style>
