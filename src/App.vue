<template>
  <Layout />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from './components/layout/default/Init.vue'

export default defineComponent({
  name: 'App',
  components: {
    Layout
  }
})
</script>
