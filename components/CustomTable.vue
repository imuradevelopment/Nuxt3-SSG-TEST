<template>
    <table class="mx-auto table-auto border-collapse">
        <thead v-if="showHeader">
            <tr>
                <th v-for="column in items[0]" :key="column" class="border  border-gray-300/50 px-4 py-2">{{ column }}</th>
            </tr>
        </thead>
        <tbody>
            <!-- <tr v-for="(item, index) in items" :key="index" class="odd:bg-gray-100/50 even:bg-gray-200/30 backdrop-blur-sm"> -->
            <tr v-for="(item, index) in items" :key="index" class="">
                <!-- <td  v-if="index > 0" v-for="column in item" :key="column" class="border border-gray-300/50 px-4 py-2" v-html="column"></td> -->
                <td v-for="(column, index2) in item" v-if="index > 0" :key="index2" class="border-b border-gray-300/50 px-4 py-2" :class="index2 == 1 ? 'border-l border-gray-300/50':''" v-html="column"></td>
            </tr>
        </tbody>
    </table>
</template>
  
<script lang="ts">

interface CompanySummaryItem {
    [key: string]: string;
}

export default defineComponent({
    name: "CustomTable",
    props: {
        items: {
            type: Array as PropType<CompanySummaryItem[]>,
            required: true,
            validator: (value: CompanySummaryItem[]) => value.length >= 2,
        },
        showHeader: {
            type: Boolean as PropType<boolean>,
            required: false,
            default: true,
            
        },
    },
});
</script>

<style scoped>
tr td:nth-child(even) {
    border-left-width: 1px;
    border-color: rgba(209, 213, 219, 0.5);
}
table tr:last-child td {
    border-bottom: none;
}

table tr td:last-child {
    border-right: none;
}
</style>
