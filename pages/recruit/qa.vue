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

                    <div class="mb-6">
                        <ClearGlassMaskCard class="p-4" :rounded="false" :opacity="0.1">
                            <template #content>
                                <div class="md:mx-4 flex flex-col">
                                    <p
                                        class="mb-2 pl-4 md:text-3xl font-bold text-base md:leading-loose border-l-4 border-custom-lightBlue">
                                        <span
                                            class="text-custom-lightBlue font-bold text-xl md:text-3xl md:leading-loose">Q:</span>
                                        遠方に住んでいますがリモートでの面接は可能ですか？
                                    </p>
                                    <p
                                        class="mb-2 pl-4 text-sm md:text-xl md:leading-loose border-l-4 border-custom-blue">
                                        最終面接は、来社頂いての面接とさせて頂いていますが、それ以外についてはリモート可能です。
                                    </p>
                                </div>
                            </template>
                        </ClearGlassMaskCard>
                    </div>

                    <div class="mb-6">
                        <ClearGlassMaskCard class="p-4" :rounded="false" :opacity="0.1">
                            <template #content>
                                <div class="md:mx-4 flex flex-col">
                                    <p
                                        class="mb-2 pl-4 md:text-3xl font-bold text-base md:leading-loose border-l-4 border-custom-lightBlue">
                                        <span
                                            class="text-custom-lightBlue font-bold text-xl md:text-3xl md:leading-loose">Q:</span>
                                        プログラミング経験が無いと採用に不利でしょうか？
                                    </p>
                                    <p
                                        class="mb-2 pl-4 text-sm md:text-xl md:leading-loose border-l-4 border-custom-blue">
                                        全くそんな事はありません。当社の選考を受けて頂く方の８割程度がプログラミング未経験です。入社した８割程度の先輩方もプログラミング未経験です。入社後、1年間の研修制度があり、技術はそこで身に付ける事が出来ます。未経験の先輩方も同様にスキルを身に付け、活躍しています。
                                    </p>
                                </div>
                            </template>
                        </ClearGlassMaskCard>
                    </div>

                    <div class="mb-6">
                        <ClearGlassMaskCard class="p-4" :rounded="false" :opacity="0.1">
                            <template #content>
                                <div class="md:mx-4 flex flex-col">
                                    <p
                                        class="mb-2 pl-4 md:text-3xl font-bold text-base md:leading-loose border-l-4 border-custom-lightBlue">
                                        <span
                                            class="text-custom-lightBlue font-bold text-xl md:text-3xl md:leading-loose">Q:</span>
                                        どのような人材が求められるでしょうか？
                                    </p>
                                    <p
                                        class="mb-2 pl-4 text-sm md:text-xl md:leading-loose border-l-4 border-custom-blue">
                                        新卒採用ではコミュニケーション力(聞く力、伝える力)を重要視します。我々の業界は多くの技術者と一緒に仕事を行う為、テクニカルに強いだけでは上手く機能しない場面が多々有ります。個々の力以上にチーム力でプロジェクトを成功させる為には、相手の意見に耳を傾け、自分の考えを解りやすく伝える。そんな自然なコミュニケーション力を求めます。
                                    </p>
                                </div>
                            </template>
                        </ClearGlassMaskCard>
                    </div>

                    <div class="">
                        <ClearGlassMaskCard class="p-4" :rounded="false" :opacity="0.1">
                            <template #content>
                                <div class="md:mx-4 flex flex-col">
                                    <p
                                        class="mb-2 pl-4 md:text-3xl font-bold text-base md:leading-loose border-l-4 border-custom-lightBlue">
                                        <span
                                            class="text-custom-lightBlue font-bold text-xl md:text-3xl md:leading-loose">Q:</span>
                                        入社までにやっておいた方が良いことはありますか？
                                    </p>
                                    <p
                                        class="mb-2 pl-4 text-sm md:text-xl md:leading-loose border-l-4 border-custom-blue">
                                        学生生活をなるべく悔いのないように過ごすことが一番です。友人との長期旅行、新しい趣味の開拓、興味のある業界でのアルバイトなど。専門的な技術や知識は入社後の研修で身に付けられるため、学生の今だからこそ出来ることを数多く経験してください。それでも何かをしなければ不安なようであれば、仕事で毎日のように使用するExcelに慣れておくと入社後アドバンテージを取る事が出来ると思います。
                                    </p>
                                </div>
                            </template>
                        </ClearGlassMaskCard>
                    </div>

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
