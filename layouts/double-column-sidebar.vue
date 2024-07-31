<template>
    <!-- el-container: Element Plusのコンテナコンポーネント -->
    <!-- id="PAGETOP": ページトップへのアンカーとして使用されるID -->
    <!-- class="layoutThreeLayers": レイアウトのクラスを設定 -->
    <el-container id="PAGETOP" class="layoutThreeLayers">
        <!-- el-header: ヘッダーセクション -->
        <!-- class="el-header-custom": カスタムスタイルのクラスを設定 -->
        <el-header class="el-header-custom">
            <!-- カスタムヘッダーコンポーネント -->
            <Header />
        </el-header>

        <!-- メインコンテンツとサイドバーのラッパー -->
        <div class="wrapper">
            <!-- サイドバー -->
            <aside class="sidebar hidden md:inline-block">
                <!-- ウィジェット（サイドバーコンテンツ） -->
                <div class="widget--sticky">
                    <!-- カスタムサイドバーコンポーネント -->
                    <Sidebar />
                </div>
            </aside>

            <!-- el-main: メインコンテンツセクション -->
            <!-- class="el-main-custom main": カスタムスタイルのクラスを設定 -->
            <el-main class="el-main-custom main">
                <!-- 背景パターンコンテナ -->
                <div class="background-line-container">
                    <!-- カスタム背景パターンコンポーネント -->
                    <BackgroundPattern2 />
                </div>
                <!-- スロットに挿入されたコンテンツを表示 -->
                <slot />
            </el-main>
        </div>

        <!-- el-footer: フッターセクション -->
        <!-- class="el-footer-custom": カスタムスタイルのクラスを設定 -->
        <el-footer class="el-footer-custom">
            <!-- カスタムフッターコンポーネント -->
            <Footer />
        </el-footer>
    </el-container>
</template>

<script setup lang="ts">
import Sidebar from '~/components/Sidebar.vue' // カスタムサイドバーコンポーネントをインポート
import BackgroundPattern2 from '~/components/BackgroundPattern2.vue' // カスタム背景パターンコンポーネントをインポート
</script>

<style scoped>
/* カスタムヘッダーのスタイル */
.el-header-custom {
    padding: 0;
}

/* レイアウト全体のスタイル */
.layoutThreeLayers {
    display: grid;
    /* グリッドレイアウトを使用 */
    grid-template-columns: 100%;
    /* 列は1つだけ */
    grid-template-rows: auto 1fr auto;
    /* 行はヘッダー、メイン、フッターの順に自動調整 */
    min-height: 100vh;
    /* ビューポートの高さに合わせる */
    max-width: 1280px;
    /* 最大幅を設定 */
    margin: 0 auto;
    /* 中央寄せ */
}

/* カスタムメインセクションのスタイル */
.el-main-custom {
    padding: 0;
    overflow: hidden;
    /* オーバーフローを隠す */
}

/* カスタムフッターのスタイル */
.el-footer-custom {
    padding: 0;
    height: auto;
}

/* コンテンツとサイドバーのラッパースタイル */
.wrapper {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    /* コンテンツを左右に配置 */
}

/* メインコンテンツのスタイル */
.main {
    width: calc(100% - 160px);
    /* サイドバーの幅を引いた残り幅 */
}

/* 画面幅が768px以下の場合のメインコンテンツのスタイル */
@media screen and (max-width: 768px) {
    .main {
        width: 100%;
    }
}

/* サイドバーのスタイル */
.sidebar {
    width: 160px;
}

/* サイドバーウィジェットの固定スタイル */
.widget--sticky {
    position: sticky;
    top: var(--header-height);
    /* ヘッダーの高さに合わせて固定 */
}

/* 背景パターンコンテナのスタイル */
.background-line-container {
    position: fixed;
    inset: 0;
    margin: auto;
    max-width: 1280px;
    z-index: -2;
    /* 背景に配置 */
}
</style>
