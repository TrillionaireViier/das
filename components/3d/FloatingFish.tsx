"use client"

import { Fish3D } from "./Fish3D"
import { Bubbles3D } from "./Bubbles3D"

export function FloatingFish() {
  return (
    <>
      {/* Main hero fish */}
      <Fish3D position={[0, 0, 0]} scale={2.5} color="#8B5CF6" speed={0.6} amplitude={0.4} />

      {/* Smaller companion fish swimming around */}
      <Fish3D position={[5, 3, -3]} scale={1.2} color="#A855F7" speed={0.9} amplitude={0.6} />
      <Fish3D position={[-4, -2, 2]} scale={0.9} color="#9333EA" speed={0.7} amplitude={0.5} />
      <Fish3D position={[3, -4, -2]} scale={1.4} color="#7C3AED" speed={0.8} amplitude={0.7} />
      <Fish3D position={[-6, 1, 3]} scale={1.1} color="#6D28D9" speed={1.0} amplitude={0.4} />

      {/* Small fish particles for ambient effect */}
      <Bubbles3D count={20} />
    </>
  )
}
