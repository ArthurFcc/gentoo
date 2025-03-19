import { OrbitControls } from "three/examples/jsm/Addons.js";

function setSceneControls(camera, renderer) {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.5, 0);
    controls.update();
    controls.enablePan = false;
    controls.enableDamping = true;

    return controls;
}

export { setSceneControls }