<template>
    <el-container id="PAGETOP" class="layoutThreeLayers">
        <el-header class="el-header-custom">
            <Header />
        </el-header>
        <el-main class="el-main-custom">
            <div class="defaultLayout">
                <slot />
            </div>
            </el-main>
        <el-footer class="el-footer-custom">
            <Footer />
        </el-footer>
    </el-container>
</template>
<style scoped>
.el-header-custom {
    padding: 0 0 0 0;
}

.layoutThreeLayers {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    max-width: 1280px;
    margin: 0 auto;
}

.el-main-custom {
    padding: 0 0 0 0;
    overflow: hidden;
}

.el-footer-custom {
    padding: 0 0 0 0;
    height: auto;
}
</style>