<template>
  <div class="wrapper two">
    <aside class="nav_aside">
      <ul>
        <li class="nav_item active">
          <nuxt-link to="index_ref_cd">
            CONTACT DETAILS
          </nuxt-link>
        </li>
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
        Contact<br> Details
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
    <main class="loged_main">
      <div class="loged_main_content">
        <div class="main_content_inputs loged">
          <label>
            <p>
              FIRST NAME
            </p>
            <input type="text" placeholder="Serhii">
          </label>
          <label>
            <p>
              LAST NAME
            </p>
            <input type="text" placeholder="Polyvanyi">
          </label>
          <label>
            <p>
              COUNTRY
            </p>
            <input type="text" placeholder="Polyvanyi">
          </label>
          <label>
            <p>
              CITY
            </p>
            <input type="text" placeholder="Kharkiv">
          </label>
          <label>
            <p>
              EMAIL
            </p>
            <input type="text" placeholder="panpolevan@gmail.com">
          </label>
          <label>
            <p>
              PHONE
            </p>
            <input type="text" placeholder="342-935-1743">
          </label>
          <label>
            <p>
              PASSWORD
            </p>
            <input type="password" placeholder="•••••••••••••••••••••">
          </label>
          <button class="save_changes_button">
            change password
          </button>
          <button class="save_changes_button second">
            save changes
          </button>
        </div>
        <button class="sign_out">
          sign out
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

<style>
.wrapper.two {
  background-image: url("~static/image/refBG2.png");
  overflow-y: scroll;
}

.nav_aside {
  position: absolute;
  margin-left: 37px;
  margin-top: 340px;
  width: 200px;
}

.nav_item {
  margin-bottom: 37px;
}

.nav_aside ul li {
  list-style-type: none;
  opacity: 1;
}

.nav_aside ul li:before {
  content: '—';
}

.nav_item {
  font-family: Roboto, sans-serif;
  opacity: 0.6;
  font-weight: 550;
}

.loged_header {
  margin-left: 260px;
  margin-top: 105px;
  display: flex;
  justify-content: space-between;
}

.loged_heading {
  text-align: left;
  width: 300px;
  font-size: 36px;
  line-height: 43px;
  letter-spacing: 1.5px;
}

.loged_header p {
  min-width: 450px;
  max-width: 600px;
  height: 140px;
  margin-right: 210px;
  margin-left: 50px;
  opacity: 0.8;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
}

.loged_main {
  margin-left: 350px;
  margin-top: 40px;
}

.loged_main_content {
  width: 540px;
}

.main_content_inputs label p {
  text-align: center;
  font-size: 14px;
}

.main_content_inputs.loged label {
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
}

.main_content_inputs.loged label input {
  margin: 0;
}

.main_content_inputs.loged {
  width: 570px;
}

.save_changes_button {
  font-family: BebasNeueBold,sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-align: center;
  height: 70px;
  width: 256px;
  color: #17A24F;
  border: #17A24F 3px solid;
  background-color: rgba(0,0,0,0);
  margin-top: 18px;
  margin-right: 10px;
}

.save_changes_button.second {
  background-color: #17A24F;
  color: white;
  font-size: 20px;
  letter-spacing: 3.75px;
  margin-right: 0;
}

.sign_out {
  background-color: #2e2e2e;
  width: 180px;
  height: 56px;
  margin-top: 60px;
  font-family: BebasNeueBold, sans-serif;
  margin-bottom: 30px;
}

@media screen and (max-width: 920px) {
  .nav_aside {
    margin-left: -28px;
  }
  .loged_main {
    margin-left: 187px;
  }
}

@media screen and (max-width: 860px){
  .loged_header{
    margin-left: 40px;
  }

  .loged_main {
    margin-left: 200px;
  }

  .loged_header p {
    min-width: 65vw;
  }

  .main_content_inputs.loged {
    display: flex;
    justify-content: left;
  }

  .main_content_inputs.loged label input {
    width: 63vw;
  }

  .save_changes_button {
    width: 63vw;
  }
}

@media screen and (max-width: 580px) {
  .save_changes_button {
    width: 63vw !important;
  }
}
</style>
