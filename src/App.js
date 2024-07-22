import React from 'react'
import Forecast from './components/Forecast/Forecast'
import About from './components/About/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import NavBar from './components/Home/NavBar'
import Footer from './components/About/Footer'
const App = () => {
  return (
    <Router>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/forecast' element={<Forecast/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
