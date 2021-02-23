<template>
  <div class="cart_content_body_empety">
    <img src="../static/image/marijuana.png" alt="" class="cart_content_body_empety_img">
    <p class="cart_content_body_empety_text" v-if="$store.state.cart.step === 4">
      Your order has been successfully paid! We will contact you shortly and let you know about the order details. Have a nice day!
    </p>
    <p class="cart_content_body_empety_text" v-else>
      You have no items in your shopping. Let’s go shopping!
    </p>
    <nuxt-link to="/" class="cart_content_body_empety_link">
      to the webshop
    </nuxt-link>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
  .cart_content_body_empety {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 40px;
    height: 100%;
  }
  .cart_content_body_empety_text {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: #FFFFFF;
    opacity: 0.8;
    margin: 50px 0px;
    max-width: 390px;
    text-align: center;
  }
  .cart_content_body_empety_link {
    background: #17A24F;
    letter-spacing: 3.75px;
    color: #FFFFFF;
    font-family: BebasNeueBold, sans-serif;
    font-size: 20px;
    line-height: 23px;
    padding: 22px 44px;
  }
</style>
