import "../css/about.css";
import { FaCode, FaLaptopCode, FaCloud } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <p className="section-title">ABOUT ME</p>

        <h2>
          Hi, I'm <span>Nithyasundharam</span>
        </h2>

        <p>
            I'm a Computer Science and Engineering graduate passionate about
          building modern, responsive web applications using the MERN Stack. I
          enjoy solving real-world problems through clean, efficient code and
          continuously improving my skills by developing practical projects.
        </p>

        <p>
          I'm currently looking for an opportunity as a MERN Stack Developer to
          contribute, learn, and grow as a software engineer.
        </p>
      </div>

      <div className="about-right">
        <div className="card">
          <FaLaptopCode className="icon" />
          <h3>10+</h3>
          <p>Projects Built</p>
        </div>

        <div className="card">
          <FaCode className="icon" />
          <h3>12+</h3>
          <p>MERN & Web Skills</p>
        </div>

        <div className="card">
          <FaCloud className="icon" />
          <h3>Cloud</h3>
          <p>Fundamentals</p>
        </div>
      </div>
    </section>
  );
}

export default About;
