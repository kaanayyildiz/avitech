import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import InfiniteSlider from './components/InfiniteSlider'
import Footer from './components/Footer'
import Content from './components/Content'
import './i18n'
import { useTranslation } from 'react-i18next'

function App() {
  

  return (
    <>
    
      <Navbar />
      <Hero />
      <Gallery />
      <InfiniteSlider />
      <Content />
      <Footer />
      
    </>
  )
}

export default App
