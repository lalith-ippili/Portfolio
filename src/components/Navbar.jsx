import React, { useState, useEffect } from 'react';
import '../styles/navbar.scss';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo1 from '../assets/logo1.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ['home', 'about', 'skills', 'services', 'projects', 'Contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Experience', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#Contact', id: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
      <div className="navbar-inner">
        {/* logo */}
        <a href="#home" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="logo-ring">
            <img src={logo1} className="logo_image" alt="Ippili Lalith Kumar" />
          </div>
          <div className="logo-text">
            <span className="logo-name">Lalith Kumar</span>
            <span className="logo-tag">Software Developer</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="nav-links">
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={item.href}
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
                <span className="nav-indicator" />
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me CTA */}
        <a
          href="#Contact"
          className="nav-cta"
          onClick={e => {
            e.preventDefault();
            document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
          }}
        >
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`mobile-menu-backdrop ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu} aria-hidden={isMobileMenuOpen ? 'false' : 'true'} />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <div className="mobile-menu-inner">
          <button className="mobile-close-btn" type="button" onClick={toggleMobileMenu} aria-label="Close menu">
            <FaTimes />
          </button>
          {navItems.map(item => (
            <a
              key={item.id}
              href={item.href}
              className={`mobile-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={toggleMobileMenu}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#Contact"
            className="mobile-cta"
            onClick={e => {
              e.preventDefault();
              document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' });
              toggleMobileMenu();
            }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;