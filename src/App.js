import React from 'react'
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar'
import Projects from './pages/Projects/Projects';
import Tabs from './components/Tabs/Tabs';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Tabs />
      {/* <Projects /> */}
    </>
  );
}

export default App;
