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


    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <Table
                :has-checkbox="true"
                :is-loading="table.isLoading"
                :is-re-search="table.isReSearch"
                :columns="table.columns"
                :rows="table.rows"
                :total="table.totalRecordCount"
                :sortable="table.sortable"
                :messages="table.messages"
            ></Table>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { defineComponent, reactive } from "vue";
  import Table from "../../components/TablePokemon.vue";
  const sampleData1 = (offst, limit) => {
    offst = offst + 1;
    let data = [];
    for (let i = offst; i <= limit; i++) {
      data.push({
        id: i,
        name: "TEST" + i,
        email: "test" + i + "@example.com",
        avatar: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+i+".svg"
      });
    }
    return data;
  };

  export default defineComponent({
    name: "List",
    components: {
      Table,
    },
    setup() {
      const table = reactive({
        isLoading: false,
        isReSearch: false,
        columns: [
          {
            label: "ID",
            field: "id",
            sortable: true,
            isKey: true,
          },
          {
            label: "Name",
            field: "name",
            sortable: true
          },
          {
            label: "Email",
            field: "email",
            sortable: true,
          },
          {
            label: "",
            field: "quick",
          },
          {
            label: "",
            field: "",
          },
        ],
        rows: sampleData1(0, 10),
        totalRecordCount: 20,
        sortable: {
          order: "id",
          sort: "asc",
        },
        messages: {
          pagingInfo: "Showing {0}-{1} of {2}",
          pageSizeChangeLabel: "Row count:",
          gotoPageLabel: "Go to page:",
          noDataAvailable: "No data",
        },
      });

      return {
        table,
      };
    },
  });
</script>

<style scoped>

</style>