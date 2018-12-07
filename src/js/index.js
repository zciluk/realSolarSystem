
var camera, scene, renderer;
var geometry, material, mesh;
const distance = 1;
 var scale = 1;
init();
animate();

function init() {
    // instantiate a loader
	camera = new THREE.PerspectiveCamera( 100, (window.innerWidth)  / (window.innerHeight) , 0.01, 10000 );
    scene = new THREE.Scene();
    //set back the camera to see full scene
    camera.position.z = 2;

    

    // load background star texture
    scene.background = new THREE.TextureLoader().load('../texture/stars.png');
    
    //setting the planets
    // load textures
    const sunTexture = new THREE.TextureLoader().load('../texture/2k_sun.jpg');
    const mercuryTexture = new THREE.TextureLoader().load('../texture/2k_mercury.jpg');
    const venusTexture = new THREE.TextureLoader().load('../texture/2k_venus.jpg');
    const earthTexture = new THREE.TextureLoader().load('../texture/earth.jpg');
    const marsTexture = new THREE.TextureLoader().load('../texture/2k_mars.jpg');
    const jupiterTexture = new THREE.TextureLoader().load('../texture/2k_jupiter.jpg');
    const saturnTexture = new THREE.TextureLoader().load('../texture/2k_saturn.jpg');
    const uranusTexture = new THREE.TextureLoader().load('../texture/2k_uranus.jpg');
    const neptuneTexture = new THREE.TextureLoader().load('../texture/2k_neptune.jpg');

    // Earth
    
    sun = new THREE.Mesh( geometry = new THREE.SphereGeometry(0.539, 32, 32), 
    new THREE.MeshBasicMaterial( { map: sunTexture }));
    mercury = new THREE.Mesh( geometry = new THREE.SphereGeometry(0.0018, 32, 32), 
    new THREE.MeshBasicMaterial( { map: mercuryTexture }));
    venus = new THREE.Mesh( geometry = new THREE.SphereGeometry(0.0046, 32, 32), 
    new THREE.MeshBasicMaterial( { map: venusTexture }));
    earth = new THREE.Mesh( geometry = new THREE.SphereGeometry(0.0049, 32, 32), 
    new THREE.MeshBasicMaterial( { map: earthTexture }));
    mars = new THREE.Mesh( geometry = new THREE.SphereGeometry(0.0026, 32, 32), 
    new THREE.MeshBasicMaterial( { map: marsTexture }));
    jupiter = new THREE.Mesh( geometry = new THREE.SphereGeometry(0.05, 32, 32), 
    new THREE.MeshBasicMaterial( { map: jupiterTexture }));
    saturn = new THREE.Mesh( geometry = new THREE.SphereGeometry(0.046, 32, 32), 
    new THREE.MeshBasicMaterial( { map: saturnTexture }));
    uranus = new THREE.Mesh( geometry = new THREE.SphereGeometry(0.020, 32, 32), 
    new THREE.MeshBasicMaterial( { map: uranusTexture }));
    neptune = new THREE.Mesh( geometry = new THREE.SphereGeometry(0.019, 32, 32), 
    new THREE.MeshBasicMaterial( { map: neptuneTexture }));
    
    
    var directionalLight = new THREE.DirectionalLight( 0xffffff, 5 );
	directionalLight.position.set( 0, 0, 0.5 ).normalize();
    scene.add( directionalLight );
    scene.add( sun );
    scene.add( mercury );
    scene.add( venus );
	scene.add( earth );
    scene.add( mars );
    scene.add( jupiter );
    scene.add( saturn );
    scene.add( uranus );
    scene.add( neptune );

    sun.position.x -= (1*5);
    mercury.position.x -= (0.6*5);
    venus.position.x -= (0.3*5);
    
    mars.position.x += (0.5*5);
    jupiter.position.x += (4.2*5);
    saturn.position.x += (8.6*5);
    uranus.position.x += (18.2*5);
    neptune.position.x += (29.0*5);
    
    //mars.position.x += 0.6;
    camera.lookAt(new THREE.Vector3(0,0,0));
    
	renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( (window.innerWidth), (window.innerHeight) );
    var controls = new THREE.OrbitControls( camera , renderer.domElement);
	controls.target.set( 0, 0, 0 );
	controls.update();
	document.body.appendChild( renderer.domElement );
    
}
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
function animate() {
    
    requestAnimationFrame( animate );

    sun.rotation.y += 0.001;
	mercury.rotation.y += 0.04;
    venus.rotation.y += 0.02;
    earth.rotation.y += 0.02;
    mars.rotation.y += 0.02;
    jupiter.rotation.y += 0.02;
    saturn.rotation.y += 0.02;
    uranus.rotation.y += 0.02;
    neptune.rotation.y += 0.02;
    render();

}

function render() {
    
    //document.querySelector('#info').innerHTML = ;
    scale = document.querySelector('#slider').value;
    mercury.scale.set(scale,scale,scale);
    venus.scale.set(scale,scale,scale);
    mars.scale.set(scale,scale,scale);
    jupiter.scale.set(scale,scale,scale);
    saturn.scale.set(scale,scale,scale);
    uranus.scale.set(scale,scale,scale);
    neptune.scale.set(scale,scale,scale);
    earth.scale.set(scale,scale,scale);
    
    
	renderer.render( scene, camera );
}
