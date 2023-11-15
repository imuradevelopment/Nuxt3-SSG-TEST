<template>
    <table class="mx-auto table-auto border-collapse border border-gray-300">
        <thead v-if="showHeader">
            <tr>
                <th v-for="column in items[0]" :key="column" class="border border-gray-300 px-4 py-2">{{ column }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in items" :key="index" class="odd:bg-gray-100 even:bg-gray-200">
                <td  v-if="index > 0" v-for="column in item" :key="column" class="border border-gray-300 px-4 py-2" v-html="column"></td>
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
  