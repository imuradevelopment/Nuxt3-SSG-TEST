<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col" class="medium text-base">業務</th>
                <th scope="col" class="text-base">システム</th>
                <th scope="col" class="small text-base">要件<br class="hidden tableTransform1:inline-block" />定義</th>
                <th scope="col" class="small text-base">設計</th>
                <th scope="col" class="small text-base">開発</th>
                <th scope="col" class="small text-base">各種<br class="hidden tableTransform1:inline-block" />テスト</th>
                <th scope="col" class="small text-base">保守<span class="inline-block tableTransform1:hidden">・</span><br
                        class="hidden tableTransform1:inline-block" />運用</th>
                <th scope="col" class="large text-base">データベース</th>
                <th scope="col" class="medium text-base">開発言語<span class="inline-block tableTransform1:hidden">・</span><br
                        class="hidden tableTransform1:inline-block" />ツール</th>
            </tr>
        </thead>
        <tbody>
            <tr class="mb-4">
                <td class="table-id" data-value="区分">金融</td>
                <td class="table-name" data-value="システム">銀行向けデータ連携システム<br
                        class="hidden tableTransform1:inline-block" />開発・運用・保守開発</td>
                <td class="table-job1" data-value="要件定義">◯</td>
                <td class="table-job2" data-value="設計">◯</td>
                <td class="table-job3" data-value="開発">◯</td>
                <td class="table-job4" data-value="各種テスト">◯</td>
                <td class="table-job5" data-value="保守・運用">◯</td>
                <td class="table-DB" data-value="DB">Oracle</td>
                <td class="table-lang" data-value="言語・ツール">ETL</td>
            </tr>

            <tr>
                <td class="table-id" data-value="区分">金融</td>
                <td class="table-name" data-value="システム">信託銀行向け<br
                        class="hidden tableTransform1:inline-block" />既存基幹システム法改正改修</td>
                <td class="table-job1" data-value="要件定義">&nbsp;-&nbsp;</td>
                <td class="table-job2" data-value="設計">◯</td>
                <td class="table-job3" data-value="開発">◯</td>
                <td class="table-job4" data-value="各種テスト">◯</td>
                <td class="table-job5" data-value="保守・運用">&nbsp;-&nbsp;</td>
                <td class="table-DB" data-value="DB">BD2</td>
                <td class="table-lang" data-value="言語・ツール">VBA, JavaScript</td>
            </tr>

            <tr>
                <td class="table-id" data-value="区分">金融</td>
                <td class="table-name" data-value="システム">金融機関向け基盤インフラ<br
                        class="hidden tableTransform1:inline-block" />開発・保守開発</td>
                <td class="table-job1" data-value="要件定義">&nbsp;-&nbsp;</td>
                <td class="table-job2" data-value="設計">◯</td>
                <td class="table-job3" data-value="開発">◯</td>
                <td class="table-job4" data-value="各種テスト">◯</td>
                <td class="table-job5" data-value="保守・運用">◯</td>
                <td class="table-DB" data-value="DB">Oracle</td>
                <td class="table-lang" data-value="言語・ツール">Shell, C</td>
            </tr>

            <tr>
                <td class="table-id" data-value="区分">金融</td>
                <td class="table-name" data-value="システム">銀行向けシステム<br
                        class="hidden tableTransform1:inline-block" />法規制変更に伴うシステム対応</td>
                <td class="table-job1" data-value="要件定義">◯</td>
                <td class="table-job2" data-value="設計">◯</td>
                <td class="table-job3" data-value="開発">◯</td>
                <td class="table-job4" data-value="各種テスト">◯</td>
                <td class="table-job5" data-value="保守・運用">&nbsp;-&nbsp;</td>
                <td class="table-DB" data-value="DB">SQL Server</td>
                <td class="table-lang" data-value="言語・ツール">C#</td>
            </tr>

            <tr>
                <td class="table-id" data-value="区分">金融</td>
                <td class="table-name" data-value="システム">銀行向け現行システム<br
                        class="hidden tableTransform1:inline-block" />保守・運用支援・ユーザサポート</td>
                <td class="table-job1" data-value="要件定義">&nbsp;-&nbsp;</td>
                <td class="table-job2" data-value="設計">&nbsp;-&nbsp;</td>
                <td class="table-job3" data-value="開発">&nbsp;-&nbsp;</td>
                <td class="table-job4" data-value="各種テスト">&nbsp;-&nbsp;</td>
                <td class="table-job5" data-value="保守・運用">◯</td>
                <td class="table-DB" data-value="DB">&nbsp;-&nbsp;</td>
                <td class="table-lang" data-value="言語・ツール">&nbsp;-&nbsp;</td>
            </tr>

            <tr>
                <td class="table-id" data-value="区分">保険</td>
                <td class="table-name" data-value="システム">保険会社向けデータウェアハウスシステム<br
                        class="hidden tableTransform1:inline-block" />構築・保守開発</td>
                <td class="table-job1" data-value="要件定義">◯</td>
                <td class="table-job2" data-value="設計">◯</td>
                <td class="table-job3" data-value="開発">◯</td>
                <td class="table-job4" data-value="各種テスト">◯</td>
                <td class="table-job5" data-value="保守・運用">◯</td>
                <td class="table-DB" data-value="DB">Oracle</td>
                <td class="table-lang" data-value="言語・ツール">Python, ETL</td>
            </tr>

            <tr>
                <td class="table-id" data-value="区分">カード</td>
                <td class="table-name" data-value="システム">カード会社向けシステム<br
                        class="hidden tableTransform1:inline-block" />統合プロジェクト</td>
                <td class="table-job1" data-value="要件定義">&nbsp;-&nbsp;</td>
                <td class="table-job2" data-value="設計">◯</td>
                <td class="table-job3" data-value="開発">◯</td>
                <td class="table-job4" data-value="各種テスト">◯</td>
                <td class="table-job5" data-value="保守・運用">&nbsp;-&nbsp;</td>
                <td class="table-DB" data-value="DB">Oracle</td>
                <td class="table-lang" data-value="言語・ツール">Java</td>
            </tr>

            <tr>
                <td class="table-id" data-value="区分">公共</td>
                <td class="table-name" data-value="システム">法人団体向け業務改善システム<br
                        class="hidden tableTransform1:inline-block" />要件定義・構築</td>
                <td class="table-job1" data-value="要件定義">◯</td>
                <td class="table-job2" data-value="設計">◯</td>
                <td class="table-job3" data-value="開発">◯</td>
                <td class="table-job4" data-value="各種テスト">◯</td>
                <td class="table-job5" data-value="保守・運用">&nbsp;-&nbsp;</td>
                <td class="table-DB" data-value="DB">SQL Server</td>
                <td class="table-lang" data-value="言語・ツール">VB.NET</td>
            </tr>

            <tr>
                <td class="table-id" data-value="区分">公共</td>
                <td class="table-name" data-value="システム">官公庁向け業務改善システム<br
                        class="hidden tableTransform1:inline-block" />構築・保守開発</td>
                <td class="table-job1" data-value="要件定義">◯</td>
                <td class="table-job2" data-value="設計">◯</td>
                <td class="table-job3" data-value="開発">◯</td>
                <td class="table-job4" data-value="各種テスト">◯</td>
                <td class="table-job5" data-value="保守・運用">◯</td>
                <td class="table-DB" data-value="DB">SQL Server</td>
                <td class="table-lang" data-value="言語・ツール">VB.NET</td>
            </tr>

            <tr>
                <td class="table-id" data-value="区分">公共</td>
                <td class="table-name" data-value="システム">官公庁向け業務刷新システム<br
                        class="hidden tableTransform1:inline-block" />構築・保守開発</td>
                <td class="table-job1" data-value="要件定義">◯</td>
                <td class="table-job2" data-value="設計">◯</td>
                <td class="table-job3" data-value="開発">◯</td>
                <td class="table-job4" data-value="各種テスト">◯</td>
                <td class="table-job5" data-value="保守・運用">◯</td>
                <td class="table-DB" data-value="DB">SQL Server</td>
                <td class="table-lang" data-value="言語・ツール">Java</td>
            </tr>
        </tbody>
    </table>
