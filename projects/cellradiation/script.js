let scene, camera, renderer, controls, sphere;

function cancer(){
    sessionStorage.setItem("cancer", "true");
    location.reload();
}

function survival(){
    sessionStorage.setItem("survival", "true");
    location.reload();
}

function death(){
    sessionStorage.setItem("death", "true");
    location.reload();
}

function init(){
  scene = new THREE.Scene();
  scene.background = new THREE.Color("#000000");
  camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  //controls = new THREE.OrbitControls( camera, renderer.domElement );
  //controls.autoRotate = false;
  
  var light = new THREE.DirectionalLight(0xffffff, 1.2);
  light.position.set(100, 100, 100);
  scene.add(light);
  
  var sphereGeometry = new THREE.SphereGeometry(1, 128, 128);
  // const material = new THREE.MeshBasicMaterial({color: color1});
  addCells();
  function addCells(){
    for (let i = 0; i < 1; i++) {
        let color1 = new THREE.Color("#EDBB99");
        var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
        sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.x = i + 1;
        sphere.position.y = i + 1;
        scene.add(sphere);
    }
    for (let i = 0; i < 1; i++) {
        let color1 = new THREE.Color("#EDBB99");
        var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
        sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.x = i + 3;
        sphere.position.y = i + 1;
        scene.add(sphere);
    }
    for (let i = 0; i < 1; i++) {
        let color1 = new THREE.Color("#EDBB99");
        var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
        sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.x = i + 3;
        sphere.position.y = i - 1;
        scene.add(sphere);
    }
    for (let i = 0; i < 1; i++) {
        let color1 = new THREE.Color("#EDBB99");
        var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
        sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.x = i + 1;
        sphere.position.y = i - 1;
        scene.add(sphere);
    }
    for (let i = 0; i < 1; i++) {
        let color1 = new THREE.Color("#EDBB99");
        var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
        sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.x = i + 2;
        sphere.position.y = i;
        scene.add(sphere);
        if(sessionStorage.getItem("cancer") == "true"){
            setTimeout(() => {
                let color1 = new THREE.Color("#DBD100");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 2000);
            setTimeout(() => {
                let color1 = new THREE.Color("#DBD100");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 3;
                sphere.position.y = i + 1;
                scene.add(sphere);
            }, 4000);
            setTimeout(() => {
                let color1 = new THREE.Color("#DBD100");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 3;
                sphere.position.y = i - 1;
                scene.add(sphere);
            }, 6000);
            setTimeout(() => {
                let color1 = new THREE.Color("#DBD100");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 1;
                sphere.position.y = i + 1;
                scene.add(sphere);
            }, 8000);
            setTimeout(() => {
                let color1 = new THREE.Color("#DBD100");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 1;
                sphere.position.y = i - 1;
                scene.add(sphere);
            }, 10000);
            setTimeout(() => {
                let color1 = new THREE.Color("#DBD100");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i - 1.5;
                scene.add(sphere);
            }, 12000);
            setTimeout(() => {
                let color1 = new THREE.Color("#DBD100");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i + 1.5;
                scene.add(sphere);
            }, 14000);
            setTimeout(() => {
                let color1 = new THREE.Color("#DBD100");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i;
                sphere.position.y = i;
                scene.add(sphere);
            }, 16000);
            setTimeout(() => {
                let color1 = new THREE.Color("#DBD100");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 4;
                sphere.position.y = i;
                scene.add(sphere);
            }, 17000);
            sessionStorage.setItem("cancer", "false");
        }
        if(sessionStorage.getItem("survival") == "true"){ // Survival animation
            setTimeout(() => {
                let color1 = new THREE.Color("#EDBB99");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 1000);
            setTimeout(() => {
                let color1 = new THREE.Color("#EDCA9A");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 2000);
            setTimeout(() => {
                let color1 = new THREE.Color("#DBBA8E");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 3000);
            setTimeout(() => {
                let color1 = new THREE.Color("#CDAE84");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 4000);
            setTimeout(() => {
                let color1 = new THREE.Color("#B19672");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 5000);
            setTimeout(() => {
                let color1 = new THREE.Color("#8F7A5C");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 6000);
            setTimeout(() => {
                let color1 = new THREE.Color("#705F48");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 7000);
            setTimeout(() => {
                let color1 = new THREE.Color("#5B4D3A");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 8000);
            setTimeout(() => {
                let color1 = new THREE.Color("#41372A");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 9000);
            setTimeout(() => {
                let color1 = new THREE.Color("#272119");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 10000);
            setTimeout(() => {
                let color1 = new THREE.Color("#41372A");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 11000);
            setTimeout(() => {
                let color1 = new THREE.Color("#5B4D3A");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 12000);
            setTimeout(() => {
                let color1 = new THREE.Color("#705F48");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 13000);
            setTimeout(() => {
                let color1 = new THREE.Color("#8F7A5C");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 14000);
            setTimeout(() => {
                let color1 = new THREE.Color("#B19672");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 15000);
            setTimeout(() => {
                let color1 = new THREE.Color("#CDAE84");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 16000);
            setTimeout(() => {
                let color1 = new THREE.Color("#DBBA8E");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 17000);
            setTimeout(() => {
                let color1 = new THREE.Color("#EDCA9A");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 18000);
            setTimeout(() => {
                let color1 = new THREE.Color("#EDBB99");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 19000);
            sessionStorage.setItem("survival", "false");
        }
        if(sessionStorage.getItem("death") == "true"){ // Death animation
            setTimeout(() => {
                let color1 = new THREE.Color("#EDBB99");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 1000);
            setTimeout(() => {
                let color1 = new THREE.Color("#EDCA9A");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 2000);
            setTimeout(() => {
                let color1 = new THREE.Color("#DBBA8E");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 3000);
            setTimeout(() => {
                let color1 = new THREE.Color("#CDAE84");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 4000);
            setTimeout(() => {
                let color1 = new THREE.Color("#B19672");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 5000);
            setTimeout(() => {
                let color1 = new THREE.Color("#8F7A5C");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 6000);
            setTimeout(() => {
                let color1 = new THREE.Color("#705F48");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 7000);
            setTimeout(() => {
                let color1 = new THREE.Color("#5B4D3A");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 8000);
            setTimeout(() => {
                let color1 = new THREE.Color("#41372A");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 9000);
            setTimeout(() => {
                let color1 = new THREE.Color("#272119");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 10000);
            setTimeout(() => {
                let color1 = new THREE.Color("#110F0B");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 11000);
            setTimeout(() => {
                let color1 = new THREE.Color("#000000");
                var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
                sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
                sphere.position.x = i + 2;
                sphere.position.y = i;
                scene.add(sphere);
            }, 12000);
            sessionStorage.setItem("death", "false");
        }
    }
    for (let i = 0; i < 1; i++) {
        let color1 = new THREE.Color("#EDBB99");
        var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
        sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.x = i + 4;
        sphere.position.y = i;
        scene.add(sphere);
    }
    for (let i = 0; i < 1; i++) {
        let color1 = new THREE.Color("#EDBB99");
        var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
        sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.x = i;
        sphere.position.y = i;
        scene.add(sphere);
    }
    for (let i = 0; i < 1; i++) {
        let color1 = new THREE.Color("#EDBB99");
        var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
        sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.x = i + 2;
        sphere.position.y = i + 1.5;
        scene.add(sphere);
    }
    for (let i = 0; i < 1; i++) {
        let color1 = new THREE.Color("#EDBB99");
        var sphereMaterial = new THREE.MeshLambertMaterial({color: color1});
        sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.x = i + 2;
        sphere.position.y = i - 1.5;
        scene.add(sphere);
    }
  }
  
//   const geometry = new THREE.BoxGeometry( 2, 2, 2);
//   const color1 = new THREE.Color("#09143c");
//   const material = new THREE.MeshBasicMaterial({color: color1});
  
  
//   cube = new THREE.Mesh(geometry, material);
//   scene.add(cube);
  camera.position.z = 5;
}

function onWindowResize(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

function update(){
  
  var time = performance.now() * 0.001;
  for (var i=0; i < sphere.geometry.vertices.length; i++){
    var p = sphere.geometry.vertices[i];
    p.normalize().multiplyScalar(1 + 0.3 * noise.perlin3(p.x + time, p.y, p.z));
  }
  sphere.geometry.verticesNeedUpdate = true;
  sphere.geometry.computeVertexNormals();
  sphere.geometry.normalsNeedUpdate = true;
}

function animate(){
  requestAnimationFrame(animate);
  //controls.update();
  update();
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

init();

animate();