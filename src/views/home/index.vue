<template>
  <div class="home_container">
    <el-row style="background: #fff; padding: 16px 16px 0">
      <mix-chart />
    </el-row>
    <el-row style="background: #fff; padding: 16px 16px 0; margin-bottom: 32px">
      <line-chart />
    </el-row>
  </div>
</template>
<script>
import MixChart from "@/components/Charts/MixChart";
import LineMarker from "@/components/Charts/LineMarker";
import LineChart from "@/components/Charts/LineChart";
export default {
  name: "home",
  components: {
    MixChart,
    LineMarker,
    LineChart,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
  // 方法集合
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "~@/styles/home/index.scss";
</style>
