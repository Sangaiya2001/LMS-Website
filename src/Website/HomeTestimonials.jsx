import React, { useState, useRef, useEffect } from 'react';
import './HomeTestimonials.css';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const HomeTestimonials = () => {
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
  ];

  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRight();
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <div className="testimonialsSection">
      <h2>What Our Students Say</h2>
      
      <div className="sliderWrapper">
        {showLeftArrow && (
          <button className="arrowButton left" onClick={scrollLeft}>
            &lt;
          </button>
        )}

        <div 
          className="testimonialsContainer"
          ref={containerRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {testimonials.map((item, index) => (
            <div key={index} className="testimonialCard">
              <p className="quote"> 
                <FaQuoteLeft /> 
                  {item.content} 
                <FaQuoteRight style={{ float: 'right', margin: '5px', clear: 'both' }} />
              </p>
              <h3 className="studentName">
                {item.name} <span className="collegeYear">| {item.collegeYear}</span>
              </h3>
            </div>
          ))}
        </div>

        {showRightArrow && (
          <button className="arrowButton right" onClick={scrollRight}>
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeTestimonials;
