import "../css/about.css";
import {
  FaCode,
  FaLaptopCode,
  FaCertificate,
  FaCloud,
} from "react-icons/fa";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">

      <motion.div
        className="about-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="section-title">ABOUT ME</p>

        <h2>
          Hi, I'm <span>Nithyasundharam</span>
        </h2>

        <p>
          I'm a Computer Science and Engineering graduate with a strong
          interest in Full Stack Web Development. I specialize in building
          responsive, user-friendly, and scalable web applications using the
          MERN Stack (MongoDB, Express.js, React.js, and Node.js).
        </p>

        <p>
          I enjoy solving real-world problems through clean, efficient code and
          continuously improving my development skills by building practical
          projects. Along with web development, I have foundational knowledge
          of Cloud Security concepts, giving me a broader understanding of
          modern application development.
        </p>

        <p>
          Currently, I'm looking for an opportunity as a MERN Stack Developer
          where I can contribute, learn from experienced professionals, and
          grow as a software engineer.
        </p>
      </motion.div>

      <motion.div
        className="about-right"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

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
          <FaCertificate className="icon" />
          <h3>1</h3>
          <p>Professional Certificate</p>
        </div>

        <div className="card">
          <FaCloud className="icon" />
          <h3>Cloud</h3>
          <p>Security Basics</p>
        </div>

      </motion.div>

    </section>
  );
}

export default About;