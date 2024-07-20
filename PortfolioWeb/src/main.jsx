import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Hero from './Components/Hero/Hero.jsx'
import SobreMi from './Components/SobreMi/SobreMi.jsx'
import Experience from './Components/Experience/Experience.jsx'
import Projects from './Components/Projects/Projects.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Header />
    <Hero />
    <SobreMi />
    <Experience />
    <Projects />
    <Footer />
  </React.StrictMode>,
)
