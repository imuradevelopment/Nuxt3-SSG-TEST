<template>
    <footer>
        <el-row class="footerLogoWrapper">
            <div class="footerLogo drop-shadow-md">
                <!-- <el-image src="./images/footer/logo.png"></el-image> -->
                LOGO
            </div>
        </el-row>
        <el-row class="footerTop">
            <el-col :span="4">
                <div>トップ Top</div>
            </el-col>
            <el-col :span="4">
                <el-row>
                    <div class="footerTopTitleText">
                        <LinkIndex linkTo="/company"><span class="footerTopHorizontalLine">会社</span>情報 Company</LinkIndex>
                    </div>
                </el-row>
                <el-row>
                    <div class="footerTopInnnerText">トップメッセージ</div>
                </el-row>
                <el-row>
                    <div>ベイルの由来</div>
                </el-row>
                <el-row>
                    <div>沿革</div>
                </el-row>
                <el-row>
                    <div>会社概要</div>
                </el-row>
                <el-row>
                    <div>アクセス</div>
                </el-row>
            </el-col>
            <el-col :span="4">
                <div class="footerTopTitleText">
                    <LinkIndex linkTo="/service"><span class="footerTopHorizontalLine">事業</span>情報 Service</LinkIndex>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="footerTopTitleText">
                    <LinkIndex linkTo="/recruit"><span class="footerTopHorizontalLine">採用</span>情報 Recruit</LinkIndex>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="footerTopTitleText">
                    <LinkIndex linkTo="/contact"><span class="footerTopHorizontalLine">お問</span>い合わせ Contact</LinkIndex>
                </div>
            </el-col>
            <el-col :span="4">
                <div>本社</div>
            </el-col>
        </el-row>
        <el-row class="footerBottom">
            <el-col :span="4">
                <div>© 2023 企業名. All rights reserved.</div>
            </el-col>
        </el-row>
    </footer>
</template>

<script setup lang="ts">
// import { useActiveIndexStore } from '~/stores/activeIndex'
// const activeIndexStore = useActiveIndexStore()
// const updateActiveIndex = () => {
//     activeIndexStore.activeIndex = "2"
//     console.log(activeIndexStore.activeIndex)
// }
</script>

<style scoped>
.footerLogoWrapper {
    background-color: #697F9F;
}

.footerLogo {
    border-top: #697F9F solid 1px;
    background-color: #FFFFFF;
    margin: 0 1px 1rem 1px;
    padding: 0 0.5rem 0 0;
}

.footerTop {
    background-color: #697F9F;
    color: #F2F7FC;
}

.footerTopTitleText {
    font-size: large;
    font-weight: 500;
    line-height: 1.3;
}

.footerTopHorizontalLine {
    /* background: linear-gradient(transparent 95%,#F2F7FC 0); */
    border-bottom: 3px solid #F2F7FC;
}

.footerTopInnnerText {
    font-size: small;
}

.footerBottom {
    background-color: #F2F2F2;
    color: #000000;
}</style>