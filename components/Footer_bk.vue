<template>
    <el-row class="footerLogoWrapper">
        <el-col :sm="20" :span="24">
            <el-row>
                <div class="footerLogo drop-shadow-md">
                    <!-- <el-image src="./images/footer/logo.png"></el-image> -->
                    <el-image src="./images/footer/logo.svg"></el-image>
                </div>
            </el-row>
            <el-row class="footerTopLeft px-12 md:px-3">
                <el-col :sm="3" :span="24">
                    <div class="footerTopTitleText">
                        <LinkIndex linkTo="/">トップ Top</LinkIndex>
                    </div>
                </el-col>
                <el-col :sm="5" :span="24" class="mb-3 md:mb-0">
                    <el-row>
                        <div class="footerTopTitleText">
                            <LinkIndex linkTo="/company"><span class="footerTopHorizontalLine">会社</span>情報 Company
                            </LinkIndex>
                        </div>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/company#TEST" class="footerTopInnnerText">トップメッセージ</LinkIndex>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/company#TEST" class="footerTopInnnerText">ベイルの由来</LinkIndex>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/company#TEST" class="footerTopInnnerText">沿革</LinkIndex>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/company#TEST" class="footerTopInnnerText">会社概要</LinkIndex>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/company#TEST" class="footerTopInnnerText">アクセス</LinkIndex>
                    </el-row>
                </el-col>
                <el-col :sm="4" :span="24" class="mb-3 md:mb-0">
                    <el-row>
                        <div class="footerTopTitleText">
                            <LinkIndex linkTo="/service"><span class="footerTopHorizontalLine">事業</span>情報 Service
                            </LinkIndex>
                        </div>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/service#TEST" class="footerTopInnnerText">SIサービス</LinkIndex>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/service#TEST" class="footerTopInnnerText">ITサービス</LinkIndex>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/service#TEST" class="footerTopInnnerText">SEサービス</LinkIndex>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/service#TEST" class="footerTopInnnerText">開発実績</LinkIndex>
                    </el-row>
                </el-col>
                <el-col :sm="6" :span="24" class="mb-3 md:mb-0">
                    <el-row>
                        <el-col :span="24">
                            <div class="footerTopTitleText">
                                <LinkIndex linkTo="/recruit"><span class="footerTopHorizontalLine">採用</span>情報 Recruit
                                </LinkIndex>
                            </div>
                        </el-col>
                        <el-col :sm="8" :span="24">
                            <el-row>
                                <LinkIndex linkTo="/recruit#TEST" class="footerTopInnnerText">採用メッセージ</LinkIndex>
                            </el-row>
                            <el-row>
                                <LinkIndex linkTo="/recruit#TEST" class="footerTopInnnerText">ベイルの特徴</LinkIndex>
                            </el-row>
                            <el-row>
                                <LinkIndex linkTo="/recruit#TEST" class="footerTopInnnerText">オフィス紹介</LinkIndex>
                            </el-row>
                            <el-row>
                                <LinkIndex linkTo="/recruit#TEST" class="footerTopInnnerText">研修制度</LinkIndex>
                            </el-row>
                            <el-row>
                                <LinkIndex linkTo="/recruit#TEST" class="footerTopInnnerText">福利厚生</LinkIndex>
                            </el-row>
                        </el-col>
                        <el-col :sm="16" :span="24">
                            <el-row>
                                <LinkIndex linkTo="/recruit#TEST" class="footerTopInnnerText">各種データ</LinkIndex>
                            </el-row>
                            <el-row>
                                <LinkIndex linkTo="/recruit#TEST" class="footerTopInnnerText">Q&A</LinkIndex>
                            </el-row>
                            <el-row>
                                <LinkIndex linkTo="/recruit#TEST" class="footerTopInnnerText">社員紹介</LinkIndex>
                            </el-row>
                            <el-row>
                                <LinkIndex linkTo="/recruit#TEST" class="footerTopInnnerText">募集情報</LinkIndex>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :sm="6" :span="24" class="mb-3 md:mb-0">
                    <el-row>
                        <div class="footerTopTitleText">
                            <LinkIndex linkTo="/contact"><span class="footerTopHorizontalLine">お問</span>い合わせ Contact
                            </LinkIndex>
                        </div>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/contact#TEST" class="footerTopInnnerText">採用に関する問い合わせ</LinkIndex>
                    </el-row>
                    <el-row>
                        <LinkIndex linkTo="/contact#TEST" class="footerTopInnnerText">その他の問い合わせ</LinkIndex>
                    </el-row>
                </el-col>
            </el-row>
        </el-col>
        <el-col :sm="4" :span="24">
            <div class="footerTopRight px-3 pb-3 md:px-0">
                <div class="footerTopRightInner pt-3 px-9 md:px-3 border-t-2 md:mt-8 md:border-t-0 md:border-l-2">
                    <div class="addressTitle">本社</div>
                    <div class="address">
                        〒000-0000<br />
                        東京都◯◯◯◯◯◯1-6-2<br class="hidden md:inline-block" />
                        ◯◯◯◯◯ビル<br />
                    </div>
                    <div class="addressDetail">
                        7F（受付）<br />
                        8F（開発フロア）<br />
                        9F（セミナーフロア）<br />
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
    <el-row align="middle" class="footerBottom">
        <el-col :span="12">
            <el-row align="middle">
                <el-image class="policyMark" src="../images/footer/policy.png"></el-image>
                <span class="text-xs">個人情報保護方針</span>
            </el-row>
        </el-col>
        <el-col :span="12">
            <el-row justify="end" class="text-xs">
                <div class="copyrightMark">© 2023 Vaile. All rights reserved.</div>
            </el-row>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
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

.footerTopLeft {
    background-color: #697F9F;
    color: #F2F7FC;
    /* padding: 0 1rem 1rem 1rem; */
}

.footerTopRight {
    background-color: #697F9F;
    color: #F2F7FC;
    /* padding: 2rem 1rem 1rem 0; */
}

.footerTopRightInner {
    /* padding: 0 0 0 1rem; */
    /* border-left: solid 1px; */
}

.footerTopTitleText {
    font-size: large;
    font-weight: 500;
    line-height: 1.3;
    margin: 0 0 0.5rem 0;
}

.footerTopHorizontalLine {
    /* background: linear-gradient(transparent 95%,#F2F7FC 0); */
    border-bottom: 3px solid #F2F7FC;
}

.footerTopInnnerText {
    font-size: small;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.1em;
    margin: 0 0 0 1rem;
}

.addressTitle {
    font-size: small;
    font-weight: 400;
    line-height: 1.5;
    margin: 0 0 0.2rem 0;
}

.address {
    font-size: small;
    font-weight: 400;
    line-height: 1.5;
}

.addressDetail {
    font-size: small;
    font-weight: 400;
    line-height: 1.5;
    padding: 0 0 0 1rem;
}

.footerBottom {
    background-color: #F5F5F5;
    color: #000000;
    font-size: smaller;
    font-weight: 400;
    padding: 0 0 0 3rem;
}

.policyMark {
    height: 40px;
    width: 40px;
    margin: 0 1rem 0 0;
}

.copyrightMark {
    margin: 0 2.5rem 0 0;
}
</style>