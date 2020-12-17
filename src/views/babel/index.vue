<template>
  <div class="babel_container">
    <h1 style="text-align: center; color: red">{{ $route.meta.title }}</h1>
  </div>
</template>

<script>
let map = null;
export default {
  name: "babel_index",
  data() {
    return {};
  },
  created() {},
  mounted() {
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/babel/index.scss";
</style>