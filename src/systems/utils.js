import * as THREE from "three";

function axisHelper(scene) {
    var helper = new THREE.AxesHelper();
    scene.add(helper);
}

function boundingBoxHelper(scene, mesh) {
    var helper = new THREE.BoxHelper(mesh)
    scene.add(helper)
}

export { axisHelper, boundingBoxHelper }