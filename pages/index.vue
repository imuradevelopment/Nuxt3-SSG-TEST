<template id="myTemplate">
  <!-- <div id="canvasBox" style="min-height:450px; width: 100%;">
    <canvas id="lines" style="position: absolute;"></canvas>
    <div style="height:450px">
      <div class="carousel-string">
        <h2 class="catchString fontSerif mb-1 text-6xl md:mb-3 md:text-7xl">
          Solution<br class="inline-block md2:hidden" /><span>&nbsp;</span>&<span>&nbsp;</span><br
            class="inline-block md2:hidden" />Evolution
        </h2>
        <p class="text-xs md:text-sm">
          新しい発想と技術とコミュニケーションで問題を解決し、<br />より良い方法をご提案させていただきます。
        </p>
      </div>
    </div>
  </div> -->
  <!-- <div>
    <el-carousel arrow="never" indicator-position="none" height="450px">
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
  </div> -->

  <!-- <Hero></Hero> -->
  <HeroMobile></HeroMobile>
  <HeroDesktop></HeroDesktop>

  <section class="text-left md:text-center mx-8 my-6">
    <div class="font-bold text-2xl md:text-4xl text-center">ベイルは、<br class="inline-block md:hidden" />「SE」を考えます。</div>
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

  <!-- <div class="mx-4 flex flex-wrap justify-stretch items-stretch">
    <div class="w-full md:w-1/2">
      <CustomCard 
        mode="right" 
        title-class="text-center text-white"
        discription-class="text-center text-xs md:text-sm font-medium text-white" 
        :buttons="[
            { to: '/company#TEST', type:'', hoverArrowType:'', buttonStyle:'', class: '', label: 'MORE' },
          ]"
          background="bg-[url('/images/top/001.jpg')] bg-center bg-cover"
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
        class="md:hidden"
        mode="right" 
        title-class="text-center text-white"
        discription-class="text-center text-xs md:text-sm font-medium text-white"
        :buttons="[
            { to: '/service', type:'', hoverArrowType:'', buttonStyle:'', class: '', label: 'MORE' },
          ]"
        background="bg-[url('/images/top/002.jpg')] bg-center bg-cover"
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
      <CustomCard 
      class="hidden md:inline-block"
        mode="left" 
        title-class="text-center text-white"
        discription-class="text-center text-xs md:text-sm font-medium text-white"
        :buttons="[
            { to: '/service', type:'', hoverArrowType:'', buttonStyle:'', class: '', label: 'MORE' },
          ]"
        background="bg-[url('/images/top/002.jpg')] bg-center bg-cover"
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
  <div class="mx-7 bg-[url('/images/top/003.jpg')] bg-center bg-cover">
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
      background="bg-[url('/images/top/004.jpg')] bg-center bg-cover"
      backgroundMask="bg-custom-blue/20"
    >
      <template #title>
        お問い合わせ
      </template>
      <template #description>
        採用関連など各種お問い合わせはこちらから。
      </template>
    </CustomCard>
  </div> -->

  <section>
    <div class="m-4 auto-rows-min grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex h-full z-10 w-full">
        <!-- レイヤー1: 画像部分 -->
        <div class="z-10 relative" style="width: 50%; clip-path: url(#imageClip2); margin-bottom: 1rem;">
          <!-- レイヤー1: 画像 -->
          <img src="/images/top/001.jpg" alt="Image" class="w-full h-full object-cover" id="imageElement2" />
          <!-- レイヤー1: 画像クリップ -->
          <!-- 以下svgは親要素に対して全画面サイズに配置し、覆い隠すためのスタイリング -->
          <svg width="0" height="0" id="imageClipSvg2" class="absolute inset-0">
            <defs>
              <clipPath id="imageClip2">
                <!-- jsで新しい座標を設定 -->
                <path d=""></path>
              </clipPath>
            </defs>
          </svg>
        </div>
        <!-- レイヤー2: タイトルとコンテンツ部分 -->
        <div class=" flex flex-col z-20 relative p-4 pt-0"
          style="box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.2); margin-left: -40%; padding-left: 37%; margin-top: 1rem; padding-bottom: 1rem; width: 90%">
          <div class="text-xs text-custom-blue" style="margin-top: 1rem; margin-left: -0.25rem;">－ TOP 1 －</div>
          <!-- レイヤー2: タイトル -->
          <div class="h-14 mt-2 flex items-center">
            <h2 class="text-xl font-bold">会社情報</h2>
          </div>

          <!-- レイヤー3: コンテンツ -->
          <div class="grow line-clamp-6 flex items-baseline" style="display: flex; flex-grow: 1;">
            <div style="overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 6;">
              <div class="text-xs lg:text-sm text-ellipsis mb-4" style="text-overflow: ellipsis;">
                <div class="">ひとりひとりが試行錯誤を重ね、技術者として人間として成長し続け、共に発展してゆく為にVaileは存在しています。</div>
              </div>
            </div>
          </div>

          <!-- レイヤー4: ボタンセクション -->
          <div class="flex flex-col self-end space-y-2 text-xs md:text-sm w-full">
            <div class="flex space-x-4 justify-end">
              <!-- レイヤー4: ボタン3 -->
              <NuxtLink to="/company">
                <button class="bg-custom-blue text-xs text-white font-semibold py-2 px-4 rounded">詳しく見る</button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      
      <div class="flex h-full z-10 w-full">
        <!-- レイヤー1: 画像部分 -->
        <div class="z-10 relative" style="width: 50%; clip-path: url(#imageClip3); margin-bottom: 1rem;">
          <!-- レイヤー1: 画像 -->
          <img src="/images/top/002.jpg" alt="Image" class="w-full h-full object-cover" id="imageElement3" />
          <!-- レイヤー1: 画像クリップ -->
          <!-- 以下svgは親要素に対して全画面サイズに配置し、覆い隠すためのスタイリング -->
          <svg width="0" height="0" id="imageClipSvg3" class="absolute inset-0">
            <defs>
              <clipPath id="imageClip3">
                <!-- jsで新しい座標を設定 -->
                <path d=""></path>
              </clipPath>
            </defs>
          </svg>
        </div>
        <!-- レイヤー2: タイトルとコンテンツ部分 -->
        <div class=" flex flex-col z-20 relative p-4 pt-0"
          style="box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.2); margin-left: -40%; padding-left: 37%; margin-top: 1rem; padding-bottom: 1rem; width: 90%">
          <div class="text-xs text-custom-blue" style="margin-top: 1rem; margin-left: -0.25rem;">－ TOP 2 －</div>
          <!-- レイヤー2: タイトル -->
          <div class="h-14 mt-2 flex items-center">
            <h2 class="text-xl font-bold">事業情報</h2>
          </div>
    
          <!-- レイヤー3: コンテンツ -->
          <div class="grow line-clamp-6 flex items-baseline" style="display: flex; flex-grow: 1;">
            <div style="overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 6;">
              <div class="text-xs lg:text-sm text-ellipsis mb-4" style="text-overflow: ellipsis;">
                <div class="">情報サービスのビジネスフィールドは、∞(無限)に広がっています。ベイルの様々な事業についてご紹介します。</div>
              </div>
            </div>
          </div>
    
          <!-- レイヤー4: ボタンセクション -->
          <div class="flex flex-col self-end space-y-2 text-xs md:text-sm w-full">
            <div class="flex space-x-4 justify-end">
              <!-- レイヤー4: ボタン3 -->
              <NuxtLink to="/service">
                <button class="bg-custom-blue text-xs text-white font-semibold py-2 px-4 rounded">詳しく見る</button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    

    <div class="m-4 auto-rows-min grid grid-cols-1 md:grid-cols-2 gap-4">

      <div class="flex h-full z-10 w-full">
        <!-- レイヤー1: 画像部分 -->
        <div class="z-10 relative" style="width: 50%; clip-path: url(#imageClip4); margin-bottom: 1rem;">
          <!-- レイヤー1: 画像 -->
          <img src="/images/top/003.jpg" alt="Image" class="w-full h-full object-cover" id="imageElement4" />
          <!-- レイヤー1: 画像クリップ -->
          <!-- 以下svgは親要素に対して全画面サイズに配置し、覆い隠すためのスタイリング -->
          <svg width="0" height="0" id="imageClipSvg4" class="absolute inset-0">
            <defs>
              <clipPath id="imageClip4">
                <!-- jsで新しい座標を設定 -->
                <path d=""></path>
              </clipPath>
            </defs>
          </svg>
        </div>
        <!-- レイヤー2: タイトルとコンテンツ部分 -->
        <div class=" flex flex-col z-20 relative p-4 pt-0"
          style="box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.2); margin-left: -40%; padding-left: 37%; margin-top: 1rem; padding-bottom: 1rem; width: 90%">
          <div class="text-xs text-custom-blue" style="margin-top: 1rem; margin-left: -0.25rem;">－ TOP 3 －</div>
          <!-- レイヤー2: タイトル -->
          <div class="h-14 mt-2 flex items-center">
            <h2 class="text-xl font-bold">採用情報</h2>
          </div>
    
          <!-- レイヤー3: コンテンツ -->
          <div class="grow line-clamp-6 flex items-baseline" style="display: flex; flex-grow: 1;">
            <div style="overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 6;">
              <div class="text-xs lg:text-sm text-ellipsis mb-4" style="text-overflow: ellipsis;">
                <div class="">プログラミングのスキルアップやエンジニアとしてのキャリアアップを果たす環境を用意しています。</div>
              </div>
            </div>
          </div>
    
          <!-- レイヤー4: ボタンセクション -->
          <div class="flex flex-col self-end space-y-2 text-xs md:text-sm w-full">
            <div class="flex space-x-4 justify-end">
              <!-- レイヤー4: ボタン3 -->
              <NuxtLink to="/recruit">
                <button class="bg-custom-blue text-xs text-white font-semibold py-2 px-4 rounded">詳しく見る</button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
  
      <div class="flex h-full z-10 w-full">
        <!-- レイヤー1: 画像部分 -->
        <div class="z-10 relative" style="width: 50%; clip-path: url(#imageClip5); margin-bottom: 1rem;">
          <!-- レイヤー1: 画像 -->
          <img src="/images/top/004.jpg" alt="Image" class="w-full h-full object-cover" id="imageElement5" />
          <!-- レイヤー1: 画像クリップ -->
          <!-- 以下svgは親要素に対して全画面サイズに配置し、覆い隠すためのスタイリング -->
          <svg width="0" height="0" id="imageClipSvg5" class="absolute inset-0">
            <defs>
              <clipPath id="imageClip5">
                <!-- jsで新しい座標を設定 -->
                <path d=""></path>
              </clipPath>
            </defs>
          </svg>
        </div>
        <!-- レイヤー2: タイトルとコンテンツ部分 -->
        <div class=" flex flex-col z-20 relative p-4 pt-0"
          style="box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.2); margin-left: -40%; padding-left: 37%; margin-top: 1rem; padding-bottom: 1rem; width: 90%">
          <div class="text-xs text-custom-blue" style="margin-top: 1rem; margin-left: -0.25rem;">－ TOP 4 －</div>
          <!-- レイヤー2: タイトル -->
          <div class="h-14 mt-2 flex items-center">
            <h2 class="text-xl font-bold">お問い合わせ</h2>
          </div>
    
          <!-- レイヤー3: コンテンツ -->
          <div class="grow line-clamp-6 flex items-baseline" style="display: flex; flex-grow: 1;">
            <div style="overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 6;">
              <div class="text-xs lg:text-sm text-ellipsis mb-4" style="text-overflow: ellipsis;">
                <div class="">採用関連など各種お問い合わせはこちらから</div>
              </div>
            </div>
          </div>
    
          <!-- レイヤー4: ボタンセクション -->
          <div class="flex flex-col self-end space-y-2 text-xs md:text-sm w-full">
            <div class="flex space-x-4 justify-end">
              <!-- レイヤー4: ボタン3 -->
              <NuxtLink to="/contact">
                <button class="bg-custom-blue text-xs text-white font-semibold py-2 px-4 rounded">採用に関するお問い合わせ</button>
              </NuxtLink>
            </div>
            <div class="flex space-x-4 justify-end">
              <!-- レイヤー4: ボタン3 -->
              <NuxtLink to="/contact">
                <button class="bg-custom-blue text-xs text-white font-semibold py-2 px-4 rounded">その他お問い合わせ</button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


    <!-- <TrapezoidCard src="/images/top/002.jpg">
      <template v-slot:tag>TOP 2</template>
      <template v-slot:title>事業情報</template>
      <template v-slot:content>
        <div class="">情報サービスのビジネスフィールドは、∞(無限)に広がっています。ベイルの様々な事業についてご紹介します。</div>
      </template>
      <template v-slot:button>
        <div class="flex space-x-4 justify-end">
          <NuxtLink to="/service">
            <button class="bg-custom-blue text-xs text-white font-semibold py-2 px-4 rounded">詳しく見る</button>
          </NuxtLink>
        </div>
      </template>
    </TrapezoidCard>

  <div class="m-4 auto-rows-min grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="">
      <TrapezoidCard src="/images/top/003.png">
        <template v-slot:tag>TOP 3</template>
        <template v-slot:title>採用情報</template>
        <template v-slot:content>
          <div class="">プログラミングのスキルアップや、エンジニアとしてのキャリアアップを果たす環境を用意しています。</div>
        </template>
        <template v-slot:button>
          <div class="flex space-x-4 justify-end">
            <NuxtLink to="/recruit">
              <button class="bg-custom-blue text-xs text-white font-semibold py-2 px-4 rounded">詳しく見る</button>
            </NuxtLink>
          </div>
        </template>
      </TrapezoidCard>
    </div>
    <div class="">
      <TrapezoidCard src="/images/top/004.jpg">
        <template v-slot:tag>TOP 4</template>
        <template v-slot:title>お問い合わせ</template>
        <template v-slot:content>
          <div class="">採用関連など各種お問い合わせはこちらから</div>
        </template>
        <template v-slot:button>
          <div class="flex space-x-4 justify-end">
            <NuxtLink to="/contact">
              <button class="bg-custom-blue text-xs text-white font-semibold py-2 px-4 rounded">採用に関するお問い合わせ</button>
            </NuxtLink>
          </div>
          <div class="flex space-x-4 justify-end">
            <NuxtLink to="/contact">
              <button class="bg-custom-blue text-xs text-white font-semibold py-2 px-4 rounded">その他お問い合わせ</button>
            </NuxtLink>
          </div>
        </template>
      </TrapezoidCard>
    </div>
  </div> -->
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
  <!-- <script src="./assets/ts/lines.ts"></script> -->
