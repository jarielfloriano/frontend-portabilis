<template>
  <div class="leading-normal tracking-normal text-gray-800" id="main-body">
    <div class="flex flex-wrap">
      <Sidebar />
      <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="sideBarOpen ? 'overlay' : ''" id="main-content">
        <Navbar />
        <div class="p-6 bg-gray-100">
          <router-view />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Sidebar from './Sidebar.vue'
  import Navbar from './Navbar.vue'
  import Footer from './Footer.vue'

  export default {
    name: 'Layout',
    computed: {
      ...mapState(['sideBarOpen'])
    },
    components: {
      Sidebar,
      Navbar,
      Footer
    }
  }
</script>