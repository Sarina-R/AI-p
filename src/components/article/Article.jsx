import React from "react";
import "./article.css";

const Article = ({ title, date, img }) => {
  return (
    <div className="grid-a">
      <div className="img-a">
        <img src={img} />
      </div>

      <div className="text-container">
        <div>
          <p>{date}</p>
          <h2>{title}</h2>
        </div>
        <div>
          <p>Read Full Article</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
