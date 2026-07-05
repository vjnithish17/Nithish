import "../css/hero.css";
import profile from "../assets/images/Nihtish.png";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <p className="hello">👋 Hi, I'm</p>

        <h1>
          Nithya<span>Sundharam</span>
        </h1>

        <h2>
          <TypeAnimation
            sequence={[
              "Full Stack MERN Developer",
              2500,
              "Creating Responsive Websites",
              2500,
              "React • Node • MongoDB",
              2500,
              " Continuous Learner",
              2500,
              "Open to Work",
              2500,
            ]}
            speed={60}
            repeat={Infinity}
          />
        </h2>

        <p className="desc">
          I'm a passionate MERN Stack Developer with hands-on experience
          building responsive and scalable web applications using React,
          Node.js, Express.js, and MongoDB. I enjoy solving real-world problems
          through clean code and modern UI design.
        </p>

        {/* Buttons */}
        <div className="hero-btn">
          {/* <a href="/resume.pdf" target="_blank" rel="noreferrer"> */}
          <a href="/resume.pdf" download>
            <button className="glass-btn">Download CV</button>
          </a>

          <a href="#projects">
            <button className="outline">View Projects</button>
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
