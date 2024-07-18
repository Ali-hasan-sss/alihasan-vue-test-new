import { createRouter, createWebHistory } from "vue-router";
import hoMe from "../views/Home.vue";
import Category from "../views/Category.vue";
import Product from "../views/Product.vue";
import CartView from "../views/Cart.vue";
import LogIn from "../views/login.vue";
import SignUp from "../views/signup.vue";
import DashBoard from "../views/dashboard.vue";

const routes = [
  { path: "/", component: hoMe },
  { path: "/login", component: LogIn },
  { path: "/signup", component: SignUp },
  { path: "/category/:category", component: Category },
  { path: "/product/:id", component: Product },
  {
    path: "/cart",
    component: CartView,
  },
  {
    path: "/dashboard",
    component: DashBoard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
