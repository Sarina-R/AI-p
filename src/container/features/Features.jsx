import React from "react";
import "./features.css";

const Features = ({ title, text }) => {
  return (
    <div className="feature">
      <div className="title">
        <div className="line" />
        <h2>{title}</h2>
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Features;
