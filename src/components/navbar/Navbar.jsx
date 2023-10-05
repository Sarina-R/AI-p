import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-link">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-link-container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is GPT?</a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
        <div>
          <div className="gpt3__navbar-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
          <div className="toggle">
            {toggleMenu ? (
              <RiCloseLine
                size={27}
                color="#fff"
                onClick={() => setToggleMenu(!toggleMenu)}
              />
            ) : (
              <RiMenu3Line
                size={27}
                color="#fff"
                onClick={() => setToggleMenu(!toggleMenu)}
              />
            )}
            {toggleMenu && (
              <div className="menu-container">
                <div className="menu-item">
                  <p>
                    <a href="#home">Home</a>
                  </p>
                  <p>
                    <a href="#wgpt3">What is GPT?</a>
                  </p>
                  <p>
                    <a href="#possibility">Open AI</a>
                  </p>
                  <p>
                    <a href="#features">Case Studies</a>
                  </p>
                  <p>
                    <a href="#blog">Library</a>
                  </p>
                </div>
                <div className="menu-sign">
                  <p>Sign in</p>
                  <button type="button">Sign up</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;