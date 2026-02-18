import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import '../styles/testimonials.scss';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      position: 'CEO, TechCorp',
      message: 'Lalith delivered exceptional work on our project. Highly recommended!',
      avatar: 'https://via.placeholder.com/100',
    },
    {
      name: 'Jane Smith',
      position: 'Designer, CreativeCo',
      message: 'Amazing collaboration and top-notch skills in web development.',
      avatar: 'https://via.placeholder.com/100',
    },
    {
      name: 'Mike Johnson',
      position: 'Founder, StartupXYZ',
      message: 'Professional, efficient, and creative. Will work with again.',
      avatar: 'https://via.placeholder.com/100',
    },
  ];

  return (
    <motion.section 
      id="testimonials" 
      className="testimonials"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2>What Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index} 
            className="testimonial-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <FaQuoteLeft className="quote-icon" />
            <p>{testimonial.message}</p>
            <div className="client-info">
              <img src={testimonial.avatar} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <span>{testimonial.position}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;