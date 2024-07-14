<template>
  <div>
    <div class="container latest-section">
      <div class="title">
        <div class="container content">
          <div class="row justify-content-center">
            <div
              class="father col-12 col-md-8 d-flex align-item-center justify-content-center"
            >
              <img
                src="..\assets\Icons\ALMOTTHEDON COMPANY Logo (3)1.png"
                alt="1"
                width="200px"
                class="d-none d-xl-block"
              />
              <h2 class="text-center">LATEST PRODUCTS</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="card-container row justify-content-center">
        <div
          class="product-card col-12 col-md-6 col-xl-4 d-flex justify-content-center"
        >
          <div class="image-container">
            <img
              class="pro-img"
              src="@\assets\Images\home-appliances-group-white-refrigerator-washing-machine-stove-microwave-oven-vacuum-cleaner-isolated-white-background-3d.jpg"
              alt="Product Image"
            />
            <img class="icon" src="../assets/Icons/heart_10826871.png" alt="" />
          </div>
          <h2 class="text-center">Home Appliances</h2>
          <p class="price text-center text-warning">AED 5000</p>

          <button
            type="button"
            class="see-more"
            data-bs-toggle="modal"
            data-bs-target="#5"
          >
            SEE MORE
          </button>
          <!-- Modal -->
          <div
            class="modal fade"
            id="5"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    product descrabtion
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  The Olympic Games The Olympic Games, an international sports
                  festival which takes place every four years, are particularly
                  famous for athletics. But they also include individual sports,
                  likeng were added, but in 349,all the games were .
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="product-card col-12 col-md-6 col-xl-4 d-flex justify-content-center"
        >
          <div class="image-container">
            <img
              class="pro-img"
              src="..\assets\Images\beautiful-luxury-necklace-jewelry-stand-neck.jpg"
            />
            <img
              class="icon"
              src="../assets/Icons/heart_10826871.png"
              alt="11"
            />
          </div>
          <h2 class="text-center">Necklace</h2>
          <p class="price text-center text-warning">AED 1500</p>
          <button
            type="button"
            class="see-more"
            data-bs-toggle="modal"
            data-bs-target="#1"
          >
            SEE MORE
          </button>
          <!-- Modal -->
          <div
            class="modal fade"
            id="1"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    product descrabtion
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  The Olympic Games The Olympic Games, an international sports
                  festival which takes place every four years, are particularly
                  famous for athletics. But they also include individual sports,
                  like swimming, and team sports, like football and hockey. For
                  sportsmen and sportswomen everywhere, taking part in the Games
                  is usually the highlight of their careers. At first, the
                  Olympic Games were part of a Greece festival. It started by
                  running. Later, longer races and boxing were added, but in
                  349,all the games were stopped.
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Modal -->
        </div>
        <div
          class="product-card col-12 col-md-6 col-xl-4 d-flex justify-content-center"
        >
          <div class="image-container">
            <img
              class="pro-img"
              src="..\assets\Images\levitating-music-headphones-display.jpg"
            />
            <img class="icon" src="../assets/Icons/heart_10826871.png" alt="" />
          </div>
          <h2 class="text-center">Head Phones</h2>
          <p class="price text-center text-warning">AED 250</p>
          <button
            type="button"
            class="btn-outline-warning see-more"
            data-bs-toggle="modal"
            data-bs-target="#2"
          >
            SEE MORE
          </button>
          <!-- Modal -->
          <div
            class="modal fade"
            id="2"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    product descrabtion
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  The Olympic Games The Olympic Games, an international sports
                  festival which takes place every four years, are particularly
                  famous fo added, but in 349,all the games were stopped.
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="radio">
        <div class="ratio ratio1"></div>
        <div class="ratio"></div>
        <div class="ratio"></div>
        <div class="ratio"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LatestSiction",
};
</script>

<style scoped>
.latest-section {
  width: 100%;
  min-height: 100vh;
}

.card-container {
  object-fit: contain;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-body {
  border: 1px solid #877607;
}
.product-card {
  width: 350px;
  height: 450px;
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.image-container {
  width: 100%;
  padding-top: 100%;
  position: relative;
  overflow: hidden;
}

.pro-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.icon {
  position: absolute;
  width: 30px;
  top: 5px;
  right: 5px;
  cursor: pointer;
}

h2 {
  font-size: 1.5em;
  margin: 20px 0 10px;
  text-align: center;
}

.price {
  font-size: 1.2em;
  color: #555;
  margin-bottom: 20px;
}

.see-more {
  width: 100%;
  background-color: transparent;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  border: 1px solid #fde044b2;
  cursor: pointer;
  text-transform: uppercase;
}

.see-more:hover {
  background-color: #fde044b2;
}
.radio {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  gap: 10px;
}
.ratio {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fde044b2;
  cursor: pointer;
}
.ratio1 {
  width: 15px;
  height: 15px;
}
.father {
  width: 100%;
  min-height: 100px;
  position: relative;
  margin-top: 20px;
}
.father img {
  position: absolute;
  top: 40px;
  left: 33%;
}
</style>
