<template>
    <div class="card">
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
    tileColor: {
        type: String,
        required: false,
        // default: "var(--custom-color-gray)"
        default: "rgb(226 232 240)"
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
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    inset: 0;
}
</style>
