<template>
  <div class="home">
    <Header />

    <HomeFirst />

    <TopProduct />

    <Footer />
  </div>
</template>
<script>
import HomeFirst from '@/components/home/HomeFirst'
import TopProduct from '@/components/home/TopProduct'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    TopProduct,
    Header,
    Footer,
    HomeFirst
  }
}
</script>
