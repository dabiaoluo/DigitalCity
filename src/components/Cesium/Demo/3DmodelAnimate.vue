<template>
  <div id="baseDom"></div>
</template>
<script>
import {
  initCesiumInstens,
  initMouse,
  initCamera,
  initModel,
} from "../CesiumTool/init";
export default {
  data() {
    const CesiumAir = {
      id: "plane",
      name: "plane",
      type: "plane",
      modelUrl: "../../../Model/CesiumAir/Cesium_Air.glb",
      scale: 1,
      position: {
        lng: 120.75046120224398,
        lat: 31.303145756426073,
        alt: 200,
        heading: 0,
        pitch: 0,
        roll: 0,
      },
    };
    return { CesiumAir };
  },
  mounted() {
    initCesiumInstens("baseDom");
    initMouse();
    initCamera(
      {
        lng: 120.75046120224398,
        lat: 31.303145756426073,
        alt: 300,
      },
      {
        heading: 305.86394568185557,
        pitch: -35.95001366757908,
        roll: 0.00042978646862246097,
      },
      3
    );
    initModel(this.CesiumAir, this.CesiumAir.position);
  },
};
</script>
<style lang="scss" scoped>
</style>