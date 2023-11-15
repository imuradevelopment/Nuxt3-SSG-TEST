<template>
    <h1 class="font-bold text-2xl md:text-4xl text-center">会社情報</h1>
    <section class="text-center">
        <h2 class="font-bold text-2xl md:text-4xl text-custom-blue">TOPメッセージ</h2>
        <p>
            ひとりひとりが提案や試行錯誤を重ね成長し、より良い人生を送り<br class="hidden md:inline-block" />
            会社が発展してゆく為にVaileは存在しています。<br/>
            自分の人生については自分で考える。<br/>
            そんな当たり前の事がやっと認識されはじめています。<br/>
            個人の成長が会社をのばします。<br/>
            会社とは自分の仕事と人生に誇りとやりがいを持ち、仕事を続けることにより、<br class="hidden md:inline-block" />
            ひとりひとりの人間が成長してゆく為の器だとVaileは考えています。
        </p>
        <p>
            <h3>お客様の「こうしたい」をお聞かせください。</h3>
            急速な競争化時代の到来に伴い、今日の企業はよりタイムリーで効率的なビジネスへの対応を迫られています。<br/>
            製造・販売・開発部門などの各現場をひとつに結んだスピーディーで無駄のない業務処理システムの構築、的確でクイックな意思決定を実現する自由な情報へのアクセスなど現実しなければならないことはたくさんあります。<br/>
            しかし、それらを推し進めるに当たって、技術やコストの面でクリアしなければならない問題が多すぎることも事実です。<br/>
            仕方がないとあきらめる前に、是非私どもへご相談ください。<br/>
            確かな技術と豊富な経験で、きっとご満足頂けるベストなご提案をさせて頂きます。
        </p>
        <p>
            <h3>お客様の声にお応えできる理由。</h3>
            私どもは、独立系ソフトウェア会社として特定のメーカーや機種、企業の規模や業種・業務に関わらず、幅広い提案実績がございます。<br/>
            大型コンピュータを用いたシステムからワークステーション/パーソナルコンピュータをネットワークで結んだクライアント・サーバーコンピューティング、Windowsアプリケーションを駆使したOAシステム、さらにはそれらをすべて統合したエンタープライズシステムと数々のシステムを手がけて得た技術的成果を、お客様の「こうしたい」に実現力として活かします。<br/>
            また、最近主流のクライアント・サーバーシステム/Windowsアプリケーションシステムについては開発環境を自社内に保有し、データベースの構築・アプリケーション開発など常に最新技術に対応できる体制を整えております。
        </p>
    </section>
    <section class="text-center">
        <h2 class="font-bold text-2xl md:text-4xl text-custom-blue">ベイルの由来</h2>
        <p>
            社名のベイルとは、学生時代から始めたスキーが縁で生まれました。<br/>
            第2次世界大戦中、半身不随の重傷を負ったピーターサイバートがコロラドにあるベイル山に魅了され、理想のスキー場を建設するためにあらゆる困難に負けず夢を実現したエピソードが会社設立への想いに込められています。<br/>
            社名にその山の名を冠したのは、どのような障害に突き当たろうとも投げ出さず、遊び心を忘れなかったピーターサイバート氏のように生きたいと願う強い意志の表れでもあるのです。<br/>
            ただ働くだけでなく常に夢を持ち続けて行きたい。<br/>
            <br/>
            ベイルは、そんな理想を共有できる仲間を求めています。
        </p>
    </section>
    <section class="text-center">
        <h2 class="font-bold text-2xl md:text-4xl text-custom-blue">沿革</h2>
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
    <section class="text-center">
        <h2 class="font-bold text-2xl md:text-4xl text-custom-blue">会社概要</h2>
        <div class="text-sm text-left">
          <CustomTable :items="companySummary" :showHeader="false"></CustomTable>
        </div>
    </section>
    <section class="text-center">
        <h2 class="font-bold text-2xl md:text-4xl text-custom-blue">アクセス</h2>
        <p></p>
    </section>
</template>

<script setup lang="ts">
import CustomTable from '~/components/CustomTable.vue'
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
    column2: "〒153-0043<br/>東京都目黒区東山１－６－２<br/>TPR中目黒ビル<br/>7F　受付<br/>8F　開発フロア<br/>9F　セミナーフロア"
  },
  {
    column1: "連絡先",
    column2: 'TEL: 03-5725-5921(代表)<br/>FAX: 03-5725-5922<br/>URL: <a href="http://www.vaile.co.jp">http://www.vaile.co.jp</a>'
  }
]

import type { TableColumnCtx } from 'element-plus'
interface SpanMethodProps {
  row: CompanySummaryItem
  column: TableColumnCtx<CompanySummaryItem>
  rowIndex: number
  columnIndex: number
}

const objectSpanMethod = ({
  row,
  column,
  rowIndex,
  columnIndex,
}: SpanMethodProps) => {
  if (columnIndex === 0) {
    switch(rowIndex){
      case 4:
        return {
          rowspan: 3,
          colspan: 1,
        }
        case 7:
        return {
          rowspan: 8,
          colspan: 1,
        }
    }
    // if (rowIndex % 2 === 0) {
    //   return {
    //     rowspan: 2,
    //     colspan: 1,
    //   }
    // } else {
    //   return {
    //     rowspan: 0,
    //     colspan: 0,
    //   }
    // }
  }
}

</script>

<style scoped>

</style>