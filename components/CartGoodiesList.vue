<template>
  <div class="cart_goodies_list">
    <div v-for="item in $store.state.cart.cart" :key="item.id" class="cart_goodies_list_item">
      <div class="cart_goodies_list_item_amount_wrapper">
        <img :src="item.picture" alt="" class="cart_goodies_list_item_img">
        <div class="cart_goodies_list_item_amount">
          <p class="cart_goodies_list_item_amount_name">
            {{ item.name }}
          </p>
          <div class="cart_goodies_list_item_amount_counter">
            <span class="cart_goodies_list_item_amount_text">
              {{ item.amount }} pack
            </span>
            <button class="cart_goodies_list_item_amount_btn plus">
              +
            </button>
            /
            <button class="cart_goodies_list_item_amount_btn minus">
              -
            </button>
          </div>
        </div>
      </div>
      <div class="cart_goodies_list_item_price">
        <p class="cart_goodies_list_item_price_text">
          ${{ item.price }}
        </p>
        <button class="cart_goodies_list_item_price_btn">
          remove
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.cart_goodies_list {
  flex: 1 0 auto;
  overflow: hidden;
  overflow-y: scroll;
  scrollbar-width: thin;
}
.cart_goodies_list::-webkit-scrollbar {
    width: 0;
    height: 0;
}
.cart_goodies_list_item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 32px 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: 0.3s;
}
.cart_goodies_list_item:hover {
  background: #2D2323;
}
.cart_goodies_list_item_amount_wrapper {
  display: flex;
}
.cart_goodies_list_item_amount {
  color: #ffffff;
}
.cart_goodies_list_item_img {
  width: 70px;
  height: 74px;
  margin-right: 20px;
}
.cart_goodies_list_item_amount_name {
  margin: 0;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.933333px;
  text-transform: uppercase;
  opacity: 0.8;
  margin-bottom: 18px;
  margin-top: 10px;
}
.cart_goodies_list_item_amount_btn {
  background-color: transparent;
  border: none;
  color: #ffffff;
}
.cart_goodies_list_item_price_text {
  margin: 0;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  margin-bottom: 20px;
  margin-top: 10px;
}
.cart_goodies_list_item_price_btn {
  background-color: transparent;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  padding: 0;
  border: none;
  color: #ffffff;
}
.cart_goodies_list_item_amount_counter {
  display: flex;
  align-items: center;
}
.cart_goodies_list_item_amount_text {
  margin-right: 10px;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
}
</style>
