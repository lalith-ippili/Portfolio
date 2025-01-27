import React from 'react';
import { motion } from 'framer-motion';
import { FaSchool, FaHotel, FaRobot } from 'react-icons/fa';
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
    }

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
            style={{
              background: project.gradient,
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
