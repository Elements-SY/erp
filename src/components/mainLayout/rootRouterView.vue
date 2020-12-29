<template>
  <div class="root_router_view">
    <router-view v-slot="{ Component }">
      <transition name="router-fade" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "rootRouterView",
  components: {},
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
<style lang='scss'>
.root_router_view {
  padding: 10px;
}
</style>