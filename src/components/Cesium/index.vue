<template>
  <div id="base"></div>
</template>
<script>
import {
  initCesiumInstens,
  initMouse,
  controlCamera,
  createModel,
} from "./CesiumTool/init";
export default {
  name: "CesiumInstens",
  data() {
    //   cameraDefaultPosition
    let position = {
      lng: -74.0188130280024,
      lat: 40.69114333714821,
      alt: 753,
    };
    // cameraDefaultHpr
    let hpr = {
      h: 21.27879878293835,
      p: -21.34390550872461,
      r: 0.0716951918898415,
    };
    // manhattonModel
    let mhtModel = {
      id: "ciryMht",
      name: "ciryMht",
      type: "city",
      position: {
        lng: -74.0088130280024,
        lat: 40.70714333714821,
        alt: 0,
        heading:45
      },
      modelUrl:"../../../Model/manhatton.glb",
      scale:0.8
    };
    return { position, hpr ,mhtModel};
  },
  methods: {},
  mounted() {
    initCesiumInstens("base");
    initMouse();
    controlCamera(this.position, this.hpr);
    createModel(this.mhtModel,this.mhtModel.position)
  },
};
</script>
<style lang="scss" scoped>
</style>