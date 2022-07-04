import React from 'react'
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  );
}

export default App;
