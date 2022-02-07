<template>
  <div class="home">
    <Cesium/>
  </div>
</template>

<script>
// @ is an alias to /src
import Cesium from "../components/Cesium/index.vue";
export default {
  name: "Home",
  components: {
    Cesium,
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
