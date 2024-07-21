import React from 'react'
import NavBar from './NavBar'
import Earth from './background'
import { Canvas } from '@react-three/fiber'

const Home = () => {
  return (
    <div style={{height:'75%',overflow:'hidden'}}>
    <NavBar/>
    <Canvas>
      <Earth />
    </Canvas>
    </div>
  )
}

export default Home
