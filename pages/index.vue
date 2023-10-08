<template id="myTemplate">
  <div>
    <div>
      <el-carousel height="400px" arrow="never" indicator-position="none">
        <el-carousel-item>
          <canvas id="lines"></canvas>
        </el-carousel-item>
        <!-- <el-carousel-item>
          <el-image src="./images/sample/suits001-blue.png" class="carousel-image"></el-image>
        </el-carousel-item>
        <el-carousel-item>
          <el-image src="./images/sample/suits002-blue.png" class="carousel-image"></el-image>
        </el-carousel-item>
        <el-carousel-item>
          <el-image src="./images/sample/suits003-blue.png" class="carousel-image"></el-image>
        </el-carousel-item> -->
        <div class="carousel-string">
          <h2 class="catchString fontSerif">
            Solution<span>&nbsp;</span>&<span>&nbsp;</span>Evolution
          </h2>
          <p class="text-sm">
            新しい発想と技術とコミュニケーションで問題を解決し、<br />より良い方法をご提案させていただきます。
          </p>
        </div>
      </el-carousel>
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
// if (process.client) {
//   lines();
// }
useNuxtApp().hook('app:mounted', () => lines());
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