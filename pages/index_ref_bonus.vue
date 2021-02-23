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
        <li class="nav_item active">
          <nuxt-link to="index_ref_bonus">
            MY BONUS
          </nuxt-link>
        </li>
        <div class="nav_item">
          <nuxt-link to="index_ref_payment">
            PAYMENT HISTORY
          </nuxt-link>
        </div>
      </ul>
    </aside>
    <Header />
    <div class="section_followUs">
      FOLLOW US
    </div>
    <div class="loged_header">
      <h3 class="loged_heading">
        My BONUS
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
    <main class="bonus_main">
      <div class="main_item">
        <div class="bonus_heading">
          <p class="item_heading">
            Your bonus:
          </p>
          <p class="price">
            140.00
          </p>
        </div>
        <div class="bonus_desc">
          The subject of LASIK is a very interesting one.
          There is a lot to investigate and understand about the process
          of getting your vision tocorrected through laser surgery.
          I hope this article helps to point you where you need
          to go to do the best research. There are both and cons
          to consider before submitting to this type of surgery.
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

<style scoped lang="scss">
.wrapper {
  background-image: url("~static/image/refBG3.png");
}

.bonus_main {
  margin-left: 450px;
  margin-top: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  width: 50%;
}

.main_item {
  padding: 30px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.loged_header {
  margin-left: 450px;
}

.item_heading {
  font-family: BebasNeueBold, sans-serif;
  font-size: 22px;
  letter-spacing: 2px;
}

.price {
  color: #17A24F;
  font-weight: bolder;
  font-family: BebasNeueBold, sans-serif !important;
  font-size: 36px;
  letter-spacing: 1.5px;
}

.price::before {
  content: '$';
}

.bonus_desc {
  opacity: 0.6;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
}

.bonus_heading {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 1400px) {
  .loged_header {
    margin-left: 300px;
  }
}

@media screen and (max-width: 900px) {
  .loged_header {
    margin-left: 150px;
  }
  .bonus_main {
    margin-left: 250px;
  }
}

@media screen and (max-width: 760px) {
  .loged_header {
    margin-left: 50px;
  }

  .bonus_main {
    margin-top: 50px;
  }
}
</style>
