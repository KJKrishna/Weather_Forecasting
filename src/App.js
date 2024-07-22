import React, { Suspense } from 'react'
import Forecast from './components/Forecast/Forecast'
import About from './components/About/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import NavBar from './components/Home/NavBar'
import Footer from './components/About/Footer'
import { Canvas } from '@react-three/fiber'
const App = () => {
  return (
    <Router>
      {/* <NavBar /> */}
      <Suspense>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/forecast' element={<Forecast />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default App
