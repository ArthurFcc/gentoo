import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/Addons.js";

function loadSTL(scene, file) {
    const reader = new FileReader();
    reader.onload = function (event) {
        const arrayBuffer = event.target.result;
        parseSTL(scene, arrayBuffer);
    };
    reader.readAsArrayBuffer(file);
}

function parseSTL(scene, arrayBuffer) {
    const loader = new STLLoader();

    const geometry = loader.parse(arrayBuffer)
    const material = new THREE.MeshPhongMaterial({
        color: 0xfffffff,
        specular: 0x555555,
        shininess: 50,
    });
    let mesh = new THREE.Mesh(geometry, material);

    geometry.computeBoundingBox();
    const bbox = geometry.boundingBox;

    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    bbox.getCenter(center);
    bbox.getSize(size);

    const desiredSize = 1.75;
    const maxDim = Math.max(size.x, size.y, size.z);
    const scaleFactor = desiredSize / maxDim;
    mesh.scale.set(scaleFactor, scaleFactor, scaleFactor);

    mesh.rotation.x = -Math.PI / 2;
    mesh.position.y = -0.25;

    scene.add(mesh);
}

export { loadSTL }