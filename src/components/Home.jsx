import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/home.scss';
import logo1Photo from '../assets/logo1.png';
import resumeFile from '../assets/Lalith_kumar.pdf';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [particles, setParticles] = useState([]);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState([]);
  const containerRef = useRef(null);
  const heroCardRef = useRef(null);

  const titles = [
    'Full Stack Developer',
    'Frontend Engineer',
    'React.js Specialist',
    'PWA Developer',
    'React Native Developer',
    'UI/UX Engineer',
    'Mobile App Developer',
    'MERN Stack Developer',
  ];

  const techBadges = [
    { label: 'React', color: '#61dafb', icon: '⚛️' },
    { label: 'Node.js', color: '#68a063', icon: '🟢' },
    { label: 'Django', color: '#44b78b', icon: '🐍' },
    { label: 'Redux', color: '#764abc', icon: '🔷' },
    { label: 'TypeScript', color: '#3178c6', icon: '🔵' },
    { label: 'React Native', color: '#00b4d8', icon: '📱' },
    { label: 'MongoDB', color: '#47a248', icon: '🍃' },
    { label: 'Tailwind', color: '#38bdf8', icon: '🎨' },
  ];

  const stats = [
    { num: '3+', label: 'Years Exp', icon: '🚀', color: '#5b42f3' },
    { num: '30+', label: 'Projects', icon: '💼', color: '#00ddeb' },
    { num: '25+', label: 'Tools & Tech', icon: '⚡', color: '#ff3696' },
    { num: 'PWA', label: 'Expert', icon: '📱', color: '#ff6b35' },
    { num: '5+', label: 'Frameworks', icon: '🧩', color: '#44b78b' },
    { num: '2+', label: 'Mobile Apps', icon: '📲', color: '#f7df1e' },
  ];

  // Typing effect
  useEffect(() => {
    let timeout;
    const currentTitle = titles[currentTitleIndex];
    if (isTyping) {
      let charIndex = 0;
      const type = () => {
        if (charIndex <= currentTitle.length) {
          setTypedText(currentTitle.slice(0, charIndex));
          charIndex++;
          timeout = setTimeout(type, 75);
        } else {
          timeout = setTimeout(() => setIsTyping(false), 2200);
        }
      };
      type();
    } else {
      let charIndex = currentTitle.length;
      const erase = () => {
        if (charIndex >= 0) {
          setTypedText(currentTitle.slice(0, charIndex));
          charIndex--;
          timeout = setTimeout(erase, 35);
        } else {
          setCurrentTitleIndex(prev => (prev + 1) % titles.length);
          setIsTyping(true);
        }
      };
      erase();
    }
    return () => clearTimeout(timeout);
  }, [currentTitleIndex, isTyping]);

  // Particles
  useEffect(() => {
    setParticles(Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.5 + 0.05,
      duration: Math.random() * 25 + 10,
      delay: Math.random() * 15,
      colorIndex: i % 3,
    })));
  }, []);

  // Mouse move — tilt + sparkle stars
  useEffect(() => {
    const handleMouseMove = e => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });

      const cardRect = heroCardRef.current?.getBoundingClientRect();
      if (cardRect) {
        const cx = cardRect.left + cardRect.width / 2;
        const cy = cardRect.top + cardRect.height / 2;
        setTilt({
          x: -((e.clientY - cy) / cardRect.height) * 18,
          y: ((e.clientX - cx) / cardRect.width) * 18,
        });
      }

      if (Math.random() < 0.25) {
        setStars(prev => [...prev, {
          id: Date.now() + Math.random(),
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          size: Math.random() * 10 + 3,
        }]);
      }
    };
    const handleMouseLeave = () => setTilt({ x: 0, y: 0 });
    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);
    container?.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      container?.removeEventListener('mousemove', handleMouseMove);
      container?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setStars(prev => prev.filter(s => Date.now() - s.id < 700)), 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="home" ref={containerRef}>

      {/* ── Animated Background ── */}
      <div className="bg-particles">
        {particles.map(p => (
          <div key={p.id} className={`bg-particle color-${p.colorIndex}`} style={{
            left: `${p.x}%`, top: `${p.y}%`,
            width: `${p.size}px`, height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }} />
        ))}
      </div>

      {/* Grid */}
      <div className="grid-overlay">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={`v${i}`} className="grid-v" style={{ left: `${(i + 1) * 10}%` }} />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={`h${i}`} className="grid-h" style={{ top: `${(i + 1) * 12.5}%` }} />
        ))}
      </div>

      {/* Cursor FX */}
      <div className="cursor-glow" style={{ left: mousePosition.x, top: mousePosition.y }} />
      {stars.map(s => (
        <div key={s.id} className="sparkle" style={{ left: s.x, top: s.y, width: s.size, height: s.size }} />
      ))}

      {/* ── Hero Grid ── */}
      <div className="hero-grid">

        {/* LEFT */}
        <motion.div className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Status Badge */}
          <motion.div className="status-badge"
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
          >
            <span className="pulse-dot" />
            <span>Open to Work</span>
            <span className="divider">•</span>
            <span className="company-text">VisionariesAI Labs</span>
          </motion.div>

          {/* Name — single line */}
          <motion.h1 className="hero-name"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {'Ippili Lalith '.split('').map((ch, i) => (
              <motion.span key={`f-${i}`} className="letter name-white"
                initial={{ opacity: 0, y: 30, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.55 + i * 0.035, duration: 0.45, type: 'spring' }}
              >
                {ch === ' ' ? '\u00A0' : ch}
              </motion.span>
            ))}
            {'Kumar'.split('').map((ch, i) => (
              <motion.span key={`l-${i}`} className="letter name-gradient-inline"
                initial={{ opacity: 0, y: 30, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 1.1 + i * 0.05, duration: 0.45, type: 'spring' }}
              >
                {ch}
              </motion.span>
            ))}
          </motion.h1>

          {/* Typing */}
          <motion.div className="typing-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <span className="typing-prefix">I am a </span>
            <AnimatePresence mode="wait">
              <motion.span key={currentTitleIndex} className="typed-text"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {typedText}
                <span className="cursor">|</span>
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.7 }}
          >
            Crafting high-performance <strong>web & mobile experiences</strong> at{' '}
            <strong className="accent">VisionariesAI Labs Pvt Ltd</strong>.{' '}
            Specialized in <strong>React.js</strong>, <strong>React Native</strong>,{' '}
            <strong>Node.Js</strong> , <strong>Django</strong> & scalable architectures.
          </motion.p>

          {/* Tech Badges */}
          <motion.div className="tech-badges"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1 }}
          >
            {techBadges.map((b, i) => (
              <motion.span key={i} className="tech-badge"
                style={{ '--bc': b.color }}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.1 + i * 0.06, type: 'spring' }}
                whileHover={{ scale: 1.14, y: -4 }}
              >
                <span className="badge-icon">{b.icon}</span>
                {b.label}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6 }}
          >
            <motion.button className="btn-hire"
              whileHover={{ scale: 1.07, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Hire Me</span>
              <span className="btn-shine" />
              <span className="btn-arrow">→</span>
            </motion.button>
            <motion.a href="#projects" className="btn-outline"
              whileHover={{ scale: 1.07, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              View Projects
            </motion.a>
            <motion.a
              href={resumeFile}
              download="Ippili_Lalith_Kumar_Resume.pdf"
              className="btn-resume"
              aria-label="Download Ippili Lalith Kumar resume"
              whileHover={{ scale: 1.07, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
              <span>Download Resume</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT — 3D Profile Card */}
        <motion.div className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="card-scene">
            {/* Orbit rings behind card */}
            <div className="orbit orbit-1" />
            <div className="orbit orbit-2" />
            <div className="orbit orbit-3" />

            {/* The 3D card itself */}
            <div
              ref={heroCardRef}
              className="profile-3d-card"
              style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
            >
              {/* Glowing aura */}
              <div className="card-aura" />

              {/* Spinning rings */}
              <div className="spin-ring ring-a" />
              <div className="spin-ring ring-b" />
              <div className="spin-ring ring-c" />

              {/* Photo */}
              <div className="photo-frame">
                <img
                  src={logo1Photo}
                  alt="Ippili Lalith Kumar"
                  className="profile-photo"
                />
                <div className="photo-shimmer" />
              </div>

              {/* Floating stat chips */}
              {stats.map((s, i) => (
                <motion.div key={i} className={`stat-chip chip-${i + 1}`}
                  style={{ '--sc': s.color }}
                  animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                  whileHover={{ scale: 1.12, zIndex: 20 }}
                >
                  <span className="chip-icon">{s.icon}</span>
                  <div className="chip-text">
                    <span className="chip-num">{s.num}</span>
                    <span className="chip-label">{s.label}</span>
                  </div>
                </motion.div>
              ))}

              {/* Corner accents */}
              <div className="corner tl" />
              <div className="corner tr" />
              <div className="corner bl" />
              <div className="corner br" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll Down</span>
      </motion.div>

    </section>
  );
};

export default Home;