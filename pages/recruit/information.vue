<template>
    <div>

        <section class="flex bg-cover bg-[url('/images/recruit/information/001.png')]">
            <div class="basis-1/3 h-auto z-10 bg-custom-deepBlue"
                style="clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%)">
            </div>
            <div class="flex flex-col grow">
                <h1 id="recruit-information01"
                    class="linkScroll self-end mx-8 text-2xl sm:text-4xl font-bold text-white">
                    募集情報
                </h1>
                <p
                    class="pl-28 pr-4 -ml-28 mt-12 text-center mb-4 py-2 text-base md:text-lg font-bold text-white bg-custom-blue/70">
                    新卒採用の募集内容をお伝えします。</p>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'double-column-sidebar'
})
</script>

<style scoped></style>