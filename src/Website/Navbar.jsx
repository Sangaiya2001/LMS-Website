import React, { useState } from 'react'
import './Navbar.css'
import navLogo from '../Images/logo.png'
import LoginButton from './LoginButton'
import { Link } from 'react-router-dom';
import Home from './Home.jsx'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='nav'>
      <div className='navLeft'>
        <img src={navLogo} alt='Nav_Logo' className='navLogo' />
      </div>

      <div className='hamburger' onClick={() => setIsOpen(!isOpen)}>
        <div className={`bar ${isOpen ? 'rotate-top' : ''}`}></div>
        <div className={`bar ${isOpen ? 'fade-out' : ''}`}></div>
        <div className={`bar ${isOpen ? 'rotate-bottom' : ''}`}></div>
      </div>

      <div className={`navItem ${isOpen ? 'open' : ''}`}>
        <span><Link to={Home}>Home</Link></span>
        <span>ABOUT</span>
        <span>COURSES</span>
        <span>TESTIMONIAL</span>
        <span>BUSINESS</span>
        <LoginButton />
      </div>
    </div>
  )
}

export default Navbar
