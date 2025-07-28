import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/footer'
import Home from './components/Home/home'
import Carousel from './components/Carousel/carousel'


function App() {
  return (
    <>
      <Navbar />
      
      <main>
        <Carousel/>
        <Home />
      </main>
      
      <Footer />
    </>
  )
}


export default App
