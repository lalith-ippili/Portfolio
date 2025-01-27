import React, { useState, useEffect } from 'react';
import '../styles/navbar.scss';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo1.jpg'

const Navbar = () => {
  const [boxes, setBoxes] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Create moving boxes
  useEffect(() => {
    const createBoxes = () => {
      const newBoxes = [];
      for (let i = 0; i < 20; i++) {
        const box = {
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * 100,
          size: Math.random() * 10 + 5,
          speed: Math.random() * 1 + 0.5,
        };
        newBoxes.push(box);
      }
      setBoxes(newBoxes);
    };

    createBoxes();
  }, []);

  // Animate boxes
  useEffect(() => {
    const moveBoxes = () => {
      setBoxes(prevBoxes =>
        prevBoxes.map(box => ({
          ...box,
          y: box.y + box.speed > 100 ? 0 : box.y + box.speed,
        }))
      );
    };

    const interval = setInterval(moveBoxes, 50);
    return () => clearInterval(interval);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Moving Boxes */}
      {boxes.map(box => (
        <div
          key={box.id}
          className="box"
          style={{
            left: `${box.x}px`,
            top: `${box.y}px`,
            width: `${box.size}px`,
            height: `${box.size}px`,
            animationDuration: `${box.speed}s`,
          }}
        />
      ))}


      <div className="logo">
        <a href='#home' onClick={toggleMobileMenu}>      <img src={Logo} className='logo_image' /> </a>

        {/* <span>Lalith Kumar</span> */}
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={toggleMobileMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMobileMenu}>About</a></li>
        <li><a href="#skills" onClick={toggleMobileMenu}>Skills</a></li>
        <li><a href="#" onClick={toggleMobileMenu}>Services</a></li>
        <li><a href="#Contact" onClick={toggleMobileMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;