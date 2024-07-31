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

        <!-- el-main: メインコンテンツセクション -->
        <!-- class="el-main-custom": カスタムスタイルのクラスを設定 -->
        <el-main class="el-main-custom">
            <!-- デフォルトレイアウトのコンテナ -->
            <div class="defaultLayout">
                <!-- スロットに挿入されたコンテンツを表示 -->
                <slot />
            </div>
        </el-main>

        <!-- el-footer: フッターセクション -->
        <!-- class="el-footer-custom": カスタムスタイルのクラスを設定 -->
        <el-footer class="el-footer-custom">
            <!-- カスタムフッターコンポーネント -->
            <Footer />
        </el-footer>
    </el-container>
</template>

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
</style>
