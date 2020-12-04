// import * as THREE from './node_modules/three/src/Three';

// const scene = new THREE.Scene();


const GOOGLE_API_KEY = 'AIzaSyB7bKIAvkdmBtJrWh9GgNQkeL-ChFCf58c'
const GOOGLE_SHEET_ID =`1ierEhD6gcq51HAm433knjnVwey4ZE5DCnu1bW7PRG3E`
const GOOGLE_SHEET_RANGE = `Wzrost!B3:B100`
const URL = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${GOOGLE_SHEET_RANGE}?key=${GOOGLE_API_KEY}`


fetch(URL)
.then(resolve => resolve.json())
.then(resolve => console.log(resolve))



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

const animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();