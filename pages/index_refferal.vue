<template>
  <div class="wrapper">
    <Header />
    <div class="section_followUs">
      FOLLOW US
    </div>
    <main class="main_ref">
      <div class="referral_start_content">
        <h2 class="heading_ref">
          Referral
        </h2>
        <p class="p_referral">
          In order to discuss the general function of the logo,
          we must firstly identify and
          define the environment where this
          will have to fulfill its function.
          The environment is called brand and the definition is as follows:
          the brand is a collection of ideas and images.
        </p>
        <button class="link_signIn">
          <nuxt-link to="index_ref_signIn">
            sign in referral
          </nuxt-link>
        </button>
        <div class="or_block">
          <span class="or">
            or
          </span>
        </div>
        <button class="link_signUp">
          <nuxt-link to="index_ref">
            register as a referral
          </nuxt-link>
        </button>
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
.referral_start_content {
  margin-top: 142px;
  width: 360px;
  text-align: center;
}

.heading_ref {
  font-size: 36px;
  letter-spacing: 1.5px;
}

.p_referral {
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.5px;
  text-align: left;
  opacity: 0.8;
}

.link_signIn, .link_signUp {
  background-color: #17A24F;
  width: 360px;
  height: 68px;
  font-size: 22px;
  line-height: 23px;
  letter-spacing: 3.5px;
  text-align: center;
  margin-top: 30px;
}

.link_signUp {
  background-color: rgba(0, 0, 0, 0);
  border: 3px solid white;
  margin-top: 0;
}

.link_signIn a, .link_signUp a {
  font-family: BebasNeueBold, sans-serif;
}

.or {
  color: white;
  opacity: 0.3;
  text-align: center;
  font-family: BebasNeueBold, sans-serif;
  font-size: 22px;
  letter-spacing: 1px;
}

.or_block{
  margin: 14px;
}
</style>
