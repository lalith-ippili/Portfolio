import React from 'react';
import { motion } from 'framer-motion';
import { FaSchool, FaHotel, FaRobot, FaBolt, FaStore, FaCar, FaIceCream } from 'react-icons/fa';
import '../styles/about.scss';

const About = () => {
  const projects = [
    {
      title: 'School Management System (SMS)',
      description:
        'The School Management System (SMS) streamlines administrative and academic processes within educational institutions.',
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
        'Built using HTML5, SASS, JavaScript, React.js, Redux, Recharts, Formik, Django, and SQL.',
      ],
      icon: <FaSchool />,
    },
    {
      title: 'Hostel Management System (HMS)',
      description:
        'The Hostel Management System (HMS) is a robust solution designed to efficiently manage hostel operations and enhance the living experience for tenants.',
      points: [
        'Analytics Dashboard for insightful data visualization.',
        'Inventory Management for tracking and maintaining supplies.',
        'Payment module for handling financial transactions seamlessly.',
        'Management of room allocations, tenant records, and visitor logs.',
        'Home Dashboard providing an overview of key metrics and operations.',
        'Built using HTML5, CSS, JavaScript, React.js, Django, SQL, Fetch, Formik, and Recharts.',
      ],
      icon: <FaHotel />,
    },
    {
      title: 'AI Monitoring',
      description: 'An AI-powered monitoring solution for CCTV cameras, capable of detecting specific actions such as fighting, fire, talking, and more.',
      points: [
        'Real-time action detection such as fighting, fire, or talking from CCTV footage.',
        'Analytics Dashboard for visualizing detected actions and event trends.',
        'Notification system for sending real-time alerts on critical events.',
        'Stream management for handling and monitoring multiple CCTV feeds.',
        'Event logging and storage using an SQL database for historical analysis.',
        'Interactive forms for configuration and feedback using Formik.',
        'Built using HTML5, Tailwind CSS, JavaScript, React.js, Django, SQL, and Recharts.',
      ],
      icon: <FaRobot />,
    },
    {
      title: 'Energy Monitoring',
      description: 'A project that analyzes energy consumption room-wise, automatically controls power, and sets alarms for critical conditions.',
      points: [
        'Room-wise energy consumption tracking.',
        'Automatic power on/off based on usage patterns.',
        'Alarm system for unusual energy spikes or faults.',
        'Analytics dashboard with visual charts.',
        'Interactive control panel for manual adjustments.',
        'Historical data logging for usage trends.',
        'Built using HTML, TypeScript, React Native, NativeWind, Formik, Charts, and Djongo.',
      ],
      icon: <FaBolt />,
    },
    {
      title: 'Rajasab',
      description: 'An e-commerce website for clothes where users can visit the store directly after ordering. It includes dashboards for users, tailors, and admin with various features.',
      points: [
        'Order tracking and management.',
        'Dashboards for customers, tailors, and admin.',
        'Payment system integration.',
        'Downloadable invoices, PDFs, and Excel sheets.',
        'Built using HTML, Tailwind CSS, React.js, Formik, Redux, Node.js, and PostgreSQL.',
      ],
      icon: <FaStore />,
    },
    {
      title: 'Sparekart Car',
      description: 'An e-commerce platform for car parts with various features.',
      points: [
        'Home and feature pages for product listings.',
        'Wishlist functionality for saving favorite items.',
        'Order details and tracking.',
        'Recommended products section.',
        'Secure checkout and payment integration.',
        'Built using HTML, Tailwind CSS, TypeScript, Next.js, Formik, Axios, Node.js, and SQL.',
      ],
      icon: <FaCar />,
    },
    {
      title: 'Cream Vault',
      description: 'A fully-featured e-commerce mobile app for iOS and Android.',
      points: [
        'Home and feature pages for product discovery.',
        'Wishlist and order tracking functionalities.',
        'Scheduled orders and real-time payment processing.',
        'Order history and dashboard for users.',
        'Maps integration for delivery tracking.',
        'Analytics dashboard for business insights.',
        'Built using HTML, NativeWind, React Native, Formik, Redux, Node.js, and MongoDB.',
      ],
      icon: <FaIceCream />,
    },
  ];

  return (
    <section id="about" className="about">
      <h2 className="section-title">Experience</h2>
      <div className="experience">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="card"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 250,
              damping: 25,
              delay: index * 0.2,
            }}
          >
            <div className="card-background-shape"></div>
            <div className="card-header">
              <div className="icon-container">{project.icon}</div>
              <h3>{project.title}</h3>
            </div>
            <div className="card-body">
              <p>{project.description}</p>
              <ul>
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
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
