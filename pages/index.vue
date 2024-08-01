<template id="myTemplate">
  <HeroMobile></HeroMobile> <!-- モバイル用Heroセクション -->
  <HeroDesktop></HeroDesktop> <!-- デスクトップ用Heroセクション -->

  <!-- イントロダクションセクション -->
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

  <!-- 会社情報セクション -->
  <section>
    <div class="m-4 auto-rows-min grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- 会社情報カード -->
      <div class="flex h-full z-10 w-full">
        <div class="z-10 relative" style="width: 50%; clip-path: url(#imageClip2); margin-bottom: 1rem;">
          <img src="/images/top/001.jpg" alt="Image" class="w-full h-full object-cover" id="imageElement2" />
          <svg width="0" height="0" id="imageClipSvg2" class="absolute inset-0">
            <defs>
              <clipPath id="imageClip2">
                <path d=""></path>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class=" flex flex-col z-20 relative p-4 pt-0"
          style="box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.2); margin-left: -40%; padding-left: 37%; margin-top: 1rem; padding-bottom: 1rem; width: 90%">
          <div class="text-xs text-custom-blue" style="margin-top: 1rem; margin-left: -0.25rem;">－ TOP 1 －</div>
          <div class="h-14 mt-2 flex items-center">
            <h2 class="text-xl font-bold">会社情報</h2>
          </div>

          <div class="grow line-clamp-6 flex items-baseline" style="display: flex; flex-grow: 1;">
            <div style="overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 6;">
              <div class="text-xs lg:text-sm text-ellipsis mb-4" style="text-overflow: ellipsis;">
                <div class="">ひとりひとりが試行錯誤を重ね、技術者として人間として成長し続け、共に発展してゆく為にVaileは存在しています。</div>
              </div>
            </div>
          </div>

          <div class="flex flex-col self-end space-y-2 text-xs md:text-sm w-full">
            <div class="flex space-x-4 justify-end">
              <NuxtLink to="/company">
                <button class="bg-custom-blue text-xs text-white font-semibold py-2 px-4 rounded">詳しく見る</button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- 事業情報カード -->
      <div class="flex h-full z-10 w-full">
        <div class="z-10 relative" style="width: 50%; clip-path: url(#imageClip3); margin-bottom: 1rem;">
          <img src="/images/top/002.jpg" alt="Image" class="w-full h-full object-cover" id="imageElement3" />
          <svg width="0" height="0" id="imageClipSvg3" class="absolute inset-0">
            <defs>
              <clipPath id="imageClip3">
                <path d=""></path>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class=" flex flex-col z-20 relative p-4 pt-0"
          style="box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.2); margin-left: -40%; padding-left: 37%; margin-top: 1rem; padding-bottom: 1rem; width: 90%">
          <div class="text-xs text-custom-blue" style="margin-top: 1rem; margin-left: -0.25rem;">－ TOP 2 －</div>
          <div class="h-14 mt-2 flex items-center">
            <h2 class="text-xl font-bold">事業情報</h2>
          </div>

          <div class="grow line-clamp-6 flex items-baseline" style="display: flex; flex-grow: 1;">
            <div style="overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 6;">
              <div class="text-xs lg:text-sm text-ellipsis mb-4" style="text-overflow: ellipsis;">
                <div class="">情報サービスのビジネスフィールドは、∞(無限)に広がっています。ベイルの様々な事業についてご紹介します。</div>
              </div>
            </div>
          </div>

          <div class="flex flex-col self-end space-y-2 text-xs md:text-sm w-full">
            <div class="flex space-x-4 justify-end">
              <NuxtLink to="/service">
                <button class="bg-custom-blue text-xs text-white font-semibold py-2 px-4 rounded">詳しく見る</button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 採用情報セクション -->
    <div class="m-4 auto-rows-min grid grid-cols-1 md:grid-cols-2 gap-4">

      <!-- 採用情報カード -->
      <div class="flex h-full z-10 w-full">
        <div class="z-10 relative" style="width: 50%; clip-path: url(#imageClip4); margin-bottom: 1rem;">
          <img src="/images/top/003.jpg" alt="Image" class="w-full h-full object-cover" id="imageElement4" />
          <svg width="0" height="0" id="imageClipSvg4" class="absolute inset-0">
            <defs>
              <clipPath id="imageClip4">
                <path d=""></path>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class=" flex flex-col z-20 relative p-4 pt-0"
          style="box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.2); margin-left: -40%; padding-left: 37%; margin-top: 1rem; padding-bottom: 1rem; width: 90%">
          <div class="text-xs text-custom-blue" style="margin-top: 1rem; margin-left: -0.25rem;">－ TOP 3 －</div>
          <div class="h-14 mt-2 flex items-center">
            <h2 class="text-xl font-bold">採用情報</h2>
          </div>

          <div class="grow line-clamp-6 flex items-baseline" style="display: flex; flex-grow: 1;">
            <div style="overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 6;">
              <div class="text-xs lg:text-sm text-ellipsis mb-4" style="text-overflow: ellipsis;">
                <div class="">プログラミングのスキルアップやエンジニアとしてのキャリアアップを果たす環境を用意しています。</div>
              </div>
            </div>
          </div>

          <div class="flex flex-col self-end space-y-2 text-xs md:text-sm w-full">
            <div class="flex space-x-4 justify-end">
              <NuxtLink to="/recruit">
                <button class="bg-custom-blue text-xs text-white font-semibold py-2 px-4 rounded">詳しく見る</button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- お問い合わせカード -->
      <div class="flex h-full z-10 w-full">
        <div class="z-10 relative" style="width: 50%; clip-path: url(#imageClip5); margin-bottom: 1rem;">
          <img src="/images/top/004.jpg" alt="Image" class="w-full h-full object-cover" id="imageElement5" />
          <svg width="0" height="0" id="imageClipSvg5" class="absolute inset-0">
            <defs>
              <clipPath id="imageClip5">
                <path d=""></path>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class=" flex flex-col z-20 relative p-4 pt-0"
          style="box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.2); margin-left: -40%; padding-left: 37%; margin-top: 1rem; padding-bottom: 1rem; width: 90%">
          <div class="text-xs text-custom-blue" style="margin-top: 1rem; margin-left: -0.25rem;">－ TOP 4 －</div>
          <div class="h-14 mt-2 flex items-center">
            <h2 class="text-xl font-bold">お問い合わせ</h2>
          </div>

          <div class="grow line-clamp-6 flex items-baseline" style="display: flex; flex-grow: 1;">
            <div style="overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 6;">
              <div class="text-xs lg:text-sm text-ellipsis mb-4" style="text-overflow: ellipsis;">
                <div class="">採用関連など各種お問い合わせはこちらから</div>
              </div>
            </div>
          </div>

          <div class="flex flex-col self-end space-y-2 text-xs md:text-sm w-full">
            <div class="flex space-x-4 justify-end">
              <NuxtLink to="/contact?inquiryType=recruitment">
                <button class="bg-custom-blue text-xs text-white font-semibold py-2 px-4 rounded">採用に関するお問い合わせ</button>
              </NuxtLink>
            </div>
            <div class="flex space-x-4 justify-end">
              <NuxtLink to="/contact?inquiryType=other">
                <button class="bg-custom-blue text-xs text-white font-semibold py-2 px-4 rounded">その他お問い合わせ</button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">
import HeroDesktop from '~/components/HeroDesktop.vue'
import HeroMobile from '~/components/HeroMobile.vue'

// 各画像のリサイズに応じたクリッピングパスを設定するためのスクリプト
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
