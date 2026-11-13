import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
  FaChartLine,
  FaCheckCircle,
  FaCloud,
  FaCode,
  FaDatabase,
  FaGraduationCap,
  FaLaptopCode,
  FaMobileAlt,
  FaTools,
} from 'react-icons/fa';
import '../styles/about.scss';

const experienceData = [
  {
    role: 'Associate Software Developer',
    company: 'VisionariesAI Labs',
    period: 'October 2024 – Present',
    status: 'Current Role',
    icon: <FaBriefcase />,
    summary:
      'Building scalable web and mobile products across frontend, backend, cloud, and application deployment workflows, including AI-powered exam preparation and EdTech platforms.',
    achievements: [
      'Architect responsive, scalable cross-platform interfaces using React.js, Next.js, TypeScript, and React Native.',
      'Develop robust backend services using Node.js and Django while managing MongoDB, PostgreSQL, and SQL data flows.',
      'Improve performance through lazy loading, code splitting, reusable component architecture, and render optimization.',
      'Collaborate with cross-functional Agile teams, conduct code reviews, and refactor production code for maintainability.',
      'Support mobile application releases and deployment workflows for Google Play Store and Apple App Store.',
      'Engineered and launched Bodhitha (bodhitha.com), an AI-powered competitive exam prep platform for GATE and Govt aspirants with Mock Tests, Roadmap Builder, Boss Battles, and AI Study Planner.',
    ],
    technologies: [
      'React.js',
      'Next.js',
      'TypeScript',
      'React Native',
      'Redux Toolkit',
      'Node.js',
      'Django',
      'MongoDB',
      'PostgreSQL',
      'AWS',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'VisionariesAI Labs',
    period: 'March 2024 – September 2024',
    icon: <FaLaptopCode />,
    summary:
      'Delivered high-performance web interfaces and migrated legacy JavaScript applications to scalable React and TypeScript architectures.',
    achievements: [
      'Developed reusable UI components using React 18, TypeScript, Tailwind CSS, SASS, and component-driven architecture.',
      'Engineered analytics dashboards and improved UI rendering performance by approximately 30%.',
      'Streamlined complex application data flow using Redux Toolkit and predictable state-management patterns.',
      'Integrated REST APIs with loading, validation, empty-state, and error-handling workflows.',
      'Used Jest and React Testing Library to build reliable frontend tests and improve test coverage.',
    ],
    technologies: [
      'React 18',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'SASS',
      'REST APIs',
      'Jest',
      'React Testing Library',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'CareerPedia',
    period: 'November 2023 – March 2024',
    icon: <FaCode />,
    summary:
      'Created responsive and interactive frontend experiences while working closely with designers and Agile development teams.',
    achievements: [
      'Built responsive user interfaces using React.js and reusable component-based development.',
      'Translated Figma wireframes into accurate, cross-browser-compatible application screens.',
      'Collaborated with UI/UX designers to refine usability, layout consistency, and responsive behavior.',
      'Participated in daily stand-ups, sprint planning, reviews, and iterative feature delivery.',
    ],
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Figma', 'Git', 'Agile'],
  },
  {
    role: 'Web Developer Intern',
    company: 'Miracle Software Systems',
    period: 'April 2022 – June 2022',
    icon: <FaGraduationCap />,
    summary:
      'Gained practical experience across the software development lifecycle, from requirement understanding to frontend implementation.',
    achievements: [
      'Assisted with requirement gathering, rapid prototyping, development, testing, and deployment activities.',
      'Created responsive interface components using HTML5, CSS3, and JavaScript.',
      'Supported UI implementation, debugging, and browser compatibility improvements.',
      'Learned structured development practices within a professional software environment.',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'SDLC'],
  },
];

const skillGroups = [
  {
    title: 'Frontend',
    icon: <FaCode />,
    skills: ['React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'SASS'],
  },
  {
    title: 'Backend & Data',
    icon: <FaDatabase />,
    skills: ['Node.js', 'Express.js', 'Django', 'MongoDB', 'PostgreSQL', 'SQL'],
  },
  {
    title: 'Mobile',
    icon: <FaMobileAlt />,
    skills: ['React Native', 'Expo', 'NativeWind', 'Play Store', 'App Store'],
  },
  {
    title: 'Cloud & Tools',
    icon: <FaCloud />,
    skills: ['AWS EC2', 'AWS S3', 'Git', 'GitHub', 'GitLab', 'Postman', 'CI/CD'],
  },
  {
    title: 'Testing',
    icon: <FaCheckCircle />,
    skills: ['Jest', 'React Testing Library', 'API Testing', 'UI Validation'],
  },
  {
    title: 'Development',
    icon: <FaTools />,
    skills: ['Agile', 'Code Reviews', 'Performance', 'Responsive UI', 'REST APIs'],
  },
];

const metrics = [
  { value: '3+', label: 'Years of Experience' },
  { value: '30%', label: 'UI Performance Gain' },
  { value: '80%', label: 'Frontend Test Coverage' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__background" aria-hidden="true">
        <span className="about__orb about__orb--one" />
        <span className="about__orb about__orb--two" />
        <span className="about__grid" />
      </div>

      <div className="about__container">
        <motion.header
          className="about__heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about__eyebrow">
            <FaBriefcase />
            Career Profile
          </span>
          <h2>Professional Experience</h2>
          <p>
            A focused overview of my experience, technical strengths, and progression
            as a web and mobile application developer.
          </p>
        </motion.header>

        <motion.div
          className="career-overview"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.article className="career-overview__summary" variants={itemVariants}>
            <div className="career-overview__icon">
              <FaChartLine />
            </div>

            <div>
              <span className="career-overview__label">Professional Summary</span>
              <h3>Building scalable digital products with measurable impact.</h3>
              <p>
                Result-oriented Associate Software Developer with 3+ years of experience building scalable web and mobile applications. Strong in the MERN stack, React Native, TypeScript, Redux Toolkit, Django, and SQL-based systems. Delivered impactful products including an AI-powered exam prep platform (Bodhitha), EdTech LMS, and enterprise ERP systems. Experienced in translating business requirements into maintainable technical solutions within Agile environments.
              </p>
            </div>
          </motion.article>

          <motion.div className="career-overview__metrics" variants={containerVariants}>
            {metrics.map((metric) => (
              <motion.div
                className="metric-card"
                key={metric.label}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.section
          className="skills-panel"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="content-heading" variants={itemVariants}>
            <span>Technical Expertise</span>
            <h3>Core skills and development capabilities</h3>
          </motion.div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <motion.article
                className="skill-group"
                key={group.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="skill-group__header">
                  <span>{group.icon}</span>
                  <h4>{group.title}</h4>
                </div>

                <div className="skill-group__tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <section className="experience-section">
          <motion.div
            className="content-heading content-heading--timeline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span>Career Journey</span>
            <h3>Professional timeline</h3>
          </motion.div>

          <div className="experience-timeline">
            {experienceData.map((experience, index) => (
              <motion.article
                className="timeline-item"
                key={`${experience.company}-${experience.role}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -36 : 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(index * 0.08, 0.24),
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="timeline-item__marker">
                  <span>{experience.icon}</span>
                </div>

                <div className="timeline-card">
                  <div className="timeline-card__top">
                    <div className="timeline-card__identity">
                      <div className="timeline-card__company-icon">
                        <FaBuilding />
                      </div>

                      <div>
                        <div className="timeline-card__title-row">
                          <h4>{experience.role}</h4>
                          {experience.status && (
                            <span className="timeline-card__status">
                              {experience.status}
                            </span>
                          )}
                        </div>
                        <p className="timeline-card__company">{experience.company}</p>
                      </div>
                    </div>

                    <span className="timeline-card__period">
                      <FaCalendarAlt />
                      {experience.period}
                    </span>
                  </div>

                  <p className="timeline-card__summary">{experience.summary}</p>

                  <div className="timeline-card__content">
                    <h5>Key Contributions</h5>
                    <ul>
                      {experience.achievements.map((achievement) => (
                        <li key={achievement}>
                          <FaCheckCircle />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="timeline-card__technologies">
                    {experience.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;