import { createRouter, createWebHistory } from "vue-router";
import hoMe from "../views/Home.vue";
import Category from "../views/Category.vue";
import Product from "../views/Product.vue";
import CartView from "../views/Cart.vue";

const routes = [
  { path: "/", component: hoMe },
  { path: "/category/:category", component: Category },
  { path: "/product/:id", component: Product },
  {
    path: "/cart",
    component: CartView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
