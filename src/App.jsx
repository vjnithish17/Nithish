import './css/App.css'

import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import About from "./componets/About";
import Skills from "./componets/Skills";
import Projects from "./componets/Projects";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";
import Education from './componets/Education';
import Experience from './componets/Experience';

function App() {
 
  return (
    <>
     <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education/>
      <Projects />
      <Experience/>
      <Contact />
      <Footer />
    </>
  )
}

export default App
