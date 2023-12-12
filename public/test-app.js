import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';

function main() {
    let camera, scene, renderer, canvas;

    init();
    animate();

    function init(){
        scene = new THREE.Scene();
        // scene.background = new THREE.Color(0x000000);

        camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 1, 1000);
        camera.position.z = 1;

        canvas = document.querySelector('#glCanvas');

        renderer = new THREE.WebGLRenderer({canvas, alpha: true});
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        canvas.style.setProperty("position", "fixed");
        canvas.style.setProperty("top", "0");
        canvas.style.setProperty("left", "0");
        canvas.style.setProperty("z-index", "-1");


        const plane = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight);

        const material = new THREE.ShaderMaterial({
            uniforms: {
                u_resolution: new THREE.Uniform(new THREE.Vector2()),
                u_mouse: new THREE.Uniform(new THREE.Vector2()),
                u_time: { value: 2.0}
            },
            fragmentShader: document.getElementById('fragmentShader').textContent,
        });

        const mesh = new THREE.Mesh(plane, material);
        scene.add(mesh);

        window.addEventListener( 'resize', onWindowResize );
        document.addEventListener('mousemove', onPointerMove, false);

        // canvas.setProperty("opacity", "1");
    }

    function render() {
        const object = scene.children[0];
        object.material.uniforms.u_resolution.value.x = window.innerWidth;
        object.material.uniforms.u_resolution.value.y = window.innerHeight;
        object.material.uniforms.u_time.value += 0.01;

        renderer.render(scene, camera);
    }

    function animate()
    {
        requestAnimationFrame(animate);
        render();
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    };

    function onPointerMove(event) {
        event.preventDefault();
        const mouseX = (event.clientX) * 2 - 1,
            mouseY = (event.clientY) * 2 + 1,
            object = scene.children[0];
        object.material.uniforms.u_mouse.value.x = mouseX;
        object.material.uniforms.u_mouse.value.y = mouseY;
    };
}



main();