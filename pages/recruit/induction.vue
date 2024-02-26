<template>
    <div>

        <section class="flex bg-cover bg-[url('/images/recruit/induction/001.png')]">
            <div class="basis-1/3 h-auto z-10 bg-custom-deepBlue" style="clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%)">
            </div>
            <div class="flex flex-col grow">
                <h1 id="recruit-induction01"
                    class="linkScroll self-end mt-28 mb-4 sm:mt-36 sm:mb-8 mx-8 text-2xl sm:text-4xl font-bold text-white">
                    研修制度
                </h1>
            </div>
        </section>

        <section class="mt-12">
            <h2 id="recruit-induction02" class="px-8 w-fit text-white bg-custom-deepBlue text-4xl font-bold leading-loose">
                研修制度</h2>
            <div class="flex flex-col justify-center items-center">
                <div
                    class="mt-4 text-2xl font-bold underline decoration-wavy decoration-2 decoration-custom-deepBlue underline-offset-8">
                    未経験でも安心。充実した研修。</div>
                <div class="mt-4 text-sm sm:text-base font-bold text-center">
                    ベイルでは文系・IT未経験でも確実にエンジニアとして<br />成長できる環境を用意しており、入社後の1年間<br />様々な研修・OJTで、社会人・技術者としての基礎を築きます。
                </div>

                <div class="mt-4 text-custom-deepBlue text-2xl font-bold">■ 研修プログラム ■</div>
                <div class="text-custom-deepBlue text-sm font-bold">※前年度の実績で研修内容は毎年変わります</div>
            </div>
            <div class="m-4">
                <Timeline :items="timeline" />
            </div>
        </section>

        <section class="mt-12">
            <h2 id="recruit-induction03" class="px-8 w-fit text-white bg-custom-deepBlue text-4xl font-bold leading-loose">
                教育システム</h2>
            <div class="m-4">
                <div class="flex flex-wrap">
                    <div class="w-full sm:w-1/2">
                        <ImageCard src="/images/recruit/induction/004.png"></ImageCard>
                    </div>
                    <div class="w-full sm:w-1/2">
                        <BlurGlassCard>
                            <p class="text-sm sm:mt-4 sm:text-base font-bold sm:leading-7 leading-7"><span
                                    class="text-2xl font-bold leading-loose">社員が自分で解決できるよう促します</span><br />最初に社会人としての基本的な挨拶から入ります。その後は、先輩から課題をもらって簡単なプログラムを作成し、業務に必要な知識を具体的に習熟していきます。課題に対してどのように処理していくのがいいのか、自分なりに答えを探して分からないことは聞いていくのですが、全部は教えてくれません、そのときに受けたアドバイスを基に解決するのですが、それまでの知識でやれるのならもう少し考えて、だめなら教えてもらいできるだけ自分で答えを見つけるようにします。そのような教え方でステップアップを図り、その後は現場で実際の業務に携わりながら覚えていきます。
                            </p>
                        </BlurGlassCard>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-12">
            <h2 id="recruit-induction04" class="px-8 w-fit text-white bg-custom-deepBlue text-4xl font-bold leading-loose">
                キャリアパス</h2>
            <div class="mx-4">
                <div class="flex flex-col justify-center items-center">
                    <BlurGlassCard class="max-w-xl mt-4 mb-4 md:mb-0">
                        <div
                            class="mt-4 text-2xl font-bold text-center underline decoration-wavy decoration-2 decoration-custom-deepBlue underline-offset-8">
                            目標を見つけて、ステップアップ !</div>
                        <div class="mt-4 text-base sm:text-lg font-bold text-center">
                            途中でやりたい事が変わっても<br />積み上げた経験を活かす事で 唯一無二のエンジニアに。
                        </div>
                        <p class="text-center text-sm sm:mt-4 sm:text-base font-bold sm:leading-7 leading-7">
                            人それぞれで目指すものも違えば、向き不向きも有ります。<br
                                class="hidden md:inline-block" />また、様々な経験の中でやりたい事が変わる事もあるでしょう。<br
                                class="hidden md:inline-block" />ベイルでは、適宜相談しながら その人に合ったキャリアパスを描いていきたいと考えます。
                        </p>
                    </BlurGlassCard>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <NuxtImg class="hidden md:inline-block" width="576" src="/images/recruit/induction/006.png" />
                    <NuxtImg class="inline-block md:hidden"  width="343" src="/images/recruit/induction/006.png" />
                </div>
                <!-- <div class="mt-6">
                    <div class="flex flex-wrap">
                        <div class="w-full sm:w-1/2">
                            <ImageCard src="/images/recruit/induction/007.png"></ImageCard>
                        </div>
                        <div class="w-full sm:w-1/2">
                            <p class="text-sm sm:mt-4 sm:text-base font-bold sm:leading-7 leading-7">
                                人それぞれで目指すものも違えば、向き不向きも有ります。<br
                                    class="hidden md:inline-block" />また、様々な経験の中でやりたい事が変わる事もあるでしょう。<br
                                    class="hidden md:inline-block" />ベイルでは、適宜相談しながら その人に合ったキャリアパスを描いていきたいと考えます。
                            </p>
                        </div>
                    </div>
                </div> -->
            </div>
        </section>

        <section class="my-12">
            <h2 id="recruit-induction05" class="px-8 w-fit text-white bg-custom-deepBlue text-4xl font-bold leading-loose">
                資格取得支援</h2>
            <div class="mx-4 flex flex-col justify-center items-center">
                <div
                    class="mt-4 text-2xl font-bold leading-loose underline decoration-wavy decoration-2 decoration-custom-deepBlue underline-offset-8">
                    ベイルは技術資格、<br class="inline-block md:hidden" />業務資格の取得を支援します。</div>
                <div class="mt-6">
                    <div class="flex flex-wrap">
                        <div class="w-full sm:w-1/2">
                            <ImageCard src="/images/recruit/induction/008.png"></ImageCard>
                        </div>
                        <div class="w-full sm:w-1/2">
                            <BlurGlassCard>
                                <div class="text-2xl font-bold leading-loose">技術資格、業務資格の取得支援</div>
                                <p class="text-sm sm:mt-4 sm:text-base font-bold sm:leading-7 leading-7">資格取得に向けた支援（受験補助金） 及び、資格認定者に報奨金の支給を行っております。</p>
                                <ul class="pl-6 list-image-[url(/images/common/check.svg)] text-sm sm:mt-4 sm:text-base font-bold sm:leading-7 leading-7">
                                    <li>情報処理技術者試験（例：基本情報技術者、応用情報技術者）</li>
                                    <li>ベンダー認定資格（例：OracleMaster、Cisco、LPIC）</li>
                                    <li>協会認定資格（例：PMP）</li>
                                    <li>業務系資格（例：ファイナンシャル・プランニング系、銀行業務系、英語系）</li>
                                </ul>
                            </BlurGlassCard>
                        </div>
                    </div>
                </div>
                <div class="mt-6">
                    <div class="flex flex-wrap">
                        <div class="w-full sm:w-1/2">
                            <ImageCard src="/images/recruit/induction/009.png"></ImageCard>
                        </div>
                        <div class="w-full sm:w-1/2">
                            <BlurGlassCard>
                                <div class="text-2xl font-bold leading-loose">外部研修支援</div>
                                <p class="text-sm sm:mt-4 sm:text-base font-bold sm:leading-7 leading-7">業務に必要となるスキルを補完する為に、短期的な外部研修を受講して頂く事が有ります。技術的な研修や、コーチング、チームリードなどの技能研修など、身に付けたい（付けて欲しい）スキルに応じて推奨します。
                                </p>
                            </BlurGlassCard>
                        </div>
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
import Timeline from '~/components/Timeline.vue'
import ImageCard from '~/components/ImageCard.vue'
import BlurGlassCard from '~/components/BlurGlassCard.vue'
import { ref } from 'vue'
// タイムラインのデータを定義
const timeline = ref([
    {
        month: '4月',
        text: '<div class="font-bold leading-8">プログラミング外部研修<br class="inline-block sm:hidden" />（4ヵ月）</div><div class="text-sm font-bold tracking-wide leading-6">4月から7月末までの4か月間、Javaを中心としたプログラミングの基礎を学習します。Java以外にも、HTML、CSS、データベースについて学習します。研修の最後には実際のプロジェクトのようなチーム開発も行います。</div>'
    },
    {
        month: '8月',
        text: '<div class="font-bold leading-8">インターン講師担当</div><div class="text-sm font-bold tracking-wide leading-6">株式会社ベイルのインターンシップに講師として参加し、研修で得た技術・知識をアウトプットしていただきます。</div>',
        // image: '/images/recruit/induction/002.png',
    },
    {
        month: '9月',
        image: '/images/recruit/induction/002.png',
    },
    {
        month: '10月',
        text: '<div class="font-bold leading-8">プログラミング内部研修<br class="inline-block sm:hidden" />（約2ヵ月）</div><div class="text-sm font-bold tracking-wide leading-6">プログラミング外部研修の復習やグループでのプログラム開発など様々な課題に取り組みながら、Java、フレームワークについて理解を深め、プログラミング技術を定着化させます。</div>'
    },
    {
        month: '11月',
        text: '<div class="font-bold leading-8">AWS外部研修<br class="inline-block sm:hidden" />（1ヵ月）</div><div class="text-sm font-bold tracking-wide leading-6">1か月間、AWSの基礎を学び、認定資格の取得を目指します。クラウド化が進む今のIT業界で、AWS(Amazon Web Services)の知識は必ず必要になります。</div>'
    },
    {
        month: '12月',
        text: '<div class="font-bold leading-8">OJT参画</div><div class="text-sm font-bold tracking-wide leading-6">社内プロジェクト、もしくはお客様先のプロジェクトにOJTとして参画し、先輩社員の下で実務トレーニングになります。</div>',
        image: '/images/recruit/induction/003.png',
    },
    {
        month: '3月',
        text: '<div class="font-bold leading-8">プロジェクトアサイン</div><div class="text-sm font-bold tracking-wide leading-6">プロジェクトに参画。先輩社員指導の下で1人の技術者として作業を行います。</div>'
    }
])
</script>

<style scoped></style>