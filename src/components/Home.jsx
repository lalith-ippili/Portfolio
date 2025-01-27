import React, { useState, useEffect, useRef } from 'react';
import '../styles/Home.scss';
import developerGif from '../assets/developer.gif';

const Home = () => {
  const [boxes, setBoxes] = useState([]); // For moving boxes
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // For mouse effects
  const [stars, setStars] = useState([]); // For stars near the mouse
  const containerRef = useRef(null);

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

      {/* Content */}
      <div className="content">
        <h1 className="animate-text">Lalith Kumar</h1>
        <p className="subtitle">Frontend Developer</p>

        <div className="gif-container">
          <img
            src={developerGif}
            alt="Developer Animation"
            className="developer-gif"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;