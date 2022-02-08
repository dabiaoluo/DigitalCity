let cartographic, lng, lat, alt, ellipsoid, cartesian3

// 获取模型上的坐标
function getModelPosition(position, viewer) {
    const scene = viewer.scene;
    if (scene.mode !== Cesium.SceneMode.MORPHING) {
        let pickedObject = scene.pick(position);//判断是否拾取到模型
        if (scene.pickPositionSupported && Cesium.defined(pickedObject)) {
            return cartesian2ToWGS84(position, viewer)
        }
    }
}
// 屏幕坐标转经纬度
function cartesian2ToWGS84(windowPosition, viewer) {
    let cartesian = viewer.scene.pickPosition(windowPosition);
    if (Cesium.defined(cartesian)) {
        cartographic = Cesium.Cartographic.fromCartesian(cartesian);
        lng = Cesium.Math.toDegrees(cartographic.longitude);
        lat = Cesium.Math.toDegrees(cartographic.latitude);
        alt = cartographic.height;
        return {
            lng, lat, alt
        }

    }
}
function Cartesian3ToWGS84(point) {
    var cartesian3 = new Cesium.Cartesian3(point.x, point.y, point.z);
    var cartographic = Cesium.Cartographic.fromCartesian(cartesian3);
    var lat = Cesium.Math.toDegrees(cartographic.latitude);
    var lng = Cesium.Math.toDegrees(cartographic.longitude);
    var alt = cartographic.height;
    return { lng, lat, alt };
}
function wgs84ToCartesign3(viewer, lng, lat, alt) {
    ellipsoid = viewer.scene.globe.ellipsoid;
    cartographic = Cesium.Cartographic.fromDegrees(lng, lat, alt);
    cartesian3 = ellipsoid.cartographicToCartesian(cartographic);
    return cartesian3;
}
export {
    getModelPosition,
    cartesian2ToWGS84,
    Cartesian3ToWGS84,
    wgs84ToCartesign3,
}