<template>
  <div class="pokemon-list">
    <!-- breadcrumb -->
    <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
      <ol class="w-full list-none p-0 inline-flex">
        <li class="flex items-center text-blue-500">
          <a href="#" class="text-gray-700">Pokemon</a>
          <svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
        </li>
        <li class="w-full flex items-center content-between">
            <a href="#" class="text-gray-600">Lista de registros</a>
        </li>
      </ol>
    </nav>
    <!-- breadcrumb end -->

    <div class="md:flex-1 p-4 rounded shadow-lg bg-white border-b border-r border-grey-dark">
      <form class="w-full" @submit.prevent="handleSubmit()">
        <div class="flex items-center justify-between">
          <div class="w-full sm:w-12/12 md:w-6/3 lg:w-6/12 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Pesquisar por nome
            </label>
            <input @blur="updateSort($event)" type="text" name="email_address" id="email_address" class="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
          </div>
          <div class="w-full md:w-3/12 lg:w-2/12 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Limite
            </label>
            <select ref="limit" @change="updateLimit($event)" class="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
              <option value="">Nops</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <div class="w-full md:w-3/12 lg:w-2/12 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Ordem
            </label>
            <select ref="order" @change="updateOrder($event)" class="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
              <option value="ASC">A-Z</option>
              <option value="DESC">Z-A</option>
            </select>
          </div>
          <div class="w-full md:w-2/12 lg:w-1/12px-3 mb-6 md:mb-0">
            <button class="-mb-6 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Pesquisar
            </button>
          </div>
        </div>
      </form>
    </div>

    <div class="flex flex-col mt-10">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
              <th v-for="(column, index) in columns" :key="index" scope="col" class="px-6 py-3 text-left text-xs font-medium bg-gray-300 text-gray-600 uppercase tracking-wider">
                {{ column.label }}
              </th>
              </thead>
              <tbody v-if="!rows.length" class="bg-white divide-y divide-gray-200">
               <tr class="hover:bg-gray-100 border-b-2 border-gray-100">
                 <td colspan="10" class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                   Não há registros
                 </td>
               </tr>
              </tbody>
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
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { defineComponent } from "vue";
  import * as backend from '../../services/api/local'

  export default defineComponent({
    name: "List",
    data() {
      return {
        rows: [],
        columns: [
          {
            label: "Pokémon",
            field: "pokemon"
          },
          {
            label: "HP",
            field: "hp"
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
            label: "Status",
            field: "status"
          },
          {
            label: "Ações",
            field: "action",
          },
        ],
        search: "",
        sort: "name",
        order: "asc",
        page: 1,
        limit: null,
      }
    },
    methods: {
      updateLimit: function(event) {
           this.limit = event.target.value
      },
      updateSort: function(event) {
        this.sort = event.target.value
      },
      updateOrder: function(event) {
        this.order = event.target.value
      },
      handleSubmit: async function() {
        return this.getList()
      },
      getList: async function () {
        var self = this
        const response = await backend.getList(this.limit, this.sort, this.order)
          .then(function (response) {
            self.rows = response.data
          })
          .catch(function (error) {
            console.log(error)
          })
      },
    },
  });
</script>

<style scoped>

</style>