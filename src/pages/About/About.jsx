import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./About.css";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="about-section container">
        {/* <h2 className="about-header">ABOUT ME</h2> */}
        <article className="about-text-container">
          <h2>Hi there!</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            saepe modi fugit omnis maiores exercitationem ad asperiores minus!
            Nihil sapiente placeat quibusdam dolor molestiae!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            saepe modi fugit omnis maiores exercitationem ad asperiores minus!
            Nihil sapiente placeat quibusdam dolor molestiae!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            saepe modi fugit omnis maiores exercitationem ad asperiores minus!
            Nihil sapiente placeat quibusdam dolor molestiae!
          </p>
        </article>
      </section>
    </>
  );
};

export default About;
