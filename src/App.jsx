import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Footer from './components/Footer';
import './styles/main.scss';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Contact/>
      <Footer />
     
    </div>
  );
};

export default App;