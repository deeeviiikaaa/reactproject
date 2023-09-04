import React from "react";

function Box(props) {
  return (
    <div className="s-box">
      <div className="s-b-img">
        <img src={props.image} alt="props.alte" />
      </div>
      <div className="s-b-text">
        <p>
          Master Python and Java effortlessly with our interactive learning
          platform! Dive into practical projects, receive instant coding
          feedback, and join a thriving community of developers. Start coding
          with confidence and take your skills to the next level today!
        </p>
        <a href="#" className="cv-btn">
          {props.button}
        </a>
      </div>
    </div>
  );
}

export default Box;
