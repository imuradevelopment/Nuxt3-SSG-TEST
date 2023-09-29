<template>
    <div class="container">
        <Header />
        <el-breadcrumb separator="/">
            <el-breadcrumb-item to="/">ホーム</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="content">
            <h1>ホームページ</h1>
            <p>ここにホームページの内容を書きます。</p>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { API2 } from "../.nuxt/types/API2"

const { data } = await useMicroCMSGetList<API2>({
    endpoint: "api_2",
});
console.log(data)

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