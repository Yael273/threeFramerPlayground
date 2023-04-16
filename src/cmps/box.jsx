import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { utilService } from '../services/util.service'

export function Box({ color }) {

  const mesh = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame((state, delta) => (mesh.current.rotation.x += 0.009))
  useFrame((state, delta) => (mesh.current.rotation.y += 0.009))

  // const [randomColor, setRandomColor] = useState('')

    function onChangeColor() {
      const randomColor = utilService.randomColor()
      // setRandomColor(randomColor)
      return randomColor
    }


  return (
    <mesh
      // {...props}
      ref={mesh}
      scale={active ? 2 : 1.5}
      onClick={() => {
        setActive(!active)
        // onChangeColor()
      }}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? onChangeColor() : color} />
    </mesh>

  )
}
