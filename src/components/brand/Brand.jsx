import React from "react";
import "./brand.css";
import brand1 from "../../assets/google.png";
import brand2 from "../../assets/slack.png";
import brand3 from "../../assets/atlassian.png";
import brand4 from "../../assets/dropbox.png";
import brand5 from "../../assets/shopify.png";
const Brand = () => {
  return (
    <>
      <div className="brand">
        <div>
          <img src={brand1} />
        </div>
        <div>
          <img src={brand2} />
        </div>
        <div>
          <img src={brand3} />
        </div>
        <div>
          <img src={brand4} />
        </div>
        <div>
          <img src={brand5} />
        </div>
      </div>
    </>
  );
};

export default Brand;
