import React from "react";
import "./Home.css";
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
  return (
    <section id="home" className="container">
      <div className="home-text">
        <h3>I'm Jm</h3>
        <h1>Front-end Developer</h1>
      </div>
      <div className="arrow-btn">
        <button>
          <a href="#about">
            <IoIosArrowDown />
          </a>
        </button>
      </div>
    </section>
  );
};

export default Home;
