import React from 'react';
import './About.css';
import Navbar from './Navbar';

const About = () => {
  return (
    <>
    <Navbar/>
    <main className="about-main">
      <div className="about-container">

        {/* Hero Section */}
        <section className="about-hero">
          <h1 className="about-title">
            About <span className="highlight">Tech With Trainer</span>
          </h1>
          <p className="about-subtitle">
          Tech With Trainer empowers students with industry-aligned tech education, personalized mentorship, and career-focused training.
          </p>
        </section>

        {/* Mission Section */}
        <section className="about-section">
          <h2 className="section-title">Our Mission</h2>
          <div className="section-card">
            <h3 className="section-subtitle">Education That Works</h3>
            <p className="section-text">
              The tech industry evolves fast—but traditional education often lags behind. We close that gap by offering:
            </p>
            <ul className="bullet-list">
              {[
                "Relevant, project-driven courses (Web Dev, DSA, AI, Cloud, and more)",
                "1-on-1 mentorship from industry experts",
                "Live classes & mock interviews to simulate real job scenarios",
                "Campus partnerships to upskill students at scale"
              ].map((item, index) => (
                <li key={index} className="bullet-item">• {item}</li>
              ))}
            </ul>
            <p className="highlight-text">
              Our goal? <span className="highlight">No more "I know theory but can't code."</span> Just confident, job-ready graduates.
            </p>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="about-section">
          <h2 className="section-title">What We Do</h2>
          <div className="section-card">
            <h3 className="section-subtitle">More Than Just Courses—A Career Launchpad</h3>
            <div className="what-we-do-grid">
              {[
                { icon: "👨‍💻", title: "Hands-On Tech Training", desc: "Learn by building real projects, not just watching lectures." },
                { icon: "🎯", title: "Personalized Mentorship", desc: "Get 1-on-1 guidance from professionals at top tech companies." },
                { icon: "💼", title: "Mock Interviews & Resume Prep", desc: "Ace placements with simulated FAANG-style interviews." },
                { icon: "🏫", title: "College Collaborations", desc: "Partner with institutions to prep students for internships/jobs." },
                { icon: "🤝", title: "Lifetime Community", desc: "Join a network of peers, mentors, and recruiters." }
              ].map((item, index) => (
                <div key={index} className="what-we-do-item">
                  <span className="item-icon">{item.icon}</span>
                  <div>
                    <h4 className="item-title">{item.title}</h4>
                    <p className="item-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="about-section">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="why-choose-us-card">
            <h3 className="section-subtitle">The Tech With Trainer Difference</h3>
            <div className="bullet-list">
              {[
                "Industry-First Curriculum: Courses designed with hiring managers",
                "Learn from the Best: Mentors from Google, Amazon, Microsoft",
                "Placement-Focused: 85% of our students land jobs within 6 months",
                "Affordable & Accessible: Premium training without premium prices",
                "Your Success, Our Priority: From first code to first job offer"
              ].map((item, index) => (
                <div key={index} className="bullet-item">✓ {item}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="about-section">
          <h2 className="section-title">Our Vision</h2>
          <div className="vision-card">
            <h3 className="vision-title">Empowering the Next Generation of Tech Leaders</h3>
            <p className="vision-subtext">
              We imagine a world where no student graduates unprepared. Where skills trump degrees, and passion meets opportunity.
            </p>
            <div className="vision-grid">
              {[
                { emoji: "🚀", text: "Build in-demand skills" },
                { emoji: "💡", text: "Learn from the pros" },
                { emoji: "🎯", text: "Land your dream job" }
              ].map((item, index) => (
                <div key={index} className="vision-box">
                  <span className="item-icon">{item.emoji}</span>
                  <span className="item-title">{item.text}</span>
                </div>
              ))}
            </div>
            <p className="vision-tagline">
              Because at Tech With Trainer, your success is our code.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-buttons">
          <button className="btn-primary">Explore Courses</button>
          <button className="btn-outline">Meet Our Mentors</button>
        </section>
      </div>
    </main>
    </>
  );
};

export default About;
