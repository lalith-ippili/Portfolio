import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Footer from './components/Footer';
import './styles/main.scss';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;