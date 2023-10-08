<template id="myTemplate">
    <div>
        <div>
            <div style="height:400px; width:auto;">
                <canvas id="lines"></canvas>
                    <div class="carousel-string" style="float: none;">
                    <h2 class="catchString fontSerif">
                Solution<span>&nbsp;</span>&<span>&nbsp;</span>Evolution
                </h2>
                    <p class="text-sm">
                新しい発想と技術とコミュニケーションで問題を解決し、<br />より良い方法をご提案させていただきます。
                </p>
                </div>
            </div>
            <!-- <el-carousel height="400px"
                         arrow="never"
                         indicator-position="none">
                <el-carousel-item>
          <el-image src="./images/sample/suits001-blue.png" class="carousel-image"></el-image>
        </el-carousel-item>
        <el-carousel-item>
          <el-image src="./images/sample/suits002-blue.png" class="carousel-image"></el-image>
        </el-carousel-item>
        <el-carousel-item>
          <el-image src="./images/sample/suits003-blue.png" class="carousel-image"></el-image>
        </el-carousel-item>
                <div class="carousel-string">
                    <h2 class="catchString fontSerif">
                Solution<span>&nbsp;</span>&<span>&nbsp;</span>Evolution
              </h2>
                    <p class="text-sm">
                新しい発想と技術とコミュニケーションで問題を解決し、<br />より良い方法をご提案させていただきます。
              </p>
                </div>
            </el-carousel> -->
        </div>
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

import { lines } from "~~/assets/ts/lines"
const canvasID = "lines";
const canvasLineStyles = [
    { size: 1.25, style: "pattern", color: { h: 210, s: 100, l: 70, a: 0.5 } },
    { size: 2.5, style: "pattern", color: { h: 190, s: 90, l: 50, a: 0.3 } },
    { size: 5, style: "pattern", color: { h: 210, s: 70, l: 60, a: 0.2 } },
    { size: 10, style: "pattern", color: { h: 310, s: 80, l: 55, a: 0.15 } },
    { size: 20, style: "pattern", color: { h: 200, s: 25, l: 35, a: 0.12 } },
    { size: 20, style: "pattern", color: { h: 210, s: 20, l: 40, a: 0.12 } },
    { size: 40, style: "pattern", color: { h: 190, s: 40, l: 50, a: 0.12 } },
    { size: 80, style: "pattern", color: { h: 220, s: 50, l: 60, a: 0.12 } },
    { size: 40, style: "glitches", color: { h: 300, s: 100, l: 50, a: 0.3 } },
    { size: 20, style: "glitches", color: { h: 210, s: 100, l: 50, a: 0.3 } },
    { size: 60, style: "glitches", color: { h: 30, s: 100, l: 50, a: 0.3 } }
];
const lineCount = 40
const canvasBackgroundColor = { h: 200, s: 20, l: 10, a: 0.3 };

// if (process.client) {
//     window.addEventListener("load", () => {
//         lines(
//             canvasID,
//             canvasLineStyles,
//             lineCount,
//             canvasBackgroundColor,
//         );
//     });
// }

// onMounted(() => {
//     lines(
//         canvasID,
//         canvasLineStyles,
//         lineCount,
//         canvasBackgroundColor,
//     );
// })

if (process.client) {
    window.addEventListener("load", () => {
        lines(
            canvasID,
            canvasLineStyles,
            lineCount,
            canvasBackgroundColor
        )
    })
    onMounted(() => {
        lines(
            canvasID,
            canvasLineStyles,
            lineCount,
            canvasBackgroundColor
        )
    })
    onUpdated(() => {
        lines(
            canvasID,
            canvasLineStyles,
            lineCount,
            canvasBackgroundColor
        )
    })
}

</script>

<style scoped>
.catchString {
    margin-bottom: 30px;
    font-size: 80px;
    letter-spacing: 0.1em;
}

.fontSerif {
    font-family: 'Sorts Mill Goudy', serif;
}

.carousel-image {
    width: inherit;
    height: inherit;
}

.carousel-string {
    position: relative;
    color: white;
    text-align: center;
    top: calc(50% - 40px);
}
</style>