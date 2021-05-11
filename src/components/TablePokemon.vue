<template>
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <th v-for="(column, index) in columns" :key="index" scope="col" class="px-6 py-3 text-left text-xs font-medium bg-gray-200 text-gray-500 uppercase tracking-wider">
        {{ column.label }}
      </th>
    </thead>
    <tbody v-if="rows.length > 0" class="bg-white divide-y divide-gray-200">
      <tr v-for="(row, i) in rows" :key="i" class="hover:bg-gray-100 border-b-2 border-gray-100">
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
            <div class="flex-shrink-0 h-10 w-10">
              <img class="h-10 w-10" :src="row.image" alt="">
            </div>
            <div class="ml-4">
              <div class="text-sm font-medium text-gray-900">{{row.name}}</div>
              <div class="text-sm text-gray-500">{{row.type}}</div>
            </div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-gray-500">{{row.attack}}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-gray-500">{{row.defense}}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-gray-500">{{row.hp}}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              {{row.status}}
            </span>
        </td>
        <td class="py-3 px-6 text-center">
          <div class="flex item-center justify-center">
            <router-link :to="`/pokemons/remove/${row.id}`" class="w-5 mr-2 transform text-red-500 hover:text-red-700 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </router-link>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
  import {defineComponent, onMounted, ref} from "vue";
  import * as api from "../services/api/local"

  export default defineComponent({
    name: "TablePokemon",
    setup() {
      const rows = ref([]);
      onMounted(async () => {
        const res = await api.getList()
        rows.value = res.data;
      });

      return {
        rows
      };
    },
    data: function() {
      return {
        isLoading: false,
        isReSearch: false,
        columns: [
          {
            label: "Pokémon",
            field: "pokemon"
          },
          {
            label: "Ataque",
            field: "attack"
          },
          {
            label: "Defesa",
            field: "defense"
          },
          {
            label: "HP",
            field: "hp",
          },
          {
            label: "Status",
            field: "status",
          },
          {
            label: "",
            field: "",
          },
        ],
      };
    },
  });
</script>

<style scoped>

</style>