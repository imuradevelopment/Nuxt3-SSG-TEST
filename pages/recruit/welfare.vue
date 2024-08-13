<template>
    <div>
        <!-- ページのヘッダーセクション -->
        <section class="mb-12 md:mb-24 flex bg-cover bg-[url('/images/recruit/welfare/001.png')]">
            <!-- 左側の装飾 -->
            <div class="basis-1/3 h-auto z-10 bg-custom-deepBlue"
                style="clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%)">
            </div>
            <!-- タイトルと説明文 -->
            <div class="flex flex-col grow">
                <h1 id="recruit-welfare01" class="linkScroll self-end mx-8 text-2xl sm:text-4xl font-bold text-white">
                    福利厚生
                </h1>
                <p
                    class="pl-28 pr-4 -ml-28 mt-12 text-center mb-4 py-2 text-base md:text-lg font-bold text-white bg-custom-blue/70">
                    とても大切な福利厚生。<br class="inline-block md:hidden" />他社との比較にお役立て下さい。</p>
            </div>
        </section>

        <!-- 福利厚生の詳細セクション -->
        <section class="mb-12 md:mb-24 ">
            <div class="mx-4">
                <!-- 透明な背景カード -->
                <BlurGlassCard color="rgba(0, 37, 92, 0.6)" :blur=2 class="text-white">
                    <div>
                        <!-- 各種手当 -->
                        <div class="flex flex-nowrap">
                            <div
                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-y border-custom-deepBlue/30 flex justify-center items-center">
                                各種手当</div>
                            <div
                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-y border-custom-deepBlue/30 flex items-center">
                                住宅手当：一人暮らし応援！家賃（共益費除く）の４０％（最高4万円）を補助します。<br>
                                通勤手当：非課税限度内全額支給します。
                            </div>
                        </div>
                        <!-- 各種保険 -->
                        <div class="flex flex-nowrap">
                            <div
                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                各種保険</div>
                            <div
                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                健康保険、厚生年金保険、雇用保険、労災保険
                            </div>
                        </div>
                        <!-- 各種休暇 -->
                        <div class="flex flex-nowrap">
                            <div
                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                各種休暇
                            </div>
                            <div
                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                有給休暇(初年度付与日数１２日、在籍年数に応じ、最大付与日数２３日/年)、年末年始休暇、特別休暇(慶弔等)、産前産後休暇、育児休暇、介護休暇
                            </div>
                        </div>
                        <!-- 賞与 -->
                        <div class="flex flex-nowrap">
                            <div
                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                賞与
                            </div>
                            <div
                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                賞与　　　：年2回（6月・12月）<br />
                                決算賞与　：年1回（3月）<br />
                                ※業績に応じた賞与。毎年出ています。
                            </div>
                        </div>
                        <!-- 従業員持株会 -->
                        <div class="flex flex-nowrap">
                            <div
                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                従業員持株会
                            </div>
                            <div
                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                勤続1年以上の社員が自社株を持つことができ、<br />
                                毎年業績に応じた配当金を受け取る事が出来ます。
                            </div>
                        </div>
                        <!-- その他福利厚生 -->
                        <div class="flex flex-nowrap">
                            <div
                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                その他福利厚生
                            </div>
                            <div
                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                定期健康診断、インフルエンザ予防接種、育児休業制度、退職金制度、加入健康保険組合（関東ITソフトウェア健康保険組合）の保養施設利用可能
                            </div>
                        </div>
                        <!-- 社内パーティ -->
                        <div class="flex flex-nowrap">
                            <div
                                class="w-1/3 text-base leading-loose bg-custom-deepBlue/20 border-b border-custom-deepBlue/30 flex justify-center items-center">
                                社内パーティ
                            </div>
                            <div
                                class="w-2/3 pl-2 text-xs md:text-sm leading-loose md:leading-loose border-b border-custom-deepBlue/30 flex items-center">
                                ◆キックオフパーティ（4月）<br />
                                ◆忘年会（11月）
                            </div>
                        </div>
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
