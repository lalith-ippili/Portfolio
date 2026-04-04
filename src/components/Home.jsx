import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/home.scss';
import logo1Photo from '../assets/logo1.png';

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
              href="https://wa.me/919573773418"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              whileHover={{ scale: 1.07, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M11.999 2C6.477 2 2 6.477 2 11.999c0 1.99.576 3.845 1.573 5.41L2.046 22l4.741-1.493A9.951 9.951 0 0012 22c5.522 0 10-4.477 10-10S17.522 2 11.999 2zm.001 18a7.952 7.952 0 01-4.055-1.113l-.29-.173-3.01.947.988-2.935-.19-.302A7.972 7.972 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" /></svg>
              WhatsApp
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