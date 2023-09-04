import React from "react";
import featureimage from "../images/Frame 19.png";

function Features() {
  return (
    <div id="features">
      <div className="features-model">
        <img src={featureimage} alt="feature-image" />
      </div>
      <div className="features-text">
        <h2>Features</h2>
        <h3>
          This Application <span>Software</span> is Art
        </h3>
        <p>
          Learn and Master Coding: Interactive exercises for multiple
          programming languages. Step-by-step learning paths, video tutorials,
          and quizzes. Instant code correction and insightful suggestions. And
          much more!
        </p>
        <button>View More Features</button>
      </div>
    </div>
  );
}

export default Features;
