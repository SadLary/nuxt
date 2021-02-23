<template>
  <div class="cart_goodies">
    <CartGoodiesList />
    <div class="cart_goodies_total">
      <div v-if="$store.state.cart.step === 0">
        <h3 class="cart_goodies_total_price">
          subtotal:
        <span> $140.00</span>
        </h3>
        <p class="cart_goodies_total_text">
          Shipping and discount codes are added at checkout.
        </p>
      </div>
      <div class="cart_goodies_total_coupon" v-else>
        <div class="input_group">
          <input type="text" class="input_group_input" placeholder="ENTER COUPON CODE">
          <button class="input_group_btn">Aply</button>
        </div>
        <div class="cart_goodies_total_coupon_subtotal">
          <p>subtotal: <span class="subtotal_price">$140.00</span></p>
          <p>shipping: <span class="subtotal_price">-</span></p>
        </div>
        <div class="cart_goodies_total_coupon_total">
          <h3 class="cart_goodies_total_price">
            total:
          <span> $140.00</span>
          </h3>
        </div>
      </div>
      <div class="cart_goodies_total_actions">
        <nuxt-link to="/" class="cart_goodies_total_actions_btn back" v-if="$store.state.cart.step === 0">
          to shop
        </nuxt-link>
        <button class="cart_goodies_total_actions_btn back" v-else @click="$store.commit('cart/stepDecrement')">
          Back
        </button>
        <button
         class="cart_goodies_total_actions_btn next"
         v-if="$store.state.cart.step === 0"
         @click="$store.commit('cart/stepIncrement')">
          checkout
        </button>
        <button class="cart_goodies_total_actions_btn next" v-else-if="$store.state.cart.step === 3" @click="$store.commit('cart/stepIncrement')">
          Next Step
        </button>
        <button class="cart_goodies_total_actions_btn next" v-else @click="$store.commit('cart/stepIncrement')">
          Next Step
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
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
}
.cart_goodies_total {
  margin-top: 20px;
  flex: 0 0 auto;
}
.cart_goodies_total_price {
  padding: 0px 40px;
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
  padding: 0px 40px;
  font-size: 12px;
  line-height: 14px;
  opacity: 0.6;
}
.cart_goodies_total_actions {
  padding: 0px 40px;
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
  padding: 19px 0px;
  padding-top: 25px;
}
.cart_goodies_total_actions_btn.back:hover {
  background-color: #ffffff;
  color: #000000;
}
button.cart_goodies_total_actions_btn.back {
  background-color: transparent;
}
.cart_goodies_total_actions_btn.next {
  background: #17A24F;
}
.input_group {
  display: flex;
  justify-content: space-between;
  padding: 20px 40px 0px 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
}
.input_group_input {
  width: 50%;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #ffffff;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  padding: 10px 0px;
  text-align: right;
  padding-right: 68px;
}
.input_group_btn {
  border: 1px solid #17A24F;
  color: #17A24F;
  background-color: transparent;
  text-align: center;
  width: 116px;
  padding: 10px 0px;
}
.cart_goodies_total_coupon_subtotal {
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  margin-bottom: 20px;
  padding: 0px 40px 20px 40px;
}
.cart_goodies_total_coupon_subtotal > p {
  margin: 0;
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.cart_goodies_total_coupon_subtotal > p:last-child {
  margin: 0;
}
</style>
