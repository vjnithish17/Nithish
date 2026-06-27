import "../css/experience.css";

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
          <div className="timeline-item" key={index}>
            <div className="circle"></div>

            <div className="content">
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;