<template>
  <div id="app">
    <div class="container">
      <h1 class="container__title">Monty Hall</h1>
      <h1>Monty Hall</h1>
    </div>
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
* {
  box-sizing: border-box;
  font-family: "roboto-thin";
  padding: 0px;
  margin: 0px;
}

#app {
  display: flex;
  justify-content: center;
  height: 100vh;
}

.container {
  padding: 15px;
  background-color: #fafafa;

  width: 100%;

  @media (min-width: $lg-bp) {
    width: $lg-bp;
  }

  &__title{
    font-family: "roboto-thin";
    background-color: red;
  }
}
</style>