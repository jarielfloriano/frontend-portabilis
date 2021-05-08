<template>
  <div class="w-full flex items-center justify-center">
    <img :src="image" alt="Logo" class="h-20 w-20" />
  </div>
</template>

<script>
import image from '../assets/logo.png'
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