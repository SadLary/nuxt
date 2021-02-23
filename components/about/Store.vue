<template>
  <section class="about__stores grid grid--order">
    <div class="about__stores-info grid--left">
      <div class="about__stores-title">
        Our stores
      </div>

      <form class="about__stores-form">
        <div class="about__stores-input input">
          <label for="country" class="about__stores-label input__label" :class="{isFocus: isFocus}">
            ENTER COUNTRY
          </label>
          <input
            id="country"
            v-model="country"
            type="text"
            class="about__stores-body input__body"
            @focus="isFocus = true"
            @blur="blurHandler"
          >
        </div>

        <button type="submit" class="about__stores-submit btn btn--default btn--default-green btn--xl">
          search
        </button>
      </form>

      <ul class="about__stores-address">
        <li v-for="(item, index) in address" :key="item.name" class="about__stores-item">
          <div class="about__stores-num">
            0{{ index + 1 }}
          </div>

          <div class="about__stores-addressName">
            <div class="about__stores-addressTitle">
              {{ item.name }}
            </div>

            <div class="about__stores-addressAddress">
              {{ item.address }}
            </div>
          </div>
        </li>
      </ul>

      <nuxt-link class="about__stores-button btn btn--green btn--lg3" to="#">
        SHOW MORE STOREs
      </nuxt-link>
    </div>

    <div class="about__stores-map grid--right">
      <img src="~/static/image/history/map.png" loading="lazy" alt="">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Store',
  data: () => ({
    country: '',
    isFocus: false,
    address: [
      {
        name: 'Audiatur',
        address: 'Vreimsida 426, 3803 Bø I Telemark, Norway'
      },
      {
        name: 'Axel Fredrik Becker / Mastua',
        address: 'Helsetveien 223, 7105 Stadsbygd, Norway'
      },
      {
        name: 'ÆRA Kafé & Fetevare',
        address: 'Klampavikvegen 4, 5300 Kleppestø, Norway'
      },
      {
        name: 'Baker Hansen Majorstukrysset',
        address: 'Valkyriegata 15, 0366 Oslo, Norway'
      }
    ]
  }),
  methods: {
    blurHandler () {
      if (this.country) {
        return
      }

      this.isFocus = false
    }
  }
}
</script>
