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
    <section class="checkout_order_type sub_container">
      <h2 class="checkout_heading">
        Card type
      </h2>
      <div class="checkout_order_type_switch">
        <button class="checkout_order_type_switch_btn active">MASTERCARD</button>
        <button class="checkout_order_type_switch_btn">VISA</button>
        <button class="checkout_order_type_switch_btn">PAYPAL</button>
      </div>
    </section>
    <section class="checkout_payment sub_container">
      <h2 class="checkout_heading">
        credit card details
      </h2>
      <div class="checkout_payment_form">
        <div class="checkout_payment_form_input_group">
          <input type="text" class="checkout_payment_form_input_card" placeholder="CARD NUMBER" autocomplete="off">
        </div>
        <div class="checkout_payment_form_input_group_name">
          <input type="text" class="checkout_payment_form_input_card" placeholder="FULL NAME" autocomplete="off">
          <input type="text" class="checkout_payment_form_input_card" autocomplete="off">
          <input type="text" class="checkout_payment_form_input_card" autocomplete="off">
        </div>
      </div>
      <div class="checkout_payment_form_save_details">
        <label class="checkout_payment_form_save_details_input">
          <input type="checkbox" id="saveDetails">
          <label>USPS First Class Package International</label>
        </label>
      </div>
    </section>
  </div>
</template>
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
  flex: 0 0 auto;
  font-family: BebasNeueBold, sans-serif;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 2px;
}
.checkout_heading > span {
  font-family: Roboto, sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  white-space: nowrap;
  margin-top: 10px;
  opacity: 0.8;
}
.checkout_heading > span > a {
  color: #17A24F;
  text-decoration: underline;
  margin: 0px 3px;
}
.checkout_order_type {
  margin-bottom: 30px;
}
.checkout_order_type_switch {
  margin-top: 34px;
}
.checkout_order_type_switch_btn {
  width: 169px;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  padding: 15px 20px;
  margin-right: 8px;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.4);
  border: 2px solid rgba(255, 255, 255, 0.4);
}
.checkout_order_type_switch_btn.active {
  border: 2px solid #17A24F;
  color: #ffffff;
  padding: 10px 20px;
}
.checkout_payment {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.checkout_payment {
  flex: 01 auto;
}
.checkout_payment_form_input_card {
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #ffffff;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  padding: 10px 0px;
  text-align: right;
  padding-right: 68px;
  color: #ffffff;
}
.checkout_payment_form_input_card::placeholder {
  transition: 0.3s;
}
.checkout_payment_form_input_card:focus::placeholder {
  opacity: 0;
}
.checkout_payment_form_input_group_name {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  color: #ffffff;
}
.checkout_payment_form_input_group_name > .checkout_payment_form_input_card {
  width: 87px;
  padding-right: 0;
}
.checkout_payment_form_input_group_name > .checkout_payment_form_input_card:first-child {
  width: 244px;
  padding-right: 68px;
}
.checkout_payment_form_save_details {
  flex: 0 0 auto;
  margin-top: 80px;
}
.checkout_payment_form_save_details_input {
  color: #ffffff;
}
.checkout_payment_form_save_details_input > input {
  display: none;
}
.checkout_payment_form_save_details_input > label {
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
.checkout_payment_form_save_details_input > label::before {
  content: '';
  position: absolute;
  left: 0px;
  width: 16px;
  height: 16px;
  border: 2px solid #ffffff;
  pointer-events: none;
}
.checkout_payment_form_save_details_input > label::after {
  content: url('../static/image/check.png');
  position: absolute;
  left: 6px;
  opacity: 0;
  transition: 0.3s;
  pointer-events: none;
}
.checkout_payment_form_save_details_input > input:checked + label::after {
  opacity: 1;
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
