import React, { useEffect, useRef, useState } from 'react';
import '../styles/skills.scss';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: 'https://img.icons8.com/color/96/000000/html-5.png' },
    { name: 'CSS', icon: 'https://img.icons8.com/color/96/000000/css3.png' },
    { name: 'SCSS', icon: 'https://img.icons8.com/color/96/000000/sass.png' },
    { name: 'Tailwind', icon: 'https://img.icons8.com/color/96/000000/tailwindcss.png' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/96/000000/javascript.png' },
    { name: 'TypeScript', icon: 'https://img.icons8.com/color/96/000000/typescript.png' },
    { name: 'ReactJS', icon: 'https://img.icons8.com/color/96/000000/react-native.png' },
    { name: 'Next.js', icon: 'https://img.icons8.com/color/96/000000/nextjs.png' },
    { name: 'Bootstrap', icon: 'https://img.icons8.com/color/96/000000/bootstrap.png' },
    { name: 'Material UI', icon: 'https://img.icons8.com/color/96/000000/material-ui.png' },
    { name: 'Redux', icon: 'https://img.icons8.com/color/96/000000/redux.png' },
    { name: 'React Native', icon: 'https://img.icons8.com/color/96/000000/react-native.png' },
    { name: 'NodeJS', icon: 'https://img.icons8.com/color/96/000000/nodejs.png' },
    { name: 'MongoDB', icon: 'https://img.icons8.com/color/96/000000/mongodb.png' },
    { name: 'SQL', icon: 'https://img.icons8.com/color/96/000000/sql.png' },
  ]

  const skillRefs = useRef([]);
  const sectionRef = useRef(null);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Create a star
      const newStar = {
        id: Math.random(),
        x: clientX,
        y: clientY,
        size: Math.random() * 10 + 5,
      };

      // Add the new star
      setStars((prevStars) => [...prevStars, newStar]);

      // Move skills slightly on hover
      skillRefs.current.forEach((skill) => {
        const rect = skill.getBoundingClientRect();
        const skillCenterX = rect.left + rect.width / 2;
        const skillCenterY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(clientX - skillCenterX, 2) + Math.pow(clientY - skillCenterY, 2)
        );

        if (distance < 100) {
          skill.style.transform = `translate(${(clientX - skillCenterX) * 0.2}px, ${(clientY - skillCenterY) * 0.2
            }px)`;
        } else {
          skill.style.transform = 'translate(0, 0)';
        }
      });
    };

    const section = sectionRef.current;
    section.addEventListener('mousemove', handleMouseMove);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      {/* Background Shapes */}
      <div className="background-shapes">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="shape"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Section Title */}
      <h2>My Skills</h2>

      {/* Skills List */}
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill"
            ref={(el) => (skillRefs.current[index] = el)}
          >
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
