import React from 'react'
import Forecast from './components/Forecast/Forecast'
import About from './components/About/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/forecast' element={<Forecast />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
