"use client"

import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera, Environment, OrbitControls } from "@react-three/drei"

function FloatingBox() {
  return (
    <mesh rotation={[0.4, 0.4, 0]} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color="#9333ea" shininess={100} />
    </mesh>
  )
}

function Sphere() {
  return (
    <mesh position={[2.5, 0, -1]}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial color="#a855f7" metalness={0.8} roughness={0.2} />
    </mesh>
  )
}

function Torus() {
  return (
    <mesh rotation={[0.3, 0, 0.2]} position={[-2, 0.5, -1]}>
      <torusGeometry args={[0.6, 0.2, 16, 100]} />
      <meshStandardMaterial color="#d946ef" metalness={0.7} roughness={0.3} />
    </mesh>
  )
}

export function Scene3D() {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <Environment preset="city" />
      <FloatingBox />
      <Sphere />
      <Torus />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
    </Canvas>
  )
}
