<template>
    <div class="container">
        <Header />
        <el-breadcrumb separator="/">
            <el-breadcrumb-item to="/">ホーム</el-breadcrumb-item>
            <el-breadcrumb-item>お問い合わせ</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="content">
            <h1>お問い合わせ</h1>
            <p>ここにお問い合わせの内容を書きます。</p>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
    width: 80%;
    margin: 0 auto;
}

.content {
    padding: 20px;
}
</style>