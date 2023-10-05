<template>
    <NuxtLink :to="props.linkTo" @click.native="onClick">
        <slot></slot>
    </NuxtLink>
</template>

<script setup lang="ts">
import { useActiveIndexStore } from '~/stores/activeIndex'
const activeIndexStore = useActiveIndexStore()
const onClick = () => {
    activeIndexStore.activeIndex = returnIndex(props.linkTo)
    // activeIndexStore.activeIndex = "3"
    console.log(activeIndexStore.activeIndex)
}
const props = defineProps({
    linkTo:{
        type:String,
        required:true,
        default: "/"
    },
})

// const route = useRoute()
// const isSameRoute = () => {
//     return props.linkTo === route.fullPath
// }

const indexList = {
    "": "0",
    "company": "1",
    "service": "2",
    "recruit": "3",
    "access": "4",
    "contact": "5",
}

const returnIndex = (path:String) => {
    let result:String = indexList[path.split("#")[0].split("/")[1]]
    if(result == undefined || result == ""){
        result = "0"
    }
    return result
}
</script>