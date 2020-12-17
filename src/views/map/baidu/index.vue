<template>
  <div class="baidu_map_container">
    <div class="baidu_map" ref="map"></div>
  </div>
</template>

<script>
export default {
  // baidu-map二字这个名字会有冲突，因为与vue-baidu-map中的baidu-map组件名重复
  name: "baidu-maps",
  data() {
    return {};
  },
  created(){},
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      map = new BMapGL.Map(this.$refs.map);
      map.centerAndZoom(new BMapGL.Point(121.491, 31.233), 11);
    },
  },
};
</script>

<style lang="scss" scoped>
.baidu_map{
  height: 600px;
}

</style>