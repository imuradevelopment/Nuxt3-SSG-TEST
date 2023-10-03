<template>
  <div>
    <div class="carousel-string">
      <p>
        <b>Solution & Evolution</b>
      </p>
      <p>
        新しい発想と技術とコミュニケーションで問題を解決し、<br />より良い方法をご提案させていただきます。
      </p>
    </div>
    <el-carousel class="el-carousel">
      <el-carousel-item indicator-position="outside"><el-image
          src="./images/top/image06.svg"></el-image></el-carousel-item>
      <el-carousel-item><el-image src="./images/top/image07.svg"></el-image></el-carousel-item>
      <el-carousel-item><el-image src="./images/top/image08.svg"></el-image></el-carousel-item>
    </el-carousel>
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
</script>

<style scoped>
.el-carousel {
  height: 300px;
}

.carousel-string {
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0;
  margin: 0;
  font-size: 30px;
  color: white;
  z-index: 1;
}
</style>