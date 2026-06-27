import "../css/hero.css";
import profile from "../assets/images/Nihtish.png";

import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">

      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
      >

        <p className="hello">👋 Hello, I'm</p>

        <h1>
          Nithya<span>Sundharam</span>
        </h1>

        <h2>Full Stack MERN Developer</h2>

        <p className="desc">
          Passionate MERN Stack Developer specializing in React,
          Node.js, Express and MongoDB. I enjoy creating clean,
          responsive and scalable web applications with modern UI
          and best development practices.
        </p>
{/* 
        <div className="hero-info">

          <div className="info-card">
            <FaMapMarkerAlt />
            <span>Karur, Tamil Nadu</span>
          </div>

          <div className="info-card">
            <HiOutlineMail />
            <span>Available for Work</span>
          </div>

        </div> */}

        <div className="hero-btn">

          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <button>Download CV</button>
          </a>

          <a href="#projects">
            <button className="outline">
              View Projects
            </button>
          </a>

        </div>

        <div className="social">

          <a
            href="https://github.com/vjnithish17"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/nithish-e-27b2822a5/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
      >

        <div className="img-box">
          <img src={profile} alt="Nithyasundharam" />
        </div>

      </motion.div>

    </section>
  );
}

export default Hero;