import React from 'react'
import Earth from './background'
import { Canvas } from '@react-three/fiber'
import NavBar from '../NavBar/NavBar'

const Home = () => {
  return (
    <div style={{height:'80%',overflow:'hidden'}}>
    <NavBar/>
    <Canvas>
      <Earth />
    </Canvas>
    </div>
  )
}

export default Home
