import React from "react";
import "./About.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { messages } from "../../personal-data";
import profileImg from "../../assets/user-profile.svg";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <article className="about-container">
          {/* ------------- TEXT ----------------- */}
          <div className="text-container">
            <h2>Hi there!</h2>
            {messages.map((message) => {
              const { id, text } = message;
              return <p key={id}>{text}</p>;
            })}
            <button className="btn">Grab Resume</button>
          </div>
          <div className="image-container">
            <img src={profileImg} alt="photo" />
            <div className="social-icons">
              <button>
                <a href="mailto:jaymakmunda26@gmail.com">
                  <HiOutlineMail />
                </a>
              </button>
              <button>
                <a
                  href="https://www.linkedin.com/in/jay-mark-munda-18a208233/"
                  target="_blank">
                  <FaLinkedin />
                </a>
              </button>
              <button>
                <a href="https://github.com/JmarkMunda" target="_blank">
                  <FaGithub />
                </a>
              </button>
            </div>
          </div>
        </article>
        <div className="skills-container">
          <img
            src="https://img.icons8.com/ios/50/000000/html-5--v2.png"
            alt="html"
          />
          <img src="https://img.icons8.com/ios/50/000000/css3.png" alt="css" />
          <img
            src="https://img.icons8.com/ios/50/000000/javascript--v1.png"
            alt="js"
          />
          <img
            src="https://img.icons8.com/ios/50/000000/react-native--v1.png"
            alt="reactjs"
          />
          <img
            src="https://img.icons8.com/windows/64/000000/node-js.png"
            alt="nodejs"
          />
          <img src="/tailwind.png" alt="tailwind" />
          <img
            src="https://img.icons8.com/material-outlined/48/000000/sass.png"
            alt="sass"
          />
          <img src="https://img.icons8.com/ios/50/000000/git.png" alt="git" />
          <img src="/firebase.png" alt="firebase" />
        </div>
      </div>
    </section>
  );
};

export default About;
