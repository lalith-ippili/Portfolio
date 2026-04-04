import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/skills.scss';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [flipped, setFlipped] = useState({});
  const sectionRef = useRef(null);

  const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'Tools'];

  const skills = [
    // Frontend
    { name: 'HTML5', icon: 'https://img.icons8.com/color/96/000000/html-5.png', category: 'Frontend', level: 95, color: '#e34c26' },
    { name: 'CSS3', icon: 'https://img.icons8.com/color/96/000000/css3.png', category: 'Frontend', level: 90, color: '#264de4' },
    { name: 'SCSS', icon: 'https://img.icons8.com/color/96/000000/sass.png', category: 'Frontend', level: 88, color: '#cc6699' },
    { name: 'Tailwind', icon: 'https://img.icons8.com/color/96/000000/tailwindcss.png', category: 'Frontend', level: 90, color: '#38bdf8' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/96/000000/javascript.png', category: 'Frontend', level: 92, color: '#f7df1e' },
    { name: 'TypeScript', icon: 'https://img.icons8.com/color/96/000000/typescript.png', category: 'Frontend', level: 82, color: '#3178c6' },
    { name: 'ReactJS', icon: 'https://img.icons8.com/color/96/000000/react-native.png', category: 'Frontend', level: 95, color: '#61dafb' },
    { name: 'Next.js', icon: 'https://img.icons8.com/color/96/000000/nextjs.png', category: 'Frontend', level: 80, color: '#fff' },
    { name: 'Redux Toolkit', icon: 'https://img.icons8.com/color/96/000000/redux.png', category: 'Frontend', level: 88, color: '#764abc' },
    { name: 'Framer Motion', icon: 'https://img.icons8.com/color/96/framer.png', category: 'Frontend', level: 85, color: '#0055ff' },
    { name: 'Bootstrap', icon: 'https://img.icons8.com/color/96/000000/bootstrap.png', category: 'Frontend', level: 85, color: '#7952b3' },
    { name: 'Material UI', icon: 'https://img.icons8.com/color/96/000000/material-ui.png', category: 'Frontend', level: 80, color: '#0081cb' },
    // Backend
    { name: 'NodeJS', icon: 'https://img.icons8.com/color/96/000000/nodejs.png', category: 'Backend', level: 82, color: '#68a063' },
    { name: 'Django', icon: 'https://img.icons8.com/color/96/django.png', category: 'Backend', level: 78, color: '#44b78b' },
    { name: 'MongoDB', icon: 'https://img.icons8.com/color/96/000000/mongodb.png', category: 'Backend', level: 80, color: '#47a248' },
    { name: 'SQL', icon: 'https://img.icons8.com/color/96/000000/sql.png', category: 'Backend', level: 78, color: '#f29111' },
    { name: 'PostgreSQL', icon: 'https://img.icons8.com/color/96/000000/postgresql.png', category: 'Backend', level: 72, color: '#336791' },
    { name: 'Formik', icon: 'https://img.icons8.com/color/96/form.png', category: 'Backend', level: 88, color: '#172b4d' },
    // Mobile
    { name: 'React Native', icon: 'https://img.icons8.com/color/96/000000/react-native.png', category: 'Mobile', level: 88, color: '#00b4d8' },
    { name: 'Expo', icon: 'https://img.icons8.com/color/96/expo.png', category: 'Mobile', level: 82, color: '#fff' },
    { name: 'NativeWind', icon: 'https://img.icons8.com/color/96/000000/tailwindcss.png', category: 'Mobile', level: 80, color: '#38bdf8' },
    // Tools
    { name: 'Git', icon: 'https://img.icons8.com/color/96/000000/git.png', category: 'Tools', level: 88, color: '#f05032' },
    { name: 'GitHub', icon: 'https://img.icons8.com/color/96/github.png', category: 'Tools', level: 88, color: '#fff' },
    { name: 'Figma', icon: 'https://img.icons8.com/color/96/000000/figma.png', category: 'Tools', level: 75, color: '#f24e1e' },
    { name: 'VS Code', icon: 'https://img.icons8.com/color/96/000000/visual-studio-code-2019.png', category: 'Tools', level: 95, color: '#007acc' },
  ];

  const filtered = activeCategory === 'All' ? skills : skills.filter(s => s.category === activeCategory);

  const toggleFlip = (name) => {
    setFlipped(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const categoryColors = {
    Frontend: '#5b42f3',
    Backend: '#00ddeb',
    Mobile: '#ff3696',
    Tools: '#ff6b35',
  };

  return (
    <motion.section
      id="skills"
      className="skills"
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Orbs Background */}
      <div className="skills-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <h2 className="skills-title">My Skills</h2>
      <p className="skills-subtitle">Technologies I work with every day</p>

      {/* Category Filter */}
      <div className="skills-categories">
        {categories.map(cat => (
          <motion.button
            key={cat}
            className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
            style={{ '--cat-color': categoryColors[cat] || '#5b42f3' }}
            onClick={() => setActiveCategory(cat)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid — 3D Flip Cards */}
      <motion.div className="skills-grid" layout>
        {filtered.map((skill, index) => (
          <motion.div
            key={skill.name}
            className={`skill-card-wrap ${flipped[skill.name] ? 'flipped' : ''}`}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            layout
            onClick={() => toggleFlip(skill.name)}
            whileHover={{ y: -8 }}
            style={{ '--skill-color': skill.color }}
          >
            <div className="skill-card-inner">
              {/* FRONT */}
              <div className="skill-card-front">
                <div className="skill-icon-wrap">
                  <img src={skill.icon} alt={skill.name} className="skill-icon" />
                </div>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-cat" style={{ color: categoryColors[skill.category] }}>
                  {skill.category}
                </span>
              </div>
              {/* BACK */}
              <div className="skill-card-back">
                <span className="back-name">{skill.name}</span>
                <div className="skill-level-ring">
                  <svg viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="32" className="ring-bg" />
                    <circle
                      cx="40" cy="40" r="32"
                      className="ring-fill"
                      style={{
                        strokeDasharray: `${skill.level * 2.01} 201`,
                        stroke: skill.color,
                      }}
                    />
                  </svg>
                  <span className="ring-text">{skill.level}%</span>
                </div>
                <span className="back-label">Proficiency</span>
              </div>
            </div>
            {/* Glow */}
            <div className="card-glow-effect" />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
