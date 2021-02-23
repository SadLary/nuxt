<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__inner">
        <div v-for="list in lists" :key="list.title" class="footer__inner-group">
          <div class="footer__inner-title">
            {{ list.title }}
          </div>

          <ul class="footer__inner-links">
            <li v-for="link in list.list" :key="link.title" class="footer__inner-link">
              <nuxt-link :to="link.url">
                {{ link.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div class="footer__inner-group">
          <div class="footer__inner-title">
            SHOPS
          </div>

          <ul class="footer__inner-links">
            <li class="footer__inner-link">
              <nuxt-link to="#">
                Affiliate marketing is the latest trend online. With so many products to sell and services to offer,
              </nuxt-link>
            </li>
          </ul>

          <nuxt-link to="#" class="footer__inner-btn btn btn--default btn--default-green btn--xl1">
            See shops
          </nuxt-link>
        </div>
      </div>

      <div class="footer__copyright">
        <p class="footer__copyright-text">
          © 2018 ERORRS SEEDS
        </p>
        <nuxt-link class="footer__copyright-link" to="#">
          Terms of use / Private Police
        </nuxt-link>
        <nuxt-link class="footer__copyright-link" to="#">
          Shipping / Returns
        </nuxt-link>

        <ul class="footer__copyright-social">
          <li class="footer__copyright-icon">
            <nuxt-link to="#">
              <img src="~/static/image/social/vk.svg" alt="">
            </nuxt-link>
          </li>
          <li class="footer__copyright-icon">
            <nuxt-link to="#">
              <img src="~/static/image/social/fb.svg" alt="">
            </nuxt-link>
          </li>
          <li class="footer__copyright-icon">
            <nuxt-link to="#">
              <img src="~/static/image/social/twitter.svg" alt="">
            </nuxt-link>
          </li>
          <li class="footer__copyright-icon">
            <nuxt-link to="#">
              <img src="~/static/image/social/google.svg" alt="">
            </nuxt-link>
          </li>
          <li class="footer__copyright-icon">
            <nuxt-link to="#">
              <img src="~/static/image/social/instagram.svg" alt="">
            </nuxt-link>
          </li>
          <li class="footer__copyright-icon">
            <nuxt-link to="#">
              <img src="~/static/image/social/youtube.svg" alt="">
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      lists: [
        {
          title: 'SEEDS',
          list: [
            {
              title: 'Fimished',
              url: '#'
            },
            {
              title: 'Fimished',
              url: '#'
            },
            {
              title: 'Fimished',
              url: '#'
            },
            {
              title: 'Fimished',
              url: '#'
            },
            {
              title: 'Fimished',
              url: '#'
            }
          ]
        },
        {
          title: 'INFOS',
          list: [
            {
              title: 'Fimished',
              url: '#'
            },
            {
              title: 'Press',
              url: '#'
            },
            {
              title: 'FAQ',
              url: '#'
            },
            {
              title: 'Support',
              url: '#'
            },
            {
              title: 'Reviews',
              url: '#'
            }
          ]
        },
        {
          title: 'ES',
          list: [
            {
              title: 'About us',
              url: '#'
            },
            {
              title: 'Questions',
              url: '#'
            },
            {
              title: 'Payment methods',
              url: '#'
            },
            {
              title: 'Contacts',
              url: '#'
            },
            {
              title: 'Forum',
              url: '#'
            }
          ]
        }
      ]
    }
  }
}
</script>
