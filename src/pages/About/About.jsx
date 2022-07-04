import React from "react";
import "./About.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { messages } from "../../personal-data";
import profileImg from "../../assets/user-profile.svg";

const About = () => {
  return (
    <section id="about" className="container">
      {/* <h2 className="about-header">ABOUT ME</h2> */}
      <article className="about-container text">
        <h2>Hi there!</h2>
        {messages.map((message) => {
          const { id, text } = message;
          return <p key={id}>{text}</p>;
        })}
        <button className="btn">Grab Resume</button>
      </article>
      <div className="about-container photo">
        <img src={profileImg} alt="photo" />
        {/* <div className="underline" /> */}
        <div className="social-icons">
          <button>
            <a href="mailto:jaymakmunda26@gmail.com">
              <HiOutlineMail />
            </a>
          </button>
          <button>
            <a href="https://www.linkedin.com/in/jay-mark-munda-18a208233/">
              <FaLinkedin />
            </a>
          </button>
          <button>
            <a href="https://github.com/JmarkMunda">
              <FaGithub />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
