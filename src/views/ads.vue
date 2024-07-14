<template>
  <div class="container">
    <div class="ads container-fluid">
      <div class="line d-none d-lg-block"></div>
      <div class="image-container d-none d-lg-block">
        <img
          src="..\assets\Images\portrait-young-woman-with-earrings-with-gems-isolated.jpg"
        />
      </div>
      <div class="text-container">
        <h1 class="ads-title text-center">LUXURY JEWELRY COLLICTION</h1>
        <div>
          <div class="ads-discraption">
            <p class="">
              ut labore et dolore magna aliqua.” The purpose of lorem ipsum is
              to create a natural looking ut labore et dolore magna aliqua.” The
              purpose of lorem ipsum is to create a natural looking
            </p>
            <MoreBtn class="btn" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoreBtn from "../components/morebtn.vue";
export default {
  name: "adsPage",
  components: { MoreBtn },
};
</script>

<style scoped>
.image-container {
  width: 450px;
  height: 550px;
}
.image-container img {
  width: 100%;
  z-index: 100;
  position: relative;
  margin-top: 20px;
}
.ads {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.text-container {
  padding: 20px;
}

.btn {
  width: 50%;
}
.line {
  position: absolute;
  right: 0;
  top: 180px;
  width: 100vw;
  height: 50px;
  background-color: rgba(240, 207, 22, 0.9);
}
.ads-title {
  color: #fff;
  z-index: 1;
  isolation: isolate;
  margin-bottom: 100px;
}
</style>
