import { useLoader } from "@react-three/fiber";
import { RGBELoader } from "three-stdlib";
import {
  useGLTF,
  CubeCamera,
  MeshRefractionMaterial,
  Caustics,
} from "@react-three/drei";

export default function Diamond(props) {
  const { scene } = useGLTF("/diamond.glb");
  const texture = useLoader(RGBELoader, "/environment.hdr");

  return (
    <CubeCamera resolution={10} frames={1} envMap={texture}>
      {(texture) => (
        <Caustics
          backfaces
          color={"white"}
          position={[0, -0.5, 0]}
          lightSource={[5, 5, -10]}
          worldRadius={0.1}
          ior={1.8}
          backfaceIor={1.1}
          intensity={0.1}
        >
          <mesh
            castShadow
            geometry={scene.children[0].geometry}
            {...props}
            object={scene}
          >
            <MeshRefractionMaterial
              envMap={texture}
              fresnel={1}
              ior={2.2}
              aberrationStrength={0.03}
              bounces={4}
              color={"white"}
            />
          </mesh>
        </Caustics>
      )}
    </CubeCamera>
  );
}
