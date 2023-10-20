import React from "react";
import "./signup.css";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillUnlock } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import womwn from "../../assets/women.png";

const Signup = () => {
  return (
    <div className="s-body">
      <section className="section-sign">
        <div className="login">
          <h1>Login</h1>
          <form className="form">
            <div className="input-icon">
              <input type="text" placeholder="Username" />
              <BsFillPersonFill className="icon" />
            </div>
            <div className="input-icon">
              <input type="password" placeholder="Password" />
              <AiFillUnlock className="icon" />
            </div>
          </form>
          <button className="btn">Login</button>
          <p>
            Don't have an account? <span>Sign Up</span>
          </p>
        </div>
        <div className="right-login">
          <img src={womwn} />
        </div>
      </section>
    </div>
  );
};

export default Signup;
