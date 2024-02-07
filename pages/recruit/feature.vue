<template>
    <div>
        <section class="flex bg-cover bg-[url('/images/recruit/feature/001.png')]">
            <div class="basis-1/3 h-auto z-10 bg-custom-deepBlue" style="clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%)">
            </div>
            <div class="flex flex-col grow">
                <h1 id="recruit-feature01"
                    class="linkScroll self-end mt-28 mb-4 sm:mt-36 sm:mb-8 mx-8 text-2xl sm:text-4xl font-bold text-white">
                    ベイルの特徴
                </h1>
            </div>
        </section>
        <section>
            <!-- <div class="mt-24 flex flex-col sm:flex-row space-x-4">
                <div class="basis-1/2">
                    <div class="z-10 relative w-[80%] h-[80%] bg-gray-200"></div>
                    <img class="z-20 relative -top-[68%] left-[12%] w-[80%] h-[80%] bg-cover shadow-md"
                        src="/images/recruit/feature/002.png" />
                </div>
                <div class="basis-1/2">
                    <div class="text-2xl font-bold">Point01</div>
                    <div>
                        <div class="hidden sm:inline-block">
                            <div class="mb-1 px-4 w-fit text-white bg-custom-deepBlue text-xl font-bold leading-loose">
                                日本アイビーエムの
                            </div>
                            <div class="mb-1 px-4 w-fit text-white bg-custom-deepBlue text-xl font-bold leading-loose">
                                コアパートナー
                            </div>
                        </div>
                        <div class="inline-block sm:hidden">
                            <div class="mb-1 px-4 w-fit text-white bg-custom-deepBlue text-xs font-bold leading-loose">
                                日本アイビーエムの
                            </div>
                            <div class="mb-1 px-4 w-fit text-white bg-custom-deepBlue text-xs font-bold leading-loose">
                                コアパートナー
                            </div>
                        </div>
                    </div>
                    <div class="basis-1/2">
                        <div class="p-4 bg-gray-200 text-xs sm:text-base font-bold">
                            世界のリーディングカンパニーであるアイビーエム社は最新のプロダクトやノウハウを駆使したシステムを得意としています。そのようなシステム構築に、提案段階から共同で作業することもあります。また、コベルコシステム株式会社、三井情報株式会社のコアパートナーであり、最先端の技術やノウハウの習得に大きなメリットがあります。
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="mt-12 px-4 sm:mx-0 grid grid-cols-1 sm:grid-cols-2 sm:space-x-4">
                <div class="order-2 mb-4 sm:mb-0 sm:order-1 col-span-1 row-span-2 overflow-hidden">
                    <div class="z-10 relative w-[90%] h-[90%] bg-gray-200"></div>
                    <img class="z-20 relative bottom-[85%] left-[5%] w-[90%] h-[90%] object-cover shadow-md"
                        src="/images/recruit/feature/002.png" />
                </div>
                <div class="order-1 sm:order-2 col-span-1 row-span-1">
                    <div class="mb-4 sm:mb-0 text-2xl font-bold">Point01</div>
                    <div class="mb-4 sm:mb-0">
                        <div class="hidden sm:inline-block">
                            <div class="mb-1 px-4 w-fit text-white bg-custom-deepBlue text-xl font-bold leading-loose">
                                日本アイビーエムの
                            </div>
                            <div class="mb-1 px-4 w-fit text-white bg-custom-deepBlue text-xl font-bold leading-loose">
                                コアパートナー
                            </div>
                        </div>
                        <div class="inline-block sm:hidden">
                            <div class="mb-1 px-4 w-fit text-white bg-custom-deepBlue text-xl font-bold leading-loose">
                                日本アイビーエムの
                            </div>
                            <div class="mb-1 px-4 w-fit text-white bg-custom-deepBlue text-xl font-bold leading-loose">
                                コアパートナー
                            </div>
                        </div>
                    </div>
                </div>
                <div class="order-3 mb-4 sm:mb-0 col-span-1 row-span-1">
                    <div class="p-4 bg-gray-200 text-xs sm:text-base font-bold">
                        世界のリーディングカンパニーであるアイビーエム社は最新のプロダクトやノウハウを駆使したシステムを得意としています。そのようなシステム構築に、提案段階から共同で作業することもあります。また、コベルコシステム株式会社、三井情報株式会社のコアパートナーであり、最先端の技術やノウハウの習得に大きなメリットがあります。
                    </div>
                </div>
            </div>
        </section>
        <section>
        </section>
        <section>
        </section>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'double-column-sidebar'
})
</script>

<style scoped></style>