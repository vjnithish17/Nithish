import "../css/hero.css";
import profile from "../assets/images/Nihtish.png";

import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

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

        {/* Buttons */}
        <div className="hero-btn">

          {/* <a href="/resume.pdf" target="_blank" rel="noreferrer"> */}
          <a href="/resume.pdf" download>
            <button className="glass-btn">Download CV</button>
          </a>

          <a href="#projects">
            <button className="outline">
              View Projects
            </button>
          </a>

        </div>

        {/* Social */}
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

      </div>

      <div className="hero-right">

        <div className="img-box">
          <img src={profile} alt="Nithyasundharam" />
        </div>

      </div>

    </section>
  );
}

export default Hero;