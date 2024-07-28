import React, { lazy, Suspense } from 'react'
// import Earth from './background'
import { Canvas } from '@react-three/fiber'
import NavBar from '../NavBar/NavBar'

const Earth = lazy(() => import('./background'))

const Home = () => {
  return (
    <div style={{ height: '80%', overflow: 'hidden' }}>
      <NavBar />
      <Canvas>
        <Suspense>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Home
