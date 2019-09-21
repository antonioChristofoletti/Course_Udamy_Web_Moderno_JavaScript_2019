<template>
  <div id="app">
    <div class="container">
      <h1 class="container__title">Monty Hall</h1>
      <hr class="container__line" />

      <div class="container__form">
        <label for="txtDoorsNumber">Número de Portas</label>
        <input type="number" id="txtDoorsNumber" v-model.number="doorsNumber" />
        <label for="txtDpprSelected">Número de Portas</label>
        <input type="number" id="txtDoorSelected" v-model.number="doorSelected" />
        <button
          id="btnGenerateMontyHall"
          @click="generateMontyHall(doorsNumber, doorSelected,allowedToGenerateDoors)"
        >Gerar</button>
      </div>

      <div class="container__doors" v-show="allowedToGenerateDoors">
        <div v-for="n in doorsNumber" v-bind:key="n">
          <Door :hasGift="doorSelected == n+1" :doorNumber="1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Door from "./components/Door";

export default {
  name: "App",
  data: function() {
    return {
      doorsNumber: 0,
      doorSelected: 0,
      allowedToGenerateDoors: false
    };
  },
  components: { Door },
  methods: {
    generateMontyHall() {
      if (
        isNaN(this.doorsNumber) ||
        isNaN(this.doorSelected) ||
        this.doorsNumber <= 0 ||
        this.doorSelected <= 0
      ) {
        alert("Há valores incorretos");

        this.allowedToGenerateDoors = false;
        return;
      }

      this.allowedToGenerateDoors = true;
    }
  }
};
</script>

<style lang="scss">
@import url("./assets/style/fonts/fonts.scss");

* {
  box-sizing: border-box;
  font-family: "roboto-thin";
  padding: 0px;
  margin: 0px;
}

body {
  background-color: #fafafa;
}

#app {
  display: flex;
  justify-content: center;
  height: 100vh;
}

.container {
  padding: 15px 0px 15px 0px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: relative;
  width: 100%;

  @media (min-width: $lg-bp) {
    width: $lg-bp;
  }

  &__title {
    font-family: "roboto-thin";
    text-align: center;
  }

  &__line {
    background-color: chocolate;
    border: none;
    width: 100%;
    height: 1px;
    padding: 0px;
    margin: 0px;
  }

  &__form {
    padding: 15px;
    display: flex;
    flex-direction: column;
    width: 100%;

    color: #212121;
    font-size: 0.8em;

    label {
      font-size: 0.8em;
    }

    input {
      padding: 2px;
      border-radius: 5px;
      border: 1px solid #e0e0e0;
      margin-bottom: 5px;
      font-size: 0.8em;
      text-align: right;
    }

    button {
      background-color: chocolate;
      border-radius: 5px;
      border: 1px solid chocolate;
      color: #fff;
      font-weight: bold;
      padding: 2px;
      text-align: center;
    }

    @media (min-width: $sm-bp) {
      width: 150px;
    }
  }

  &__doors {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
</style>