import React, { useState } from "react";
import "./popup.css";
import email from "../../../assets/email.png";
import { AiOutlineCloseCircle } from "react-icons/ai";

const PopUp = () => {
  const [showPopUp, setShowPopUp] = useState(true);
  const handleClick = () => {
    setShowPopUp(false);
  };
  return (
    <div className={showPopUp ? "popUp" : "noPop"}>
      <img src={email} />
      <h4>Your email has been sent. Thank you.</h4>
      <div className="icon">
        <AiOutlineCloseCircle onClick={handleClick} />
      </div>
    </div>
  );
};

export default PopUp;
