import React from "react";
import Box from "./Box";
import image1 from "../images/s1.jpg";
import image2 from "../images/s2.png";

function Services() {
  return (
    <div id="services">
      <div className="s-heading">
        <h1>Services</h1>
        <p>Here are some features of our learning app</p>
      </div>
      <div className="b-container">
        <Box image={image1} alte="image1" button="PYTHON" />
        <Box image={image2} alte="image2" button="JAVA" />
      </div>
    </div>
  );
}

export default Services;
