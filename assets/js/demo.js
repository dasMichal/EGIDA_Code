

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

// rotate and position the plane
//make plane flat
plane.rotation.x = -0.5 * Math.PI;
plane.position.x = 13;
plane.position.y = 5;
plane.position.z = 0;

// add the plane to the scene
scene.add(plane);


// add subtle ambient lighting
var ambientLight = new THREE.AmbientLight(0x0c0c0c);
scene.add(ambientLight);

// add spotlight for the shadows
var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(-40, 60, -10);
spotLight.castShadow = true;
scene.add(spotLight);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;



//create controls
var controls = new function ()
{
    this.rotationSpeed = 0.02;
    this.bouncingSpeed = 0.03;
}


//create GUI 
var gui = new dat.GUI();
gui.add(controls, 'rotationSpeed', 0, 0.5);
gui.add(controls, 'bouncingSpeed', 0, 0.5);



function animate()
{
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    stats.update();
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

