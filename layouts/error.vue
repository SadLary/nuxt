/* eslint-disable */
<template>
  <div>
    <Header />
    <section class="main">
      <div class="container">
        <h1 class="not-found__title">
          {{ error.statusCode }}
        </h1>
        <p v-if="error.statusCode === 404" class="not-found__text">
          Oops, someone already used this page. <br>
          We will help you find what you are looking for. Let's do it!
        </p>
        <p v-else class="not-found__text">
          {{ error.message }}
        </p>
        <nuxt-link v-if="error.statusCode === 404" class="not-found__button" to="/">
          to the webshop
        </nuxt-link>
      </div>
    </section>
  </div>
</template>
<script>
import Header from '~/components/Header.vue'
export default {
  components: {
    Header
  },
  props: ['error']
}
</script>

<style scoped>
  .container{
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .main{
    width: 100vw;
    height: 100vh;
    background-image: url('../static/image/bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .not-found__title{
    font-family: BebasNeueBold;
    font-size: 300px;
    line-height: 352px;
    text-align: center;
    letter-spacing: 27.2727px;
    color: #FFFFFF;
    margin: 0;
    padding-top: 147px;
    margin-bottom: 56px;
  }

  .not-found__text {
    font-family: Roboto;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
    margin: 0 auto;
    margin-bottom: 45px;
  }

  .not-found__button{
    display: inline-block;
    background: #17A24F;
    padding: 26px 44px;
    margin: 0 auto;
    border: transparent;
    cursor: pointer;
    font-family: BebasNeueBold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 3.75px;
    color: #FFFFFF;
  }
</style>
