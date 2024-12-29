'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { sRGBEncoding } from 'three'; // Import sRGBEncoding separately

const Globe = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 3],
        fov: 60,
        near: 0.1,
        far: 1000,
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
      }}
      gl={{
        toneMapping: THREE.ACESFilmicToneMapping,
        outputEncoding: sRGBEncoding,
      }}
    >
      <OrbitControls
        minDistance={1.5} // Minimum zoom distance (prevents zooming too close)
        maxDistance={5} // Maximum zoom distance (prevents zooming too far)
      />

      {/* Ambient light (increase intensity for brighter overall lighting) */}
      <ambientLight intensity={3.2} /> {/* Increased ambient light intensity */}

      {/* Directional light (adjust for more brightness and contrast) */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={2.5} // Increased directional light intensity
        castShadow
      />

      {/* Point lights (added to balance the scene further) */}
      <pointLight
        position={[-5, -5, 5]}
        intensity={1.8} // Increased point light intensity
        decay={2}
      />
      <pointLight
        position={[5, -5, -5]}
        intensity={1.8} // Increased point light intensity
        decay={2}
      />

      {/* Globe sphere with earth texture */}
      <Sphere args={[1, 64, 64]}>
        <meshStandardMaterial
          map={new THREE.TextureLoader().load('/earth.jpeg')}
          roughness={0.8} // Adjust roughness for brighter surface
          metalness={0.0} // Keep metalness low for matte look
        />
      </Sphere>
    </Canvas>
  );
};

export default Globe;
