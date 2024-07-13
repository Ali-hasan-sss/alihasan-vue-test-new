<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@font-face {
  font-family: "Marcellus";
  src: url("./assets/Fonts/Marcellus-Regular.ttf") format("truetype");
}

body,
a,
button {
  font-family: "Marcellus", sans-serif;
  background-color: #000;
}

#app {
  margin-top: 20px;
  background-color: #000;
  font-family: "Marcellus";
}
</style>
