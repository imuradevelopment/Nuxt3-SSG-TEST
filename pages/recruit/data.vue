<template>
    <div>
        <!-- ヘッダーセクション -->
        <section class="mb-12 md:mb-24 flex bg-cover bg-[url('/images/recruit/data/001.png')]">
            <!-- 左側の装飾部分 -->
            <div class="basis-1/3 h-auto z-10 bg-custom-deepBlue"
                style="clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%)">
            </div>
            <!-- タイトルと説明 -->
            <div class="flex flex-col grow">
                <h1 id="recruit-data01" class="linkScroll self-end mx-8 text-2xl sm:text-4xl font-bold text-white">
                    各種データ
                </h1>
                <p
                    class="pl-28 pr-4 -ml-28 mt-12 text-center mb-4 py-2 text-base md:text-lg font-bold text-white bg-custom-blue/70">
                    様々な会社データを纏めました。</p>
            </div>
        </section>

        <!-- 事業データセクション -->
        <section class="mb-12 md:mb-24">
            <h2 id="recruit-data02"
                class="px-8 mb-4 w-fit text-white bg-custom-deepBlue text-4xl font-bold leading-loose">
                事業データ</h2>
            <div class="mx-4 flex justify-center items-center">
                <div class="data-card-grid1">
                    <!-- 売上高カード -->
                    <div class="data-card card-text">
                        <div class="pancake-stack text-custom-deepBlue">
                            <div class="text-center text-4xl tracking-widest font-bold break-keep">
                                売上高
                            </div>
                            <hr class="mx-4 mb-4 mt-4 border border-custom-deepBlue" />
                            <div class="text-center">
                                <div class="text-sm font-thin">
                                    2022年度
                                </div>
                                <div class="text-3xl font-bold tracking-wide">
                                    17億円
                                </div>
                            </div>
                            <div class="center">
                                <NuxtImg class="w-28 h-28" fit="cover" src="/images/recruit/data/002.png" />
                            </div>
                        </div>
                    </div>
                    <!-- 資本金カード -->
                    <div class="data-card card-text">
                        <div class="pancake-stack text-custom-deepBlue">
                            <div class="text-center text-4xl tracking-widest font-bold">
                                資本金
                            </div>
                            <hr class="mx-4 mb-4 mt-4 border border-custom-deepBlue" />
                            <div class="text-center">
                                <div class="text-sm font-thin">
                                    <br />
                                </div>
                                <div class="text-3xl font-bold tracking-wide">
                                    2,600万円
                                </div>
                            </div>
                            <div class="center">
                                <NuxtImg class="w-28 h-28" fit="cover" src="/images/recruit/data/003.png" />
                            </div>
                        </div>
                    </div>
                    <!-- コアパートナーカード -->
                    <div class="data-card card-text">
                        <div class="pancake-stack text-custom-deepBlue">
                            <div class="text-center text-4xl tracking-widest font-bold">
                                コアパートナー
                            </div>
                            <hr class="mx-4 mb-4 mt-4 border border-custom-deepBlue" />
                            <div class="pl-4">
                                <ul class="list-disc text-left text-base font-bold">
                                    <li>
                                        日本アイ・ビー・エム株式会社
                                    </li>
                                    <li>
                                        コベルコシステム株式会社
                                    </li>
                                    <li>
                                        三井情報株式会社
                                    </li>
                                </ul>
                            </div>
                            <div class="flex justify-end items-start">
                                <NuxtImg class="w-28 h-28 -top-2" fit="cover" src="/images/recruit/data/004.png" />
                            </div>
                        </div>
                    </div>
                    <!-- 主要取引先カード -->
                    <div class="data-card card-text">
                        <div class="pancake-stack text-custom-deepBlue">
                            <div class="text-center text-4xl tracking-widest font-bold">
                                主要取引先
                            </div>
                            <hr class="mx-4 mb-4 mt-4 border border-custom-deepBlue" />
                            <div class="pl-4">
                                <ul class="list-disc text-left text-xs">
                                    <li>
                                        NECネクサソリューションズ株式会社
                                    </li>
                                    <li>
                                        日本電気株式会社（NEC）
                                    </li>
                                    <li>
                                        ＮＴＴコムソリューションズ株式会社
                                    </li>
                                    <li>
                                        株式会社ＴＢＫ
                                    </li>
                                    <li>
                                        デロイト・トーマツ・リスクアドバイザリー株式会社
                                    </li>
                                    <li>
                                        日本タタ・コンサルタンシー・サービシズ株式会社
                                    </li>
                                    <li>
                                        富士フイルムシステムサービス株式会社
                                    </li>
                                    <li>
                                        富士通株式会社
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- 業種 得意エリアカード -->
                    <div class="data-card card-text">
                        <div class="pancake-stack text-custom-deepBlue">
                            <div class="text-center text-4xl tracking-widest font-bold break-keep">
                                業種 得意エリア
                            </div>
                            <hr class="mx-4 mb-4 mt-4 border border-custom-deepBlue" />
                            <div class="pl-4">
                                <ul class="list-disc text-left text-base font-bold">
                                    <li>
                                        <span class="inline-flex justify-between items-center w-4/5">
                                            <span>
                                                金融
                                            </span>
                                            <span>
                                                55%
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                保険
                                            </div>
                                            <div>
                                                20%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                官公庁
                                            </div>
                                            <div>
                                                15%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                流通
                                            </div>
                                            <div>
                                                5%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                その他
                                            </div>
                                            <div>
                                                5%
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- 業務 得意エリアカード -->
                    <div class="data-card card-text">
                        <div class="pancake-stack text-custom-deepBlue">
                            <div class="text-center text-4xl tracking-widest font-bold break-keep">
                                業務 得意エリア
                            </div>
                            <hr class="mx-4 mb-4 mt-4 border border-custom-deepBlue" />
                            <div class="pl-4">
                                <ul class="list-disc text-left text-base font-bold">
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                情報系
                                            </div>
                                            <div>
                                                55%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                経理会計
                                            </div>
                                            <div>
                                                20%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                生産管理
                                            </div>
                                            <div>
                                                15%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                基幹
                                            </div>
                                            <div>
                                                5%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                その他
                                            </div>
                                            <div>
                                                5%
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- スキル 得意エリアカード -->
                    <div class="data-card card-text">
                        <div class="pancake-stack text-custom-deepBlue">
                            <div class="text-center text-4xl tracking-widest font-bold text-custom-deepBlue break-keep">
                                スキル 得意エリア
                            </div>
                            <hr class="mx-4 mb-4 mt-4 border border-custom-deepBlue" />
                            <div class="pl-4">
                                <ul class="list-disc text-left text-base font-bold">
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                システムエンジニア
                                            </div>
                                            <div>
                                                50%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                プログラマー
                                            </div>
                                            <div>
                                                30%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                プロジェクトマネージャー
                                            </div>
                                            <div>
                                                5%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                アーキテクト
                                            </div>
                                            <div>
                                                5%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                コンサルタント
                                            </div>
                                            <div>
                                                5%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                その他
                                            </div>
                                            <div>
                                                5%
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- 工程 得意エリアカード -->
                    <div class="data-card card-text">
                        <div class="pancake-stack text-custom-deepBlue">
                            <div class="text-center text-4xl tracking-widest font-bold text-custom-deepBlue break-keep">
                                工程 得意エリア
                            </div>
                            <hr class="mx-4 mb-4 mt-4 border border-custom-deepBlue" />
                            <div class="pl-4">
                                <ul class="list-disc text-left text-base font-bold">
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                上流設計
                                            </div>
                                            <div>
                                                20%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                下流設計
                                            </div>
                                            <div>
                                                20%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                開発
                                            </div>
                                            <div>
                                                25%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                テスト
                                            </div>
                                            <div>
                                                25%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                提案、要件定義
                                            </div>
                                            <div>
                                                10%
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- 技術 得意エリアカード -->
                    <div class="data-card card-text">
                        <div class="pancake-stack text-custom-deepBlue">
                            <div class="text-center text-4xl tracking-widest font-bold text-custom-deepBlue break-keep">
                                技術 得意エリア
                            </div>
                            <hr class="mx-4 mb-4 mt-4 border border-custom-deepBlue" />
                            <div class="pl-4">
                                <ul class="list-disc text-left text-base font-bold">
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                バッチ系
                                            </div>
                                            <div>
                                                40%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                データ分析
                                            </div>
                                            <div>
                                                20%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                オンライン系
                                            </div>
                                            <div>
                                                15%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                画面系
                                            </div>
                                            <div>
                                                15%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                インフラ系
                                            </div>
                                            <div>
                                                5%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                その他
                                            </div>
                                            <div>
                                                5%
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- 開発言語 得意エリアカード -->
                    <div class="data-card card-text">
                        <div class="pancake-stack text-custom-deepBlue">
                            <div
                                class="text-center text-3xl leading-10 tracking-widest font-bold text-custom-deepBlue break-keep">
                                開発言語 得意エリア
                            </div>
                            <hr class="mx-4 mb-4 mt-4 border border-custom-deepBlue" />
                            <div class="pl-4">
                                <ul class="list-disc text-left text-base font-bold">
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                GUI 系
                                            </div>
                                            <div>
                                                38%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                Java 系
                                            </div>
                                            <div>
                                                21%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                VB 系
                                            </div>
                                            <div>
                                                21%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                C,C#,C++ 系
                                            </div>
                                            <div>
                                                12%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                Python 系
                                            </div>
                                            <div>
                                                4%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                その他
                                            </div>
                                            <div>
                                                4%
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- 平均年齢カード -->
                    <div class="data-card card-text">
                        <div class="pancake-stack text-custom-deepBlue">
                            <div class="text-center text-4xl tracking-widest font-bold">
                                平均年齢
                            </div>
                            <hr class="mx-4 mb-4 mt-4 border border-custom-deepBlue" />
                            <div class="">
                                <div class="text-center">
                                    <div class="text-sm font-thin">
                                        <br />
                                    </div>
                                    <div class="text-3xl font-bold tracking-wide">
                                        34.1歳
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-center items-center">
                                <NuxtImg class="w-28 h-28" fit="cover" src="/images/recruit/data/005.png" />
                            </div>
                        </div>
                    </div>
                    <!-- 平均勤続年数カード -->
                    <div class="data-card card-text">
                        <div class="pancake-stack text-custom-deepBlue">
                            <div class="text-center text-4xl tracking-widest font-bold">
                                平均勤続年数
                            </div>
                            <hr class="mx-4 mb-4 mt-4 border border-custom-deepBlue" />
                            <div class="">
                                <div class="text-center">
                                    <div class="text-sm font-thin">
                                        <br />
                                    </div>
                                    <div class="text-3xl font-bold tracking-wide">
                                        8.2年
                                    </div>
                                    <div class="text-sm font-thin">
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-center items-center">
                                <NuxtImg class="w-28 h-28" fit="cover" src="/images/recruit/data/006.png" />
                            </div>
                        </div>
                    </div>
                    <!-- 所定外労働カード -->
                    <div class="data-card card-text">
                        <div class="pancake-stack text-custom-deepBlue">
                            <div class="text-center text-4xl leading-10 tracking-wide font-bold">
                                所定外労働
                            </div>
                            <hr class="mx-4 mb-4 mt-4 border border-custom-deepBlue" />
                            <div class="">
                                <div class="text-center">
                                    <div class="text-sm font-thin">
                                        <br />
                                    </div>
                                    <div class="text-2xl font-bold tracking-wide">
                                        月平均：22.4時間
                                    </div>
                                    <div class="text-sm font-thin">
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-center items-center">
                                <NuxtImg class="w-28 h-28" fit="cover" src="/images/recruit/data/007.png" />
                            </div>
                        </div>
                    </div>
                    <!-- 有給休暇カード -->
                    <div class="data-card card-text">
                        <div class="pancake-stack text-custom-deepBlue">
                            <div class="text-center text-4xl tracking-widest font-bold">
                                有給休暇
                            </div>
                            <hr class="mx-4 mb-4 mt-4 border border-custom-deepBlue" />
                            <div class="">
                                <div class="text-center">
                                    <div class="text-2xl font-bold tracking-wide">
                                        年平均取得：12.5日
                                    </div>
                                    <div class="text-2xl font-bold leading-loose tracking-wide">
                                        有給取得率：42.3%
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-center items-center">
                                <NuxtImg class="w-28 h-28" fit="cover" src="/images/recruit/data/008.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 新卒採用データセクション -->
        <section class="mb-24">
            <h2 id="recruit-data03"
                class="px-8 mb-4 w-fit text-white bg-custom-deepBlue text-4xl font-bold leading-loose">
                新卒採用データ</h2>
            <div class="mx-4 flex justify-center items-center">
                <div class="data-card-grid2">
                    <!-- 卒校別割合カード -->
                    <div class="data-card card-text">
                        <div class="pancake-stack text-custom-deepBlue">
                            <div class="text-center text-4xl tracking-widest font-bold">
                                卒校別割合
                            </div>
                            <hr class="mx-4 mb-4 mt-4 border border-custom-deepBlue" />
                            <div class="pl-4 w-4/5 horizontal-center">
                                <ul class="list-disc text-left text-lg font-bold">
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                大学
                                            </div>
                                            <div>
                                                64%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                専門学校
                                            </div>
                                            <div>
                                                27%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                高校/短大
                                            </div>
                                            <div>
                                                8%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                大学院
                                            </div>
                                            <div>
                                                1%
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- 文理割合カード -->
                    <div class="data-card card-text">
                        <div class="pancake-stack text-custom-deepBlue">
                            <div class="text-center text-4xl tracking-widest font-bold">
                                文理割合
                            </div>
                            <hr class="mx-4 mb-4 mt-4 border border-custom-deepBlue" />
                            <div class="pl-4 w-4/5 horizontal-center">
                                <ul class="list-disc text-left text-lg font-bold">
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                文系
                                            </div>
                                            <div>
                                                44%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                理系
                                            </div>
                                            <div>
                                                46%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                その他
                                            </div>
                                            <div>
                                                10%
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- 男女割合カード -->
                    <div class="data-card card-text">
                        <div class="pancake-stack text-custom-deepBlue">
                            <div class="text-center text-4xl tracking-widest font-bold">
                                男女割合
                            </div>
                            <hr class="mx-4 mb-4 mt-4 border border-custom-deepBlue" />
                            <div class="pl-4 w-4/5 horizontal-center">
                                <ul class="list-disc text-left text-lg font-bold">
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                男性
                                            </div>
                                            <div>
                                                89.4%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                女性
                                            </div>
                                            <div>
                                                10.6%
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="flex justify-center items-center">
                                <NuxtImg class="w-28 h-28" fit="cover" src="/images/recruit/data/009.png" />
                            </div>
                        </div>
                    </div>
                    <!-- プログラミング経験カード -->
                    <div class="data-card card-text">
                        <div class="pancake-stack text-custom-deepBlue">
                            <div class="text-center text-3xl leading-10 tracking-widest font-bold text-custom-deepBlue">
                                プログラミング経験
                            </div>
                            <hr class="mx-4 mb-4 mt-4 border border-custom-deepBlue" />
                            <div class="pl-4 w-4/5 horizontal-center">
                                <ul class="list-disc text-left text-lg font-bold">
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                未経験
                                            </div>
                                            <div>
                                                68%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                授業で
                                            </div>
                                            <div>
                                                23%
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="inline-flex justify-between items-center w-4/5">
                                            <div>
                                                趣味で
                                            </div>
                                            <div>
                                                9%
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'double-column-sidebar'
})
</script>

