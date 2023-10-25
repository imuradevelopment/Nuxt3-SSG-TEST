<template id="myTemplate">
  <div>
    <!-- <div id="canvasBox" style="min-height:400px width: 100%;">
      <canvas id="lines" style="position: absolute;"></canvas>
      <div class="carousel-string">
        <h2 class="catchString fontSerif mb-1 text-6xl md:mb-3 md:text-7xl">
          Solution<br class="inline-block md2:hidden" /><span>&nbsp;</span>&<span>&nbsp;</span><br
            class="inline-block md2:hidden" />Evolution
        </h2>
        <p class="text-xs md:text-sm">
          新しい発想と技術とコミュニケーションで問題を解決し、<br />より良い方法をご提案させていただきます。
        </p>
      </div>
    </div> -->
    <el-carousel arrow="never" indicator-position="none" height="400px">
      <el-carousel-item>
        <div class="bg-[url('/images/generate/001.jfif')] bg-center bg-cover w-full h-full"></div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="bg-[url('/images/generate/002.jfif')] bg-center bg-cover w-full h-full"></div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="bg-[url('/images/generate/003.jfif')] bg-center bg-cover w-full h-full"></div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="bg-[url('/images/generate/004.jfif')] bg-center bg-cover w-full h-full"></div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="bg-[url('/images/generate/005.jfif')] bg-center bg-cover w-full h-full"></div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="bg-[url('/images/generate/006.jfif')] bg-center bg-cover w-full h-full"></div>
      </el-carousel-item>
      <div class="carousel-string">
        <h2 class="catchString fontSerif mb-1 text-6xl md:mb-3 md:text-7xl text-stroke-2">
          Solution<br class="inline-block md2:hidden" /><span>&nbsp;</span>&<span>&nbsp;</span><br
            class="inline-block md2:hidden" />Evolution
        </h2>
        <p class="text-xs md:text-sm text-stroke-1">
          新しい発想と技術とコミュニケーションで問題を解決し、<br />より良い方法をご提案させていただきます。
        </p>
      </div>
    </el-carousel>
  </div>
  <section class="text-left md:text-center mx-8 my-6">
    <div class="font-bold text-2xl md:text-4xl text-center">ペイルは、<br class="inline-block md:hidden" />「SE」を考えます。</div>
    <br />
    <div class="font-bold text-xs md:text-sm tracking-wide leading-4 md:leading-7">
      私どもがベストの提案をさせていただくに当たって大切なことは、<br class="hidden md:inline-block" />
      SE（Solution & Evolution：問題解決と発展）であると考えています。<br />
      お客様の現状を正確に把握し、<br class="hidden md:inline-block" />
      業務コンサルティング／プランニングから機器の選定、<br class="hidden md:inline-block" />
      システムの開発からアフターフォローまで<br class="hidden md:inline-block" />
      トータルでのサービスとサポートをご提供します。<br />
      お客様のご要望にもっともふさわしい<br class="hidden md:inline-block" />
      問題解決のご提案(Solution)とさらなる発展(Evolution)をお約束します。<br />
    </div>
  </section>
  <div class="mx-4 flex flex-wrap justify-stretch items-stretch">
    <div class="w-full md:w-1/2">
      <CustomCard 
        mode="right" 
        title-class="text-center text-white"
        discription-class="text-center text-xs md:text-sm font-medium text-white" 
        :buttons="[
            { to: '/company#TEST', type:'', hoverArrowType:'', buttonStyle:'', class: '', label: 'MORE' },
          ]"
          background="bg-[url('/images/top/001.webp')] bg-center bg-cover"
          backgroundMask="bg-custom-blue/20"
      >
        <template #title>
          会社情報
        </template>
        <template #description>
          ひとりひとりが試行錯誤を重ね<br />
          技術者として人間として成長し<br />
          続け共に発展してゆく為にVaileは存在しています。
        </template>
      </CustomCard>
    </div>
    <div class="w-full md:w-1/2">
      <CustomCard 
        mode="left" 
        title-class="text-center text-white"
        discription-class="text-center text-xs md:text-sm font-medium text-white"
        :buttons="[
            { to: '/service', type:'', hoverArrowType:'', buttonStyle:'', class: '', label: 'MORE' },
          ]"
        background="bg-[url('/images/top/002.webp')] bg-center bg-cover"
        backgroundMask="bg-custom-blue/20"
      >
        <template #title>
          事業情報
        </template>
        <template #description>
          情報サービスのビジネスフィールドは<br />
          ∞(無限)に広がっています。<br />
          ベイルの様々な事業についてご紹介します。
        </template>
      </CustomCard>
    </div>
  </div>
  <div class="mx-7 bg-[url('/images/top/003.webp')] bg-center bg-cover">
    <div class="flex justify-center items-stretch bg-custom-blue/20">
      <div class="w-96">
        <CustomCard 
          mode="center" 
          :title-background-mode="false" 
          :discription-background-mode="false" 
          title-class="text-center text-custom-blue"
          discription-class="text-xs md:text-sm font-medium text-center text-black"
          :buttons="[
              { to: '/recruit', type:'fill', hoverArrowType:'', buttonStyle:'', class: '', label: '採用情報' },
            ]"
        >
          <template #title>
            採用情報
          </template>
          <template #description>
            プログラミングのスキルアップや<br />
            エンジニアとしてのキャリアアップを果たす環境を<br />
            用意しています。
          </template>
        </CustomCard>
      </div>
    </div>
  </div>
  <div class="mx-4 flex justify-stretch items-stretch">
    <CustomCard 
      mode="center" 
      :title-background-mode="false" 
      :discription-background-mode="false" 
      title-class="text-center text-white"
      discription-class="text-xs md:text-sm font-medium text-center text-white"
      :buttons="[
        { to: '/contact', type:'', hoverArrowType:'', buttonStyle:'', class: 'w-80', label: '採用に関するお問い合わせ' },
        { to: '/contact', type:'', hoverArrowType:'', buttonStyle:'', class: 'w-80', label: 'その他お問い合わせ' },
      ]"
      background="bg-[url('/images/top/004.webp')] bg-center bg-cover"
      backgroundMask="bg-custom-blue/20"
    >
      <template #title>
        お問い合わせ
      </template>
      <template #description>
        採用関連など各種お問い合わせはこちらから。
      </template>
    </CustomCard>
  </div>
  <!-- <ul class="mt-16 grid grid-cols-1 gap-8">
    <li v-for="blog in data?.contents" :key="blog.id">
      <NuxtLink :to="`/${blog.id}`"
        class="flex flex-col gap-4 sm:transition-shadow sm:hover:shadow md:flex-row md:items-center lg:gap-6">
        <img :src="blog.eyecatch?.url" :width="blog.eyecatch?.width" :height="blog.eyecatch?.height"
          class="md:w-1/3 md:flex-none" alt="" />
        <div class="md:p-2.5 md:pr-0">
          <div
            class="inline-block rounded border-2 border-indigo-600 px-1.5 py-0.5 text-sm font-semibold text-indigo-600">
            {{ blog.category?.name }}
          </div>
          <div class="mt-2 text-lg font-semibold md:text-xl">
            {{ blog.title }}
          </div>
          <div class="mt-1 text-sm text-gray-700">
            {{ dateFormat(blog.publishedAt ?? blog.createdAt) }}
          </div>
        </div>
      </NuxtLink>
    </li>
  </ul> -->
  <!-- <script src="../assets/ts/lines.ts"></script> -->
