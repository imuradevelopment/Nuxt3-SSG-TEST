<template>
    <div class="container">
        <Header />
        <el-breadcrumb separator="/">
            <el-breadcrumb-item to="/">ホーム</el-breadcrumb-item>
            <el-breadcrumb-item>会社概要</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="content">
            <h1>会社概要</h1>
            <p>ここに会社概要の内容を書きます。</p>
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