<style scoped>
/* カードの基本スタイル */
.card-text {
    padding: 1rem;
    height: 100%;
    width: 100%;
    background: rgba(0, 37, 92, 0.1);
    backdrop-filter: saturate(180%) blur(3px);
}

/* データカードのグリッドレイアウト */
.data-card-grid1 {
    display: grid;
    grid-template-columns: repeat(3, minmax(270px, 352px));
    grid-template-rows: repeat(5, minmax(270px, auto));
    gap: 1rem;
}

.data-card-grid2 {
    display: grid;
    grid-template-columns: repeat(3, minmax(270px, 352px));
    grid-template-rows: repeat(2, minmax(270px, auto));
    gap: 1rem;
}

/* メディアクエリ：画面幅が1034px以下の場合 */
@media (width <=1034px) {
    .data-card-grid1 {
        grid-template-columns: repeat(2, minmax(270px, 352px));
        grid-template-rows: repeat(7, minmax(270px, auto));
    }

    .data-card-grid2 {
        grid-template-columns: repeat(2, minmax(270px, 352px));
        grid-template-rows: repeat(2, minmax(270px, auto));
    }
}

/* メディアクエリ：画面幅が587px以下の場合 */
@media (width <=587px) {
    .data-card-grid1 {
        grid-template-columns: repeat(1, minmax(270px, 352px));
        grid-template-rows: repeat(14, minmax(270px, auto));
    }

    .data-card-grid2 {
        grid-template-columns: repeat(1, minmax(270px, 352px));
        grid-template-rows: repeat(4, minmax(270px, auto));
    }
}

/* カードのアイテム配置 */
.data-card {
    grid-column: span 1;
    grid-row: span 1;
}

/* パンケーキスタックレイアウト */
.pancake-stack {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas:
        "item1"
        "item2"
        "item3"
        "item4";
    grid-template-columns: 100%;
    grid-template-rows: auto auto 1fr auto;
}

/* アイテムエリア */
.item1 {
    grid-area: item1;
}

.item2 {
    grid-area: item2;
}

.item3 {
    grid-area: item3;
}

.item4 {
    grid-area: item4;
}

/* アイテムのセンター配置 */
.center {
    align-self: center;
    justify-self: center;
}

/* 縦センター配置 */
.vertical-center {
    align-self: center;
}

/* 横センター配置 */
.horizontal-center {
    justify-self: center;
}
</style>
