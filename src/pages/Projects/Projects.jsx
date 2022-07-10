import React from "react";
import "./Projects.css";
import projectImg from "../../assets/code.png";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-container container">
        <div className="section-header">
          <h2>Projects</h2>
          <div className="header-line"></div>
        </div>
        <div className="project">
          <div className="project-image">
            <a href="https://jmovies-trailers.netlify.app/" target="_blank">
              <img src={projectImg} alt="project" />
            </a>
          </div>
          <div className="project-text">
            <div className="project-title">
              <p>jMovies</p>
              {/* Github icon */}
              <a href="https://github.com/JmarkMunda/jMovies" target="_blank">
                <span className="github-icon">
                  <BsGithub />
                </span>
                View Code
              </a>
            </div>
            <p className="project-description">
              This application provides you with information about different
              movies. You can browse movies by searching them manually or by
              going to the latest, trending, and upcoming movies section.
            </p>
            <div className="underline"></div>
            <div className="project-libraries">
              <ul>
                <li>React JS</li>
                <li>react-router</li>
                <li>react-youtube</li>
                <li>TMDB API</li>
                <li>Swiper JS</li>
                <li>Framer Motion</li>
                <li>Axios</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
