import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'

import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Blog from './Components/Blog/Blog'
import WhatsAppButton from './Components/WhatsAppButton/WhatsAppButton'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Blog/>
      <Contact />
      <Footer/>
      <WhatsAppButton />
    </div>
  )
}

export default App
