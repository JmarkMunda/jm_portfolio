import React from "react";
import "./About.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { messages } from "../../personal-data";
import profileImg from "../../assets/user-profile.svg";
import Tabs from "../../components/Tabs/Tabs";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <article className="about-container">
          {/* ------------- TEXT ----------------- */}
          <>
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
          </>
          {/* ------------- TABS ----------------- */}
          {/* <div className="container">
            <Tabs />
          </div> */}
        </article>
      </div>
    </section>
  );
};

export default About;
