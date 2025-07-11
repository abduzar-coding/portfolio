import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function createCircleTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  // Clear background
  ctx.clearRect(0, 0, size, size);

  // Draw white circle
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.fill();

  return new THREE.CanvasTexture(canvas);
}

function Particles() {
  const ref = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(500 * 3);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  const velocities = useMemo(() => {
    const arr = new Float32Array(500 * 3);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = (Math.random() - 0.5) * 0.01;
    }
    return arr;
  }, []);

  // Generate the circle texture once
  const circleTexture = useMemo(() => createCircleTexture(), []);

  useFrame(({ mouse }) => {
    const geo = ref.current.geometry;
    const pos = geo.attributes.position.array;

    for (let i = 0; i < pos.length; i++) {
      pos[i] += velocities[i];
      if (pos[i] > 5 || pos[i] < -5) {
        velocities[i] *= -1;
      }
    }

    geo.attributes.position.needsUpdate = true;

    ref.current.rotation.y = mouse.x * 0.3;
    ref.current.rotation.x = mouse.y * 0.3;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        map={circleTexture}          // Use circular texture here!
        color="#0ea5e9"
        size={0.03}
        sizeAttenuation
        transparent
        opacity={0.8}
        depthWrite={false}
        alphaTest={0.01}             // Important for transparency
      />
    </points>
  );
}

export default function ParticlesScene() {
  return (
    <Canvas
      className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <Particles />
    </Canvas>
  );
}
