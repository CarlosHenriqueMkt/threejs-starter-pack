import * as THREE from 'three';

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

const aspectRatio = sizes.width / sizes.height

let renderer, scene, camera, mesh, geometry, material, canvas;
const clock = new THREE.Clock()

experience();
animate();

function experience() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(65, aspectRatio, 1, 1000);
  camera.position.z = 5
  scene.add(camera);

  geometry = new THREE.BoxGeometry(1, 1, 1);
  material = new THREE.MeshNormalMaterial();
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
  });

  canvas = document.getElementById('app');
  renderer = new THREE.WebGLRenderer(
    { 
      antialias: true, 
      alpha: true 
    }
  );
  renderer.shadowMap = true
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  canvas.appendChild(renderer.domElement);
  renderer.render(scene, camera);
}

function animate() {

  const elapsedTime = clock.getElapsedTime()

  const meshMoviment = elapsedTime * 0.5

  mesh.rotation.x = Math.sin(meshMoviment) * 1
  mesh.rotation.y = Math.sin(meshMoviment) * 1
  mesh.rotation.z = Math.sin(meshMoviment) * 1

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
