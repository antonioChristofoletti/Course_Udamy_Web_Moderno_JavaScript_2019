<template>
  <div
    :class="{'door': true,'door--selected': isDoorSelected && !showGift}"
    @click="isDoorSelected = !isDoorSelected"
  >
    <div :class="{'door__content': true, 'door__content--hided': false}">
      <div class="door__content__number">{{ doorNumber}}</div>
      <div
        :class="{'door__content__knob': true,'door__content__knob--selected': isDoorSelected}"
        @click="showGift=true"
      ></div>
      <Gift :class="{'gift--hided': !hasGift || !showGift}" />
    </div>
  </div>
</template>

<script>
import Gift from "./Gift";

export default {
  components: { Gift },
  data: function() {
    return {
      showGift: false,
      isDoorSelected: false
    };
  },
  props: {
    doorNumber: { Type: String, default: "1" },
    hasGift: { Type: Boolean, default: false }
  }
};
</script>

<style lang="scss">
.door {
  width: 100px;
  height: 180px;
  border: 3px solid $door-color-details;

  &__content {
    background-color: $door-color;
    padding: 10px 0px 5px 0px;
    width: 100%;
    height: 100%;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &--hided {
      background-color: transparent;

      .door__content__number {
        display: none;
      }

      .door__content__knob {
        display: none;
      }
    }

    &__number {
      color: white;
      font-size: 1.5em;
    }

    &__knob {
      width: 15px;
      height: 15px;
      background-color: $door-color-details;
      border-radius: 50%;
      margin-left: 10px;
      align-self: flex-start;

      position: absolute;
      top: 75px;
    }
  }

  &--selected {
    border: 3px solid $door-color-details-selected;

    .door__content__number {
      color: $door-color-details-selected;
    }

    .door__content__knob {
      background-color: $door-color-details-selected;
    }
  }
}
</style>