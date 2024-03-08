<template>
    <div>
        <h1>各種データ</h1>
        <section class="my-24 mx-4">
            <div class="flex justify-center items-center">
                <Carousel></Carousel>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'double-column-sidebar'
})
import Carousel from '~/components/Carousel.vue'
</script>

<style scoped></style>