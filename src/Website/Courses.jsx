import { motion } from "framer-motion";
import { useState } from "react";
import './Courses.css';
import Navbar from "./Navbar";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortOption, setSortOption] = useState("popular");

const courses = [
  {
    id: 1,
    title: "HTML & CSS",
    description: "Build strong foundations in web development using HTML5 and modern CSS.",
    duration: "3 weeks",
    level: "Beginner",
    mode: "Live",
    category: "web",
    popularity: 5,
    latest: true,
  },
  {
    id: 2,
    title: "C Programming",
    description: "Start your programming journey with the powerful C language.",
    duration: "4 weeks",
    level: "Beginner",
    mode: "Pre-recorded",
    category: "programming",
    popularity: 3,
    latest: true,
  },
  {
    id: 3,
    title: "C++ Programming",
    description: "Learn object-oriented programming and STL with C++.",
    duration: "5 weeks",
    level: "Intermediate",
    mode: "Live",
    category: "programming",
    popularity: 4,
    latest: true,
  },
  {
    id: 4,
    title: "Java Programming",
    description: "Comprehensive Java programming including OOPs, collections, and more.",
    duration: "6 weeks",
    level: "Intermediate",
    mode: "Live",
    category: "programming",
    popularity: 5,
    latest: true,
  },
  {
    id: 5,
    title: "Python for Beginners",
    description: "Learn Python from scratch with hands-on projects and real-world applications.",
    duration: "6 weeks",
    level: "Beginner",
    mode: "Live",
    category: "programming",
    popularity: 5,
    latest: true,
  },
  {
    id: 6,
    title: "Data Structures",
    description: "Master DSA concepts and problem solving for placements.",
    duration: "8 weeks",
    level: "Intermediate",
    mode: "Live",
    category: "dsa",
    popularity: 5,
    latest: true,
  },
  {
    id: 7,
    title: "JavaScript",
    description: "Master the fundamentals of JavaScript including DOM, ES6, and event handling.",
    duration: "4 weeks",
    level: "Beginner",
    mode: "Pre-recorded",
    category: "programming",
    popularity: 4,
    latest: true,
  },
  {
    id: 8,
    title: "Advanced JavaScript",
    description: "Deep dive into modern JavaScript, ES6+, and advanced patterns.",
    duration: "4 weeks",
    level: "Advanced",
    mode: "Live",
    category: "programming",
    popularity: 4,
    latest: false,
  },
  {
    id: 9,
    title: "React JS",
    description: "Learn to build dynamic user interfaces using React, hooks, and context API.",
    duration: "6 weeks",
    level: "Intermediate",
    mode: "Live",
    category: "web",
    popularity: 5,
    latest: true,
  },
  {
    id: 10,
    title: "Node JS",
    description: "Learn backend development with Node.js, Express, and MongoDB.",
    duration: "6 weeks",
    level: "Intermediate",
    mode: "Pre-recorded",
    category: "web",
    popularity: 4,
    latest: true,
  },
  {
    id: 11,
    title: "Full-Stack Web Development",
    description: "Master MERN stack development with comprehensive frontend and backend training.",
    duration: "12 weeks",
    level: "Intermediate",
    mode: "Live",
    category: "web",
    popularity: 4,
    latest: true,
  },
  
  
  {
    id: 12,
    title: "Data Science Fundamentals",
    description: "Introduction to data analysis, visualization, and machine learning with Python.",
    duration: "8 weeks",
    level: "Intermediate",
    mode: "Pre-recorded",
    category: "data",
    popularity: 3,
    latest: false,
  },
  {
    id: 13,
    title: "DevOps & Cloud Computing",
    description: "CI/CD pipelines, Docker, Kubernetes, and AWS deployment strategies.",
    duration: "10 weeks",
    level: "Advanced",
    mode: "Live",
    category: "devops",
    popularity: 4,
    latest: true,
  },
  
  {
    id: 14,
    title: "UI/UX Design Principles",
    description: "Learn design thinking, prototyping, and user experience best practices.",
    duration: "5 weeks",
    level: "Beginner",
    mode: "Pre-recorded",
    category: "design",
    popularity: 3,
    latest: true,
  },
  {
    id: 15,
    title: "Aptitude for Placements",
    description: "Sharpen your aptitude skills for campus and competitive exams.",
    duration: "3 weeks",
    level: "Beginner",
    mode: "Live",
    category: "aptitude",
    popularity: 5,
    latest: true,
  },
  {
    id: 16,
    title: "Soft Skills Training",
    description: "Develop communication, teamwork, leadership, and interview skills.",
    duration: "2 weeks",
    level: "All Levels",
    mode: "Live",
    category: "softskills",
    popularity: 4,
    latest: true,
  },
];

  const filteredCourses = courses
    .filter(course => activeFilter === "all" || course.level.toLowerCase() === activeFilter)
    .sort((a, b) => {
      if (sortOption === "popular") return b.popularity - a.popularity;
      if (sortOption === "latest") return b.latest - a.latest;
      return 0;
    });

  return (
    <>
      <Navbar/>
    
    <div className="pageContainer">
      <div className="headerContainer">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pageTitle"
        >
          Explore Our Courses
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="pageSubtitle"
        >
          Upskill with industry-relevant courses taught by expert trainers
        </motion.p>
      </div>

      <div className="filterContainer">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="filterContent"
        >
          <div className="filterButtons">
            {["all", "beginner", "intermediate", "advanced"].map(level => (
              <button
                key={level}
                onClick={() => setActiveFilter(level)}
                className={`filterButton ${activeFilter === level ? "activeFilter" : ""}`}
              >
                {level === "all" ? "All Courses" : level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>

          <div className="sortContainer">
            <span className="sortLabel">Sort by:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="sortSelect"
            >
              <option value="popular">Most Popular</option>
              <option value="latest">Newest</option>
            </select>
          </div>
        </motion.div>
      </div>

      <div className="coursesGridContainer">
        {filteredCourses.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="noCoursesMessage"
          >
            <p>No courses match your filters. Try adjusting your selection.</p>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="coursesGrid"
          >
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} variants={itemVariants} />
            ))}
          </motion.div>
        )}
      </div>

      <div className="ctaSection">
        <div className="ctaContainer">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="ctaTitle">Need help choosing a course?</h2>
            <p className="ctaText">
              Our mentors are here to guide you based on your career goals and current skill level.
            </p>
            <button className="ctaButton">Get Free Career Guidance</button>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
};

const CourseCard = ({ course, variants }) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="courseCard"
    >
      <div className="cardAccent"></div>
      <div className="cardContent">
        <div className="cardHeader">
          <h3 className="courseTitle">{course.title}</h3>
          <span className={`modeBadge ${course.mode === "Live" ? "liveMode" : "recordedMode"}`}>
            {course.mode}
          </span>
        </div>
        <p className="courseDescription">{course.description}</p>

        <div className="tagsContainer">
          <span className="durationTag">{course.duration}</span>
          <span className={`levelTag ${
            course.level === "Beginner" ? "beginnerLevel" :
            course.level === "Intermediate" ? "intermediateLevel" : "advancedLevel"
          }`}>
            {course.level}
          </span>
        </div>

        <button className="detailsButton">View Details</button>
      </div>
    </motion.div>
  
  );
};

export default Courses;
