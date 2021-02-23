<template>
  <div>
    <Header />
    <div class="container">
      <FilterPanel />
      <Catalog />
      <FollowUs />
    </div>
    <Cart v-if="$store.state.cart.cartOpen" />
  </div>
</template>
<script>
import FilterPanel from '@/components/Filter'
import Catalog from '@/components/Catalog.vue'
import FollowUs from '@/components/ui/FollowUs'
import Header from '~/components/Header.vue'
import Cart from '~/components/Cart.vue'

export default {
  components: {
    FilterPanel,
    Header,
    Catalog,
    FollowUs,
    Cart
  }
}
</script>
