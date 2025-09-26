import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, Box, Text, Cloud, Float } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const CloudParticle = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[0.3]} position={position}>
        <meshStandardMaterial color="#e2e8f0" transparent opacity={0.7} />
      </Sphere>
    </Float>
  )
}

const DevOpsContainer = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.3}>
      <Box ref={meshRef} args={[0.4, 0.4, 0.4]} position={position}>
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.8} />
      </Box>
    </Float>
  )
}

const NetworkConnection = ({ start, end }: { start: [number, number, number], end: [number, number, number] }) => {
  const points = useMemo(() => {
    return [new THREE.Vector3(...start), new THREE.Vector3(...end)]
  }, [start, end])

  return (
    <mesh>
      <tubeGeometry args={[new THREE.CatmullRomCurve3(points), 20, 0.02, 8, false]} />
      <meshStandardMaterial color="#10b981" transparent opacity={0.6} />
    </mesh>
  )
}

const Scene = () => {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  // Cloud positions
  const cloudPositions: [number, number, number][] = [
    [-3, 2, -2], [3, 1.5, -1], [-2, -1, 2], [2, -0.5, 1], [0, 2.5, 0]
  ]

  // Container positions
  const containerPositions: [number, number, number][] = [
    [-1.5, 0, 0], [1.5, 0, 0], [0, -1.5, 0], [-1, 1, -1], [1, -1, 1]
  ]

  return (
    <group ref={groupRef}>
      {/* Cloud particles */}
      {cloudPositions.map((pos, index) => (
        <CloudParticle key={`cloud-${index}`} position={pos} />
      ))}
      
      {/* DevOps containers */}
      {containerPositions.map((pos, index) => (
        <DevOpsContainer key={`container-${index}`} position={pos} />
      ))}

      {/* Network connections */}
      <NetworkConnection start={[-1.5, 0, 0]} end={[1.5, 0, 0]} />
      <NetworkConnection start={[1.5, 0, 0]} end={[0, -1.5, 0]} />
      <NetworkConnection start={[0, -1.5, 0]} end={[-1.5, 0, 0]} />
      <NetworkConnection start={[-1, 1, -1]} end={[1, -1, 1]} />

      {/* Central hub */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
        <Sphere args={[0.5]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#8b5cf6" transparent opacity={0.9} />
        </Sphere>
      </Float>

      {/* Ambient elements */}
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#3b82f6" />
    </group>
  )
}

export const CloudDevOps3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <Scene />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  )
}