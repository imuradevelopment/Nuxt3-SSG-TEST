<template>
    <NuxtLink :to="props.linkTo" v-bind="$attrs" @click="onClick">
        <slot></slot>
    </NuxtLink>
</template>

<script setup lang="ts">
import { useActiveIndexStore } from '~/stores/activeIndex'

const activeIndexStore = useActiveIndexStore()

const onClick = () => {
    activeIndexStore.activeIndex = returnIndex(props.linkTo)
}

const props = defineProps({
    linkTo: {
        type: String,
        required: true,
        default: "/"
    },
})

const indexList: Record<string, string> = {
    "": "0",
    "company": "1",
    "service": "2",
    "recruit": "3",
    "access": "4",
    "contact": "5",
}

const returnIndex = (path: string): string => {
    let result: string = indexList[path.split("#")[0].split("/")[1]]
    if (result == undefined || result == "") {
        result = "0"
    }
    return result
}
</script>