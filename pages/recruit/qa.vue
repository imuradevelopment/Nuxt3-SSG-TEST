<template>
    <div>

        <section class="mb-12 md:mb-24 flex bg-cover bg-[url('/images/recruit/qa/001.png')]">
            <div class="basis-1/3 h-auto z-10 bg-custom-deepBlue"
                style="clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%)">
            </div>
            <div class="flex flex-col grow">
                <h1 id="recruit-qa01" class="linkScroll self-end mx-8 text-2xl sm:text-4xl font-bold text-white">
                    Q & A
                </h1>
                <p
                    class="pl-28 pr-4 -ml-28 mt-12 text-center mb-4 py-2 text-base md:text-lg font-bold text-white bg-custom-blue/70">
                    皆様の良く有る質問を纏めました。</p>
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