import React from "react";
import "./Contact.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { RiInstagramFill } from "react-icons/ri";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact</h2>
          <div className="header-line"></div>
        </div>
        <div className="contact-content">
          <div>
            <h3>Jay Mark Munda</h3>
            <h4>Web Developer</h4>
            <p>I'm currently waiting for you to drop me a line.</p>
            <p>So, in advance thank you for making me feel special! :)</p>
          </div>
          <article>
            <p>Message me directly on:</p>
            <div>
              <a href="mailto:jaymarkmunda26@gmail.com">
                <span>
                  <HiOutlineMail />
                </span>{" "}
                jaymarkmunda26@gmail.com
              </a>
              <p>
                <span>
                  <HiOutlinePhone />
                </span>{" "}
                +639560561453
              </p>
            </div>
            <div className="contact-icons">
              <button>
                <a
                  href="https://www.facebook.com/jaymark.munda.26/"
                  target="_blank">
                  <FaFacebookF />
                </a>
              </button>
              <button>
                <a
                  href="https://www.instagram.com/jmbaturiano/"
                  target="_blank">
                  <RiInstagramFill />
                </a>
              </button>
              <button>
                <a href="https://twitter.com/Jmhtdg" target="_blank">
                  <FaTwitter />
                </a>
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
