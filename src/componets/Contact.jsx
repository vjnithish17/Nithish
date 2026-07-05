import "../css/contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useRef ,useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

     setLoading(true);
    // console.log("FORM DATA:", form.current);

    emailjs
      .sendForm(
        "service_y9sk4rq",
        "template_yrdpzq1",
        form.current,
        "K63bXerQikrFZihqt"
      )
      .then((result) => {
        // console.log("SUCCESS:", result.text);
        // alert("✅ Message Sent Successfully!");
         setLoading(false);
        form.current.reset();
      })
      .catch((error) => {
        // console.log("FULL ERROR:", error);
         setLoading(false)
        // alert("❌ Failed to send message. Check console.");
      });


  };

  return (
    <section className="contact" id="contact">

      <div className="contact-left">

        <p className="section-title">CONTACT</p>

        <h2>Let's Work Together</h2>

        <p>
          I'm currently looking for Full Stack Developer opportunities.
          Feel free to reach out if you'd like to collaborate or discuss
          exciting projects.
        </p>

        <div className="info">
          <p
            style={{ cursor: "pointer", color: "#00e5ff" }}
            onClick={() =>
              (window.location.href = "mailto:vjnithish17@gmail.com")
            }
          >
            <FaEnvelope /> vjnithish17@gmail.com
          </p>

          <p>
            <FaPhoneAlt /> +91 6379410214
          </p>

          <p>
            <FaMapMarkerAlt /> Karur, Tamil Nadu
          </p>
        </div>

        <div className="social-links">
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

      <form
        className="contact-form"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit" className="glass-btn"  disabled={loading}>  {loading ? "Sending..." : "Send Message"}</button>
      </form>

    </section>
  );
}

export default Contact;
