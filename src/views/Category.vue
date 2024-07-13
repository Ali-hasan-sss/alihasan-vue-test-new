<template>
  <div>
    <NavBar />
    <CartBtn />
    <div class="category container">
      <h1 class="text-center text-warning m-5">{{ category }}</h1>
      <div v-if="error" class="alert alert-danger">{{ error }}</div>
      <div v-else class="row">
        <div
          class="col-12 col-md-6 col-xl-4 d-flex justify-content-center"
          v-for="product in products"
          :key="product.id"
        >
          <div class="product-card m-2">
            <router-link class="link" :to="`/product/${product.id}`">
              <img :src="product.image" alt="Product Image" />
            </router-link>
            <div class="content">
              <div class="title">{{ product.title }}</div>
              <div :class="['description', { expanded: product.isExpanded }]">
                {{ product.description }}
              </div>
            </div>
            <div class="read-more" @click="toggleDescription(product.id)">
              {{ product.isExpanded ? "Read Less" : "Read More" }}
            </div>
            <div class="price m-3">${{ product.price }}</div>
          </div>
        </div>
      </div>
    </div>
    <FooTer />
  </div>
</template>

<script>
import { fetchProductsByCategory } from "@/api";
import NavBar from "../components/Navbar.vue";
import CartBtn from "../components/catbtn.vue";
import FooTer from "../components/footer.vue";

export default {
  name: "CateGory",
  components: { NavBar, CartBtn, FooTer },
  data() {
    return {
      category: this.$route.params.category,
      products: [],
      error: null,
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const products = await fetchProductsByCategory(this.category);
        this.products = products.map((product) => ({
          ...product,
          isExpanded: false,
        }));
      } catch (error) {
        this.error = "Failed to fetch products.";
        console.error("Error fetching products:", error);
      }
    },
    toggleDescription(productId) {
      const product = this.products.find((p) => p.id === productId);
      if (product) {
        product.isExpanded = !product.isExpanded;
      }
    },
  },
  created() {
    this.fetchProducts();
  },
  watch: {
    "$route.params.category": function (newCategory) {
      this.category = newCategory;
      this.fetchProducts();
    },
  },
};
</script>

<style scoped>
.link {
  text-decoration: none;
  color: #fff;
}
.product-card {
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}
.product-card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.product-card .content {
  padding: 16px;
}
.product-card .title {
  font-size: 1.5em;
  margin: 0;
}
.product-card .description {
  margin: 8px 0;
  max-height: 3em;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.product-card .description.expanded {
  max-height: none;
}
.product-card .read-more {
  color: #007bff;
  cursor: pointer;
  text-decoration: none;
  display: block;
  margin-top: 8px;
}
.product-card .price {
  font-size: 1.2em;
  color: #28a745;
  margin-top: 8px;
}
</style>
