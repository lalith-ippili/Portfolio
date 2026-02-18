import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Home.scss';
import developerGif from '../assets/developer.gif';

const Home = () => {
  const [boxes, setBoxes] = useState([]); // For moving boxes
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // For mouse effects
  const [stars, setStars] = useState([]); // For stars near the mouse
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [typedText, setTypedText] = useState('');
  const containerRef = useRef(null);

  const [floatingElements, setFloatingElements] = useState([]);

  const elements = [
    { symbol: '⚡', color: '#ff3696' },
    { symbol: '🔥', color: '#ff6b35' },
    { symbol: '💎', color: '#00ddeb' },
    { symbol: '🚀', color: '#5b42f3' },
    { symbol: '🌟', color: '#ff3696' },
    { symbol: '⚛️', color: '#00ddeb' },
    { symbol: '🎯', color: '#5b42f3' },
    { symbol: '💻', color: '#ff6b35' },
    { symbol: '⚙️', color: '#00ddeb' },
    { symbol: '🎨', color: '#ff3696' },
    { symbol: '📱', color: '#5b42f3' },
    { symbol: '🌐', color: '#ff6b35' },
    { symbol: '💡', color: '#00ddeb' },
    { symbol: '🎪', color: '#ff3696' },
    { symbol: '⚡', color: '#5b42f3' }
  ];

  const titles = [
    'Software Developer',
    'Full Stack Engineer',
    'React Specialist',
    'UI/UX Designer',
    'Mobile App Developer',
    'Web Solutions Expert',
    'Creative Coder'
  ];

  // Create floating elements
  useEffect(() => {
    const createFloatingElements = () => {
      const newElements = elements.map((element, index) => ({
        id: index,
        symbol: element.symbol,
        color: element.color,
        x: Math.random() * (window.innerWidth - 200) + 100,
        y: Math.random() * (window.innerHeight - 200) + 100,
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 3,
        scale: Math.random() * 0.5 + 0.8,
      }));
      setFloatingElements(newElements);
    };

    createFloatingElements();
  }, []);

  // Animate floating elements
  useEffect(() => {
    const animateElements = () => {
      setFloatingElements(prevElements =>
        prevElements.map(element => {
          let newX = element.x + element.speedX;
          let newY = element.y + element.speedY;
          let newRotation = element.rotation + element.rotationSpeed;

          // Bounce off edges
          if (newX < 0 || newX > window.innerWidth - 50) {
            element.speedX *= -1;
            newX = Math.max(0, Math.min(window.innerWidth - 50, newX));
          }
          if (newY < 0 || newY > window.innerHeight - 50) {
            element.speedY *= -1;
            newY = Math.max(0, Math.min(window.innerHeight - 50, newY));
          }

          return {
            ...element,
            x: newX,
            y: newY,
            rotation: newRotation,
          };
        })
      );
    };

    const interval = setInterval(animateElements, 50);
    return () => clearInterval(interval);
  }, []);

  const [particles, setParticles] = useState([]);

  // Create interactive particles
  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
      setParticles(newParticles);
    };

    createParticles();
  }, []);

  // Animate particles and make them interactive
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;

          // Wrap around screen
          if (newX < 0) newX = window.innerWidth;
          if (newX > window.innerWidth) newX = 0;
          if (newY < 0) newY = window.innerHeight;
          if (newY > window.innerHeight) newY = 0;

          // Make particles attracted to mouse
          const dx = mousePosition.x - newX;
          const dy = mousePosition.y - newY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const force = (100 - distance) / 100;
            newX += (dx / distance) * force * 0.5;
            newY += (dy / distance) * force * 0.5;
          }

          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, [mousePosition]);

  // Typing and rotating titles effect
  useEffect(() => {
    let timeout;
    const currentTitle = titles[currentTitleIndex];

    if (isTyping) {
      let charIndex = 0;
      const type = () => {
        if (charIndex <= currentTitle.length) {
          setTypedText(currentTitle.slice(0, charIndex));
          charIndex++;
          timeout = setTimeout(type, 100);
        } else {
          timeout = setTimeout(() => {
            setIsTyping(false);
          }, 2000); // Pause before erasing
        }
      };
      type();
    } else {
      let charIndex = currentTitle.length;
      const erase = () => {
        if (charIndex >= 0) {
          setTypedText(currentTitle.slice(0, charIndex));
          charIndex--;
          timeout = setTimeout(erase, 50);
        } else {
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          setIsTyping(true);
        }
      };
      erase();
    }

    return () => clearTimeout(timeout);
  }, [currentTitleIndex, isTyping]);

  // Create moving boxes
  useEffect(() => {
    const createBoxes = () => {
      const newBoxes = [];
      for (let i = 0; i < 50; i++) {
        const box = {
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 20 + 10, // Random size between 10 and 30
          speed: Math.random() * 2 + 1, // Random speed between 1 and 3
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
          y: box.y + box.speed > window.innerHeight ? 0 : box.y + box.speed, // Move down and reset at the bottom
        }))
      );
    };

    const interval = setInterval(moveBoxes, 50); // Update box positions every 50ms
    return () => clearInterval(interval);
  }, []);

  // Mouse move effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePosition({ x, y });

      // Create stars near the mouse
      if (Math.random() < 0.5) {
        const newStar = {
          id: Date.now(),
          x,
          y,
          size: Math.random() * 10 + 6, // Random size between 2 and 6
          speed: Math.random() * 4 + 1, // Random speed between 1 and 3
          opacity: Math.random(),
        };
        setStars(prevStars => [...prevStars, newStar]);
      }
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Remove stars after a while
  useEffect(() => {
    const starCleanup = setInterval(() => {
      setStars(prevStars =>
        prevStars.filter(star => Date.now() - star.id < 1000) // Remove stars after 1 second
      );
    }, 500);

    return () => clearInterval(starCleanup);
  }, []);

  return (
    <section
      id="home"
      className="home"
      ref={containerRef}
    >
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

      {/* Bigger Ball Near Mouse */}
      <div
        className="big-ball"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      {/* Stars Near Mouse */}
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.speed}s`,
          }}
        />
      ))}

      {/* Floating Elements */}
      {floatingElements.map(element => (
        <motion.div
          key={element.id}
          className="floating-element"
          style={{
            left: `${element.x}px`,
            top: `${element.y}px`,
            transform: `rotate(${element.rotation}deg) scale(${element.scale})`,
            color: element.color,
          }}
          whileHover={{
            scale: element.scale * 1.3,
            rotate: element.rotation + 180
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          animate={{
            y: [0, -10, 0],
          }}
          whileTap={{ scale: element.scale * 0.9 }}
        >
          {element.symbol}
        </motion.div>
      ))}

      {/* Interactive Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="interactive-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
        />
      ))}

      {/* Content */}
      <motion.div 
        className="content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1 
          className="animate-text"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {"Lalith Kumar".split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="letter"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>
        <motion.div 
          className="subtitle-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.p 
              key={currentTitleIndex}
              className="subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {typedText}
              <span className="cursor">|</span>
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.button 
          className="hire-me-btn"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Hire Me
        </motion.button>

        <motion.div 
          className="gif-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img
            src={developerGif}
            alt="Developer Animation"
            className="developer-gif"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;