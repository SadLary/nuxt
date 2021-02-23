<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <nuxt-link to="/" class="header__logo">
          <img src="~/static/image/Logo.png" alt="">
        </nuxt-link>
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li class="header__nav-item">
              <nuxt-link class="header__nav-link" to="#">
                Shop
              </nuxt-link>
            </li>
            <li class="header__nav-item">
              <nuxt-link class="header__nav-link" to="about">
                About Us
              </nuxt-link>
            </li>
            <li class="header__nav-item">
              <nuxt-link class="header__nav-link" to="blogpost">
                Blog
              </nuxt-link>
            </li>
            <li class="header__nav-item">
              <nuxt-link class="header__nav-link" to="#">
                Sale
              </nuxt-link>
            </li>
            <li class="header__nav-item">
              <nuxt-link class="header__nav-link" to="#">
                Forum
              </nuxt-link>
            </li>
            <li class="header__nav-item">
              <nuxt-link class="header__nav-link" to="#">
                FAQ
              </nuxt-link>
            </li>
            <li class="header__nav-item">
              <nuxt-link class="header__nav-link" to="index_ref_signIn">
                Referral
              </nuxt-link>
            </li>
            <li class="header__nav-item">
              <nuxt-link class="header__nav-link" to="#">
                Contacts
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <div class="header__lung">
          <button class="header__lung-select" @click="langActive = !langActive">
            {{ lang }}
          </button>
          <ul v-if="langActive" class="header__lung-list">
            <li class="header__lung-item">
              <button class="header__lung-item-btn" @click="lang = 'Eng / USD'; langActive = false">
                Eng / USD
              </button>
            </li>
            <li class="header__lung-item">
              <button class="header__lung-item-btn" @click="lang = 'Ru / RUB'; langActive = false">
                Ru / RUB
              </button>
            </li>
          </ul>
        </div>
        <ul class="header__icons">
          <li class="header__icons-item">
            <nuxt-link to="#">
              <img src="~/static/image/search.png" alt="">
            </nuxt-link>
          </li>
          <li class="header__icons-item">
            <nuxt-link to="#">
              <img src="~/static/image/heart.png" alt="">
            </nuxt-link>
          </li>
          <li class="header__icons-item">
            <button @click="$store.commit('cart/openCart')">
              <img src="~/static/image/bag.png" alt="">
            </button>
          </li>
          <li class="header__icons-item">
            <nuxt-link to="#">
              <img src="~/static/image/profile.png" alt="">
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data () {
    return {
      lang: 'Ru / RUB',
      langActive: false
    }
  }
}
</script>
<style scoped>

  ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .header {
    font-family: Roboto;
    color: #fff;
    height: 54px;
    display: flex;
    align-items: flex-end;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    position: fixed;
    z-index: 999;
  }

  .header__inner{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .header__nav-list,
  .header__icons{
    display: flex;
  }

  .header__logo{
    margin-right: 120px;
  }

  .header__nav{
    margin-right: auto;
  }
  .header__nav-item+.header__nav-item {
    margin-left: 37px;
  }

  .header__nav-link{
    color: #fff;

  }
  .header__icons{
    margin-left: 40px;
  }

  .header__icons-item+.header__icons-item{
    margin-left: 25px;
  }
  .header__icons-item > button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  .header__lung-select{
    background-color: transparent;
    border: transparent;
    cursor: pointer;
    color: #D4D4D6;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
  }

  .header__lung-list{
    position: absolute;
    top: 100%;
  }
  .header__lung-item-btn{
    border: transparent;
    background-color: transparent;
    color: #D4D4D6;
    cursor: pointer;
  }
  .header__lung-item+.header__lung-item{
    margin-top: 5px;
  }
</style>
