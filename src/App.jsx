import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './styles/main.scss';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import DarkModeToggle from './components/DarkModeToggle';
import BackToTop from './components/BackToTop';

const App = () => {
  return (
    <div className="App">
      <DarkModeToggle />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default App;