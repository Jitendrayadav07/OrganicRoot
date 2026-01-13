import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx"
import HeroCarousel from "./components/HeroCarousel/HeroCarousel.jsx"

function App() {
  return (
    <>
      <Navbar />
      <HeroCarousel/>
    </>
  )
}

export default App
