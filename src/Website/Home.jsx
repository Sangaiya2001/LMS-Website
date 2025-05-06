import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import serviceIcon1 from '../Images/logo.png';
import serviceIcon2 from '../Images/logo.png';
import serviceIcon3 from '../Images/logo.png';
import Vantabackground from './VantaBackground.jsx';

import SplashCursor from './SplashCursor'
import Navbar from './Navbar.jsx';

const testimonials = [
  {
    content: "Tech With Trainer helped me build my confidence in coding, and I got placed in my dream company before graduation!",
    name: "Divya R.",
    collegeYear: "Final Year"
  },
  {
    content: "The 1-on-1 mentorship was extremely helpful in preparing for interviews. I was able to crack my first job interview successfully.",
    name: "Karthik S.",
    collegeYear: "B.Tech Graduate"
  },
  {
    content: "The mock interviews were a game-changer! They gave me the practice I needed, and I aced my real interviews.",
    name: "Sneha M.",
    collegeYear: "CS Student"
  },
  {
    content: "The online tech courses at Tech With Trainer were very structured and easy to follow. I gained practical skills to succeed in the tech industry.",
    name: "Ravi K.",
    collegeYear: "2nd Year"
  },
  {
    content: "I learned DSA concepts and improved my coding logic through live sessions, which helped me land multiple internship offers.",
    name: "Anjali P.",
    collegeYear: "3rd Year"
  },
  {
    content: "The placement training program was highly beneficial. It gave me the necessary skills and confidence to get hired.",
    name: "Vikram S.",
    collegeYear: "Final Year"
  },
  {
    content: "The personalized feedback and career guidance helped me refine my resume and approach interviews with confidence.",
    name: "Harini L.",
    collegeYear: "B.Tech Graduate"
  },
  {
    content: "Tech With Trainer’s approach to hands-on projects and practical assignments made learning fun and effective.",
    name: "Arjun R.",
    collegeYear: "2nd Year"
  },
  {
    content: "The learning experience was enriching. It helped me develop not just technical skills but also soft skills for the workplace.",
    name: "Priya M.",
    collegeYear: "3rd Year"
  },
  {
    content: "Their mentorship and industry exposure helped me transition smoothly into my first job as a software developer.",
    name: "Suresh B.",
    collegeYear: "B.Tech Graduate"
  },
]


const Home = () => {
  return (
    <div>
    <Navbar/>
    <SplashCursor />

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
            icon: serviceIcon1,
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
      <div className="testimonialsSection">
  <h2>What Our Students Say</h2>
  <div className="scrollWrapper">
    <div className="testiContainer">
      {testimonials.map((item, index) => (
        <div key={index} className="testimonialCard">
          <p className="quote">“{item.content}”</p>
          <h3 className="studentName">
            {item.name} <span className="collegeYear">| {item.collegeYear}</span>
          </h3>
        </div>
      ))}
    </div>
  </div>
</div>






      {/* How It Works Section */}
      <div className="howItWorks">
        <div>
          <h3>Step 1: Assess Student Needs</h3>
          <p>We analyze individual and college-level goals to customize a training roadmap that fits each learner's aspirations.</p>
        </div>
        <div>
          <h3>Step 2: Structured Learning Path</h3>
          <p>Our live sessions, interactive assignments, and mentorship ensure that students gain in-depth knowledge and practical experience.</p>
        </div>
        <div>
          <h3>Step 3: Placement Ready</h3>
          <p>We provide exclusive mock interviews, resume building, and placement support to give students a competitive edge in the job market.</p>
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
