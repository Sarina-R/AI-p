import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <header>
      <div className="total">
        <div className="total-left">
          <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
          <p className="p">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div className="input">
            <input type="email" placeholder="your email address" />
            <button>get started</button>
          </div>
          <div className="request">
            <div className="request-img">
              <img src={people} />
            </div>
            <div className="request-text">
              <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
          </div>
        </div>
        <div className="total-right">
          <img src={ai} />
        </div>
      </div>
    </header>
  );
};

export default Header;
