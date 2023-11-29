<template>
  <GlassCard :rounded="false" :opacity="0.5"
    class="h-12 fixed top-16 w-full maxWidth mx-auto z-50 hidden md:inline-block">
    <template #content>
      <div class="bg-custom-blue/30 h-full">
        <div class="h-12 px-4 fixed top-16 w-full maxWidth mx-auto flex items-center justify-between">
          <div>
            <h1 class="font-bold text-lg md:text-2xl text-center text-custom-platina">会社情報</h1>
          </div>
          <div>
            <PageHeader />
          </div>
        </div>
      </div>
    </template>
  </GlassCard>
  <div class="mx-4">
    <section class="text-center mt-8 md:mt-20">
      <div class="mb-4">
        <h2 id="company01"
          class="linkScrollPageHeader font-bold text-2xl md:text-4xl text-custom-blue mb-2">
          TOPメッセージ</h2>
        <p class="text-sm md:text-base font-bold break-keep text-left md:text-center">
          私どもベイルにおいては、個人の提案や成長が会社の発展につながると考えています。<br/>
          「自分の人生については自分で考える」ということが、ようやく当たり前になりました。<br/>
          ベイルの存在意義は、仕事と人生に誇りとやりがいを持ち、成長してゆく為の器となることです。<br/>
        </p>
      </div>

      <div>
        <div class="hidden md:inline-block">
          <div ref="flex1" class="flex flex-wrap justify-around items-stretch mt-8">
            <div class="noWrappedFirstChild">
              <ClipHexagon class="bg-[url('/images/company/image06.png')] bg-center bg-cover h-full">
                <template #content>
                  <GlassCard :rounded="false" :opacity="0.4" class="p-4 pb-8 h-full"
                    style="padding-top: 25%; padding-bottom: 25%;">
                    <template #content>
                      <div class="h-full flex flex-wrap items-center">
                        <h3 class="w-full font-bold text-lg md:text-xl text-custom-lightOrange my-2">お客様の「こうしたい」をお聞かせください。
                        </h3>
                        <p class="text-left text-xs text-white">
                          急速な競争化時代の到来に伴い、今日の企業はよりタイムリーで効率的なビジネスへの対応を迫られています。<br />
                          製造・販売・開発部門などの各現場をひとつに結んだスピーディーで無駄のない業務処理システムの構築、的確でクイックな意思決定を実現する自由な情報へのアクセスなど現実しなければならないことはたくさんあります。<br />
                          しかし、それらを推し進めるに当たって、技術やコストの面でクリアしなければならない問題が多すぎることも事実です。<br />
                          仕方がないとあきらめる前に、是非私どもへご相談ください。<br />
                          確かな技術と豊富な経験で、きっとご満足頂けるベストなご提案をさせて頂きます。
                        </p>
                      </div>
                    </template>
                  </GlassCard>
                </template>
              </ClipHexagon>
            </div>
            <div  class="noWrapped">
              <ClipHexagon class="bg-[url('/images/company/image06.png')] bg-center bg-cover h-full">
                <template #content>
                  <GlassCard :rounded="false" :opacity="0.4" class="p-4 pb-8 h-full flex items-center"
                    style="padding-top: 25%; padding-bottom: 25%;">
                    <template #content>
                      <div class="h-full flex flex-wrap items-center">
                        <h3 class="w-full font-bold text-lg md:text-xl text-custom-lightOrange my-2">お客様の声にお応えできる理由。</h3>
                        <p class="text-left text-xs text-white">
                          私どもは、独立系ソフトウェア会社として特定のメーカーや機種、企業の規模や業種・業務に関わらず、幅広い提案実績がございます。<br />
                          大型コンピュータを用いたシステムからワークステーション/パーソナルコンピュータをネットワークで結んだクライアント・サーバーコンピューティング、Windowsアプリケーションを駆使したOAシステム、さらにはそれらをすべて統合したエンタープライズシステムと数々のシステムを手がけて得た技術的成果を、お客様の「こうしたい」に実現力として活かします。<br />
                          また、最近主流のクライアント・サーバーシステム/Windowsアプリケーションシステムについては開発環境を自社内に保有し、データベースの構築・アプリケーション開発など常に最新技術に対応できる体制を整えております。
                        </p>
                      </div>
                    </template>
                  </GlassCard>
                </template>
              </ClipHexagon>
            </div>
          </div>
        </div>
        <div class="md:hidden">
          <div ref="flex2" class="flex flex-wrap justify-around items-stretch mt-8">
            <div style="flex-basis: 32rem;">
              <ClipPentagon class="bg-[url('/images/company/image06.png')] bg-center bg-cover h-full">
                <template #content>
                  <GlassCard :rounded="false" :opacity="0.4" class="p-4 pb-8 h-full" style="padding-top: 6rem;">
                    <template #content>
                      <div class="h-full flex flex-wrap items-center">
                        <h3 class="w-full font-bold text-lg md:text-xl text-custom-lightOrange my-2">お客様の「こうしたい」をお聞かせください。
                        </h3>
                        <p class="text-left text-xs text-white">
                          急速な競争化時代の到来に伴い、今日の企業はよりタイムリーで効率的なビジネスへの対応を迫られています。<br />
                          製造・販売・開発部門などの各現場をひとつに結んだスピーディーで無駄のない業務処理システムの構築、的確でクイックな意思決定を実現する自由な情報へのアクセスなど現実しなければならないことはたくさんあります。<br />
                          しかし、それらを推し進めるに当たって、技術やコストの面でクリアしなければならない問題が多すぎることも事実です。<br />
                          仕方がないとあきらめる前に、是非私どもへご相談ください。<br />
                          確かな技術と豊富な経験で、きっとご満足頂けるベストなご提案をさせて頂きます。
                        </p>
                      </div>
                    </template>
                  </GlassCard>
                </template>
              </ClipPentagon>
            </div>
            <div style="flex-basis: 32rem; margin-top: 2rem;">
              <ClipPentagon class="bg-[url('/images/company/image06.png')] bg-center bg-cover h-full">
                <template #content>
                  <GlassCard :rounded="false" :opacity="0.4" class="p-4 pb-8 h-full" style="padding-top: 6rem;">
                    <template #content>
                      <div class="h-full flex flex-wrap items-center">
                        <h3 class="w-full font-bold text-lg md:text-xl text-custom-lightOrange my-2">お客様の声にお応えできる理由。</h3>
                        <p class="text-left text-xs text-white">
                          私どもは、独立系ソフトウェア会社として特定のメーカーや機種、企業の規模や業種・業務に関わらず、幅広い提案実績がございます。<br />
                          大型コンピュータを用いたシステムからワークステーション/パーソナルコンピュータをネットワークで結んだクライアント・サーバーコンピューティング、Windowsアプリケーションを駆使したOAシステム、さらにはそれらをすべて統合したエンタープライズシステムと数々のシステムを手がけて得た技術的成果を、お客様の「こうしたい」に実現力として活かします。<br />
                          また、最近主流のクライアント・サーバーシステム/Windowsアプリケーションシステムについては開発環境を自社内に保有し、データベースの構築・アプリケーション開発など常に最新技術に対応できる体制を整えております。
                        </p>
                      </div>
                    </template>
                  </GlassCard>
                </template>
              </ClipPentagon>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="text-center mt-12">
      <h2 id="company02"
        class="linkScrollPageHeader font-bold text-2xl md:text-4xl text-custom-blue mb-2">ベイルの由来
      </h2>
      <div class="bg-[url('/images/company/mtvaile.jfif')] bg-center bg-cover h-full rounded">
        <GlassCard class="p-4" :opacity="0.6">
          <template #content>
            <div class="flex">
              <div class="m-auto mr-4">
                <NuxtImg src="/images/company/image09.JPG"></NuxtImg>
              </div>
              <div class="text-left text-xs md:text-sm text-white">
                <p>
                  社名のベイルとは、学生時代から始めたスキーが縁で生まれました。<br />
                  第2次世界大戦中、半身不随の重傷を負ったピーターサイバートがコロラドにあるベイル山に魅了され、理想のスキー場を建設するためにあらゆる困難に負けず夢を実現したエピソードが会社設立への想いに込められています。<br />
                  社名にその山の名を冠したのは、どのような障害に突き当たろうとも投げ出さず、遊び心を忘れなかったピーターサイバート氏のように生きたいと願う強い意志の表れでもあるのです。<br />
                  ただ働くだけでなく常に夢を持ち続けて行きたい。<br />
                  <br />
                  ベイルは、そんな理想を共有できる仲間を求めています。
                </p>
              </div>
            </div>
          </template>
        </GlassCard>
      </div>
    </section>
    <section class="text-center mt-16">
      <h2 id="company03"
        class="linkScrollPageHeader font-bold text-2xl md:text-4xl text-custom-blue mb-2">沿革</h2>
      <div class="m-auto text-left w-fit">
        <el-timeline>
          <el-timeline-item timestamp="1991年7月" type="primary" size="large">
            文京区関口に有限会社ベイルコーポレイションを資本金３００万円にて設立
          </el-timeline-item>
          <el-timeline-item timestamp="1993年5月" type="primary" size="large">
            資本金1,000万円に増資、有限会社から株式会社へ組織変更
          </el-timeline-item>
          <el-timeline-item timestamp="1997年2月" type="primary" size="large">
            千代田区神田に本社を移転、社名を株式会社ベイルに変更
          </el-timeline-item>
          <el-timeline-item timestamp="1997年6月" type="primary" size="large">
            資本金2,000万円に増資
          </el-timeline-item>
          <el-timeline-item timestamp="2005年6月" type="primary" size="large">
            目黒区東山へ本社移転
          </el-timeline-item>
          <el-timeline-item timestamp="2007年2月" type="primary" size="large">
            資本金２，６００万円に増資
          </el-timeline-item>
          <el-timeline-item timestamp="2007年6月" type="primary" size="large">
            プライバシーマークの認証取得
          </el-timeline-item>
        </el-timeline>
      </div>
    </section>
    <section class="text-center mt-8">
      <h2 id="company04"
        class="linkScrollPageHeader font-bold text-2xl md:text-4xl text-custom-blue mb-2">会社概要</h2>
      <div class="text-xs md:text-sm text-left">
        <CustomTable :items="companySummary" :showHeader="false"></CustomTable>
      </div>
    </section>
    <section class="text-center mb-8 md:mb-16">
      <h2 id="company05"
        class="linkScrollPageHeader font-bold text-2xl md:text-4xl text-custom-blue mt-8 mb-2">アクセス</h2>
      <GlassCard class="p-4">
        <template #content>
          <div class="flex flex-row flex-wrap">
            <div class="w-full md:w-1/2">
              <NuxtImg src="/images/company/Map.png" alt="Image" class="w-full h-full object-contain"></NuxtImg>
            </div>
            <div class="flex flex-col pl-0 md:pl-4 w-full md:w-1/2 mt-4 md:mt-0">
              <div class="text-xs md:text-sm text-left">
                日比谷線/東急東横線「中目黒駅」徒歩5分<br /><br />
                中目黒駅 東口改札を出て、信号渡らずに左折。<br />
                蕎麦屋さん（吉そば）がある方向へ進み、そのまま山手通り沿いを5分程歩くと1Fにお寿司屋さん(築地すし好)が入っているビルです。<br />
                <NuxtLink 
                  class="bg-custom-blue text-white py-2 px-4 rounded-full inline-block my-4" 
                  to="https://www.google.com/maps/place/%E3%88%B1%E3%83%99%E3%82%A4%E3%83%AB/@35.646232,139.6936131,17z/data=!3m1!4b1!4m6!3m5!1s0x60188b4c2a3cc4fb:0x83c884f6f8cca99!8m2!3d35.646232!4d139.696188!16s%2Fg%2F1tqtxwbw?entry=ttu" 
                  target="_blank"
                >
                  Google Mapで開く
                </NuxtLink>
                </div>
                <NuxtImg src="/images/company/image07.png" alt="Image" class="w-full h-full object-cover"></NuxtImg>
            </div>
          </div>
        </template>
      </GlassCard>
    </section>
  </div>
