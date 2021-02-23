<template>
  <section class="product__header">
    <div class="product__photo">
      <img src="~/static/image/product/ganga-big.jpg" class="product__photo-image" loading="lazy" alt="">

      <ul class="product__photo-thumbsSlider" style="transform: translate(-50px, 0)">
        <li class="product__photo-thumb">
          <img class="product__photo-thumbImage" src="~/static/image/product/thumb-1.jpg" alt="">
        </li>
        <li class="product__photo-thumb">
          <img class="product__photo-thumbImage" src="~/static/image/product/thumb-2.jpg" alt="">
        </li>
        <li class="product__photo-thumb">
          <img class="product__photo-thumbImage" src="~/static/image/product/thumb-1.jpg" alt="">
        </li>
        <li class="product__photo-thumb">
          <img class="product__photo-thumbImage" src="~/static/image/product/thumb-2.jpg" alt="">
        </li>
        <li class="product__photo-thumb">
          <img class="product__photo-thumbImage" src="~/static/image/product/thumb-1.jpg" alt="">
        </li>
      </ul>
    </div>
    <div class="product__control">
      <div class="product__control-action">
        <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM3 10.5H2L2 13.5H3V10.5Z" fill="white" />
        </svg>
      </div>

      <div class="product__control-amount">
        <div class="active">
          1
        </div>
        <div class="separator">
          /
        </div>
        <div>3</div>
      </div>

      <div class="product__control-action">
        <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.0607 10.9393C13.6464 11.5251 13.6464 12.4749 13.0607 13.0607L3.51472 22.6066C2.92893 23.1924 1.97919 23.1924 1.3934 22.6066C0.807611 22.0208 0.807611 21.0711 1.3934 20.4853L9.87868 12L1.3934 3.51472C0.807611 2.92893 0.807611 1.97919 1.3934 1.3934C1.97919 0.807611 2.92893 0.807611 3.51472 1.3934L13.0607 10.9393ZM11 10.5H12V13.5H11V10.5Z" fill="white" />
        </svg>
      </div>
    </div>
    <div class="product__info">
      <div class="product__main product__main--sell">
        <div class="product__title">
          Auto Russian Rocket Fuel
        </div>
        <div class="product__price">
          <div class="product__nowPrice">
            $20.00
          </div>
          <div class="product__oldPrice">
            $45.99
          </div>
        </div>
        <div class="product__params">
          <div class="title">
            general:
          </div>
          <ul class="product__params-list">
            <li class="product__params-item">
              <div class="product__params-props">
                <div class="product__params-icon">
                  <img src="~/static/image/params/manufacturer.svg" alt="">
                </div>
                <div class="product__params-label">
                  MANUFACTURER
                </div>
              </div>
              <div class="product__params-value">
                Errors Seeds
              </div>
            </li>
            <li class="product__params-item">
              <div class="product__params-props">
                <div class="product__params-icon">
                  <img src="~/static/image/params/variety.svg" alt="">
                </div>
                <div class="product__params-label">
                  VARIETY
                </div>
              </div>
              <div class="product__params-value">
                Indica / Sativa
              </div>
            </li>
            <li class="product__params-item">
              <div class="product__params-props">
                <div class="product__params-icon">
                  <img src="~/static/image/params/flowering.svg" alt="">
                </div>
                <div class="product__params-label">
                  FLOWERING
                </div>
              </div>
              <div class="product__params-value">
                8-10 weeks
              </div>
            </li>
            <li class="product__params-item">
              <div class="product__params-props">
                <div class="product__params-icon">
                  <img src="~/static/image/params/thc.svg" alt="">
                </div>
                <div class="product__params-label">
                  THC
                </div>
              </div>
              <div class="product__params-value">
                High
              </div>
            </li>
            <li class="product__params-item">
              <div class="product__params-props">
                <div class="product__params-icon">
                  <img src="~/static/image/params/yield.svg" alt="">
                </div>
                <div class="product__params-label">
                  YIELD
                </div>
              </div>
              <div class="product__params-value">
                50 gram per strain
              </div>
            </li>
            <li class="product__params-item">
              <div class="product__params-props">
                <div class="product__params-icon">
                  <img src="~/static/image/params/genetics.svg" alt="">
                </div>
                <div class="product__params-label">
                  GENETICS
                </div>
              </div>
              <div class="product__params-value">
                Indica х Sativa genetics
              </div>
            </li>
            <li class="product__params-item">
              <div class="product__params-props">
                <div class="product__params-icon">
                  <img src="~/static/image/params/harvest.svg" alt="">
                </div>
                <div class="product__params-label">
                  HARVEST
                </div>
              </div>
              <div class="product__params-value">
                2-2,5 months
              </div>
            </li>
            <li class="product__params-item">
              <div class="product__params-props">
                <div class="product__params-icon">
                  <img src="~/static/image/params/plant.svg" alt="">
                </div>
                <div class="product__params-label">
                  PLANT HEIGHT
                </div>
              </div>
              <div class="product__params-value">
                up to 60 см.
              </div>
            </li>
          </ul>
        </div>
        <div class="product__packs">
          <div class="title">
            PAcks:
          </div>

          <ul class="product__packs-list">
            <li
              v-for="pack in packs"
              :key="pack.title"
              class="product__packs-item"
              :class="{isActive: pack.isActive}"
            >
              {{ pack.title }}
            </li>
          </ul>
        </div>
        <div class="product__amount">
          <div class="title">
            amount:
          </div>

          <div class="product__amount-count">
            {{ count }}
          </div>

          <div class="product__amount-control">
            <div @click="countMinus">
              &#8211;
            </div>
            <div class="separator">
              /
            </div>
            <div @click="count++">
              +
            </div>
          </div>
        </div>
        <div class="product__subtotal">
          <div class="title">
            subtotal:
          </div>

          <div class="product__subtotal-label">
            $140.00
          </div>
        </div>
        <div class="product__btn">
          <div class="product__button btn btn--green">
            add to cart
          </div>

          <div class="product__action btn btn--default btn--square">
            <img src="~/static/image/product/favorite.svg" alt="">
          </div>

          <div class="product__action btn btn--default btn--square">
            <img src="~/static/image/product/srav.svg" alt="">
            <div class="product__tooltip">
              <div class="product__tooltip-title">
                Product added to comparison
              </div>
              <nuxt-link to="#" class="product__tooltip-link">
                На страницу сравнения
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="product__footer">
          Helsetveien 223, 7105 Stadsbygd, Norway
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Card',
  data: () => ({
    packs: [
      {
        title: '1 in pack - 5 $', isActive: true
      },
      {
        title: '3 in pack - 15 $ '
      },
      {
        title: '5 in pack - 25 $'
      },
      {
        title: '10 in pack + 2 bonus - 50 $'
      },
      {
        title: '50 in pack + 5 bonus - 250 $'
      },
      {
        title: '100 in pack + 10 bonus - 500 $'
      }
    ],
    count: 1
  }),
  methods: {
    countMinus () {
      if (this.count > 1) {
        this.count--
      }
    }
  }
}
</script>
