import "../css/experience.css";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2023",
    title: "Started B.E Computer Science",
    desc: "Started my engineering journey with a strong interest in software development.",
  },
  {
    year: "2025",
    title: "Started MERN Stack",
    desc: "Learned HTML, CSS, JavaScript, React, Node.js, Express and MongoDB.",
  },
  {
    year: "2026",
    title: "Built Real-World Projects",
    desc: "Developed Blog App, Employee Management System, Weather App and Portfolio.",
  },
  {
    year: "Now",
    title: "Open to Work",
    desc: "Looking for Full Stack Developer opportunities to contribute and grow.",
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <p className="section-title">MY JOURNEY</p>

      <h2>Learning Timeline</h2>

      <div className="timeline">
        {timeline.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="circle"></div>

            <div className="content">
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;