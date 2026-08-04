import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaApple,
  FaBolt,
  FaBuilding,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGlobe,
  FaGooglePlay,
  FaGraduationCap,
  FaHandsHelping,
  FaSchool,
  FaShoppingCart,
  FaStore,
  FaTasks,
  FaTimes,
  FaTshirt,
} from 'react-icons/fa';
import '../styles/projects.scss';

// Only one App Store URL was supplied, so it is currently used for both SMS and EMS.
// Replace it with separate listing URLs later if the applications have different pages.
const APP_STORE_LINK = 'https://share.google/phfobgBTmsiNtARJY';

const PARTICLES = Array.from({ length: 16 }, (_, index) => ({
  left: `${(index * 17 + 9) % 100}%`,
  delay: `${(index % 8) * 1.2}s`,
  duration: `${12 + (index % 5) * 2}s`,
}));

const PROJECTS = [
  {
    title: 'Learning Management System (LMS)',
    shortTitle: 'LMS',
    description:
      'A high-performance digital learning platform with offline support, interactive learning tools, advanced analytics, and role-based access for scalable education delivery.',
    icon: <FaGraduationCap />,
    category: 'Web App',
    company: 'VisionariesAI Labs Pvt Ltd',
    technologies: [
      'React.js',
      'Tailwind CSS',
      'Redux Toolkit',
      'Framer Motion',
      'Formik',
      'Django',
      'SQL',
    ],
    features: [
      'Progressive Web App with offline support and a mobile-first experience',
      'Integrated Code IDE and web compiler for interactive learning',
      'Collaborative whiteboard for technical and classroom activities',
      'Course, topic, video, quiz, and student engagement analytics',
      'Spreadsheet tools, translation support, and automated certificates',
      'Role-Based Access Control for Super Admins, Instructors, and Students',
    ],
    links: [
      {
        label: 'Visit LMS',
        shortLabel: 'Website',
        type: 'website',
        url: 'https://lms.visionicx.com/',
      },
    ],
    featured: true,
  },
  {
    title: 'School Management System (SMS)',
    shortTitle: 'SMS',
    description:
      'A complete school administration application for managing students, attendance, fees, academic records, communication, and daily institutional operations.',
    icon: <FaSchool />,
    category: 'Mobile App',
    company: 'VisionariesAI Labs Pvt Ltd',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Express'],
    features: [
      'Student and staff profile management',
      'Attendance, timetable, and academic record tracking',
      'Fee collection, invoices, and institutional reports',
      'Mobile access for efficient day-to-day school administration',
    ],
    links: [
      {
        label: 'Get it on Google Play',
        shortLabel: 'Play Store',
        type: 'playstore',
        url: 'https://play.google.com/store/apps/details?id=com.visionariesai.schoolsystem',
      },
      {
        label: 'Download on the App Store',
        shortLabel: 'App Store',
        type: 'appstore',
        url: APP_STORE_LINK,
      },
    ],
    featured: true,
  },
  {
    title: 'Energy Monitoring System (EMS)',
    shortTitle: 'EMS',
    description:
      'An IoT-enabled energy monitoring and control application that provides real-time usage visibility, analytics, alerts, and operational control.',
    icon: <FaBolt />,
    category: 'Mobile App',
    company: 'VisionariesAI Labs Pvt Ltd',
    technologies: ['React Native', 'IoT', 'Firebase', 'Analytics', 'Charts'],
    features: [
      'Real-time energy consumption monitoring',
      'Usage analytics and historical performance trends',
      'Automated controls and configurable alerts',
      'Mobile dashboards for efficient power management',
    ],
    links: [
      {
        label: 'Get it on Google Play',
        shortLabel: 'Play Store',
        type: 'playstore',
        url: 'https://play.google.com/store/apps/details?id=com.narasing.energymonitoringsystem',
      },
      {
        label: 'Download on the App Store',
        shortLabel: 'App Store',
        type: 'appstore',
        url: APP_STORE_LINK,
      },
    ],
    featured: true,
  },
  {
    title: 'SuperAdmin Organization Platform',
    shortTitle: 'SuperAdmin',
    description:
      'An enterprise ERP ecosystem that centralizes organizations, employees, clients, tasks, attendance, pricing, payroll, and corporate analytics.',
    icon: <FaBuilding />,
    category: 'Enterprise',
    company: 'VisionariesAI Labs Pvt Ltd',
    technologies: ['React.js', 'Tailwind CSS', 'Redux', 'Django', 'SQL'],
    features: [
      'Multi-organization, employee, and client management',
      'Integrated task trackers and attendance logs',
      'Flexible pricing and corporate data structures',
      'High-performance analytics dashboards',
      'Automated salary processing and payroll workflows',
    ],
    links: [
      {
        label: 'Open SuperAdmin',
        shortLabel: 'Website',
        type: 'website',
        url: 'https://superadmin.visionicx.com/',
      },
    ],
    featured: true,
  },
  {
    title: 'BuzNotes – Productivity & Finance Planner',
    shortTitle: 'BuzNotes',
    description:
      'A secure Web and PWA productivity workspace combining notes, habits, tasks, notifications, time tracking, and personal finance management.',
    icon: <FaTasks />,
    category: 'PWA',
    company: 'VisionariesAI Labs Pvt Ltd',
    technologies: [
      'React + TypeScript',
      'Tailwind CSS',
      'Redux',
      'Django',
      'MongoDB',
      'PostgreSQL',
      'JWT',
      'Web Push API',
    ],
    features: [
      'Secure Google Login and JWT-based authentication',
      'Real-time web push notifications',
      'Daily notes, habits, tasks, and built-in stopwatch',
      'Income, expenditure, calculations, goals, and finance dashboards',
      'Dual-database architecture using MongoDB and PostgreSQL',
    ],
    links: [
      {
        label: 'Open BuzNotes',
        shortLabel: 'Website',
        type: 'website',
        url: 'https://biznotesapp.netlify.app/',
      },
    ],
    featured: true,
  },
  {
    title: 'Sri Sathya Sai Seva Samithi Website',
    shortTitle: 'Seva Samithi',
    description:
      'A responsive non-profit service organization website presenting education, healthcare, welfare, events, volunteering, donations, and community initiatives.',
    icon: <FaHandsHelping />,
    category: 'Website',
    company: 'Sri Sathya Sai Seva Samithi, Premsadan',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'TanStack Router',
      'Formik',
      'AWS S3',
    ],
    features: [
      'Responsive pages for education, healthcare, welfare, and events',
      'Gallery, volunteering, donation, and contact experiences',
      'Reusable React components and responsive Tailwind styling',
      'Smooth animations and route transitions using Framer Motion',
      'Validated contact and volunteer forms using Formik',
      'Production deployment through AWS S3 static hosting',
    ],
    links: [
      {
        label: 'Visit Organization Website',
        shortLabel: 'Website',
        type: 'website',
        url: 'http://ssssovizag.s3-website.ap-south-1.amazonaws.com/',
      },
    ],
    featured: true,
  },
  {
    title: 'FashionFi – E-commerce',
    shortTitle: 'FashionFi',
    description:
      'A modern online fashion store with a streamlined shopping experience, product discovery, customer features, and secure checkout workflows.',
    icon: <FaTshirt />,
    category: 'Web App',
    technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    features: ['Product catalog', 'Secure payments', 'User reviews', 'Wishlist'],
    links: [
      {
        label: 'Visit FashionFi',
        shortLabel: 'Website',
        type: 'website',
        url: 'https://fashonfi.netlify.app/',
      },
    ],
  },
  {
    title: 'AB Products – Online Supermarket',
    shortTitle: 'AB Products',
    description:
      'A full-featured online supermarket for browsing products, managing carts, placing orders, and coordinating inventory and delivery operations.',
    icon: <FaShoppingCart />,
    category: 'Web App',
    technologies: ['React', 'Express', 'PostgreSQL', 'JWT'],
    features: ['Inventory management', 'Order tracking', 'Delivery system', 'Admin panel'],
    links: [
      {
        label: 'Visit AB Products',
        shortLabel: 'Website',
        type: 'website',
        url: 'https://abproducts.netlify.app/',
      },
    ],
  },
  {
    title: 'ReachFlow – Marketing Tool',
    shortTitle: 'ReachFlow',
    description:
      'An email marketing application that helps businesses organize audiences, automate outreach, manage campaigns, and evaluate campaign performance.',
    icon: <FaEnvelope />,
    category: 'Web App',
    technologies: ['React', 'Node.js', 'Email APIs', 'Analytics'],
    features: ['Email campaigns', 'Customer segmentation', 'Analytics dashboard', 'Automation'],
    links: [
      {
        label: 'Visit ReachFlow',
        shortLabel: 'Website',
        type: 'website',
        url: 'https://reachflow.netlify.app/',
      },
    ],
  },
  {
    title: 'Cream Vault – Admin Panel',
    shortTitle: 'Cream Vault',
    description:
      'An operational admin dashboard for handling e-commerce orders, inventory, sales reporting, users, and essential business controls.',
    icon: <FaStore />,
    category: 'Web App',
    technologies: ['React', 'Redux', 'Node.js', 'Charts'],
    features: ['Order management', 'Inventory control', 'Sales reports', 'User management'],
    links: [
      {
        label: 'Visit Cream Vault',
        shortLabel: 'Website',
        type: 'website',
        url: 'https://creamvault.netlify.app/',
      },
    ],
  },
];

