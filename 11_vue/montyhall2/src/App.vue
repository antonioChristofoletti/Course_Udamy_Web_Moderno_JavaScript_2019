<template>
  <div id="app">
    <Door />
  </div>
</template>

<script>
import Door from "./components/Door";

export default {
  name: "App",
  components: { Door }
};
</script>

<style lang="scss">

@import "./assets/fonts/fonts.scss"; 




* {
  box-sizing: border-box;
  font-family: "Roboto-Thin", "Arial";
}
</style>