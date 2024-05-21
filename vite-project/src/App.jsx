import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './Hero'
import Footer from './Footer'
import Content from './Content'


function App() {

  return (
    <>
      <div>   
        <Navbar/>
        <Hero/>
        <Content/>
        <Footer/>
       </div>
    </>
  )
}

export default App
