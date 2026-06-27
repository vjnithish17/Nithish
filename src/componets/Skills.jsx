import "../css/skills.css";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Skills() {
  return (
    <section className="skills" id="skills">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >

        <p className="section-title">MY SKILLS</p>

        <h2>
          Technologies I <span>Work With</span>
        </h2>

        {/* Frontend */}

        <div className="skill-category">

          <h3>Frontend</h3>

          <div className="skill-grid">

            <div className="skill-card">
              <FaHtml5 />
              <p>HTML5</p>
            </div>

            <div className="skill-card">
              <FaCss3Alt />
              <p>CSS3</p>
            </div>

            <div className="skill-card">
              <SiJavascript />
              <p>JavaScript</p>
            </div>

            <div className="skill-card">
              <FaReact />
              <p>React</p>
            </div>

          </div>

        </div>

        {/* Backend */}

        <div className="skill-category">

          <h3>Backend</h3>

          <div className="skill-grid">

            <div className="skill-card">
              <FaNodeJs />
              <p>Node.js</p>
            </div>

            <div className="skill-card">
              <SiExpress />
              <p>Express.js</p>
            </div>

          </div>

        </div>

        {/* Database */}

        <div className="skill-category">

          <h3>Database</h3>

          <div className="skill-grid">

            <div className="skill-card">
              <SiMongodb />
              <p>MongoDB</p>
            </div>

          </div>

        </div>

        {/* Tools */}

        <div className="skill-category">

          <h3>Tools</h3>

          <div className="skill-grid">

            <div className="skill-card">
              <FaGitAlt />
              <p>Git</p>
            </div>

            <div className="skill-card">
              <FaGithub />
              <p>GitHub</p>
            </div>

            <div className="skill-card">
            <VscVscode />
              <p>VS Code</p>
            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default Skills;