</template>
<script setup lang="ts">

</script>
<style scoped>
.table {
    border-collapse: collapse;
    width: 100%;
    background-color: transparent;
    margin-bottom: 1.75rem
}

.table th {
    padding: 0.5em 0.5em;
    border: 1px solid var(--cumtom-color-ivory);
    background-color: var(--custom-color-deepGray);
    color: var(--cumtom-color-lightIvory);
    text-align: center;
}

.table td {
    padding: 0.25em 0.5em;
    border: 1px solid var(--cumtom-color-ivory);
}

.table tr:nth-child(even) {
    background-color: var(--cumtom-color-lightIvory);
}

/* 列ごとのスタイル */
tbody tr td:nth-child(1) {
    text-align: center;
}

tbody tr td:nth-child(2) {
    text-align: left;
}

tbody tr td:nth-child(3) {
    text-align: center;
}

tbody tr td:nth-child(4) {
    text-align: center;
}

tbody tr td:nth-child(5) {
    text-align: center;
}

tbody tr td:nth-child(6) {
    text-align: center;
}

tbody tr td:nth-child(7) {
    text-align: center;
}

tbody tr td:nth-child(8) {
    text-align: center;
}

tbody tr td:nth-child(9) {
    text-align: center;
}

/* 表全体をブロック要素として表示 */
@media (max-width: 954px) {

    .table tr:nth-child(even) {
        background-color: transparent;
    }

    .table tbody tr td {
        text-align: left;
    }

    .table,
    thead,
    tbody,
    th,
    td,
    tr {
        display: block;
    }

    /* ヘッダー行を非表示に設定 */
    .table thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }

    /* 各行にボーダーを追加し、間隔を設定 */
    .table tr {
        margin-bottom: 1.75rem;
    }
    .table tr:last-child {
        margin-bottom: 0;
    }

    /* セルにパディングを追加し、テキストを左揃えに設定 */
    .table tr td:nth-child(1) {
        border-left: none;
        border-right: none;
        color: var(--cumtom-color-lightIvory);
        background: var(--custom-color-deepGray);
        border-bottom: 1px solid #eee;
        position: relative;
        text-align: left;
        font-size: large;
        font-weight: bold;
        padding-top: 6px;
    }

    .table td {
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #eee;
        position: relative;
        padding-left: 9rem;
        text-align: left;
    }

    .table tr td:last-child {
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        position: relative;
        text-align: left;
    }

    /* セルの内容の前にラベルを表示 */
    .table tr td:nth-child(1):before {
        position: absolute;
        top: 6px;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
        content: attr(data-value);
    }

    .table td:before {
        position: absolute;
        top: 3px;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
        content: attr(data-value);
    }
}</style>