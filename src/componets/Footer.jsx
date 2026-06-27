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

        <h2>Nithyasundharam E</h2>

        <p>
          Full Stack MERN Developer passionate about building
          responsive and modern web applications.
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
          Made with <FaHeart className="heart" /> using React
        </p>

      </div>

    </footer>
  );
}

export default Footer;