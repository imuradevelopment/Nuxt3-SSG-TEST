<template>
    <div>

        <section class="flex bg-cover bg-[url('/images/recruit/office/001.png')]">
            <div class="basis-1/3 h-auto z-10 bg-custom-deepBlue" style="clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%)">
            </div>
            <div class="flex flex-col grow">
                <h1 id="recruit-office01"
                    class="linkScroll self-end mt-28 mb-4 sm:mt-36 sm:mb-8 mx-8 text-2xl sm:text-4xl font-bold text-white">
                    オフィス紹介
                </h1>
            </div>
        </section>

        <section class="mt-24">
            <h2 id="recruit-office02"
                class="pl-16 pr-8 w-fit text-white bg-custom-deepBlue text-4xl font-bold leading-loose">
                外観（7階～9階）</h2>
            <div class="mt-8 px-4 md:mx-auto max-w-3xl">
                <div class="flex flex-wrap">
                    <div class="w-full md:w-1/2">
                        <ImageCard src="/images/recruit/office/002.png" alt="オフィス外観"></ImageCard>
                    </div>
                    <div class="w-full md:w-1/2">
                        <BlurGlassCard>
                            <p class="text-sm sm:text-base font-bold sm:leading-7 leading-7"><span
                                    class="text-2xl font-bold leading-loose">
                                    山手通りに面した本社オフィス。</span><br />
                                日比谷線/東急東横線「中目黒駅」から山手通り沿いを5分程歩くと見えてくる、
                                1階にお寿司屋さん(築地すし好)が入っているビルです。<br />
                                モダンな外観が目を引きます。
                            </p>
                        </BlurGlassCard>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-24">
            <h2 id="recruit-office03"
                class="pl-16 pr-8 w-fit text-white bg-custom-deepBlue text-4xl font-bold leading-loose">
                受付（7階）</h2>
            <div class="mt-8 px-4 md:mx-auto max-w-xl">
                <div class="flex flex-wrap">
                    <div class="w-full">
                        <ImageCard src="/images/recruit/office/003.png" alt="7階 受付" label="7階 受付"></ImageCard>
                    </div>
                    <div class="w-full">
                        <BlurGlassCard>
                            <p class=" text-sm sm:text-base font-bold sm:leading-7 leading-7">
                                エレベーターを7階で降りると、すぐ右手に受付があります。<br />
                                こちらで来訪者の受付を行っています。
                            </p>
                        </BlurGlassCard>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-24">
            <h2 id="recruit-office04"
                class="pl-16 pr-8 w-fit text-white bg-custom-deepBlue text-4xl font-bold leading-loose">
                セミナールーム（9階）</h2>
            <div class="mt-8 px-4 md:mx-auto max-w-xl">
                <div class="flex flex-wrap">
                    <div class="w-full">
                        <ImageCard src="/images/recruit/office/004.png" alt="9階 セミナールーム" label="9階 セミナールーム"></ImageCard>
                    </div>
                    <div class="w-full">
                        <BlurGlassCard>
                            <p class=" text-sm sm:text-base font-bold sm:leading-7 leading-7">
                                9階は、1つのフロアすべてがセミナールームになっており、<br />
                                会社説明会や大人数会議の際に使用しています。
                            </p>
                        </BlurGlassCard>
                    </div>
                </div>
            </div>
        </section>

        <section class="my-24">
            <h2 id="recruit-office05"
                class="pl-16 pr-8 w-fit text-white bg-custom-deepBlue text-4xl font-bold leading-loose">
                開発ルーム（8階）</h2>
            <div class="mt-8 px-4 md:mx-auto max-w-xl">
                <div class="mb-16 flex flex-wrap">
                    <div class="w-full">
                        <ImageCard src="/images/recruit/office/005.png" alt="8階 開発ルーム" label="8階 開発ルーム"></ImageCard>
                    </div>
                    <div class="w-full">
                        <BlurGlassCard>
                            <p class=" text-sm sm:text-base font-bold sm:leading-7 leading-7">
                                8階は、主に開発フロアとなっており、本社在中の社員が仕事をしています。<br />
                                開発フロアは9階でしたが、2022年にから8階にお引越ししました。
                            </p>
                        </BlurGlassCard>
                    </div>
                </div>
                <div class="mb-16 flex flex-wrap">
                    <div class="w-full">
                        <ImageCard src="/images/recruit/office/006.png" alt="8階 ミーティングスペース" label="8階 ミーティングスペース"></ImageCard>
                    </div>
                    <div class="w-full">
                        <BlurGlassCard>
                            <p class=" text-sm sm:text-base font-bold sm:leading-7 leading-7">
                                8階には開発フロアのほかにミーティングスペースがあり、<br />
                                プロジェクトの打ち合わせや面談など用途に応じて使用出来るエリアを設けています。
                            </p>
                        </BlurGlassCard>
                    </div>
                </div>
                <div class="flex flex-wrap">
                    <div class="w-full">
                        <ImageCard src="/images/recruit/office/007.png" alt="8階 グリコボックス" label="8階 グリコボックス"></ImageCard>
                    </div>
                    <div class="w-full">
                        <BlurGlassCard>
                            <p class=" text-sm sm:text-base font-bold sm:leading-7 leading-7">
                                8階にはグリコボックスが設置されていて、100円で好きなお菓子が食べれます。<br />
                                小腹がすいたときやリフレッシュの際に利用されます。
                            </p>
                        </BlurGlassCard>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'double-column-sidebar'
})
import ImageCard from '~/components/ImageCard.vue'
import BlurGlassCard from '~/components/BlurGlassCard.vue'
</script>

<style scoped></style>