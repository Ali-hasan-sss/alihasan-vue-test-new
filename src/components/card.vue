<template>
  <div class="product-card">
    <div class="image-container">
      <img :src="product.image" alt="Product Image" />
    </div>
    <h2>{{ product.title }}</h2>
    <p class="price">{{ product.price }}</p>
    <button class="see-more">See More</button>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-card {
  width: 300px;
  height: 400px;
  border: 1px solid #ddd;
  border-radius: 10px;
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
  border-radius: 10px;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
}

.see-more:hover {
  background-color: #0056b3;
}
</style>
