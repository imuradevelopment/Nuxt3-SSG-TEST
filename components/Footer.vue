<template>
    <el-footer class="footer">
        <el-row>
            <el-col :span="6">
                <div class="back-button"
                     @click="goBack">
                    <el-button type="primary"
                               icon="el-icon-back"
                               circle></el-button>
                </div>
            </el-col>
            <el-col :span="18">
                <div class="copy-right">© 2023 企業名. All rights reserved.</div>
            </el-col>
        </el-row>
    </el-footer>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
    router.back()
}
</script>

<style scoped>
.footer {
    height: 60px;
    line-height: 60px;
    background-color: #f2f2f2;
    color: #333;
}

.back-button {
    float: right;
    margin-right: 20px;
}

.copy-right {
    text-align: center;
}
</style>