<template>
    <div class="card">
        <div class="absolute top-6 left-6 z-10 px-4 leading-loose bg-custom-deepBlue text-white font-bold">{{ props.label }}</div>
        <img :src="props.src" :alt="props.alt"
            :style="{ filter: `drop-shadow(-1.5em -1.5em 0 ${props.tileColor}) drop-shadow(10px 10px 5px ${props.ShadowColor})` }" />
    </div>
</template>

<script setup>

const props = defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: false,
        default: "Image"
    },
    label: {
        type: String,
        required: false,
        default: ""
    },
    tileColor: {
        type: String,
        required: false,
        default: "rgba(0, 37, 92, 0.1)"
    },
    ShadowColor: {
        type: String,
        required: false,
        default: "rgb(0 0 0 / 0.5)"
    },
})
</script>

<style scoped>
.card {
    padding: 1.5rem;
    position: relative;
    width: 100%;
    height: 100%;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    inset: 0;
}
</style>
