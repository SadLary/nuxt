<template>
  <div class="wrapper two">
    <aside class="nav_aside">
      <ul>
        <div class="nav_item">
          <nuxt-link to="index_ref_cd">
            CONTACT DETAILS
          </nuxt-link>
        </div>
        <li class="nav_item active">
          <nuxt-link to="index_ref_link">
            REFERRAL LINK
          </nuxt-link>
        </li>
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
        Referral<br> link
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
        <div class="link_section first">
          <div class="link_section_content">
            <div class="link_section_block first">
              <p>
                Want to make your passive income more profitable? Don't miss out on the
                opportunity the digital economy is now giving. Have friends interested
                in buying digital assets? Ice Rock mining has an ultra-simple
                and profitable solution.
              </p>
            </div>
            <div class="link_section_block second">
              <p>
                Your referral link
              </p>
              <div class="copy_link_content">
                <p class="link_text">
                  http://somelink
                </p>
                <img class="copy_button" src="~static/image/ref/copy.png" alt="copy" width="20px" height="24px">
              </div>
              <div class="share_div">
                <p>Share link:</p>
                <div class="image_group">
                  <img src="~static/image/ref/in.png">
                  <img src="~static/image/ref/facebook.png">
                  <img src="~static/image/ref/telegram.png">
                  <img src="~static/image/ref/twitter.png">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="link_section second">
          <div class="link_section_content second">
            <p>
              This is how you ensure a lifetime of stable income:
            </p>
            <div class="paragraph">
              <img src="~static/image/ref/man.png"><p>Sign up</p>
            </div>
            <div class="paragraph">
              <img src="~static/image/ref/comment.png" width="20px" height="20px"><p>Share your referral link on
              the social network, or send it to your friend directly.</p>
            </div>
            <div class="paragraph">
              <img src="~static/image/ref/percent.png" width="20px" height="20px"><p>Receive 8% of your friend's income, when your
              friend registers and purchases a contract.</p>
            </div>
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

<style scoped lang="scss">

.link_section_content {
  margin: 35px;
  p {
    font-family: Roboto, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0;
    text-align: left;
  }
}

.loged_main_content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 75%;
}

.link_section {
  background-color: #17A24F;
  width: 355px;
}

.link_section.second {
  height: 365px;
  p {
    font-family: BebasNeueBold, sans-serif;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: 0.035em;
  }
}

.link_section_block {
  padding-bottom: 18px;
}

.link_section_block.second {
  padding-top: 18px;
  padding-bottom: 0;
  border-top: 1px solid white;
}

.copy_link_content {
  padding: 10px 12px;
  background-color: white;
  display: flex;
  justify-content: space-between;
}

.copy_button {
  margin-top: 3px;
}

.link_text {
  color: #818893;
  font-family: Roboto, sans-serif !important;
  font-size: 14px !important;
  margin: 0;
}

.share_div {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  p {
    margin: 0;
    opacity: 0.5;
    font-family: Roboto, sans-serif !important;
    font-size: 13px !important;
  }
}

.paragraph {
  display: flex;
  justify-content: left;
  img {
    height: 20px;
    width: 23px;
    margin-right: 20px;
  }
  p {
    font-family: Roboto, sans-serif !important;
    font-size: 13px !important;
  }
}

@media screen and (max-width: 1300px) {
  .loged_main {
    margin-left: 225px;
  }
  .loged_main_content {
    flex-wrap: nowrap;
    width: 80%;
  }

  .link_section.second {
    height: 400px;
  }
}

@media screen and (max-width: 953px) {
  .loged_main_content {
    display: block;
    width: 90%;
  }
  .link_section {
    min-height: 320px;
    width: 100%;
  }

  .loged_main {
    margin-left: 200px;
  }

  .link_section.second {
    height: 280px;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  .link_section_content {
    padding: 12px;
    margin: 8px;
  }
}
</style>
