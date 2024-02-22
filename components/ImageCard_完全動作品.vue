<template>
    <div class="card">
      <img :src="props.src" :alt="props.alt" />
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
    tileColor:  {
        type: String,
        required: false,
        default: "rgb(229 231 235)"
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
  filter: drop-shadow(-1.5em -1.5em 0 rgb(229 231 235)) drop-shadow(10px 10px 5px rgb(0 0 0 / 0.5));
}
</style>