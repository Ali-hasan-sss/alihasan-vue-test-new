<template>
  <div>
    <button class="see-more">See More</button>
  </div>
</template>

<script>
export default {
  name: "MoreBtn",
};
</script>

<style scoped>
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
</style>
