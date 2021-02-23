<template>
  <div class="checkout_wrapper">
    <section class="checkout sub_container">
      <div class="checkout_header">
        <nuxt-link to="/" class="checkout_header_logo">
          <img src="~/static/image/Logo.png" alt="" />
        </nuxt-link>
        <button class="checkout_header_breadscrums_link active" @click="$store.commit('cart/setStep', 1)">
          Customer information
        </button>
        <button class="checkout_header_breadscrums_link active" @click="$store.commit('cart/setStep', 2)">
          Shipping method
        </button>
        <button class="checkout_header_breadscrums_link active" @click="$store.commit('cart/setStep', 3)">
          Payment method
        </button>
        <button class="checkout_header_breadscrums_link">
          Coplete order
        </button>
      </div>
    </section>
    <section class="checkout_shiping_method sub_container">
      <h2 class="checkout_heading">
        Shipping method
      </h2>
      <div class="checkout_shiping_metod_form">
        <label class="checkout_shiping_metod_form_input_group">
          <div class="checkout_shiping_metod_form_input">
            <input type="checkbox">
            <label class="shipping_method_name">Free Shipping</label>
            <span>7 to 21 business days</span>
          </div>
          <span class="checkout_shiping_metod_form_input_group_price">Free</span>
        </label>
        <label class="checkout_shiping_metod_form_input_group">
          <div class="checkout_shiping_metod_form_input">
            <input type="checkbox">
            <label class="shipping_method_name">USPS First Class Package International </label>
            <span>7 to 21 business days</span>
          </div>
          <span class="checkout_shiping_metod_form_input_group_price">$13.99</span>
        </label>
        <label class="checkout_shiping_metod_form_input_group">
          <div class="checkout_shiping_metod_form_input">
            <input type="checkbox">
            <label class="shipping_method_name">USPS Priority Mail International </label>
            <span>7 to 21 business days</span>
          </div>
          <span class="checkout_shiping_metod_form_input_group_price">$57.99</span>
        </label>
        <label class="checkout_shiping_metod_form_input_group">
          <div class="checkout_shiping_metod_form_input">
            <input type="checkbox">
            <label class="shipping_method_name">USPS Priority Mail Express International </label>
            <span>3 to 5 business days</span>
          </div>
          <span class="checkout_shiping_metod_form_input_group_price">$75.08</span>
        </label>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  methods: {
    selectShipping: (event) => {
      event.target.firstElementChild.firstElementChild.setAttribute('checked', true)
    }
  }
}
</script>
<style scoped>
.checkout_wrapper {
  width: 100%;
  position: relative;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: cartanim 0.3s;
}
.sub_container {
  width: 540px;
}
.checkout_header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 33px 0px;
}
.checkout_header_logo {
  position: absolute;
  left: -150px;
  top: 28px;
}
.checkout_header_breadscrums_link {
  border: none;
  outline: none;
  background-color: transparent;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  padding: 0;
  padding-bottom: 3px;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  position: relative;
}
.checkout_header_breadscrums_link.active {
  border-bottom: 1px solid #ffffff;
}
.checkout_header_breadscrums_link::after {
  content: "";
  position: absolute;
  right: -41px;
  top: 6px;
  height: 2px;
  width: 24px;
  background-color: #ffffff;
  opacity: 0.2;
}
.checkout_header_breadscrums_link:last-child::after {
  display: none;
}
.checkout_heading {
  font-family: BebasNeueBold, sans-serif;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 2px;
}
.checkout_shiping_metod_form_input_group {
  display: flex;
  justify-content: space-between;
  padding: 40px 0px;
  border-top: 1px solid #ffffff;
  cursor: pointer;
  color: #ffffff;
}
.checkout_shiping_metod_form_input_group:last-child {
  border-bottom: 1px solid #ffffff;
}
.checkout_shiping_metod_form_input {
  display: flex;
  flex-direction: column;
  pointer-events: none;
}
.checkout_shiping_metod_form_input > input {
  display: none;
  pointer-events: none;
}
.checkout_shiping_metod_form_input > span {
  padding-left: 30px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  pointer-events: none;
}
.shipping_method_name {
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 8px;
  position: relative;
  padding-left: 30px;
  pointer-events: none;
}
.shipping_method_name::before {
  content: '';
  position: absolute;
  left: 0px;
  width: 16px;
  height: 16px;
  border: 2px solid #ffffff;
  pointer-events: none;
}
.shipping_method_name::after {
  content: url('../static/image/check.png');
  position: absolute;
  left: 6px;
  opacity: 0;
  transition: 0.3s;
  pointer-events: none;
}
.checkout_shiping_metod_form_input > input:checked + label::after {
  opacity: 1;
}
.checkout_shiping_metod_form_input_group_price {
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
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
