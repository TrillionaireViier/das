"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface FishParticle {
  position: [number, number, number]
  speed: number
  scale: number
  opacity: number
  rotationSpeed: number
}

export function Bubbles3D({ count = 15 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null)

  const particles = useMemo(() => {
    const temp: FishParticle[] = []
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [(Math.random() - 0.5) * 25, (Math.random() - 0.5) * 25, (Math.random() - 0.5) * 25],
        speed: Math.random() * 0.015 + 0.005,
        scale: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.4 + 0.2,
        rotationSpeed: Math.random() * 0.02 + 0.01,
      })
    }
    return temp
  }, [count])

  useFrame((state) => {
    if (meshRef.current) {
      particles.forEach((particle, i) => {
        // Update particle position with swimming motion
        particle.position[0] += Math.sin(state.clock.elapsedTime + i) * particle.speed
        particle.position[1] += Math.cos(state.clock.elapsedTime * 0.7 + i) * particle.speed * 0.5

        // Reset particle when it goes too far
        if (particle.position[0] > 15) {
          particle.position[0] = -15
          particle.position[1] = (Math.random() - 0.5) * 20
          particle.position[2] = (Math.random() - 0.5) * 20
        }

        // Apply floating motion
        const floatY = Math.sin(state.clock.elapsedTime * 0.8 + i) * 0.2
        const floatZ = Math.cos(state.clock.elapsedTime * 0.6 + i) * 0.1

        const matrix = new THREE.Matrix4()
        matrix.setPosition(particle.position[0], particle.position[1] + floatY, particle.position[2] + floatZ)

        // Add rotation for fish-like movement
        const rotation = new THREE.Euler(0, state.clock.elapsedTime * particle.rotationSpeed + i, 0)
        matrix.makeRotationFromEuler(rotation)
        matrix.scale(new THREE.Vector3(particle.scale, particle.scale, particle.scale))
        matrix.setPosition(particle.position[0], particle.position[1] + floatY, particle.position[2] + floatZ)

        meshRef.current.setMatrixAt(i, matrix)
      })
      meshRef.current.instanceMatrix.needsUpdate = true
    }
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} castShadow>
      {/* Fish-like shape instead of spheres */}
      <boxGeometry args={[0.3, 0.1, 0.05]} />
      <meshStandardMaterial
        color="#9333EA"
        transparent
        opacity={0.6}
        roughness={0.3}
        metalness={0.7}
        emissive="#7C3AED"
        emissiveIntensity={0.1}
      />
    </instancedMesh>
  )
}
