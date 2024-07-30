<template>
    <table class="mx-auto table-auto border-collapse">
        <thead v-if="showHeader">
            <tr>
                <th v-for="column in items[0]" :key="column" class="border  border-gray-300/90 px-4 py-2">{{ column }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in items" :key="index" class="">
                <td v-for="(column, index2) in item" v-if="index > 0" :key="index2" class="border-b border-gray-300/90 px-4 py-2" :class="index2 == 1 ? 'border-l border-gray-300/90':''" v-html="column"></td>
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
            validator: (value) => value.length >= 2,
        },
        showHeader: {
            type: Boolean,
            required: false,
            default: true,
            
        },
    },
});
</script>

<style scoped>
tr td:nth-child(even) {
    border-left-width: 1px;
    border-color: rgba(209, 213, 219, 0.9);
}
table tr:last-child td {
    border-bottom: none;
}

table tr td:last-child {
    border-right: none;
}
</style>
