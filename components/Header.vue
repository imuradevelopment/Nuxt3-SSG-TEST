<template>
    <el-header class="header">
        <el-row>
            <el-col :span="6">
                <div class="logo">企業ロゴ</div>
            </el-col>
            <el-col :span="18">
                <el-menu mode="horizontal"
                         router>
                    <el-menu-item index="/">ホーム</el-menu-item>
                    <el-menu-item index="/about">私たちについて</el-menu-item>
                    <el-menu-item index="/company">会社概要</el-menu-item>
                    <el-menu-item index="/contact">お問い合わせ</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </el-header>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
    height: 60px;
    line-height: 60px;
    background-color: #409eff;
    color: white;
}

.logo {
    font-size: 24px;
    font-weight: bold;
    margin-left: 20px;
}
</style>