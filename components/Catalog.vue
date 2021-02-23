<template>
  <div class="desktop-catalog_products">
    <div v-for="product in $store.state.cart.products" :key="product.id" class="desktop-catalog_products_item">
      <img :src="product.picture" alt="" class="desktop-catalog_products_item_img">
      <div class="desktop-catalog_products_item_text-wrapper">
        <p class="desktop-catalog_products_item_name">
          {{ product.name }}
        </p>
        <p class="desktop-catalog_products_item_text">
          TGC: {{ product.tgc }}
        </p>
        <p class="desktop-catalog_products_item_text">
          Productivity: {{ product.productivity }} <span> ${{
            product.price
          }}</span>
        </p>
      </div>
      <div class="desktop-catalog_products_item_actions">
        <input type="text" class="desktop-catalog_products_item_actions_input" :value="product.amount">
        <button class="desktop-catalog_products_item_actions_btn" @click="$store.commit('cart/addToCart', product.id)">
          Add to cart
        </button>
        <div class="desktop-catalog_products_item_actions_icon">
          <img src="../static/image/heart.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.desktop-catalog_products {
  display: flex;
  flex-wrap: wrap;
}

.desktop-catalog_products_item {
  background-color: #ffffff;
  margin-right: 50px;
  margin-bottom: 50px;
}

.desktop-catalog_products_item_img {
  width: 310px;
}

.desktop-catalog_products_item_text-wrapper {
  padding: 24px;
}

.desktop-catalog_products_item_name {
  color: #1A1A1A;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 1.5px;
  margin-top: 0;
  margin-bottom: 10px;
}

.desktop-catalog_products_item_text {
  color: #5C5C66;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  margin: 0;
}

.desktop-catalog_products_item_text:last-child {
  display: flex;
  justify-content: space-between;
}

.desktop-catalog_products_item_text > span {
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  color: #1A1A1A;
}

.desktop-catalog_products_item_actions {
  display: flex;
  justify-content: center;
  padding-bottom: 24px;
}

.desktop-catalog_products_item_actions_input {
  background: #F3F3F3;
  width: 61px;
  height: 56px;
  border: none;
  margin-right: 10px;
  text-align: center;
}

.desktop-catalog_products_item_actions_btn {
  border: none;
  font-family: BebasNeueBold, sans-serif;
  background: #17A24F;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 2px;
  padding: 0px 22px;
  color: #ffffff;
  margin-right: 10px;
  cursor: pointer;
  text-transform: uppercase;
}

.desktop-catalog_products_item_actions_icon {
  opacity: 0.8;
  border: 2px solid #17A24F;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
}
</style>
