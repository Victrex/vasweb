
import { useRef } from 'react'
import './App.css'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Services from './components/Services'
import Offer from './components/Offer'
import Faq from './components/Faq'
import Contact from './components/Contact'

function App() {
  const heroRef = useRef(null)
  return (
    <main className='container'>
      <NavBar heroRef={heroRef}></NavBar>
      <Hero ref={heroRef}></Hero>
      <Services></Services>
      <Offer></Offer>
      <Faq></Faq>
      <Contact></Contact>
    </main>
  )
}

export default App
