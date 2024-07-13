<template>
  <div>
    <div class="container-fluid row nav-app">
      <div class="d-none d-lg-block col-lg-2">
        <router-link to="/">
          <img class="logo" src="../assets/Images/logo.png" alt="logo" />
        </router-link>
      </div>
      <div class="col-xl-10 col-lg-10">
        <div class="social d-none d-xl-flex">
          <a href="https://www.youtube.com"
            ><img
              class="social-icons me-2"
              src="../assets/Icons/Youtube - Gold.png"
              alt="Youtube"
          /></a>
          <a href="https://www.instagram.com"
            ><img
              src="../assets/Icons/instagram_Gold.png"
              alt="instagram"
              class="social-icons me-2"
          /></a>
          <a href="https://www.twitter.com"
            ><img
              src="../assets/Icons/Twitter - Gold.png"
              alt="Twitter"
              class="social-icons me-2"
          /></a>
          <a href="https://www.facebook.com"
            ><img
              src="../assets/Icons/facebook_Gold.png"
              alt="facebook"
              class="social-icons me-2"
          /></a>
        </div>
        <div>
          <nav class="navbar navbar-expand-lg bg-black">
            <div class="container-fluid">
              <a class="navbar-brand" href="/"
                ><img
                  class="logo-nav d-xl-none d-xxl-none d-lg-none d-md-block d-sm-block"
                  src="../assets/Images/logo.png"
                  alt="logo"
              /></a>
              <button
                class="navbar-toggler btn-outline-warning ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon ms-auto"></span>
              </button>
              <div
                class="collapse navbar-collapse ms-auto"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto text-end">
                  <li class="nav-item">
                    <a class="nav-list active" aria-current="page" href="/"
                      >Home</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-list" href="/category/electronics"
                      >Electronics</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-list" href="/category/jewelery">jewely</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-list" href="/category/men's%20clothing"
                      >Men Clothing</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-list" href="/category/women's%20clothing"
                      >Wmen Clothing</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-list" href="/category/Media_Center"
                      >Media Center</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-list" href="/category/ContactUs"
                      >Contact Us</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>

<style>
.nav-app {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 7px solid #fde044b2;
  z-index: 10;
}
.logo {
  width: 150px;
}
.logo-nav {
  width: 100px;
}
.social {
  margin-left: 700px;
}
.social-icons {
  width: 40px;
  margin-right: 10px;
}
.nav-list {
  color: #fff;
  text-decoration: none;
  padding: 0 5px;
  margin-left: 5px;
}
.nav-list:hover {
  color: #fde044b2;
}
.active {
  color: #fde044b2;
}
</style>
