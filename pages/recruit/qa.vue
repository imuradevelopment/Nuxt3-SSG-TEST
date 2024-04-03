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

                    <div class="mb-2">
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

        <section class="mb-12 md:mb-24">
            <BlurGlassCard>
                <div>
                    <h2 id="recruit-qa03" class="text-center text-custom-deepBlue text-4xl font-bold leading-loose">
                        仕事について
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
                                        作業場所はどこになりますか？
                                    </p>
                                    <p
                                        class="mb-2 pl-4 text-sm md:text-xl md:leading-loose border-l-4 border-custom-blue">
                                        基本的に配属されたプロジェクト先(お客様先のビル)に一定期間常駐する事になります。または、本社(中目黒オフィス)でも受託業務を請け負っており、本社で勤務する事もあります。
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
                                        勤務時はスーツ着用が必須ですか？
                                    </p>
                                    <p
                                        class="mb-2 pl-4 text-sm md:text-xl md:leading-loose border-l-4 border-custom-blue">
                                        お客様先での勤務が中心となる為、スーツやビジネスカジュアルを基本としています。
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
                                        プロジェクト配属先はどのように決められますか？
                                    </p>
                                    <p
                                        class="mb-2 pl-4 text-sm md:text-xl md:leading-loose border-l-4 border-custom-blue">
                                        本人の希望や現場の人員ニーズ、入社後の研修の様子、性格適正などから総合的に判断させていただき、プロジェクト配属先を決定します。最初の頃は先輩社員が居る比較的安定したプロジェクトで経験を積んで頂く事が多いですが、経験を積んでいく事で様々なプロジェクト先希望にもご相談に応じます。
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
                                        配属プロジェクトはどのくらいの期間で変わりますか？
                                    </p>
                                    <p
                                        class="mb-2 pl-4 text-sm md:text-xl md:leading-loose border-l-4 border-custom-blue">
                                        プロジェクトによって異なります。2～3年近く携わるプロジェクトもあれば、数か月程度のものもあり、配属期間は様々です。今般の状況だと技術者不足の影響も有り、携わるプロジェクトが長期化する傾向にあります。
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
                                        転勤や遠方へのプロジェクトに参画する事も有りますか？
                                    </p>
                                    <p
                                        class="mb-2 pl-4 text-sm md:text-xl md:leading-loose border-l-4 border-custom-blue">
                                        通勤する現場は都内近郊になります。基本的にお住まいの場所から通勤１時間程度の現場に参画頂きます。お住まいの場所によっては少しオーバーしてしまう事も有りますが、その際はご相談した上で決定します。
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
                                        在宅勤務は可能でしょうか？
                                    </p>
                                    <p
                                        class="mb-2 pl-4 text-sm md:text-xl md:leading-loose border-l-4 border-custom-blue">
                                        コロナ禍でリモートや在宅も普及してきましたが、ＳＩ業界では情報セキュリティ(漏洩防止)等の観点から、現場に出社して行う作業が多いです。ウィズコロナとして、リモートに切り替えていた現場も徐々に通常出社に元に戻していく企業様も増えています。
                                    </p>
                                </div>
                            </template>
                        </ClearGlassMaskCard>
                    </div>

                    <div class="mb-2">
                        <ClearGlassMaskCard class="p-4" :rounded="false" :opacity="0.1">
                            <template #content>
                                <div class="md:mx-4 flex flex-col">
                                    <p
                                        class="mb-2 pl-4 md:text-3xl font-bold text-base md:leading-loose border-l-4 border-custom-lightBlue">
                                        <span
                                            class="text-custom-lightBlue font-bold text-xl md:text-3xl md:leading-loose">Q:</span>
                                        残業はどれ位 発生しますか？
                                    </p>
                                    <p
                                        class="mb-2 pl-4 text-sm md:text-xl md:leading-loose border-l-4 border-custom-blue">
                                        プロジェクトにより様々ではありますが、基本的に残業は発生します。月当たり全社員で平均すると20時間程度ですが、40時間を超える事も有ります。我々の仕事はお客様に納品する期限を守る為、細かくスケジュールを決めますが、様々な要因によりスケジュールが遅れてしまう事があります。自身の遅れはチームの遅れとなり、関係する他チームにも影響を与え、最終的に納期に間に合わなくなる事を防ぐ為に残業でキャッチアップする事が必要になります。このあたりは説明会で丁寧に実態をお伝えできればと思います。
                                    </p>
                                </div>
                            </template>
                        </ClearGlassMaskCard>
                    </div>

                </div>
            </BlurGlassCard>
        </section>

        <section class="mb-12 md:mb-24">
            <BlurGlassCard>
                <div>
                    <h2 id="recruit-qa04" class="text-center text-custom-deepBlue text-4xl font-bold leading-loose">
                        福利厚生・制度について
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
                                        勤務中のハラスメントに関する対策は整備されていますか？
                                    </p>
                                    <p
                                        class="mb-2 pl-4 text-sm md:text-xl md:leading-loose border-l-4 border-custom-blue">
                                        ハラスメント・コンプライアンス違反を防止する観点から、社内窓口を設置しており、いつでも相談可能です。社内の人間に伝えにくい場合は外部機関を利用する事も可能です。
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
                                        体調管理・メンタルヘルスにかかわる配慮はありますか？
                                    </p>
                                    <p
                                        class="mb-2 pl-4 text-sm md:text-xl md:leading-loose border-l-4 border-custom-blue">
                                        安全衛生委員会を設置し、従業員の災害防止と健康維持増進を図っております。法定の健康診断やストレスチェックのほか、就業環境を整え、従業員の安全衛生を保持しております。また、本社には救護スペースも有り、突発的な体調不良時にベッドで安静に休養する事が出来ます。
                                    </p>
                                </div>
                            </template>
                        </ClearGlassMaskCard>
                    </div>

                    <div class="mb-2">
                        <ClearGlassMaskCard class="p-4" :rounded="false" :opacity="0.1">
                            <template #content>
                                <div class="md:mx-4 flex flex-col">
                                    <p
                                        class="mb-2 pl-4 md:text-3xl font-bold text-base md:leading-loose border-l-4 border-custom-lightBlue">
                                        <span
                                            class="text-custom-lightBlue font-bold text-xl md:text-3xl md:leading-loose">Q:</span>
                                        副業は出来ますか？
                                    </p>
                                    <p
                                        class="mb-2 pl-4 text-sm md:text-xl md:leading-loose border-l-4 border-custom-blue">
                                        当社規定により、会社の許可を得ない副業や兼業等は禁止としております。ただし、事情を相談頂ければ許可する事もあります。
                                    </p>
                                </div>
                            </template>
                        </ClearGlassMaskCard>
                    </div>

                </div>
            </BlurGlassCard>
        </section>

        <section class="mb-12 md:mb-24">
            <BlurGlassCard>
                <div>
                    <h2 id="recruit-qa04" class="text-center text-custom-deepBlue text-4xl font-bold leading-loose">
                        その他
                    </h2>
                    <hr class="mx-auto mb-4 w-12 border-t-4 border-custom-deepBlue">
                </div>
                <div>

                    <div class="mb-2">
                        <ClearGlassMaskCard class="p-4" :rounded="false" :opacity="0.1">
                            <template #content>
                                <div class="md:mx-4 flex flex-col">
                                    <p
                                        class="mb-2 pl-4 md:text-3xl font-bold text-base md:leading-loose border-l-4 border-custom-lightBlue">
                                        <span
                                            class="text-custom-lightBlue font-bold text-xl md:text-3xl md:leading-loose">Q:</span>
                                        当サイトに記載されていない内容はどのように確認できますか？
                                    </p>
                                    <p
                                        class="mb-2 pl-4 text-sm md:text-xl md:leading-loose border-l-4 border-custom-blue">
                                        お問い合わせフォームからご質問内容を入力・送信いただければ、後日回答を差し上げます。正式なエントリーではなくても、ご遠慮なくお問い合わせください。
                                        <div class="mt-4 flex justify-end items-center">
                                            <CustomArrowButton color-type="blue-bg-white" arrowType="transition"
                                                to="/contact"><template #buttonText>
                                                    お問い合せフォームへ
                                                </template></CustomArrowButton>
                                        </div>
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
import CustomArrowButton from '~/components/CustomArrowButton.vue'
            </script>

            <style scoped></style>
