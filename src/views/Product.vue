<template>
  <div>
    <NavBar />
    <CartBtn />
    <div class="container product">
      <h1 class="text-center m-4">{{ product.title }}</h1>
      <img :src="product.image" alt="Product Image" />
      <p class="dis w-5">{{ product.description }}</p>
      <p class="price">${{ product.price }}</p>
      <button class="btn btn-outline-warning w-5" @click="addToCart(product)">
        Add to Cart
      </button>
    </div>
    <FooTer />
  </div>
</template>

<script>
import { fetchProduct } from "../api.js";
import { mapActions } from "vuex";
import NavBar from "../components/Navbar.vue";
import CartBtn from "../components/catbtn.vue";
import FooTer from "../components/footer.vue";
export default {
  name: "proDuct",
  components: { NavBar, CartBtn, FooTer },
  data() {
    return {
      product: {},
    };
  },
  async created() {
    this.product = await fetchProduct(this.$route.params.id);
  },
  methods: {
    ...mapActions(["addToCart"]),
  },
};
</script>
<style scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
img {
  width: 300px;
}
.dis {
  text-decoration: none;
}
.price {
  color: rgb(12, 231, 59);
}
</style>
