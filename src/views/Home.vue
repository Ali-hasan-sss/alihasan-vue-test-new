<template>
  <div>
    <NavBar class="costom-font" />
    <!-- hero srction-->
    <CartBtn />
    <HeroSiction class="costom-font" />
    <!-- latest srction-->
    <LatestSiction class="costom-font" />
    <!--ads srction-->
    <adsPage class="costom-font" />
    <!--category srction-->
    <CategoryHome class="costom-font" />
    <!--footer -->

    <FooTer class="costom-font" />
  </div>
</template>

<script>
import NavBar from "../components/Navbar.vue";
import HeroSiction from "./hero.vue";
import LatestSiction from "./latestproduct.vue";
import adsPage from "./ads.vue";
import CategoryHome from "./category_home.vue";
import FooTer from "../components/footer.vue";
import CartBtn from "../components/catbtn.vue";
export default {
  name: "HoMe",
  components: {
    NavBar,
    HeroSiction,
    LatestSiction,
    adsPage,
    CategoryHome,
    FooTer,
    CartBtn,
  },
};
</script>

<style scoped></style>
