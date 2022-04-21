const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(new THREE.Color(0xEEEEEE), 1);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled;
document.body.appendChild(renderer.domElement);


// create the ground plane
var planeGeometry = new THREE.PlaneGeometry(60, 20);
var planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
var plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.receiveShadow = true;


const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;



function animate()
{
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;


    renderer.render(scene, camera);
}
//createCube(1, 1, 1, 0x00ff00);
animate();







//function to Create Cube with Three.js
function createCube(x, y, z, color)
{
    var geometry = new THREE.BoxGeometry(x, y, z);
    var material = new THREE.MeshBasicMaterial({ color: color });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    return cube;
}
