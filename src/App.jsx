import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./css/App.css";

import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import About from "./componets/About";
import Skills from "./componets/Skills";
import Education from "./componets/Education";
import Projects from "./componets/Projects";
import Experience from "./componets/Experience";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <div className="page-fade-left"></div>
      <div className="page-fade-right"></div>

      <Navbar />

      <div data-aos="fade-up">
        <Hero />
      </div>

      <div data-aos="fade-right">
        <About />
      </div>

      <div data-aos="fade-left">
        <Skills />
      </div>

      <div data-aos="fade-right">
        <Education />
      </div>

      <div data-aos="zoom-in">
        <Projects />
      </div>

      <div data-aos="fade-left">
        <Experience />
      </div>

      <div data-aos="fade-up">
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
