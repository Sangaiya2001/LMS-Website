import { motion } from "framer-motion";
import Navbar from './Navbar.jsx';
import { FaGraduationCap, FaChalkboardTeacher, FaBriefcase, FaCheck, FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import './Business.css';

const Business = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const services = [
    {
      icon: <FaGraduationCap className="service-icon" />,
      title: "Online Courses",
      description: "Comprehensive tech courses covering the latest in web development, data science, and more."
    },
    {
      icon: <FaChalkboardTeacher className="service-icon" />,
      title: "1-on-1 Mentorship",
      description: "Personalized guidance from industry experts to accelerate your learning and career growth."
    },
    {
      icon: <FaBriefcase className="service-icon" />,
      title: "Placement Training",
      description: "Interview preparation and career coaching to help you land your dream tech job."
    }
  ];

  const benefits = [
    "Industry-experienced mentors",
    "Practical, project-based learning",
    "Flexible learning schedules",
    "Career support and networking",
    "Up-to-date curriculum",
    "Personalized learning paths"
  ];

  return (
    <>
        <Navbar/>
        <div className="business-page">
      {/* Header Section */}
      <header className="page-header">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="header-title">Tech With Trainer</h1>
          <p className="header-subtitle">
            Empowering your tech journey with expert-led training and career guidance
          </p>
        </motion.div>
      </header>

      {/* About Us Section */}
      <section className="about-section">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUp}
          className="about-container"
        >
          <h2 className="section-title">About Us</h2>
          <div className="about-content">
            <p className="about-text">
              At <span className="highlight-text">Tech With Trainer</span>, we believe in transforming careers through technology education. Our mission is to bridge the gap between ambition and expertise in the tech industry.
            </p>
            <p className="about-text">
              Founded by industry veterans, we provide <span className="highlight-text">hands-on training</span> that goes beyond theory, focusing on real-world applications and career outcomes.
            </p>
            <p className="about-text">
              Our values center around <span className="highlight-text">excellence, accessibility, and personalized growth</span>, ensuring every learner achieves their full potential.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
          >
            <h2 className="section-title">Our Services</h2>
            <div className="services-grid">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="service-card"
                >
                  {service.icon}
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="benefits-section">
        <div className="benefits-container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
          >
            <h2 className="section-title">Why Choose Tech With Trainer?</h2>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <FaCheck className="benefit-icon" />
                  <p className="benefit-text">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="cta-container"
        >
          <h2 className="cta-title">Ready to Transform Your Tech Career?</h2>
          <p className="cta-subtitle">
            Join hundreds of successful learners who've accelerated their careers with our programs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#9C6ADE" }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
          >
            Book a Free Consultation
          </motion.button>
        </motion.div>
      </section>

      {/* Footer Section */}
      <footer className="page-footer">
        <div className="footer-grid">
          <div className="footer-about">
            <h3 className="footer-title">Tech With Trainer</h3>
            <p className="footer-text">Empowering the next generation of tech professionals through expert-led education.</p>
            <div className="social-icons">
              <a href="#" className="social-link">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="#" className="social-link">
                <FaTwitter className="social-icon" />
              </a>
              <a href="#" className="social-link">
                <FaGithub className="social-icon" />
              </a>
            </div>
          </div>
          <div className="footer-contact">
            <h3 className="footer-title">Contact Us</h3>
            <div className="contact-info">
              <p className="contact-item">
                <FaEnvelope className="contact-icon" /> techwithtrainer@gmail.com
              </p>
              <p className="contact-item">
                <FaPhone className="contact-icon" /> (+91) 6382841249
              </p>
            </div>
          </div>
          <div className="footer-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="links-list">
              <li><a href="/Courses" className="footer-link">Courses</a></li>
              <li><a href="#" className="footer-link">Mentorship</a></li>
              <li><a href="/Testimonials" className="footer-link">Success Stories</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Tech With Trainer. All rights reserved.</p>
        </div>
      </footer>
        </div>
    </>
    
  );
};

export default Business;