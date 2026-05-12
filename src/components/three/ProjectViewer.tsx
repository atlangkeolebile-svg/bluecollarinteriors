import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, RoundedBox, OrbitControls, Html } from "@react-three/drei";
import type { Group } from "three";

type CabinetVariant = "kitchen" | "wardrobe" | "vanity";

function Cabinet({ variant }: { variant: CabinetVariant }) {
  const ref = useRef<Group>(null);
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * 0.15;
  });

  const palette = {
    kitchen: { body: "#2a3690", accent: "#c9a25a", top: "#f3ede1" },
    wardrobe: { body: "#cdb6a8", accent: "#3a3a3a", top: "#f6efe6" },
    vanity: { body: "#1a2270", accent: "#c9a25a", top: "#ece4d6" },
  }[variant];

  return (
    <group ref={ref} position={[0, -0.3, 0]}>
      <RoundedBox args={[2.2, 1.6, 0.9]} radius={0.04} smoothness={4} castShadow>
        <meshStandardMaterial color={palette.body} roughness={0.4} />
      </RoundedBox>
      {/* doors */}
      {[-0.55, 0.55].map((x) => (
        <mesh key={x} position={[x, 0, 0.451]}>
          <boxGeometry args={[1.05, 1.5, 0.005]} />
          <meshStandardMaterial color={palette.body} roughness={0.35} />
        </mesh>
      ))}
      {/* handles */}
      {[-0.05, 1.15].map((x, i) => (
        <mesh key={i} position={[x - 0.55, 0, 0.46]}>
          <boxGeometry args={[0.02, 0.5, 0.02]} />
          <meshStandardMaterial color={palette.accent} metalness={1} roughness={0.25} />
        </mesh>
      ))}
      {/* top */}
      <RoundedBox args={[2.3, 0.08, 1]} radius={0.01} smoothness={3} position={[0, 0.84, 0]}>
        <meshStandardMaterial color={palette.top} roughness={0.3} />
      </RoundedBox>
    </group>
  );
}

export function ProjectViewer({ variant = "kitchen", label }: { variant?: CabinetVariant; label?: string }) {
  const [hint, setHint] = useState(true);
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-gradient-to-br from-secondary to-muted">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [2.6, 1.4, 3], fov: 40 }}
        onPointerDown={() => setHint(false)}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 5, 2]} intensity={1.1} castShadow />
          <Cabinet variant={variant} />
          <ContactShadows position={[0, -1.1, 0]} opacity={0.4} scale={6} blur={2} far={3} />
          <Environment preset="apartment" />
          <OrbitControls enablePan={false} enableZoom minDistance={2.5} maxDistance={6} maxPolarAngle={Math.PI / 1.9} />
          {hint && (
            <Html center position={[0, -1.4, 0]}>
              <div className="rounded-full bg-ink/80 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cream backdrop-blur">
                Drag to rotate · scroll to zoom
              </div>
            </Html>
          )}
        </Suspense>
      </Canvas>
      {label && (
        <div className="pointer-events-none absolute left-4 top-4 rounded-sm bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink">
          {label}
        </div>
      )}
    </div>
  );
}
