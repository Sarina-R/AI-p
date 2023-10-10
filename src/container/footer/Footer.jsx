import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

const footer = () => {
  return (
    <section className="section-f">
      <div className="top-f">
        <h1>Do you want to step in to the future before others</h1>
        <button type="button">Request Early Access</button>
      </div>
      <div className="bottom-f">
        <div className="left-f">
          <img src={logo} />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="right-f">
          <div className="right-f-a">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="right-f-b">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="right-f-c">
            <h4>Get in touch</h4>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>09938023855</p>
            <p>Sarinarezanezhad@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default footer;
