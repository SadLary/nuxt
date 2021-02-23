<template>
  <div class="blog__main">
    <BlogMobileMenu />

    <div class="blog__header">
      <div class="blog__header-title">
        BLOG
      </div>

      <div class="blog__header-text">
        Food is a cheaper, faster, better, more delicious way to positively affect your health. Our meals are
        personalized for you using your DNA, gut biome.
      </div>
    </div>

    <ul class="blog__list masonry">
      <li class="masonry__item">
        <article class="blog__post article article--big">
          <div class="article__info">
            <div class="article__info-title">
              Natural Home Remedies For Oily Skin
            </div>
            <time class="article__info-time">
              19 Mar 2018
            </time>
          </div>

          <div class="article__link">
            <nuxt-link class="btn btn--green btn--md1" to="/post">
              read more
            </nuxt-link>
          </div>

          <img src="~/static/image/blog/blog-1.png" class="article__bg" alt="">
        </article>
      </li>
      <li class="masonry__item">
        <article class="blog__post article">
          <div class="article__info">
            <div class="article__info-title">
              Diet And Cure For Candida Infections
            </div>
            <time class="article__info-time">
              19 Mar 2018
            </time>
          </div>

          <div class="article__link">
            <nuxt-link class="btn btn--green btn--md1" to="#">
              read more
            </nuxt-link>
          </div>

          <img src="~/static/image/blog/blog-2.png" class="article__bg" alt="">
        </article>
      </li>
      <li class="masonry__item">
        <article class="blog__post article">
          <div class="article__info">
            <div class="article__info-title">
              Male Menopause The Alternative Anti Aging Approach
            </div>
            <time class="article__info-time">
              19 Mar 2018
            </time>
          </div>

          <div class="article__link">
            <nuxt-link class="btn btn--green btn--md1" to="#">
              read more
            </nuxt-link>
          </div>

          <img src="~/static/image/blog/blog-3.png" class="article__bg" alt="">
        </article>
      </li>
      <li class="masonry__item">
        <article class="blog__post article">
          <div class="article__info">
            <div class="article__info-title">
              Could Those Creepy Crawly Nighttime Leg Sensations Be A Treatable Medical Condition One Woman S Search For
              Relief
            </div>
            <time class="article__info-time">
              19 Mar 2018
            </time>
          </div>

          <div class="article__link">
            <nuxt-link class="btn btn--green btn--md1" to="#">
              read more
            </nuxt-link>
          </div>

          <img src="~/static/image/blog/blog-4.png" class="article__bg" alt="">
        </article>
      </li>
      <li class="masonry__item">
        <article class="blog__post article">
          <div class="article__info">
            <div class="article__info-title">
              Diet And Cure For Candida Infections
            </div>
            <time class="article__info-time">
              19 Mar 2018
            </time>
          </div>

          <div class="article__link">
            <nuxt-link class="btn btn--green btn--md1" to="#">
              read more
            </nuxt-link>
          </div>

          <img src="~/static/image/blog/blog-2.png" class="article__bg" alt="">
        </article>
      </li>
      <li class="masonry__item">
        <article class="blog__post article article--big">
          <div class="article__info">
            <div class="article__info-title">
              Natural Home Remedies For Oily Skin
            </div>
            <time class="article__info-time">
              19 Mar 2018
            </time>
          </div>

          <div class="article__link">
            <nuxt-link class="btn btn--green btn--md1" to="#">
              read more
            </nuxt-link>
          </div>

          <img src="~/static/image/blog/blog-1.png" class="article__bg" alt="">
        </article>
      </li>
      <li class="masonry__item">
        <article class="blog__post article">
          <div class="article__info">
            <div class="article__info-title">
              Could Those Creepy Crawly Nighttime Leg Sensations Be A Treatable Medical Condition One Woman S Search For
              Relief
            </div>
            <time class="article__info-time">
              19 Mar 2018
            </time>
          </div>

          <div class="article__link">
            <nuxt-link class="btn btn--green btn--md1" to="#">
              read more
            </nuxt-link>
          </div>

          <img src="~/static/image/blog/blog-4.png" class="article__bg" alt="">
        </article>
      </li>
      <li class="masonry__item">
        <article class="blog__post article">
          <div class="article__info">
            <div class="article__info-title">
              Male Menopause The Alternative Anti Aging Approach
            </div>
            <time class="article__info-time">
              19 Mar 2018
            </time>
          </div>

          <div class="article__link">
            <nuxt-link class="btn btn--green btn--md1" to="#">
              read more
            </nuxt-link>
          </div>

          <img src="~/static/image/blog/blog-3.png" class="article__bg" alt="">
        </article>
      </li>
    </ul>
  </div>
</template>

<script>
import BlogMobileMenu from '@/components/blog/MobileMenu'

export default {
  name: 'BlogCatalog',
  components: {
    BlogMobileMenu
  }
}
</script>
