<template>
  <div class="wrapper">
    <aside class="nav_aside">
      <ul>
        <div class="nav_item">
          <nuxt-link to="index_ref_cd">
            CONTACT DETAILS
          </nuxt-link>
        </div>
        <div class="nav_item">
          <nuxt-link to="index_ref_link">
            REFERRAL LINK
          </nuxt-link>
        </div>
        <div class="nav_item">
          <nuxt-link to="index_ref_bonus">
            MY BONUS
          </nuxt-link>
        </div>
        <li class="nav_item active">
          <nuxt-link to="index_ref_payment">
            PAYMENT HISTORY
          </nuxt-link>
        </li>
      </ul>
    </aside>
    <Header />
    <div class="section_followUs">
      FOLLOW US
    </div>
    <div class="loged_header">
      <h3 class="loged_heading">
        PAYMENT<br>HISTORY
      </h3>
      <p>
        In order to discuss the general function
        of the logo, we must firstly identify and define the
        environment where this will have to
        fulfill its function. The environment
        is called brand and the definition is as follows:
        the brand is a collection of ideas and images.
      </p>
    </div>
    <main class="main_history">
      <div class="rar"></div>
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
.wrapper {
  background-image: url("~static/image/refBG4.png");
}

</style>
