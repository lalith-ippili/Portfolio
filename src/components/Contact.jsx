import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import Popup from '../components/Popup';
import { FaSquareGitlab } from 'react-icons/fa6';
import {
  FaArrowRight,
  FaBriefcase,
  FaBuilding,
  FaCheckCircle,
  FaComment,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
  FaUser,
} from 'react-icons/fa';
import '../styles/Contact.scss';

const contactDetails = [
  {
    label: 'Email',
    value: 'ippililalith@gmail.com',
    href: 'mailto:ippililalith@gmail.com',
    icon: <FaEnvelope />,
  },
  {
    label: 'Phone',
    value: '+91 95737 73418',
    href: 'tel:+919573773418',
    icon: <FaPhone />,
  },
  {
    label: 'Location',
    value: 'Visakhapatnam, Andhra Pradesh',
    href: 'https://www.google.com/maps/search/?api=1&query=Visakhapatnam%2C%20Andhra%20Pradesh',
    icon: <FaMapMarkerAlt />,
    external: true,
  },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ippili-lalith-kumar/',
    icon: <FaLinkedin />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/lalith-ippili',
    icon: <FaGithub />,
  },
  {
    label: 'GitLab',
    href: 'https://gitlab.com/lalith-ippili',
    icon: <FaSquareGitlab />,
  },
];

