import "./styles.css";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  PerspectiveCamera,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Diamond from "./components/Diamond";

export default function App() {
  return (
    <Canvas shadows camera={{ position: [-5, 0.5, 6], fov: 45 }}>
      <color attach="background" args={["#f0f0f0"]} />
      <PerspectiveCamera makeDefault position={[1, 1.5, 2.5]} fov={75} />
      <Diamond rotation={[0, 0, 0.715]} position={[0, -0.175 + 0.5, 0]} />
      <AccumulativeShadows
        temporal
        frames={100}
        color="orange"
        colorBlend={2}
        toneMapped={true}
        alphaTest={0.7}
        opacity={1}
        scale={12}
        position={[0, -0.5, 0]}
      >
        <RandomizedLight
          amount={8}
          radius={10}
          ambient={0.5}
          position={[5, 5, -10]}
          bias={0.001}
        />
      </AccumulativeShadows>
      <EffectComposer>
        <Bloom luminanceThreshold={1} intensity={2} levels={4} mipmapBlur />
      </EffectComposer>
      <OrbitControls
        makeDefault
        autoRotate
        autoRotateSpeed={1}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
      />
    </Canvas>
  );
}
