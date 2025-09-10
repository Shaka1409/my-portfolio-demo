import { useEffect } from 'react';
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'

import 'aos/dist/aos.css';
import AOS from 'aos';



function App() {
  useEffect(() => {
    AOS.init({
      duration: 600, 
      offset: 100,  
      once: true,    
    });
  }, []);
  return <>
    <div className="bg-gray-100 text-gray-900 font-monserrat">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        </div>
  </>
  
}

export default App