</template>

<script setup lang = "ts" >
import CustomCard from '~/components/CustomCard.vue';
// import { Blog } from "~~/types/Blog";
// const { data } = await useMicroCMSGetList<Blog>({
//   endpoint: "blogs",
// });
// console.log('data')
// console.log(data)
// console.log('data')

// const config = useRuntimeConfig()
// console.log('Runtime configの出力:', config)
// if (process.server) {
//   console.log('API secretの出力:', config.apiSecret)
// }

// 以下は HSLA の成分についての説明です:
// 1. Hue (色相): Hue は色の種類やトーンを示します。
//    赤が 0 度、緑が 120 度、青が 240 度です。
// 2. Saturation (彩度): Saturation は色の鮮やかさや強さを示します。
//    0% の場合はグレースケールに近い灰色になり、100% の場合は最も鮮やかな色になります。
// 3. Lightness (明度): Lightness は色の明るさを示します。
//    0% の場合は黒に、100% の場合は白に近い明るさになります。
// 4. Alpha (透明度): Alpha は色の透明度を示します。
//    0 は完全に透明で、1 は完全に不透明です。
// import { initializeCanvas } from "~~/assets/ts/lines"
// onMounted(() => {
//   initializeCanvas(
//     "lines",
//     "canvasBox",
//     [
//       // { required: false, lineSize: 1.25, lineStyle: "pattern", color: { h: 210, s: 100, l: 70, a: 0.5 } },
//       // { required: false, lineSize: 2.5, lineStyle: "pattern", color: { h: 190, s: 90, l: 50, a: 0.3 } },
//       // { required: false, lineSize: 5, lineStyle: "pattern", color: { h: 210, s: 70, l: 60, a: 0.2 } },
//       // { required: false, lineSize: 10, lineStyle: "pattern", color: { h: 310, s: 80, l: 55, a: 0.15 } },
//       // { required: false, lineSize: 20, lineStyle: "pattern", color: { h: 200, s: 25, l: 35, a: 0.12 } },
//       // { required: false, lineSize: 20, lineStyle: "pattern", color: { h: 210, s: 20, l: 40, a: 0.12 } },
//       // { required: false, lineSize: 40, lineStyle: "pattern", color: { h: 190, s: 40, l: 50, a: 0.12 } },
//       // { required: false, lineSize: 80, lineStyle: "pattern", color: { h: 220, s: 50, l: 60, a: 0.12 } },
//       // { required: false, lineSize: 40, lineStyle: "glitches", color: { h: 300, s: 100, l: 50, a: 0.3 } },
//       // { required: false, lineSize: 20, lineStyle: "glitches", color: { h: 210, s: 100, l: 50, a: 0.3 } },
//       // { required: false, lineSize: 60, lineStyle: "glitches", color: { h: 30, s: 100, l: 50, a: 0.3 } },
//       //
//       { required: false, lineSize: 1.25, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
//       { required: false, lineSize: 2.5, lineStyle: "pattern", color: { h: 190, s: 90, l: 50, a: 0.3 } },
//       { required: false, lineSize: 5, lineStyle: "pattern", color: { h: 210, s: 70, l: 60, a: 0.2 } },
//       { required: false, lineSize: 10, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.15 } },
//       { required: false, lineSize: 20, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.12 } },
//       { required: false, lineSize: 20, lineStyle: "pattern", color: { h: 210, s: 20, l: 40, a: 0.12 } },
//       { required: false, lineSize: 40, lineStyle: "pattern", color: { h: 190, s: 40, l: 50, a: 0.12 } },
//       { required: false, lineSize: 80, lineStyle: "pattern", color: { h: 220, s: 100, l: 60, a: 0.12 } },
//       // { required: false, lineSize: 40, lineStyle: "glitches", color: { h: 216, s: 22, l: 52, a: 0.3 } },
//       // { required: false, lineSize: 20, lineStyle: "glitches", color: { h: 210, s: 100, l: 50, a: 0.3 } },
//       // { required: false, lineSize: 60, lineStyle: "glitches", color: { h: 216, s: 22, l: 52, a: 0.3 } },
//       // { required: true, lineSize: 10, lineStyle: "test", color: { h: 209, s: 100, l: 40, a: 0.5 } },
//       // { required: true, lineSize: 1.25, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
//       // { required: true, lineSize: 1.25, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
//       // { required: true, lineSize: 1.25, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
//       // { required: true, lineSize: 1.25, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
//       // { required: true, lineSize: 1.25, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
//       // { required: true, lineSize: 1.25, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
//       // { required: true, lineSize: 1.25, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
//       // { required: true, lineSize: 1.25, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
//       // { required: true, lineSize: 2.5, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
//       // { required: true, lineSize: 2.5, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
//       // { required: true, lineSize: 2.5, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
//       // { required: true, lineSize: 2.5, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
//       // { required: true, lineSize: 3.5, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
//       // { required: true, lineSize: 4.5, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
//       // { required: true, lineSize: 5.5, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
//       // { required: false, lineSize: 10.5, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
//       // { required: false, lineSize: 20.5, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
//       // { required: false, lineSize: 20.5, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
//       // { required: false, lineSize: 40.5, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
//       // { required: false, lineSize: 80.5, lineStyle: "pattern", color: { h: 209, s: 100, l: 40, a: 0.5 } },
//       // { required: false, lineSize: 40, lineStyle: "glitches", color: { h: 216, s: 22, l: 52, a: 0.3 } },
//       // { required: false, lineSize: 20, lineStyle: "glitches", color: { h: 216, s: 22, l: 52, a: 0.3 } },
//       // { required: false, lineSize: 60, lineStyle: "glitches", color: { h: 216, s: 22, l: 52, a: 0.3 } },
//     ],
//     { h: 200, s: 20, l: 10, a: 0.3 },
//     40,
//     "center",
//     // {minLength: 500, maxLength: 1000} 
//   );
// })

