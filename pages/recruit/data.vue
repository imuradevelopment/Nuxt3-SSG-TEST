<template>
    <div>
        <h1>各種データ</h1>
        <section class="my-24 mx-4">
            <div class="text-center">6枚パターン</div>
            <div class="flex justify-center items-center">
                <Carousel></Carousel>
            </div>
        </section>

        <section class="my-24 mx-4">
            <div class="text-center">3枚パターン</div>
            <div class="flex justify-center items-center">
                <Carousel_3></Carousel_3>
            </div>
        </section>

        <section class="my-24 mx-4">
            <div class="text-center">8枚パターン</div>
            <div class="flex justify-center items-center">
                <Carousel_8></Carousel_8>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'double-column-sidebar'
})
import Carousel from '~/components/Carousel.vue'
import Carousel_3 from '~/components/Carousel_3.vue'
import Carousel_8 from '~/components/Carousel_8.vue'
</script>

<style scoped></style>