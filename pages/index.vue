<template>
    <div class="container">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item to="/">ホーム</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="content">
            <h1>ホームページ</h1>
            <p>ここにホームページの内容を書きます。</p>
        </div>
    </div>
    <ul>
        <li v-for="blog in data?.contents"
            :key="blog.id">
            <NuxtLink :to="`/${blog.id}`">
                <img :src="blog.eyecatch?.url"
                        :width="blog.eyecatch?.width"
                        :height="blog.eyecatch?.height"
                        alt="" />
                <div>
                    <div>
                        {{ blog.category?.name }}
                    </div>
                    <div>
                        {{ blog.title }}
                    </div>
                    <div>
                        {{ blog.publishedAt ?? blog.createdAt }}
                    </div>
                </div>
            </NuxtLink>
        </li>
    </ul>
</template>

<script setup lang = "ts" >
import { Blog } from "~~/types/Blog";

const { data } = await useMicroCMSGetList<Blog>({
    endpoint: "blogs",
});
console.log('data')
console.log(data)
console.log('data')

const config = useRuntimeConfig()
console.log('Runtime configの出力:', config)
if (process.server) {
    console.log('API secretの出力:', config.apiSecret)
}
</script>

<style scoped>
.container {
    width: 80%;
    margin: 0 auto;
}

.content {
    padding: 20px;
}
</style>