<template>
  <div class="home">
    <cmp />
  </div>
</template>

<script>
// @ is an alias to /src
import cmp from "../components/Cesium/Demo/3DmodelAnimate.vue";
export default {
  name: "Home",
  components: {
    cmp,
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
