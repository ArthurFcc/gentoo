import * as THREE from "three";

function setCamera() {
    const fov = 40;
    const aspectRatio = window.innerWidth / (window.innerHeight * 0.83);
    const camera = new THREE.PerspectiveCamera(fov, aspectRatio);

    camera.rotation.order = "YXZ";
    camera.position.z = 3.5;
    return camera;
}

export { setCamera }