const getLinkIcon = (type) => {
  if (type === 'playstore') return <FaGooglePlay />;
  if (type === 'appstore') return <FaApple />;
  return <FaGlobe />;
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = useMemo(
    () => ['All', ...new Set(PROJECTS.map((project) => project.category))],
    [],
  );

  const filteredProjects = useMemo(
    () =>
      filter === 'All'
        ? PROJECTS
        : PROJECTS.filter((project) => project.category === filter),
    [filter],
  );

  useEffect(() => {
    if (!selectedProject) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.08 }}
    >
      <div className="projects-bg" aria-hidden="true">
        <div className="proj-orb proj-orb-1" />
        <div className="proj-orb proj-orb-2" />
        {PARTICLES.map((particle, index) => (
          <span
            key={index}
            className="particle"
            style={{
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      <div className="projects-shell">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-kicker">Selected work</span>
          <h2>Projects & Digital Products</h2>
          <p className="projects-subtitle">
            Enterprise platforms, mobile applications, PWAs, and websites built to solve
            practical business and community needs.
          </p>

          <div className="project-summary" aria-label="Project summary">
            <span><strong>{PROJECTS.length}</strong> Projects</span>
            <span><strong>{categories.length - 1}</strong> Categories</span>
            <span><strong>Web + Mobile</strong> Platforms</span>
          </div>
        </motion.div>

        <div className="filter-buttons" role="group" aria-label="Filter projects">
          {categories.map((category) => (
            <motion.button
              key={category}
              type="button"
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              aria-pressed={filter === category}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div className="projects-container" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 36, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.96 }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(index * 0.04, 0.24),
                  ease: [0.22, 1, 0.36, 1],
                }}
                layout
              >
                <div className="project-card__top">
                  <div className="icon-container" aria-hidden="true">
                    {project.icon}
                  </div>

                  <div className="project-card__badges">
                    <span className="category">{project.category}</span>
                    {project.featured && (
                      <span className="featured-badge">
                        <FaBuilding /> Featured
                      </span>
                    )}
                  </div>
                </div>

                <div className="project-card__content">
                  <p className="project-code">{project.shortTitle}</p>
                  <h3>{project.title}</h3>
                  {project.company && (
                    <p className="company-name">{project.company}</p>
                  )}
                  <p className="project-description">{project.description}</p>
                </div>

                <div className="tech-mini-tags" aria-label="Technologies">
                  {project.technologies.slice(0, 4).map((technology) => (
                    <span key={technology} className="mini-tag">
                      {technology}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="mini-tag more">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="card-footer">
                  <motion.button
                    type="button"
                    className="details-btn"
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                  </motion.button>

                  <div className="quick-links">
                    {project.links.map((link) => (
                      <motion.a
                        key={`${project.title}-${link.type}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`project-link project-link--${link.type}`}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        aria-label={`${link.label} for ${project.title}`}
                      >
                        {getLinkIcon(link.type)}
                        <span>{link.shortLabel}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

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
              role="dialog"
              aria-modal="true"
              aria-labelledby="selected-project-title"
              initial={{ scale: 0.94, opacity: 0, y: 28 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 22 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
              >
                <FaTimes />
              </button>

              <div className="modal-header">
                <div className="modal-icon" aria-hidden="true">
                  {selectedProject.icon}
                </div>
                <div>
                  <span className="modal-category">{selectedProject.category}</span>
                  <h3 id="selected-project-title">{selectedProject.title}</h3>
                  {selectedProject.company && (
                    <p className="modal-company">
                      <FaBuilding /> {selectedProject.company}
                    </p>
                  )}
                </div>
              </div>

              <p className="modal-description">{selectedProject.description}</p>

              <div className="modal-grid">
                <section className="modal-section">
                  <h4>Technologies</h4>
                  <div className="tech-tags">
                    {selectedProject.technologies.map((technology) => (
                      <span key={technology} className="tech-tag">
                        {technology}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="modal-section">
                  <h4>Key Features</h4>
                  <ul>
                    {selectedProject.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </section>
              </div>

              <div className="modal-actions">
                {selectedProject.links.map((link) => (
                  <a
                    key={`${selectedProject.title}-${link.type}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`modal-link modal-link--${link.type}`}
                  >
                    {getLinkIcon(link.type)}
                    <span>{link.label}</span>
                    <FaExternalLinkAlt className="external-icon" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;