import "../css/contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
      const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y9sk4rq",
        "template_yrdpzq1",
        form.current,
        "K63bXerQikrFZihqt"
      )
      .then(() => {
         console.log("SUCCESS:", result.text);
        alert("✅ Message Sent Successfully!");
        form.current.reset();
      })
      .catch(() => {
         console.log("ERROR:", error.text);
        alert("❌ Failed to send message.");
      });
  };
  return (
    <section className="contact" id="contact">

      <motion.div
        className="contact-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >

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
  onClick={() => window.location.href = "mailto:vjnithish17@gmail.com"} 
          ><FaEnvelope /> vjnithish17@gmail.com</p>
          <p><FaPhoneAlt /> +91 6379410214</p>
          <p><FaMapMarkerAlt /> Karur, Tamil Nadu</p>
        </div>

        <div className="social-links">
          <a href="https://github.com/vjnithish17" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/nithish-e-27b2822a5/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>

      </motion.div>

      <motion.form
        className="contact-form"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
        ref={form} onSubmit={sendEmail}
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

      <button type="submit">
        Send Message
      </button>
      </motion.form>

    </section>
  );
}

export default Contact;