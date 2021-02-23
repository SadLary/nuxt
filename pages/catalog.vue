<template>
  <div>
    <Header />
    <div class="container">
      <Filters />
      <Catalog />
      <Subscribe />
    </div>
    <Cart v-if="$store.state.cart.cartOpen" />
  </div>
</template>
<script>
import Header from '~/components/Header.vue'
import Filters from '~/components/Filters.vue'
import Catalog from '~/components/Catalog.vue'
import Subscribe from '~/components/Subscribe.vue'
import Cart from '~/components/Cart.vue'

export default {
  components: {
    Header,
    Filters,
    Catalog,
    Subscribe,
    Cart
  }
}
</script>
<style scoped>
.desktop-catalog_heading-wrapper {
  margin-top: 120px;
  display: flex;
  justify-content: flex-end;
}
.desktop-catalog_heading {
  font-size: 36px;
  line-height: 43px;
  letter-spacing: 1.5px;
}
</style>
