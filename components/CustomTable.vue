<template>
    <!-- テーブル全体を囲むテーブル要素 -->
    <table class="mx-auto table-auto border-collapse">
        <!-- ヘッダーを表示する場合 -->
        <thead v-if="showHeader">
            <tr>
                <!-- items配列の最初の要素を使用してヘッダーを作成 -->
                <th v-for="column in items[0]" :key="column" class="border border-gray-300/90 px-4 py-2">{{ column }}
                </th>
            </tr>
        </thead>
        <tbody>
            <!-- items配列の各アイテムを使用してテーブルの行を作成 -->
            <tr v-for="(item, index) in items" :key="index" class="">
                <!-- 各アイテムの各カラムを使用してテーブルのセルを作成 -->
                <td v-for="(column, index2) in item" v-if="index > 0" :key="index2"
                    class="border-b border-gray-300/90 px-4 py-2"
                    :class="index2 == 1 ? 'border-l border-gray-300/90' : ''" v-html="column"></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default defineComponent({
    name: "CustomTable",
    props: {
        items: {
            type: Array,
            required: true,
            validator: (value) => value.length >= 2, // items配列が少なくとも2つの要素を持つことを確認
        },
        showHeader: {
            type: Boolean,
            required: false,
            default: true, // ヘッダーを表示するかどうかのフラグ
        },
    },
});
</script>

<style scoped>
/* 偶数番目のセルに左ボーダーを追加 */
tr td:nth-child(even) {
    border-left-width: 1px;
    border-color: rgba(209, 213, 219, 0.9);
}

/* 最後の行のセルに下ボーダーを追加しない */
table tr:last-child td {
    border-bottom: none;
}

/* 最後のセルに右ボーダーを追加しない */
table tr td:last-child {
    border-right: none;
}
</style>
