<template>
  <div>
    <NavBar />
    <div class="container cart">
      <h1 class="text-center text-warning">Shopping Cart</h1>
      <div class="text-danger text-center" v-if="cartItems.length === 0">
        Your cart is empty
      </div>
      <div class="row" v-else>
        <div
          class="col-6 col-lg-4 item"
          v-for="item in cartItems"
          :key="item.id"
        >
          <img :src="item.image" alt="Product Image" class="product-image" />
          <h5 class="text-light">{{ item.title }}</h5>
          <p class="h4 text-warning">{{ item.price }} $</p>
          <input
            class="input textlight"
            type="number"
            v-model.number="item.quantity"
            @change="
              updateQuantity({ productId: item.id, quantity: item.quantity })
            "
            min="1"
          />
          <button class="btn btn-danger" @click="removeFromCart(item.id)">
            Remove
          </button>
        </div>
        <p class="text-danger">Total: {{ cartTotal }} $</p>
      </div>
    </div>

    <FooTer />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import NavBar from "../components/Navbar.vue";
import FooTer from "../components/footer";

export default {
  name: "CartView",
  components: { NavBar, FooTer },
  computed: {
    ...mapState(["cartItems"]),
    ...mapGetters(["cartTotal"]),
  },
  methods: {
    ...mapActions(["removeFromCart", "updateQuantity"]),
  },
};
</script>

<style scoped>
.cart {
  padding: 20px;
}
.item {
  border: 1px solid #fde044b2;
  padding: 10px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.product-image {
  width: 200px;
}
</style>
