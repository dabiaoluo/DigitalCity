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
import {
  leftDownAction,
  mouseMoveAction,
  leftUpAction,
} from "./CesiumTool/dragModel.js";
import initMouseEventHandler from './CesiumTool/mouseEvent'
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
        lng: -74.01340883113373,
        lat: 40.707910489413905,
        alt: 0,
        heading: 20.4,
      },
      modelUrl: "../../../Model/manhatton.glb",
      scale: 0.75,
    };
    return { position, hpr, mhtModel };
  },
  mounted() {
    let viewer = initCesiumInstens("base");
    initMouse();
    controlCamera(this.position, this.hpr, 0);
    createModel(this.mhtModel, this.mhtModel.position);
    // initMouseEventHandler(viewer,'leftDown',leftDownAction)
    // initMouseEventHandler(viewer,'mouseMove',mouseMoveAction)
    // initMouseEventHandler(viewer,'leftUp',leftUpAction)
  },
};
</script>
<style lang="scss" scoped>
</style>