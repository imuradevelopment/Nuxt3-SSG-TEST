<template>
    <div>
        <section class="flex bg-cover bg-[url('/images/recruit/welfare/001.png')]">
            <div class="basis-1/3 h-auto z-10 bg-custom-deepBlue"
                style="clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%)">
            </div>
            <div class="flex flex-col grow">
                <h1 id="recruit-welfare01"
                    class="linkScroll self-end mt-28 mb-4 sm:mt-36 sm:mb-8 mx-8 text-2xl sm:text-4xl font-bold text-white">
                    福利厚生
                </h1>
            </div>
        </section>

        <section class="mt-12">
            <div class="mx-4 md:mx-12 flex justify-center items-center">
                <p
                    class="rounded-full px-4 py-2 text-base md:text-4xl text-balance font-extrabold leading-loose bg-custom-deepBlue text-white ">
                    ベイルの福利厚生について紹介します。</p>
            </div>
        </section>

        <section class="mt-8 mb-24">
            <div class="mx-4">
                <BlurGlassCard>
                    <div>
                        <div class="flex flex-nowrap">
                            <div
                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/10 border-y border-custom-deepBlue/20 flex justify-center items-center">
                                各種手当</div>
                            <div
                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-y border-custom-deepBlue/20 flex items-center">
                                住宅手当：一人暮らし応援！家賃（共益費除く）の４０％（最高4万円）を補助します。<br>
                                通勤手当：非課税限度内全額支給します。
                            </div>
                        </div>
                        <div class="flex flex-nowrap">
                            <div
                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/10 border-b border-custom-deepBlue/20 flex justify-center items-center">
                                各種保険</div>
                            <div
                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/20 flex items-center">
                                健康保険、厚生年金保険、雇用保険、労災保険
                            </div>
                        </div>
                        <div class="flex flex-nowrap">
                            <div
                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/10 border-b border-custom-deepBlue/20 flex justify-center items-center">
                                各種休暇
                            </div>
                            <div
                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/20 flex items-center">
                                有給休暇(初年度付与日数１２日、在籍年数に応じ、最大付与日数２３日/年)、年末年始休暇、特別休暇(慶弔等)、産前産後休暇、育児休暇、介護休暇
                            </div>
                        </div>
                        <div class="flex flex-nowrap">
                            <div
                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/10 border-b border-custom-deepBlue/20 flex justify-center items-center">
                                賞与
                            </div>
                            <div
                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/20 flex items-center">
                                賞与　　　：年2回（6月・12月）<br />
                                決算賞与　：年1回（3月）<br />
                                ※業績に応じた賞与。毎年出ています。
                            </div>
                        </div>
                        <div class="flex flex-nowrap">
                            <div
                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/10 border-b border-custom-deepBlue/20 flex justify-center items-center">
                                従業員持株会
                            </div>
                            <div
                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/20 flex items-center">
                                勤続1年以上の社員が自社株を持つことができ、<br />
                                毎年業績に応じた配当金を受け取る事が出来ます。
                            </div>
                        </div>
                        <div class="flex flex-nowrap">
                            <div
                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/10 border-b border-custom-deepBlue/20 flex justify-center items-center">
                                その他福利厚生
                            </div>
                            <div
                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/20 flex items-center">
                                定期健康診断、インフルエンザ予防接種、育児休業制度、退職金制度、加入健康保険組合（関東ITソフトウェア健康保険組合）の保養施設利用可能
                            </div>
                        </div>
                        <div class="flex flex-nowrap">
                            <div
                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/10 border-b border-custom-deepBlue/20 flex justify-center items-center">
                                社内パーティ
                            </div>
                            <div
                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/20 flex items-center">
                                ※2020年度以降はコロナ影響を鑑み中止。<br />
                                ◆キックオフパーティ（4月）<br />
                                ◆忘年会（11月）
                            </div>
                        </div>
                        <!-- <div class="flex flex-nowrap">
                            <div
                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/10 border-b border-custom-deepBlue/20 flex justify-center items-center">
                                社員旅行
                            </div>
                            <div
                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/20 flex items-center">
                                ※2020年度以降はコロナ影響を鑑み中止。<br />
                                ◆2020年-月(実績)   ： (国内を予定していたがコロナ影響を鑑み中止。)<br />
                                ◇2019年4月(実績)   ： 香港<br />
                                ◆2017年3月(実績)   ： 沖縄（石垣島）<br />
                                ◇2015年11月(実績) ： 台湾<br />
                                ◆2013年11月(実績) ： 沖縄（石垣島）<br />
                                　上記以前にも、沖縄本島・北海道など。

                            </div>
                        </div> -->
                    </div>
                </BlurGlassCard>
            </div>
        </section>

    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'double-column-sidebar'
})
import BlurGlassCard from '~/components/BlurGlassCard.vue'
</script>

<style scoped></style>