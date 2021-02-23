<template>
  <div class="wrapper">
    <div class="section_followUs">
      FOLLOW US
    </div>
    <Header />
    <main class="main_ref">
      <div class="main_content">
        <h2 class="login_header">
          Sign in
        </h2>
        <div class="main_content_inputs login">
          <label>
            <input class="login_input" type="text" placeholder="EMAIL">
          </label>
          <label>
            <input class="login_input" type="text" placeholder="PASSWORD">
          </label>
          <div class="forgotPass">
            <div>
              <nuxt-link class="loginLink" to="index_ref_resetPassword">
                Forgot password?
              </nuxt-link>
            </div>
          </div>
          <div class="button_group">
            <button class="button_login first">
              <nuxt-link to="index_ref_cd">
                SIGN IN
              </nuxt-link>
            </button>
            <button class="button_login second">
              <img src="~static/image/googleIcon.png" alt="Google">
            </button>
            <button class="button_login third">
              <img src="~static/image/facebookIcon.png" alt="Facebook">
            </button>
          </div>
        </div>
        <div class="have_account">
          <p>
            Don't have an account?
            <nuxt-link class="terms_link" to="index_ref">
              Sign up
            </nuxt-link>
          </p>
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

<style scoped>

.main_content_inputs {
  justify-content: center;
}

.login_input {
  width: 360px;
}

.login_header {
  font-size: 44px;
}

.forgotPass {
  width: 100%;
  display: flex;
  justify-content: center;
  opacity: 0.8;
}

.button_group {
  width: 360px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.button_login.first {
  width: 100%;
  height: 68px;
  background-color: #17A24F;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}

.button_login.second {
  background-color: white;
  width: 49%;
  margin-right: 0.5%;
  height: 59px;
}

.button_login.third {
  background-color: #3578EA;
  width: 49%;
  margin-left: 0.5%;
  height: 59px;
}

.button_login.first a {
  font-family: BebasNeueBold, sans-serif;
  margin-top: 20px;
  font-size: 24px;
  letter-spacing: 3.75px;
  opacity: 1;
}

.have_account p {
  text-align: center;
  margin-top: 110px;
  font-size: 16px;
  opacity: 0.8;
}

</style>
