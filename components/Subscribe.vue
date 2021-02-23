<template>
  <section class="subscribe">
    <form class="subscribe__form">
      <div class="subscribe__form-title">
        subscribe to our newsletter
      </div>
      <div class="subscribe__form-group">
        <div class="subscribe__form-input input">
          <label for="mail" class="subscribe__form-label input__label" :class="{isFocus: isFocus}">
            YOUR MAIL
          </label>
          <input
            id="mail"
            v-model="mail"
            type="text"
            class="subscribe__form-body input__body"
            @focus="isFocus = true"
            @blur="blurHandler"
          >
        </div>

        <button type="submit" class="subscribe__form-submit btn btn--green btn--lg1">
          Subscribe
        </button>
      </div>
    </form>
    <div class="subscribe__seed">
      <img src="~/static/image/product/bitmap.png" alt="">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Subscribe',
  data: () => ({
    isFocus: false,
    mail: ''
  }),
  methods: {
    blurHandler () {
      if (this.mail) { return }

      this.isFocus = false
    }
  }
}
</script>
