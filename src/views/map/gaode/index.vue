<template>
  <div class="gaode-map_container">
    <div class="gaode_map" ref="map"></div>
  </div>
</template>

<script>
export default {
  name: "gaode-map",
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      map = new AMap.Map(this.$refs.map, {
        zoom: 12,
        center: [116.39, 39.9],
      });
      AMap.plugin("AMap.ToolBar", function () {
        //异步加载插件
        var toolbar = new AMap.ToolBar();
        map.addControl(toolbar);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.gaode_map {
  height: 600px;
}
</style>