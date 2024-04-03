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

        <section class="mb-12 md:mb-24">
            <BlurGlassCard>
                <div>
                    <h2 id="recruit-qa02" class="text-center text-custom-deepBlue text-4xl font-bold leading-loose">
                        採用について
                    </h2>
                    <hr class="mx-auto mb-4 w-12 border-t-4 border-custom-deepBlue">
                </div>
                <div>
                    <ClearGlassMaskCard class="p-4 mb-4" :rounded="false" :opacity="0.1">
                        <template #content>
                            <div class="md:mx-4 flex flex-col">
                                <p
                                    class="mb-2 pl-4 md:text-3xl lg:text-4xl font-bold text-base sm:leading-loose border-l-4 border-custom-lightBlue">
                                    <span
                                        class="text-custom-lightBlue font-bold text-xl md:text-3xl lg:text-4xl sm:leading-loose">Q:</span>
                                    遠方に住んでいますがリモートでの面接は可能ですか？
                                </p>
                                <p class="mb-2 pl-4 sm:text-2xl text-sm sm:leading-loose border-l-4 border-custom-blue">
                                    最終面接は、来社頂いての面接とさせて頂いていますが、それ以外についてはリモート可能です。
                                </p>
                            </div>
                        </template>
                    </ClearGlassMaskCard>
                </div>
            </BlurGlassCard>
        </section>

    </div>
</template>

<script setup lang="ts">
            definePageMeta({
            layout: 'double-column-sidebar'
            })
import BlurGlassCard from '~/components/BlurGlassCard.vue'
import ClearGlassMaskCard from '~/components/ClearGlassMaskCard.vue'
            </script>

            <style scoped></style>
