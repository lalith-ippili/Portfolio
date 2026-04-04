import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaSchool, FaBolt, FaTshirt, FaShoppingCart, FaEnvelope, FaStore, 
  FaTimes, FaExternalLinkAlt, FaGraduationCap, FaCode, FaBuilding
} from 'react-icons/fa';
import '../styles/projects.scss';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Learning Management System (LMS)',
      description: 'High-performance PWA with offline support, mobile-first design, integrated Code IDE, collaborative whiteboard, analytics dashboard, and RBAC for VisionariesAI Labs Pvt Ltd.',
      icon: <FaGraduationCap />,
      link: 'https://lms.visionicx.com/',
      category: 'Web App',
      company: 'VisionariesAI Labs Pvt Ltd',
      technologies: ['React.js', 'Tailwind CSS', 'Redux Toolkit', 'Framer Motion', 'Formik', 'Django', 'SQL'],
      features: [
        'Progressive Web App (PWA) with offline support & mobile-first design',
        'Integrated Code IDE and Web Compiler for interactive learning',
        'Collaborative MS Paint-style whiteboard for technical education',
        'Analytics dashboard: course completion, topic engagement, video & quiz analytics',
        'Excel-like spreadsheet, multi-language translator, auto certificate generation',
        'Role-Based Access Control (RBAC) for Super Admins, Instructors & Students',
        'Optimized with Redux Toolkit for scalable state management',
      ],
      highlight: true,
    },
    {
      title: 'School Management System',
      description: 'A comprehensive app for managing schools, including student records, attendance, and administration.',
      icon: <FaSchool />,
      link: 'https://play.google.com/store/apps/details?id=com.visionariesai.schoolsystem',
      category: 'Mobile App',
      company: 'VisionariesAI Labs',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Express'],
      features: ['Student Management', 'Attendance Tracking', 'Fee Collection', 'Reports'],
    },
    {
      title: 'Energy Monitoring System',
      description: 'Real-time energy consumption monitoring and control system for efficient power management.',
      icon: <FaBolt />,
      link: 'https://play.google.com/store/apps/details?id=com.narasing.energymonitoringsystem',
      category: 'Mobile App',
      technologies: ['React Native', 'IoT', 'Firebase', 'Charts'],
      features: ['Real-time Monitoring', 'Energy Analytics', 'Automated Controls', 'Alerts'],
    },
    {
      title: 'FashionFi - E-commerce',
      description: 'Online clothing store with modern UI, secure payments, and user-friendly shopping experience.',
      icon: <FaTshirt />,
      link: 'https://fashonfi.netlify.app/',
      category: 'Web App',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      features: ['Product Catalog', 'Secure Payments', 'User Reviews', 'Wishlist'],
    },
    {
      title: 'AB Products - Supermarket',
      description: 'Full-featured online supermarket with product catalog, cart, and delivery options.',
      icon: <FaShoppingCart />,
      link: 'https://abproducts.netlify.app/',
      category: 'Web App',
      technologies: ['React', 'Express', 'PostgreSQL', 'JWT'],
      features: ['Inventory Management', 'Order Tracking', 'Delivery System', 'Admin Panel'],
    },
    {
      title: 'ReachFlow - Marketing Tool',
      description: 'Email-based marketing application for businesses to reach customers effectively.',
      icon: <FaEnvelope />,
      link: 'https://reachflow.netlify.app/',
      category: 'Web App',
      technologies: ['React', 'Node.js', 'Email APIs', 'Analytics'],
      features: ['Email Campaigns', 'Customer Segmentation', 'Analytics Dashboard', 'Automation'],
    },
    {
      title: 'Cream Vault - Admin Panel',
      description: 'Admin dashboard for managing e-commerce operations, inventory, and orders.',
      icon: <FaStore />,
      link: 'https://creamvault.netlify.app/',
      category: 'Web App',
      technologies: ['React', 'Redux', 'Node.js', 'Charts'],
      features: ['Order Management', 'Inventory Control', 'Sales Reports', 'User Management'],
    },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background */}
      <div className="projects-bg">
        <div className="proj-orb proj-orb-1" />
        <div className="proj-orb proj-orb-2" />
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <h2>My Projects</h2>
      <p className="projects-subtitle">Things I've built with passion</p>

      <div className="filter-buttons">
        {categories.map(cat => (
          <motion.button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <motion.div className="projects-container" layout>
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            className={`project-card ${project.highlight ? 'featured' : ''}`}
            initial={{ opacity: 0, y: 80, scale: 0.8, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1, type: "spring", bounce: 0.4 }}
            layout
          >
            {project.highlight && (
              <div className="featured-badge">
                <FaBuilding /> VisionariesAI Labs
              </div>
            )}
            <div className="icon-container">
              {project.icon}
              {project.company && (
                <span className="company-tag">{project.company}</span>
              )}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="category">{project.category}</span>

            <div className="tech-mini-tags">
              {project.technologies.slice(0, 4).map((t, i) => (
                <span key={i} className="mini-tag">{t}</span>
              ))}
              {project.technologies.length > 4 && (
                <span className="mini-tag more">+{project.technologies.length - 4}</span>
              )}
            </div>

            <div className="card-buttons">
              <motion.button
                className="details-btn"
                onClick={() => setSelectedProject(project)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
              </motion.button>
              {project.link !== '#' && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt />
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setSelectedProject(null)}>
                <FaTimes />
              </button>
              <div className="modal-header">
                <div className="modal-icon">{selectedProject.icon}</div>
                <h3>{selectedProject.title}</h3>
                {selectedProject.company && (
                  <p className="modal-company"><FaBuilding /> {selectedProject.company}</p>
                )}
                <span className="modal-category">{selectedProject.category}</span>
              </div>
              <p className="modal-description">{selectedProject.description}</p>
              <div className="modal-section">
                <h4>Technologies Used:</h4>
                <div className="tech-tags">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="modal-section">
                <h4>Key Features:</h4>
                <ul>
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              {selectedProject.link !== '#' && (
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="modal-link">
                  Visit Project <FaExternalLinkAlt />
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;