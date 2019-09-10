<template>
  <div>
    <h1 class="calc__title mb-5">Calculator</h1>
    <div class="calc">
      <Display :displayValue="displayValue" />
      <Button label="AC" btn_span3 @onClick="clearMemory" />
      <Button label="/" btn_greyColor @onClick="addOperation" />
      <Button label="7" @onClick="addDigit" />
      <Button label="8" @onClick="addDigit" />
      <Button label="9" @onClick="addDigit" />
      <Button label="x" btn_greyColor @onClick="addOperation" />
      <Button label="4" @onClick="addDigit" />
      <Button label="5" @onClick="addDigit" />
      <Button label="6" @onClick="addDigit" />
      <Button label="-" btn_greyColor @onClick="addOperation" />
      <Button label="1" @onClick="addDigit" />
      <Button label="2" @onClick="addDigit" />
      <Button label="3" @onClick="addDigit" />
      <Button label="+" btn_greyColor @onClick="addOperation" />
      <Button label="0" btn_span2 @onClick="addDigit" />
      <Button label="." @onClick="addDigit" />
      <Button label="=" btn_greyColor @onClick="addOperation" />
    </div>
  </div>
</template>

<script>
import Button from "./Button";
import Display from "./Display";

export default {
  components: { Button, Display },
  data: function() {
    return {
      displayValue: "0",
      values: [0, 0],
      currentValuesIndex: 0,
      currentOperation: ""
    };
  },
  methods: {
    clearMemory() {
      Object.assign(this.$data, this.$options.data());
    },
    addDigit(labelValue) {
      if (labelValue == "." && this.displayValue.includes(".")) return;

      if (this.displayValue == "0") this.displayValue = "";

      this.displayValue += labelValue;

      this.values[this.currentValuesIndex] = parseFloat(this.displayValue);
    },
    addOperation(labelValue) {
      if (labelValue == "=") {
        let calculatedValue = this.values[0];

        console.log(this.currentOperation, this.values);

        if (this.currentOperation == "+") calculatedValue += this.values[1];

        if (this.currentOperation == "-") calculatedValue += this.values[1];

        if (this.currentOperation == "/") calculatedValue /= this.values[1];

        if (this.currentOperation == "*") calculatedValue *= this.values[1];

        this.values[0] = calculatedValue;
        this.displayValue = calculatedValue;
        this.currentValuesIndex = 0;

        return;
      }

      this.currentOperation = labelValue;

      this.currentValuesIndex = this.currentValuesIndex == 0 ? 1 : 0;

      this.values[this.currentValuesIndex] = parseFloat(this.displayValue);
      this.displayValue = 0;
    }
  }
};
</script>

<style>
.calc {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 65px 65px 65px 65px 65px;
  width: 250px;
  height: 400px;
  border: 2px solid #37474f;
  border-radius: 5px;
  padding: 0;
  margin: 0;
}

.calc__title {
  color: #fff;
  text-align: center;
  font-size: 2.9em;
}
</style>