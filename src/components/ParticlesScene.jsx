import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";

function Particles() {
  const ref = useRef();

  // Initial positions
  const positions = useMemo(() => {
    const arr = new Float32Array(500 * 3);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  // Velocities for each axis
  const velocities = useMemo(() => {
    const arr = new Float32Array(500 * 3);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = (Math.random() - 0.5) * 0.01; // small random velocity
    }
    return arr;
  }, []);

  useFrame(({ mouse }) => {
    const geo = ref.current.geometry;
    const pos = geo.attributes.position.array;

    for (let i = 0; i < pos.length; i++) {
      pos[i] += velocities[i];

      // Bounce particles when they reach bounds
      if (pos[i] > 5 || pos[i] < -5) {
        velocities[i] *= -1;
      }
    }

    geo.attributes.position.needsUpdate = true;

    // Add tilt effect
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
        color="#0ea5e9"
        size={0.08}
        sizeAttenuation
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </points>
  );
}

export default function ParticlesScene() {
  return (
    <Canvas
      className="fixed inset-0 -z-10 pointer-events-none"
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <Particles />
    </Canvas>
  );
}
