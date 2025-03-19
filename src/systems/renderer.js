import * as THREE from "three";
import { setSceneLight } from "./light.js";
import { setCamera } from "./camera.js";
import { setSceneControls } from "./controls.js";
import { loadSTL } from "./stl_loader.js";

function createRenderer(file, canvas) {
    const scene = new THREE.Scene();
    const camera = setCamera();
    setSceneLight(scene);

    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        canvas: canvas.value,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight * 0.83);

    const controls = setSceneControls(camera, renderer);

    loadSTL(scene, file);

    window.onresize = function () {
        camera.aspect = window.innerWidth / (window.innerHeight * 0.83);
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight * 0.83);
    };

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }

    animate();
}

export { createRenderer }