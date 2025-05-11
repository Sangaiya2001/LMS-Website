import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import serviceIcon1 from '../Images/HomeImg1.png';
import serviceIcon2 from '../Images/HomeImg2.png';
import serviceIcon3 from '../Images/HomeImg3.png';
import serviceIcon4 from '../Images/HomeImg4.png';
import Vantabackground from './VantaBackground.jsx';

// import SplashCursor from './SplashCursor'
import Navbar from './Navbar.jsx';
import Testimonials from './HomeTestimonials.jsx';




const Home = () => {
  return (
    <div>
    <Navbar/>
    
      {/* Hero Section with Vantabackground */}
      <div className="heroSection">
        <Vantabackground />
        <div className="heroContent">
          <h1>Kickstart Your Tech Career with Expert Training</h1>
          <p>Tech With Trainer empowers students with the skills and real-world experience to excel in the tech industry. Our live sessions, mentorship, and personalized training are designed to ensure your success.</p>
          <button className="heroButton">Get Started Now</button>
        </div>
      </div>

      {/* Services Section */}
      <h3 className='serviceHead'>What We Offer</h3>
      <div className="animatedServicesSection">
        
        {[{
            icon: serviceIcon1,
            title: 'College Training Programs',
            desc: 'Transform your college\'s placement record with customized training solutions to boost student skills and confidence for industry success.'
          },
          {
            icon: serviceIcon2,
            title: '1-on-1 Live Classes',
            desc: 'Accelerate your learning with personalized, live sessions tailored to your goals. Get direct access to expert mentors and guidance.'
          },
          {
            icon: serviceIcon3,
            title: 'Mock Interviews & Skill Boosters',
            desc: 'Master your interview skills with real-time mock sessions, feedback, and exclusive opportunities for top performers to land their dream job.'
          },
          {
            icon: serviceIcon4,
            title: 'Online Tech Courses',
            desc: 'Learn industry-relevant tech skills through our beginner-friendly online courses, complete with hands-on projects to reinforce your learning.'
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
      <Testimonials/>

      {/* How It Works Section */}
      
      <div className="howItWorks">
            <h2 className='roadMapToSuc'>Roadmap to Success</h2>
            <div className='steps'>
                <div >
                    <h3>STEP I</h3>
                    <h4>Start With What You Need</h4>
                    <p>We start by evaluating each student's current skill level and the college's placement objectives to create a personalized training roadmap.</p>
                </div>
                <div>
                  <h3>STEP II</h3>
                  <h4>Job-Ready Curriculum Execution</h4>
                  <p>Through live sessions, coding assignments, and real-world projects, students build technical and problem-solving skills aligned with industry needs.</p>
                </div>
                <div>
                    <h3>STEP III</h3>
                    <h4>Prepare for Placement Success</h4>
                    <p>Mock interviews, resume reviews, and 1-on-1 mentorship equip students with the confidence and tools to secure internships and jobs.</p>
                </div>
          </div>
      </div>


      {/* Get in Touch Section */}
      <div className="getInTouch">
        <h2>Take the First Step Toward Your Tech Career Today!</h2>
        <button>Contact Us for Personalized Guidance</button>
      </div>
    </div>
  );
};

export default Home;
