<template>
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <th v-for="(column, index) in columns" :key="index" scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        {{ column.field }}
      </th>
    </thead>
    <tbody v-if="rows.length > 0" class="bg-white divide-y divide-gray-200">
      <tr v-for="(row, i) in rows" :key="i">
        <td v-for="(col, j) in columns" :key="j" class="px-6 py-4 whitespace-nowrap">
          <div v-if="col.display" v-html="col.display(row)"></div>
          <span v-else>{{ row[col.field] }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  export default defineComponent({
    name: "my-table",
    props: {
      isLoading: {
        type: Boolean,
        require: true,
      },
      columns: {
        type: Array,
        default: () => {
          return [];
        },
      },
      rows: {
        type: Array,
        default: () => {
          return [];
        },
      },
    },
  });
</script>

<style scoped>

</style>