</template>

<script setup lang = "ts" >
import Hero from '~/components/Hero.vue'
import HeroDesktop from '~/components/HeroDesktop.vue'
import HeroMobile from '~/components/HeroMobile.vue'
import CustomCard from '~/components/CustomCard.vue';
import TrapezoidCard from '~/components/TrapezoidCard.vue';

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
onMounted(() => {
  const observer = new ResizeObserver(function (entries) {
    for (let entry of entries) {
      if (entry.target === imageElement2) {
        const imageWidth = entry.contentRect.width;
        const imageHeight = entry.contentRect.height;
        const imageAspect = imageWidth / imageHeight;
        const hAspect = 0.5;
        const hypotenuse = imageWidth + 5 * imageAspect;
        const v = String(imageHeight);
        const h = String(imageWidth * hAspect);
        const l = String(hypotenuse);
        // 新しいクリッピングパス座標を設定
        const newPath = `M0 0 V${v} H${h} L${l} 0 H0 Z`;
        document.querySelector("#imageClip2 path")!.setAttribute("d", newPath);
        document.getElementById("imageClipSvg2")!.setAttribute("width", String(imageWidth));
        document.getElementById("imageClipSvg2")!.setAttribute("height", String(imageHeight));
        // viewBoxの値を設定
        document
          .getElementById("imageClipSvg2")!
          .setAttribute("viewBox", `0 0 ${imageWidth} ${imageHeight}`);
      }
    }
  });
  const imageElement2 = document.getElementById("imageElement2") as HTMLImageElement;
  observer.observe(imageElement2);
});

