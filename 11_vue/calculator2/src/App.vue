<template>
  <div id="app">
    <Calculator />
  </div>
</template>

<script>
import Calculator from "./components/Calculator";

export default {
  components: { Calculator }
};
</script>

<style>
@font-face {
  font-family: "RobotoMono-thin";
  src: url("./assets/fonts/RobotoMono-Thin.ttf");
}

* {
  font-family: "RobotoMono-thin", "monospace";
  box-sizing: border-box;
}

#app {
  height: 100vh;
  background: linear-gradient(to top, #34e89e, #0f3443);

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>