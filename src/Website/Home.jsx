import React from 'react';
import './Home.css';  // Import the CSS file for styling
import { motion } from 'framer-motion';
import serviceIcon1 from '../Images/logo.png'; // Example icon for services
import serviceIcon2 from '../Images/logo.png'; // Example icon for services
import serviceIcon3 from '../Images/logo.png'; // Example icon for services
import Vantabackground from './VantaBackground.jsx'; // Import the Vantabackground component

const Home = () => {
  return (
    <div>
      {/* Hero Section with Vantabackground */}
      <div className="heroSection">
        <Vantabackground />  {/* This component will act as the background */}
        <div className="heroContent">
          <h1>Empowering Businesses with Tailored Tech Solutions</h1>
          <p>Our training and mentorship programs help businesses scale their tech teams, enhance productivity, and drive innovation. Discover the value we offer to organizations looking to invest in their workforce's future.</p>
          <button className="heroButton">Get Started Now</button>
        </div>
      </div>

      {/* Services Section */}
      <div className="animatedServicesSection">
        {[
          {
            icon: serviceIcon1,
            title: 'Corporate Training',
            desc: 'We offer specialized training programs designed for companies looking to upskill their tech teams, improve productivity, and stay ahead of the curve.',
          },
          {
            icon: serviceIcon2,
            title: '1-on-1 Mentorship',
            desc: 'We provide personalized mentoring sessions for employees, helping them grow in their roles and take on more complex challenges within the company.',
          },
          {
            icon: serviceIcon3,
            title: 'College Partnerships',
            desc: 'Our partnerships with educational institutions allow businesses to tap into a talent pool of well-trained graduates, ready to take on industry roles from day one.',
          },
        ].map((service, index) => (
          <motion.div
            className="animatedServiceCard"
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={service.icon} alt={`Service ${index + 1}`} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>


      {/* Testimonials Section */}
      <div className="testimonialsSection">
        <h2>What Our Clients Say</h2>
        <div className="testimonialItem">
          <p>"Tech With Trainer helped us upskill our entire team. The courses were engaging and easy to follow, making learning enjoyable."</p>
          <h3>John Doe, CEO of TechCorp</h3>
        </div>
        <div className="testimonialItem">
          <p>"The mentorship program was invaluable to our engineers. They were able to tackle complex challenges with confidence."</p>
          <h3>Jane Smith, CTO of InnovateX</h3>
        </div>
        <div className="testimonialItem">
          <p>"Our partnership with Tech With Trainer has enabled us to hire top-tier talent from the pool of graduates trained through their programs."</p>
          <h3>Mark Johnson, Head of HR at FutureTech</h3>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="howItWorks">
        <div>
          <h3>Step 1: Assess Needs</h3>
          <p>We work with your team to understand the unique requirements of your business, helping to identify areas that require training or mentorship.</p>
        </div>
        <div>
          <h3>Step 2: Tailored Programs</h3>
          <p>We create customized training modules, mentorship schedules, and development plans that align with your business objectives and team goals.</p>
        </div>
        <div>
          <h3>Step 3: Deliver and Monitor</h3>
          <p>We deliver the programs, monitor progress, and provide ongoing feedback to ensure that the learning outcomes are aligned with your business needs.</p>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="getInTouch">
        <h2>Ready to Transform Your Team?</h2>
        <button>Contact Us for a Consultation</button>
      </div>
    </div>
  );
};

export default Home;
