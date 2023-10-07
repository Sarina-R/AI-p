import React from "react";
import "./whatG.css";
import Features from "../../components/feature/Features";
const WhatG = () => {
  return (
    <>
      <div className="section" id="wgpt3">
        <div className="up">
          <Features
            title="What is GPT-3"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          />
        </div>

        <div className="middle">
          <h2>The possibilities are beyond your imagination</h2>
          <p>Explore The Library</p>
        </div>

        <div className="down">
          <Features
            title="Knowledgebase"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          />
          <Features
            title="Education"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
          <Features
            title="Chatbots"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          />
        </div>
      </div>
    </>
  );
};

export default WhatG;
