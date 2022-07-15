import React from "react";
import "./Home.css";
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
  return (
    <section id="home">
      <div className="container">
        {/* ---------- TEXT --------------- */}
        <div className="home-text">
          <h3>I'm Jm</h3>
          <h1>Front-end Developer</h1>
        </div>
        {/* --------- ARROW BUTTON ------------*/}
        <div className="arrow-btn">
          <button>
            <a href="#about">
              <IoIosArrowDown />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
