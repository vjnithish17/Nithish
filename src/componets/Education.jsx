import "../css/education.css";
import {
  FaGraduationCap,
  FaCertificate,
  FaSchool,
  FaUniversity,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Education() {
  return (
    <section className="education" id="education">
      <motion.div
        className="education-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="section-title">EDUCATION</p>

        <h2>
          My <span>Education</span> Journey
        </h2>

        <div className="education-grid">

          {/* BE */}

          <div className="education-card">
            <FaUniversity className="edu-icon" />

            <h3>Bachelor of Engineering (B.E)</h3>

            <h4>Computer Science and Engineering</h4>

            <p className="college">
              Vetri Vinayaha College of Engineering & Technology, Trichy
            </p>

            <span>Anna University </span>

            <p className="year">2023 - 2026</p>

            {/* Update after final semester */}
            <p className="cgpa">
              CGPA : <strong>Currently Pursuing</strong>
            </p>
          </div>

          {/* Diploma */}

          <div className="education-card">
            <FaGraduationCap className="edu-icon" />

            <h3>Diploma</h3>

            <h4>Computer Engineering</h4>

            <p className="college">
              Vetri Vinayaha Polytechnic College, Trichy
            </p>

            <span>DOTE </span>

            <p className="year">2022 - 2023</p>

            <p className="cgpa">
              Percentage : <strong>76.29%</strong>
            </p>
          </div>

          {/* HSC */}

          <div className="education-card">
            <FaSchool className="edu-icon" />

            <h3>Higher Secondary (12th)</h3>

            <h4>State Board</h4>

            <p className="college">
              Government Higher Secondary School
            </p>

            <span>Vengampatty </span>

            <p className="year">2021</p>
             <p className="cgpa">
              Percentage : <strong>72.31%</strong>
            </p>
          </div>

          {/* Certifications */}

          <div className="education-card">
            <FaCertificate className="edu-icon" />

            <h3>Certifications</h3>

            <ul className="cert-list">
              <li>✅ MERN Stack Development</li>
              <li>📍 Skill Development Learning Center, Trichy</li>
             
            </ul>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default Education;