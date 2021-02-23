<template>
  <div class="wrapper">
    <Header />
    <div class="section_followUs">
      FOLLOW US
    </div>
    <main class="main_ref">
      <div class="main_content">
        <h2 class="reset_header">
          Reset your password here
        </h2>
        <div class="main_content_inputs reset">
          <div class="reset_flex">
            <label>
              <input class="reset_input" placeholder="EMAIL" type="text">
            </label>
          </div>
        </div>
        <div class="reset_div">
          <button class="reset_password">
            <p>reset password</p>
          </button>
        </div>
        <div class="return_block">
          <p>
            Return to
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

.reset_div {
  display: flex;
  justify-content: center;
}

.reset_password {
  width: 360px;
  height: 68px;
  background-color: #17A24F;
  margin-top: 66px;
}

.reset_password p {
  font-family: BebasNeueBold, sans-serif;
  letter-spacing: 3.75px;
  font-size: 20px;
}

.main_content_inputs.reset {
  display: flex;
}

.main_content_inputs.reset input {
  width: 360px !important;
}

.reset_header {
  font-size: 40px;
  margin-bottom: 90px;
}

.return_block {
  display: flex;
  justify-content: center;
  margin-top: 193px;
  opacity: 0.8;
  font-size: 16px;
}

.reset_flex {
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
