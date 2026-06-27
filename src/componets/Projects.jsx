import "../css/project.css";

import {
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

import barber from "../assets/images/royal-barber.png";
import food from "../assets/images/fast-food.png";
import blog from "../assets/images/dairy-farm.png";
import portfolio from "../assets/images/portfolio.png";

const projects = [
  {
    title: "Royal Barbers Website",
    image: barber,
    tech: ["HTML", "CSS"],
    desc: "Developed a modern and responsive barber shop website with an attractive UI, smooth navigation, and optimized performance for all devices.",
    live: "https://royal-barbers.vercel.app/",
    github: "https://github.com/vjnithish17/Royal-Cut-Barbers",
  },

  {
    title: "Fast Food Restaurant Website",
    image: food,
    tech: ["HTML", "CSS", "Bootstrap"],
    desc: "Designed a responsive restaurant website with a modern food ordering interface, intuitive navigation, and cross-browser compatibility.",
    live: "https://fast-food-restaurand.vercel.app/",
    github: "https://github.com/vjnithish17/Fast-food-Restaurand",
  },

  {
    title: "Dairy-Farm",
    image: blog,
    tech: ["HTML", "CSS", "JavaScript"],
    desc: "A full-stack blog platform with authentication, CRUD operations, REST APIs, and MongoDB database integration.",
    live: "https://vjnithish17.github.io/Dairy-Farm/",
    github: "https://github.com/vjnithish17/Dairy-Farm",
  },

  {
    title: "Personal Portfolio",
    image: portfolio,
    tech: ["React", "CSS", "Framer Motion"],
    desc: "Modern developer portfolio with animations, responsive layout, EmailJS contact form, and smooth scrolling.",
    live: "#",
    github: "#",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">

      <p className="section-title">PROJECTS</p>

      <h2>
        Featured <span>Projects</span>
      </h2>

      <div className="project-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img
              src={project.image}
              alt={project.title}
            />

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.desc}</p>

              <div className="tech-stack">

                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}

              </div>

              <div className="project-btn">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt /> Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub /> GitHub
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;