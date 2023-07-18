<template lang="">
  <div>
    <navbar-comp />
    <div>
      <router-view />
    </div>
  </div>
  <footbar-comp/>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'
  import { useProductStore } from './store/product'
  import { useCartStore } from './store/cart'
  
   export default {
    mounted() {
      const productStore = useProductStore()
      productStore.fetch_products()
      const cartStore = useCartStore()
      cartStore.loadFromLocalStorage()
    },
    components: {
      NavbarComp: Navbar,
      FootbarComp: Footer,
    }
  }
</script>

<style>
</style>