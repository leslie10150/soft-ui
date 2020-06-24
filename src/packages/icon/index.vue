<template>
  <svg
    class="icon"
    aria-hidden="true"
    @click="handlerClick"
  >
    <use :xlink:href="IconName"></use>
  </svg>
</template>

<script>
// import "./../../assets/iconfont";

export default {
  name: "s-icon",
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    IconName() {
      return `#icon-${this.name}`;
    }
  },
  methods: {
    handlerClick() {
      this.$emit("click");
    }
  }
};
</script>
