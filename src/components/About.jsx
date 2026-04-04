import React from 'react';
import { motion } from 'framer-motion';
import {
  FaSchool, FaHotel, FaRobot, FaBolt, FaStore, FaCar, FaIceCream,
  FaGraduationCap, FaBuilding
} from 'react-icons/fa';
import '../styles/about.scss';

const About = () => {
  const experiences = [
    {
      title: 'Learning Management System (LMS) – Web & PWA',
      company: 'Associated with VisionariesAI Labs Pvt Ltd',
      description: 'Developed a high-performance Progressive Web App (PWA) with offline support and mobile-first design for seamless learning across all devices.',
      points: [
        'Built PWA with offline support and mobile-first design ensuring seamless cross-device learning.',
        'Integrated Code IDE and Web Compiler for hands-on, interactive technical education.',
        'Designed collaborative MS Paint-style whiteboard for real-time visual learning.',
        'Implemented analytics dashboard tracking course completion, topic engagement, video analytics, and quiz performance.',
        'Engineered Excel-like spreadsheet module, multi-language content translator, and automated certificate generation.',
        'Implemented Role-Based Access Control (RBAC) for Super Admins, Instructors, and Students.',
        'Optimized state management using Redux Toolkit for scalable, maintainable architecture.',
        'Stack: React.js, Tailwind CSS, Redux Toolkit, Framer Motion, Formik, Django, SQL.',
      ],
      icon: <FaGraduationCap />,
      accentColor: '#5b42f3',
      featured: true,
    },
    {
      title: 'School Management System (SMS)',
      company: 'VisionariesAI Labs Pvt Ltd',
      description: 'Streamlines administrative and academic processes within educational institutions.',
      points: [
        'Class Management for organizing schedules.',
        'Teacher Management for maintaining profiles.',
        'Student Dashboards for accessing academic records.',
        'Fees Management module for automating fee collection.',
        'Driver Management to oversee bus routes.',
        'Hostel Management for handling accommodations.',
        'Library Management for resources and borrowings.',
        'Examination Management to schedule exams and process results.',
        'Attendance Management for tracking daily attendance.',
        'Parent Portal for monitoring child performance.',
        'Stack: HTML5, SASS, JavaScript, React.js, Redux, Recharts, Formik, Django, SQL.',
      ],
      icon: <FaSchool />,
      accentColor: '#00ddeb',
    },
    {
      title: 'Hostel Management System (HMS)',
      description: 'Robust solution for managing hostel operations and enhancing tenant living experience.',
      points: [
        'Analytics Dashboard for insightful data visualization.',
        'Inventory Management for tracking and maintaining supplies.',
        'Payment module for handling financial transactions seamlessly.',
        'Room allocations, tenant records, and visitor logs management.',
        'Home Dashboard providing an overview of key metrics and operations.',
        'Stack: HTML5, CSS, JavaScript, React.js, Django, SQL, Fetch, Formik, Recharts.',
      ],
      icon: <FaHotel />,
      accentColor: '#ff3696',
    },
    {
      title: 'AI Monitoring System',
      description: 'AI-powered CCTV monitoring solution detecting specific actions like fighting, fire, talking.',
      points: [
        'Real-time action detection (fighting, fire, talking) from CCTV footage.',
        'Analytics Dashboard for visualizing detected actions and event trends.',
        'Notification system for real-time alerts on critical events.',
        'Stream management for multiple CCTV feeds.',
        'SQL event logging for historical analysis.',
        'Stack: HTML5, Tailwind CSS, JavaScript, React.js, Django, SQL, Recharts.',
      ],
      icon: <FaRobot />,
      accentColor: '#ff6b35',
    },
    {
      title: 'Energy Monitoring System',
      description: 'Analyzes energy consumption room-wise, automatically controls power, sets alarms for critical conditions.',
      points: [
        'Room-wise energy consumption tracking.',
        'Automatic power on/off based on usage patterns.',
        'Alarm system for unusual energy spikes or faults.',
        'Analytics dashboard with visual charts.',
        'Interactive control panel for manual adjustments.',
        'Stack: HTML, TypeScript, React Native, NativeWind, Formik, Charts, Djongo.',
      ],
      icon: <FaBolt />,
      accentColor: '#f7df1e',
    },
    {
      title: 'Rajasab – Clothing E-commerce',
      description: 'E-commerce website for clothes where users can visit the store directly after ordering.',
      points: [
        'Order tracking and management.',
        'Dashboards for customers, tailors, and admin.',
        'Payment system integration.',
        'Downloadable invoices, PDFs, and Excel sheets.',
        'Stack: HTML, Tailwind CSS, React.js, Formik, Redux, Node.js, PostgreSQL.',
      ],
      icon: <FaStore />,
      accentColor: '#44b78b',
    },
    {
      title: 'Sparekart – Car Parts E-commerce',
      description: 'E-commerce platform for car parts with comprehensive features.',
      points: [
        'Home and feature pages for product listings.',
        'Wishlist functionality for saving favorite items.',
        'Order details and tracking.',
        'Recommended products section.',
        'Stack: HTML, Tailwind CSS, TypeScript, Next.js, Formik, Axios, Node.js, SQL.',
      ],
      icon: <FaCar />,
      accentColor: '#e34c26',
    },
    {
      title: 'Cream Vault – Mobile E-commerce',
      description: 'Fully-featured e-commerce mobile app for iOS and Android.',
      points: [
        'Home and feature pages for product discovery.',
        'Wishlist and order tracking functionalities.',
        'Scheduled orders and real-time payment processing.',
        'Maps integration for delivery tracking.',
        'Analytics dashboard for business insights.',
        'Stack: HTML, NativeWind, React Native, Formik, Redux, Node.js, MongoDB.',
      ],
      icon: <FaIceCream />,
      accentColor: '#ff3696',
    },
  ];

  return (
    <section id="about" className="about">
      {/* Background */}
      <div className="about-bg">
        <div className="about-orb about-orb-1" />
        <div className="about-orb about-orb-2" />
      </div>

      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">My journey in software development</p>

      <div className="experience">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`card ${exp.featured ? 'card-featured' : ''}`}
            style={{ '--accent': exp.accentColor }}
            whileHover={{ scale: 1.04, y: -10, rotateX: 4, rotateY: -4, z: 20 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
              delay: index * 0.1,
            }}
          >
            {exp.featured && (
              <div className="featured-ribbon">
                <FaBuilding /> VisionariesAI Labs Pvt Ltd
              </div>
            )}
            <div className="card-background-shape" />
            <div className="card-header">
              <div className="icon-container" style={{ background: `linear-gradient(135deg, ${exp.accentColor}, rgba(0,0,0,0.2))` }}>
                {exp.icon}
              </div>
              <div className="header-text">
                <h3>{exp.title}</h3>
                {exp.company && <p className="company-name">{exp.company}</p>}
              </div>
            </div>
            <div className="card-body">
              <p>{exp.description}</p>
              <ul>
                {exp.points.map((point, i) => (
                  <li key={i} style={{ '--dot-color': exp.accentColor }}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
