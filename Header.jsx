import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          This is a <span>Programming</span> Learning Platform{" "}
        </h1>
        <p className="details">
          Learning programming languages cannot get simpler than this!
        </p>
        <div className="header-btns">
          <a href="#" className="cv-btn">
            Apply
          </a>
          <a href="#" className="cv-btn1">
            Download App
          </a>
        </div>
      </div>
      <div className="arrow"></div>
    </div>
  );
}

export default Header;
