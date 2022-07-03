import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <header className="logo">
        <a href="#home">Jm</a>
      </header>
      <ul className="nav-links">
        <li className="links">
          <a href="#about">About</a>
        </li>
        <li className="links">
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
