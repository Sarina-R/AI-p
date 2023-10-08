import React from "react";
import "./posibility.css";
import possibilityImage from "../../assets/possibility.png";
const Posibility = () => {
  return (
    <section className="section-p" id="possibility">
      <div className="left-p">
        <img src={possibilityImage} />
      </div>
      <div className="right">
        <p>Request Early Access to Get Started</p>
        <h1>The possibilities are beyond your imagination</h1>
        <p className="weight">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className="orange">Request Early Access to Get Started</p>
      </div>
    </section>
  );
};

export default Posibility;
