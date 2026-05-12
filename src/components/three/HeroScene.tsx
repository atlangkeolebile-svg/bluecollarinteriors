import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, RoundedBox, MeshTransmissionMaterial } from "@react-three/drei";
import type { Group } from "three";

function Kitchen() {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    const sy = typeof window !== "undefined" ? window.scrollY : 0;
    ref.current.rotation.y = Math.sin(t * 0.25) * 0.35 + sy * 0.0015;
    ref.current.position.y = Math.sin(t * 0.6) * 0.05 - 0.2;
  });

  // colors tuned to brand: navy cabinets, brass accents, marble top
  const navy = "#2a3690";
  const navyDeep = "#1a2270";
  const brass = "#c9a25a";
  const marble = "#f4efe6";
  const wood = "#b8895a";

  return (
    <group ref={ref} position={[0, -0.2, 0]}>
      {/* Floor plate */}
      <mesh receiveShadow position={[0, -1.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[3, 64]} />
        <meshStandardMaterial color="#e8e1d1" roughness={0.9} />
      </mesh>

      {/* Island base */}
      <RoundedBox args={[3.2, 1.1, 1.4]} radius={0.04} smoothness={4} position={[0, -0.45, 0]} castShadow>
        <meshStandardMaterial color={navy} roughness={0.35} metalness={0.1} />
      </RoundedBox>

      {/* Cabinet door grooves (lines) */}
      {[-1.05, -0.35, 0.35, 1.05].map((x) => (
        <mesh key={x} position={[x, -0.45, 0.71]}>
          <boxGeometry args={[0.02, 0.95, 0.005]} />
          <meshStandardMaterial color={navyDeep} />
        </mesh>
      ))}
      {/* Brass handles */}
      {[-0.7, 0, 0.7].map((x) => (
        <mesh key={x} position={[x, -0.05, 0.72]}>
          <boxGeometry args={[0.35, 0.02, 0.02]} />
          <meshStandardMaterial color={brass} metalness={1} roughness={0.25} />
        </mesh>
      ))}

      {/* Marble top */}
      <RoundedBox args={[3.4, 0.12, 1.55]} radius={0.02} smoothness={3} position={[0, 0.16, 0]} castShadow>
        <meshStandardMaterial color={marble} roughness={0.25} metalness={0.05} />
      </RoundedBox>

      {/* Waterfall edge */}
      <RoundedBox args={[0.12, 1.25, 1.55]} radius={0.02} smoothness={3} position={[1.7, -0.4, 0]}>
        <meshStandardMaterial color={marble} roughness={0.25} />
      </RoundedBox>

      {/* Tall cabinet at back */}
      <RoundedBox args={[1.6, 2.4, 0.6]} radius={0.04} smoothness={4} position={[-1.1, 0.3, -1.4]} castShadow>
        <meshStandardMaterial color={navyDeep} roughness={0.4} />
      </RoundedBox>
      <mesh position={[-1.1, 0.3, -1.09]}>
        <boxGeometry args={[1.55, 0.02, 0.005]} />
        <meshStandardMaterial color={brass} metalness={1} roughness={0.3} />
      </mesh>

      {/* Wood accent panel */}
      <RoundedBox args={[1.0, 2.4, 0.3]} radius={0.02} smoothness={4} position={[0.3, 0.3, -1.55]}>
        <meshStandardMaterial color={wood} roughness={0.7} />
      </RoundedBox>

      {/* Open shelving */}
      <RoundedBox args={[1.4, 1.1, 0.35]} radius={0.02} smoothness={3} position={[1.55, 0.6, -1.5]}>
        <meshStandardMaterial color={marble} roughness={0.4} />
      </RoundedBox>
      {[-0.25, 0.15, 0.55].map((y) => (
        <mesh key={y} position={[1.55, y, -1.35]}>
          <boxGeometry args={[1.3, 0.02, 0.05]} />
          <meshStandardMaterial color={navyDeep} />
        </mesh>
      ))}

      {/* Pendant lights */}
      {[-0.6, 0.6].map((x) => (
        <group key={x} position={[x, 1.6, 0]}>
          <mesh>
            <cylinderGeometry args={[0.005, 0.005, 1.4]} />
            <meshStandardMaterial color="#222" />
          </mesh>
          <Float speed={2} floatIntensity={0.15} rotationIntensity={0.2}>
            <mesh position={[0, -0.8, 0]} castShadow>
              <sphereGeometry args={[0.18, 32, 32, 0, Math.PI * 2, 0, Math.PI / 1.6]} />
              <meshStandardMaterial color={brass} metalness={1} roughness={0.2} side={2} />
            </mesh>
            <pointLight position={[0, -0.85, 0]} intensity={1.2} color="#fff1d0" distance={3} />
          </Float>
        </group>
      ))}

      {/* Glass vase */}
      <Float speed={1.2} floatIntensity={0.2}>
        <mesh position={[-1.0, 0.45, 0.2]} castShadow>
          <cylinderGeometry args={[0.1, 0.13, 0.32, 32]} />
          <MeshTransmissionMaterial thickness={0.4} roughness={0} transmission={1} ior={1.4} chromaticAberration={0.02} backside />
        </mesh>
      </Float>
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [3.5, 1.6, 4.2], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.35} />
        <directionalLight
          position={[4, 6, 3]}
          intensity={1.2}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <Kitchen />
        <ContactShadows position={[0, -1.04, 0]} opacity={0.45} scale={8} blur={2.4} far={3} />
        <Environment preset="apartment" />
      </Suspense>
    </Canvas>
  );
}
