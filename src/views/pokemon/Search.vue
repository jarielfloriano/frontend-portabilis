<template>

  <!-- breadcrumb -->
  <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
    <ol class="w-full list-none p-0 inline-flex">
      <li class="flex items-center text-blue-500">
        <a href="#" class="text-gray-700">Pokemon</a>
        <svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
      </li>
      <li class="w-full flex items-center content-between">
        <a href="#" class="text-gray-600">Adicionar</a>
      </li>
    </ol>
  </nav>
  <!-- breadcrumb end -->

  <div class="md:flex-1 p-4 rounded shadow-lg bg-white border-b border-r border-grey-dark">
    <form class="w-full" @submit.prevent="handleSubmit()">
      <div class="flex items-center justify-between">
        <div class="w-full md:w-10/12 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            API
          </label>
          <select :v-model="limit" class="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
            <option value="1">PokéApi - V2</option>
          </select>
        </div>
        <div class="w-full md:w-2/12 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Limit
          </label>
          <select ref="limit" @change="updateLimit($event)" class="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
          </select>
        </div>
        <div class="w-full md:w-2/12 lg:w-1/12px-3 mb-6 md:mb-0">
          <button class="-mb-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Listar
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
                    <img class="h-10 w-10" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${row.id}.svg`" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{row.name}}</div>
                    <div class="text-sm text-gray-500">
                      <span>Tipo</span>
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Alguma descrição legal?</div>
                <div class="text-sm text-gray-500">Sub descrição</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500">Stat 1</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500">Stat 2</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500">Stat 3</div>
              </td>
              <td class="py-3 px-6 text-center">
                <div class="flex item-center justify-center">
                  <span class="w-5 mr-2 transform hover:scale-110 hover:rotate-45 cursor-pointer">
                    <pokeboll-icon title="Capturar!" @click="capture(row)"></pokeboll-icon>
                  </span>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

  <script lang="ts">
    import {defineComponent} from "vue";
    import PokebollIcon from "../../components/Pokeboll.vue"
    import * as api from "../../services/api/api"
    import * as backend from "../../services/api/local"

    export default defineComponent({
      name: "Form2",
      components: {
        PokebollIcon
      },
      data() {
        return {
          rows: [],
          limit: 50,
          columns: [
            {
              label: "Pokémon",
              field: "pokemon"
            },
            {
              label: "Descrição",
              field: "name"
            },
            {
              label: "Stat1",
              field: "stat1"
            },
            {
              label: "Stat2",
              field: "stat2"
            },
            {
              label: "Stat3",
              field: "stat3"
            },
            {
              label: "Ações",
              field: "action",
            },
          ],
        }
      },
      methods: {
        updateLimit: function(event) {
          this.limit = event.target.value
        },
        capture: async function(object: any) {
          const res = await backend.post(object)
            .then(function (res) {
              alert('Aeeee!')
            })
            .catch(function (err) {
              console.log(err)
            })
        },
        handleSubmit: async function() {
          return this.getList(this.limit)
        },
        getList: async function (limit: number) {
          var self = this
          const response = await api.getList(this.limit)
            .then(function (response) {
              const data = response.data.results
              data.forEach(async function(pokemon: any) {
                const res = await api.getPokemonDetail(pokemon.url)
                  .then(function (res) {
                    self.rows.push(res.data)
                  })
                  .catch(function (err) {
                    console.log(err)
                  })
              })
            })
            .catch(function (error) {
              console.log(error)
            })
        },
      }
    });
</script>