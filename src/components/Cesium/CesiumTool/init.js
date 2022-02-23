let viewer = null
//   初始化Cesium实例
function initCesiumInstens(containerId) {
    if (typeof containerId !== 'string') {
        console.error(`initCesiumInstens parameters are not as expected`)
    } else {
        viewer = new Cesium.Viewer(`${containerId}`, {
            animation: false,
            timeline: false,
            // baseLayerPicker: false,
            // fullscreenButton: false,
            // geocoder: false,
            // homeButton: false,
            // infoBox: false,
            // sceneModePicker: false,
            // selectionIndicator: false,
            // navigationHelpButton: false,
            scene3DOnly: true,
            shouldAnimate: true,
            imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
                url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
            })
        });
        // 左下角logo隐藏
        viewer._cesiumWidget._creditContainer.style.display = 'none'
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
function initCamera({ lng, lat, alt }, { heading, pitch, roll }, delay = 0) {
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(lng, lat, alt),
        orientation: {
            heading: Cesium.Math.toRadians(heading),
            pitch: Cesium.Math.toRadians(pitch),
            roll: Cesium.Math.toRadians(roll)
        },
        duration: delay,
    });
}
// 加载模型
function initModel(model, { lng, lat, alt, heading, pitch, roll }) {
    let orientation = Cesium.Transforms.headingPitchRollQuaternion(
        Cesium.Cartesian3.fromDegrees(lng, lat, alt),
        new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(heading), Cesium.Math.toRadians(pitch), Cesium.Math.toRadians(roll))
    );
    // console.log(model, lng, lat, alt)
    let entity = viewer.entities.add({
        id: model.id ? model.id : this.randomString(10),
        name: model.name,
        type: model.type,
        orientation: orientation,
        position: Cesium.Cartesian3.fromDegrees(lng, lat, alt),
        model: {
            uri: model.modelUrl,
            scale: model.scale,
        },
    })
    return entity;
}
export {
    initCesiumInstens,
    initMouse,
    initCamera,
    initModel
}