import React, { useState } from "react";
import "./signup.css";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillUnlock } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import womwn from "../../assets/women.png";

const Signup = () => {
  const [toggleSign, setToggleSign] = useState(false);
  return (
    <div className="s-body">
      <section className="section-sign">
        {!toggleSign && (
          <div className="stuff">
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
                Don't have an account?{" "}
                <span
                  className="span"
                  onClick={() => setToggleSign(!toggleSign)}
                >
                  Sign Up
                </span>
              </p>
            </div>
            <div className="right-login">
              <img src={womwn} />
            </div>
          </div>
        )}

        {toggleSign && (
          <div className="stuff">
            <div className="login">
              <h1>Sign Up</h1>
              <form className="form">
                <div className="input-icon">
                  <input type="email" placeholder="Email" />
                  <MdEmail className="icon" />
                </div>
                <div className="input-icon">
                  <input type="text" placeholder="Username" />
                  <BsFillPersonFill className="icon" />
                </div>
                <div className="input-icon">
                  <input type="password" placeholder="Password" />
                  <AiFillUnlock className="icon" />
                </div>
              </form>
              <button className="btn">Sign Up</button>
              <p>
                Already have an account?
                <span
                  className="span"
                  onClick={() => setToggleSign(!toggleSign)}
                >
                  Login
                </span>
              </p>
            </div>
            <div className="right-login">
              <img src={womwn} />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Signup;
{
  /* <div className="input-icon">
  <input type="email" placeholder="Email" />
  <MdEmail className="icon" />
</div>; */
}
