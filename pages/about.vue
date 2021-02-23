<template>
  <div class="about">
    <Header />

    <History />

    <Store />

    <Subscribe />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Subscribe from '@/components/Subscribe'
import History from '@/components/about/History'
import Store from '@/components/about/Store'
import Header from '~/components/Header.vue'

export default {
  components: {
    Subscribe,
    Footer,
    Header,
    Store,
    History
  }
}
</script>
