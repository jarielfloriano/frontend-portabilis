<template>
  <div class="w-screen bg-gray-100 flex items-center">
    <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
      <div class="max-w-md">
        <div class="text-5xl font-dark font-bold">404</div>
        <p class="text-2xl md:text-3xl font-light leading-normal">Página não encontrada. </p>
        <router-link to="/" class="text-gray-700 w-full">
          <button class="mt-8 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Me leva para home! :(
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>