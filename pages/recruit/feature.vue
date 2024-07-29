<template>
    <div>
        <section class="mb-12 md:mb-24 flex bg-cover bg-[url('/images/recruit/feature/001.png')]">
            <div class="basis-1/3 h-auto z-10 bg-custom-deepBlue"
                style="clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%)">
            </div>
            <div class="flex flex-col grow">
                <h1 id="recruit-feature01" class="linkScroll self-end mx-8 text-2xl sm:text-4xl font-bold text-white">
                    ベイルの特徴
                </h1>
                <p
                    class="pl-28 pr-4 -ml-28 mt-12 text-center mb-4 py-2 text-base md:text-lg font-bold text-white bg-custom-blue/70">
                    数あるSier企業の中での<br class="inline-block md:hidden" />ベイルはココが少し違います。</p>
            </div>
        </section>
        <section>
            <div class="px-4 sm:mx-0 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-4">
                <div class="order-2 sm:order-1 max-w-screen mb-4 sm:mb-0 col-span-1 sm:row-span-3 overflow-hidden">
                    <ImageCard src="/images/recruit/feature/002.png"></ImageCard>
                </div>
                <div class="order-1 sm:order-2 col-span-1 sm:row-span-1">
                    <div class="mb-4 sm:mb-0 text-2xl font-bold">Point01</div>
                    <div class="mb-4 sm:mb-0">
                        <div class="mb-1 px-4 w-fit text-white bg-custom-deepBlue text-xl font-bold leading-loose">
                            日本アイビーエムの
                        </div>
                        <div class="mb-1 px-4 w-fit text-white bg-custom-deepBlue text-xl font-bold leading-loose">
                            コアパートナー
                        </div>
                    </div>
                </div>
                <div class="order-3 mb-4 sm:mb-0 col-span-1 sm:row-span-2">
                    <BlurGlassCard class="p-4 text-xs sm:text-base font-bold sm:leading-7 leading-7">
                        世界のリーディングカンパニーであるアイビーエム社は最新のプロダクトやノウハウを駆使したシステムを得意としています。そのようなシステム構築に、提案段階から共同で作業することもあります。また、コベルコシステム株式会社、三井情報株式会社のコアパートナーであり、最先端の技術やノウハウの習得に大きなメリットがあります。
                    </BlurGlassCard>
                </div>
            </div>
        </section>
        <section>
            <div class="mt-12 px-4 sm:mx-0 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-4">
                <div class="order-2 sm:order-3 max-w-screen mb-4 sm:mb-0 col-span-1 sm:row-span-3 overflow-hidden">
                    <ImageCard src="/images/recruit/feature/003.png"></ImageCard>
                </div>
                <div class="order-1 sm:order-1 col-span-1 sm:row-span-1">
                    <div class="mb-4 sm:mb-0 text-2xl font-bold">Point02</div>
                    <div class="mb-4 sm:mb-0">
                        <div class="mb-1 px-4 w-fit text-white bg-custom-deepBlue text-xl font-bold leading-loose">
                            未経験でも安心
                        </div>
                        <div class="mb-1 px-4 w-fit text-white bg-custom-deepBlue text-xl font-bold leading-loose">
                            充実した研修制度
                        </div>
                    </div>
                </div>
                <div class="order-3 sm:order-2 mb-4 sm:mb-0 col-span-1 sm:row-span-2">
                    <BlurGlassCard class="p-4 text-xs sm:text-base font-bold">
                        <div class="sm:leading-7 leading-7">
                            プログラミング未経験者が多いSier会社ではスキル不足により単純作業しか任せてもらえないことが多いです。ベイルでは文系・IT未経験でも確実にエンジニアとして成長できる環境を用意しており、入社後の1年間様々な研修・OJTで、技術者としての基礎を築きます。
                        </div>
                        <div class="self-end pt-4">
                            <CustomArrowButton arrowType="transition" to="/recruit/induction">
                                <template #buttonText>研修内容を見る</template>template
                            </CustomArrowButton>
                        </div>
                    </BlurGlassCard>
                </div>
            </div>
        </section>
        <section>
            <div class="my-12 px-4 sm:mx-0 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-4">
                <div class="order-2 sm:order-1 max-w-screen mb-4 sm:mb-0 col-span-1 sm:row-span-3 overflow-hidden">
                    <ImageCard src="/images/recruit/feature/004.png"></ImageCard>
                </div>
                <div class="order-1 sm:order-2 col-span-1 sm:row-span-1">
                    <div class="mb-4 sm:mb-0 text-2xl font-bold">Point03</div>
                    <div class="mb-4 sm:mb-0">
                        <div class="mb-1 px-4 w-fit text-white bg-custom-deepBlue text-xl font-bold leading-loose">
                            社員の育成を第一に
                        </div>
                        <div class="mb-1 px-4 w-fit text-white bg-custom-deepBlue text-xl font-bold leading-loose">
                            考える
                        </div>
                    </div>
                </div>
                <div class="order-3 mb-4 sm:mb-0 col-span-1 sm:row-span-2">
                    <BlurGlassCard class="p-4 text-xs sm:text-base font-bold sm:leading-7 leading-7">
                        1.「売上目標・利益目標を設けない」事により、利益度外視で成長に繋がる仕事を選ぶ事が出来ます。<br />
                        2.「組織を細分化しない」事により、様々な業務・技術・役割に挑戦する事が出来ます。<br />
                        3.「年功序列としない」事により、年齢や経験ではなく、やってみたい！と言う気持ちを大切にします。<br />
                        <br />
                        上記全て、やりたい事が出来ている時期というものが、人が一番成長出来る時期だと考えています。
                    </BlurGlassCard>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import CustomArrowButton from '~/components/CustomArrowButton.vue'
definePageMeta({
    layout: 'double-column-sidebar'
})
import ImageCard from '~/components/ImageCard.vue'
import BlurGlassCard from '~/components/BlurGlassCard.vue'
</script>

<style scoped></style>