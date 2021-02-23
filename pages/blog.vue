<template>
  <div>
    <Header />
    <section class="blog">
      <div class="blog__body">
        <BlogSidebar />
        <BlogBody />
      </div>
    </section>
    <Cart v-if="$store.state.cart.cartOpen" />

    <Footer />
  </div>
</template>
<script>
import BlogSidebar from '@/components/blog/Sidebar.vue'
import BlogBody from '@/components/blog/Body.vue'
import Footer from '@/components/Footer'
import Header from '~/components/Header.vue'
import Cart from '~/components/Cart.vue'

export default {
  name: 'Blog',
  components: {
    Footer,
    Header,
    BlogSidebar,
    BlogBody,
    Cart
  }
}
</script>
