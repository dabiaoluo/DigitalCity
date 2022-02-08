let leftDownFlag = false; // 鼠标左键是否按下
let pickedEntity = null; //被选中的Entity
// 拖拽模型-左键按下
function leftDownAction(e, viewer) {
    let picked = viewer.scene.pick(e.position);
    console.log(picked)
    leftDownFlag = true;
    if (picked) {
        document.body.style.cursor = 'move';
        pickedEntity = Cesium.defaultValue(picked.id, picked.primitive.id);
        if (pickedEntity instanceof Cesium.Entity && pickedEntity.model) {
            //锁定相机
            viewer.scene.screenSpaceCameraController.enableRotate = false;
        }
    }
}

// 拖拽模型-鼠标移动
function mouseMoveAction(e, viewer, fn) {
    if (leftDownFlag && pickedEntity) {
        let cartesian = viewer.scene.pickPosition(e.endPosition);
        pickedEntity.position = cartesian
        fn ? fn(pickedEntity) : null
    }
}

// 拖拽模型-左键抬起
function leftUpAction(e, viewer) {
    document.body.style.cursor = 'default';
    leftDownFlag = false;
    pickedEntity = null;
    // 解除相机锁定
    viewer.scene.screenSpaceCameraController.enableRotate = true;
}
export {
    leftDownAction,
    mouseMoveAction,
    leftUpAction
}