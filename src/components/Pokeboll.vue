<template>
  <div class="w-full flex items-center justify-center">
      <img :src="image" alt="Pokebool" class="w-16 h-16" />
  </div>
</template>

<script>
import image from '../assets/img/pokeball.svg'
export default {
  data: function () {
    return {
      image: image
    }
  }
}
</script>