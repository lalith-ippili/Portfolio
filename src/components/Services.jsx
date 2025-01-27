import React from 'react';
import '../styles/services.scss';

const Services = () => {
  const services = [
    {
      title: 'Portfolio Websites',
      description: 'Custom, beautifully designed websites to showcase your work.',
      icon: 'https://img.icons8.com/color/96/portfolio.png',
    },
    {
      title: 'Corporate Websites',
      description: 'Professional and reliable websites tailored for businesses.',
      icon: 'https://img.icons8.com/color/96/company.png',  // Updated icon for Corporate Websites
    },
    {
      title: 'E-Learning Platforms',
      description: 'Interactive platforms to host courses and learning materials.',
      icon: 'https://i.pinimg.com/736x/15/66/b3/1566b3521d6e26c5eb7758122b4a68ed.jpg',  // Updated icon for E-Learning Platforms
    },
    {
      title: 'E-Commerce Apps',
      description: 'Mobile-first apps with secure payment gateways.',
      icon: 'https://img.icons8.com/color/96/online-store.png',
    },
    {
      title: 'Social Networking Apps',
      description: 'Connect people with scalable and modern social apps.',
      icon: 'https://img.icons8.com/color/96/network.png',
    },
    {
      title: 'Food Delivery Apps',
      description: 'On-demand food delivery apps with real-time tracking.',
      icon: 'https://img.icons8.com/color/96/delivery.png',
    },
  ];

  return (
    <section id="services" className="services">
      <div className='gradient-text'>
        <h1>Services</h1>
        <p> Websites & Apps</p>

      </div>
      <div className="service-content">
        {services.map((service, index) => (
          <div key={index} className={`service-card gradient-card-${index % 2}`}>
            {/* Ensure the image is rendered with proper size */}
            <img
              src={service.icon}
              alt={service.title}
              className="service-icon"
              style={{ width: '96px', height: '96px', objectFit: 'contain', margin: '0 auto' }}
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;