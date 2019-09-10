<template>
  <div class="display">{{displayValue}}</div>
</template>

<script>
export default {
  props: {
    displayValue: ""
  }
};
</script>

<style>
.display {
  grid-column: span 4;
  background-color: #37474f;
  color: #fff;
  font-size: 1.8em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 15px;
  overflow: hidden;
}
</style>