</template>

<script setup lang="ts">
import CustomTable from '~/components/CustomTable.vue'
import GlassCard from '~/components/GlassCard.vue'
import PageHeader from '~/components/PageHeader.vue'
import ClipHexagon from '~/components/ClipHexagon.vue'
import ClipPentagon from '~/components/ClipPentagon.vue'
import ClipConvexPolygon from '~/components/ClipConvexPolygon.vue'

import useDetectWrap from '~/composables/useDetectWrap'

interface CompanySummaryItem {
  column1: string;
  column2: string;
}

const companySummary = [
  {
    column1: "column1",
    column2: "column2"
  },
  {
    column1: "社名",
    column2: "株式会社 ベイル"
  },
  {
    column1: "英文社名",
    column2: "Vaile inc."
  },
  {
    column1: "設立年月日",
    column2: "1991年 7月 30日"
  },
  {
    column1: "事業内容",
    column2: "情報サービス業"
  },
  {
    column1: "コアパートナー",
    column2: "日本アイ・ビー・エム株式会社<br/>コベルコシステム株式会社<br/>三井情報株式会社"
  },
  {
    column1: "主要取引先",
    column2: "NECネクサソリューションズ株式会社<br/>日本電気株式会社（NEC）<br/>NTTコムソリューションズ株式会社<br/>株式会社TBK<br/>デロイト・トーマツ・リスクアドバイザリー株式会社<br/>日本タタ・コンサルタンシー・サービシズ株式会社<br/>富士フイルムシステムサービス株式会社<br/>富士通株式会社"
  },
  {
    column1: "技術者数",
    column2: "250名"
  },
  {
    column1: "役員",
    column2: "代表取締役  安部 功"
  },
  {
    column1: "資本金",
    column2: "2600万円"
  },
  {
    column1: "取引銀行",
    column2: "三菱UFJ銀行 中目黒駅前支店"
  },
  {
    column1: "オフィス",
    column2: '<div class="flex flex-wrap"><div>〒153-0043<br/>東京都目黒区東山１－６－２<br/>TPR中目黒ビル<br/>　7F 受付<br/>　8F 開発フロア<br/>　9F セミナーフロア</div><div class="m-auto"><a href="https://www.google.com/maps/place/%E3%88%B1%E3%83%99%E3%82%A4%E3%83%AB/@35.646232,139.6936131,17z/data=!3m1!4b1!4m6!3m5!1s0x60188b4c2a3cc4fb:0x83c884f6f8cca99!8m2!3d35.646232!4d139.696188!16s%2Fg%2F1tqtxwbw?entry=ttu" target="_blank"><button class="bg-custom-blue text-white py-2 px-4 rounded-full">MAP</button></a></div></div>'
  },
  {
    column1: "連絡先",
    column2: '<div class="flex flex-wrap"><div>TEL: 03-5725-5921(代表)<br/>FAX: 03-5725-5922<br/>URL: <a href="http://www.vaile.co.jp" class="text-custom-blue2 underline">http://www.vaile.co.jp</a></div><div class="m-auto"><a href="/contact" class="bg-custom-blue text-white py-2 px-4 rounded-full">Contact</a></div></div>'
  }
]

const flex1 = ref<HTMLElement | null>(null)
useDetectWrap(flex1)
// const flex2 = ref<HTMLElement | null>(null)
// useDetectWrap(flex2)
</script>

<style scoped>
.wrappedFirstChild {
  flex-basis: 36rem;
}

.wrapped {
  padding-top: 2rem;
  flex-basis: 36rem;
}
.noWrappedFirstChild {
  flex-basis: 32rem;
}

.noWrapped {
  flex-basis: 32rem;
}
</style>