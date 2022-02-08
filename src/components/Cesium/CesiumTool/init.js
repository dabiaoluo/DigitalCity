let viewer = null
//   初始化Cesium实例
function initCesiumInstens(containerId) {
    if (typeof containerId !== 'string') {
        console.error(`initCesiumInstens parameters are not as expected`)
    } else {
        viewer = new Cesium.Viewer(`${containerId}`, {
            animation: false,
            baseLayerPicker: false,
            fullscreenButton: false,
            geocoder: false,
            homeButton: false,
            infoBox: false,
            sceneModePicker: false,
            selectionIndicator: false,
            timeline: false,
            navigationHelpButton: false,
            scene3DOnly: true,
            shouleAnimate: true,
            imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
                url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
            })
        });
        // 左下角logo隐藏
        viewer._cesiumWidget._creditContainer.style.display = 'none'
        // 开启高程
        viewer.scene.globe.depthTestAgainstTerrain = true;
        return viewer
    }

}
// 鼠标操作初始化
function initMouse() {
    //设置中键放大缩小
    viewer.scene.screenSpaceCameraController.zoomEventTypes = [
        Cesium.CameraEventType.WHEEL,
        Cesium.CameraEventType.MIDDLE_DRAG,
        Cesium.CameraEventType.PINCH,
    ];
    //设置右键旋转
    viewer.scene.screenSpaceCameraController.tiltEventTypes = [
        Cesium.CameraEventType.RIGHT_DRAG,
        Cesium.CameraEventType.PINCH,

        {
            eventType: Cesium.CameraEventType.RIGHT_DRAG,
            modifier: Cesium.KeyboardEventModifier.CTRL,
        },

        {
            eventType: Cesium.CameraEventType.MIDDLE_DRAG,
            modifier: Cesium.KeyboardEventModifier.CTRL,
        },
    ];
}
// 设置相机
function controlCamera({ lng, lat, alt }, { h, p, r }, delay) {
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(lng, lat, alt),
        orientation: new Cesium.HeadingPitchRoll.fromDegrees(h, p, r),
        duration: delay,
    });
}
// 加载模型
function createModel(model, { lng, lat, alt, heading = 0, pitch = 0, roll = 0 }) {
    let orientation = Cesium.Transforms.headingPitchRollQuaternion(
        Cesium.Cartesian3.fromDegrees(lng, lat, alt),
        new Cesium.HeadingPitchRoll(heading, pitch, roll)
    );
    console.log(model, lng, lat, alt)
    let eneity = {
        id: model.id ? model.id : this.randomString(10),
        name: model.name,
        type: model.type,
        orientation: orientation,
        position: Cesium.Cartesian3.fromDegrees(lng, lat, alt),
        model: {
            uri: model.modelUrl,
            scale: model.scale,
        },
    };
    // 加载模型
    viewer.entities.add(eneity);
    return eneity;
}
export {
    initCesiumInstens,
    initMouse,
    controlCamera,
    createModel
}