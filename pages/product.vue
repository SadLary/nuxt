<!--Не нажимайте ctrl + alt + l-->
<template>
  <div id="product">
    <Header />

    <Product />

    <Story />

    <BestProposition />

    <Subscribe />

    <Footer />
  </div>
</template>

<script>
import Product from '@/components/product/Product'
import Story from '@/components/product/Story'
import Footer from '@/components/Footer'
import BestProposition from '@/components/product/Best'
import Subscribe from '@/components/Subscribe'

export default {
  name: 'ProductBody',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Subscribe,
    BestProposition,
    Footer,
    Product,
    Story
  }
}
</script>
