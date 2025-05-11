import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import "./Testimonials.css";


  

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const carouselRef = useRef();

  // Testimonial data
  const testimonials = [
  {
    "id": 1,
    "name": "Arun Prakash",
    "course": "Full-Stack Development",
    "avatar": "👨‍💻",
    "review": "Coming from a tier-3 college in Coimbatore, I always doubted whether I could compete with students from IITs and NITs. Tech With Trainer changed that mindset completely. The mentors were approachable, the assignments were challenging, and the feedback was constant. After completing their Full-Stack Development course, I built 3 real-world projects which I showcased during my interview with Zoho. The panel was impressed by my GitHub and portfolio. Within a week, I got the offer letter. I still can't believe a small-town student like me made it into a top tech firm, and it's all thanks to the structured training I received here.",
    "tagline": "Placed at Zoho, Coimbatore",
    "rating": 5,
    "level": "advanced"
  },
  {
    "id": 2,
    "name": "Divya Lakshmi",
    "course": "Python Programming",
    "avatar": "👩‍💻",
    "review": "I joined the Python course with zero programming knowledge. Being from a non-CS background, I always thought coding wasn't for me. But the trainers at Tech With Trainer were patient and friendly. The way they taught logic building with real-life examples helped me a lot. I not only started writing code confidently but also began automating some boring Excel tasks at my internship. My manager appreciated it and encouraged me to dive deeper. This platform gave me the foundation I lacked and helped me build the confidence I never had.",
    "tagline": "Transitioned from B.Com to Tech Intern",
    "rating": 5,
    "level": "beginner"
  },
  {
    "id": 3,
    "name": "Manoj S",
    "course": "DSA + System Design",
    "avatar": "🧑‍🎓",
    "review": "The DSA & System Design combo course was a game-changer for my placement preparation. Before this, I couldn't even solve easy problems on LeetCode. But the structured approach — starting from basics, weekly mock tests, and live problem-solving sessions — made me confident. In my Wipro interview, I answered every question smoothly, including one tricky dynamic programming problem. This course didn't just teach me to solve problems, it taught me how to think. I am grateful to TWT for giving me the right push when I needed it the most.",
    "tagline": "Cleared Wipro with top DSA performance",
    "rating": 5,
    "level": "interview"
  },
  {
    "id": 4,
    "name": "Anitha R",
    "course": "React JS",
    "avatar": "👩‍💼",
    "review": "I had learned HTML and CSS on my own but always struggled with JavaScript and React. I found the explanations online too confusing until I joined the React course from Tech With Trainer. The animations, real-time examples, and project-based learning helped me understand hooks, state management, and component design in a simple manner. I ended up creating a fully functional LMS clone and even started freelancing for a local tuition center. From someone who was afraid of JavaScript to someone who now builds SPAs confidently, this course made a big difference.",
    "tagline": "Started Freelancing after React Mastery",
    "rating": 5,
    "level": "intermediate"
  },
  {
    "id": 5,
    "name": "Sathish Kumar",
    "course": "Interview Bootcamp",
    "avatar": "🧑‍💼",
    "review": "Being in final year, I had applied to over 50 companies but couldn't get selected beyond the first round. I realized it wasn't a lack of skill but poor communication and interview handling. The Interview Bootcamp course had mock interviews every weekend, resume correction sessions, and live peer reviews. Slowly I started improving, got rid of filler words, and started structuring my answers better. Last month, I cracked Infosys with a strong HR round performance. What I gained here isn't just a job, but the confidence to face any panel.",
    "tagline": "Cracked Infosys after 3 failed attempts",
    "rating": 5,
    "level": "interview"
  },
  {
    "id": 6,
    "name": "Meera V",
    "course": "Aptitude + Verbal Training",
    "avatar": "👩‍🎓",
    "review": "As someone who studied in Tamil medium till 12th standard, aptitude and English used to terrify me. During college placements, I missed out on Cognizant because of verbal round failure. Then I joined the Aptitude + Verbal Training from TWT. The trainers were understanding and used bilingual explanations. They didn't just teach shortcuts but gave a strategy to handle time pressure. Within a month, my scores in mock tests improved. I re-applied to Cognizant and cleared it this time. My parents were so happy. This program gave me more than marks — it gave me belief.",
    "tagline": "Cleared Cognizant with top scores",
    "rating": 4,
    "level": "beginner"
  },
  {
    "id": 7,
    "name": "Harish Reddy",
    "course": "Java + Spring Boot",
    "avatar": "👨‍🔬",
    "review": "I was always interested in backend development but could never wrap my head around Spring Boot. The course I took at Tech With Trainer had hands-on labs, live API-building sessions, and a lot of examples from real-world scenarios. The assignments were tough but extremely helpful. I built a mini job portal backend as my capstone project and showcased it during my interview at Mindtree. The recruiter appreciated my API documentation and DB design. I'm now working as a backend engineer — all thanks to this course!",
    "tagline": "Working as Backend Engineer at Mindtree",
    "rating": 5,
    "level": "advanced"
  },
  {
    "id": 8,
    "name": "Keerthana M",
    "course": "Frontend Mastery",
    "avatar": "👩‍🎨",
    "review": "Before joining Tech With Trainer, my resume looked empty. I wanted to specialize in frontend but didn't know how to create portfolio-worthy projects. The course not only taught me React, Tailwind, and Framer Motion but also focused heavily on portfolio design, case studies, and presentation. I now have 3 beautiful projects hosted and deployed with Netlify. I'm currently interning with a UI/UX agency in Bangalore and building real websites. This wouldn't have happened without TWT's support and design-focused frontend training.",
    "tagline": "UI/UX Intern with top-rated portfolio",
    "rating": 5,
    "level": "intermediate"
  },
  {
    "id": 9,
    "name": "Ravi Teja",
    "course": "C++ + DSA Crash Course",
    "avatar": "🧑‍💻",
    "review": "Coming from a mechanical engineering background, I had just 2 months before campus placements. I took the C++ + DSA crash course at Tech With Trainer, and it was the best decision. The short, focused content and problem sets helped me master the basics quickly. I couldn't believe I was solving binary trees and linked list questions confidently in just 3 weeks. In the Capgemini interview, the HR appreciated my ability to explain logic clearly. I owe my switch to tech completely to this crash course!",
    "tagline": "From Mechanical to Tech in 2 Months",
    "rating": 5,
    "level": "beginner"
  },
  {
    "id": 10,
    "name": "Nivedha S",
    "course": "UI/UX for Developers",
    "avatar": "🎨",
    "review": "As a React developer, I always struggled with design. My components worked fine but looked ugly. The UI/UX course helped me understand color theory, layout grids, and mobile-first design. I learned to use Figma and translate my designs into clean React code. After the course, I redesigned my personal site and even got freelance offers from Behance. Now I'm a developer who designs as well. This course made me feel like a complete front-end engineer!",
    "tagline": "Became Dev + Designer",
    "rating": 5,
    "level": "advanced"
  },
  {
    "id": 11,
    "name": "Prakash Raj",
    "course": "DevOps Fundamentals",
    "avatar": "👨‍💼",
    "review": "After 2 years as a support engineer, I wanted to transition to DevOps but found the learning curve steep. Tech With Trainer's DevOps course broke down complex concepts like CI/CD pipelines and containerization into digestible modules. The hands-on labs with AWS and Kubernetes were game-changers. Within 3 months of completing the course, I got promoted to Junior DevOps Engineer at my company. The practical exposure here was exactly what industry needed!",
    "tagline": "Promoted to DevOps Engineer",
    "rating": 5,
    "level": "intermediate"
  },
  {
    "id": 12,
    "name": "Swetha K",
    "course": "Data Science Bootcamp",
    "avatar": "👩‍🔬",
    "review": "As a statistics graduate, I understood theory but lacked practical implementation skills. This bootcamp taught me Python for data analysis, visualization, and machine learning through real datasets. My final project on predicting loan defaults got me noticed during campus placements. I'm now working as a Data Analyst at a fintech startup, applying what I learned daily. The career guidance sessions were equally valuable in helping me position my skills correctly.",
    "tagline": "Data Analyst at Fintech Startup",
    "rating": 4,
    "level": "advanced"
  },
  {
    "id": 13,
    "name": "Vignesh M",
    "course": "MERN Stack Specialization",
    "avatar": "🧑‍💻",
    "review": "I learned MERN stack basics from YouTube but couldn't build anything production-ready. This specialization course taught me authentication, payment integration, and deployment strategies. The capstone project where we built a full e-commerce site gave me immense confidence. I used the same architecture for my startup idea and got my first 100 users! The mentor support even after course completion is what sets Tech With Trainer apart.",
    "tagline": "Launched My Own Startup",
    "rating": 5,
    "level": "advanced"
  },
  {
    "id": 14,
    "name": "Deepika R",
    "course": "Technical Writing",
    "avatar": "✍️",
    "review": "As a CS student good at writing, I never considered technical writing as a career until this course. The modules on API documentation, tutorials, and developer guides opened new opportunities. The internship placement assistance helped me land a technical writer role at a SaaS company. I now earn while finishing my degree! This unconventional course turned my hobby into a profession.",
    "tagline": "Technical Writer at SaaS Company",
    "rating": 4,
    "level": "beginner"
  },
  {
    "id": 15,
    "name": "Karthik J",
    "course": "Competitive Programming",
    "avatar": "🏆",
    "review": "I joined to improve my coding competition rankings, but gained much more. The advanced problem-solving techniques and time management strategies helped me reach CodeChef 4-star within 5 months. The daily practice problems and mentor feedback were crucial. I represented my college at ICPC regionals, something I never dreamed possible before this course!",
    "tagline": "CodeChef 4-Star | ICPC Participant",
    "rating": 5,
    "level": "advanced"
  },
  {
    "id": 16,
    "name": "Aishwarya P",
    "course": "Cloud Computing Basics",
    "avatar": "☁️",
    "review": "The cloud computing course simplified AWS and Azure concepts through visual explanations. The hands-on labs where we deployed actual applications helped me understand concepts better than any textbook. I earned my AWS Cloud Practitioner certification right after the course and got selected for a cloud internship program. The study materials and mock tests were incredibly helpful!",
    "tagline": "AWS Certified | Cloud Intern",
    "rating": 5,
    "level": "intermediate"
  },
  {
    "id": 17,
    "name": "Sanjay V",
    "course": "Flutter Development",
    "avatar": "📱",
    "review": "As a web developer wanting to enter mobile space, Flutter seemed perfect but overwhelming. This course's project-based approach helped me publish my first app on Play Store within 2 months. The state management and Firebase integration modules were exceptionally well-taught. I'm now building apps for local businesses while job hunting!",
    "tagline": "Published 3 Play Store Apps",
    "rating": 5,
    "level": "intermediate"
  },
  {
    "id": 18,
    "name": "Priyanka N",
    "course": "Cyber Security Essentials",
    "avatar": "🛡️",
    "review": "The cyber security course opened my eyes to vulnerabilities in my own code. The ethical hacking modules where we performed controlled attacks on test systems were both fun and educational. I discovered a critical vulnerability in my college website during the course and helped fix it! This practical knowledge makes me stand out in interviews.",
    "tagline": "College Cybersecurity Lead",
    "rating": 4,
    "level": "intermediate"
  },
  {
    "id": 19,
    "name": "Gokul S",
    "course": "Blockchain Basics",
    "avatar": "⛓️",
    "review": "I was curious about blockchain but found most resources too technical. This course explained concepts through simple analogies before diving into Solidity. Building a smart contract for a dummy ICO was my favorite project. Though I'm not working in blockchain yet, the fundamental understanding helps me evaluate Web3 opportunities better.",
    "tagline": "Built First Smart Contract",
    "rating": 4,
    "level": "beginner"
  },
  {
    "id": 20,
    "name": "Lavanya K",
    "course": "Soft Skills Mastery",
    "avatar": "💬",
    "review": "Technical skills alone weren't getting me through interviews. This soft skills program transformed my communication, from writing professional emails to handling stress interviews. The video-recorded mock interviews with detailed feedback were invaluable. I went from failing HR rounds to receiving compliments on my communication clarity!",
    "tagline": "Improved Interview Success Rate by 3x",
    "rating": 5,
    "level": "beginner"
  }
]




  // Filter testimonials
  const filteredTestimonials = activeFilter === "all" 
    ? testimonials 
    : testimonials.filter(t => t.level === activeFilter);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % filteredTestimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [filteredTestimonials.length]);

  // Handle manual navigation
  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    controls.start({
      x: `-${index * 100}%`,
      transition: { duration: 0.5 }
    });
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Navbar/>
      <div className="testimonials-container">
        {/* Header Section */}
        <section className="header-section">
          <motion.div className="header-motion" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="header-title">What Our Students Say ✨</h1>
            <div className="header-subtitle-container">
              <p className="header-subtitle">Real stories. Real impact. Real success.</p>
              <motion.div className="header-underline" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.3, duration: 1 }}/>
            </div>
          </motion.div>
        </section>

        {/* Social Proof Badge */}
        <motion.div className="social-proof" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}>
          <div className="social-badge">
            <span className="social-star">⭐</span>
            <span className="social-text">Trusted by 1000+ learners</span>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div className="filter-container" variants={container} initial="hidden" animate="show">
          {["all", "beginner", "intermediate", "advanced", "interview"].map((filter) => (
            <motion.button
              key={filter}
              className={`filter-tab ${activeFilter === filter ? "active" : ""}`}
              variants={item}
              onClick={() => {
                setActiveFilter(filter);
                setCurrentIndex(0);
              }}
            >
              {filter === "all" ? "All" : 
               filter === "interview" ? "Interview Prep" : 
               filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="carousel-wrapper">
          <div className="carousel-inner">
            <AnimatePresence>
              <motion.div ref={carouselRef} className="carousel-track" animate={controls} initial={{ x: 0 }}>
                {filteredTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    className="carousel-slide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div className="testimonial-card" whileHover={{ y: -10 }}>
                      <div className="card-quote">❝</div>
                      <div className="card-accent"></div>
                      <div className="card-body">
                        <div className="card-header">
                          <div className="user-avatar">{testimonial.avatar}</div>
                          <div className="user-info">
                            <h3 className="user-name">{testimonial.name}</h3>
                            <p className="user-course">{testimonial.course}</p>
                          </div>
                        </div>
                        <p className="testimonial-text">{testimonial.review}</p>
                        <div className="card-footer">
                          <span className="testimonial-tagline">{testimonial.tagline}</span>
                          <div className="rating-stars">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={`star ${i < testimonial.rating ? "filled" : ""}`}>★</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="carousel-button prev" onClick={() => goToTestimonial((currentIndex - 1 + filteredTestimonials.length) % filteredTestimonials.length)}>
            &larr;
          </button>
          <button className="carousel-button next" onClick={() => goToTestimonial((currentIndex + 1) % filteredTestimonials.length)}>
            &rarr;
          </button>

          <div className="carousel-indicators">
            {filteredTestimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? "active" : ""}`}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <h2 className="cta-title">Ready to be our next success story? 🎓</h2>
              <p className="cta-subtitle">Join thousands of students who transformed their careers with Tech With Trainer</p>
              <motion.button className="cta-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Get Free Career Guidance 👋
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Community Section */}
        <div className="community-section">
          <div className="community-container">
            <motion.h2 className="community-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              Join the community <span className="community-highlight">#TechWithTrainer</span>
            </motion.h2>
            <div className="community-avatars">
              {["👩‍💻", "🧑‍🎓", "👨‍💼", "👩‍🔬", "🧑‍💻", "👨‍🎓"].map((emoji, index) => (
                <motion.div
                  key={index}
                  className="community-avatar"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;