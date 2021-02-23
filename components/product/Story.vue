<template>
  <section class="story">
    <div class="story__main">
      <div class="story__description">
        <div class="story__info">
          <div class="story__subTitle">
            STORY of Auto Russian Rocket Fuel
          </div>
          <div class="story__title">
            How To Combat A Bout Of Chronic Headache
          </div>
          <div class="story__text">
            <p>
              We live in the second millennium. It offers new amazing opportunities and challenges: you can grow your own
              crop using seeds from Netherlands. There is a club of devoted growers.
            </p>

            <p>
              Its participants are friends that exchange seeds and experience. They also go on trips together. One day
              they
              decided to found a company and spread the joy of cannabis.
            </p>
          </div>
        </div>

        <div class="story__image">
          <img src="~/static/image/story/picture.jpg" alt="">
        </div>
      </div>

      <div class="story__comments">
        <ul class="story__comments-rate">
          <li class="story__comments-item">
            <img src="~/static/image/rate/star.svg" alt="">
          </li>
          <li class="story__comments-item">
            <img src="~/static/image/rate/star.svg" alt="">
          </li>
          <li class="story__comments-item">
            <img src="~/static/image/rate/star.svg" alt="">
          </li>
          <li class="story__comments-item">
            <img src="~/static/image/rate/star.svg" alt="">
          </li>
          <li class="story__comments-item">
            <img src="~/static/image/rate/empty-star.svg" alt="">
          </li>
        </ul>

        <div class="story__comments-text">
          <p>
            We live in the second millennium. It offers new amazing opportunities and challenges: you can grow your own
            crop using seeds from Netherlands. There is a club of devoted growers.
          </p>

          <p>
            We live in the second millennium. It offers new amazing opportunities and challenges: you can grow your own
            crop using seeds from Netherlands. There is a club of devoted growers.
          </p>

          <p>
            We live in the second millennium. It offers new amazing opportunities and challenges: you can grow your own
            crop using seeds from Netherlands. There is a club of devoted growers.
          </p>

          <p>
            We live in the second millennium. It offers new amazing opportunities and challenges: you can grow your own
            crop using seeds from Netherlands. There is a club of devoted growers.
          </p>
        </div>

        <div class="story__comments-avatar">
          <img src="~/static/image/story/avatar.jpg" alt="">
          <div class="story__comments-name">
            John appleseed
          </div>
        </div>

        <nuxt-link to="#" class="story__comments-read btn btn--default btn--md">
          read more
        </nuxt-link>

        <div class="story__comments-control">
          <div class="story__comments-action">
            <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM3 10.5H2L2 13.5H3V10.5Z"
                fill="white"
              />
            </svg>
          </div>

          <div class="story__comments-action">
            <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.0607 10.9393C13.6464 11.5251 13.6464 12.4749 13.0607 13.0607L3.51472 22.6066C2.92893 23.1924 1.97919 23.1924 1.3934 22.6066C0.807611 22.0208 0.807611 21.0711 1.3934 20.4853L9.87868 12L1.3934 3.51472C0.807611 2.92893 0.807611 1.97919 1.3934 1.3934C1.97919 0.807611 2.92893 0.807611 3.51472 1.3934L13.0607 10.9393ZM11 10.5H12V13.5H11V10.5Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <nuxt-link to="#" class="story__backHome btn btn--default btn--lg">
      back to shop
    </nuxt-link>
  </section>
</template>

<script>
export default {
  name: 'Story'
}
</script>
