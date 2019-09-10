<template>
  <div class="gift">
    <div class="gift__tie-top"></div>

    <div class="gift__tie-middle"></div>
  </div>
</template>

<script>
export default {
  name: "Gift"
};
</script>

<style lang="scss">
.gift {
  width: 50px;
  height: 50px;
  background-color: green;

  position: relative;
  display: flex;
  justify-content: center;

  &__tie-top {
    width: 10px;
    height: 100%;
    background-color: red;
    position: absolute;
  }

  &__tie-middle {
    width: 100%;
    height: 10px;
    background-color: red;
    top: 22px;
    position: absolute;
  }
}
</style>