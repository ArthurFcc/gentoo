import * as THREE from "three";

function setSceneLight(scene) {
    const xPos = 0;
    const yPos = 5;
    const zPositivePos = 5;
    const zNegativePos = -5;

    const frontLight = new THREE.DirectionalLight();
    frontLight.position.set(xPos, yPos, zPositivePos);

    const backLight = new THREE.DirectionalLight();
    backLight.position.set(xPos, yPos, zNegativePos);

    scene.add(frontLight);
    scene.add(backLight);
}

export { setSceneLight }