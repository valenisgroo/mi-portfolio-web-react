import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Hero from './Components/Hero/Hero.jsx'
import SobreMi from './Components/SobreMi/SobreMi.jsx'
import Experience from './Components/Experience/Experience.jsx'
import Skills from './Components/Skills/Skills.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Testimonials from './Components/Testimonials/Testimonials.jsx'
import Contact from './Components/Contact/Contact.jsx'

import {ChakraProvider} from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ChakraProvider>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <SobreMi />
        <Experience />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
      
    </ChakraProvider>
    
  </React.StrictMode>,
)
