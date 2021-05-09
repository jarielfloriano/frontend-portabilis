<template>
  <div class="w-full flex items-center justify-center">
    <router-link to="/" class="w-full flex items-center justify-center">
      <img :src="image" alt="Logo" class="h-16" />
    </router-link>
  </div>
</template>

<script>
import image from '../assets/img/pokeapi.png'
export default {
  data: function () {
    return {
      image: image
    }
  }
}
</script>

<style scoped>

</style>