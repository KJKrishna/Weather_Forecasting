// src/Sphere.js
// import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';

// const Sphere = () => {
//   const canvasRef = useRef();
//   const [spherePosition, setSpherePosition] = useState({ x: 0, y: 0, z: 0 });
//   const sphereRef = useRef();

//   useEffect(() => {
//     // Scene and Camera
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 20;

//     // Sphere Geometry and Material
//     const geometry = new THREE.SphereGeometry(3, 64, 64);
//     const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
//     const mesh = new THREE.Mesh(geometry, material);
//     mesh.position.set(spherePosition.x, spherePosition.y, spherePosition.z);
//     scene.add(mesh);
//     sphereRef.current = mesh;  // Store reference to the sphere

//     // Lighting
//     const light = new THREE.DirectionalLight(0xffffff, 1);
//     light.position.set(10, 10, 10);
//     scene.add(light);

//     // Renderer
//     const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     // Raycaster and Mouse
//     const raycaster = new THREE.Raycaster();
//     const mouse = new THREE.Vector2();

//     // Animation Loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     };

//     // Mouse Click Event Listener
//     const onMouseClick = (event) => {
//       mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//       mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//       raycaster.setFromCamera(mouse, camera);

//       const intersects = raycaster.intersectObject(mesh);
//       if (intersects.length > 0) {
//         const newPosition = {
//           x: (Math.random() - 0.5) * 20,
//           y: (Math.random() - 0.5) * 20,
//           z: (Math.random() - 0.5) * 20,
//         };
//         setSpherePosition(newPosition);
//       }
//     };

//     window.addEventListener('click', onMouseClick);

//     animate();

//     return () => {
//       window.removeEventListener('click', onMouseClick);
//     };
//   }, [spherePosition]);

//   useEffect(() => {
//     if (sphereRef.current) {
//       sphereRef.current.position.set(spherePosition.x, spherePosition.y, spherePosition.z);
//     }
//   }, [spherePosition]);

//   return <canvas className="webgl" ref={canvasRef} />;
// };

// export default Sphere;


// ---------------------------------------------------------------

import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import EarthDayMap from ".//textures/8k_earth_daymap.jpg";
import EarthNormalMap from ".//textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from ".//textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from ".//textures/8k_earth_clouds.jpg";
import { TextureLoader } from "three";

export function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      <ambientLight intensity={2} />
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={cloudsRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
}