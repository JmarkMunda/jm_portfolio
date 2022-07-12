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
          <img src={profileImg} alt="photo" />
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
        </article>
        <div className="skills-container">
          <img src="/html-5.png" alt="html" />
          <img src="/css-3.png" alt="css" />
          <img src="/js.png" alt="js" />
          <img src="/reactjs.png" alt="reactjs" />
          <img src="/nodejs.png" alt="nodejs" />
          <img src="/tailwind.png" alt="tailwind" />
          <img src="/sass.png" alt="sass" />
          <img src="/git.png" alt="git" />
          <img src="/firebase.png" alt="firebase" />
        </div>
      </div>
    </section>
  );
};

export default About;
