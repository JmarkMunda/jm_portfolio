import React from 'react'
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar'
import Projects from './pages/Projects/Projects';
import Tabs from './components/Tabs/Tabs';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Tabs />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
