import React from "react";
import "./Home.css";
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
  const moveDown = () => {
    window.scrollTo({
      top: 670,
    });
  };

  return (
    <section id="home" className="home-section container">
      <div className="home-text">
        <h3>I'm Jm</h3>
        <h1>Front-end Developer</h1>
      </div>
      <div className="arrow-btn">
        <button onClick={moveDown}>
          <IoIosArrowDown />
        </button>
      </div>
    </section>
  );
};

export default Home;