onMounted(() => {
  const observer = new ResizeObserver(function (entries) {
    for (let entry of entries) {
      if (entry.target === imageElement3) {
        const imageWidth = entry.contentRect.width;
        const imageHeight = entry.contentRect.height;
        const imageAspect = imageWidth / imageHeight;
        const hAspect = 0.5;
        const hypotenuse = imageWidth + 5 * imageAspect;
        const v = String(imageHeight);
        const h = String(imageWidth * hAspect);
        const l = String(hypotenuse);
        // 新しいクリッピングパス座標を設定
        const newPath = `M0 0 V${v} H${h} L${l} 0 H0 Z`;
        document.querySelector("#imageClip3 path")!.setAttribute("d", newPath);
        document.getElementById("imageClipSvg3")!.setAttribute("width", String(imageWidth));
        document.getElementById("imageClipSvg3")!.setAttribute("height", String(imageHeight));
        // viewBoxの値を設定
        document
          .getElementById("imageClipSvg3")!
          .setAttribute("viewBox", `0 0 ${imageWidth} ${imageHeight}`);
      }
    }
  });
  const imageElement3 = document.getElementById("imageElement3") as HTMLImageElement;
  observer.observe(imageElement3);
});

onMounted(() => {
  const observer = new ResizeObserver(function (entries) {
    for (let entry of entries) {
      if (entry.target === imageElement4) {
        const imageWidth = entry.contentRect.width;
        const imageHeight = entry.contentRect.height;
        const imageAspect = imageWidth / imageHeight;
        const hAspect = 0.5;
        const hypotenuse = imageWidth + 5 * imageAspect;
        const v = String(imageHeight);
        const h = String(imageWidth * hAspect);
        const l = String(hypotenuse);
        // 新しいクリッピングパス座標を設定
        const newPath = `M0 0 V${v} H${h} L${l} 0 H0 Z`;
        document.querySelector("#imageClip4 path")!.setAttribute("d", newPath);
        document.getElementById("imageClipSvg4")!.setAttribute("width", String(imageWidth));
        document.getElementById("imageClipSvg4")!.setAttribute("height", String(imageHeight));
        // viewBoxの値を設定
        document
          .getElementById("imageClipSvg4")!
          .setAttribute("viewBox", `0 0 ${imageWidth} ${imageHeight}`);
      }
    }
  });
  const imageElement4 = document.getElementById("imageElement4") as HTMLImageElement;
  observer.observe(imageElement4);
});

onMounted(() => {
  const observer = new ResizeObserver(function (entries) {
    for (let entry of entries) {
      if (entry.target === imageElement5) {
        const imageWidth = entry.contentRect.width;
        const imageHeight = entry.contentRect.height;
        const imageAspect = imageWidth / imageHeight;
        const hAspect = 0.5;
        const hypotenuse = imageWidth + 5 * imageAspect;
        const v = String(imageHeight);
        const h = String(imageWidth * hAspect);
        const l = String(hypotenuse);
        // 新しいクリッピングパス座標を設定
        const newPath = `M0 0 V${v} H${h} L${l} 0 H0 Z`;
        document.querySelector("#imageClip5 path")!.setAttribute("d", newPath);
        document.getElementById("imageClipSvg5")!.setAttribute("width", String(imageWidth));
        document.getElementById("imageClipSvg5")!.setAttribute("height", String(imageHeight));
        // viewBoxの値を設定
        document
          .getElementById("imageClipSvg5")!
          .setAttribute("viewBox", `0 0 ${imageWidth} ${imageHeight}`);
      }
    }
  });
  const imageElement5 = document.getElementById("imageElement5") as HTMLImageElement;
  observer.observe(imageElement5);
});
</script>

<style scoped></style>