<template>
  <section class="cart_wrapper">
    <CartCheckout1 v-if="$store.state.cart.step===1" />
    <CartCheckout2 v-else-if="$store.state.cart.step===2" />
    <CartCheckout3 v-else-if="$store.state.cart.step===3" />
    <div class="cart">
      <div class="cart_heading">
        <h2 class="cart_heading_text">
          shopping cart: {{ $store.state.cart.cart.length }} <span>items</span>
        </h2>
        <button class="cart_heading_close_btn" @click="$store.commit('cart/openCart')" />
      </div>
      <div class="cart_content_body">
        <CartEmpety v-if="$store.state.cart.cart.length === 0" />
        <CartWithGoodies v-else />
      </div>
    </div>
  </section>
</template>
<script>
import CartEmpety from '~/components/CartEmpety.vue'
import CartWithGoodies from '~/components/CartWithGoodies.vue'
import CartCheckout1 from '~/components/CartCheckout1.vue'
import CartCheckout2 from '~/components/CartCheckout2.vue'
import CartCheckout3 from '~/components/CartCheckout3.vue'

export default {
  components: {
    CartEmpety,
    CartWithGoodies,
    CartCheckout1,
    CartCheckout2,
    CartCheckout3
  }
}
</script>
<style scoped>
  .cart_wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    background-color: rgba(0, 0, 0, 0.5);
    transition: 0.3s;
    animation: cartanim 0.3s;
  }
  .cart {
    background: #070808;
    min-width: 540px;
    margin: 0 !important;
  }
  .cart_heading {
    display: flex;
    justify-content: space-between;
    padding: 30px 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  .cart_heading_text {
    font-family: BebasNeueBold, sans-serif;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2px;
    color: #FFFFFF;
    opacity: 0.8;
    margin: 0;
  }
  .cart_heading_text > span {
    font-family: Roboto, sans-serif;
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    opacity: 0.8;
    text-transform: lowercase;
  }
  .cart_heading_close_btn {
    width: 24px;
    height: 24px;
    background: crimson;
    background-color: transparent;
    position: relative;
    border: none;
  }
  .cart_heading_close_btn::before {
    content: '';
    position: absolute;
    top: 11px;
    left: 0;
    width: 24px;
    height: 2px;
    background-color: #FFFFFF;
    transform: rotate(45deg);
  }
  .cart_heading_close_btn::after {
    content: '';
    position: absolute;
    top: 11px;
    left: 0;
    width: 24px;
    height: 2px;
    background-color: #FFFFFF;
    transform: rotate(-45deg);
}
.cart_content_body {
    height: 100%;
    display: flex;
    flex-direction: column;
}
@keyframes cartanim {
    0% {
      left: -1000px;
    }
    100% {
      left: 0px;
    }
  }
</style>
