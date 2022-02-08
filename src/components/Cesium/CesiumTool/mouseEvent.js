// Cesium鼠标事件
// 实例化handler
function initMouseEventHandler(viewer, type, action) {
    const handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
    switch (type) {
        case 'leftClick':
            return handler.setInputAction((event) => { action(event,viewer) }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
        case 'middleClick':
            return handler.setInputAction((event) => { action(event,viewer) }, Cesium.ScreenSpaceEventType.MIDDLE_DOWN)
        case 'rightClick':
            return handler.setInputAction((event) => { action(event,viewer) }, Cesium.ScreenSpaceEventType.RIGHT_CLICK)
        case 'leftDown':
            return handler.setInputAction((event) => { action(event,viewer) }, Cesium.ScreenSpaceEventType.LEFT_DOWN)
        case 'mouseMove':
            return handler.setInputAction((event) => { action(event,viewer) }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
        case 'leftUp':
            return handler.setInputAction((event) => { action(event,viewer) }, Cesium.ScreenSpaceEventType.LEFT_UP)
    }
}
export default initMouseEventHandler