const fieldAnimation = {
  hidden: { opacity: 0, y: 18 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * index,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Contact = () => {
  const [popup, setPopup] = useState({
    show: false,
    message: '',
    type: '',
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      Message: '',
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .min(2, 'Please enter at least 2 characters')
        .required('Name is required'),
      email: Yup.string()
        .trim()
        .email('Enter a valid email address')
        .required('Email is required'),
      phone: Yup.string()
        .matches(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number')
        .required('Phone is required'),
      company: Yup.string()
        .trim()
        .required('Company name is required'),
      Message: Yup.string()
        .trim()
        .min(10, 'Please enter at least 10 characters')
        .required('Message is required'),
    }),

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        // These variable names must exactly match the variables
        // configured in the EmailJS template.
        const templateParams = {
          to_name: 'Lalith',
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          company: values.company.trim(),
          Message: values.Message.trim(),
        };

        const response = await emailjs.send(
          'service_wra7x15',
          'template_q4g6kvk',
          templateParams,
          'lB3dt3SprkbkFzwzY'
        );

        console.log('EmailJS success:', response.status, response.text);

        setPopup({
          show: true,
          message: 'Your message has been sent successfully.',
          type: 'success',
        });

        resetForm();
      } catch (error) {
        console.error('EmailJS error:', error);

        setPopup({
          show: true,
          message:
            error?.text ||
            error?.message ||
            'Message could not be sent. Please try again.',
          type: 'error',
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  const getFieldState = (fieldName) => {
    if (formik.touched[fieldName] && formik.errors[fieldName]) {
      return 'has-error';
    }

    if (
      formik.touched[fieldName] &&
      formik.values[fieldName] &&
      !formik.errors[fieldName]
    ) {
      return 'is-valid';
    }

    return '';
  };

  return (
    <motion.section
      id="Contact"
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.12 }}
    >
      <div className="contact__background" aria-hidden="true">
        <span className="contact__orb contact__orb--one" />
        <span className="contact__orb contact__orb--two" />
        <span className="contact__grid" />
      </div>

      <div className="contact__container">
        <motion.header
          className="contact__heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <span className="contact__eyebrow">
            <FaComment />
            Contact Me
          </span>

          <h2>Let&apos;s build something meaningful.</h2>

          <p>
            Have a project, job opportunity, or collaboration in mind? Share the
            details and I&apos;ll get back to you as soon as possible.
          </p>
        </motion.header>

        <div className="contact-layout">
          <motion.aside
            className="contact-panel"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="contact-panel__top">
              <div className="contact-panel__icon">
                <FaBriefcase />
              </div>

              <span className="contact-panel__status">
                <span />
                Available for opportunities
              </span>

              <h3>Start a conversation</h3>

              <p>
                I&apos;m open to full-time roles, product development, freelance
                projects, and technical collaborations.
              </p>
            </div>

            <div className="contact-details">
              {contactDetails.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="contact-detail"
                  target={detail.external ? '_blank' : undefined}
                  rel={detail.external ? 'noopener noreferrer' : undefined}
                >
                  <span className="contact-detail__icon">{detail.icon}</span>

                  <span className="contact-detail__content">
                    <small>{detail.label}</small>
                    <strong>{detail.value}</strong>
                  </span>

                  <FaArrowRight className="contact-detail__arrow" />
                </a>
              ))}
            </div>

            <div className="contact-panel__footer">
              <span>Connect with me</span>

              <div className="social-links">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                    title={social.label}
                    whileHover={{ y: -4, scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.aside>

          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="contact-form-card__header">
              <span>Send a message</span>
              <h3>Tell me about your requirement</h3>
              <p>Complete the form below and I&apos;ll respond shortly.</p>
            </div>

            <form
              onSubmit={formik.handleSubmit}
              className="contact-form"
              noValidate
            >
              <div className="form-grid">
                <motion.div
                  className={`form-field ${getFieldState('name')}`}
                  custom={0}
                  variants={fieldAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label htmlFor="contact-name">Your name</label>

                  <div className="input-shell">
                    <FaUser className="field-icon" />

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      autoComplete="name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                      aria-invalid={
                        formik.touched.name && Boolean(formik.errors.name)
                      }
                    />

                    {getFieldState('name') === 'is-valid' && (
                      <FaCheckCircle className="valid-icon" />
                    )}
                  </div>

                  {formik.touched.name && formik.errors.name && (
                    <span className="field-error">{formik.errors.name}</span>
                  )}
                </motion.div>

                <motion.div
                  className={`form-field ${getFieldState('email')}`}
                  custom={1}
                  variants={fieldAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label htmlFor="contact-email">Email address</label>

                  <div className="input-shell">
                    <FaEnvelope className="field-icon" />

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      autoComplete="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      aria-invalid={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                    />

                    {getFieldState('email') === 'is-valid' && (
                      <FaCheckCircle className="valid-icon" />
                    )}
                  </div>

                  {formik.touched.email && formik.errors.email && (
                    <span className="field-error">{formik.errors.email}</span>
                  )}
                </motion.div>

                <motion.div
                  className={`form-field ${getFieldState('phone')}`}
                  custom={2}
                  variants={fieldAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label htmlFor="contact-phone">Phone number</label>

                  <div className="input-shell">
                    <FaPhone className="field-icon" />

                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      inputMode="numeric"
                      maxLength={10}
                      placeholder="Enter 10-digit mobile number"
                      autoComplete="tel"
                      onChange={(event) => {
                        const numericValue = event.target.value.replace(/\D/g, '');
                        formik.setFieldValue('phone', numericValue);
                      }}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                      aria-invalid={
                        formik.touched.phone && Boolean(formik.errors.phone)
                      }
                    />

                    {getFieldState('phone') === 'is-valid' && (
                      <FaCheckCircle className="valid-icon" />
                    )}
                  </div>

                  {formik.touched.phone && formik.errors.phone && (
                    <span className="field-error">{formik.errors.phone}</span>
                  )}
                </motion.div>

                <motion.div
                  className={`form-field ${getFieldState('company')}`}
                  custom={3}
                  variants={fieldAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label htmlFor="contact-company">Company name</label>

                  <div className="input-shell">
                    <FaBuilding className="field-icon" />

                    <input
                      id="contact-company"
                      type="text"
                      name="company"
                      placeholder="Enter company or organization"
                      autoComplete="organization"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.company}
                      aria-invalid={
                        formik.touched.company && Boolean(formik.errors.company)
                      }
                    />

                    {getFieldState('company') === 'is-valid' && (
                      <FaCheckCircle className="valid-icon" />
                    )}
                  </div>

                  {formik.touched.company && formik.errors.company && (
                    <span className="field-error">{formik.errors.company}</span>
                  )}
                </motion.div>
              </div>

              <motion.div
                className={`form-field form-field--message ${getFieldState(
                  'Message'
                )}`}
                custom={4}
                variants={fieldAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <label htmlFor="contact-message">Project or opportunity details</label>

                <div className="input-shell input-shell--textarea">
                  <FaComment className="field-icon" />

                  <textarea
                    id="contact-message"
                    name="Message"
                    placeholder="Describe your requirement, timeline, and expected outcome..."
                    rows={6}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Message}
                    aria-invalid={
                      formik.touched.Message && Boolean(formik.errors.Message)
                    }
                  />

                  {getFieldState('Message') === 'is-valid' && (
                    <FaCheckCircle className="valid-icon" />
                  )}
                </div>

                <div className="message-meta">
                  <span>
                    {formik.touched.Message && formik.errors.Message
                      ? formik.errors.Message
                      : 'Please include enough details for a useful response.'}
                  </span>
                  <span>{formik.values.Message.length} characters</span>
                </div>
              </motion.div>

              <motion.button
                type="submit"
                className="submit-button"
                disabled={formik.isSubmitting}
                whileHover={formik.isSubmitting ? undefined : { y: -3 }}
                whileTap={formik.isSubmitting ? undefined : { scale: 0.98 }}
              >
                <span>
                  {formik.isSubmitting ? 'Sending message...' : 'Send Message'}
                </span>
                <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {popup.show && (
        <Popup
          message={popup.message}
          type={popup.type}
          onClose={() =>
            setPopup((currentPopup) => ({
              ...currentPopup,
              show: false,
            }))
          }
        />
      )}
    </motion.section>
  );
};

export default Contact;