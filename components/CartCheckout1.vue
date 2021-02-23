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
        Order type
        <span>Already have a Referal Profile?<nuxt-link to="/">Click here</nuxt-link>to login and checkout faster</span>
      </h2>
      <div class="checkout_order_type_switch">
        <button class="checkout_order_type_switch_btn active">FULL ORDER</button>
        <button class="checkout_order_type_switch_btn">FAST ORDER</button>
      </div>
    </section>
    <section class="checkout_address sub_container">
      <h2 class="checkout_heading">
        Shipping address
      </h2>
      <div class="checkout_address_form">
        <div class="checkout_address_form_input_group">
          <input type="text" class="checkout_address_form_input" placeholder="FIRST NAME">
          <input type="text" class="checkout_address_form_input" placeholder="LAST NAME">
        </div>
        <div class="checkout_address_form_input_group">
          <input type="text" class="checkout_address_form_input" placeholder="ADRESS">
          <input type="text" class="checkout_address_form_input" placeholder="APARTMENT / SUITE">
        </div>
        <div class="checkout_address_form_input_group">
          <input type="text" class="checkout_address_form_input" placeholder="CITY">
          <input type="text" class="checkout_address_form_input" placeholder="STATE / PROVINCE">
        </div>
        <div class="checkout_address_form_input_group">
          <input type="text" class="checkout_address_form_input" placeholder="COUNTRY">
          <input type="text" class="checkout_address_form_input" placeholder="ZIP / POSTAL CODE">
        </div>
        <h2 class="checkout_heading">
          Shipping address
        </h2>
        <div class="checkout_address_form_input_group">
          <input type="text" class="checkout_address_form_input" placeholder="EMAIL">
          <input type="text" class="checkout_address_form_input" placeholder="PHONE">
        </div>
        <div class="checkout_address_form_input_group">
          <input type="checkbox" id="emailNews" class="checkout_address_form_input_checkbox">
          <label for="emailNews">
            Subscribe to Newsletter
          </label>
          <input type="checkbox" id="phoneNews" class="checkout_address_form_input_checkbox">
          <label for="phoneNews">
            Subscribe to Newsletter
          </label>
        </div>
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
  margin-right: 50px;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.4);
  border: 2px solid rgba(255, 255, 255, 0.4);
}
.checkout_order_type_switch_btn.active {
  border: 2px solid #17A24F;
  color: #ffffff;
  padding: 10px 20px;
}
.checkout_address {
  margin: 0;
  margin-top: 20px;
}
.checkout_address > .checkout_heading {
  margin: 0;
  margin-bottom: 15px;
}
.checkout_address_form > .checkout_heading {
  margin-bottom: 20px;
  margin-top: 40px;
}
.checkout_address_form_input_group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.checkout_address_form_input {
  width: 45%;
  text-align: center;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #ffffff;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  padding: 10px 0px;
}
.checkout_address_form_input::placeholder {
  transition: 0.3s;
}
.checkout_address_form_input:focus::placeholder {
  opacity: 0;
}
.checkout_address_form_input_checkbox  {
  display: none;
}
.checkout_address_form_input_group > label {
    width: 39.3%;
    color: #ffffff;
    padding-left: 30px;
    position: relative;
}
.checkout_address_form_input_group > label::before {
  content: '';
  position: absolute;
  left: 0;
  width: 16px;
  height: 16px;
  border: 2px solid #ffffff;
}
.checkout_address_form_input_group > label::after {
  content: url('../static/image/check.png');
  position: absolute;
  left: 6px;
  opacity: 0;
  transition: 0.3s;
}
.checkout_address_form_input_checkbox:checked + label::after {
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
