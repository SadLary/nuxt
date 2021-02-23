<template>
  <div class="cart_goodies">
    <CartGoodiesList />
    <div class="cart_goodies_total">
      <div class="cart_godies_total_coupon">
        <input class="cart_godies_total_coupon_input" type="text" placeholder="ENTER COUPON CODE">
        <button class="cart_godies_total_coupon_btn">apply</button>
      </div>
      <h3 class="cart_goodies_total_price">
        subtotal:
        <span> $140.00</span>
      </h3>
      <p class="cart_goodies_total_text">
        Shipping and discount codes are added at checkout.
      </p>
      <div class="cart_goodies_total_actions">
        <nuxt-link to="/" class="cart_goodies_total_actions_btn back">
          to shop
        </nuxt-link>
        <button class="cart_goodies_total_actions_btn next">
          checkout
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import CartGoodiesList from '~/components/CartGoodiesList.vue'
export default {
  components: {
    CartGoodiesList
  }
}
</script>
<style scoped>
.cart_goodies {
  height: 100%;
}
.cart_goodies_total {
  padding: 0px 40px;
  margin-top: 20px;
}
.cart_goodies_total_price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  margin-bottom: 7px;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2px;
  color: #FFFFFF;
  opacity: 0.8;
}
.cart_goodies_total_price > span {
  font-size: 22px;
  line-height: 26px;
  text-align: right;
  letter-spacing: 2px;
  opacity: 1;
}
.cart_goodies_total_text {
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  opacity: 0.6;
}
.cart_goodies_total_actions {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
}
.cart_goodies_total_actions_btn {
  font-size: 20px;
  letter-spacing: 3.75px;
  padding: 26px 0px;
  width: 218px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.3s;
  color: #ffffff;
}
.cart_goodies_total_actions_btn.back {
  border: 2px solid #ffffff;
  padding: 22px 0px;
}
.cart_goodies_total_actions_btn.back:hover {
  background-color: #ffffff;
  color: #000000;
}
.cart_goodies_total_actions_btn.next {
  background: #17A24F;
}
</style>
