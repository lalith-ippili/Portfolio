import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import Popup from '../components/Popup';
import { FaSquareGitlab } from "react-icons/fa6";
import '../styles/Contact.scss';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaUser,
  FaBuilding,
  FaComment,
} from 'react-icons/fa';



const Contact = () => {

  const [popup, setPopup] = useState({ show: false, message: "", type: "" });
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      company: '',
      Message: '',
    },


    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      phone: Yup.string()
        .matches(/^\d{10}$/, 'Phone number must be 10 digits')
        .required('Phone is required'),
      company: Yup.string().required('Company name is required'),
      Message: Yup.string().required('Message is required'),
    }),


    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          "service_ofwffi5", // Replace with your service ID
          "template_q4g6kvk", // Replace with your template ID
          values,
          "lB3dt3SprkbkFzwzY" // Replace with your user ID
        )
        .then(
          () => {
            setPopup({
              show: true,
              message: "Message sent successfully!",
              type: "success",
            });
            resetForm();
          },
          () => {
            setPopup({
              show: true,
              message: "Failed to send message. Please try again later.",
              type: "error",
            });
          }
        );
    },
  });

  return (
    <section id="Contact" className="contact">
      <div className="moving-background"></div>
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">We’d love to hear from you!</p>

        {/* Contact Info Cards */}
        <div className="contact-info">
          <div className="contact-card card-1">
            <div className="contact-icon">
              <FaEnvelope className="icon" />
            </div>
            <h3>Email Us</h3>
            <p>ippililalith@gmail.com</p>
          </div>

          <div className="contact-card card-2">
            <div className="contact-icon">
              <FaPhone className="icon" />
            </div>
            <h3>Call Us</h3>
            <p>9573773418</p>
          </div>

          <div className="contact-card card-3">
            <div className="contact-icon">
              <FaMapMarkerAlt className="icon" />
            </div>
            <h3>Visit Us</h3>
            <p>Srikakulam , Andhara Pradesh</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={formik.handleSubmit} className="contact-form">
          <div className="form-group">
            <div className="input-icon">
              <FaUser className="icon" />
            </div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="form-group">
            <div className="input-icon">
              <FaPhone className="icon" />
            </div>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="error">{formik.errors.phone}</div>
            ) : null}
          </div>

          <div className="form-group">
            <div className="input-icon">
              <FaBuilding className="icon" />
            </div>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.company}
            />
            {formik.touched.company && formik.errors.company ? (
              <div className="error">{formik.errors.company}</div>
            ) : null}
          </div>

          <div className="form-group">
            <div className="input-icon">
              <FaComment className="icon" />
            </div>
            <textarea
              name="Message"
              placeholder="Message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Message}
            />
            {formik.touched.Message && formik.errors.Message ? (
              <div className="error">{formik.errors.Message}</div>
            ) : null}
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>

        {/* Show Popup */}
        {popup.show && (
          <Popup
            message={popup.message}
            type={popup.type}
            onClose={() => setPopup({ ...popup, show: false })}
          />
        )}

        {/* Social Links */}
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/ippili-lalith-kumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a
            href="https://github.com/lalith-ippili"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub className="social-icon" />
          </a>

          <a
            href="https://gitlab.com/lalith-ippili"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaSquareGitlab className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