</script>

<style scoped>
.catchString {
  letter-spacing: 0.1em;
}

.fontSerif {
  font-family: 'Sorts Mill Goudy', serif;
}

.text-stroke-2 {
  color: white!important;
  text-shadow: 2px 2px 0 #002F5A, 
              -2px -2px 0 #002F5A, 
              -2px 2px 0 #002F5A, 
              2px -2px 0 #002F5A, 
              0px 2px 0 #002F5A, 
              0 -2px 0 #002F5A, 
              -2px 0 0 #002F5A, 
              2px 0 0 #002F5A!important;
}
.text-stroke-1 {
  color: white!important;
  text-shadow: 1px 1px 0 #002F5A, 
              -1px -1px 0 #002F5A, 
              -1px 1px 0 #002F5A, 
              1px -1px 0 #002F5A, 
              0px 1px 0 #002F5A, 
              0 -1px 0 #002F5A, 
              -1px 0 0 #002F5A, 
              1px 0 0 #002F5A!important;
}
.carousel-string {
  position: relative;
  color: white;
  text-align: center;
  top: calc(50% - 62px);
}

@media (max-width: 849px) {

  /* 849px以下の幅のデバイスに適用するスタイル */
  .carousel-string {
    position: relative;
    color: white;
    text-align: center;
    top: calc(50% - 134px);
  }
}

@media (max-width: 767px) {

  /* 767px以下の幅のデバイスに適用するスタイル */
  .carousel-string {
    position: relative;
    color: white;
    text-align: center;
    top: calc(50% - 108px);
  }
}


.container {
  height: auto;
}</style>