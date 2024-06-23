import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Services from './Components/Services/Services'
import Experiance from './Components/Experiance/Experiance'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Experiance />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
