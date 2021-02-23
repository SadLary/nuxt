<template>
  <section class="home-first">
    <div class="home-first__info">
      <div class="home-first__info-title">
        Errors seeds SILver
      </div>

      <div class="home-first__info-description">
        Food is a cheaper, faster, better, more delicious way to positively affect your health. Our meals are
        personalized for you using your DNA, gut biome, and lifestyle data.
      </div>

      <nuxt-link to="#" class="home-first__info-link btn btn--green btn--lg1">
        to the webshop
      </nuxt-link>
    </div>

    <img class="home-first__seed" src="~/static/image/home/seed.png" alt="">
    <img class="home-first__smoke" src="~/static/image/home/smoke.png" alt="">
    <img class="home-first__bg" src="~/static/image/home/bg.png" alt="">

    <FollowUsComponent />
  </section>
</template>

<script>
import FollowUsComponent from '@/components/ui/FollowUs'

export default {
  name: 'HomeFirst',
  components: {
    FollowUsComponent
  }
}
</script>
