<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SRadioGroup",
  props: {
    value: {
      type: [String, Number]
    }
  },
  provide() {
    return {
      RadioGroup: this
    };
  }
};
</script>