import React from "react";
import "./Navbar.css";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false);

  const linksContainerRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsNavActive(true);
      } else {
        setIsNavActive(false);
      }
    });
  }, []);

  useEffect(() => {
    const linksHeight = linkRef.current.getBoundingClientRect().height;

    if (toggleMenu) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [toggleMenu]);

  return (
    <nav className={isNavActive ? "nav-active" : ""}>
      <div className="nav-header">
        <header className="logo">
          <a href="#home">Jm</a>
        </header>
        <button className="menu-btn" onClick={() => setToggleMenu(!toggleMenu)}>
          <FiMenu />
        </button>
      </div>
      {/* links */}
      <div className="nav-links" ref={linksContainerRef}>
        <ul ref={linkRef}>
          <li className="links" onClick={() => setToggleMenu(false)}>
            <a href="#about">About</a>
          </li>
          <li className="links" onClick={() => setToggleMenu(false)}>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
