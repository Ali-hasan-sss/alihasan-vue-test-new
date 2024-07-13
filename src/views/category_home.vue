<template>
  <div class="container">
    <div class="col-12 mb-4 category">
      <h2 class="text-center text-warning p-4">Categories</h2>
      <div class="row">
        <div
          v-for="category in categories"
          :key="category"
          class="my-5 col-12 col-md-6 col-xl-3 d-flex justify-content-center"
        >
          <router-link
            :to="`/category/${category}`"
            class="btn btn-outline-warning category-btn"
          >
            {{ category }}
          </router-link>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Featured Products</h2>
          <div class="row">
            <div class="col-md-4" v-for="product in products" :key="product.id">
              <router-link :to="`/product/${product.id}`">
                <div class="card mb-4">
                  <img
                    :src="product.image"
                    class="card-img-top"
                    alt="Product Image"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{{ product.title }}</h5>
                    <p class="card-text">{{ product.description }}</p>
                    <p class="card-text">${{ product.price }}</p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchProductsByCategory, fetchCategories } from "../api.js";

export default {
  name: "CategoryHome",
  data() {
    return {
      category: this.$route.params.category,
      categories: [],
      products: [],
    };
  },
  async created() {
    await this.loadProducts();
    this.categories = await fetchCategories();
  },
  watch: {
    "$route.params.category": "loadProducts",
  },
  methods: {
    async loadProducts() {
      this.products = await fetchProductsByCategory(
        this.$route.params.category
      );
    },
  },
};
</script>

<style scoped>
.category {
  width: 100%;
  min-height: 50vh;
  background-color: #000;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
}

.category::before {
  content: "";
  position: absolute;
  background-image: url("../assets/Images/Header\ 2.jpg");
  background-size: cover;
  background-position: center;
  inset: 0;
  opacity: 0.2;
}
h2 {
  isolation: isolate;
  margin: 40px;
}
.category-btn {
  padding-top: 80px;
  width: 240px;
  height: 200px;
  border-radius: 0;
  background-color: #eedb71b2;
  color: #fff;
  font-size: 20px;
  isolation: isolate;
}
.category-btn:hover {
  cursor: pointer;
  background-color: #c7ac12b2;
}
</style>
