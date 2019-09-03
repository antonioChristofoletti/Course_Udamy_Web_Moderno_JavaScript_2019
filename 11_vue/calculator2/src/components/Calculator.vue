<template>
  <div>
    <h1 class="calc__title mb-5">Calculator</h1>
    <div class="calc">
      <Display />
      <Button label="AC" btn_span3 />
      <Button label="/" btn_greyColor/>
      <Button label="7" />
      <Button label="8" />
      <Button label="9" />
      <Button label="x" btn_greyColor/>
      <Button label="4" />
      <Button label="5" />
      <Button label="6" />
      <Button label="-" btn_greyColor/>
      <Button label="1" />
      <Button label="2" />
      <Button label="3" />
      <Button label="+" btn_greyColor/>
      <Button label="0" btn_span2 />
      <Button label="." />
      <Button label="=" btn_greyColor/>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
import Display from "./Display";

export default {
  components: { Button, Display }
};
</script>

<style>
.calc {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 65px 65px 65px 65px 65px;
  width: 300px;
  height: 400px;
}

.calc__title {
  color: #fff;
  text-align: center;
  font-size: 2.9em;
}
</style>