<template>
  <div class="wrapper">
    <Header />
    <div class="section_followUs">
      FOLLOW US
    </div>
    <main class="main_ref">
      <div class="main_content register">
        <h3 class="register_heading">
          Create your account
        </h3>
        <div class="main_content_inputs">
          <label>
            <input type="text" placeholder="FIRST NAME">
          </label>
          <label>
            <input type="text" placeholder="LAST NAME">
          </label>
          <label>
            <input type="text" placeholder="COUNTRY">
          </label>
          <label>
            <input type="text" placeholder="CITY">
          </label>
          <label>
            <input type="text" placeholder="EMAIL">
          </label>
          <label>
            <input type="text" placeholder="PHONE">
          </label>
        </div>
        <div class="age_checkbox_block">
          <div class="age_checkbox_content">
            <input id="check1" type="checkbox">
            <label class="age_div" for="check1">Yes, I have been 18 age</label>
          </div>
        </div>
        <div class="buttons_block reg">
          <button class="create_account_button reg">
            CREATE AN ACCOUNT
          </button>
          <button class="create_account_button google">
            <img src="~static/image/googleIcon.png" alt="Google">
          </button>
          <button class="create_account_button facebook">
            <img src="~static/image/facebookIcon.png" alt="Facebook">
          </button>
        </div>
        <div class="reg_description">
          <div class="reg_terms">
            By creating an account, you agree to our
            <nuxt-link class="terms_link" to="index_refferal">
              Terms
            </nuxt-link>
          </div>
          <div class="reg_login">
            Already have an account?
            <nuxt-link class="terms_link" to="index_ref_signIn">
              Sign in
            </nuxt-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style>

* {
  color: #FFFFFF;
  font-family: Roboto, sans-serif;
}

#check1 {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.age_checkbox_content {
  display: flex;
  justify-content: center;
  font-family: Roboto, sans-serif;
  opacity: 0.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: BebasNeueBold,sans-serif;
  font-size: 36px;
  line-height: 43px;
  text-align: center;
}

h1 {
  margin-bottom: 68px;
}

.wrapper {
  background-image: url("~static/image/refBG.png");
  width: 100%;
  height: 100vh;
  background-size: cover;
  overflow: hidden;
}

.main_ref {
  display: flex;
  justify-content: center;
}

.main_content {
  margin-top: 142px;
  width: 540px;
}

.main_content_inputs {
  display: flex;
  width: 540px;
  justify-content: space-between;
  flex-wrap: wrap;
}

.main_content_inputs input {
  background: rgba(0,0,0,0);
  border: 0 solid red;
  box-shadow: none;
  width: 256px;
  margin-bottom: 48px;
  border-bottom: 2px solid #FFFFFF;
  padding-bottom: 10px;
  opacity: 0.6;
}

.main_content_inputs input::-webkit-input-placeholder {
  text-align: center;
  color: #FFFFFF;
  font-family: Roboto,sans-serif;
  font-size: 14px;
}

.main_content_inputs input:-moz-placeholder {
  text-align: center;
  color: #FFFFFF;
  font-family: Roboto,sans-serif;
  font-size: 14px;
}

.main_content_inputs input::-moz-placeholder {
  text-align: center;
  color: #FFFFFF;
  font-family: Roboto,sans-serif;
  font-size: 14px;
}

.main_content_inputs input:-ms-input-placeholder  {
  text-align: center;
  color: #FFFFFF;
  font-family: Roboto,sans-serif;
  font-size: 14px;
}

.age_checkbox input {
  background: rgba(0,0,0,0);
}

#check1 + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
#check1 + label::before {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 2px solid #FFFFFF;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

#check1:checked + label::before {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

.buttons_block.reg {
  display: flex;
  justify-content: space-between;
  margin-top: 47px;
}

.buttons_block.reg button {
  height: 68px;
}

button {
  box-shadow: none;
  border: 0;
}

button:hover {
  cursor: pointer;
}

.create_account_button.google{
  background-color:white;
  width: 68px;
}

.create_account_button.facebook{
  background-color: #3578EA;
  width: 68px;
}

.create_account_button.reg {
  width: 360px;
  box-shadow: none;
  background-color: #17A24F;
  font-family: BebasNeueBold, sans-serif;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 4px;
}

.reg_description {
  margin-top: 67px;
  opacity: 0.8;
}

.reg_terms, .reg_login {
  text-align: center;
}

.reg_login {
  margin-top: 10px;
}

.terms_link {
  color: #17A24F;
  text-decoration: underline;
}
.terms_link:hover {
  cursor: pointer;
}

.section_followUs {
  opacity: 0.6;
  font-size: 24px;
  letter-spacing: 2px;
  color: white;
  position: absolute;
  margin-top: 87vh;
  font-family: BebasNeueBold, sans-serif;
  transform: rotate(-90deg);
}

</style
>
