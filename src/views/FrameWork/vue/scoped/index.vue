<template>
  <div class="scoped_container">
    <iframe
      :src="vueScoped"
      frameborder="0"
      class="pc iframe"
      scrolling="auto"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "scoped",
  data() {
    return {
      vueScoped:
        "https://vue-loader.vuejs.org/zh/guide/scoped-css.html#%E6%B7%B7%E7%94%A8%E6%9C%AC%E5%9C%B0%E5%92%8C%E5%85%A8%E5%B1%80%E6%A0%B7%E5%BC%8F",
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.scoped_container {
  position: relative;
  width: 100%;
  height: calc(100vh - 122px);
  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>