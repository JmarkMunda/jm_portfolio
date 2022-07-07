import React from 'react'
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar'
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      {/* <Projects /> */}
    </>
  );
}

export default App;
