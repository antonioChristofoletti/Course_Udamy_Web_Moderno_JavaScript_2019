<template>
  <div class="door">
    <div class="door__content">
      <div class="door__content__number">10</div>

      <div class="door__content__knob"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.door {
  width: 100px;
  height: 180px;
  border: 5px solid brown;

  &__content {
    background-color: chocolate;
    width: 100%;
    height: 100%;

    &__number{
        color: white;
        
    }
  }


}
</style>