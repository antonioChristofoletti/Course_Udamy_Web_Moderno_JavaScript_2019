<template>
  <button
    @click="$emit('onClick', label)"
    class="button"
    :class="{btn_span2, btn_span3, btn_greyColor}"
  >{{label}}</button>
</template>

<script>
export default {
  props: {
    label: {},
    btn_span2: { type: Boolean },
    btn_span3: { type: Boolean },
    btn_greyColor: { type: Boolean }
  }
};
</script>

<style>
.button {
  margin: 0;
  padding: 0;
  background-color: #fff;
  border: 1px solid #37474f;
  font-size: 1.5em;
}

.button:active {
  background-color: #e0e0e0;
}

.button:focus {
  outline: 0;
}

.btn_span2 {
  grid-column: span 2;
}

.btn_span3 {
  grid-column: span 3;
}

.btn_greyColor {
  background-color: #90f2ca;
}

.btn_greyColor:active {
  background-color: #7df0c1;
}
</style>