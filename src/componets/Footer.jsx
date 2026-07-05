import "../css/footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>NithyaSundharam E</h2>

        <p>
          Full Stack MERN Developer focused on building responsive, scalable, and user-friendly web applications with modern UI and best development practices.
        </p>

        <div className="footer-icons">

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

          <a href="mailto:vjnithish17@gmail.com">
            <FaEnvelope />
          </a>

        </div>

        <div className="footer-line"></div>

        <p className="copyright">
          © {new Date().getFullYear()} Nithyasundharam. All Rights Reserved.
        </p>

        <p className="made">
          Built with React <FaHeart className="heart" /> Designed & Developed by Me
        </p>

      </div>

    </footer>
  );
}

export default Footer;
