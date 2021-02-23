<template>
  <section id="post">
    <Header />

    <div class="post grid">
      <div class="post__info grid--left">
        <div class="post__info-author">
          by Serhii Polyvanyi
        </div>

        <div class="post__info-header">
          <div class="post__info-subTitle">
            Science and Medicine
          </div>
          <time class="post__info-date">
            29 Jan 2018
          </time>
        </div>

        <div class="post__info-title">
          How To Combat A Bout Of Chronic Headache
        </div>

        <div class="post__info-description">
          <p>
            Some people find it hard to find the right perfume. This may smell good when this is sprayed into the air
            but this changes when this reacts with the skin. Those who are tired of this problem can stop looking and
            instead make one.
          </p>

          <p>
            The first step is to get all the materials together. A lot of people focus on the oils and the other liquids
            and forgetting the basics such as the test tubes, glass beakers and measuring cups.
          </p>

          <p>
            People should avoid using materials made of metal or plastic because these may alter the scent. Glass stir
            rods should also be used because this will allow the oils to mix better instead of just shaking it.
          </p>

          <p>
            People should avoid using materials made of metal or plastic because these may alter the scent. Glass stir
            rods should also be used because this will allow the oils to mix better instead of just shaking it.
          </p>
        </div>

        <nuxt-link to="#" class="post__backBtn btn btn--default btn--lg2">
          BACK TO BLOG
        </nuxt-link>
      </div>

      <div class="post__image grid--right">
        <img src="~/static/image/post/picrure.png" alt="">
      </div>
    </div>

    <BackBtn url="#" label="blog" />
  </section>
</template>

<script>
import BackBtn from '@/components/ui/BackBtn'

export default {
  name: 'Post',
  components: {
    BackBtn
  }
}
</script>
